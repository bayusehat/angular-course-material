import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  isServerCreated = false;
  serverName = '';
  constructor(){
    setTimeout(()=>{
      this.allowNewServer = true;
    }, 2000)
  }
  ngOnInit(){
    
  }

  onCreateServer(){
    this.isServerCreated = true;
    this.serverCreationStatus = 'Server '+ this.serverName +' was created!';
  }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
