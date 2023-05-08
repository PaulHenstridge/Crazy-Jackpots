const handle = document.querySelector('.handle-container')
const knob = document.querySelector('.knob')
const contentContainer = document.querySelector('.content-container');

knob.addEventListener('click', () => {
    contentContainer.classList.add('pulled')
    setTimeout(() => {
        contentContainer.classList.remove('pulled')
    }, 1200)
})