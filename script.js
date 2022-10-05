// seção 1 - criando paletas
const paletaDeCores = document.getElementById('color-palette');
const coresDaPaleta1 = document.createElement('div');
const coresDaPaleta2 = document.createElement('div');
const coresDaPaleta3 = document.createElement('div');
const coresDaPaleta4 = document.createElement('div');
coresDaPaleta2.setAttribute('class', 'color');
coresDaPaleta3.setAttribute('class', 'color');
coresDaPaleta4.setAttribute('class', 'color');
coresDaPaleta1.setAttribute('id', 'black');
coresDaPaleta2.style.backgroundColor = 'red';
coresDaPaleta3.style.backgroundColor = 'blue';
coresDaPaleta4.style.backgroundColor = 'green';
paletaDeCores.appendChild(coresDaPaleta1);
paletaDeCores.appendChild(coresDaPaleta2);
paletaDeCores.appendChild(coresDaPaleta3);
paletaDeCores.appendChild(coresDaPaleta4);
const corPreta = document.getElementById('black');
corPreta.classList.add('color', 'selected');

// seção 2 - criando botão
const arrayDeCores = ['blue', 'red', 'green', 'gray', 'yellow', 'orange', 'purple', 'pink', 'gold', 'brown', 'coral', 'chocolate', 'cyan', 'hotPink', 'LawnGreen'];
const corpo = document.body;
const botaoReset = document.createElement('button');
botaoReset.innerHTML = 'Cores aleatórias';
botaoReset.setAttribute('id', 'button-random-color');
corpo.appendChild(botaoReset);

function randomizer() {
  const cor1 = arrayDeCores[Math.floor(Math.random() * 15)];
  const cor2 = arrayDeCores[Math.floor(Math.random() * 15)];
  const cor3 = arrayDeCores[Math.floor(Math.random() * 15)];

  coresDaPaleta2.style.backgroundColor = cor1;
  coresDaPaleta3.style.backgroundColor = cor2;
  coresDaPaleta4.style.backgroundColor = cor3;

  const cores = [cor1, cor2, cor3];
  localStorage.setItem('colorPalette', JSON.stringify(cores));
}
botaoReset.addEventListener('click', randomizer);


window.onload = function () {
  const listaDeCores = document.getElementsByClassName('color');
  const cores = JSON.parse(localStorage.getItem('colorPalette'));
  if (cores !== null) {
    listaDeCores[1].style.backgroundColor = cores[0];
    listaDeCores[2].style.backgroundColor = cores[1];
    listaDeCores[3].style.backgroundColor = cores[2];
  }
};

// seção 3 - criando o quadro
function quadro(valor1) {
  let quadrados = document.createElement('section')
  corpo.appendChild(quadrados);
  container = document.createElement('div')
  quadrados.appendChild(container)
  container.setAttribute('id', 'pixel-board')


  if (valor1 == 5 || valor1 == undefined) {
    for (let index = 0; index < 5; index = index + 1) {
      let divs = document.createElement('div')
      container.appendChild(divs)
      for (let index3 = 0; index3 < 5; index3 = index3 + 1) {
        let divs = document.createElement('div')
        divs.setAttribute('class', 'pixel')
        container.appendChild(divs)
        divs.style.display = 'inline-block'
      }
    }
  }
  else for (let index2 = 0; index2 <= valor1 - 1; index2 = index2 + 1) {
    let divs = document.createElement('div')
    divs.setAttribute('class', 'pixel')
    container.appendChild(divs)
  }
};
quadro();

// seção 4 - selecionando cor
const coresAselecionar = document.getElementsByClassName('color');
const localPalete = document.getElementById('color-palette');
localPalete.addEventListener('click', function (evento) {
  for (let i = 0; i <= coresAselecionar.length -1; i = i + 1) {
    coresAselecionar[i].classList.remove('selected')
  }
  evento.target.classList.add('color', 'selected')
}
)
