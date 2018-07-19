import { Component } from '@angular/core';
import { MenuController } from 'ionic-angular';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  constructor(  public menuCtrl: MenuController) {
    this.menuCtrl.swipeEnable(false);

  }


 }
