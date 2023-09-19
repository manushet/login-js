import {UI, showSpinner, hideSpinner} from './config/ui.config';
import {validate} from './helpers/validate';
import { showInputError, removeInputError } from './views/form';
import {login} from './services/auth.service';
import { notify } from './views/notifications';
import { getProducts } from './services/products.service';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css';

const {form, inputUsername, inputEmail, inputPassword, spinner, submitBtn} = UI;
const inputs = [inputUsername, inputPassword];
//"username":"atuny0","password":"9uQFF1Lh"

form.addEventListener('submit', e => {
    e.preventDefault();   
    onsubmit();
});

async function onsubmit() {
    const isValidForm = inputs.every(el => {
        removeInputError(el);
        const isValidInput = validate(el);
        if (!isValidInput) {
            showInputError(el);
        }
        return isValidInput;
    });

    if (!isValidForm) {
        return;
    }

    showSpinner();
    
    try {
        await login(inputUsername.value, inputPassword.value);
        form.reset();
        notify({
            msg: "You have authorized successfully!", 
            className: "alert-success", 
            timeout: 5000
        });
        await getProducts();
    }
    catch(e) {
        notify({
            msg: e, 
            className: "alert-danger", 
            timeout: 8000});
    }
    finally {
        hideSpinner();
    }
}