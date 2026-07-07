// ==========================================================
// home.js
// Script da página inicial (index.html).
//
// A ideia deste arquivo é simples: existe uma "lista de receitas"
// (o array `receitas` logo abaixo) e o script monta automaticamente
// um cartão (card) em HTML para cada receita da lista.
//
// PARA ADICIONAR UMA NOVA RECEITA NO FUTURO:
// 1) Crie a página da nova receita (ex.: feijao-tropeiro.html),
//    copiando a estrutura de pao-de-queijo.html.
// 2) Adicione um novo objeto aqui no array `receitas`, com os
//    dados da nova receita.
// Não é necessário alterar o HTML da página inicial: o cartão
// aparece sozinho na tela.
// ==========================================================

const receitas = [
  {
    titulo: "Pão de Queijo",
    resumo: "Um clássico mineiro, crocante por fora e macio por dentro, feito com polvilho e queijo.",
    imagem: "./img/pao-de-queijo.png",
    link: "./pao-de-queijo.html"
  }

  // Exemplo de como cadastrar a próxima receita (basta descomentar e editar):
  // ,{
  //   titulo: "Feijão Tropeiro",
  //   resumo: "Prato típico de Minas Gerais com feijão, bacon, linguiça, ovos e farinha de mandioca.",
  //   imagem: "./img/feijao-tropeiro.png",
  //   link: "./feijao-tropeiro.html"
  // }
];

// Pega o elemento <section id="lista-receitas"> que existe no index.html.
// É dentro dele que os cartões serão inseridos.
const container = document.getElementById("lista-receitas");

// Se não houver nenhuma receita cadastrada, mostra um aviso amigável
// em vez de deixar a página em branco.
if (receitas.length === 0) {
  container.innerHTML = "<p class='vazio'>Nenhuma receita cadastrada ainda. Volte em breve! 🍞</p>";
} else {
  // Para cada receita do array, cria um <a> (link) que funciona como cartão
  // clicável, contendo imagem, título, resumo e um "Ver receita".
  receitas.forEach((receita) => {
    const card = document.createElement("a");
    card.className = "card-receita";
    card.href = receita.link;

    card.innerHTML = `
      <img class="card-imagem" src="${receita.imagem}" alt="Imagem de ${receita.titulo}">
      <div class="card-conteudo">
        <h2>${receita.titulo}</h2>
        <p>${receita.resumo}</p>
        <span class="card-link">Ver receita →</span>
      </div>
    `;

    container.appendChild(card);
  });
}
