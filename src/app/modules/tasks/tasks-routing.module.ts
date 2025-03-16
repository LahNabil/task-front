import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./pages/main/main.component";
import {TasksListComponent} from "./pages/tasks-list/tasks-list.component";
import {ManageTasksComponent} from "./pages/manage-tasks/manage-tasks.component";

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: TasksListComponent
      },
      {
        path:'manage',
        component: ManageTasksComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
