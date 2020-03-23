document.querySelector('#submit').addEventListener('click',function(){
    
    let cliente = document.querySelector('#cliente').value;
    let fecha = document.querySelector('#fecha').value;
    let hora = document.querySelector('#hora').value;
    let dia = document.querySelector('#dia').value;
    let servicio = document.querySelector('#servicio').value;

    let url = "https://api.whatsapp.com/send?phone=51931512715&text=*_Peruvian%20Crossings_*%20%0A*Reservas*%0A%0A*¿Cuál%20es%20tu%20nombre?*%0A" + cliente + "%0A*Indica%20la%20fecha%20de%20tu%20reserva*%0A" + fecha + "%0A*Indica%20la%20hora%20de%20tu%20reserva*%0A" + hora + "%0A*Día%20de%20preferencia*%0A" + dia + "%0A*¿Cuál%20es%20el%20tour%20que%20desea%20realizar?*%0A" + servicio;
    window.open(url);

});
