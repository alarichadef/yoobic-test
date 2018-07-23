import { Component } from '@angular/core';
import { MenuController } from 'ionic-angular';
import { ListPage } from '../list/list';
import { NavController } from 'ionic-angular';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import { Storage } from '@ionic/storage';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  email: any;
  password: any;
  authForm: FormGroup
  
  constructor(public menuCtrl: MenuController,public navCtrl: NavController,public angfire: AngularFireAuth,public storage: Storage,public formBuilder: FormBuilder) {
    this.menuCtrl.swipeEnable(false);
  	
  	this.authForm = formBuilder.group({
            email: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(40)])],
            password: ['', Validators.compose([Validators.required, Validators.minLength(5)])]
      });

  }
  login(){
  	this.angfire.auth.signInWithEmailAndPassword(
     this.email,
     this.password
 	).then((response) => {
        console.log('Login success' + JSON.stringify(response));
        let currentuser = {
          email: response.user.email,
        };
        this.storage.set('username',currentuser.email);
        window.localStorage.setItem('username', currentuser.email);
        this.navCtrl.setRoot(ListPage);
      }).catch((error) => {
        console.log(error);
    })
  }

  onSubmit(value: any): void { 
        if(this.authForm.valid) {
        	this.login();
        }
    }   
}
