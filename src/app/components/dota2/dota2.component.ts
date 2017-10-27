import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dota2',
  templateUrl: './dota2.component.html',
  styleUrls: ['./dota2.component.css']
})
export class Dota2Component implements OnInit {

  private hero_name : string;
  private hero_type : string;
  private hero_skill:{
    skill1:string,
    skill2:string,
    skill3:string,
    skill4:string
  }


  constructor() { }

  ngOnInit() {
    this.hero_name = "Crystal Maiden"
    this.hero_type = "Int"
    this.hero_skill = {
      skill1:"Crystal Nova",
      skill2:"Frostbite",
      skill3:"Arcane Aura",
      skill4:"Freezing Field"
    }
  }

}
