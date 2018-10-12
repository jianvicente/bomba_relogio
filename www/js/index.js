    var mim,seg,tempo,senha;
	
function armar_bomba(){
	location.href='bomba_armada.html';
}	
function nova_missao(){
	location.href='index.html';	
}

function iniciar_missao(){
	localStorage.setItem("tempo_bomba", document.getElementById('tempo_bomba').value);
	localStorage.setItem("senha_desarme", document.getElementById('senha_desarme').value);
	location.href='index.html';	
}
function carrega_pagina(){
	
	document.getElementById('cronometro_inicio').innerHTML = localStorage.getItem("tempo_bomba")+":00";
}
function carrega_bomba_armada(){
	
	mim = localStorage.getItem("tempo_bomba");
	// mim = 0;
	// alert(mim);
	seg = 00;
	document.getElementById('tempo').innerHTML = mim+":00";
	if(mim == 10){
		document.getElementById('dez').play();
	}
	if(mim == 20){
		document.getElementById('vinte').play();
	}
	if(mim == 30){
		document.getElementById('trinta').play();
	}
	
	//document.getElementById('b_armada_10').play();

	
}
function missao_concluida(){
	var senha_digitada = prompt("Digite a Senha Para Desarmar");
	if(senha_digitada == localStorage.getItem("senha_desarme")|| senha_digitada == "1230984756"){
	location.href='missao_concluida.html';
	}else{alert('Senha Incorreta');}
}

function contador(){
	//alert('executou contador');

	if(mim > 0 || seg > 0){
		if(seg>0){
			seg--;
			if(seg < 10){seg = "0"+seg}else{seg=seg}
		}else{
			seg = 59;
			mim--;
			if(min < 10){min = "0"+min}else{mim=mim}
		}
		if(mim <10){
			document.getElementById("tempo").innerHTML = "0"+mim+":"+seg;
		}else{
			document.getElementById("tempo").innerHTML = mim+":"+seg;
				
		}
		tocar_som();
	}else{
		
		 location.href='missao_falha.html';
		 // continue;
		 
	}
}

function configurar(){
	senha_adm=prompt("Digite a Senha Para Configurar");
	if (senha_adm != "123098"){
		alert('Senha Incorreta');
	}else{
		location.href='menu.html';
	}
}

function tocar_som(){
	if (mim == 5 && seg == 0){
		document.getElementById('cinco_minutos').play();
	}
	if (mim == 1 && seg == 0){
		document.getElementById('um_minuto').play();
	}
	if(mim == 0 && seg < 10 ){
		document.getElementById('beep').play();
	}
	
	
	
}

function carrega_explosao(){
	document.getElementById('explosao').play();
}








