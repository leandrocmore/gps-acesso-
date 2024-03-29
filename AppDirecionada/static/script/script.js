   // Lista de sites aleatórios
   let sites = [
    "https://www.google.com",
  
];
function redirecionarParaSiteAleatorio() {
    
    var siteAleatorio = sites[Math.floor(Math.random() * sites.length)];
   
    window.location.href = siteAleatorio;
}

redirecionarParaSiteAleatorio();