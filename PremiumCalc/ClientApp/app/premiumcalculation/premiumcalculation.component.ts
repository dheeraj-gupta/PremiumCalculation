import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { DatePipe } from '@angular/common';

@Component({

    templateUrl: './premiumcalculation.component.html'
})
export class PremiumCalcComponent {
   

    genderList = [
        { "Key": "SelectGender", "Value": "SelectGender" },
        { "Key": "Male", "Value": "Male" },
        { "Key": "Female", "Value": "Female" }
    ];
    displayPremiumSection = true;
    customer = { Gender: 'SelectGender', Name: '', DateOfBirth: '01/01/1920' };
    premiumInfo = '';
    errorMessage: string;
    constructor(private http: HttpClient) {
    }

    calculatePremium() {
        this.http.post('/api/Premium', this.customer)
            .subscribe(result => {
                this.premiumInfo = result as string;
                this.displayPremiumSection = !this.displayPremiumSection;

            }, (error: HttpErrorResponse) => {
                //HttpClient 'Http failure during parsing' error for valid json #18396
                //https://github.com/angular/angular/issues/18396 (use this code to read  calculate value  from web api)
                const JsonParseError = 'Http failure during parsing for';
                const matches = error.message.match(new RegExp(JsonParseError, 'ig'));

                if (error.status === 200 && matches.length === 1) {
                   
                    this.premiumInfo = error.error.text;  // returns sucessfull respone
                    this.displayPremiumSection = !this.displayPremiumSection;
                } else {
                    this.errorMessage = 'Ooops! we encountered some issues. Please come back and check it out later.';
                }
            });
    }
    recalculatePremium() {
        this.displayPremiumSection = !this.displayPremiumSection;
    }

   
}
