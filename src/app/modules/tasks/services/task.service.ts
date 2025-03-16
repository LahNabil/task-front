import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { TaskDto } from '../../../models/TaskDto';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private _http: HttpClient) { }

  private baseUrl = environment.apiTask;

  getAllTasks(): Observable<TaskDto[]> {
    return this._http.get<TaskDto[]>(`${this.baseUrl}task/`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    return throwError('Something went wrong, please try again later.');
  }

  archiveTask(id: number | undefined) {
    return this._http.delete(`${this.baseUrl}task/${id}`, {})
  }

  saveTask(task: TaskDto):Observable<Object>{
    return this._http.post(`${this.baseUrl}task/`, task);
  }
}
