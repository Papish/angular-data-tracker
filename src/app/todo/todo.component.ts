import { Component } from '@angular/core';
import { Todo } from '../types';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent {
  title = 'angular-data-tracker';

  newTodo = new FormControl('');

  todos: Todo[] = [
    {
      id: 1,
      isCompleted: false,
      todo: 'Buy water',
    },
  ];

  get completedTask() {
    return this.todos.filter((todo) => todo.isCompleted).length;
  }

  get totalTask() {
    return this.todos.length;
  }

  addTodo() {
    this.todos.push({
      id: Math.floor(Math.random() * 1000),
      isCompleted: false,
      todo: this.newTodo.value || '',
    });
    this.newTodo.setValue('');
  }

  updateTodoStatus(id: number) {
    const index = this.todos.findIndex((todo) => todo.id === id);
    if (index !== -1) {
      this.todos[index].isCompleted = true;
    }
  }

  deleteTodo(id: number) {
    const index = this.todos.findIndex((todo) => todo.id === id);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }
}
