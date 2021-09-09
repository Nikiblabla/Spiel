let secret=getRandomInt(1,100)
let Versuche=5
function getRandomInt(min,max){
	return Math.floor(Math.random()*(max-min+1))+min;
}
document.querySelector(".Kontrolieren").onclick=function(){
	let yousernumba = document.querySelector(".Numba").value;
	if (secret==yousernumba) {
		alert("Gewonnen")
		document.querySelector(".Kontrolieren").disabled=true

	}
	if (secret<yousernumba) {
		document.querySelector(".Tipp").innerHTML="Es ist weniger"
	}
	if (secret>yousernumba) {
		document.querySelector(".Tipp").innerHTML="Es ist mehr"
	}
	Versuche=Versuche-1
	document.querySelector(".Versuche").innerHTML=Versuche
	if (Versuche==0) {
		document.querySelector(".Numba").disabled=true
		document.querySelector(".Kontrolieren").disabled=true
	}
	document.querySelector(".Numba").value=""
	document.querySelector(".Numba").focus()


}
document.querySelector(".Wdi").onclick=function(){
	secret=getRandomInt(1,100)
	Versuche=5
	document.querySelector(".Versuche").innerHTML=Versuche
	document.querySelector(".Kontrolieren").disabled=false
	document.querySelector(".Tipp").innerHTML="tipp"
	document.querySelector(".Numba").value=""
	document.querySelector(".Numba").focus()
	document.querySelector(".Numba").disabled=false
}
function clickPress(event){
	if (event.keyCode==13) {
		let yousernumba = document.querySelector(".Numba").value;
	if (secret==yousernumba) {
		alert("Gewonnen")
		document.querySelector(".Kontrolieren").disabled=true

	}
	if (secret<yousernumba) {
		document.querySelector(".Tipp").innerHTML="Es ist weniger"
	}
	if (secret>yousernumba) {
		document.querySelector(".Tipp").innerHTML="Es ist mehr"
	}
	Versuche=Versuche-1
	document.querySelector(".Versuche").innerHTML=Versuche
	if (Versuche<1) {
		document.querySelector(".Kontrolieren").disabled=true
		document.querySelector(".Numba").disabled=true
		document.querySelector(".Versuche").innerHTML="0"
	}
	document.querySelector(".Numba").value=""
	document.querySelector(".Numba").focus()
	}
}