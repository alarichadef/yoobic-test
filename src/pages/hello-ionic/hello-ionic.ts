import { Component } from '@angular/core';
import { MenuController } from 'ionic-angular';
import { ListPage } from '../list/list';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  constructor(  public menuCtrl: MenuController,public navCtrl: NavController) {
    this.menuCtrl.swipeEnable(false);
  }
  login(){
  	this.navCtrl.setRoot(ListPage);
  }

}
