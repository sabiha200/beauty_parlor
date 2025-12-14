let activebtn= document.querySelectorAll(".category-btn")
console.log(activebtn)


activebtn.forEach((item)=>(

    item.addEventListener('click' ,()=>{
        item.classList.toggle("active")
    })
))


 $(document).ready(function(){
    $('.mentor').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1
    });
  });