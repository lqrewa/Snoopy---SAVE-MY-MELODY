function iniciarJogo() {

    let som = document.getElementById('som-chuva');
    if(som) som.play();

    document.getElementById('menu').style.display = 'none';
    document.getElementById('tela-jogo').style.display = 'flex';
}

function mostrarMapa() {
    document.getElementById('tela-jogo').style.display = 'none';
    document.getElementById('tela-mapa').style.display = 'flex';
}

function voltarParaQuiz() {
    document.getElementById('tela-mapa').style.display = 'none';
    document.getElementById('tela-jogo').style.display = 'flex';
}