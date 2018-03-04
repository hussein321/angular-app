import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hussein',
  templateUrl: './hussein.component.html',
  styleUrls: ['./hussein.component.css']
})
export class HusseinComponent implements OnInit {


  name = "ahmed";
  user = {
    name : "ali",
    age : 25,
    work : "it"
  }
  constructor() { 
    this.user.age = 32;
  }

  ngOnInit() {
    this.user.age = 33;
  }

}
