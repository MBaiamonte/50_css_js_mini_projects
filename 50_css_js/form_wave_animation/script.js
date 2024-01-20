const labels = document.querySelectorAll('.form-control label')

labels.forEach(label =>{
    label.innerHTML = label.innerText
    .split('') //splits each labels letters/characters into an array for manipulation
    .map((letter, index)=>`<span style="transition-delay:${index *50}ms">${letter}</span>`) //map to create array of letter with span tag around it
    .join('') //turns it back into a string
})