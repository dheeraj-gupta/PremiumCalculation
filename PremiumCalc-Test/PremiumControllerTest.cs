using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using PremiumCalc.Controllers;
using PremiumCalc.Domain;
using PremiumCalc.Service;
using PremiumCalc.Test;
using PremiumCalc.ViewModels;
using System;

namespace PremiumCalc_Test
{
    [TestClass]
    public class PremiumControllerTest
    {
        private PremiumController _premiumController;
        private Mock<ILogger<PremiumController>> _logger;

        private Mock<IPremiumCalculator> _premiumCalculator;
        private Mock<IAgeCalculator> _ageCalculator;

        private CustomerModel _customerModel;

        private AppConfig _appConfig;

        [TestInitialize]
        public void setup()
        {
            _appConfig = new AppConfig()
            {
                MaleGenderFactor = "1.2",
                FeMaleGenderFactor = "1.1",
                MinAge = "18",
                MaxAge = "65",
                Multiplier = "100"
            };

            _logger = new Mock<ILogger<PremiumController>>();

            _premiumCalculator = new Mock<IPremiumCalculator>();
            _premiumCalculator.Setup(x => x.CalculatePremium(It.IsAny<int>(), It.IsAny<string>())).Returns(4320);
        }


        [TestMethod]
        public void post_withValidAge_ReturnsPremium()
        {
            //Arrange
            _ageCalculator = new Mock<IAgeCalculator>();

            _ageCalculator.Setup(y => y.CalcAge(It.IsAny<DateTime>(), It.IsAny<DateTime>())).Returns(36);

            _premiumController = new PremiumController(_premiumCalculator.Object, _ageCalculator.Object, _logger.Object, _appConfig);

            //Act
            _customerModel = TestHelper.GetCustomer("dheeraj", "male", new DateTime(1981, 10, 16));
             var resultObject = _premiumController.Post(_customerModel);
            var okResult = resultObject as OkObjectResult;
            //Assert
            Assert.IsNotNull(okResult);
            Assert.IsTrue(okResult.Value.ToString().ToLower()== "dheeraj, your premium amount is 4320.");
        }

        [TestMethod]
        public void post_withInValidAge_ReturnsWarningMessage()
        {
            //Arrange

            _ageCalculator = new Mock<IAgeCalculator>();

            _ageCalculator.Setup(y => y.CalcAge(It.IsAny<DateTime>(), It.IsAny<DateTime>())).Returns(10);

            _premiumController = new PremiumController(_premiumCalculator.Object, _ageCalculator.Object, _logger.Object, _appConfig);

            //Act
            _customerModel = TestHelper.GetCustomer("dheeraj", "male", new DateTime(2008, 10, 16));
            var resultObject = _premiumController.Post(_customerModel);
            var okResult = resultObject as OkObjectResult;
            //Assert
            Assert.IsNotNull(okResult);
            Assert.IsTrue(okResult.Value.ToString().ToLower()== "sorry dheeraj, we offer our services to person aged b/w 18 and 65.");
        }
    }
}
