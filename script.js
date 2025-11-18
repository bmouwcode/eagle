
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("mainForm");
  const log = document.getElementById("log");
  const body = document.querySelector("body");
  const parag = document.getElementById("readP");
  const addP = document.getElementById("addP");
  const button = document.getElementById("something");
  const buttonTxt = document.getElementById("somethingtext");
  const reward = document.getElementById("reward");
  let firstButton = true;
  form.addEventListener("submit", (event) => {
    const data = new FormData(form);
    let output = "";
    for (const entry of data) {
      output += `${entry[0]}=${entry[1]}\r`;
    }
    

    const selectedOption = data.get("options");
    const readContent = data.get("readStuff");
    const add1 = parseFloat(data.get("add1"));
    const add2 = parseFloat(data.get("add2"));
    // if (selectedOption) {
    //   log.innerText = `HI ${selectedOption} HI2`;
    // } else {
    //   log.innerText = "HI No option selected HI2";  // Fallback message if no option is selected
    // }
    if(selectedOption === "banana") {
      body.style.backgroundColor = "yellow";
    }
    else{
      body.style.backgroundColor = "purple";
    }

    if(readContent === "monke") {
      parag.innerText = "In a jungle, there was a little monke named Tiko. While other monkes swung in trees, Tiko explored the ground. One day, he found a glowing fruit. He bit it. Suddenly, the jungle shimmered, and Tiko felt strong, fast, like he could jump the whole forest. The other monkes didnt notice, but Tiko leapt higher, discovering magic was everywhere. From then on, Tiko was the bravest, most curious monke around.";
    }
    else if(readContent === "lorem") {
      parag.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    }
    else if(readContent === "romeo") {
      parag.innerText = "But, soft! What light through yonder window breaks? It is the east, and Juliet is the sun. Arise, fair sun, and kill the envious moon, Who is already sick and pale with grief, That thou her maid art far more fair than she. Be not her maid, since she is envious; Her vestal livery is but sick and green, And none but fools do wear it; cast it off. It is my lady, O, it is my love! O, that she knew she were! She speaks, yet she says nothing: what of that? Her eye discourses; I will answer it. I am too bold, 'tis not to me she speaks: Two of the fairest stars in all the heaven, Having some business, do entreat her eyes To twinkle in their spheres till they return. What if her eyes were there, they in her head? The brightness of her cheek would shame those stars, As daylight doth a lamp; her eyes in heaven Would through the airy region stream so bright That birds would sing and think it were not night. See, how she leans her cheek upon her hand! O, that I were a glove upon that hand, That I might touch that cheek!";
    }

    addP.innerText = add1 + add2;

    event.preventDefault();
  });
  button.addEventListener("click", (event) => {
    if(firstButton) {
      buttonTxt.innerText = "0";
      firstButton = !firstButton;
    }
    buttonTxt.innerText = (parseInt(buttonTxt.innerText) + 1).toString();
    switch(buttonTxt.innerText){
      case "10":
        reward.innerText = "Nice Job!";
      break;
      case "100":
        reward.innerText = "Good Dedication!";
      break;
      case "1000":
        reward.innerText = "You are still clicking???";
      break;
      case "10000":
        reward.innerText = "Are you sure you want to continue?";
      break;
      case "100000":
        reward.innerText = "Nice job dedicating several hours to this."
      break;
      case "1000000":
        reward.innerText = "Now you've spent days...";
      break;
      case "10000000":
        reward.innerText = ":)";
      break;
      case "100000000":
        reward.innerText = ":(";
      break;
      case "1000000000":
        reward.innerText = "OK. You win. No more rewards for you. Click if you want, but at your own risk.";
    }
  });
});

