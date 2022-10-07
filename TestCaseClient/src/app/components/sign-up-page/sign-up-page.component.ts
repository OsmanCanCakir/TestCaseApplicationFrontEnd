import { Component, OnInit } from '@angular/core';
import { HttpClientService } from 'src/app/services/common/http-client.service';


@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent implements OnInit {

  constructor(private httpClientService : HttpClientService) { }

  ngOnInit(): void {

    this.httpClientService.post({
      controller : "Users"
    },{

      Id :6,
      Name : "Osmancan",
      Surname : "Cakir",
      PhoneNumber : 4526556,
      EMail : "cakirosman9@outlook.com",
      Password : "deneme123"

    }).subscribe();


  }

}
