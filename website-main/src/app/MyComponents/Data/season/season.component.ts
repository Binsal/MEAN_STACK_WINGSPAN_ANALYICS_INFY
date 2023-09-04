import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/client.service';

@Component({
  selector: 'app-season',
  templateUrl: './season.component.html',
  styleUrls: ['./season.component.css']
})
export class SeasonComponent implements OnInit {
  Season!: any;

  constructor(private clientService: ClientService,
    private router: Router) { }

  getdataSeason(){
    this.clientService.getInfoSeason()
    .subscribe(data => {this.Season = data});
   console.log(this.Season);
  }

  gotTeamDetails(season: { Season: any; }){
      this.router.navigate(['/season',season.Season])
  }


  ngOnInit(): void {
    this.getdataSeason();
  }

}
