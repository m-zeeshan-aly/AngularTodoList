import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodosComponent } from "./Mycomponent/todos/todos.component";
import { NavbarComponent } from './Mycomponent/navbar/navbar.component';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodosComponent, NavbarComponent,NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'chw-todo-list';
}
