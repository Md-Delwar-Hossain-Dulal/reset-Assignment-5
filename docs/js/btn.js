// ?page Home to Blog , ,,,, Blog to Home.
function homeFunction() {
  location.replace("index.html");
}
function blogFunction() {
  location.replace("blog.html");
}

//! Donation & History Bbt hh/
// showDonation হলো nav id
document.getElementById("showDonation").addEventListener("click", function () {
  showSectionById("mainContent"); // section hide
  showDonationColorById("showDonation"); // Donation Color btn
});
// showHistory হলো nav id
document.getElementById("showHistory").addEventListener("click", function () {
  showSectionById("history-section"); // section hide
  showHistoryColorById("showHistory"); // History Color btn
});
