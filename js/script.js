let activebtn= document.querySelectorAll(".category-btn")
console.log(activebtn)


activebtn.forEach((item)=>(

    item.addEventListener('click' ,()=>{
        item.classList.toggle("active")
    })
))

