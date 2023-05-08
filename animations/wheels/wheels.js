// selectorall on symb, to array, loop to add functionality

const wheels = document.querySelectorAll('.symbol')
const spinBtn = document.querySelector('.spin')


spinBtn.addEventListener('click', () => {
    wheels.forEach((wheel, i) => {
        setTimeout(() => {
            wheel.classList.toggle('spinning')
        }, i * 1000)
    })
})