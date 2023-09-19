const spinner = document.createElement('span');
spinner.classList.add('spinner-border', 'spinner-border-sm');
const UI = {
    form: document.forms['loginForm'],
    inputEmail: document.getElementById('email'),
    inputUsername: document.getElementById('username'),
    inputPassword: document.getElementById('password'),
    spinner,
    submitBtn: document.getElementById('submitBtn'),
};

function showSpinner() {
    UI.submitBtn.setAttribute("disabled", true);
    UI.submitBtn.insertAdjacentElement('afterbegin', spinner);
}

function hideSpinner() {
    UI.submitBtn.removeAttribute("disabled");
    spinner.remove();
}

export {
    UI,
    showSpinner,
    hideSpinner
}; 