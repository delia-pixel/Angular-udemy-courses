import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  servercreationStatus = 'No server was created!';
  serverName = '';
  username = '';
  displayDetails = false;
  logList= [];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {}

  onCreateServer() {
    this.servercreationStatus =
      'Server was created! Name is ' + this.serverName;
  }
  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  resetInput(){
    this.username='';
  }

  onDisplayDetails() { 
    // this.logList.push(this.logList.length + 1);
    this.logList.push(new Date());
    console.log(this.logList);
    
    this.displayDetails=!this.displayDetails;
  }


}
