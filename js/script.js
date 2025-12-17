//all button
let activebtn= document.querySelectorAll(".category-btn")
// all Card
let card= document.querySelectorAll(".service-card")
let servecard= document.querySelector(".services-grid");



activebtn.forEach((item)=>(

    item.addEventListener('click' ,()=>{
        
      activebtn.forEach((b)=> b.classList.remove("active"))
        item.classList.toggle("active")
       
        card.forEach((el)=>{
          if(item.classList[1]=="allservice"){
             card.forEach((card)=>{
               card.style="display:block"
             })
          }
          if((item.classList[1] == el.classList[1]) && item.classList[2]=="active"){
             el.style="display:block"
             servecard.append(el)
             console.log(servecard)
          }else {
             el.style="display:none"
          }
        
        
        })
    })


))


// slick js start //
    $('.mentor').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow:`<button class="leftarr"><i class="fa-solid fa-angle-left"></i></button>`,
      nextArrow:`<button class="rightarr"><i class="fa-solid fa-angle-right"></i></button>`,
      responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
     
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });
 
//slick js end //