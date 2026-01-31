// ?page
function homeFunction() {
  location.replace("index.html");
}
function blogFunction() {
  location.replace("blog.html");
}

//! Donation & History Bbt hh/
document.getElementById("showDonation").addEventListener("click", function () {
  showSectionById("mainContent");
  showColorById("showDonation");
});

document.getElementById("showHistory").addEventListener("click", function () {
  showSectionById("history-section");
  showColorById("showHistory");
});

const donate = document.getElementById("showDonation");
const history = document.getElementById("showHistory");

history.addEventListener("click", function () {
  history.classList.add("bg-[#B4F461]", "text-black");

  history.classList.remove("text-[#111111b3]");

  donate.classList.remove("bg-[#B4F461]");

  donate.classList.add("text-[#111111b3]");
});

donate.addEventListener("click", function () {
  donate.classList.add("bg-[#B4F461]", "text-black");

  donate.classList.remove("text-[#111111b3]");

  history.classList.remove("bg-[#B4F461]", "text-black");

  history.classList.add("text-[#111111b3]");
});
