// ?page
function homeFunction() {
  location.replace("index.html");
}
function blogFunction() {
  location.replace("blog.html");
}

//! Donation & History Bbt hh/
// showDonation হলো nav id
document.getElementById("showDonation").addEventListener("click", function () {
  showSectionById("mainContent");
  showColorById("showDonation");
});
// showHistory হলো nav id
document.getElementById("showHistory").addEventListener("click", function () {
  showSectionById("history-section");
  showColorById("showHistory");
});

// function showColorById(id) {
//   document
//     .getElementById("showDonation")
//     .classList.add("bg-[#F8F8F8],text-[#111111b3]");
//   document
//     .getElementById("showHistory")
//     .classList.add("bg-[#F8F8F8], text-[#111111b3]");
//   document.getElementById(id).classList.add("bg-lime-400", "text-black");
// }

// const donate = document.getElementById("showDonation");
// const history = document.getElementById("showHistory");

// history.addEventListener("click", function () {
//   history.classList.add("bg-[#B4F461]", "text-black");

//   history.classList.remove("text-[#111111b3]");

//   donate.classList.remove("bg-[#B4F461]");

//   donate.classList.add("text-[#111111b3]");
// });

// donate.addEventListener("click", function () {
//   donate.classList.add("bg-[#B4F461]", "text-black");

//   donate.classList.remove("text-[#111111b3]");

//   history.classList.remove("bg-[#B4F461]", "text-black");

//   history.classList.add("text-[#111111b3]");
// });
