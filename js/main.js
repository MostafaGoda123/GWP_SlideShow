let all_imgs = document.querySelectorAll(".slide .imgs img");
let all_lis = document.querySelectorAll(".slide ul li");
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let currImg = 1 ;

if (currImg == 1) {
   prev.style.cursor = "not-allowed"
   prev.style.opacity = "0.5" ;
}else if (currImg == 8) {
   next.style.cursor = "not-allowed"
   next.style.opacity = "0.5" ;
}else {
   prev.style.cursor = "pointer"
   prev.style.opacity = "1" ;
   next.style.cursor = "pointer"
   next.style.opacity = "1" ;
}

next.addEventListener("click" , function(){
   all_imgs.forEach(img => {
      img.classList.remove("active");
   });
   all_lis.forEach(li => {
      li.classList.remove("active");
   });
   if ( currImg != 8 ) {
      currImg++;
   }
   all_imgs[currImg - 1].classList.add("active");
   all_lis[currImg - 1].classList.add("active");
   if (currImg == 1) {
      prev.style.cursor = "not-allowed" ;
      prev.style.opacity = "0.5" ;
   }else if (currImg == 8) {
      next.style.cursor = "not-allowed"
      next.style.opacity = "0.5" ;
   }else {
      prev.style.cursor = "pointer"
      prev.style.opacity = "1" ;
      next.style.cursor = "pointer"
      next.style.opacity = "1" ;
   }
})
prev.addEventListener("click" , function(){
   all_imgs.forEach(img => {
      img.classList.remove("active");
   });
   all_lis.forEach(li => {
      li.classList.remove("active");
   });
   if ( currImg != 1 ) {
      currImg--;
   }
   all_imgs[currImg - 1].classList.add("active");
   all_lis[currImg - 1].classList.add("active");
   if (currImg == 1) {
      prev.style.cursor = "not-allowed"
      prev.style.opacity = "0.5" ;
   }else if (currImg == 8) {
      next.style.cursor = "not-allowed"
      next.style.opacity = "0.5" ;
   }else {
      prev.style.cursor = "pointer"
      prev.style.opacity = "1" ;
      next.style.cursor = "pointer"
      next.style.opacity = "1" ;
   }
})
all_lis.forEach( li => {
   li.addEventListener("click",function(){
      currImg = parseInt(li.innerHTML) ;
      all_imgs.forEach(img => {
         img.classList.remove("active");
      });
      all_lis.forEach(li => {
         li.classList.remove("active");
      });
      all_imgs[currImg - 1].classList.add("active");
      all_lis[currImg - 1].classList.add("active");
      if (currImg == 1) {
         prev.style.cursor = "not-allowed"
         prev.style.opacity = "0.5" ;
      }else {
         prev.style.cursor = "pointer"
         prev.style.opacity = "1" ;
      }
      if (currImg == 8) {
         next.style.cursor = "not-allowed"
         next.style.opacity = "0.5" ;
      }else {
         next.style.cursor = "pointer"
         next.style.opacity = "1" ;
      }
   })
});

