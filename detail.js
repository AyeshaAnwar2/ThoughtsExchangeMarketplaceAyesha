// ==== Load Idea from localStorage ====
const selectedIdea = JSON.parse(localStorage.getItem('selectedIdea'));

// ==== Display on Page ====
if (selectedIdea) {
  document.getElementById('ideaName').textContent = selectedIdea.name;
  document.getElementById('ideaKeyword').textContent = selectedIdea.keyword;
  document.getElementById('ideaDescription').textContent = selectedIdea.long;
} else {
  document.getElementById('ideaName').textContent = "No Idea Selected";
  document.getElementById('ideaDescription').textContent = "Please go back and select an idea.";
}

// ==== Back Button ====
function goBack() {
  window.history.back(); // or: window.location.href = 'index.html';
}