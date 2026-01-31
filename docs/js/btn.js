// ?page
function homeFunction() {
  location.replace("index.html");
}
function blogFunction() {
  location.replace("blog.html");
}

document.getElementById("showDonation").addEventListener("click", function () {
  showSectionById("mainContent");
});

document.getElementById("showHistory").addEventListener("click", function () {
  showSectionById("history-section");
});
