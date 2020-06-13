let result = document.querySelector('.result');
let word = document.querySelector('#word');
let form = document.querySelector('.form');

form.addEventListener('submit', e => {
  e.preventDefault();
  word1 = word.value;
  
  if (form.font.value === 'A') {
    result.classList.add('balsa');
    return result.textContent = word1;
    console.log(result.classList)
  }
  if (form.font.value === 'B') {
    result.classList.add('yanone');
    return result.textContent = word1;
  } 
  if (form.font.value === 'C' {
    result.classList.add('chelsea');
    return result.textContent = word1;
  }
})
