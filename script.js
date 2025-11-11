
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("mainForm");
  const log = document.getElementById("log");
  const style = document.querySelector("style");
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
      style.textContent += "body {background-color:yellow;}";
    }
    else{
      style.textContent += "body {background-color:purple;}";
    }

    event.preventDefault();
  });
});

