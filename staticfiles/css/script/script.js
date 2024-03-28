document.querySelector('#getLocation').addEventListener('click', () => {
    const locationResult = document.querySelector('#locationResult');
    locationResult.textContent = 'Retrieving User Location..';
    
    function success(position){
        let { coords } = position;
        locationResult.textContent = 'Veja sua Localização ';
        locationResult.innerHTML = `<a href="https://www.openstreetmap.org?mlat=${coords.latitude}&mlon=${coords.longitude}">Ver Localização no Mapa</a>`;
    }
    
    function error() {
        locationResult.textContent = 'Falha ao obter a localização do usuário.';
    }

    navigator.geolocation.getCurrentPosition(success, error);
});