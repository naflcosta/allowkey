var	allowkey = function(e,allow) { // global function
	var k;
	k=e.keyCode?parseInt(e.keyCode): parseInt(e.charCode);
	if (!((k > 36 && k < 47)||(k > 7 && k < 10))){ // allows delete, tab, arrows, etc
		return (allow.indexOf(String.fromCharCode(k))!=-1);
	}
};