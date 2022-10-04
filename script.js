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
paletaDeCores.appendChild(coresDaPaleta1);
paletaDeCores.appendChild(coresDaPaleta2);
paletaDeCores.appendChild(coresDaPaleta3);
paletaDeCores.appendChild(coresDaPaleta4);

// seção 2 - criando botão
const arrayDeCores = ['blue', 'red', 'green', 'gray', 'yellow', 'orange', 'purple', 'pink'];
const corpo = document.body;
const botaoReset = document.createElement('button');
botaoReset.innerHTML = 'Cores aleatórias';
botaoReset.setAttribute('id', 'button-random-color');
corpo.appendChild(botaoReset);

function randomizer() {
  const cor1 = arrayDeCores[Math.floor(Math.random() * 9)];
  const cor2 = arrayDeCores[Math.floor(Math.random() * 9)];
  const cor3 = arrayDeCores[Math.floor(Math.random() * 9)];
  coresDaPaleta2.style.backgroundColor = cor1;
  coresDaPaleta3.style.backgroundColor = cor2;
  coresDaPaleta4.style.backgroundColor = cor3;
  const cores = [cor1, cor2, cor3];
  localStorage.setItem('colorPalette', JSON.stringify(cores));
}
botaoReset.addEventListener('click', randomizer);


window.onload = function () {
    coresDaPaleta2.style.backgroundColor = 'red';
    coresDaPaleta3.style.backgroundColor = 'blue';
    coresDaPaleta4.style.backgroundColor = 'green';
    const listaDeCores = document.getElementsByClassName('color');
    const cores = JSON.parse(localStorage.getItem('colorPalette'));
    listaDeCores[1].style.backgroundColor = cores[0]
    listaDeCores[2].style.backgroundColor = cores[1]
    listaDeCores[3].style.backgroundColor = cores[2]
};