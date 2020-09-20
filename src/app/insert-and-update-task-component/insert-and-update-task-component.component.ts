import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { Task } from '../tasks';
import { EditorInsertServiceService } from '../editor-insert-service.service';

@Component({
  selector: 'app-insert-and-update-task-component',
  templateUrl: './insert-and-update-task-component.component.html',
  styleUrls: ['./insert-and-update-task-component.component.css']
})
export class InsertAndUpdateTaskComponentComponent implements OnInit {

  title = 'dw3test';
  mytask:Task;
  message:string;

  constructor(private editorinsertservice:EditorInsertServiceService) { 
    this.mytask = new Task();
    this.startupTask();
  }

  ngOnInit(): void {
    this.mytask = this.editorinsertservice.getAction();
    this.startupTask();
  }


  startupTask(){
    if(this.mytask == null){
      this.mytask = new Task();
    }

  }
   getFormValues(form:NgForm){
    this.mytask.tasktitle = form.value.tasktitle;
    this.mytask.taskdescription = form.value.taskdescription;
    this.mytask.status = form.value.status;
   }

  
  onSubmit( form:NgForm){
      if(this.mytask.id == null){
        this.getFormValues(form);
        this.mytask.status = "open";

        this.editorinsertservice.createAndUpdateTask(this.mytask).subscribe(responseData => {
          this.mytask = responseData;
       });;

       if(this.mytask != null && this.mytask.id === null)
          this.message = "There was a problem saving your task";
        else
          this.message = "Task saved successfully";

        
      }else{
        this.editorinsertservice.updateTask(this.mytask).subscribe(
          data => this.message = "Task saved successfully",
          error => {
                this.message = "There was a problem";
                console.log(error)
                }
          );
      }
        
  }

}
