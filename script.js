//#region BACKGROUND ANIMATION
VANTA.NET({
  el: "#home",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.0,
  minWidth: 200.0,
  scale: 1.0,
  scaleMobile: 1.0,
  color: "#990000",
  backgroundColor: "#252934",
  points: 18.0,
  showDots: false,
});
//#endregion

const DARK_MODE_KEY = "darkMode";
const DARK_MODE_VALUE = "enabled";

$(document).ready(function () {
  $(".footer-linkedin").on({
    mouseenter: function () {
      $(".footer-linkedin-icon").attr(
        "src",
        "/images/social-media/linkedin-hover.png"
      );
    },
    mouseleave: function () {
      $(".footer-linkedin-icon").attr(
        "src",
        "/images/social-media/linkedin.png"
      );
    },
  });
  $(".footer-github").on({
    mouseenter: function () {
      $(".footer-github-icon").attr("src", "/images/GitHub-Mark-32px.png");
    },
    mouseleave: function () {
      $(".footer-github-icon").attr(
        "src",
        "/images/GitHub-Mark-Light-32px.png"
      );
    },
  });
  $(".footer-gitlab").on({
    mouseenter: function () {
      $(".footer-gitlab-icon").attr(
        "src",
        "/images/social-media/gitlab-hover.png"
      );
    },
    mouseleave: function () {
      $(".footer-gitlab-icon").attr("src", "/images/social-media/gitlab.png");
    },
  });
  $(".footer-medium").on({
    mouseenter: function () {
      $(".footer-medium-icon").attr(
        "src",
        "/images/social-media/medium-hover.png"
      );
    },
    mouseleave: function () {
      $(".footer-medium-icon").attr("src", "/images/social-media/medium.png");
    },
  });
  $(".footer-orcid").on({
    mouseenter: function () {
      $(".footer-orcid-icon").attr(
        "src",
        "/images/social-media/orcid-hover.png"
      );
    },
    mouseleave: function () {
      $(".footer-orcid-icon").attr("src", "/images/social-media/orcid.png");
    },
  });
  //#endregion

  //#region OWL CAROUSEL
  // owl carousel script
  // Empty object where we can store current item's index before drag
  var transient = {};

  $(".owl-carousel").owlCarousel({
    margin: 20,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      951: {
        items: 3,
        nav: false,
      },
    },
    slideBy: "page",
    onDrag: onDrag.bind(transient),
    onDragged: onDragged.bind(transient),
  });

  function onDrag(event) {
    this.initialCurrent = event.relatedTarget.current();
  }

  function onDragged(event) {
    var owl = event.relatedTarget;
    var draggedCurrent = owl.current();

    if (draggedCurrent > this.initialCurrent) {
      owl.current(this.initialCurrent);
      owl.next();
    } else if (draggedCurrent < this.initialCurrent) {
      owl.current(this.initialCurrent);
      owl.prev();
    }
  }
  //#endregion

  //#region RESET FORM WHEN SUBMIT
  $("#contact-form").each(function () {
    this.reset();
  });
  //#endregion

  //#region NAVIGATION BAR and SCROLL UP BTN
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".navbar").removeClass("sticky");
      $(".scroll-up-btn").removeClass("show");
    }
  });
  //#endregion

  //#region TYPING ANIMATION
  var typed = new Typed(".typing", {
    strings: [
      "Software Engineer.",
      "Machine Learning Engineer.",
      "Master's Student!",
    ],
    startDelay: 300,
    backDelay: 750,
    typeSpeed: 25,
    backSpeed: 40,
  });
  //#endregion

  //#region slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
  });
  //#endregion

  //#region TOGGLE MENU
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  $(".menu a").click(function () {
    let isMobile = $(".navbar .menu").hasClass("active");
    if (isMobile) {
      $(".navbar .menu").removeClass("active");
      $(".menu-btn i").removeClass("active");
    }
  });
  //#endregion

  //#region TOGGLE DARK MODE
  // check for saved 'darkMode' in localStorage
  let darkMode = localStorage.getItem(DARK_MODE_KEY);
  const darkModeToggle = document.querySelector("#darkmode-toggle");

  const updateGitHubIcon = (darkMode) => {
    let githubMouseEnterIcon =
      darkMode !== DARK_MODE_VALUE
        ? "GitHub-Mark-32px.png"
        : "GitHub-Mark-Light-32px.png";
    let githubMouseLeaveIcon =
      darkMode !== DARK_MODE_VALUE
        ? "GitHub-Mark-Light-32px.png"
        : "GitHub-Mark-32px.png";

    // To set the icon at initial load
    $(".github-icon").attr("src", `/images/${githubMouseLeaveIcon}`);

    // Listen for mouse enter and leave and then change its icon
    $(".github").on({
      mouseenter: function () {
        $(".github-icon").attr("src", `/images/${githubMouseEnterIcon}`);
      },
      mouseleave: function () {
        $(".github-icon").attr("src", `/images/${githubMouseLeaveIcon}`);
      },
    });
  };

  const enableDarkMode = () => {
    // 1. Add the class to the body
    document.body.classList.add("darkmode");
    // 2. Update darkMode in localStorage
    localStorage.setItem(DARK_MODE_KEY, DARK_MODE_VALUE);
    // 3. Update GitHub Icon
    updateGitHubIcon(DARK_MODE_VALUE);
  };

  const disableDarkMode = () => {
    // 1. Remove the class from the body
    document.body.classList.remove("darkmode");
    // 2. Update darkMode in localStorage
    localStorage.setItem(DARK_MODE_KEY, null);
    // 3. Update GitHub Icon
    updateGitHubIcon(null);
  };

  // When someone clicks the button
  darkModeToggle.addEventListener("click", () => {
    // get their darkMode setting
    darkMode = localStorage.getItem(DARK_MODE_KEY);

    if (darkMode !== DARK_MODE_VALUE) {
      // if it not current enabled, enable it
      enableDarkMode();
    } else {
      // if it has been enabled, turn it off
      disableDarkMode();
    }
  });
  //#endregion

  const initPage = () => {
    // add sticky navbar if user already scrolled down at start
    if ($(document).scrollTop() > 20) {
      $(".navbar").addClass("sticky");
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".navbar").removeClass("sticky");
      $(".scroll-up-btn").removeClass("show");
    }

    // update the page style depends on 'darkMode' retrieved from localStorage
    if (darkMode === DARK_MODE_VALUE) {
      enableDarkMode();
      darkModeToggle.checked = true;
    } else {
      disableDarkMode();
      darkModeToggle.checked = false;
    }
  };

  initPage();
  document.getElementsByTagName("html")[0].style.visibility = "visible";
});

