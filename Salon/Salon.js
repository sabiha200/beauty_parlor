const services = [
  {
    icon: "hand-metal",
    title: "Skin Consultation",
    description: "Personalized skin analysis and expert advice to choose the best treatments and products for your skin type.",
    image: "../images/skin_consultation.jpg",
    duration: "30–45 min"
  },
  {
    icon: "sparkles",
    title: "Hair & Scalp Consultation",
    description: "Expert evaluation of hair and scalp to recommend the right treatments, colors, and hair care routine.",
    image: "../images/hair_scalp_consult.avif",
    duration: "30–60 min"
  },
  {
    icon: "droplets",
    title: "Bridal Consultation",
    description: "Personalized bridal makeup, hairstyle, and spa planning to ensure a flawless look for your wedding day.",
    image: "../images/bridal_consultation.avif",
    duration: "60–90 min"
  },
  {
    icon: "flower-2",
    title: "Wellness Consultation",
    description: "Expert guidance on spa treatments, massages, and wellness routines to maintain balance and relaxation.",
    image: "../images/wellness_consuktation.webp",
    duration: "30–60 min"
  },
  {
    icon: "heart",
    title: "c:\Users\User\Downloads\salt_bath.jpg",
    description: "Professional advice on nail care, polish options, and manicure/pedicure treatments for healthy, beautiful nails.",
    image: "https://images.unsplash.com/photo-1700760933910-d3c03aa18b65?auto=format&fit=crop&w=1080&q=80",
    duration: "20–30 min"
  },
  {
    icon: "eye",
    title: "Complete Consultation Package",
    description: "Comprehensive consultation covering skin, hair, nails, and wellness to create a personalized beauty plan.",
    image: "https://images.unsplash.com/photo-1716893917077-5b320c1ecfec?auto=format&fit=crop&w=1080&q=80",
    duration: "1–2 hours"
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
