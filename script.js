
// Sample ideas (You can later add a form for admin input)
const ideas = [
  {
    name: "Daily Meme Pack",
    keyword: "#funny, #trending",
    description: "Post 5 memes every morning that reflect trending topics.",
    category: "meme"
  },
   {
    name: "Daily Meme Pack",
    keyword: "#funny, #trending",
    description: "Post 5 memes every morning that reflect trending topics.",
    category: "meme"
  },
  {
    name: "Tech Tuesday",
    keyword: "#gadgets, #AI",
    description: "Every Tuesday share tech tips or gadget reviews.",
    category: "tech"
  },
  {
    name: "React Tutorial Series",
    keyword: "#YouTube, #coding",
    description: "Break down React into 10 mini-tutorial videos.",
    category: "youtube"
  },
  {
    name: "Comedy Shorts",
    keyword: "#skits, #jokes",
    description: "Create short funny videos under 30 seconds.",
    category: "funny"
  },
  {
    name: "Behind The Code",
    keyword: "#vlog, #coding life",
    description: "YouTube vlog about your daily developer routine.",
    category: "youtube"
  }
];

const container = document.getElementById("ideasContainer");
const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filter-btn");

let currentCategory = "all";

// Display ideas
function displayIdeas(filteredIdeas) {
  container.innerHTML = "";

  if (filteredIdeas.length === 0) {
    container.innerHTML = `<p class="text-center text-gray-500 col-span-2">No ideas found.</p>`;
    return;
  }

  filteredIdeas.forEach((idea) => {
    const card = document.createElement("div");
    card.className = "bg-white p-4 rounded-xl shadow hover:shadow-md transition";

    card.innerHTML = `
      <h2 class="text-xl font-bold mb-2">${idea.name}</h2>
      <p class="text-sm bg-gray-200 text-gray-600 pl-2 mb-1"><strong></strong> ${idea.keyword}</p>
      <p class="text-gray-700">${idea.description}</p>
    `;

    container.appendChild(card);
  });
}

// Filter and search logic
function filterAndSearchIdeas() {
  const searchText = searchInput.value.toLowerCase();
  const filtered = ideas.filter((idea) => {
    const matchCategory = currentCategory === "all" || idea.category === currentCategory;
    const matchSearch =
      idea.name.toLowerCase().includes(searchText) ||
      idea.keyword.toLowerCase().includes(searchText) ||
      idea.description.toLowerCase().includes(searchText);
    return matchCategory && matchSearch;
  });

  displayIdeas(filtered);
}

// Event listeners
searchInput.addEventListener("input", filterAndSearchIdeas);

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Remove active style from all buttons
    filterButtons.forEach(b => {
      b.classList.remove("ring-2", "ring-offset-2", "ring-black", "scale-105", "bg-black");
    });

    // Add active style to the clicked button
    btn.classList.add("ring-2", "ring-offset-2", "ring-black", "scale-105", "bg-black");

    currentCategory = btn.dataset.category;
    filterAndSearchIdeas();
  });
});

// Initial load
displayIdeas(ideas);