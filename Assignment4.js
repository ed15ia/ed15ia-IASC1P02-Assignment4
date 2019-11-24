setInterval(displayclock, 500);
            function displayclock() {
             var time = new Date();
             var hrs = time.getHours();
             var min = time.getMinutes();
             var sec = time.getSeconds();
             var en = 'AM';

             if (hrs > 12) {
                en = 'PM';
             }

                if (hrs > 12) {
                    hrs = hrs -12;
                }

             if (hrs == 0) {
                hrs = 12;
             }

            if (hrs < 10) {
                hrs = '0' + hrs;
            }

            if (min < 10) {
                min = '0' + min;
            }

            if (sec < 10) {
                sec = '0' + sec;
            }

         document.getElementById('clock').innerHTML = hrs + ':' + min + ':' +sec;
            + ' ' + en;
}
window.addEventListener("load", function(){
	var delay = 2;
	var nodes = document.querySelectorAll
(".animate");
	for(var i=0; i<nodes.length; i++){
		var words = nodes[i].innerText.split(" ");
		nodes[i].innerHTML = "";
for(var i2=0; i2<words.length; i2++){
			var item = document.createElement("span");
			item.innerText = words[i2];
			var calc = (delay+((nodes.length + i2)/3));
	item.style.animationDelay = calc+"s";
			nodes[i].appendChild(item);
}
	}
});
