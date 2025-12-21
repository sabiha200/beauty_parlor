const videoTutorials = [
  {
    thumbnail: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWtldXAlMjB0dXRvcmlhbCUyMGV5ZXNoYWRvd3xlbnwxfHx8fDE3MzM5NDI3MTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Smokey Eye Tutorial for Beginners',
    duration: '12:45',
    views: '125k',
    category: 'Eye Makeup',
    difficulty: 'Beginner',
    youTubeUrl:'https://www.youtube.com/watch?v=SHxLI_2L6Z4'
  },
  {
    thumbnail: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWtldXAlMjBhcHBsaWNhdGlvbnxlbnwxfHx8fDE3MzM5NDI3MTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Flawless Foundation Application',
    duration: '15:20',
    views: '98k',
    category: 'Face',
    difficulty: 'Beginner',
    youTubeUrl:'https://www.youtube.com/shorts/DxJOIvH-jqg'
  },
  {
    thumbnail: 'https://images.unsplash.com/photo-1617897903246-719242758050?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXBzdGljayUyMGFwcGxpY2F0aW9ufGVufDF8fHx8MTczMzk0MjcxM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Perfect Winged Eyeliner',
    duration: '8:30',
    views: '210k',
    category: 'Eye Makeup',
    difficulty: 'Intermediate',
    youTubeUrl:'https://www.youtube.com/watch?v=xJyx2VZY-Is'
  },
  {
    thumbnail: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250b3VyJTIwbWFrZXVwfGVufDF8fHx8MTczMzk0MjcxM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Contouring Like a Pro',
    duration: '18:15',
    views: '156k',
    category: 'Face',
    difficulty: 'Advanced',
    youTubeUrl:'https://www.youtube.com/shorts/uZJ2VdXEpnI'
  },
  {
    thumbnail: 'https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXAlMjBtYWtldXB8ZW58MXx8fHwxNzMzOTQyNzEzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Ombre Lips Technique',
    duration: '10:00',
    views: '87k',
    category: 'Lips',
    difficulty: 'Intermediate',
    youTubeUrl:'https://www.youtube.com/watch?v=OImc2LB8CVc'
  },
  {
    thumbnail: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleWVicm93JTIwbWFrZXVwfGVufDF8fHx8MTczMzk0MjcxM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Natural Eyebrow Filling',
    duration: '7:45',
    views: '92k',
    category: 'Eye Makeup',
    difficulty: 'Beginner',
    youTubeUrl:'https://www.youtube.com/shorts/ZVHnFbji198'
  },
  {
    thumbnail: 'https://images.unsplash.com/photo-1614159102369-effd79eadadd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luY2FyZSUyMHJvdXRpbmV8ZW58MXx8fHwxNzMzOTQyNzEzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Pre-Makeup Skincare Routine',
    duration: '11:30',
    views: '145k',
    category: 'Skincare',
    difficulty: 'Beginner',
    youTubeUrl:'https://www.youtube.com/shorts/z8tcFX4mvig'
  },
  {
    thumbnail: '../images/evening_look.jpg',
    title: 'Glamorous Evening Look',
    duration: '22:00',
    views: '178k',
    category: 'Special Occasions',
    difficulty: 'Advanced',
youTubeUrl:'https://www.youtube.com/results?search_query=Glamorous+Evening+Look'
  },
  {
    thumbnail: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwbWFrZXVwfGVufDF8fHx8MTczMzk0MjcxM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Fresh Everyday Makeup',
    duration: '14:10',
    views: '203k',
    category: 'All',
    difficulty: 'Beginner',
    youTubeUrl:'https://www.youtube.com/shorts/shnaNKqraO0'
  }
];
function openVideo(url) {
  window.open(url, '_blank');
}
const categories = ['All', 'Eye Makeup', 'Face', 'Lips', 'Skincare', 'Special Occasions'];
let selectedCategory = 'All';
let savedTutorials = new Set();

function renderCategories() {
  const tabsContainer = document.getElementById('categoryTabs');
  tabsContainer.innerHTML = categories.map(cat => 
    `<button class="category-btn ${cat === selectedCategory ? 'active' : ''}" onclick="selectCategory('${cat}')">
      ${cat}
    </button>`
  ).join('');
}

function selectCategory(category) {
  selectedCategory = category;
  renderCategories();
  renderTutorials();
}

function toggleSave(index) {
  if (savedTutorials.has(index)) {
    savedTutorials.delete(index);
  } else {
    savedTutorials.add(index);
  }
  renderTutorials();
}

function renderTutorials() {
  const filtered = videoTutorials.filter(t => 
    selectedCategory === 'All' || t.category === selectedCategory
  );

  document.getElementById('tutorialCount').textContent = 
    `${filtered.length} ${filtered.length === 1 ? 'tutorial' : 'tutorials'} available`;

  const grid = document.getElementById('tutorialsGrid');
  grid.innerHTML = filtered.map((tutorial, index) => `
    <div class="tutorial-card">
      <div class="thumbnail-wrapper">
        <img src="${tutorial.thumbnail}" alt="${tutorial.title}" class="thumbnail">
        <div class="play-overlay"  onclick="openVideo('${tutorial.youTubeUrl}')">
          <div class="play-button">
            <svg class="play-icon" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </div>
        <div class="duration-badge">${tutorial.duration}</div>
        <div class="difficulty-badge">${tutorial.difficulty}</div>
      </div>
      <div class="card-content">
        <h3>${tutorial.title}</h3>
        <div class="card-footer">
          <div class="meta-info">
            <div class="meta-item">
              <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
              ${tutorial.duration}
            </div>
            <span>${tutorial.views} views</span>
          </div>
          <div class="action-buttons">
            <button class="icon-button">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
              </svg>
            </button>
            <button class="icon-button bookmark ${savedTutorials.has(index) ? 'saved' : ''}" onclick="toggleSave(${index})">
              <svg fill="${savedTutorials.has(index) ? 'currentColor' : 'none'}" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

renderCategories();
renderTutorials();