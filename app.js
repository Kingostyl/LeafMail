var themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
var themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");

if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  themeToggleLightIcon.classList.remove("hidden");
} else {
  themeToggleDarkIcon.classList.remove("hidden");
}

var themeToggleBtn = document.getElementById("theme-toggle");

themeToggleBtn.addEventListener("click", function () {
  themeToggleDarkIcon.classList.toggle("hidden");
  themeToggleLightIcon.classList.toggle("hidden");

  if (localStorage.getItem("color-theme")) {
    if (localStorage.getItem("color-theme") === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    }
  } else {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    }
  }
});

const button = document.querySelector("#menu-button");
const menu = document.querySelector("#menubar");

button.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

function changeblue() {
  document.getElementById("mail").style.backgroundColor = "#";
}

function gologin() {
  window.location.href = "login.html";
}

function goback2() {
  window.location.href = "home.html";
}

function gomockup() {
  window.location.href = "home.html";
}

function goinstall() {
  window.location.href = "./app/LeafMail.dmg";
}

try {
  document.getElementById("icloud").play();
  document.getElementById("error").play();
} catch (error) {
  console.log(error);
}

function goapple() {
  window.open("https://www.icloud.com/mail");
}

function validateEmail(value) {
  if (/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(value)) {
    return true;
  } else {
    return false;
  }
}

function gohome() {
  let valueEmail = document.getElementById("email").value;
  let valuePassword = document.getElementById("password").value;

  let alertEmail = document.getElementById("email-alert");
  let alertPassword = document.getElementById("password-alert");

  if (validateEmail(valueEmail)) {
    // code validate email benar
    if (valuePassword == "123") {
      // code berhasil
      window.location.href = "./home.html";
    } else {
      //code validate email benar, tetapi password salah
      alertPassword.innerHTML = "password is wrong, please try again!";
      alertEmail.innerHTML = "";
    }
  } else {
    // code validate email salah
    alertEmail.innerHTML = "enter your email correctly!";

    if (valuePassword == "123") {
      // code validate email salah, tetapi password benar
      alertPassword.innerHTML = "";
    } else {
      // code validate email salah, dan password salah
      alertPassword.innerHTML = "password is wrong, please try again!";
    }
  }
}

function validateEmail(value) {
  if (/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(value)) {
    return true;
  } else {
    return false;
  }
}

function gomockup() {
  let valueEmail = document.getElementById("email").value;
  let valueUsername = document.getElementById("text").value;
  let valuePassword = document.getElementById("password").value;

  let alertEmail = document.getElementById("email-alert");
  let alertUsername = document.getElementById("username-alert");
  let alertPassword = document.getElementById("password-alert");

  if (valueUsername !== "") {
    // ketika value username di isi
    alertUsername.innerHTML = "";

    if (validateEmail(valueEmail)) {
      // ketika value username dan email diisi
      alertEmail.innerHTML = "";

      if (valuePassword !== "") {
        // ketika value username, email, password diisi
        alertPassword.innerHTML = "";
        window.location.href = "./home.html";
      } else {
        // ketika value username dan email diisi tetapi password tdk
        alertPassword.innerHTML = "enter your password!";
      }
    } else {
      // ketika value username diisi tetapi email tidak diisi
      alertEmail.innerHTML = "enter your email correctly!";

      if (valuePassword !== "") {
        // ketika value username dan password diisi tetapi email tidak
        alertPassword.innerHTML = "";
      } else {
        // ketika value username diisi tetapi email dan password tdk
        alertPassword.innerHTML = "enter your password!";
      }
    }
  } else {
    // ketika value username tdk diisi
    alertUsername.innerHTML = "enter your username!";
    if (validateEmail(valueEmail)) {
      // ktika value username tdk diisi tetapi email diisi
      alertEmail.innerHTML = "";
      if (valuePassword !== "") {
        // ketika value username tdk diisi tetapi email dan password diisi
        alertPassword.innerHTML = "";
      } else {
        // ketika value username dan password tdk diisi tetapi email diisi
        alertPassword.innerHTML = "enter your password!";
      }
    } else {
      // ketika value username dan email tdk diisi
      alertEmail.innerHTML = "enter your email correctly!";
      if (valuePassword !== "") {
        // ketika value username dan email tdk diisi tetaou password diisi
        alertPassword.innerHTML = "";
      } else {
        // ketika value username, password, dan email tdk diisi
        alertPassword.innerHTML = "enter your password!";
      }
    }
  }
}

function gotrack() {
  window.open(
    "https://chrome.google.com/webstore/detail/email-tracker-for-gmail-m/ndnaehgpjlnokgebbaldlmgkapkpjkkb"
  );
}
