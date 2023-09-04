import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {
  LeagueData! :any;
  
  

  constructor(private clientService: ClientService,
              private router: Router) { }

  getdataLeague(){
    this.clientService.getInfoLeague()
    .subscribe(data => {this.LeagueData = data});

  }

  gotLeagueDetails(league: { name: any; }){
    this.router.navigate(['/Match',league.name])
  }

  ngOnInit(): void {
    this.getdataLeague();
  }

}
