import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { ListTaskComponent } from './components/list-task/list-task.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TaskPageComponent } from './components/task-page/task-page.component';


@NgModule({
  declarations: [
    AddTaskComponent,
    ListTaskComponent,
    TaskPageComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    ReactiveFormsModule
  ]
})
export class TasksModule { }
