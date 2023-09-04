import { Component } from '@angular/core';
import { NavbarComponent } from "./MyComponents/navbar/navbar.component";
import { Fifa15Component } from "./MyComponents/Data/fifa15/fifa15.component";
import { HomeComponent } from "./MyComponents/Data/home/home.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'website';
  setting_tab!: string;
  match_tab!:string;

  // show the setting tab
  settingShow(i:string){
    this.setting_tab=i;
    console.log(this.setting_tab);
  }

  //show the matches
  matchesShow(i:string){
    this.match_tab=i;

  }

}
