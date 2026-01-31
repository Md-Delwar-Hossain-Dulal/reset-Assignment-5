// !>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Start DOM for noakhali <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
document
  .getElementById("btn-donate-noakhali")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const inputNoakhali = getInputFieldValueById("amount-input-noakhali");
    const noakhaliBalance = getTextFieldValueById("noakhali-balance");
    const navBalance = getTextFieldValueById("available-balance");

    // Validation
    if (isNaN(inputNoakhali) || inputNoakhali <= 0) {
      document.getElementById("amount-input-noakhali").value = "";
      return alert("Invalid amount or Input field empty");
    }

    // Balance check
    if (inputNoakhali > navBalance) {
      document.getElementById("amount-input-noakhali").value = "";
      return alert("Insufficient Balance");
    } else {
      // Balance update
      const updateNoakhaliBalance = noakhaliBalance + inputNoakhali;
      const updateNavBalance = navBalance - inputNoakhali;

      document.getElementById("noakhali-balance").innerText =
        updateNoakhaliBalance;
      document.getElementById("available-balance").innerText = updateNavBalance;

      // Input field empty
      document.getElementById("amount-input-noakhali").value = "";
      document.getElementById("my_modal_1").showModal();
    }
    const div = document.createElement("div");
    div.innerHTML = `
                    <div class=" p-8 mt-10 flex flex-col bg-white border rounded-2xl border-[#e7e7e7]  items-center justify-center shadow-sm">
                       <h2 class="font-bold text-lg"> ${inputNoakhali}Taka is Donated for famine-2024 at Feni,Bangladesh</h2>
                       <p> Date ${new Date()} </p>
                  </div> 
    
    `;
    document.getElementById("contentHistory").appendChild(div);
  });
// !>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> End DOM for noakhali <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// !>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  start Feni DOM <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

document
  .getElementById("btn-donate-feni")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const inputfeni = getInputFieldValueById("amount-input-feni");
    const feniBalance = getTextFieldValueById("feni-balance");
    const navBalance = getTextFieldValueById("available-balance");

    // Validation
    if (isNaN(inputfeni) || inputfeni <= 0) {
      document.getElementById("amount-input-noakhali").value = "";
      return alert("Invalid amount or Input field empty");
    }

    // Balance check
    if (inputfeni > navBalance) {
      document.getElementById("amount-input-noakhali").value = "";
      return alert("Insufficient Balance");
    } else {
      // Balance update
      const updateFeniBalance = feniBalance + inputfeni;
      const updateNavBalance = navBalance - inputfeni;

      document.getElementById("feni-balance").innerText = updateFeniBalance;
      document.getElementById("available-balance").innerText = updateNavBalance;
      document.getElementById("my_modal_1").showModal();
      // Input field empty
      document.getElementById("amount-input-feni").value = "";
    }

    const div = document.createElement("div");
    div.innerHTML = `
                    <div class="p-8 mt-10 flex flex-col bg-white border rounded-2xl border-[#e7e7e7] items-center justify-center shadow-sm">
                       <h2 class="font-bold text-lg"> ${inputfeni} Taka is Donated for famine-2024 at Feni, Bangladesh</h2>
                       <p> Date ${new Date()} </p>
                  </div>
    
    `;
    document.getElementById("contentHistory").appendChild(div);
  });
// !>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> End feni Dom <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// ! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Start Quota Dom >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

document
  .getElementById("btn-donate-quota")
  .addEventListener("click", function (event) {
    console.log("quota ckick");
    event.preventDefault();
    const inputQuota = getInputFieldValueById("amount-input-quota");
    const quotaBalance = getTextFieldValueById("quota-balance");
    const navBalance = getTextFieldValueById("available-balance");
    // Validation
    if (isNaN(inputQuota) || inputQuota <= 0) {
      document.getElementById("amount-input-quota").value = "";
      return alert("Invalid amount or Input field empty");
    }
    console.log("i am in");
    if (inputQuota > navBalance) {
      document.getElementById("amount-input-quota").value = "";
      return alert("Insufficient Balance");
    } else {
      const updateQuataBalance = quotaBalance + inputQuota;
      const updateNavBalance = navBalance - inputQuota;
      document.getElementById("quota-balance").innerText = updateQuataBalance;
      document.getElementById("available-balance").innerText = updateNavBalance;
      document.getElementById("my_modal_1").showModal();
      document.getElementById("amount-input-quota").value = "";
    }
    const div = document.createElement("div");
    div.innerHTML = `
                    <div class=" p-8 flex flex-col mt-10 bg-white border rounded-2xl border-[#e7e7e7]  items-center justify-center shadow-sm">
                       <h2 class="font-bold text-lg"> ${inputQuota} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h2>
                       <p> Date ${new Date()} </p>
                  </div>
    
    `;
    document.getElementById("contentHistory").appendChild(div);
  });
// ! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> End Quota Dom >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
