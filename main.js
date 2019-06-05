//ANIMATE SMOOTH SCROLL

$('#view-work').on('click', function(){ //when its clicked, run the function
	const images = $('#images').position().top; //variable called images is set to jquery id of images and then get the position to top

	$('html, body').animate( //to animate this use jquery html and body then animate. here animate will take object scrolltop to images, where this images is the variable.
	{
		scrollTop: images
	},
	900 //it will take the time of 900ms
	);
});