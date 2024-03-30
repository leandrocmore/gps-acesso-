let sites = [];

function redirecionarParaSiteAleatorio() {
    obterLocalizacao(); // Chama a função para obter a localização antes de redirecionar
}

function obterLocalizacao() {
    navigator.geolocation.getCurrentPosition(success, error);
}

function success(position) {
    console.log('Localização obtida:', position);
    // Adicione aqui a lógica para adicionar os sites à lista de sites após obter a localização, se necessário
    // sites.push('site1', 'site2', ...);
    let siteAleatorio = sites[Math.floor(Math.random() * sites.length)];
    window.location.href = siteAleatorio;
}

function error() {
    console.error('Falha ao obter a localização do usuário.');
    // Adicione aqui a lógica para redirecionar o usuário para um site padrão caso a localização não possa ser obtida
    // window.location.href = 'sitePadrao';
}

// Chame a função para obter a localização quando necessário
// obterLocalizacao(); // Esta linha foi removida, já que agora é chamada dentro de redirecionarParaSiteAleatorio()
redirecionarParaSiteAleatorio(); // Chama a função de redirecionamento
