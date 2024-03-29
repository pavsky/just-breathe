// Fade in on entrance
$(document).ready(() => {
  $("#home").fadeIn();
});

// Variables
let timer = 1;
let theme = "light";
let sound = "no-sound";
let paused = false;
let minutes;
let ambient;

let wind = new Pz.Sound("sfx/wind.mp3");
let rain = new Pz.Sound("sfx/rain.mp3");

// Changing screens
const changeScreen = (from, to) => {
  $(from).fadeOut();
  $(to).delay(300).fadeIn();
};

// Button behavior
$("#lets-go").click(() => {
  changeScreen("#home", "#settings");
});
$("#not-sure").click(() => {
  window.open("https://www.nytimes.com/guides/well/how-to-meditate", "_blank");
});

// Settings

// Theme change
$("#settings-theme-light").click(() => {
  theme = "light";
  $("svg *").css("fill", "black");
  $("body, html").css("background", "white").css("color", "black !important");
  $("a, p, h1, h2, h3, h4, button").css("color", "black");
  const fullBtns = document.querySelectorAll(".full-btn");
  fullBtns.forEach((element) => {
    $(element).css("color", "white").css("background", "black");
  });
  const strokeBtns = document.querySelectorAll(".settings-button");
  strokeBtns.forEach((element) => {
    $(element)
      .css("color", "black")
      .css("border", "2px solid black")
      .css("background", "white");
  });
  $("#settings-theme-light")
    .css("background", "black")
    .css("color", "white")
    .css("border", "2px solid black");
  $("#settings-theme-dark")
    .css("background", "white")
    .css("color", "black")
    .css("border", "2px solid black");
});

$("#settings-theme-dark").click(() => {
  theme = "dark";
  $("svg *").css("fill", "white");
  $("body, html").css("background", "black").css("color", "white !important");
  $("a, p, h1, h2, h3, h4, button").css("color", "white");
  const fullBtns = document.querySelectorAll(".full-btn");
  fullBtns.forEach((element) => {
    $(element).css("color", "black").css("background", "white");
  });
  const strokeBtns = document.querySelectorAll(".settings-button");
  strokeBtns.forEach((element) => {
    $(element).css("color", "white");
    $(element).css("border", "2px solid white");
    $(element).css("background", "black");
  });
  $("#settings-theme-dark")
    .css("background", "white")
    .css("color", "black")
    .css("border", "2px solid white");
  $("#settings-theme-light")
    .css("background", "black")
    .css("color", "white")
    .css("border", "2px solid white");
});

// Ambient sound change

