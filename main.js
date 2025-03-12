//Image url
function getImageAndDisplay() {
  var imageUrl = prompt("Enter Image URL:");
  if (imageUrl !== null) {
    var imageElement = document.querySelector(".img"); // Get the existing <img> element
    imageElement.src = imageUrl; // Set the src attribute of the existing <img> element
  }
}



//
function getAndDisplayInput() {
  var userInput = prompt("Enter text:");
  if (userInput !== null) {
    document.getElementById("outputArea").textContent = userInput;
  }
}



function getAndDisplayInput2() {
  var userInput2 = prompt("Enter text:");
  if (userInput2 !== null) {
    document.getElementById("outputArea2").textContent = userInput2;
  }
}









var isPopupOpen = false;

function togglePopup() {
  var popup = document.getElementById('popup-menu');
  var button = document.getElementById('popup-button');

  if (isPopupOpen) {
    popup.style.display = 'none';
    button.innerHTML = 'Open Control Panel';
  } else {
    popup.style.display = 'block';
    button.innerHTML = 'X';
  }

  isPopupOpen = !isPopupOpen;
}





document.addEventListener("DOMContentLoaded", function () {
  const blueElement = document.querySelector(".blue");
  const colorPickerInput = document.getElementById("colorPicker");

  colorPickerInput.addEventListener("input", function () {
    const selectedColor = colorPickerInput.value;
    blueElement.style.backgroundColor = selectedColor;
  });
});



document.addEventListener("DOMContentLoaded", function () {
  const linkInput = document.getElementById("linkInput");
  const applyLinkButton = document.getElementById("applyLinkButton");
  const dynamicLink = document.getElementById("dynamicLink");

  applyLinkButton.addEventListener("click", function () {
    const linkUrl = linkInput.value;
    dynamicLink.href = linkUrl;
  });
});


function applyChanges() {
  var classes = ["class1", "class2", "class3", "class4", "class5", "class6", "class7"];

  for (var i = 0; i < classes.length; i++) {
    var checkbox = document.getElementById("checkbox" + (i + 1));
    var elements = document.getElementsByClassName(classes[i]);

    for (var j = 0; j < elements.length; j++) {
      elements[j].style.display = checkbox.checked ? "block" : "none";
    }
  }
}


