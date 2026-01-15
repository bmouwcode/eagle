let pages = ["setup", "auto", "teleop", "endgame", "export"];
let currPage = "setup";
function cycleRight() {
    if(pages.indexOf(currPage) < pages.length - 1) {
        document.getElementById(currPage).hidden = true;
        currPage = pages[pages.indexOf(currPage) + 1];
        document.getElementById(currPage).hidden = false;
    }
}
function cycleLeft() {
    if(pages.indexOf(currPage) > 0) {
        document.getElementById(currPage).hidden = true;
        currPage = pages[pages.indexOf(currPage) - 1];
        document.getElementById(currPage).hidden = false;
    }
}
document.getElementById("floatright").onclick = cycleRight;
document.getElementById("floatleft").onclick = cycleLeft;