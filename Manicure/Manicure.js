const services = [
  {
    icon: "hand-metal",
    title: "Classic Manicure",
    description: "Professional nail shaping, cuticle care, and a flawless polish finish for perfectly groomed hands.",
    image: "../images/classsic_mani.jpg",
    duration: "30–45 min"
  },
  {
    icon: "sparkles",
    title: "Spa Manicure",
    description: "Hydrating hand treatment, gentle massage, and nail care for soft, healthy, and glowing hands.",
    image: "../images/spa.jpg",
    duration: "45–60 min"
  },
  {
    icon: "droplets",
    title: "Classic Pedicure",
    description: "Expert nail trimming, cuticle care, exfoliation, and polish for beautiful, well-groomed feet.",
    image: "../images/classic_pedicure.webp",
    duration: "45–60 min"
  },
  {
    icon: "flower-2",
    title: "Luxury Spa Pedicure",
    description: "Deep moisturizing treatment with foot massage, exfoliation, and long-lasting nail polish for ultimate relaxation.",
    image: "../images/luxury_pedicure.jpg",
    duration: "60–75 min"
  },
  {
    icon: "heart",
    title: "Gel Manicure",
    description: "Durable, glossy gel polish application for strong and vibrant nails that last longer.",
    image: "../images/gel_manicure.jpg",
    duration: "45–60 min"
  },
  {
    icon: "eye",
    title: "Nail Art & Design",
    description: "Creative nail designs and artwork to add personality and style to your manicure or pedicure.",
    image: "../images/nail_art.jpg",
    duration: "60–90 min"
  }
];

// Example usage: console.log(services);
console.log(services);


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
