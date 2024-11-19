// curriculos.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-curriculos',
  templateUrl: './curriculos.component.html',
  styleUrls: ['./curriculos.component.css']
})
export class CurriculosComponent {
  usuarios = [
    {
      nome: 'João Silva',
      email: 'joao.silva@email.com',
      profissao: 'Engenheiro',
      resumo: 'Profissional com experiência em engenharia civil, especializado em gestão de projetos.',
      experiencia: [
        { cargo: 'Engenheiro Sênior', empresa: 'Construtora XYZ', duracao: '2018 - 2023', descricao: 'Liderança de projetos de infraestrutura.' },
        { cargo: 'Engenheiro Júnior', empresa: 'Construtora ABC', duracao: '2015 - 2018', descricao: 'Assistência em projetos residenciais.' }
      ],
      educacao: [
        { instituicao: 'Universidade Federal', curso: 'Engenharia Civil', anoConclusao: 2015 }
      ],
      habilidades: ['AutoCAD', 'Gestão de Projetos', 'Comunicação']
    },
    {
      nome: 'Ana Oliveira',
      email: 'ana.oliveira@email.com',
      profissao: 'Desenvolvedora de Software',
      resumo: 'Desenvolvedora apaixonada por tecnologia e inovação, especializada em backend.',
      experiencia: [
        { cargo: 'Desenvolvedora Full Stack', empresa: 'Tech Solutions', duracao: '2019 - Presente', descricao: 'Desenvolvimento e manutenção de sistemas web.' },
        { cargo: 'Estagiária em TI', empresa: 'SoftWare House', duracao: '2017 - 2019', descricao: 'Suporte e manutenção de sistemas internos.' }
      ],
      educacao: [
        { instituicao: 'Instituto de Tecnologia', curso: 'Ciência da Computação', anoConclusao: 2019 }
      ],
      habilidades: ['Java', 'Spring', 'MySQL', 'Python']
    },
    {
      nome: 'Carlos Mendes',
      email: 'carlos.mendes@email.com',
      profissao: 'Analista de Dados',
      resumo: 'Analista com experiência em extração e análise de dados para apoio à decisão.',
      experiencia: [
        { cargo: 'Analista de Dados', empresa: 'Data Insight', duracao: '2021 - Presente', descricao: 'Análise e visualização de dados para insights estratégicos.' },
        { cargo: 'Estagiário de Dados', empresa: 'Big Data Co.', duracao: '2020 - 2021', descricao: 'Limpeza e organização de grandes volumes de dados.' }
      ],
      educacao: [
        { instituicao: 'Universidade de Estatística', curso: 'Estatística', anoConclusao: 2020 }
      ],
      habilidades: ['SQL', 'Python', 'Power BI', 'Excel']
    },
    {
      nome: 'Mariana Souza',
      email: 'mariana.souza@email.com',
      profissao: 'Designer Gráfico',
      resumo: 'Designer gráfico com foco em criação de identidades visuais e interfaces de usuário.',
      experiencia: [
        { cargo: 'Designer Gráfico', empresa: 'Agência Criativa', duracao: '2018 - Presente', descricao: 'Criação de logotipos, materiais gráficos e layouts para web.' },
        { cargo: 'Assistente de Design', empresa: 'Estúdio Criativo', duracao: '2016 - 2018', descricao: 'Auxílio na produção de materiais gráficos para eventos.' }
      ],
      educacao: [
        { instituicao: 'Faculdade de Belas Artes', curso: 'Design Gráfico', anoConclusao: 2016 }
      ],
      habilidades: ['Photoshop', 'Illustrator', 'Figma', 'InDesign']
    },
    {
      nome: 'Ricardo Pereira',
      email: 'ricardo.pereira@email.com',
      profissao: 'Gerente de Projetos',
      resumo: 'Gerente de projetos com experiência em metodologias ágeis e gestão de equipes multidisciplinares.',
      experiencia: [
        { cargo: 'Gerente de Projetos', empresa: 'Inova Consultoria', duracao: '2018 - Presente', descricao: 'Liderança de projetos de consultoria em TI.' },
        { cargo: 'Analista de Projetos', empresa: 'Empresa X', duracao: '2015 - 2018', descricao: 'Acompanhamento e controle de cronogramas e orçamentos.' }
      ],
      educacao: [
        { instituicao: 'Universidade de Gestão', curso: 'Administração', anoConclusao: 2015 }
      ],
      habilidades: ['Scrum', 'Kanban', 'Planejamento Estratégico', 'MS Project']
    },
    {
      nome: 'Juliana Costa',
      email: 'juliana.costa@email.com',
      profissao: 'Consultora de Marketing',
      resumo: 'Especialista em marketing digital, com foco em estratégias de conteúdo e SEO.',
      experiencia: [
        { cargo: 'Consultora de Marketing', empresa: 'Agência Digital', duracao: '2019 - Presente', descricao: 'Planejamento e execução de estratégias de marketing digital.' },
        { cargo: 'Analista de SEO', empresa: 'E-commerce Z', duracao: '2017 - 2019', descricao: 'Otimização de conteúdo para motores de busca.' }
      ],
      educacao: [
        { instituicao: 'Universidade de Marketing', curso: 'Marketing', anoConclusao: 2017 }
      ],
      habilidades: ['SEO', 'Google Analytics', 'Conteúdo', 'Ads']
    },
    {
      nome: 'Fernando Ribeiro',
      email: 'fernando.ribeiro@email.com',
      profissao: 'Arquiteto',
      resumo: 'Arquiteto focado em sustentabilidade e soluções urbanas inovadoras.',
      experiencia: [
        { cargo: 'Arquiteto Pleno', empresa: 'Studio Arquitetura', duracao: '2018 - Presente', descricao: 'Projetos arquitetônicos de grande porte.' },
        { cargo: 'Assistente de Arquitetura', empresa: 'Construtora L&L', duracao: '2015 - 2018', descricao: 'Elaboração de maquetes e desenhos técnicos.' }
      ],
      educacao: [
        { instituicao: 'Faculdade de Arquitetura', curso: 'Arquitetura e Urbanismo', anoConclusao: 2015 }
      ],
      habilidades: ['AutoCAD', 'SketchUp', 'Sustentabilidade', 'Projeto Urbano']
    },
    {
      nome: 'Luciana Azevedo',
      email: 'luciana.azevedo@email.com',
      profissao: 'Psicóloga',
      resumo: 'Psicóloga clínica com especialização em terapia cognitivo-comportamental.',
      experiencia: [
        { cargo: 'Psicóloga Clínica', empresa: 'Clínica XYZ', duracao: '2017 - Presente', descricao: 'Atendimento terapêutico para adultos e adolescentes.' },
        { cargo: 'Estagiária de Psicologia', empresa: 'Centro de Apoio', duracao: '2015 - 2017', descricao: 'Atendimento supervisionado em clínica-escola.' }
      ],
      educacao: [
        { instituicao: 'Universidade de Psicologia', curso: 'Psicologia', anoConclusao: 2017 }
      ],
      habilidades: ['Terapia Cognitivo-Comportamental', 'Empatia', 'Comunicação']
    },
    {
      nome: 'Paulo Almeida',
      email: 'paulo.almeida@email.com',
      profissao: 'Professor de Matemática',
      resumo: 'Professor com experiência em ensino fundamental e médio, especializado em preparação para vestibulares.',
      experiencia: [
        { cargo: 'Professor de Matemática', empresa: 'Escola XYZ', duracao: '2015 - Presente', descricao: 'Ensino de matemática para alunos do ensino médio.' }
      ],
      educacao: [
        { instituicao: 'Universidade de Matemática', curso: 'Licenciatura em Matemática', anoConclusao: 2015 }
      ],
      habilidades: ['Didática', 'Pacote Office', 'Resolução de Problemas']
    },
    {
      nome: 'Camila Nogueira',
      email: 'camila.nogueira@email.com',
      profissao: 'Bióloga',
      resumo: 'Bióloga especializada em ecologia marinha e conservação ambiental.',
      experiencia: [
        { cargo: 'Pesquisadora', empresa: 'Instituto Oceanográfico', duracao: '2018 - Presente', descricao: 'Pesquisa e conservação da vida marinha.' },
        { cargo: 'Assistente de Pesquisa', empresa: 'Laboratório Ambiental', duracao: '2016 - 2018', descricao: 'Coleta e análise de amostras ambientais.' }
      ],
      educacao: [
        { instituicao: 'Universidade de Biologia', curso: 'Biologia', anoConclusao: 2016 }
      ],
      habilidades: ['Ecologia Marinha', 'Pesquisa Científica', 'Análise de Dados']
    }
  ];
  

  usuarioEditando: any = null;

  editarUsuario(usuario: any) {
    this.usuarioEditando = { ...usuario };
  }

  salvarEdicao() {
    const index = this.usuarios.findIndex(u => u.email === this.usuarioEditando.email);
    if (index !== -1) {
      this.usuarios[index] = this.usuarioEditando;
    }
    this.usuarioEditando = null;
  }

  cancelarEdicao() {
    this.usuarioEditando = null;
  }

  deletarUsuario(usuario: any) {
    this.usuarios = this.usuarios.filter(u => u !== usuario);
  }
}
