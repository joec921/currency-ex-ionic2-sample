import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {CurrencyService} from '../../providers/currency-service/currency-service';

@Component({
  templateUrl: 'build/pages/about/about.html',
  providers:[CurrencyService]
})
export class AboutPage {

  public currency:any;

  constructor(private navController: NavController,public currencyService:CurrencyService) {

      this.loadCurrencyData();

  }

  loadCurrencyData(){

      this.currencyService.load()
      .then(data =>{
      this.currency = data;
      console.log(this.currency);

      });

  }

}
