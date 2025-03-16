import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TaskDto} from "../../../../models/TaskDto";

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.scss'
})
export class TaskCardComponent {
  private _task: TaskDto = {};
  img: string = "https://cronuts.digital/wp-content/uploads/2023/12/6D03D.png"

 @Output() private archive: EventEmitter<TaskDto> = new EventEmitter<TaskDto>();
  get task(): TaskDto {
    return this._task;
  }

  @Input()
  set task(value: TaskDto) {
    this._task = value;
  }

  onArchive(){
    this.archive.emit(this._task);
  }

}
