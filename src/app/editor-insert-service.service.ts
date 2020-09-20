import { Injectable, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Task } from './tasks'



@Injectable({
  providedIn: 'root'
})
export class EditorInsertServiceService {

  private task:Task = null;
  private baseURL = "http://localhost:8080/";



  constructor(private http:HttpClient) { }

  changeAction(task:Task){
    this.task = task;
  }

  getAction(){
    return this.task;
  }

   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization':  btoa('username:password'),
      'Accept': 'application/json',
      'Access-Control-Allow-Origin':'*',  
      "Access-Control-Allow-Credentials":"true"
    })
  };

  createAndUpdateTask(task:Task) {
    return this.http
        .post<Task>(this.baseURL + 'addtask',JSON.stringify(task),this.httpOptions);
  }

  updateTask(task:Task){
    return this.http
        .put<Task>(this.baseURL + 'task/'+task.id,JSON.stringify(task),this.httpOptions);
  }

  fetchTask(){
    return this.http.get<Task[]>(this.baseURL+"getalltasks",this.httpOptions);
    
  }

  deleteTask(task:Task){
    return this.http.delete<Task>(this.baseURL+"task/"+task.id,this.httpOptions);
  }
}
