const div = document.getElementById('link');

setInterval(changeBackground, 2000);

function changeBackground() {
  if(div.classList.contains('bg-blue')) {
    bgWhite();
  } else {
    bgBlue();
  }
}

const bgWhite = () => {
  div.classList.remove('bg-blue');
  div.classList.add('bg-white');
}

const bgBlue = () => {
  div.classList.remove('bg-white');
  div.classList.add('bg-blue');
} 