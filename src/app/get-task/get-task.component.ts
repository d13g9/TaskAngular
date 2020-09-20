import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

import { Task } from '../tasks';
import { EditorInsertServiceService } from '../editor-insert-service.service';



@Component({
  selector: 'app-get-task',
  templateUrl: './get-task.component.html',
  styleUrls: ['./get-task.component.css']
})
export class GetTaskComponent implements OnInit {
  message = "";
  tasks : Task[] = [];

  constructor(private editorinsertservice:EditorInsertServiceService, private router: Router) { }

  ngOnInit(): void {
    this.editorinsertservice.fetchTask().subscribe(postData => {
        this.tasks = postData;
    });
    
    if(this.tasks.length == 0)
    this.message = "There was no Data to load!!";
      
  }

  updateTask(id:number){
    var taske = this.tasks.find(task => task.id === id);
    console.log("Edit task status"+taske.status);
    this.editorinsertservice.changeAction(taske);
    this.router.navigate(['/insertOrEditTask']);
  }

  deleteTask(id:number){
    var taske = this.tasks.find(task => task.id === id);
    console.log("Edit task status"+taske.status);
    this.editorinsertservice.deleteTask(taske).subscribe(
      data => {
            this.message = "Task deleted";
            this.ngOnInit();
        },
      error => {
        this.message = "there was an error",
        console.log(error)
      }
    )
    
  }


}
