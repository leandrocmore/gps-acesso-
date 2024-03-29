
   let sites = [
    console.log(obterLocalizacao())
  
];
function redirecionarParaSiteAleatorio() {
    
    let siteAleatorio = sites[Math.floor(Math.random() * sites.length)];
   
    window.location.href = siteAleatorio;

    function obterLocalizacao() {
        navigator.geolocation.getCurrentPosition(success, error);
    }
    
    function success(position) {
        console.log('Localização obtida:', position);
    }
    
    function error() {
        console.error('Falha ao obter a localização do usuário.');
    }
    
   
    obterLocalizacao();
}

redirecionarParaSiteAleatorio();