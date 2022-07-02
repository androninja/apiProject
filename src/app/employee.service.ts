import { Injectable } from '@angular/core';
import { EmployeeModel } from './employeeModel';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) {

  }
  public getPosts(): Observable<EmployeeModel> {
    return this.http.get<EmployeeModel>('https://dummy.restapiexample.com/api/v1/employee/4');
  }
}
