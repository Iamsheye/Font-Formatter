let result = document.querySelector('.result');
let word = document.querySelector('#word');
let form = document.querySelector('.form');

form.addEventListener('submit', e => {
  e.preventDefault();
  word = word.value;
  
  if (form.font.value === 'A') {
    result.classList.add('balsa');
    return result.textContent = word;
    console.log(result.classList)
  } else if (form.font.value === 'B') {
    result.classList.add('yanone');
    return result.textContent = word;
  } else {
    result.classList.add('chelsea');
    return result.textContent = word;
  }
})