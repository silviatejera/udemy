import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'app-servers', // by element
 // selector: '[app-servers]', // by atributes
  //selector: '.app-servers', //by class
  //template: '<app-server></app-server><app-server></app-server>',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit(): void {
  }

}
