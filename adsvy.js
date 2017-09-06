function test() {
	if(document.getElementsByClassName('btn')[0].tagName.toLowerCase() !== 'a') {
		setTimeout(test,3000);
    } else {
		document.getElementsByClassName('btn')[0].click();
    }
}
test();
