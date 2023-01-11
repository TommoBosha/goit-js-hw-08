import throttle from 'lodash.throttle';
const ref = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea'),
};
const STORAGE_KEY = 'feedback-form-state';

ref.form.addEventListener('input', throttle(onInputChange, 500));
ref.form.addEventListener('submit', onFormSubmit);

saveData();
let data = {};

function onInputChange() {
    data.email = ref.input.value;
    data.message = ref.textarea.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function saveData() {
    const savedData = localStorage.getItem(STORAGE_KEY);
    const parsedData = JSON.parse(savedData);
    if (savedData) {
        ref.input.value = parsedData.email;
        ref.textarea.value = parsedData.message;
        return parsedData;
    }
}

function onFormSubmit(event) {
    event.preventDefault();
    console.log(saveData());

    event.target.reset();
    localStorage.removeItem(STORAGE_KEY);
}