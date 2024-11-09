import { Component, OnInit } from '@angular/core';
import { Todo } from '../../todo';
import { NgFor, NgIf } from '@angular/common';
import { TodoItemComponent } from "../todo-item/todo-item.component";
import { AddTodoComponent } from '../add-todo/add-todo.component';




@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [NgFor, TodoItemComponent,AddTodoComponent,NgIf],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit{
  localItem?;
  todos!: Todo[];
  constructor(){
    this.localItem = localStorage.getItem("todos");
    if (this.localItem==null){
      this.todos=[]
    }
    else{
      this.todos = JSON.parse(this.localItem)

    }


  }
  ngOnInit(): void {
    
  }

  deleteTodo(todo:Todo){
    const index = this.todos.indexOf(todo);
    this.todos.splice(index,1);
    console.log("delete to do",todo)
    localStorage.setItem("todos",JSON.stringify(this.todos))
  }
  addTodo(todo:Todo){
    this.todos.push(todo);
    console.log("add to todo",todo)
    localStorage.setItem("todos", JSON.stringify(this.todos))
  }

  toggleTodo(todo: any){
    const index = this.todos.indexOf(todo);
    console.log("toggle  to todo",todo)
    this.todos[index].active = !this.todos[index].active;
    console.log("toggle  to todo",todo)
    localStorage.setItem("todos", JSON.stringify(this.todos))
  }


}

