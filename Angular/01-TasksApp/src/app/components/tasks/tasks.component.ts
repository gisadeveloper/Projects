import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  taskList: Task[] = [];
  taskName = '';

  constructor() {}

  ngOnInit(): void {}

  addTask() {
    // create a task object
    const task: Task = {
      name: this.taskName,
      state: false,
    };

    // add the task object to the array
    this.taskList.push(task);

    this.resetForm();
  }

  resetForm() {
    // Reset Form
    this.taskName = '';
  }

  deleteTask(index: number): void {
    this.taskList.splice(index, 1);
  }

  updateTask(task: Task, index: number): void {
    this.taskList[index].state = !task.state;
  }
} // End Class
