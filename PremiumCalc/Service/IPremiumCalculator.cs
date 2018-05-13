using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PremiumCalc.Service
{
    public interface IPremiumCalculator
    {
        decimal CalculatePremium(int age, string gender);
    }
}
