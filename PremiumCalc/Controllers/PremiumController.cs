using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using PremiumCalc.Domain;
using PremiumCalc.Service;
using PremiumCalc.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace PremiumCalc.Controllers
{
    [Route("api/[Controller]")]
    public class PremiumController : Controller
    {
        private readonly IPremiumCalculator _premiumCalculator;
        private readonly IAgeCalculator _ageCalculator;
        private readonly ILogger<PremiumController> _logger;
        private AppConfig _appConfig;

        public PremiumController(IPremiumCalculator premiumCalculator, IAgeCalculator ageCalculator,
            ILogger<PremiumController> logger, AppConfig appConfig)
        {
            _premiumCalculator = premiumCalculator;
            _ageCalculator = ageCalculator;
            _logger = logger;
            _appConfig = appConfig;
        }

        [HttpPost]
        [ProducesResponseType(typeof(string), (int)HttpStatusCode.OK)]
        public IActionResult Post([FromBody]CustomerModel model)
        {
            string output = string.Empty;
            try
            {
                if (ModelState.IsValid)
                {
                    int age = _ageCalculator.CalcAge(model.DateOfBirth, DateTime.Now);

                    int.TryParse(_appConfig.MinAge, out int minAge);
                    int.TryParse(_appConfig.MaxAge, out int maxAge);

                    if (age >= minAge && age <= maxAge)
                    {
                        decimal premium = _premiumCalculator.CalculatePremium(age,model.Gender);
                        output = $"{model.Name}, your premium amount is {premium}.";
                    }
                    else
                    {
                        output = $"Sorry {model.Name}, we offer our services to person aged b/w 18 and 65.";
                    }
                }
                else
                {
                    return BadRequest(ModelState);
                }
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to Calculate Premium: {ex}");
                return BadRequest("Failed to Calculate Premium");
            }

            return Ok(output);
        }
    }
}
