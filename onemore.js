const bodyEl = document.querySelector("body");

function createSpan(event) {
  const xPos = event.offsetX;
  const yPos = event.offsetY;

  const backgroundURl = [
    "https://cdn4.iconfinder.com/data/icons/emoji-18/61/4-256.png",
    "https://cdn3.iconfinder.com/data/icons/emoji-1-4/64/_tongue_emoticons_emoji-512.png",
    "https://cdn4.iconfinder.com/data/icons/emoji-18/61/1-512.png",
    "https://cdn4.iconfinder.com/data/icons/twitter-29/512/166_Heart_Love_Like_Twitter-512.png",
    "https://cdn1.iconfinder.com/data/icons/santa-emojis/60/003_-_santa_christmas_emoji_stern_angry-256.png",
    "https://cdn1.iconfinder.com/data/icons/cute-emoji-smiles-with-gradient/83/Angry_Emoji_Dislike_Expression_Social_Emoticons-512.png",
    "https://cdn2.iconfinder.com/data/icons/gaming-entertainment-3/64/bad-pig-512.png",
  ];

  const imgLocation = Math.floor(Math.random() * backgroundURl.length);

  const spanEl = document.createElement("span");
  spanEl.style.left = xPos + "px";
  spanEl.style.top = yPos + "px";

  const size = Math.random() * 100;
  spanEl.style.width = size + "px";
  spanEl.style.height = size + "px";

  spanEl.style.backgroundImage = `url(${backgroundURl[imgLocation]})`;

  bodyEl.appendChild(spanEl);

  setTimeout(() => {
    spanEl.remove();
  }, 5000); // Removes the span after 5 seconds
}

let interval;

bodyEl.addEventListener("mousemove", (event) => {
  clearInterval(interval); // Clear previous interval to avoid multiple intervals running simultaneously

  interval = setInterval(() => {
    createSpan(event);
  }, 500); // Creates a span every 1 second
});

bodyEl.addEventListener("mouseleave", () => {
  clearInterval(interval); // Stop creating spans when the mouse leaves the body
});
