import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { ListTaskComponent } from './components/list-task/list-task.component';
import { TaskPageComponent } from './components/task-page/task-page.component';

const routes: Routes = [
  {path: "", component: TaskPageComponent},
  {path: "add", component: AddTaskComponent},
  {path: "list", component: ListTaskComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
