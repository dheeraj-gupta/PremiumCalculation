using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PremiumCalc.Service
{
    public interface IAgeCalculator
    {
        int CalcAge(DateTime date1, DateTime date2);
    }
}
