import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { match,teams,Country, League, ParticipantTeam, matchData, player, season, team_status } from './client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  
  clientData = "./assets/fifa15_players.csv";
  constructor(private http: HttpClient) { }

  getInfo() {
    return this.http.get(this.clientData,{responseType:'text'});
  }

  url = "./assets/match.json";
  getInfoes():Observable<match[]>{
    return this.http.get<match[]>(this.url).pipe(
      tap((data: any) => console.log('Data Fetched:' + JSON.stringify(data))));
    }

  teamTable = "./assets/clubName.json";
  getInfoTeam():Observable<teams[]>{
    return this.http.get<teams[]>(this.teamTable).pipe(
      tap((data: any) => console.log('Data Fetched:' + JSON.stringify(data))));
    }
  
  countryTable = "http://localhost:3300/country";
  getInfoCountry():Observable<Country[]>{
    return this.http.get<Country[]>(this.countryTable).pipe(
      tap((data: any) => console.log('Data Fetched:' + JSON.stringify(data))));
    }

  leagueTable = "http://localhost:3300/league";
  getInfoLeague():Observable<League[]>{
    return this.http.get<League[]>(this.leagueTable).pipe(
      tap((data: any) => console.log('Data Fetched:' + JSON.stringify(data))));
    }

  participantTeam = "http://localhost:3300/data_about_team_participate_in_perticular_league";
  getInfoParticipantTeam():Observable<ParticipantTeam[]>{
    return this.http.get<ParticipantTeam[]>(this.participantTeam).pipe(
      tap((data: any) => console.log('Data Fetched:' + JSON.stringify(data))));
    }

  MatchTable = "./assets/MatchData.json";
  getInfoMatchData():Observable<matchData[]>{
    return this.http.get<matchData[]>(this.MatchTable).pipe(
      tap((data: any) => console.log('Data Fetched:' + JSON.stringify(data))));
    }

  PlayerTeam = "http://localhost:3300/name_of_player_in_perticular_team";
  getInfoPlayerTeam():Observable<player[]>{
    return this.http.get<player[]>(this.PlayerTeam).pipe(
      tap((data: any) => console.log('Data Fetched:' + JSON.stringify(data))));
    }


  Season = "./assets/season.json";
  getInfoSeason():Observable<season[]>{
    return this.http.get<season[]>(this.Season).pipe(
      tap((data: any) => console.log('Data Fetched:' + JSON.stringify(data))));
    }

  team_status = "http://localhost:3300/team_stats";
  getInfoTeamStatus():Observable<team_status[]>{
    return this.http.get<team_status[]>(this.team_status).pipe(
      tap((data: any) => console.log('Data Fetched:' + JSON.stringify(data))));
    }





}
