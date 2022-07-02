import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeService } from '../employee.service';
import { EmployeeModel } from '../employeeModel';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit {

  // public response: Observable<EmployeeModel>;
  public response: any;
  public keys: string[] = [""];
  public emp: any;

  constructor(public service: EmployeeService) {
    // this.response= this.service.getPosts();
    this.service.getPosts().subscribe(data => {

      this.response = data;
      this.emp = this.response.data;
      this.keys = Object.keys(this.emp);

      console.log(this.emp);
      console.log(this.keys);
    });
  }

  ngOnInit(): void {
  }

}
