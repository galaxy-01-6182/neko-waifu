/* this simple project uses 
 * nekos.best - neko api
 * generates a random neko per delay
 * or on page refresh
 * have fun meow
 */

const apiURL = 'https://nekos.best/api/v2/neko';

const delay = 10000; // 10 seconds	 

   window.setInterval(getNeko, delay);
	
 	
	  confirm();
	  loadScreen();
	  getNeko();
	  
	
  
async function getNeko(){

	 const data = await fetch(apiURL);
	  	  	
	console.log('fetching a waifu....');
	  	  	  	  	  	   
	  	  	
 const { results } = await data.json();
	  	  	
	console.log('Coming up!');
	  	  	 	   
 document.body.style.backgroundImage = `url(${results[0].url})`;
	  	  	 	
	  	  
}

function loadScreen(){
	
	 const loadGif = "https://c.tenor.com/G98e-mpzOiMAAAAC/cat-paw.gif"
	 
	 document.body.style.backgroundImage = `url(${loadGif})`
	
}

function confirm(){
	
	  alert("Hiii!\nBy clicking ok you are ok to view some nekos ok? And I don\'t own any of the images displayed here\nMeow!'")
	
}

function meow(){
	
 if(document.audioExists) return;
	
	 const audio = document.createElement('AUDIO')
	 
	 document.audioExists = true;
	 
	 audio.class = "aishi"
	 audio.src = "aishi.mp3"
	 audio.play()
	 
	 window.setTimeout(() => {
	 
	 	audio.remove()
	 	document.audioExists = false;
	 	
	} 	, 11000)
	 
	
}