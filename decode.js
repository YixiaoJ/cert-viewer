$( document ).ready(function() {
    
    qrcode.callback = revealUrl;

	var imageLoader = document.getElementById('js-qr-input');
    imageLoader.addEventListener('change', handleImage, false);
	var canvas = document.getElementById('qr-canvas');
	var ctx = canvas.getContext('2d');

	function handleImage(e){
	    var reader = new FileReader();
	    $('#js-scan-btn').button('loading');
	    reader.onload = function(event){
	        var img = new Image();
	        img.onload = function(){
	            canvas.width = img.width;
	            canvas.height = img.height;
	            ctx.drawImage(img,0,0);
	        }
	        img.src = event.target.result;
	        qrcode.decode(event.target.result);
	    }
	    reader.readAsDataURL(e.target.files[0]); 
	}


	function revealUrl(data) {
	    window.location.replace(data);
	    $('#js-scan-btn').button('reset');
	  }

    $('#js-scan-btn').click(function(){
    	$("#js-qr-input").click();
    });

});