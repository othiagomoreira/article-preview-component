const title = document.querySelector('#title');
const btn = document.querySelector('#btn');
const share = document.querySelector('#share');

// Typewriter animation
function typeWriter(element) {
    const textArray = element.innerText.split('');
    element.innerText = '';

    textArray.forEach((letter, i) =>
        setTimeout(() => (element.innerHTML += letter), 75 * i)
    );
}

typeWriter(title);

// Show share area
btn.addEventListener('click', () => {
    share.classList.toggle('show');
    btn.querySelector('i').classList.toggle('active');
});
