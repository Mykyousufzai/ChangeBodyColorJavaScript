





document
.getElementById('changeColorBtn')
.addEventListener('click', changeBodyColor )

function generateRandomNumber () {
    const number = Math.round(Math.random() * 190)
    return number
}

function changeBodyColor () {
    let body = document.getElementsByTagName('body')
    console.log(body)
    body[0].style.backgroundColor= `rgb(
    ${generateRandomNumber()},
    ${generateRandomNumber()},
    ${generateRandomNumber()}

    )`
}