/* -----------------toggle navbar-------------------- */ 

const navToggler= document.querySelector('.nav-toggler');

navToggler.addEventListener('click', () =>{
    hideSection();
    togglerNavbar();
    document.body.classList.toggle("hide-scrolling")
})
function hideSection(){
    document.querySelector('section.active').classList.toggle('fade-out');

}
function togglerNavbar(){
    document.querySelector('.header').classList.toggle('active')
}
/* -----------------active section--------------------*/ 
document.addEventListener('click',(e)=>{
  if(e.target.classList.contains("link-item") && e.target.hash !== ""){
    // activate the overlay to prevent multiple clocks
    document.querySelector(".overlay").classList.add("active");
      navToggler.classList.add("hide");
     const hash= e.target.hash;
     console.log("hello")
     if(e.target.classList.contains("nav-item")){
         togglerNavbar();
         
     }else{
         hideSection();
         document.body.classList.add("hide-scrolling");
     }
     setTimeout(() =>{
         document.querySelector("section.active").classList.remove("active","fade-out");
         document.querySelector(hash).classList.add("active");
         window.scrollTo(0,0);
         document.body.classList.remove("hide-scrolling");
         navToggler.classList.remove("hide");
         document.querySelector(".overlay").classList.remove("active");
     })
  }
})


/*---------------about tabs---------------*/
const tabsContainer = document.querySelector('.about-tabs'),
     aboutSection =document.querySelector('.about-section');

tabsContainer.addEventListener('click' ,(event) =>{  
    if(event.target.classList.contains("tab-item") &&
     !event.target.classList.contains('active')){
      tabsContainer.querySelector('.active').classList.remove('active');
      event.target.classList.add('active');
      const target = event.target.getAttribute('data-target');
      aboutSection.querySelector('.tab-content.active').classList.remove('active');
      aboutSection.querySelector(target).classList.add('active');
    }
})

/*-----------------------porfolio item------------------------*/ 
document.addEventListener('click',(e) =>{
    if(e.target.classList.contains('view-project-btn')){
        togglePortfolioPopup();
        document.querySelector('.portfolio-popup').scrollTo(0,0)
        portfolioItemDetails(e.target.parentElement)
    }
})
function togglePortfolioPopup(){
    document.querySelector('.portfolio-popup').classList.toggle('open');
    document.body.classList.toggle('hide-scrolling');
    document.querySelector('.main').classList.toggle('fade-out');
}
document.querySelector('.pp-close').
addEventListener('click', togglePortfolioPopup);

// hide popup when clicking outside of it

document.addEventListener('click', (e) =>{
    if(e.target.classList.contains('pp-inner')){
        togglePortfolioPopup()
    }
})

function portfolioItemDetails(portfolioItem){
    document.querySelector('.pp-thumbnail img').src=
    portfolioItem.querySelector('.porfolio-item-thumbnail img').src;

    document.querySelector('.pp-header h3').innerHTML=
    portfolioItem.querySelector('.portfolio-item-title').innerHTML;

    document.querySelector('.pp-body').innerHTML=
    portfolioItem.querySelector('.portfolio-item-details').innerHTML;
}



