let all_imgs = document.querySelectorAll(".slide .imgs img");
let all_lis = document.querySelectorAll(".slide ul li");
let prev = document.getElementById("prev")
let next = document.getElementById("next")
let currImg = 1 ;

if ( currImg == 1 ) {
   prev.style.opacity = "0.5";
   prev.style.cursor = "not-allowed";
}else if (currImg == 8) {
   next.style.opacity = "0.5";
   next.style.cursor = "not-allowed";
}else {
   prev.style.opacity = "1";
   prev.style.cursor = "pointer";
   next.style.opacity = "1";
   next.style.cursor = "pointer";
}
next.addEventListener("click" , function(){
   all_imgs.forEach(img => {
      img.classList.remove("active");
   })
   all_lis.forEach(li => {
      li.classList.remove("active");
   })
   if (currImg != 8) {
      currImg++ ;
   }
   all_imgs[currImg - 1] .classList.add("active");
   all_lis[currImg - 1] .classList.add("active");
   if ( currImg == 1 ) {
      prev.style.opacity = "0.5";
      prev.style.cursor = "not-allowed";
   }else if (currImg == 8) {
      next.style.opacity = "0.5";
      next.style.cursor = "not-allowed";
   }else {
      prev.style.opacity = "1";
      prev.style.cursor = "pointer";
      next.style.opacity = "1";
      next.style.cursor = "pointer";
   }
})
prev.addEventListener("click" , function(){
   all_imgs.forEach(img => {
      img.classList.remove("active");
   })
   all_lis.forEach(li => {
      li.classList.remove("active");
   })
   if (currImg != 1) {
      currImg-- ;
   }
   all_imgs[currImg - 1] .classList.add("active");
   all_lis[currImg - 1] .classList.add("active");
   if ( currImg == 1 ) {
      prev.style.opacity = "0.5";
      prev.style.cursor = "not-allowed";
   }else if (currImg == 8) {
      next.style.opacity = "0.5";
      next.style.cursor = "not-allowed";
   }else {
      prev.style.opacity = "1";
      prev.style.cursor = "pointer";
      next.style.opacity = "1";
      next.style.cursor = "pointer";
   }
})
all_lis.forEach(li => {
   li.addEventListener("click", function(){
      currImg = parseInt(li.innerHTML);
      all_imgs.forEach(img => {
         img.classList.remove("active");
      })
      all_lis.forEach(li => {
         li.classList.remove("active");
      })
      all_imgs[currImg - 1] .classList.add("active");
      all_lis[currImg - 1] .classList.add("active");
      if ( currImg == 1 ) {
         prev.style.opacity = "0.5";
         prev.style.cursor = "not-allowed";
      }else {
         prev.style.opacity = "1";
         prev.style.cursor = "pointer";
      }
      if (currImg == 8) {
         next.style.opacity = "0.5";
         next.style.cursor = "not-allowed";
      }else {
         next.style.opacity = "1";
         next.style.cursor = "pointer";
      }
   })
})

