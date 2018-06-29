import { Component } from '@angular/core';

import { AlertController } from 'ionic-angular';
import { NavController } from "ionic-angular";
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';

import { ListPage } from '../list/list';
import { MetricsPage } from '../metrics/metrics';
import { EmployeePage } from '../employee/employee';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {

  options : InAppBrowserOptions = {
    location : 'yes',//Or 'no'
    hidden : 'no', //Or  'yes'
    clearcache : 'yes',
    clearsessioncache : 'yes',
    zoom : 'yes',//Android only ,shows browser zoom controls
    hardwareback : 'yes',
    mediaPlaybackRequiresUserAction : 'no',
    shouldPauseOnSuspend : 'no', //Android only
    closebuttoncaption : 'Close', //iOS only
    disallowoverscroll : 'no', //iOS only
    toolbar : 'yes', //iOS only
    enableViewportScale : 'no', //iOS only
    allowInlineMediaPlayback : 'no',//iOS only
    presentationstyle : 'pagesheet',//iOS only
    fullscreen : 'yes',//Windows only
};

  constructor(private theInAppBrowser: InAppBrowser,public navCtrl: NavController,public alertCtrl: AlertController) { }

  public openWithInAppBrowser(url : string){
      let target = "_blank";
      this.theInAppBrowser.create(url,target,this.options);
  }

  goListPage(): void {
     this.navCtrl.push(ListPage);
  }
  goMetricsPage(): void {
     this.navCtrl.push(MetricsPage);
  }
  goEmployeePage(): void {
     this.navCtrl.push(EmployeePage);
  }

}
