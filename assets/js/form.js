const button = document.getElementById('loading');

// Starta animação de loading botão cadastrado
const addLoading = () => {
    button.innerHTML = '<img src="assets/loading-new.png" alt="" class="loading">';
}

//  Remove animação do loading
const removeLoading = () => {
    button.innerHTML = 'Cadastrado';
}

const emailSend = () => {
    const nome = document.querySelector('input[name=nome]').value;
    const email = document.querySelector('input[name=email]').value;
    const celular = document.querySelector('input[name=celular]').value;

    return fetch("http://localhost:3000/send-email", {  // Altera parar a URL hospedada futuramente
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nome: nome,   // Envie os dados corretamente
            email: email,
            celular: celular
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
