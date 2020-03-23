document.querySelector('#submit').addEventListener('click',function(){
    
    let cliente = document.querySelector('#cliente').value;
    let fecha = document.querySelector('#fecha').value;
    let hora = document.querySelector('#hora').value;
    let dia = document.querySelector('#dia').value;
    let servicio = document.querySelector('#servicio').value;

    let url = "https://api.whatsapp.com/send?phone=51931512715&text=*_Peruvian%20Crossings_*%20%0A*Reservas*%0A%0A*¿Cuál%20%es%20%tu%20%nombre?*%0A" + cliente + "%0A*Indica%20%la%20%fecha%20%de%20%tu%20%reserva*%0A" + fecha + "%0A*Indica%20%la%20%hora%20%de%20%tu%20%reserva*%0A" + hora + "%0A*Día%20%de%20%preferencia*%0A" + dia + "%0A*¿Cuál%20%es%20%el%20%tour%20%que%20%desea%20%realizar?*%0A" + servicio;
    window.open(url);

});
