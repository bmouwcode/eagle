
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("mainForm");
  const log = document.getElementById("log");
  form.addEventListener("submit", (event) => {
    const data = new FormData(form);
    let output = "";
    for (const entry of data) {
      output += `${entry[0]}=${entry[1]}\r`;
    }
    log.innerText = "HI";
    event.preventDefault();
  });
});

