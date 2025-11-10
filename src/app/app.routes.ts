import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { TarefaNova } from './pages/tarefa-nova/tarefa-nova';
import { TarefaAtualizada } from './pages/tarefa-atualizada/tarefa-atualizada';
export const routes: Routes = [
    { path: '', component: Home },
    { path: 'tarefa-nova', component: TarefaNova },
    { path: 'tarefa-atualizada/:id', component: TarefaAtualizada }
];
