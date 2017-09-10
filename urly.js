function test() {
	if(document.getElementById('skip_button2') == null || document.getElementById('skip_button2').tagName.toLowerCase() !== 'a') {
		setTimeout(test,3000);
    } else {
		document.getElementById('skip_button2').click();
	    	setTimeout(click2,2000);
    }
}
function click2() {
	document.getElementById('skip_button1').click();
}
test();
