/////////// showing all images in full screen on click /////////////////////////////
document.querySelectorAll("img").forEach(e => {
  e.addEventListener("click", () => {
    return e.requestFullscreen();
  });
});

//////////// animating the header text (i am a professional ...)/////////////
const cursor = document.createElement("span");
cursor.textContent = "_";
cursor.classList.add("cursor");
const words = [" .", "EMPLOYER", "DEVELOPER"];
console.log(words[1]);
function showWord() {
  const randomWord = Math.floor(Math.random() * 2 + 1);
  let show = words[randomWord];
  setTimeout(() => {
    setTimeout(() => {
      document.querySelector(".heading-medium .on").textContent = show;
    }, 200);
    document.querySelector(".heading-medium .on").classList.toggle("show");
  }, 1000);
  wordShow();
}
function wordShow() {
  setTimeout(() => {
    showWord();
  }, 1500);
}
showWord();

///////////////////  macking the navigation active ////////////////
document.querySelector(".btn").addEventListener("click", e => {
  document.querySelector(".btn").classList.toggle("btnx");
  document.querySelector(".navigation .list").classList.toggle("show");
});

///////////////////// creating the pop up ///////////////////
const allPlan = document.querySelectorAll(".plan");

allPlan.forEach(e => {
  e.addEventListener("click", () => {
    const popUp = document.createElement("body");
    popUp.classList.add("popup");
    document.querySelector("body").appendChild(popUp);

    const cont = document.createElement("div");
    cont.textContent = "Pop up message will be here";
    popUp.appendChild(cont);
    cont.classList.add("cont");

    const quit = document.createElement("p");
    quit.textContent = "X";
    cont.appendChild(quit);
    quit.classList.add("quit");

    quit.addEventListener("click", () => {
      popUp.classList.add("go");
    });

    popUp.addEventListener("click", () => {
      popUp.classList.add("go");
    });
  });
});

/////////portfolio images event listener  //////////////
const allImg = document.querySelectorAll(".gallery .imagess");

allImg.forEach(e => {
  e.addEventListener("click", () => {
    location.assign("../html/portfolio-details.html");
  });
});
const homePort = document.querySelectorAll(".gallery .homePort");

homePort.forEach(e => {
  e.addEventListener("click", () => {
    location.assign("./html/portfolio-details.html");
  });
});

//////////// assigning link to  blog details //////
const allCard = document.querySelectorAll(".grid .card");

allCard.forEach(e => {
  e.addEventListener("click", () => {
    location.assign("../html/blog-details.html");
  });
});

/////////////// listening for logo click event //////////////////
document.querySelector(".site-logo").addEventListener("click", e => {
  location.assign("../index.html");
});

///// macking the story's slide show ///////////////
function hope() {
  setTimeout(() => {
    document.querySelector(".person-" + random).style = "opacity: 1";
  }, 100);
  const random = Math.floor(Math.random() * 3 + 1);
  document.querySelector(".person-" + random).classList.add("active");
  setTimeout(() => {
    document.querySelector(".person-" + random).style =
      "transform: translateX(-1000rem)";
    document.querySelector(".person-" + random).classList.remove("active");
    setTimeout(() => {
      document.querySelector(".person-" + random).style = "opacity: 0";
    }, 1000);
  }, 2500);
  work();
}
function work() {
  setTimeout(() => {
    hope();
  }, 2450);
}
hope();

/////////////// listening for scroll event in the home page //////////////////////
document.addEventListener("scroll", () => {
  document.querySelector(".one .grade").classList.add("afterScroll");
  document.querySelector(".two .grade").classList.add("afterScroll");
  document.querySelector(".three .grade").classList.add("afterScroll");
  document.querySelector(".four .grade").classList.add("afterScroll");

  //////////////////// animating the grade text /////////////////
  let value = 0;
  setInterval(() => {
    value += 1;
    if (value <= 80) {
      document.querySelector(".grade1 .value").textContent = value + "%";
    }
    if (value <= 90) {
      document.querySelector(".grade2 .value").textContent = value + "%";
    }
    if (value <= 75) {
      document.querySelector(".grade3 .value").textContent = value + "%";
    }
    if (value <= 68) {
      document.querySelector(".grade4 .value").textContent = value + "%";
    }
  }, 60);
});
