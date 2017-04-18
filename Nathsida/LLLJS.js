var ant = 0;
function changeImage(){
		ant++;
		if(ant == 5){
			ant = 0;
			document.getElementById('artshowcase').src="warm_at_heart_by_littlelionlie-daj716n.jpg";
		}
		else if(ant == 1){
			document.getElementById('artshowcase').src="fire_by_littlelionlie-db1fcg8.jpg";
			}
		else if(ant == 2){
			document.getElementById('artshowcase').src="alpaca_love_by_littlelionlie-daoq251.jpg";
			}
		else if(ant == 3){
			document.getElementById('artshowcase').src="camouflage_by_littlelionlie-daa7fg4.jpg";
			}
		else if(ant == 4){
			document.getElementById('artshowcase').src="through_frames_by_littlelionlie-d9btro8.jpg";
			}

		}