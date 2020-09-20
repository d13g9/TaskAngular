import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from './tasks';
import { EditorInsertServiceService } from './editor-insert-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [EditorInsertServiceService]
})
export class AppComponent {



  constructor(private editorinsertservice:EditorInsertServiceService){
    
  }

  

}
