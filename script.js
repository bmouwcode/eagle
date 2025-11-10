const form = document.getElementById("mainForm");
const log = document.getElementById("log");

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const log = document.getElementById("log");
  form.addEventListener("submit", (event) => {
    const data = new FormData(form);
    let output = "";
    for (const entry of data) {
      output += `${entry[0]}=${entry[1]}\r`;
    }
    log.innerText = data.get("yes1");
    event.preventDefault();
  });
});

