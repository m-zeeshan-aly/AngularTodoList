import { Routes } from '@angular/router';
import { AboutComponent } from './Mycomponent/about/about.component';
import { TodosComponent } from './Mycomponent/todos/todos.component';

export const routes: Routes = [
    { path: '', component: TodosComponent },
    { path: 'about', component: AboutComponent }
];
