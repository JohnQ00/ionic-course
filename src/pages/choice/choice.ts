import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Breed } from '../../types/breed';
import { Characteristics } from '../../types/characteristics';
import { SignupPage } from '../signup/signup';

@IonicPage()
@Component({
  selector: 'page-choice',
  templateUrl: 'choice.html',
})
export class ChoicePage {

  public breed: Breed;
  public characteristics: Characteristics[];
  private totalExpenses: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.breed = this.navParams.get('selectedBreed');
    this.totalExpenses = this.breed.expense;
    this.characteristics = [
      {feature: 'Castrated', expense: 100},
      {feature: 'Vaccinated', expense: 250},
    ]
  }

  refreshTotal(active: boolean, characteristics: Characteristics) {
    console.log(this.totalExpenses);
    console.log(characteristics.expense);
    active ?
      this.totalExpenses += characteristics.expense :
      this.totalExpenses -= characteristics.expense; 
  }

  signUpEnter(){
    this.navCtrl.push(SignupPage.name, {
      selectedBreed: this.breed,
      totalExpenses: this.totalExpenses
    });
  }

  get showTotalExpenses() {
    return this.totalExpenses;
  }

}
