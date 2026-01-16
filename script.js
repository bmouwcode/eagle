//List of pages on the main site
let pages = ["setup", "auto", "teleop", "endgame", "export"];
//the page the site is currently on
let currPage = "setup";
//function to move one page right
function cycleRight() {
    if(pages.indexOf(currPage) < pages.length - 1) {
        document.getElementById(currPage).hidden = true;
        currPage = pages[pages.indexOf(currPage) + 1];
        document.getElementById(currPage).hidden = false;
    }
}
//funtion to move one page left
function cycleLeft() {
    if(pages.indexOf(currPage) > 0) {
        document.getElementById(currPage).hidden = true;
        currPage = pages[pages.indexOf(currPage) - 1];
        document.getElementById(currPage).hidden = false;
    }
}
//linking the functions to the buttons
document.getElementById("floatright").onclick = cycleRight;
document.getElementById("floatleft").onclick = cycleLeft;