import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrl: './app.component.css'
  styles : [
    `h3{
      color : dodgerblue;
    }
    .white-text{
      color: white;
    }`
  ]
})

export class AppComponent {
  name = 'Angular Course';
  showDetails = false;
  logs = [];
  
  onDetailToggle(){
    this.showDetails = true;
    this.logs.push(this.logs.length + 1);
  }
}
