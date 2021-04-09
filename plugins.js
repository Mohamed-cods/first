/* // Get Slider Items | Array.form [ES6 Feature]
var sliderImages = Array.from(document.querySelectorAll('.slider-container img'));

// Get Number Of Slides
var slidesCount = sliderImages.length;

// Set Current Slide
var currentSlide = 1;

// Slide Number Element
var slideNumberElement = document.getElementById('slide-number');

// Previous and Next Buttons

var nextButton = document.getElementById('next');
var prevButton = document.getElementById('prev');

// Handle Click on Previous and Next Buttons
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;





// Handle Click on Previous and Next Buttons
//nextButton.onclick = nextsilder();
//prevButton.onclick = prevsilder();



// create pagination element 

var paginationelement = document.createElement('ul');

// Set ID On Created Ul Element
paginationelement.setAttribute('id', 'pagination-ul');

for(var i = 1; i <= slidesCount; i++){

   var paginationitems = document.createElement('li');
   paginationitems.setAttribute('nums-data',i);
   paginationitems.appendChild(document.createTextNode(i)); 
   paginationelement.appendChild(paginationitems);

   }
document.getElementById('indicators').appendChild(paginationelement);


var paginationCreatedUL = document.getElementById('pagination-ul');

var paginationbullets = Array.from(document.querySelectorAll('#pagination-ul li '));
//paginationbullet2 = Array.from(document.querySelectorAll('#pagination-ul li '));

function cheacker() {
   
   removeAllActiv ();

   slideNumberElement.textContent = `Slide # ${currentSlide} Of ${slidesCount}`;

   sliderImages[currentSlide - 1].classList.add('active');

   document.getElementById('pagination-ul').children[currentSlide - 1].classList.add('active');

   if(currentSlide ==1){

      prevButton.classList.add('disabled');
   }else{
      prevButton.classList.remove('disabled');

   } 

   if(currentSlide ==slidesCount){

      nextButton.classList.add('disabled');
   }else{
      nextButton.classList.remove('disabled');

   } 

}

cheacker();

// remove all activr class form everything

function removeAllActiv () {

   sliderImages.forEach(img => {
      img.classList.remove('active');
   });

   paginationbullets.forEach(bullet => {
      bullet.classList.remove('active');
   });

};

// Next Slide Function
function nextSlide() {

   if (nextButton.classList.contains('disabled')) {
 
     // Do Nothing
     return false;
 
   } else {
      
      currentSlide++;


      cheacker();

   }

}


// Previous Slide Function
function prevSlide() {

   if (prevButton.classList.contains('disabled')) {

    // Do Nothing

return false;

  } else {

    currentSlide--;

    cheacker();

}

}
 */

// bringing all elements in vars 

var slideNumEle = document.getElementById('slide-number');

var slidersImgs = Array.from(document.querySelectorAll('img')) ;

var currntslider = 1;

var bulletsArea = document.getElementById('indicators');

var  slidescount =slidersImgs.length; 

var nextBtn = document.getElementById('next');

var prevBtn = document.getElementById('prev');







//Trigering Functions next & prev

nextBtn.onclick = nxtSlider;
prevBtn.onclick = prvSlider;

function nxtSlider(){

   if(currntslider == slidescount){
      return false
   }else{
      currntslider++;
      theCheacker();
   };
};

function prvSlider(){
   if(currntslider == 1){
      return false
   }else{
      currntslider--
      theCheacker();
   };};



// Creating ul 

var CreatedUL = document.createElement('ul');

// set ID to the main ul 
      
CreatedUL.setAttribute('id','ul-main');

// Creating LI

for(var i = 1; i <= slidescount; i++){

   var liItems =  document.createElement('li');

   liItems.setAttribute('data-value',i);

  // liItems.textContent = i;

   liItems.appendChild(document.createTextNode(i));

   CreatedUL.appendChild(liItems);

}

// apeending in the body 

bulletsArea.appendChild(CreatedUL);

// the ul last form

var theUl = document.getElementById('ul-main');


// Sumons Li to use ..

//var bulletsfinal = Array.from(document.querySelectorAll('.indicators ul li'));
var bulletsfinal = Array.from(document.querySelectorAll('#ul-main li'));
// Adding Active Class throw function

function theCheacker() {

   removeAllActvClas();

   slideNumEle.textContent = `Slide ${currntslider} Of ${slidescount}`;

   slidersImgs[currntslider - 1].classList.add('active');

   //bulletsfinal[currntslider - 1].classList.add('active');

   theUl.children[currntslider - 1].classList.add('active');

   if(currntslider == slidescount){

      nextBtn.classList.add('disabled');
   }else{nextBtn.classList.remove('disabled')};

   if(currntslider == 1){

      prevBtn.classList.add('disabled');
   }else{prevBtn.classList.remove('disabled')};

   
}
theCheacker();

function removeAllActvClas() {

   slidersImgs.forEach(img => {

      img.classList.remove('active');
   });

   bulletsfinal.forEach(bullet=>{

      bullet.classList.remove('active');
   })

};


for(var i = 0; i < bulletsfinal.length; i++){

   bulletsfinal[i].onclick = function() {
   
      currntslider = parseInt(this.getAttribute('data-value'));
      console.log(bulletsfinal[i]);
   };
   console.log(bulletsfinal[i]);
   } 
   