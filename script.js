/* this simple project uses 
 * nekos.best - neko api
 * generates a random neko per delay
 * or on page refresh
 * have fun meow
 */

const apiURL = 'https://nekos.best/api/v2/neko';

const delay = 10000; // 10 seconds	 

   confirmOpen();
	  loadScreen();

   window.setInterval(getNeko, delay);
	
 	
	  
	
  
async function getNeko(){

	const data = await fetch(apiURL);
	  	  		  	  	  	  	  	     	  	
 const { results } = await data.json();
	  	  	  	 	   
 document.body.style.backgroundImage = `url(${results[0].url})`;
	  	  	 	
	  	  
}

function downloadNeko(){
	
	  const confirmation = window.confirm('Nya~\nDo you wish to see the original link of this neko or download it?')
	  
	  if(!confirmation) return;
	  
	 const img = document.body.style.backgroundImage
	 
	 const url = img.substring(5, img.length - 2)
	  
	  const anchour = document.createElement('a')
	  
   anchour.href = url
	  anchour.download = url.split('/').pop()
	  
	  anchour.target = '_blank'
	  anchour.click()
	  anchour.remove()
	 

}

function loadScreen(){
	
	 const loadGif = "https://c.tenor.com/G98e-mpzOiMAAAAC/cat-paw.gif"
	 
	 document.body.style.backgroundImage = `url(${loadGif})`
	
}

function confirmOpen(){
	
	  alert("Hiii!\nBy clicking ok you are ok to view some nekos ok? And I don\'t own any of the media content displayed here\nMeow!'")
	
}

function meow(){
	
 if(document.audioExists) return;
	
	 const audio = document.createElement('AUDIO')
	 
	 document.audioExists = true;
	 
	 audio.src = "aishi.mp3"
	 audio.play()
	 
	 window.setTimeout(() => {
	 
	 	audio.remove()
	 	document.audioExists = false;
	 	
	} 	, 11000)
	 
	
}