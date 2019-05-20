var ans = document.getElementById('answer');
var qns = prompt('Cuál es su nombre?');

if(qns == 'Luisa') {
	ans.innerHTML = "Bienvenido Administrador: "+qns;
}else {
	ans.innerHTML = "Bienvenido Visitante: "+qns;
}