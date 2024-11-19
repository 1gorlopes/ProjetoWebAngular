import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  usuario = {
    nome: '',
    email: '',
    profissao: '',
    resumo: '',
    experiencia: [] as any[],
    educacao: [] as any[],
    habilidadesString: '',
    habilidades: [] as string[]
  };

  imagemSelecionada: File | null = null;
  imagemPreview: string | ArrayBuffer | null = null;
  submitted = false;

  dadosCadastrados = {
    nome: '',
    email: '',
    profissao: '',
    resumo: '',
    experiencia: [] as any[],
    educacao: [] as any[],
    habilidades: [] as string[],
    imagem: ''
  };

  // Adicionar nova experiência
  adicionarExperiencia() {
    this.usuario.experiencia.push({ cargo: '', empresa: '', duracao: '', descricao: '' });
  }

  removerExperiencia(index: number) {
    this.usuario.experiencia.splice(index, 1);
  }

  // Adicionar nova educação
  adicionarEducacao() {
    this.usuario.educacao.push({ curso: '', instituicao: '', anoConclusao: '' });
  }

  removerEducacao(index: number) {
    this.usuario.educacao.splice(index, 1);
  }

  // Capturar o arquivo selecionado
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.imagemSelecionada = file;

      const reader = new FileReader();
      reader.onload = () => {
        this.imagemPreview = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  // Enviar o formulário
  onSubmit() {
    this.usuario.habilidades = this.usuario.habilidadesString.split(',').map(h => h.trim());

    this.dadosCadastrados = {
      nome: this.usuario.nome,
      email: this.usuario.email,
      profissao: this.usuario.profissao,
      resumo: this.usuario.resumo,
      experiencia: [...this.usuario.experiencia],
      educacao: [...this.usuario.educacao],
      habilidades: [...this.usuario.habilidades],
      imagem: this.imagemPreview ? this.imagemPreview.toString() : ''
    };

    this.submitted = true;
    this.resetForm();
  }

  // Resetar o formulário
  resetForm() {
    this.usuario = {
      nome: '',
      email: '',
      profissao: '',
      resumo: '',
      experiencia: [],
      educacao: [],
      habilidadesString: '',
      habilidades: []
    };
    this.imagemSelecionada = null;
    this.imagemPreview = null;
    this.submitted = false;
  }
}
