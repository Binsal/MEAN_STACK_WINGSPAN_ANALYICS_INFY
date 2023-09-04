import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from 'src/app/client.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort,Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { matchData } from 'src/app/client';

@Component({
  selector: 'app-match-details',
  templateUrl: './match-details.component.html',
  styleUrls: ['./match-details.component.css']
})
export class MatchDetailsComponent implements AfterViewInit {
  ParticipantTeam!: any;
  id!: any;
  matches: matchData[]= [];
  matches1: matchData[]= [];
  columnName = ['date', 'season', 'home_team', 'away_team','home_team_goal','away_team_goal','result'];

  dataa!: any;
  MatchData1!: any;


  constructor(private route:ActivatedRoute,
              private clientService: ClientService) { }


  getParticipantData(){
    

    this.clientService.getInfoParticipantTeam()
    .subscribe(data => {this.ParticipantTeam = data})
  }

  
  getMatchData(){
    this.clientService.getInfoMatchData()
    .subscribe(data => {this.matches = data;
      console.log(this.matches);
      for (var i=0; i<this.matches.length; i++){
        if(this.matches[i].league == this.id){
            this.matches1.push(this.matches[i]);
        }
        
      }
      console.log(this.matches1);
      
    });
    


  
  }

  
  

  ngAfterViewInit(){
    this.getParticipantData();
    
    this.id = this.route.snapshot.paramMap.get('name');
    console.log(this.id);
    this.getMatchData();
   
    
  }

}
