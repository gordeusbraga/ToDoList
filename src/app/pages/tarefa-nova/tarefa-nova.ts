import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { createITask, ITask } from '../../models/task.model';
import { CommonModule } from '@angular/common';
import { Header } from '../../components/header/header';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tarefa-nova',
  imports: [Header, CommonModule, FormsModule],
  templateUrl: './tarefa-nova.html',
  styleUrl: './tarefa-nova.css',
})
export class TarefaNova {


  newTask: ITask = createITask();

  currentDate: Date = new Date();
  tasks: ITask[] = [];
  constructor(private router: Router, private taskService: TaskService) {

    this.tasks = this.taskService.getAllTasks();
  }

  saveTask() {

    this.newTask.id = new Date().getTime().toString();
    this.taskService.addTask(this.newTask);
    this.router.navigate(['/']);
  }
  setCategory(category: string): void {
    this.newTask.category = category;
  }



}