import { Injectable } from "@angular/core";
import { ITask, createITask } from "../models/task.model";
@Injectable({
    providedIn: 'root'
})
export class TaskService {

    private Tasks: ITask[] = [];

    constructor() { }

    getAllTasks(): ITask[] {
        return this.Tasks;
    }
    removeTask(id: string): void {
        this.Tasks = this.Tasks.filter(task => task.id !== id);
    }


    addTask(task: ITask): void {
        this.Tasks.push(task);

    }


    updateTask(updatedTask: ITask): void {
        const index = this.Tasks.findIndex(task => task.id === updatedTask.id);
        if (index !== -1) {
            this.Tasks[index] = updatedTask;
        }
    }
}