const services = [
  {
    icon: "droplets",
    title: "Hydrating Face Serum",
    description: "A nourishing serum packed with vitamins to hydrate, brighten, and rejuvenate your skin.",
    image: "../images/hydrading_face_serum.webp",
    duration: "Use daily"
  },
  {
    icon: "sparkles",
    title: "Luxury Body Lotion",
    description: "Smooth, moisturizing lotion enriched with natural extracts to keep your skin soft and glowing.",
    image: "../images/luxary_body_lotion.jpg",
    duration: "Daily"
  },
  {
    icon: "hand-metal",
    title: "Nail Care Kit",
    description: "Complete kit with nail polish, cuticle care, and hand cream for healthy, beautiful nails.",
    image: "../images/nail_kit.webp",
    duration: "As needed"
  },
  {
    icon: "flower-2",
    title: "Aromatherapy Essential Oils",
    description: "Pure essential oils to relax, refresh, and uplift your mind and body.",
    image: "../images/aromatic_oil.jpg",
    duration: "Use in diffuser"
  },
  {
    icon: "heart",
    title: "Face Mask Collection",
    description: "Variety of face masks for hydration, brightening, and deep skin nourishment.",
    image: "../images/face_mask.avif",
    duration: "2–3 times/week"
  },
  {
    icon: "eye",
    title: "Spa Gift Set",
    description: "Complete spa set including lotions, oils, and bath products for ultimate relaxation at home.",
    image: "../images/spa_gift_kit.jpg",
    duration: "Use as desired"
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
