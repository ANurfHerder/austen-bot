function generateReply(event) {
  event.preventDefault();

  new Typewriter("#reply", {
    strings: ["my dearest"],
    autoStart: true,
    cursor: "",
  });
}

let replyFormElement = document.querySelector("#reply-generator");
replyFormElement.addEventListener("submit", generateReply);
