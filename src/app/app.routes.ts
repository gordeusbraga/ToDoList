import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { TarefaNova } from './pages/tarefa-nova/tarefa-nova';
export const routes: Routes = [
    { path: '', component: Home },
    { path: 'tarefa-nova', component: TarefaNova }
];
