const title = document.querySelector('#title');

function typeWriter(element) {
    const textArray = element.innerText.split('');
    element.innerText = '';

    textArray.forEach((letter, i) => {
        setTimeout(() => (element.innerHTML += letter), 75 * i);
    });
}

typeWriter(title);
