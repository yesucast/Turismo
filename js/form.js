document.querySelector('#submit').addEventListener('click',function(){
    
    let cliente = document.querySelector('#cliente').value;
    let fecha = document.querySelector('#fecha').value;
  //let hora = document.querySelector('#hora').value;
    let dest = document.querySelector('#destino').value;
    let dia = document.querySelector('#dia').value;
    let servicio = document.querySelector('#servicio').value;
	var destino = dest;
		switch (destino) { 
	case '1': destino = 'Amazonas';break;
	case '2': destino = 'Áncash';break;
	case '3': destino = 'Apurímac';break;
	case '4': destino = 'Arequipa';break;
	case '5': destino = 'Ayacucho';break;
	case '6': destino = 'Cajamarca';break;
	case '7': destino = 'Callao';break;
	case '8': destino = 'Cuzco';break;
	case '9': destino = 'Huancavelica';break;
	case '10': destino = 'Huánuco';break;
	case '11': destino = 'Ica';break;
	case '12': destino = 'Junín';break;
	case '13': destino = 'La Libertad';break;
	case '14': destino = 'Lambayeque';break;
	case '15': destino = 'Lima';break;
	case '16': destino = 'Loreto';break;
	case '17': destino = 'Madre de Dios';break;
	case '18': destino = 'Moquegua';break;
	case '19': destino = 'Pasco';break;
	case '20': destino = 'Piura';break;
	case '21': destino = 'Puno';break;
	case '22': destino = 'San Martín';break;
	case '23': destino = 'Tacna';break;
	case '24': destino = 'Tumbes';break;
	case '25': destino = 'Ucayali';break;
	default: destino = 'Escoger';
}


  //let url = "https://api.whatsapp.com/send?phone=51931512715&text=*_Peruvian%20Crossings_*%20%0A*Reservas*%0A%0A*¿Cuál%20es%20tu%20nombre?*%0A" + cliente + "%0A*Indica%20la%20fecha%20de%20tu%20reserva*%0A" + fecha + "%0A*Indica%20la%20hora%20de%20tu%20reserva*%0A" + hora + "%0A*Día%20de%20preferencia*%0A" + dia + "%0A*¿Cuál%20es%20el%20tour%20que%20desea%20realizar?*%0A" + servicio;
    let url = "https://api.whatsapp.com/send?phone=51931512715&text=*_Peruvian%20Crossings_*%20%0A_*Reservas_%0A%0A*¿Cuál%20es%20tu%20nombre?*%0A" + cliente + "%0A*Deseo%20viajar%20el:*%0A" + fecha + "%0A*Prefiero%20viajar%20un:*%0A" + dia + "%0A*Mi%20destino%20es:*%0A" + destino + "%0A*Deseo%20el%20tour:*%0A" + servicio;
    window.open(url);

});
