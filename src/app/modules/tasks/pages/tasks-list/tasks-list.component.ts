import {Component, OnInit} from '@angular/core';
import {TaskService} from "../../services/task.service";
import {Router} from "@angular/router";
import {TaskDto} from "../../../../models/TaskDto";

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.scss'
})
export class TasksListComponent implements OnInit{
  allTasks: TaskDto[] = []

  constructor(private taskService: TaskService, private router: Router) {
  }
  ngOnInit() {
    this.getAllTasks();
  }
  private getAllTasks(){
    this.taskService.getAllTasks().subscribe((data: TaskDto[])=>{
      this.allTasks = data;
    })
  }

  archiveTask(task: TaskDto) {
      const isConfirmed = window.confirm("Are you sure ?");
      if (isConfirmed) {
        this.taskService.archiveTask(task.id).subscribe({
          next: () => {
            window.location.reload();
          },
          error: (err) => {
            console.error('Error archiving department:', err);
          }
        });
      }
    }

}
