function test() {
	if(document.getElementById('skip_button2') == null || document.getElementById('skip_button2').tagName.toLowerCase() !== 'a') {
		setTimeout(test,3000);
    } else {
		document.getElementById('skip_button2').click();
    }
}
test();
