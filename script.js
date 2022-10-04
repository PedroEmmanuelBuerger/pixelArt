// seção 1 - criando paletas
const paletaDeCores = document.getElementById('color-palette');
const coresDaPaleta1 = document.createElement('div');
const coresDaPaleta2 = document.createElement('div');
const coresDaPaleta3 = document.createElement('div');
const coresDaPaleta4 = document.createElement('div');
coresDaPaleta1.setAttribute('class', 'color');
coresDaPaleta2.setAttribute('class', 'color');
coresDaPaleta3.setAttribute('class', 'color');
coresDaPaleta4.setAttribute('class', 'color');
coresDaPaleta1.setAttribute('id', 'black');
coresDaPaleta2.setAttribute('id', 'cor1');
coresDaPaleta3.setAttribute('id', 'cor2');
coresDaPaleta4.setAttribute('id', 'cor3');
paletaDeCores.appendChild(coresDaPaleta1); paletaDeCores.appendChild(coresDaPaleta2); paletaDeCores.appendChild(coresDaPaleta3); paletaDeCores.appendChild(coresDaPaleta4);

// seção 2 - criando botão
let arrayDeCores = ['blue', 'red', 'green', 'gray', 'yellow', 'orange', 'purple', 'pink'];

const corpo = document.body;
const botaoReset = document.createElement('button');
botaoReset.innerHTML = 'Cores aleatórias';
botaoReset.setAttribute('id', 'button-random-color');
corpo.appendChild(botaoReset);

function randomizer() {
for (let index = 0; index <= 3; index = index + 1){
coresDaPaleta2.style.backgroundColor = arrayDeCores[Math.floor(Math.random() * 9)]
coresDaPaleta3.style.backgroundColor = arrayDeCores[Math.floor(Math.random() * 9)]
coresDaPaleta4.style.backgroundColor = arrayDeCores[Math.floor(Math.random() * 9)]
}
}
botaoReset.addEventListener('click', randomizer);
