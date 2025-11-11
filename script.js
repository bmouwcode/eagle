
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("mainForm");
  const log = document.getElementById("log");
  const body = document.querySelector("body");
  form.addEventListener("submit", (event) => {
    const data = new FormData(form);
    let output = "";
    for (const entry of data) {
      output += `${entry[0]}=${entry[1]}\r`;
    }
    

    const selectedOption = data.get("options");
    if (selectedOption) {
      log.innerText = `HI ${selectedOption} HI2`;
    } else {
      log.innerText = "HI No option selected HI2";  // Fallback message if no option is selected
    }
    if(selectedOption === "banana") {
      body.style.backgroundColor = "yellow";
    }
    else{
      body.style.backgroundColor = "purple";
    }

    event.preventDefault();
  });
});

