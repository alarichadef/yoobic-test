import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { ItemDetailsPage } from '../item-details/item-details';
import { ListServiceProvider } from '../../providers/list-service/list-service';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
     pokemons =[];
     items = [];
    constructor(public navCtrl: NavController, public navParams: NavParams,public menuCtrl: MenuController, public ListServiceProvider: ListServiceProvider) {
      this.menuCtrl.swipeEnable(true);
      this.loadPokemons();
      this.loadItems();
      this.nintendo = "pokemons";
    }


  loadPokemons(){
    for (var i = 0; i < 3; i++) {
      var c = Math.floor(Math.random() * 3) + 4;
      this.ListServiceProvider.load("pokemon",c)
      .then(data => {
        this.pokemons.push(
        data
        );
      });

    }
  }

  loadItems(){
    for (var i = 0; i < 3; i++) {
      var c = Math.floor(Math.random() * 800) + 1;
      this.ListServiceProvider.load("item",c)
      .then(data => {
        this.items.push(
        data
        );
      });
      console.log(this.items);
    }
  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }
}
