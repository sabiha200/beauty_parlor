const services = [
  {
    icon: "hand-metal",
    title: "Relaxing Full Body Massage",
    description: "A gentle full body massage designed to release stress, relax muscles, and restore mind–body balance.",
    image: "https://images.unsplash.com/photo-1696841212541-449ca29397cc?auto=format&fit=crop&w=1080&q=80",
    duration: "60–90 min"
  },
  {
    icon: "sparkles",
    title: "Swedish Relaxation Massage",
    description: "Light to medium pressure massage that improves circulation and promotes deep relaxation.",
    image: "https://images.unsplash.com/photo-1621554012433-eb02c38e7193?auto=format&fit=crop&w=1080&q=80",
    duration: "60 min"
  },
  {
    icon: "droplets",
    title: "Aroma Relax Massage",
    description: "Essential oil massage that calms the senses, reduces anxiety, and relieves muscle tension.",
    image: "https://images.unsplash.com/photo-1704292224744-139b484352d3?auto=format&fit=crop&w=1080&q=80",
    duration: "60–75 min"
  },
  {
    icon: "flower-2",
    title: "Hot Stone Relax Massage",
    description: "Warm stone therapy to ease muscle stiffness, improve blood flow, and deeply relax the body.",
    image: "https://images.unsplash.com/photo-1716893917077-5b320c1ecfec?auto=format&fit=crop&w=1080&q=80",
    duration: "75–90 min"
  },
  {
    icon: "heart",
    title: "Head, Neck & Shoulder Massage",
    description: "Focused massage to relieve tension, headaches, and stress caused by daily activities.",
    image: "https://images.unsplash.com/photo-1700760933910-d3c03aa18b65?auto=format&fit=crop&w=1080&q=80",
    duration: "30–45 min"
  },
  {
    icon: "eye",
    title: "Deep Relax Wellness Package",
    description: "A complete relaxation experience combining multiple massage techniques for total calm and renewal.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1080&q=80",
    duration: "2–3 hours"
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
