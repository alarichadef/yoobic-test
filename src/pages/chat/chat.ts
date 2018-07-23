import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,Content } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import * as firebase from 'Firebase';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
 	
 	@ViewChild(Content) content: Content;

	username: any;
	messages = [];
	data = { type:'', username:'', message:'' };
	
	constructor(public navCtrl: NavController, public navParams: NavParams,public menuCtrl: 	MenuController, public storage: Storage) {
		this.menuCtrl.swipeEnable(true);
	    this.data.type = 'message';
	    this.username = window.localStorage.getItem('username');
	    this.data.username = this.username;
	    let joinData = firebase.database().ref('chat').push();
	    joinData.set({
	      type:'join',
	      user:this.username,
	      message:this.username+' has joined this room.',
	      sendDate:Date()
	    });
	    this.data.message = '';
	    firebase.database().ref('chat').on('value', resp => {
	      this.messages = snapshotToArray(resp);
	  	  this.content.scrollToBottom(300);
  		});

	}

	sendMessage() {
	    let newData = firebase.database().ref('chat').push();
	    newData.set({
	      type:this.data.type,
	      user:this.data.username,
	      message:this.data.message,
	      sendDate:Date()
	    });
	    this.data.message = '';
  }


	ionViewWillLeave(){
		let exitData = firebase.database().ref('chat').push();
		exitData.set({
	      type:'exit',
	      user:this.username,
	      message:this.username+' has exited this room.',
	      sendDate:Date()
	    });
	}

	
}

export const snapshotToArray = snapshot => {
	    let returnArr = [];

	    snapshot.forEach(childSnapshot => {
	        let item = childSnapshot.val();
	        item.key = childSnapshot.key;
	        returnArr.push(item);
	    });

	    return returnArr;
	};
