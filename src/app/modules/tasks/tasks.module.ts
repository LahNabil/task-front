import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './pages/main/main.component';
import { TasksListComponent } from './pages/tasks-list/tasks-list.component';
import {HttpClientModule} from "@angular/common/http";
import { TaskCardComponent } from './components/task-card/task-card.component';
import { ManageTasksComponent } from './pages/manage-tasks/manage-tasks.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    HeaderComponent,
    MainComponent,
    TasksListComponent,
    TaskCardComponent,
    ManageTasksComponent
  ],
    imports: [
        CommonModule,
        TasksRoutingModule,
        HttpClientModule,
        FormsModule
    ]
})
export class TasksModule { }
