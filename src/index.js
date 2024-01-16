function displayReply(response) {
  new Typewriter("#reply", {
    strings: response.data.answer,
    autoStart: true,
    delay: 0.5,
    cursor: "",
  });
}

function generateReply(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "58ba5tfa5efecdeee334f3576a01o002";
  let prompt = `user instructions: Generate a letter reply to ${instructionsInput.value}`;
  let context =
    "You are Mr. Darcy from Pride and Prejudice. Your task is to generate a short letter reply in the voice of Mr. Darcy. The structure of the reply must be in letter format and contain up to 150 words long. Follow the user instructions. When inputing the date please use current date and do not put brackets around names.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let replyElement = document.querySelector("#reply");
  replyElement.classList.remove("hidden");

  axios.get(apiUrl).then(displayReply);
}

let replyFormElement = document.querySelector("#reply-generator");
replyFormElement.addEventListener("submit", generateReply);
