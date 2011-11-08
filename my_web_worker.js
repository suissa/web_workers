var end = 1e8, tmp = 1;
postMessage("Oieee");
while(end){
	end -= 1;
	tmp +=end;
	if(end == 5e7){
		postMessage("Quase la, tmp agora eh: "+tmp);
	}
}
postMessage("FINALIZADO");