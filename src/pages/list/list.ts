import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { ItemDetailsPage } from '../item-details/item-details';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  devices: any;

  constructor(public http: Http,public alertCtrl: AlertController,public actionsheetCtrl: ActionSheetController,public navCtrl: NavController, public navParams: NavParams) {

    this.http.get('http://10.167.129.210:15080/RESTModuleRemote/api/mobile/getDevices/1')
        .map(res => res.json()).subscribe(data => {
        this.devices = data;
    });

  }

  deviceTapped(event, device) {
    this.navCtrl.push(ItemDetailsPage, {
      device: device
    });
  }

  addDevicePrompt(){

    const prompt = this.alertCtrl.create({
      title: 'Add Device',
      message: "Enter Blablabla",
      inputs: [
        {
          name: 'input',
          placeholder: 'Input'
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
          text: 'Save',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();

  }

  openMenu() {
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Device options',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            console.log('Delete clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          icon: 'close',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
}
