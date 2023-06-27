const loginForm = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (username && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
};

const signUpForm = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#new-user-email').value.trim();
    const username = document.querySelector('#new-username').value.trim();
    const password = document.querySelector('#password-sign-up').value.trim();

    if (email && username && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ email, name, password }),
            headers: { 'Content-Type': 'applicatino/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
};

document
    .querySelector('.login-information')
    .addEventListener('submit', loginForm);

    document
    .querySelector('.sign-up-information')
    .addEventListener('submit', signUpForm);