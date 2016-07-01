import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {CurrencyService} from '../../providers/currency-service/currency-service';

@Component({
  templateUrl: 'build/pages/home/home.html',
  providers:[CurrencyService]
})
export class HomePage {

    public currencyRates:any;

    public currencyAUD:String;
    public currencyHKD:String;
    public currencyEUR:String;
    public currencyJPY:String;
    public currencyBase:String;
    public currencyDate:Date;

  constructor(private navController: NavController,public currencyService:CurrencyService) {

          this.loadCurrencyData();
  }

  loadCurrencyData(){

      this.currencyService.load()
      .then(data =>{
      this.currencyRates = data;
      this.currencyDate = data.date;
      this.currencyBase = data.base;
      this.currencyHKD = this.currencyRates.rates.HKD;
      this.currencyEUR = this.currencyRates.rates.EUR;
      this.currencyAUD = this.currencyRates.rates.AUD;            
      this.currencyJPY = this.currencyRates.rates.JPY;         
      });

  }

}
