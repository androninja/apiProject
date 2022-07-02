import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Product } from './product';
import { UserResponse } from './userResponse';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'apiProject';
  results='';

  constructor(private http:HttpClient) {

  }

  ngOnInit():void{

    this.http.get('https://api.github.com/users/abdullah').toPromise()
    .then((data:any)=>
    {
        console.log(data);
    });
    console.log('hey');
    this.http.get<UserResponse>('https://api.github.com/users/abdullah').subscribe(
      data=>{
        console.log("User login: " + data.company);
    });
    this.http.get<Product>('https://reqres.in/api/products/3').subscribe(
      data=>{
        console.log(data.support.text);
        console.log(data.data.color);
      });
  }
}
