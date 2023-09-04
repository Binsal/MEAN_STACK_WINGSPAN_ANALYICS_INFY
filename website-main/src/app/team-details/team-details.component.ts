import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from '../client.service';


@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css']
})
export class TeamDetailsComponent implements OnInit {
  PlayerTeam!:any;
  id!: any;
  teamstatus!: any;

  constructor(private route:ActivatedRoute,
              private clientService:ClientService) { }

  getPlayerTeam(){
    this.clientService.getInfoPlayerTeam()
    .subscribe(data => {this.PlayerTeam = data});
  }

  getTeamStatus(){
    this.clientService.getInfoTeamStatus()
    .subscribe(data => {this.teamstatus = data});
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('team_long_name');
    console.log(this.id);
    this.getPlayerTeam();
    this.getTeamStatus();
  }

}
