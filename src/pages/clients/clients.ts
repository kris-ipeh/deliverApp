import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

// loader
import { Loader } from '../../providers/loader/loader';

// modèle pour Clients
class Client {
  id:number;
  nom:string;
  type:string;  // checkbox Particulier, Société, Assos, ...
  nomContact:string;
  adresse:string;
  codePostal:number;
  ville:string;
  tel:number;
  mail:string;
}

@Component({
  selector: 'page-clients',
  templateUrl: 'clients.html'
})

export class ClientsPage {
  // le modèle des clients
  client: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, private afAuth: AngularFireAuth, private dbAf: AngularFireDatabase, public loader: Loader) {

    this.client = dbAf.list('/clients');

  }

}
