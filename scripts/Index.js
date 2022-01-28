const buttonElement = document.querySelector("#buttonSubmitEmail");
const cardContainer = document.querySelector("#cardContainer");

buttonElement.addEventListener("click", (e) => {
    if (validate())
        location.reload(false)
    else
        createMessageError('E-mail inválido!')
})

function createMessageError(message) {
    const errorElement = document.querySelector('.messageError');
    errorElement.innerHTML = message
    errorElement.style.display = 'block'
}

function validate() {
    const inputElement = document.querySelector("#inputEmail").value;

    if (inputElement === null || inputElement == '' || !inputElement.includes('@'))
        return false

    return true
}