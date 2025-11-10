import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { ITask } from '../../models/task.model';
import { CommonModule, DatePipe } from '@angular/common';
import { Header } from '../../components/header/header';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-home',
  imports: [CommonModule, DatePipe, Header, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  tasks: ITask[] = [];

  currentDate = new Date();

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.tasks = this.taskService.getAllTasks();
  }

  deleteTask(id: string): void {
    this.taskService.removeTask(id);
    this.loadTasks();
  }


}
