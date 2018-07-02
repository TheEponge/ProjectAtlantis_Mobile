import { Component } from '@angular/core';

import { AlertController } from 'ionic-angular';
import { NavController } from "ionic-angular";
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
//import { Http } from '@angular/common/http';

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

  constructor(/*public http: Http,*/private theInAppBrowser: InAppBrowser,public navCtrl: NavController,public alertCtrl: AlertController) { }

  public openWithInAppBrowser(url : string){
      let target = "_blank";
      this.theInAppBrowser.create(url,target,this.options);

      /*this.theInAppBrowser.on("loadstart").subscribe(event=>{
        alert(event);
      });

      this.http.get('https://partners-login.eliotbylegrand.com/authorize?client_id=358ca400-fdf6-4357-8cca-27caa6699197&response_type=code&redirect_uri=https://login.microsoftonline.com/tfp/oauth2/nativeclient')
      .subscribe(data => {
          this.devices = data;
          console.log(data);
      });*/

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
