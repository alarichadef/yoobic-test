import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http'; 
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { ChatPage } from '../pages/chat/chat';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ListServiceProvider } from '../providers/list-service/list-service';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { IonicStorageModule } from '@ionic/storage';
import { AngularFireDatabaseModule, AngularFireObject, AngularFireList } from 'angularfire2/database';

const config = {
    apiKey: "AIzaSyDwfQTg7Xx4mX-uT6Jlk3w_4osOr-rze3A",
    authDomain: "yoobic-6d2b6.firebaseapp.com",
    databaseURL: "https://yoobic-6d2b6.firebaseio.com",
    projectId: "yoobic-6d2b6",
    storageBucket: "yoobic-6d2b6.appspot.com",
    messagingSenderId: "1007902300154"
  };

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    ChatPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    IonicStorageModule.forRoot(),
    AngularFireDatabaseModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    ChatPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ListServiceProvider,
    HttpClientModule,
    HttpModule,
    AngularFireAuth,
  ]
})
export class AppModule {}
