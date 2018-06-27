import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { Platform, ActionSheetController } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public actionsheetCtrl: ActionSheetController,public navCtrl: NavController, public navParams: NavParams) {

    this.items = [];
    for(let i = 1; i < 8; i++) {
      this.items.push({
        title: 'Device ' + i,
        note: 'This is item #' + i,
        icon: 'cog'
      });
    }
  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
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
