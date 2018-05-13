using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PremiumCalc.Domain
{
    public class AppConfig
    {
        public string MaleGenderFactor { get; set; }
        public string FeMaleGenderFactor { get; set; }
        public string MinAge { get; set; }
        public string MaxAge { get; set; }
        public string Multiplier { get; set; }
    }
}
