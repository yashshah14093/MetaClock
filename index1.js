var a;
let date;
let time;
let hour;
let min;
let sec;
const options = {weekday : 'long',year : 'numeric',month : 'long',day : 'numeric'};

setInterval(() => {

	a = new Date();
	date = a.toLocaleDateString(undefined,options);
	
	hour = a.getHours();
	min = a.getMinutes();
	sec = a.getSeconds();
	time = hour+" : "+min+" : "+sec;

	document.getElementById('time').innerHTML = time + '<br>on ' + date;

},1000);

