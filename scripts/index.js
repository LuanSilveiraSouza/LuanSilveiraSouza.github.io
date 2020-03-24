setInterval(changeBackground, 2000);

function changeBackground() {
  const div = document.getElementById('link');

  if(div.classList.contains('bg-blue')) {
    div.classList.remove('bg-blue');
    div.classList.add('bg-white');
  } else {
    div.classList.remove('bg-white');
    div.classList.add('bg-blue');
  }
}