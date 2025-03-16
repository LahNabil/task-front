import {Component, OnInit} from '@angular/core';
import {TaskService} from "../../services/task.service";
import {ActivatedRoute, Router} from "@angular/router";
import {TaskDto} from "../../../../models/TaskDto";

@Component({
  selector: 'app-manage-tasks',
  templateUrl: './manage-tasks.component.html',
  styleUrl: './manage-tasks.component.scss'
})
export class ManageTasksComponent implements OnInit{

  task: TaskDto = {title: '', description: ''};

  constructor(private taskService: TaskService, private router: Router, private activatedRoute: ActivatedRoute) {
  }
  ngOnInit(): void {
  }
  saveTask() {
    this.taskService.saveTask(this.task).subscribe({
      next: (res)=>{
        this.router.navigate(['/'])
      }
    })

  }

}
