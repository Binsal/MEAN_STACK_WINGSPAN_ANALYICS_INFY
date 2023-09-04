import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/client.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.css']
})
export class LeagueComponent implements OnInit {
  LeagueData!: any;
  id!: any;

  constructor(private clientService: ClientService,
    private router: Router,
    private route:ActivatedRoute,) { }

getdataLeague(){
this.clientService.getInfoLeague()
.subscribe(data => {this.LeagueData = data});

}

gotLeagueDetails(league: { name: any; }){
this.router.navigate(['/season/'+this.id,league.name])
}

ngOnInit(): void {
  this.id = this.route.snapshot.paramMap.get('Season');
  console.log(this.id);
  this.getdataLeague();
}

}
