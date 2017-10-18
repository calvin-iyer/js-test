function test() {
	if(document.getElementsByClassName("skip_btn2").length == 0) {
		setTimeout(test,3000);
    } else {
		document.getElementsByClassName("skip_btn2")[0].childNodes[0].click();
    setTimeout(test,3000);
    }
}
test();
