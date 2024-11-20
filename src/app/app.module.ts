import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http'; // Importação adicionada

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemTesteComponent } from './item-teste/item-teste.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemOutputComponent } from './item-output/item-output.component';
import { CurriculosComponent } from './curriculos/curriculos.component';
import { PostagensComponent } from './postagens/postagens.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { EstatisticasComponent } from './estatisticas/estatisticas.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemTesteComponent,
    ItemDetailComponent,
    ItemOutputComponent,
    CurriculosComponent,
    PostagensComponent,
    CadastroComponent,
    EstatisticasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // Módulo adicionado
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
