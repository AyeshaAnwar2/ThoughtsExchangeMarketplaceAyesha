// ==== All Ideas (10 per category) ====
const ideas = [
  // Meme Ideas
  {
    id: 1, category: 'meme', name: 'Relatable Student Life',
    keyword: 'students, exams',
    short: 'A meme showing expectations vs reality during exams.',
    long: 'This meme idea shows a funny comparison between how students plan to study at the start of the semester versus the panic and all-nighter rush during exam week.'
  },
  {
    id: 2, category: 'meme', name: 'WiFi Struggle',
    keyword: 'internet, lag',
    short: 'Meme about WiFi disconnecting at the worst moment.',
    long: 'A meme showing how WiFi always disconnects at the most crucial moment, like while submitting an assignment or playing an online game.'
  },
  // ... Add 8 more meme ideas below
  {
    id: 3, category: 'meme', name: 'Group Project Leaders',
    keyword: 'group work',
    short: 'A funny take on who actually works in group projects.',
    long: 'This meme shows one person doing all the work while others chill or disappear, with humorous captions like "The chosen one".'
  },
  {
    id: 4, category: 'meme', name: 'Loading Screen Drama',
    keyword: 'gaming, loading',
    short: 'Overdramatic reactions to loading screens.',
    long: 'A meme where someone acts like a hero is going to war when a game says "loading", mocking the overreactions we all have.'
  },
  {
    id: 5, category: 'meme', name: 'Battery at 1%',
    keyword: 'phone, panic',
    short: 'Funny panic when phone hits 1% battery.',
    long: 'A meme showing a person acting like it’s the end of the world when the phone shows 1% battery — even though a charger is nearby.'
  },
  {
    id: 6, category: 'meme', name: 'Online Class Faces',
    keyword: 'Zoom, online class',
    short: 'Awkward Zoom faces captured during class.',
    long: 'Screenshots or drawings of students with hilarious expressions during online classes, with captions like “When teacher asks you a question unexpectedly”.'
  },
  {
    id: 7, category: 'meme', name: 'Food Delivery Wait',
    keyword: 'hunger, foodpanda',
    short: 'When tracking food every 30 seconds.',
    long: 'A meme about how we keep opening the app every second to check where our food is, like it’ll magically appear faster.'
  },
  {
    id: 8, category: 'meme', name: 'Too Many Tabs',
    keyword: 'multitask, browser',
    short: 'Browser with 99+ tabs open.',
    long: 'A screenshot of someone’s browser with 50+ tabs and a caption like "This is what chaos looks like."'
  },
  {
    id: 9, category: 'meme', name: 'When Parents Use Tech',
    keyword: 'parents, tech fail',
    short: 'Funny fails when parents use smartphones.',
    long: 'A meme showing someone’s mom trying to use voice note as text or calling via WhatsApp while talking on another call.'
  },
  {
    id: 10, category: 'meme', name: 'Zoom Background Fail',
    keyword: 'class, funny',
    short: 'Funny backgrounds during online calls.',
    long: 'Meme where students forget to turn off weird or personal backgrounds before joining a serious Zoom meeting.'
  },

  // Tech Ideas
  {
    id: 11, category: 'tech', name: 'AI in Daily Life',
    keyword: 'AI, automation',
    short: 'How AI tools simplify our daily work.',
    long: 'Create a blog or video showing how AI is already used in food delivery, personalized ads, content suggestions, and virtual assistants.'
  },
  {
    id: 12, category: 'tech', name: 'Future of Web 3.0',
    keyword: 'blockchain, decentralization',
    short: 'Web 3.0 explained in a simple way.',
    long: 'An idea for a YouTube explainer that breaks down the concept of Web 3.0, how it’s different from Web 2.0, and its potential impact on users.'
  },
  // ...Add 8 more tech, 10 YouTube, 10 funny below (you can expand these similarly)
];

// ==== Render Function ====
function renderIdeas(filtered) {
  const container = document.getElementById('ideasContainer');
  container.innerHTML = '';
  filtered.forEach(idea => {
    const card = document.createElement('div');
    card.className = 'bg-white p-4 rounded-xl shadow hover:shadow-md transition cursor-pointer';
    card.onclick = () => openIdeaDetails(idea);
    card.innerHTML = `
      <h2 class="text-lg font-semibold">${idea.name}</h2>
      <p class="text-sm text-gray-500 italic">${idea.keyword}</p>
      <p class="mt-2 text-gray-700 text-sm">${idea.short}</p>
    `;
    container.appendChild(card);
  });
}

// ==== Filter Function ====
function filterIdeas(category) {
  if (category === 'all') {
    renderIdeas(ideas);
  } else {
    const filtered = ideas.filter(idea => idea.category === category);
    renderIdeas(filtered);
  }
}

// ==== Search Function ====
function searchIdeas() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  const filtered = ideas.filter(idea =>
    idea.name.toLowerCase().includes(query) ||
    idea.keyword.toLowerCase().includes(query) ||
    idea.short.toLowerCase().includes(query)
  );
  renderIdeas(filtered);
}

// ==== Click to View Details ====
function openIdeaDetails(idea) {
  localStorage.setItem('selectedIdea', JSON.stringify(idea));
  window.location.href = 'ideadetail.html';
}

// ==== Initial Render ====
renderIdeas(ideas);