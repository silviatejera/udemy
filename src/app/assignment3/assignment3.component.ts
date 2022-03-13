import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  // styleUrls: ['./assignment3.component.css']
  styles: [`
    .whiteText{
       color : white;
    }
    ul{
      list-style-type: none;
    }
    `]
})
export class Assignment3Component implements OnInit {

  displayDetails: boolean = false;
  clicks = [];

  constructor() { }

  ngOnInit(): void {
  }

  onDetailsClick(){
    this.displayDetails = true;
    this.clicks.push(new Date());
  }

  getColor(pos: number){
    return pos > 3? 'blue': 'none';
  }

}
