// ハンバーガーメニューの実装

const ham = document.getElementById('ham')
const choices = document.getElementById('choices')

ham.addEventListener('click', (event) => {
    ham.classList.toggle('clicked')
    choices.classList.toggle('clicked')
})