
const services = [
  {
    icon: "stethoscope",
    title: "Health Assessment",
    description: "Comprehensive health evaluation and personalized wellness plan.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1080&q=80",
    duration: "60-90 min",
    features: ["Full body assessment", "Health history review", "Lifestyle analysis", "Custom wellness plan"]
  },
  {
    icon: "brain",
    title: "Mental Wellness",
    description: "Expert counseling for stress, anxiety, and emotional balance.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1080&q=80",
    duration: "45-60 min",
    features: ["Stress assessment", "Coping strategies", "Mindfulness techniques", "Follow-up support"]
  },
  {
    icon: "apple",
    title: "Nutrition Consultation",
    description: "Personalized diet plans and nutritional guidance for optimal health.",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1080&q=80",
    duration: "45-60 min",
    features: ["Dietary analysis", "Custom meal plans", "Supplement advice", "Progress tracking"]
  },
  {
    icon: "dumbbell",
    title: "Fitness Planning",
    description: "Tailored exercise programs designed for your goals and lifestyle.",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1080&q=80",
    duration: "60 min",
    features: ["Fitness assessment", "Goal setting", "Exercise program", "Technique guidance"]
  },
  {
    icon: "moon",
    title: "Sleep Therapy",
    description: "Improve sleep quality with expert guidance and relaxation techniques.",
    image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=1080&q=80",
    duration: "45 min",
    features: ["Sleep pattern analysis", "Bedroom optimization", "Relaxation methods", "Sleep hygiene tips"]
  },
  {
    icon: "users",
    title: "Couples Wellness",
    description: "Joint consultation for couples seeking balanced health together.",
    image: "https://images.unsplash.com/photo-1521898284481-a5ec348cb555?auto=format&fit=crop&w=1080&q=80",
    duration: "90 min",
    features: ["Relationship wellness", "Shared health goals", "Partner activities", "Communication support"]
  },
  {
    icon: "leaf",
    title: "Holistic Lifestyle",
    description: "Complete lifestyle transformation through natural wellness practices.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1080&q=80",
    duration: "75-90 min",
    features: ["Life balance review", "Natural remedies", "Meditation guidance", "Energy healing"]
  },
  {
    icon: "baby",
    title: "Prenatal & Postnatal",
    description: "Specialized care and guidance for expecting and new mothers.",
    image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=1080&q=80",
    duration: "60 min",
    features: ["Pregnancy wellness", "Safe exercises", "Nutritional needs", "Postpartum recovery"]
  },
  {
    icon: "sparkles",
    title: "Skin & Beauty",
    description: "Expert consultation for radiant skin and anti-aging solutions.",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=1080&q=80",
    duration: "45-60 min",
    features: ["Skin analysis", "Product recommendations", "Treatment planning", "Home care routine"]
  },
  {
    icon: "shield-check",
    title: "Preventive Care",
    description: "Proactive health monitoring and disease prevention strategies.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1080&q=80",
    duration: "90 min",
    features: ["Health screening", "Risk assessment", "Prevention plan", "Lifestyle modifications"]
  },
  {
    icon: "wind",
    title: "Detox & Cleanse",
    description: "Guided programs to cleanse your body and boost energy levels.",
    image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&w=1080&q=80",
    duration: "60 min",
    features: ["Toxin assessment", "Detox protocols", "Cleansing diet", "Supplement guidance"]
  },
  {
    icon: "package",
    title: "Ultimate Wellness Package",
    description: "Comprehensive multi-session program for complete transformation.",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1080&q=80",
    duration: "3-6 months",
    features: ["All consultations included", "Monthly check-ins", "Priority scheduling", "Ongoing support"]
  }
];

// Export for use in your application

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
