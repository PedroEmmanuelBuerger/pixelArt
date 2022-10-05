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
coresDaPaleta1.style.backgroundColor = 'black';

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
const cabecalho = document.getElementById('cabecalho');
cabecalho.appendChild(botaoReset);

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
  const listaDeBlocos = document.getElementsByClassName('pixel');

  if (cores !== null) {
    listaDeCores[1].style.backgroundColor = cores[0];
    listaDeCores[2].style.backgroundColor = cores[1];
    listaDeCores[3].style.backgroundColor = cores[2];


  }
};

// seção 3 - retornar cor ao inicio

const botao = document.getElementById('clear-board');
botao.innerText = 'Limpar';
botao.addEventListener('click', function(retornarBranco){
for (let i2 = 0; i2 <=localQuadro.length -1; i2 = i2 + 1){
localQuadro[i2].style.backgroundColor = 'white'
}
})

// seção 4 - criando o quadro
function quadro(valor1) {
  const container = document.getElementById('pixel-board');
  if (valor1 == 5 || valor1 == undefined) {
    for (let index = 0; index < 5; index = index + 1) {
      const divs2 = document.createElement('div');
      container.appendChild(divs2);
      for (let index3 = 0; index3 < 5; index3 = index3 + 1) {
       const divs = document.createElement('div');
        divs.setAttribute('class', 'pixel');
        container.appendChild(divs);
        divs.style.display = 'inline-block';
      }
    }
  }
};
quadro();

// seção 5 - selecionando cor
const coresAselecionar = document.getElementsByClassName('color');
const localPalete = document.getElementById('color-palette');
localPalete.addEventListener('click', function (evento) {
  if (evento.target != localPalete){
  for (let i = 0; i <= coresAselecionar.length -1; i = i + 1) {
    coresAselecionar[i].classList.remove('selected')}
  }
  if (evento.target != localPalete){evento.target.classList.add('color', 'selected')}
}
)

// seção 6 - pitando o quadro

const localQuadro = document.getElementsByClassName('pixel');

for (let index4 = 0; index4 <=localQuadro.length -1 ; index4 = index4 + 1){
localQuadro[index4].addEventListener('click', function(alterarCor){
alterarCor.target.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
}
)}
// seção 7 - salvando o quadro
let valor3 = ''
for (let rep = 0; rep <=1; rep = rep + 1){
document.querySelector('.pixel')
valor3 = document.querySelector('.pixel').style.backgroundColor
console.log(valor3)
};
