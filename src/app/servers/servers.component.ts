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
  serverCreationStatus = 'No server was created';
  serverName = 'TestServer';
  username = '';
  emtpyUsername :boolean = true;
  serverCreated :boolean = false;
  servers = ['TestServer', 'TestServer 2'];

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
    this.serverCreated = true;
  }

  onUpdateServerName(event: any){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onClearUserNme(){
    this.username = '';
    this.emtpyUsername = true;
  }

  onUserNameChange(event){
    this.emtpyUsername = event.target.value.length==0;
  }

}
