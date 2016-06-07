var arreglo_memoria = ['A','A','B','B'];
var valores_memoria = [];
var ids_carta_memoria = [];
var cartas_vueltas = 0;

Array.prototype.mezclar_cartas = function() {
	var i = this.lenght, j, temp;
	while(--i > 0){
		j = Math.floor(Math.random() * (i+1));
		temp = this[j];
		this[j] = this[i];
		this[i] = temp;
	}
}

function nuevaPartida(){
	cartas_vueltas = 0;
	var output = '';
	for (var i = 0; i < arreglo_memoria.length; i++) {
		output += '<div id="tile_'+i+'" onclick=""volverCarta(this,\''+arreglo_memoria[i]+'\')"></div>';
	}
	document.getElementById('tablero').innerHTML = output;
}