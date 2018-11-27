var myImages =["http://cabinmaxluggage.co.uk/wp-content/uploads/2014/11/Italy-Venice-Canals-5.jpg","https://livingnomads.com/wp-content/uploads/2017/07/11/Shinjuku-Tokyo2.jpg","http://www.think-aboutit.com/wp-content/uploads/2015/05/Outback-Australia2.jpg","https://www.nationsonline.org/gallery/Dominican-Republic/El-Morro.jpg","https://www.roadaffair.com/wp-content/uploads/2017/09/negril-cliffs-jamaica-shutterstock_553342135.jpg"];





var captionImages =["Venice","Tokyo","Outback","Dominican Republic","Jamica"];



var index=0; 



function updateImage(){

  document.getElementById("slideshow").src = myImages[index];

  document.getElementById("slideshow").alt= captionImages[index];

  document.getElementById("caption").textContent = captionImages[index]; 

} 



function next(){

  if (myImages.length == index+1)

    index=0;

  else

    index++;

  updateImage();

} 





function back(){

  if (index===0)

    index=myImages.length-1;

  else

    index--;



  updateImage();

} 



var nextButton = document.getElementById("next"); 

var previousButton = document.getElementById("previous"); 



previousButton.addEventListener("click",back,false);

nextButton.addEventListener("click",next,false); 

function autoSlide(){

  if (document.getElementById("auto").checked)

    next(); 

}





setInterval(autoSlide,2000); // Next
