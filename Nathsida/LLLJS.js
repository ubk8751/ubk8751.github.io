var ant = 0;
var number = 0;
var picture = new Array();
var ChosenPictureName = ["A Beautiful Day", "A Bright Hello", "A little Boy’s Shadow", "After", "All Is Broken", "Alpaca Love", "Art Trade 2 - Ellie", "Art Trade 1 - Samanthia", "Balloon", "Before", "Best Friends!", "Bitter Sweet", "Black Haired Beauty", "Camouflage", "Cannibalism", "Catsepticeye", "Christmas Spirit", "Cloudy Day", "Cookie Break", "Curly Bear", "Dawko and Razz", "Determination", "Doodle Time", "Dream World", "Electra Heart", "Fallen Leaves", "Fire", "Floating", "For You", "Foxy Friend", "Fran Bow", "Free Hugs", "Gloom", "Halloween", "Happy Birthday", "Hello There, My Friend", "How Funny", "I Hate Everything", "In Bloom", "In Deep Thought", "In the Corner of My Eye", "Inktober Part 1", "Inktober Part 2", "Inktober Part 3", "Inktober Part 4", "Inktober Part 5", "Inktober Part 6", "Inktober Part 7", "Inktober Part 9", "It’s Christmas Time!", "It Wasn’t Me!", "Jacksepticeye - Papyrus", "Jacksepticeye", "Jacksepticeye in Color", "Jacksepticteen", "Jeremy Shada", "Leo", "Listen To the Storm", "Little Angel", "Markimoo Stream Hype", "Markiplier", "Markiteen", "Melnie Martinez", "My Little Pony", "Niel", "Night", "Night Sky", "Nightmare", "Not Feeling Well", "Pearl", "Pink", "Pinkiplier!!", "Little Lion", "Rainbow Quartz", "Razzbowski", "Red Boy", "Sakura and Syaoran", "Siamese", "Sleeping Beauty", "Sleepy", "Snowfall", "Something Went Wrong", "Soon", "Spooky Night", "Sprout Boy", "Star Butterfly", "Strawberry Blond", "Strawberry Markimoo", "Sugar Rush", "Teddy Bear", "The Amazing Duo", "The Bighearted", "The Clown", "The Outsider Part 1", "The Outsider Part 2", "The Sweet Markiplier", "The Trapped Fairy", "This Is Happening!", "Through Frames", "Undertale - Sans and Toriel", "Undertale Family", "Waiting", "Vanilla", "Warm At Heart", "We Bare Bears", "When He Saw Her", "Young Love", "Zacharie", "Zombie Dance"];

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
	var index = (number*21) + parseInt(actualid) - 1;
	document.getElementById('ChosenPicture').src=picture[actualid];
	document.getElementById('FlavorText').innerHTML = ChosenPictureName[index];
	alert(actualid);
	
	}
function pictureLoad(){
	for(var i = 1; i <= 21; i++){
		document.getElementById('PicturePick' + i).style.backgroundImage="url('Bild" + number + "-" + i + ".jpg')";
		picture[i] = "Bild" + number + "-" + i + ".jpg";
		document.cookie = picture[i];
		}
	}