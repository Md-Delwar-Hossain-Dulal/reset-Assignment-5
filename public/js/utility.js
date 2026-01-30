console.log("ut");
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
  document.getElementById("contentHistory").classList.add("hidden");
  // show the section with the provide id as parameter ( ‍দেখাবে যেইটা তে প্যারামিটিার দিয়ে দেখাবো)
  document.getElementById(id).classList.remove("hidden");
}
