// Selecionando o body inteiro e adicionando um escutador de evento de teclado.
document.body.addEventListener('keyup', (event) => {
    playSound(event.code.toLowerCase());
});

// Selecionando o elemento button e adicionando um escutador de evento de click.
document.querySelector('.composer button').addEventListener('click', () => {
    // Pegando os valores do elemento input e jogando na variável song.
    let song = document.querySelector('#input').value;

    // Se song for diferente de vazio...
    if(song !== '') {
        // Criando um array com a função 'split' dos valores passados pra song e jogando na variável songArray.
        let songArray = song.split('');
        // Chamando a função playComposition.
        playComposition(songArray);
    }
});

// Essa função vai tocar o som
function playSound (sound){
    // Pegando o elemento onde esta o audio
    let audioElement = document.querySelector(`#s_${sound}`);
    // Pegando o elemento que representa a letra tocada
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);

    // Se o audio for encontrado, execute o audio com a função play().
    if(audioElement) {
        audioElement.currentTime = 0;
        audioElement.play();
    }

    // Se o elemento for encontrado, adicione a classe 'active' ao elemento.
    if(keyElement) {
        keyElement.classList.add('active');

        // Após adicionar classe ao elemento, execute a função setTimeout que após 300 millisegundos irá remover a classe 'active'.
        setTimeout(() => {
            keyElement.classList.remove('active');
        }, 500);
    }
}

// Função que irá tocar o som que foi passado no input
function playComposition(songArray) {
    // Variável que será responsável por informar o tempo de execução do loop
    let wait = 0;

    // Loop na variável songArray que se tornou um array.
    for (let songItem of songArray) {
        // Quando começar o loop no array, execute a função setTimeout que vai chamar a função playSound que tocará o som após o tempo que está setado na variável wait
        setTimeout(() => {
            playSound(`key${songItem}`);
        }, wait);

        // Após executar o loop, adicione 250 millisegundos a variável wait
        wait += 250;
    };
}