import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { GetTaskComponent } from './get-task/get-task.component';
import { Routes, RouterModule } from '@angular/router';
import { InsertAndUpdateTaskComponentComponent } from './insert-and-update-task-component/insert-and-update-task-component.component';

const appRoutes: Routes = [
  {path: 'getTasks', component:GetTaskComponent},
  {path: 'insertOrEditTask', component:InsertAndUpdateTaskComponentComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    GetTaskComponent,
    InsertAndUpdateTaskComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
