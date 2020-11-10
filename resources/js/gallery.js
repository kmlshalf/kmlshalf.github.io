
// Open the Modal
function openModal(n) {
  	var galleries = document.getElementsByClassName("modal");
  	galleries[n-1].style.display = "block";
}

// Close the Modal
function closeModal(n) {
	var galleries = document.getElementsByClassName("modal");
  	galleries[n-1].style.display = "none";
}

// index of prev opened image
var prev_opened_img = 0;

// show modal image, where n = index of that image
function showImg(n) {
	var i;
	var images = document.getElementsByClassName("showimage");
	console.log("IMAGES: ", images)

	//checking to see if this is the first time a gallery image is being opened
	if (prev_opened_img) {
		images[prev_opened_img-1].style.display="none";
	}

	images[n-1].style.display = "block";
	prev_opened_img = n;
}