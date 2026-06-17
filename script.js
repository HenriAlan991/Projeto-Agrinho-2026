// AGRINHO 2026 - Site gamificado
// Tema: Agro forte, futuro sustentável

let pontos = 0;
let missaoAtual = 0;

const missoes = [
  {
    titulo: "🌱 Missão 1: Cuidar do solo",
    texto: "Use práticas sustentáveis para manter o solo fértil.",
    pontos: 10
  },
  {
    titulo: "💧 Missão 2: Economizar água",
    texto: "Proteja rios, nascentes e evite desperdício.",
    pontos: 15
  },
  {
    titulo: "🌳 Missão 3: Preservar o meio ambiente",
    texto: "Equilibre produção agrícola com preservação da natureza.",
    pontos: 20
  }
];

const perguntas = [
  {
    pergunta: "Qual atitude ajuda no equilíbrio entre produção e meio ambiente?",
    opcoes: [
      "Desmatar áreas protegidas",
      "Usar água sem controle",
      "Preservar nascentes e usar tecnologia sustentável"
    ],
    correta: 2
  },
  {
    pergunta: "A agricultura sustentável busca:",
    opcoes: [
      "Produzir sem destruir o meio ambiente",
      "Aumentar o lixo no campo",
      "Usar mais recursos naturais sem controle"
    ],
    correta: 0
  }
];

function iniciarSite() {
  atualizarPontos();
  mostrarMissao();
  mostrarQuiz();
}

function atualizarPontos() {
  const pontosElemento = document.getElementById("pontos");

  if (pontosElemento) {
    pontosElemento.textContent = pontos;
  }
}

function mostrarMissao() {
  const titulo = document.getElementById("missao-titulo");
  const texto = document.getElementById("missao-texto");

  if (!titulo || !texto) return;

  const missao = missoes[missaoAtual];

  titulo.textContent = missao.titulo;
  texto.textContent = missao.texto;
}

function concluirMissao() {
  const missao = missoes[missaoAtual];

  pontos += missao.pontos;
  missaoAtual++;

  if (missaoAtual >= missoes.length) {
    missaoAtual = 0;
    alert("🎉 Parabéns! Você completou todas as missões sustentáveis!");
  } else {
    alert(`✅ Missão concluída! Você ganhou ${missao.pontos} pontos.`);
  }

  atualizarPontos();
  mostrarMissao();
  atualizarBarraProgresso();
}

function atualizarBarraProgresso() {
  const barra = document.getElementById("barra-progresso");

  if (!barra) return;

  const progresso = Math.min((pontos / 100) * 100, 100);
  barra.style.width = progresso + "%";
}

function mostrarQuiz() {
  const areaQuiz = document.getElementById("quiz");

  if (!areaQuiz) return;

  areaQuiz.innerHTML = "";

  perguntas.forEach((item, index) => {
    const caixa = document.createElement("div");
    caixa.classList.add("pergunta");

    const titulo = document.createElement("h3");
    titulo.textContent = item.pergunta;

    caixa.appendChild(titulo);

    item.opcoes.forEach((opcao, opcaoIndex) => {
      const botao = document.createElement("button");
      botao.textContent = opcao;

      botao.onclick = () => responderQuiz(index, opcaoIndex);

      caixa.appendChild(botao);
    });

    areaQuiz.appendChild(caixa);
  });
}

function responderQuiz(perguntaIndex, respostaIndex) {
  const pergunta = perguntas[perguntaIndex];

  if (respostaIndex === pergunta.correta) {
    pontos += 10;
    alert("✅ Resposta certa! +10 pontos");
  } else {
    alert("❌ Resposta errada! Pense em uma atitude mais sustentável.");
  }

  atualizarPontos();
  atualizarBarraProgresso();
}

window.onload = iniciarSite;
