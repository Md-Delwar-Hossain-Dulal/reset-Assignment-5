// ইনপুট ফিল্ড থেকে সংখ্যা বের করবে
function getInputFieldValueById(id) {
  const inputValue = document.getElementById(id).value;
  return parseFloat(inputValue);
}

// টেক্সট ফিল্ড থেকে সংখ্যা বের করবে
function getTextFieldValueById(id) {
  const textValue = document.getElementById(id).innerText;
  return parseFloat(textValue);
}
// টেক্সট ফিল্ডে নতুন মান সেট করবে
function showSectionById(id) {
  // hide all the section
  document.getElementById("mainContent").classList.add("hidden");
  document.getElementById("history-section").classList.add("hidden");
  // প্যারামিটিার দিয়ে দেখাবো
  document.getElementById(id).classList.remove("hidden");
}

//! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>  Donation বাটনের জন্য ফাংশন <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
function showDonationColorById(id) {
  document
    .getElementById("showDonation")
    .classList.add("bg-[#B4F461]", "text-black");
  document.getElementById("showDonation").classList.remove("text-[#111111b3]");
  // history btn
  document
    .getElementById("showHistory")
    .classList.remove("bg-[#B4F461]", "text-black");
  document.getElementById("showHistory").classList.add("text-[#111111b3]");
}

// !>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> History বাটনের জন্য ফাংশন <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
function showHistoryColorById(id) {
  document
    .getElementById("showHistory")
    .classList.add("bg-[#B4F461]", "text-black");
  document.getElementById("showHistory").classList.remove("text-[#111111b3]");
  // *Donation btn
  document
    .getElementById("showDonation")
    .classList.remove("bg-[#B4F461]", "text-black");
  document.getElementById("showDonation").classList.add("text-[#111111b3]");
}
