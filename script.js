//---Page cycling functionality---

//List of pages on the main site
let pages = ["setup", "auto", "teleop", "export"];
//the page the site is currently on
let currPage = "setup";
//function to move one page right
function cycleRight() {
    let idx = pages.indexOf(currPage);
    if(idx < pages.length - 1) {
        document.getElementById(currPage).hidden = true;
        currPage = pages[idx + 1];
        document.getElementById(currPage).hidden = false;
    }
}
//funtion to move one page left
function cycleLeft() {
    let idx = pages.indexOf(currPage);
    if(idx > 0) {
        document.getElementById(currPage).hidden = true;
        currPage = pages[idx - 1];
        document.getElementById(currPage).hidden = false;
    }
}
//linking the functions to the buttons
document.getElementById("nextPage").onclick = cycleRight;
document.getElementById("prevPage").onclick = cycleLeft;



//---Scripting for auto fuel scored---

//get elements for current value of counter
let fuelAutoP = document.getElementById("counterAuto");
let fuelAutoInp = document.getElementById("fuelAutoInput");
//add one to counter
function incFuelAuto() {
    let value = parseInt(fuelAutoInp.value, 10);
    value++;

    fuelAutoInp.value = value;
    fuelAutoP.textContent = value;
}
//subtract one from counter
function decFuelAuto() {
    let value = parseInt(fuelAutoInp.value, 10);
    value--;
    value = Math.max(0, value);

    fuelAutoInp.value = value;
    fuelAutoP.textContent = value;
}
//link funcs to buttons
document.getElementById("plusAuto").onclick = incFuelAuto;
document.getElementById("minusAuto").onclick = decFuelAuto;



//---Scripting for tele fuel scored---

//get elements for current value of counter
let fuelTeleP = document.getElementById("counterTele");
let fuelTeleInp = document.getElementById("fuelTeleInput");
//add one to counter
function incFuelTele() {
    let value = parseInt(fuelTeleInp.value, 10);
    value++;

    fuelTeleInp.value = value;
    fuelTeleP.textContent = value;
}
//subtract one from counter
function decFuelTele() {
    let value = parseInt(fuelTeleInp.value, 10);
    value--;
    value = Math.max(0, value);

    fuelTeleInp.value = value;
    fuelTeleP.textContent = value;
}
//link funcs to buttons
document.getElementById("plusTele").onclick = incFuelTele;
document.getElementById("minusTele").onclick = decFuelTele;



//---Scripting for copy button---

//Export data through a copy button.
function exportData() {
    const form = document.getElementById("match");
    const formData = new FormData(form);

    if (!formData.has("climbAuto")) formData.append("climbAuto", "off");

    const dataObj = {};
    for (let [key, value] of formData.entries()) {
        dataObj[key] = value;
    }

    const dataArray = [
        dataObj.name,
        dataObj.matchNumber,
        dataObj.loc,
        dataObj.teamNumber,
        dataObj.fuelAuto,
        dataObj.climbAuto,
        dataObj.fuelTele,
        dataObj.climbTele
    ];

    const output = dataArray.join(",");

    navigator.clipboard.writeText(output).then(() => {
        document.getElementById("copyAlert").textContent = "Copied!";
    }).catch(() => {
        document.getElementById("copyAlert").textContent = "Copy failed";
    });
}

//link to copy button
document.getElementById("copy").onclick = exportData;