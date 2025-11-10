import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TaskService } from '../../services/task.service';
import { ITask, createITask } from '../../models/task.model';
import { Header } from '../../components/header/header';

@Component({
  selector: 'app-tarefa-atualizada',
  standalone: true,
  imports: [CommonModule, FormsModule, Header],
  templateUrl: './tarefa-atualizada.html',
  styleUrls: ['./tarefa-atualizada.css']
})
export class TarefaAtualizada implements OnInit {


  taskToUpdate: ITask = createITask();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private taskService: TaskService
  ) { }


  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');

    if (id) {

      const existingTask = this.taskService.getTaskById(id);

      if (existingTask) {

        this.taskToUpdate = { ...existingTask };
      } else {

        this.router.navigate(['/']);
      }
    } else {
      this.router.navigate(['/']);
    }
  }


  updateTask(): void {
    this.taskService.updateTask(this.taskToUpdate);
    this.router.navigate(['/']);
  }


  setCategory(category: string): void {
    this.taskToUpdate.category = category;
  }
}