const button = document.getElementById('loading');

const addLoading = () => {
    button.innerHTML = '<img src="assets/loading-new.png" alt="" class="loading">';
}

const removeLoading = () => {
    button.innerHTML = 'Cadastrado';
}

const emailSend = () => {
    const nome = document.querySelector('input[name=nome]').value;
    const email = document.querySelector('input[name=email]').value;
    const celular = document.querySelector('input[name=celular]').value;

    return fetch("https://formsubmit.co/ajax/oliveiradasilvaigor74@gmail.com", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            subject: "LembreFácil - Landing Page",
            name: "Novo cliente cadastrado na Newsletter - Landing Page",
            message: `Nome: ${nome}\nEmail: ${email}\nNúmero: ${celular}`
        })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}

const handleSubmit = (event) => {
    event.preventDefault();
    addLoading();
    emailSend().then(() => {
        removeLoading();
        document.querySelector('form').reset();
    });
}


document.querySelector('form').addEventListener('submit', handleSubmit);
