function test() {
if (document.readyState === "complete") {
	if(document.getElementsByClassName('btn')[0].tagName.toLowerCase() !== 'a') {
		setTimeout(test,3000);
    } else {
		document.getElementsByClassName('btn')[0].click();
		setTimeout(test,3000);
    }
} else {
	setTimeout(test,3000);
}
}
test();
