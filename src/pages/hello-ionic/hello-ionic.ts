import { Component } from '@angular/core';

import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  constructor(public alertCtrl: AlertController) { }

  loginPrompt(){

    const prompt = this.alertCtrl.create({
      title: 'Login',
      inputs: [
        {
          name: 'Username',
          placeholder: 'Username'
        },
        {
          name: 'Password',
          placeholder: 'Password',
          type: 'password'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Sign in',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();

  }
}
