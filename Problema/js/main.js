// function getInput() {
// 	var textNvo =document.getElementById("newText");
// 	return textNvo.value;
// }

// $(document).ready(function(){
// 	$("#newText").keypress(function(e){
//    		if(e.which===13){
//    			$(this).value('');
// 		}else{
// 			// mensajeVacio();
// 		}
// 	})
// })
// // $("input").keypress(function(){
// //    if(evento.which===13){

// //    } 
// // });
// function doTweet(text) {
// 	var textoMensaje = document.getElementById("bubleNuevo");
// 	var Tiempo = new Date();
// 	var Hora = Tiempo.getHours();
// 	var Minutos = Tiempo.getMinutes();
// 	var horaMsn = Hora + ":"+ Minutos;
// 	$("#hora").html(horaMsn);
	
// 	var parrafo = document.createElement("p");
// 	parrafo.idName="textoMensaje";

// 	var hM = document.createElement("span");
// 	hM.idName="hora";
	
// 	bubleNuevo.appendChild(parrafo);
// 	bubleNuevo.appendChild(hM);
// }
function getInputValue() {
	var inputBox =document.getElementById("newText");
	// inputBox.keypress= function(e){
	// 	if(e.which==13){
	// 		enviarMensaje();
	// 	}
	// }
	return inputBox.value;
}
function valueClean() {
	var inputBox =document.getElementById("newText");
	inputBox.value="";
}

$(document).ready(function(){
	var inputBoxValue = getInputValue();
	$('#newText').keypress(function(e){
		if(e.which === 13){
			enviarMensaje(inputBoxValue);
		}
	})
})

function submit() {
	var inputBoxValue= getInputValue();
	if(inputBoxValue!==""){
		enviarMensaje(inputBoxValue);
		valueClean();
	}
}
function enviarMensaje(message) {
	var bubleNuevo = document.getElementById("chat");
	var Tiempo = new Date();
	var Hora = Tiempo.getHours();
	var Minutos = Tiempo.getMinutes();
	var contHora = 0;
		if(Minutos < 10){
		Minutos = "0" + Minutos;
		}
		else{
		Minutos = "" + Minutos;
		}
		if(Hora > 12){
		Hora -= 12;
		}
		else{
			Hora = Hora;
		}
		if(Hora == 0){
		Hora = 12;
		}
		else{
			Hora = Hora;
		}

	var horaMsn = Hora + ":"+ Minutos;
	var time = $(".time").html(horaMsn);
	var boxChat = document.createElement("div");
	boxChat.className="boxChat";
	
	
	var texto = document.createElement("div");
	texto.className="parrafo";
	texto.innerHTML=message;
	var textoHora = document.createElement("span");
	textoHora.className="time float-right";

	bubleNuevo.appendChild(boxChat);
	boxChat.appendChild(texto);

}


// $("#newText").keypress(function(e) {
//     var code = (e.keyCode ? e.keyCode : e.which);
//     if (code==13) {
//         enviarMensaje(getInputValue);

//     }else{

//     }

//     if (code == 32 || code == 13 || code == 188 || code == 186) {
//         $("#bubleNuevo").html($(this).val());
// 	};
// });

