import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Test App';
  test:string = 'okay';
  
  courses = [
    {name:'', course:''},
  ];

  onClick(){
    console.log('hello');

    this.courses.forEach(element => {
      
    });
  }

}
