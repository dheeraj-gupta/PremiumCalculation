using Microsoft.Extensions.Logging;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using PremiumCalc.Domain;
using PremiumCalc.Service;
using System;
using System.Collections.Generic;
using System.Text;

namespace PremiumCalc.Test
{
    [TestClass]
    public class PremiumCalculatorTest
    {
        private PremiumCalculator _premiumCalculator;
        private Mock<ILogger<PremiumCalculator>> _logger;

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

            _logger = new Mock<ILogger<PremiumCalculator>>();
            
        }

        [TestMethod]
        public void calculatePremium_withValidAgeAndGenderAsMale_ReturnsValidPremium()
        {
            //Arrange
            _premiumCalculator = new PremiumCalculator(_logger.Object,_appConfig);
            //Act

            var resultObject = _premiumCalculator.CalculatePremium(36, "male");
            //Assert

            Assert.IsTrue(resultObject == 4320);
        }

        [TestMethod]
        public void calculatePremium_withValidAgeAndGenderAsFemale_ReturnsValidPremium()
        {
            //Arrange
            _premiumCalculator = new PremiumCalculator(_logger.Object, _appConfig);
            //Act

            var resultObject = _premiumCalculator.CalculatePremium(36, "female");
            //Assert

            Assert.IsTrue(resultObject == 3960);
        }
    }
}