// Chatbot Code
document.addEventListener("DOMContentLoaded", () => {
  const chatBody = document.getElementById("chat-body");
  const userInput = document.getElementById("user-input");
  const sendBtn = document.getElementById("send-btn");

  // Store chat history
  let chatHistory = [];

  // Function to send message
  function sendMessage() {
    const userMessage = userInput.value.trim();
    if (!userMessage) return;

    // Add user's message to chat & history
    addMessage(userMessage, "user");
    chatHistory.push({ role: "user", content: userMessage });

    // Send message to LLM API
    sendMessageToLLM().then((botReply) => {
      addMessage(botReply, "bot");
      chatHistory.push({ role: "assistant", content: botReply });
    });

    // Clear input
    userInput.value = "";
  }

  // Click event for "Send" button
  sendBtn.addEventListener("click", sendMessage);

  // Listen for Enter key press
  userInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent new line in input
      sendMessage();
    }
  });

  function addMessage(text, sender) {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("chat-message", sender);
    messageDiv.innerHTML = text.replace(/\n/g, "<br>");
    chatBody.appendChild(messageDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
  }


  async function sendMessageToLLM() {
    try {
      const lambdaEndpoint =
        "https://l124lppjse.execute-api.ap-southeast-1.amazonaws.com/default/nutt-personal-llm";
      const response = await fetch(lambdaEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ chatHistory }),
      });

      const data = await response.json();
      return data.reply || "Error: No response from LLM";
    } catch (error) {
      console.log("Error connecting to chatbot:", error);
      return "Error connecting to chatbot.";
    }
  }
});

//#region REMOVE CONTACT CURVE
$(window)
  .resize(function () {
    if ($(window).width() <= 950) {
      $("#blogs").removeClass("contact-curve");
      $("#contact").removeClass("contact-curve");
    } else {
      $("#blogs").addClass("contact-curve");
      $("#contact").addClass("contact-curve");
    }
  })
  .resize();
//#endregion
