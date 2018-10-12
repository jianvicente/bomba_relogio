    var mim,seg,tempo,senha;
	
function armar_bomba(){
	location.href='bomba_armada.html';
	// alert('tempo');
}	
function nova_missao(){
	location.href='index.html';	
}
function missao_concluida(){
	senha= prompt("Digite a Senha Para Desarmar");
	
	if(senha == "1234"){
	location.href='missao_concluida.html';
	}else{alert('Senha Incorreta');}
}

function contador(){
	
	if(mim == 10){
		//alert("é 10");
		document.getElementById('b_armada').play()
	}
if(mim > 0 || seg > 0){
	if(seg>0){
		seg--;
		if(seg < 10){seg = "0"+seg}else{seg=seg}
	}else{
		seg = 59;
		mim--;
		if(min < 10){min = "0"+min}else{mim=mim}
	}
	document.getElementById("tempo").innerHTML = "0"+mim+":"+seg;
	
}else{
	// alert('oi');
	
	 document.getElementById("tempo").innerHTML = "o tempo acabou"
}
}