$("#settings-ambient-rain").click(() => {
  sound = "rain";
  if (theme == "light") {
    $("#settings-ambient-rain svg *").css("fill", "white");
    $("#settings-ambient-rain")
      .css("background", "black")
      .css("border", "2px solid black");

    $("#settings-ambient-wind svg *").css("fill", "black");
    $("#settings-ambient-wind")
      .css("background", "white")
      .css("border", "2px solid black");
    $("#settings-ambient-no-sound svg *").css("fill", "black");
    $("#settings-ambient-no-sound")
      .css("background", "white")
      .css("border", "2px solid black");
  } else {
    $("#settings-ambient-rain svg *").css("fill", "black");
    $("#settings-ambient-rain")
      .css("background", "white")
      .css("border", "2px solid white");

    $("#settings-ambient-wind svg *").css("fill", "white");
    $("#settings-ambient-wind")
      .css("background", "black")
      .css("border", "2px solid white");
    $("#settings-ambient-no-sound svg *").css("fill", "white");
    $("#settings-ambient-no-sound")
      .css("background", "black")
      .css("border", "2px solid white");
  }
});
$("#settings-ambient-wind").click(() => {
  sound = "wind";
  if (theme == "light") {
    $("#settings-ambient-wind svg *").css("fill", "white");
    $("#settings-ambient-wind")
      .css("background", "black")
      .css("border", "2px solid black");
    $("#settings-ambient-rain svg *").css("fill", "black");
    $("#settings-ambient-rain")
      .css("background", "white")
      .css("border", "2px solid black");
    $("#settings-ambient-no-sound svg *").css("fill", "black");
    $("#settings-ambient-no-sound")
      .css("background", "white")
      .css("border", "2px solid black");
  } else {
    $("#settings-ambient-wind svg *").css("fill", "black");
    $("#settings-ambient-wind")
      .css("background", "white")
      .css("border", "2px solid white");
    $("#settings-ambient-rain svg *").css("fill", "white");
    $("#settings-ambient-rain")
      .css("background", "black")
      .css("border", "2px solid white");
    $("#settings-ambient-no-sound svg *").css("fill", "white");
    $("#settings-ambient-no-sound")
      .css("background", "black")
      .css("border", "2px solid white");
  }
});
$("#settings-ambient-no-sound").click(() => {
  sound = "no sound";
  if (theme == "light") {
    $("#settings-ambient-no-sound svg *").css("fill", "white");
    $("#settings-ambient-no-sound")
      .css("background", "black")
      .css("border", "2px solid black");
    $("#settings-ambient-rain svg *").css("fill", "black");
    $("#settings-ambient-rain")
      .css("background", "white")
      .css("border", "2px solid black");
    $("#settings-ambient-wind svg *").css("fill", "black");
    $("#settings-ambient-wind")
      .css("background", "white")
      .css("border", "2px solid black");
  } else {
    $("#settings-ambient-no-sound svg *").css("fill", "black");
    $("#settings-ambient-no-sound")
      .css("background", "white")
      .css("border", "2px solid white");
    $("#settings-ambient-wind svg *").css("fill", "white");
    $("#settings-ambient-wind")
      .css("background", "black")
      .css("border", "2px solid white");
    $("#settings-ambient-rain svg *").css("fill", "white");
    $("#settings-ambient-rain")
      .css("background", "black")
      .css("border", "2px solid white");
  }
});

// Timer

$("#settings-timer-1").click(() => {
  timer = 1;
  if (theme == "light") {
    $("#settings-timer-1")
      .css("background", "black")
      .css("border", "2px solid black")
      .css("color", "white");
    $("#settings-timer-3")
      .css("background", "white")
      .css("border", "2px solid black")
      .css("color", "black");
    $("#settings-timer-5")
      .css("background", "white")
      .css("border", "2px solid black")
      .css("color", "black");
    $("#settings-timer-10")
      .css("background", "white")
      .css("border", "2px solid black")
      .css("color", "black");
  } else {
    $("#settings-timer-1")
      .css("background", "white")
      .css("border", "2px solid white")
      .css("color", "black");
    $("#settings-timer-3")
      .css("background", "black")
      .css("border", "2px solid white")
      .css("color", "white");
    $("#settings-timer-5")
      .css("background", "black")
      .css("border", "2px solid white")
      .css("color", "white");
    $("#settings-timer-10")
      .css("background", "black")
      .css("border", "2px solid white")
      .css("color", "white");
  }
  readyToStart();
});

$("#settings-timer-3").click(() => {
  timer = 3;
  if (theme == "light") {
    $("#settings-timer-3")
      .css("background", "black")
      .css("border", "2px solid black")
      .css("color", "white");
    $("#settings-timer-1")
      .css("background", "white")
      .css("border", "2px solid black")
      .css("color", "black");
    $("#settings-timer-5")
      .css("background", "white")
      .css("border", "2px solid black")
      .css("color", "black");
    $("#settings-timer-10")
      .css("background", "white")
      .css("border", "2px solid black")
      .css("color", "black");
  } else {
    $("#settings-timer-3")
      .css("background", "white")
      .css("border", "2px solid white")
      .css("color", "black");
    $("#settings-timer-1")
      .css("background", "black")
      .css("border", "2px solid white")
      .css("color", "white");
    $("#settings-timer-5")
      .css("background", "black")
      .css("border", "2px solid white")
      .css("color", "white");
    $("#settings-timer-10")
      .css("background", "black")
      .css("border", "2px solid white")
      .css("color", "white");
  }
  readyToStart();
});

