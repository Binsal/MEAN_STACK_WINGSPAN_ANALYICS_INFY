import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  @Output() onClick = new EventEmitter<string>();
  @Output() onMatch = new EventEmitter<string>();

  setting_click() {
    this.onClick.emit("True");
  }

  match_click() {
    this.onMatch.emit("True");
  }


  ngOnInit(): void {
    
  }

}
