import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { Breed } from '../../types/breed';
import { HttpClient} from '@angular/common/http';
import { BreedsServiceProvider } from '../../providers/breeds-service/breeds-service';
import { NavLifecycles } from '../../utils/ionic/nav/nav-lifecycles';
import { ChoicePage } from '../choice/choice';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements NavLifecycles{

  public breeds: Breed[];

  constructor(public navCtrl: NavController, 
    private _http: HttpClient,
    private _loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private _breedProvider: BreedsServiceProvider) {}

  ionViewDidLoad(){

    let loading = this._loadingCtrl.create({
      content: 'Please, wait...'
    });    

    loading.present();

    // this._http.get<Breed[]>("file:///home/john/database.html")
    //  .subscribe(
    //    (breeds) => {
    //      this.breeds = breeds;
    //    }
    //  )

    this.breeds = [
      {name: "Pinscher", age: 10, image: '../../assets/imgs/dogs/pinscher.jpeg', expense: 200},
      {name: "Pug", age: 8, image: '../../assets/imgs/dogs/pug.jpeg', expense: 200},
      {name: "Golden Retriever", age: 11, image: '../../assets/imgs/dogs/goldenretriever.jpeg', expense: 350},
      {name: "Bulldog", age: 1, image: '../../assets/imgs/dogs/bulldog.jpeg', expense: 250},
      {name: "Pitbull", age: 3, image: '../../assets/imgs/dogs/pitbull.jpeg', expense: 500},
      {name: "Sphynx", age: 2, image: '../../assets/imgs/cats/sphynx.jpeg', expense: 125},
      {name: "Maine Coon", age: 5,  image: '../../assets/imgs/cats/mainecoon.jpeg', expense: 125},
      {name: "Ragdoll", age: 6,  image: '../../assets/imgs/cats/ragdoll.jpeg', expense: 125},
      {name: "Siamese", age: 13,  image: '../../assets/imgs/cats/siamese.jpeg', expense: 125},
      {name: "Persian", age: 2,  image: '../../assets/imgs/cats/persian.jpeg', expense: 150}
    ];

    loading.dismiss();
  }

  selectBreed(breed: Breed){
    console.log(breed);
    this.navCtrl.push(ChoicePage.name, {
      selectedBreed: breed
    });
  }

}
