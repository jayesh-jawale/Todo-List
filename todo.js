const button = document.querySelector('.button');

button.addEventListener('click', () => {

    const text = document.querySelector('.text');

    let newli = document.createElement('li');
    newli.innerHTML = text.value;

    document.querySelector('.list').prepend(newli);
})