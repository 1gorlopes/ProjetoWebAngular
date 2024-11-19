import { Component } from '@angular/core';

@Component({
  selector: 'app-postagens',
  templateUrl: './postagens.component.html',
  styleUrls: ['./postagens.component.css']
})
export class PostagensComponent {
  postagens = [
    { titulo: 'Primeira Postagem', conteudo: 'Este é o conteúdo da primeira postagem.' },
    { titulo: 'Segunda Postagem', conteudo: 'Este é o conteúdo da segunda postagem.' }
  ];

  novaPostagem = { titulo: '', conteudo: '' };
  postagemEditando: any = null;

  // Função para adicionar uma nova postagem
  adicionarPostagem() {
    if (!this.postagemEditando) {
      this.postagens.push({ ...this.novaPostagem });
    } else {
      this.salvarEdicao();
    }
    
    this.novaPostagem = { titulo: '', conteudo: '' };  // Limpa o formulário
  }

  // Função para editar uma postagem
  editarPostagem(postagem: any) {
    this.postagemEditando = { ...postagem };
    this.novaPostagem = { ...postagem };
  }

  // Função para salvar as edições
  salvarEdicao() {
    const index = this.postagens.findIndex(p => p.titulo === this.postagemEditando.titulo);
    if (index !== -1) {
      this.postagens[index] = this.novaPostagem;
    }
    this.postagemEditando = null;
  }

  // Função para deletar uma postagem
  deletarPostagem(postagem: any) {
    this.postagens = this.postagens.filter(p => p !== postagem);
  }
}
