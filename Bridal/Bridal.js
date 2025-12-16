const services = [
  {
    icon: "hand-metal",
    title: "Bridal Makeup",
    description: "Professional bridal makeup to create a flawless and radiant look for your special day.",
    image: "../images/bridal.png",
    duration: "2–3 hours"
  },
  {
    icon: "sparkles",
    title: "Hair Styling & Updos",
    description: "Elegant bridal hairstyles and updos designed to complement your dress and overall look.",
    image: "../images/hair_styling _1.jpg",
    duration: "1–2 hours"
  },
  {
    icon: "droplets",
    title: "Pre-Wedding Facials",
    description: "Customized facials to ensure glowing and healthy skin before your big day.",
    image: "../images/facial.png",
    duration: "60–90 min"
  },
  {
    icon: "flower-2",
    title: "Bridal Spa Treatments",
    description: "Relaxing body massages and spa treatments to rejuvenate and reduce stress before the wedding.",
    image: "../images/bridal_spa.webp",
    duration: "60–120 min"
  },
  {
    icon: "heart",
    title: "Manicure & Pedicure",
    description: "Special bridal nail care, polish, and nail art to complete your wedding look.",
    image: "../images/mani_padi.avif",
    duration: "45–90 min"
  },
  {
    icon: "eye",
    title: "Complete Bridal Package",
    description: "All-in-one bridal services combining makeup, hair, spa, and nail treatments for total wedding day perfection.",
    image: "../images/bridal_image.jpg",
    duration: "4–6 hours"
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
