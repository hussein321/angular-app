import { Component, OnInit } from '@angular/core';
import {User} from '../User'
@Component({
  selector: 'app-hussein',
  templateUrl: './hussein.component.html',
  styleUrls: ['./hussein.component.css']
})
export class HusseinComponent implements OnInit {

  user:User;

  msg = "workkkkkkkk";
  showMess = false;
  users:User[];
  constructor() { 
   

    this.user = {
      name : "hdhd",
      age:"skadas",
      work:"fff"
    
    
    }
    this.users = [

      {
        name : "sara",
        age:"skadas",
        work:"fff"
      
      
      },
      {
        name : "rawan",
        age:"skadas",
        work:"fff"
      
      
      },
      {
        name : "Alaa",
        age:"skadas",
        work:"fff"
      
      
      },
      {
        name : "ahmed",
        age:"skadas",
        work:"fff"
      
      
      }


    ]
  }

  ngOnInit() {
    
  }

}


