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
    sendMessageToLLM(userMessage).then((botReply) => {
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
    messageDiv.textContent = text;
    chatBody.appendChild(messageDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  async function sendMessageToLLM(message) {
    try {
      const NUTT_PROFILE = `
       **Personal Information**
        - Name: Nutt Chairatana
        - Location: Bangkok, Thailand
        - Contact: nuttc@nuttchai.com, +66 86-392-2658
        - LinkedIn: linkedin.com/in/nuttchai
        - Portfolio: nuttchai.com
        
        **Objective**
        Software Engineer with 3+ years of experience in web and backend development, cloud computing, and machine learning.
        Proven ability to deliver scalable solutions for over 3 million users.
        Seeking a full-time role across the software development lifecycle with a strong focus on adopting new technologies.
        
        **Experience**
        Software Engineer, Machine Learning
        KASIKORN Business-Technology Group (Nov 2023 - Present, Bangkok, TH)
        - Improved chatbot efficiency by doubling release frequency with change-free PROD deployments, reclaiming 30% sprint capacity.
        - Streamlined 3,600+ banking inquiries/month by developing the open-source RAG system, Athena, integrated with MS Teams.
        - Optimized LLM performance, reducing batch response time by 3.37s and increasing TPS by 2.21x using gRPC streaming.
        - Automated sentiment analysis for YouTube videos via K8s CronJobs.
        - Reduced memory leaks by 84.7%, optimizing TensorFlow batch processing.
        Software Engineer
        RentSpree (Jun 2022 - Oct 2023, Bangkok, TH)
        - Boosted user input speed by 43% and Tenant Screening conversions by 4% via address auto-complete integration.
        - Implemented a monorepo strategy for React hooks to enhance component reusability.
        - Accelerated agent service response by 5.71x via database indexing.
        - Led the transition from JavaScript to TypeScript, improving maintainability.
        Software Engineer Intern
        CMKL University (Dec 2021 - May 2022, Bangkok, TH)
        - Designed, implemented, and deployed a system enabling 100+ students to track learning progress via mobile.
        Software Engineer Intern
        ExxonMobil (Jun 2021 - Nov 2021, Bangkok, TH)
        - Automated SAP-to-MRMA compliance reports, reducing reporting time.
        - Accelerated report extraction by 3x through template optimization and indexing.
        Software Engineer Intern, Infrastructure
        CMKL University (Jan 2021 - Mar 2021, Bangkok, TH)
        - Enhanced APEX SSH security by replacing fingerprint checks with time-bound SSH certificates via Google SSO.
        
        **Education**
        Master's in Robotics and AI Engineering, King Mongkut's Institute of Technology Ladkrabang (2022 - 2024)
        - First-Class Honors Graduate Scholarship
        - Thesis: Software System Performance Prediction and Health Assessment in Cloud Environments (Grade: Outstanding)
        Bachelor's in Computer Engineering, King Mongkut's Institute of Technology Ladkrabang (2018 - 2022)
        - First-Class Honors & Top Academic Performer Scholarship
        
        **Skills**
        - Programming Languages: C#, Go, JavaScript, Python, TypeScript
        - Technologies: ASP.NET, AWS, Docker, GCP, gRPC, Kafka, Kubernetes, MongoDB, NestJS, OTel, PostgreSQL, React
        
        **Achievements**
        - 4th Place in Cloud Ace Hackathon TH (GenAI ad solution based on preferences) (Jun 2024)
        - Finalist in HUAWEI CLOUD Developer Hackathon (Cloud-based traffic prediction solution) (Nov 2020)
        
        **Projects**
        - Auto Attendance System: Python facial recognition for 30+ students in a single frame.
        - Hungry Hub: Food-ordering app using NodeJS & React, AWS EKS, and Jenkins automation.
        - Patient Monitoring System: Real-time weight tracking with 99.9% uptime (React + Arduino).
        - Smart Garden: 24/7 IoT plant care using Raspberry Pi & WebSocket.
        - Warehouse Cost Reporter: LINE chatbot for summarizing 100,000+ data records (JavaScript + Dialogflow).
        
        **Extracurriculars**
        - Instructor for Python ML Training (50+ participants in KMITL's BootCamp).
        - Lecturer for Software Testing (JMeter + Grafana + Prometheus).
        - Facilitated a clean coding workshop (60+ employees at RentSpree).
        - Teaching Assistant for Programming, Physics, and Statistics at KMITL.
        - Led CIE Open House (500+ high school students), handling budget and logistics.
        
        **Publications**
        - IEEE Access (2024): Stateless System Performance Prediction and Health Assessment in Cloud Environments.
        - iSAI-NLP (2023): Cloud Stateless Server Failover Prediction Using ML on System Metrics.
        
        **Certifications**
        AWS Certified Solution Architect - Associate (Jan 2023)`;

      // Add system prompt and profile context
      const usedHistory = chatHistory.slice(-10);
      usedHistory.unshift({
        role: "system",
        content: `Task: Retrieve relevant details from the knowledge base and generate accurate responses based on Nutt Chairatana's experience, skills, education, and projects to answer the latest user question.

        Response Format:
        - Provide clear, factual, structured responses.
        - Use concise summaries, including key details.
        - If the requested information is unavailable, politely mention it.

        Context Document (Profile Information):
        ${NUTT_PROFILE}
        `,
      });
      const API_KEY = "sk-";
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${API_KEY}`,
          },
          body: JSON.stringify({
            model: "gpt-4o-mini", // Change if needed
            messages: usedHistory, // Send only the last 10 messages to avoid long context
          }),
        }
      );
      console.log("PROMPT", usedHistory);
      const data = await response.json();
      return (
        data.choices?.[0]?.message?.content || "Error: No response from LLM"
      );
    } catch (error) {
      console.log("Error connecting to the chatbot:", error);
      return "Error connecting to the chatbot.";
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
