import { Component, OnInit } from '@angular/core';
//importamos el servicio de tareas 'task'
import { TaskService } from 'src/app/services/task.service';
//importamos la interface de task
import { Task } from '../../Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks: any) => {
      this.tasks = tasks;
    });
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe(() => {
      this.tasks = this.tasks.filter(t => t.id !== task.id);
    })
    // console.log(task);
  }

  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    console.log(task.reminder);
    this.taskService.updateTaskReminder(task).subscribe();
  }

  addTask(task: Task) {
    // console.log(task);
    this.taskService.addTask(task).subscribe((task: any) => { 
      this.tasks.push(task);
    });
  }
} 
