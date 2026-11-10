
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo.html',
  styleUrl: './todo.css',
})
export class Todo {

  newTask: string = '';

  tasks: any[] = [];

  addTask() {

    if (this.newTask.trim() === '') {
      alert('Please enter a task');
      return;
    }

    const task = {
      id: Date.now(),
      title: this.newTask,
      completed: false
    };

    this.tasks.push(task);

    this.newTask = '';
  }

  deleteTask(id: number) {

    this.tasks = this.tasks.filter(
      task => task.id !== id
    );

  }

  completeTask(task: any) {

    task.completed = !task.completed;

  }

}
