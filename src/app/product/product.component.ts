import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    //HTTP post
    const req = this.http.put('url',
      {
        title: 'foo',
        body: 'bar',
        userId: 1
      })
      .subscribe(
        res => {
          console.log(res);
        },
        err =>{
          console.log("Error occured");
        }
      );

      this.http.delete("url/6").subscribe();
  }

}
