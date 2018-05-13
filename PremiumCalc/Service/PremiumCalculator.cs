using Microsoft.Extensions.Logging;
using PremiumCalc.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PremiumCalc.Service
{
    public class PremiumCalculator : IPremiumCalculator
    {

        private readonly ILogger<PremiumCalculator> _logger;
        private AppConfig _appConfig;

        public PremiumCalculator(ILogger<PremiumCalculator> logger, AppConfig appConfig)
        {
            _logger = logger;
            _appConfig = appConfig;
        }


        public decimal CalculatePremium(int age, string gender)
        {
            decimal result = 0;
            try
            {
                //Get the multiplier
                decimal.TryParse(_appConfig.Multiplier, out decimal multiplier);

                //Get genderFactorValue
                string genderFactorValue = (gender.ToLower() == "male" ? _appConfig.MaleGenderFactor : _appConfig.FeMaleGenderFactor);

                decimal.TryParse(genderFactorValue, out decimal genderFactor);

                result = age * genderFactor * multiplier;
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to Calculate Premium: {ex.Message}");
            }

            return result;
        }

    }
}
