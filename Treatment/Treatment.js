const services=[
  {
    icon:"hand-metal",
    title:"Massage Therapy",
    description:"Relieve tension and stress with expert massage treatments.",
    image:"../images/salt_bath.jpg",
    duration:"60-90 min"
  },
  {
    icon:"sparkles",
    title:"Facial Treatments",
    description:"Customized facials for healthy and glowing skin.",
    image:"https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1080&q=80",
    duration:"45-60 min"
  },
  {
    icon:"droplets",
    title:"Body Treatments",
    description:"Luxury body scrubs and wraps for deep nourishment.",
    image:"https://images.unsplash.com/photo-1704292224744-139b484352d3?auto=format&fit=crop&w=1080&q=80",
    duration:"60-75 min"
  },
  {
    icon:"flower-2",
    title:"Aromatherapy",
    description:"Essential oil therapy for relaxation and balance.",
    image:"https://images.unsplash.com/photo-1621554012433-eb02c38e7193?auto=format&fit=crop&w=1080&q=80",
    duration:"30-60 min"
  },
  {
    icon:"heart",
    title:"Manicure & Pedicure",
    description:"Professional nail care and spa treatments.",
    image:"https://images.unsplash.com/photo-1700760933910-d3c03aa18b65?auto=format&fit=crop&w=1080&q=80",
    duration:"45-90 min"
  },
  {
    icon:"eye",
    title:"Wellness Packages",
    description:"Multiple treatments combined for full relaxation.",
    image:"https://images.unsplash.com/photo-1716893917077-5b320c1ecfec?auto=format&fit=crop&w=1080&q=80",
    duration:"2-4 hours"
  }
];
const container=document.getElementById("services");

services.forEach(s=>{
  container.innerHTML+=`
    <div class="card">
      <img src="${s.image}" alt="${s.title}">
      <div class="card-body">
        <div class="icon-box"><i data-lucide="${s.icon}"></i></div>
        <h3>${s.title}</h3>
        <p>${s.description}</p>
        <div class="duration">${s.duration}</div>
      </div>
    </div>
  `;
});

lucide.createIcons();