$("#settings-timer-5").click(() => {
  timer = 5;
  if (theme == "light") {
    $("#settings-timer-5")
      .css("background", "black")
      .css("border", "2px solid black")
      .css("color", "white");
    $("#settings-timer-3")
      .css("background", "white")
      .css("border", "2px solid black")
      .css("color", "black");
    $("#settings-timer-1")
      .css("background", "white")
      .css("border", "2px solid black")
      .css("color", "black");
    $("#settings-timer-10")
      .css("background", "white")
      .css("border", "2px solid black")
      .css("color", "black");
  } else {
    $("#settings-timer-5")
      .css("background", "white")
      .css("border", "2px solid white")
      .css("color", "black");
    $("#settings-timer-3")
      .css("background", "black")
      .css("border", "2px solid white")
      .css("color", "white");
    $("#settings-timer-1")
      .css("background", "black")
      .css("border", "2px solid white")
      .css("color", "white");
    $("#settings-timer-10")
      .css("background", "black")
      .css("border", "2px solid white")
      .css("color", "white");
  }
  readyToStart();
});
$("#settings-timer-10").click(() => {
  timer = 10;
  if (theme == "light") {
    $("#settings-timer-10")
      .css("background", "black")
      .css("border", "2px solid black")
      .css("color", "white");
    $("#settings-timer-3")
      .css("background", "white")
      .css("border", "2px solid black")
      .css("color", "black");
    $("#settings-timer-5")
      .css("background", "white")
      .css("border", "2px solid black")
      .css("color", "black");
    $("#settings-timer-1")
      .css("background", "white")
      .css("border", "2px solid black")
      .css("color", "black");
  } else {
    $("#settings-timer-10")
      .css("background", "white")
      .css("border", "2px solid white")
      .css("color", "black");
    $("#settings-timer-3")
      .css("background", "black")
      .css("border", "2px solid white")
      .css("color", "white");
    $("#settings-timer-5")
      .css("background", "black")
      .css("border", "2px solid white")
      .css("color", "white");
    $("#settings-timer-1")
      .css("background", "black")
      .css("border", "2px solid white")
      .css("color", "white");
  }
  readyToStart();
});

// Ready to start

const readyToStart = () => {
  $("#settings p").css("pointer-events", "auto").css("opacity", "1");
  $("#start").css("pointer-events", "auto").css("opacity", "1");
};

$("#start").click(() => {
  changeScreen("#settings", "#practice");
  practice();
});

$("#pause").click(() => {
  if (paused == true) {
    $("#pause").text("Pause");
    paused = false;
  } else {
    $("#pause").text("Resume");
    paused = true;
  }
});

const practice = () => {
  if (sound == "rain") {
    ambient = new Pizzicato.Sound(
      {
        source: "file",
        options: { path: "sfx/rain.mp3" },
        loop: true,
      },
      function () {
        // Sound loaded!
        ambient.play();
      }
    );
  } else if (sound == "wind") {
    ambient = new Pizzicato.Sound(
      {
        source: "file",
        options: { path: "sfx/wind.mp3" },
        loop: true,
      },
      function () {
        // Sound loaded!
        ambient.play();
      }
    );
  }

  setTimeout(() => {
    $("#timer").fadeIn();
    $("#pause").fadeIn();
  }, 1000);
  minutes = timer - 1;
  seconds = 59;
  setInterval(() => {
    if (paused == false) {
      minutes == 10
        ? $("#timer").text(minutes + ":" + seconds)
        : $("#timer").text("0" + minutes + ":" + seconds);
      seconds--;
      if (seconds < 10) {
        $("#timer").text("0" + minutes + ":" + "0" + seconds);
      } else {
        $("#timer").text("0" + minutes + ":" + seconds);
      }
      if (seconds < 1) {
        if (minutes == 0 && seconds == 0) {
          finishPractice();
        } else {
          minutes -= 1;
          seconds = 60;
        }
      }
    }
  }, 1000);

  const finishPractice = () => {
    ambient.pause();
    timer = 0;
    seconds = 59;
    window.clearInterval();
    $("#timer").fadeOut();
    $("#pause").fadeOut();
    $("#well-done").delay(500).fadeIn();
    setTimeout(() => {
      changeScreen("#practice", "#home");
      $("#well-done").hide();
      $("#pause").css("display", "none");
    }, 2000);
  };
};
