const button = document.getElementById('loading');

// Inicia animação de loading no botão
const addLoading = () => {
    button.innerHTML = '<img src="assets/loading-new.png" alt="" class="loading">';
}

// Remove animação de loading
const removeLoading = () => {
    button.innerHTML = 'Cadastrado';
}

const emailSend = () => {
    const nome = document.querySelector('input[name=nome]').value;
    const email = document.querySelector('input[name=email]').value;
    const celular = document.querySelector('input[name=celular]').value;

    return fetch("https://lembrefacil-newsletter-api-production.up.railway.app/", {  // Atualize para a URL correta com a rota
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
    .then(response => {
        // Verifica se a resposta está ok
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(data); // Aqui você pode ver a resposta do servidor
        return data; // Retorna os dados para uso posterior, se necessário
    })
    .catch(error => {
        console.error('Error:', error);
    });
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
