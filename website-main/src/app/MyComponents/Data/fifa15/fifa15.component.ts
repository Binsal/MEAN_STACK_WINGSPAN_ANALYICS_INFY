import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/client.service';

@Component({
  selector: 'app-fifa15',
  templateUrl: './fifa15.component.html',
  styleUrls: ['./fifa15.component.css']
})
export class Fifa15Component implements OnInit {
  clientData: any = [];
  csvData: any[][]=[];
  list1! :string[];
  list! :string[];

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.clientService.getInfo().subscribe(data=>{
      this.list = data.split('\n');
      for(var i=1;i<this.list.length;i++){
        this.list1 = this.list[i].split(',');
        this.csvData.push(this.list1)
      }
      this.list1 = this.list[0].split(',');
    
    });     
}
}
