const button = document.getElementById("toggleBtn");
const bio = document.getElementById("bio");

button.addEventListener("click", function () {
  if (bio.style.display === "none") {
    bio.style.display = "block";
  } else {
    bio.style.display = "none";
  }
});

