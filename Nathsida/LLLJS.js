var ant = 0;
var number = 0;
var picture = new Array();


function changeImage(){
		ant++;
		if(ant == 5){
			ant = 0;
			document.getElementById('artshowcase').src="Bild4-20.jpg";
		}
		else if(ant == 1){
			document.getElementById('artshowcase').src="Bild1-6.jpg";
			}
		else if(ant == 2){
			document.getElementById('artshowcase').src="Bild0-6.jpg";
			}
		else if(ant == 3){
			document.getElementById('artshowcase').src="Bild0-14.jpg";
			}
		else if(ant == 4){
			document.getElementById('artshowcase').src="Bild4-15.jpg";
			}
		}
function ChangeImagesPlus(){
	number++;
	if(number == 6){
		number = 5;
		}
	for(var i = 1; i <= 21; i++){
		document.getElementById('PicturePick' + i).style.backgroundImage="url('Bild" + number + "-" + i + ".jpg')";
		picture[i] = "Bild" + number + "-" + i + ".jpg";
		document.cookie = picture[i];
		}
	}
function ChangeImagesMinus(){
	number--;
	if(number == -1){
		number = 0;
		}
	for(var i = 1; i <= 21; i++){
		document.getElementById('PicturePick' + i).style.backgroundImage="url('Bild" + number + "-" + i + ".jpg')";
		picture[i] = "Bild" + number + "-" + i + ".jpg";
		document.cookie = picture[i];
		}
	}
function PicturePickChange(id){
	var actualid = id.substring(11);
	document.getElementById('ChosenPicture').src=picture[actualid];
	}
function pictureLoad(){
	for(var i = 1; i <= 21; i++){
		document.getElementById('PicturePick' + i).style.backgroundImage="url('Bild" + number + "-" + i + ".jpg')";
		picture[i] = "Bild" + number + "-" + i + ".jpg";
		document.cookie = picture[i];
		}
	}