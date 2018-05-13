using PremiumCalc.ViewModels;
using System;
using System.Collections.Generic;
using System.Text;

namespace PremiumCalc.Test
{
    public static class TestHelper
    {
        public static CustomerModel GetCustomer(string name, string gender, DateTime dob)
        {
            var _customerModel = new CustomerModel()
            {
                Name = name,
                Gender = gender,
                DateOfBirth = dob
            };

            return _customerModel;
        }
    }
}
