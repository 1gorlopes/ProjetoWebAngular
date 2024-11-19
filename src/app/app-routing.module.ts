import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurriculosComponent } from './curriculos/curriculos.component';
import { PostagensComponent } from './postagens/postagens.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { EstatisticasComponent } from './estatisticas/estatisticas.component';

const routes: Routes = [
  { path: 'curriculos', component: CurriculosComponent },
  { path: 'postagens', component: PostagensComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'estatisticas', component: EstatisticasComponent },
  { path: '', redirectTo: '/curriculos', pathMatch: 'full' } // Redireciona para a página de currículos ao abrir
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
