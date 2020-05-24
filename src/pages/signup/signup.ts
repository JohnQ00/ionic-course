import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Breed } from '../../types/breed';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  public totalExpenses: number;
  public breed: Breed;

  public name: string = '';
  public adress: string = '';
  public email: string = '';
  public date: string = new Date().toISOString();

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.breed = this.navParams.get('selectedBreed');
    this.totalExpenses = this.navParams.get('totalExpenses');
  }
  
  schedule(){
    console.log(this.name);
    console.log(this.adress);
    console.log(this.email);
    console.log(this.date);
  }

}
