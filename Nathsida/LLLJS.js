var ant = 0;
var minst = 1;
var störst = 21;
function changeImage(){
		ant++;
		if(ant == 5){
			ant = 0;
			document.getElementById('artshowcase').src="Bild106.jpg";
		}
		else if(ant == 1){
			document.getElementById('artshowcase').src="Bild27.jpg";
			}
		else if(ant == 2){
			document.getElementById('artshowcase').src="Bild6.jpg";
			}
		else if(ant == 3){
			document.getElementById('artshowcase').src="Bild14.jpg";
			}
		else if(ant == 4){
			document.getElementById('artshowcase').src="Bild101.jpg";
			}

		}
function PicturePickChange(id){
	alert(id); 
	
	document.getElementById('ChosenPicture').style.backgroundImage="url(id.style.backgroundImage)";
	}
function pictureLoad(){
	for(var i = minst; i <= störst; i++){
		document.getElementById('PicturePick' + i).style.backgroundImage="url('Bild" + i + ".jpg')";
		}
	}