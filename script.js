const form = document.getElementById("mainForm");
const log = document.getElementById("log");

form.addEventListener("submit", (event) => {
  const data = new FormData(form);
  let output = "";
  for (const entry of data) {
    output = `${output}${entry[0]}=${entry[1]}\r`;
  }
  console.log(output);
  log.innerText = output;
  event.preventDefault();
});
