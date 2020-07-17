export default () => {
    let lastAnimatedBlock = document.querySelector('.screen--rules .rules .rules__item:nth-child(4) p')
    let goButton =  document.querySelector('.screen--rules .rules .rules__link')

    lastAnimatedBlock.addEventListener('animationend', () => {
        goButton.classList.add('ready')
    })

    document.body.addEventListener('screenChanged', () => {
        goButton.classList.remove('ready')
    })
}