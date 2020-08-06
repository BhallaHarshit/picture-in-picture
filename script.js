const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// prompt user to select media stream, pass to video element, them play
async function setMediaStream() {
	try {
		const mediaStream = await navigator.mediaDevices.getDisplayMedia();
		videoElement.srcObject = mediaStream;
		videoElement.onloadedmetadata = () => {
			videoElement.play();
		};
	} catch (error) {
		// catch error here
		console.log('whoops... an error occured:', error);
		alert('Oops... some error occurred. Please reload the page and try again.');
	}
}

button.addEventListener('click', async () => {
	// disable button
	button.disabled = true;
	// start picture in picture
	await videoElement.requestPictureInPicture();
	// reset button
	button.disabled = false;
});

// On Load
setMediaStream();
