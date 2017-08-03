var buttonScanner = document.getElementById('networkTable');
var tbody = document.getElementById('tbody');



//display loading image 
buttonScanner.onclick = () => {

	var img = document.createElement('IMG');
	img.setAttribute('src', 'img/wifiLoader.gif');
	img.setAttribute('id', 'imgLoader')
	img.setAttribute('width', 304);
	img.setAttribute('height', 228);
	tbody.append(img);
	
	setTimeout(() =>{
		document.getElementById('imgLoader').style.display = 'none'
	}, 3500);

}
