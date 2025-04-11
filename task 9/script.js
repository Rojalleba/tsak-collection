document.addEventListener('DOMContentLoaded', () => {
  const topInput = document.getElementById("top-input");
  const bottomInput = document.getElementById("bottom-input");
  const topText = document.getElementById("top-text");
  const bottomText = document.getElementById("bottom-text");
  const memeImage = document.getElementById("meme-image");
  const generateBtn = document.getElementById("generate-btn");
  const resetBtn = document.getElementById("reset-btn");

  topInput.addEventListener("input", () => {
    topText.textContent = topInput.value;
  });

  bottomInput.addEventListener("input", () => {
    bottomText.textContent = bottomInput.value;
  });

  generateBtn.addEventListener("click", () => {
    fetch('https://dog.ceo/api/breeds/image/random') // sends request
      .then(response => {
        console.log("response:", response);
        if (!response.ok) {
          throw new Error('Network response was not ok: ' + response.statusText);
        }
        return response.json();
      })
      .then(data => {
        console.log("data:", data);
        memeImage.src = data.message;
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        alert("Failed to load meme image. Please try again.");
      });
  });

  resetBtn.addEventListener("click", () => {
    topInput.value = "";
    bottomInput.value = "";
    topText.textContent = "Top Text";
    bottomText.textContent = "Bottom Text";
    memeImage.src = "https://via.placeholder.com/500";
  });
});
