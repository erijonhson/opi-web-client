<template>
  <section id="categories">
    <h1 class="section-title">Categorias</h1>
    <div class="uk-position-relative uk-margin-medium">
      <ul uk-tab="" class="uk-tab">
        <li class="uk-active"><a href="#">Iniciação 1</a></li>
        <li><a href="#">Iniciação 2</a></li>
        <li><a href="#">Programação</a></li>
        <li><a href="#">Avançado Júnior</a></li>
        <li><a href="#">Avançado Sênior</a></li>
      </ul>
      <ul class="uk-switcher uk-margin">
        <li class="uk-active">
          <!-- Iniciação 1 -->
          <p>
            Esta categoria se destina aos alunos do 1o ao 4o ano do ensino fundamental.
            Nas duas fases, a prova será composta por cerca de 20-25 questões de múltipla escolha.
            As questões envolverão raciocínio lógico e analítico envolvendo questões similares aos jogos de Sudoku.
            Veja exemplos de questões <a href="http://sudoku-download.net/" target="_blank">aqui</a>.
	          Cada escola será responsável por aplicar a prova da 1a e 2a fase. Al&eacute;m disso, será responsável pela correção das provas da 1a fase e deverá guardar todas as folhas de respostas at&eacute; o final do ano.
	          Serão classificados para a 2a fase pelo menos os 25% dos melhores alunos em cada escola que (i) realizarem a prova nessa categoria e (ii) não zerarem a prova.
            A nota final será a nota da 1a fase mais 20 vezes a nota da 2a fase.
	        </p>
        </li>
        <li>
          <!-- Iniciação 2 -->
          <p>
            Esta categoria se destina aos alunos do 5o ao 8o ano do ensino fundamental.
            Nas duas fases, a prova será composta por cerca de 20-30 questões de múltipla escolha.
            As questões envolverão raciocínio lógico e analítico.
            Esta prova corresponde a Modalidade Iniciação Nível 1 e 2 da Olimpíada Brasileira de Informática.
	          Uma subcategoria &eacute; exclusivamente destinada para alunos de escola pública.
	          Veja exemplos de questões <a href="http://olimpiada.ic.unicamp.br/pratique/iniciacao" target="_blank">aqui</a>.
	          Cada escola será responsável por aplicar a prova da 1a e 2a fase. Al&eacute;m disso, será responsável pela correção das provas da 1a fase e deverá guardar todas as folhas de respostas at&eacute; o final do ano.
	          Serão classificados para a 2a fase pelo menos os 25% dos melhores alunos em cada escola que (i) realizarem a prova nessa categoria e (ii) não zerarem a prova.
  	        A nota final será a nota da 1a fase mais 20 vezes a nota da 2a fase.
	        </p>
        </li>
        <li>
          <!-- Programação -->
          <p>
            Esta categoria se destina aos alunos do 9o ano do ensino fundamental e alunos do ensino médio.
            A prova desta categoria será composta por cerca de 5 problemas.
            As duas fases serão realizadas em laboratório com um computador por aluno similar a OBI.
            As questões envolverão conhecimento de técnicas básicas de programação, estruturas de dados básicas e algoritmos.
            Esta prova corresponde a Modalidade Programação da Olimpíada Brasileira de Informática.
            Veja exemplos de questões <a href="http://olimpiada.ic.unicamp.br/pratique/programacao" target="_blank">aqui</a>.
	          Cada escola será responsável por aplicar a prova da 1a e 2a fase. Al&eacute;m disso, será responsável pela correção das provas da 1a fase e deverá guardar todas as folhas de respostas at&eacute; o final do ano.
	          Serão classificados para a 2a fase pelo menos os 25% dos melhores alunos em cada escola que (i) realizarem a prova nessa categoria e (ii) não zerarem a prova.
  	        A nota final será a nota da 1a fase mais 20 vezes a nota da 2a fase. As duas fases seguirão o formato da OBI com correção após a prova.
	        </p>
        </li>
        <li>
          <!-- Avançado Júnior -->
          <p>
            Esta categoria se destina aos alunos que não tenham cursado ou estejam cursando a disciplina de Estrutura de Dados.
            A prova desta categoria será composta por cerca de 10 questões.
            Esta prova será similar a competição da ACM/ICPC.
            As linguagens permitidas serão: C, C++, Java, Pascal e Python.
            Cada equipe deve ser formada por 3 pessoas.
            Veja exemplos de questões <a href="http://maratona.ime.usp.br/" target="_blank">aqui</a>.
          </p>
        </li>
        <li>
          <!-- Avançado Sênior -->
          <p>
            Esta categoria se destina aos alunos que estejam cursando até o primeiro ano do mestrado.
            A prova desta categoria será composta por cerca de 10 questões.
            Esta prova será similar a competição da ACM/ICPC.
            As linguagens permitidas serão: C, C++, Java, Pascal e Python.
            Cada equipe deve ser formada por 3 pessoas.
            Veja exemplos de questões <a href="http://maratona.ime.usp.br/" target="_blank">aqui</a>.
          </p>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss">
  @import 'src/assets/app';

  #categories {
    @extend %section-padding;
  }
</style>
