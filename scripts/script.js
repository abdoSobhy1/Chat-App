let accordion = document.querySelectorAll(".accordion .title");
let accordionself = document.querySelectorAll(".accordion");
accordion.forEach((item) => {
  item.addEventListener("click", function () {
    item.parentElement.classList.toggle("active");
  });
});
let accents = ["#7F39FB", "#f36bab", "#428FEB", "#2DB652", "#E44E55"];
let chat = document.querySelectorAll(".chats-container .chat");
chat.forEach((ele) => {
  ele.addEventListener("click", (event) => {
    chat.forEach((i) => {
      i.classList.remove("active");
    });
    ele.classList.add("active");
    document
      .querySelector(".chats")
      .style.setProperty(
        "--random-accent",
        accents[Math.floor(Math.random() * accents.length)]
      );
    let source = ele.children[2].src;
    let sndr = document.querySelectorAll(".sndrImg");
    sndr.forEach((image) => {
      image.src = source;
    });
    document.querySelector(".u-info .name").innerHTML =
      ele.children[3].children[0].innerHTML;
  });
});

let send = document.querySelector(".send");
let sendMsg = function () {
  let messageContent = document.getElementById("Message").value;
  if (messageContent.trim() == "") {
    return;
  }
  let time = new Date().toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  let newMsg = `
    <div class="sender-img">
          <img src="images/pfp.jpg" alt="">
    </div>
    <div class="message">
        <div class="text">${messageContent}</div>
        <div class="time">${time}</div>
  </div>`;
  let msgBox = document.createElement("div");
  msgBox.classList.add("message-sent");
  msgBox.classList.add("msg-transition");
  msgBox.innerHTML += newMsg;
  let msgContainer = document.querySelector(".messages-container");
  msgContainer.appendChild(msgBox);
  setTimeout(() => {
    msgBox.classList.remove("msg-transition");
  }, 30);
  document.getElementById("Message").value = "";
  msgContainer.scrollTop = msgContainer.scrollHeight - 200;
  setTimeout(() => {
    randomMsg();
  }, Math.floor(Math.random() * 2) * 1000);
};
send.addEventListener("click", () => {
  sendMsg();
});

document.onkeydown = function () {
  if (window.event.keyCode == "13") {
    sendMsg();
  }
};

let infoButton = document.querySelector(".show-info");
let infoContainer = document.querySelector(".chat-info");
let infoVisible = false;
infoButton.addEventListener("click", () => {
  if (window.innerWidth <= 768) {
    if (!infoVisible) {
      infoContainer.style.right = 0;
      infoVisible = true;
    }
  }
});

document.addEventListener("click", function (event) {
  if (
    !infoContainer.contains(event.target) &&
    infoVisible &&
    !infoButton.contains(event.target)
  ) {
    infoVisible = false;
    infoContainer.style.right = -400 + "px";
  }
});

let chatButton = document.querySelector(".contacts");
let chatContainer = document.querySelector(".chat-menu");
let chatVisible = false;
chatButton.addEventListener("click", () => {
  if (window.innerWidth <= 768) {
    if (!chatVisible) {
      chatContainer.style.left = 0;
      chatVisible = true;
      document.querySelector(".fill").style.opacity = 1;
      document.querySelector(".outline").style.opacity = 0;
    } else {
      chatContainer.style.left = -400 + "px";
      chatVisible = false;
      document.querySelector(".fill").style.opacity = 0;
      document.querySelector(".outline").style.opacity = 1;
    }
  }
});

document.addEventListener("click", function (event) {
  if (
    !chatContainer.contains(event.target) &&
    chatVisible &&
    !chatButton.contains(event.target)
  ) {
    chatVisible = false;
    chatContainer.style.left = -400 + "px";
    document.querySelector(".fill").style.opacity = 0;
    document.querySelector(".outline").style.opacity = 1;
  }
});
let randomMessages = [
  "Where's Messi?",
  `Sub to my <a href="https://www.youtube.com/@abdosobhy" target="_blank">Channel</a>`,
  `follow me on <a href="https://twitter.com/_abdosobhy" target="_blank">twitter</a>`,
  "Unban me",
  "I will give you 10 millions",
  "Thanks",
  "let's go!",
  "Amazing",
  "Check out my other designs",
  "I'll buy you a coffee",
  "Give me Your data plz 👉👈",
  "How you doin'?",
  "I know a guy who can do that",
  "sorry I can't",
  "wanna hear a joke?",
  "No, I don't think I will",
  "That's what she said",
  "مرة حلة شاطت جابت جون",
  "Funny message<br>You are banned for 30 days",
  "You've been hacked give me $999",
  "Made with love",
  "If I made you laugh consider leaving a like",
  'A wise man once said" Fake it till you make it"',
  "I'll add more messages later",
];
let randomMsg = function () {
  let oldMsg = "";
  let msgBox = document.createElement("div");
  msgBox.classList.add("message-received");
  let imgDiv = document.createElement("div");
  imgDiv.classList.add("sender-img");
  let sndrImg = document.createElement("img");
  sndrImg.src = document.querySelector(".sndrImg").src;
  sndrImg.classList.add("sndrImg");
  imgDiv.appendChild(sndrImg);
  msgBox.appendChild(imgDiv);
  let msgParent = document.createElement("div");
  msgParent.classList.add("message");
  let msg = document.createElement("div");
  msg.classList.add("text");
  let msgNumber = Math.floor(Math.random() * randomMessages.length);
  if (msgNumber == oldMsg) {
    msgNumber += 1;
  }
  msg.innerHTML = randomMessages[msgNumber];
  msgParent.appendChild(msg);
  let time = document.createElement("div");
  time.classList.add("time");
  time.innerHTML = new Date().toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  msgParent.appendChild(time);
  msgBox.appendChild(msgParent);
  msgBox.classList.add("msg-transition");
  let msgContainer = document.querySelector(".messages-container");
  msgContainer.appendChild(msgBox);
  setTimeout(() => {
    msgBox.classList.remove("msg-transition");
  }, 30);
  msgContainer.scrollTop = msgContainer.scrollHeight;
  oldMsg = msgNumber;
};

let darkToggle = document.querySelector(".dark");
let darkmode = false;
darkToggle.addEventListener("click", () => {
  if (!darkmode) {
    document.body.classList.add("dark");
    darkmode = true;
    document.querySelector(".dark-o").style.opacity = 0;
    document.querySelector(".dark-f").style.opacity = 1;
  } else {
    document.body.classList.remove("dark");
    darkmode = false;
    document.querySelector(".dark-o").style.opacity = 1;
    document.querySelector(".dark-f").style.opacity = 0;
  }
});
