let accordion = document.querySelectorAll(".accordion .title");
let accordionself = document.querySelectorAll(".accordion");
accordion.forEach((item) => {
  item.addEventListener("click", function () {
    item.parentElement.classList.toggle("active");
  });
});

let chat = document.querySelectorAll(".chats-container .chat");
chat.forEach((ele) => {
  ele.addEventListener("click", (event) => {
    chat.forEach((i) => {
      i.classList.remove("active");
    });
    ele.classList.add("active");
  });
});

let send = document.querySelector(".send");
let sendMsg = function () {
  let messageContent = document.getElementById("Message").value;
  if (messageContent.trim() == "") {
    return;
  }
  let msgBox = document.createElement("div");
  msgBox.classList.add("message-sent");
  let imgDiv = document.createElement("div");
  imgDiv.classList.add("sender-img");
  let sndrImg = document.createElement("img");
  sndrImg.src = `images/pfp.jpg`;
  imgDiv.appendChild(sndrImg);
  msgBox.appendChild(imgDiv);
  let msgParent = document.createElement("div");
  msgParent.classList.add("message");
  let msg = document.createElement("div");
  msg.classList.add("text");
  msg.innerHTML = messageContent;
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
  document.getElementById("Message").value = "";
  msgContainer.scrollTop = msgContainer.scrollHeight - 200;
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
if (window.innerWidth <= 768) {
  if (!infoVisible) {
    infoButton.addEventListener("click", () => {
      infoContainer.style.right = 0;
      infoVisible = true;
    });
  }
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
}
