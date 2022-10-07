import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TestCaseClient';



  onCreateUsers(users : {txtName : string, txtSurname : string, txtPhoneNumber : number, txtEmail:string, txtPassword : string}){
      console.log(users);
  }
}



