import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './MyComponents/navbar/navbar.component';
import { Fifa15Component } from './MyComponents/Data/fifa15/fifa15.component';
import { HomeComponent } from './MyComponents/Data/home/home.component';
import { FooterComponent } from './MyComponents/Footer/footer/footer.component';
import { SettingsComponent } from './MyComponents/Data/Settings/settings/settings.component';
import { ClientService } from './client.service';
import { MatCardModule} from '@angular/material/card';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TeamDetailsComponent } from './team-details/team-details.component';
import { MatchComponent } from './MyComponents/match/match.component';
import { MatchDetailsComponent } from './MyComponents/match-details/match-details.component';
import { MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { SeasonComponent } from './MyComponents/Data/season/season.component';
import { LeagueComponent } from './MyComponents/Data/season/league/league.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    Fifa15Component,
    HomeComponent,
    FooterComponent,
    SettingsComponent,
    PageNotFoundComponent,
    TeamDetailsComponent,
    MatchComponent,
    MatchDetailsComponent,
    SeasonComponent,
    LeagueComponent
    
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSliderModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FormsModule
    
  ],
  providers: [ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
