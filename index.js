// how to detect swiping direction: https://stackoverflow.com/questions/53192433/how-to-detect-swipe-in-javascript
var screen = document.querySelector("html");
var buttonImage = document.getElementById("button-image");
var lightsOnContainer = document.getElementById("lights-on-container");
var lightsOffContainer = document.getElementById("lights-off-container");

screen.addEventListener("touchstart", startTouch, false);
screen.addEventListener("touchmove", moveTouch, false);

// Swipe Up / Down
var initialY = null;

function startTouch(e) {
  initialY = e.touches[0].clientY;
}

function moveTouch(e) {
  if (initialY === null) {
    return;
  }

  var currentY = e.touches[0].clientY;

  var diffY = initialY - currentY;

  // sliding vertically
  if (diffY > 0) {
    // swiped up
    console.log("swiped up");
    screen.style.backgroundColor = "white";
    buttonImage.src = "media/on.png";
    buttonImage.style.animation = "Up 2s ease-in";
    lightsOnContainer.style.display = "block";
    lightsOffContainer.style.display = "none";
  } else {
    // swiped down
    console.log("swiped down");
    screen.style.backgroundColor = "black";
    buttonImage.src = "media/off.png";
    buttonImage.style.animation = "Down 2s ease-in";
    lightsOffContainer.style.display = "block";
    lightsOnContainer.style.display = "none";
  }

  initialY = null;

  e.preventDefault();
}

var mainPhoto = document.getElementById("main-photo");
var secondaryPhotoContainer = document.querySelectorAll(".secondary-photo");

function photoSwap() {
  for (i = 0; i < secondaryPhotoContainer.length; i++) {
    secondaryPhotoContainer[i].addEventListener("click", function (e) {
      // store current (clicked) image's source to a temporary variable
      var tempPhotoSource = this.src;

      // swap sources of click image and image in main frame
      this.src = mainPhoto.src;
      mainPhoto.src = tempPhotoSource;
    });
  }
}

function sketchToggle() {
  for (i = 0; i < secondaryPhotoContainer.length; i++) {
    secondaryPhotoContainer[i].addEventListener("click", function (e) {
      // hide all sketches that aren't of the photo currently displayed in the main frame

      // get the clicked object's name via its image source
      var objectName = this.src
        .split("photo-")[1]
        .replace(".jpg", "");
      console.log(objectName);

      // hide all other sketches that are not of this object
      var sketchContainer = document.getElementsByClassName("sketch-container");
      for (var i = 0; i < sketchContainer.length; i++) {
        if (
          sketchContainer[i].className !==
          "sketch-container--" + objectName
        ) {
          sketchContainer[i].style.display = "none";
        }
      }

      // get the corresponding sketch container's class and render it
      var currentSketchContainer = document.getElementsByClassName(
        "sketch-container--" + objectName
      )[0];
      currentSketchContainer.style.display = "flex";
    });
  }
}

function loadRender() {
  var sketchContainerScrew = document.getElementsByClassName(
    "sketch-container--screw"
  )[0];
  sketchContainerScrew.style.display = "flex";
  sketchContainerScrew.style.zIndex = "-999";
  buttonImage.style.animation = "Up 2s ease-in";
}

var screwMainSketch = document.getElementById("screw-main-sketch");
var clipMainSketch = document.getElementById("clip-main-sketch");
var batteryMainSketch = document.getElementById("battery-main-sketch");
var containerMainSketch = document.getElementById("container-main-sketch");
var vaseMainSketch = document.getElementById("vase-main-sketch");
var secondarySketchContainer = document.querySelectorAll(
  ".secondary-sketch-container img"
);

function sketchSwap() {
  for (i = 0; i < 16; i++) {
    secondarySketchContainer[i].addEventListener("click", function (e) {
      // store current (clicked) image's source to a temporary variable
      var tempPhotoSource = this.src;

      // swap sources of click image and image in main frame
      this.src = screwMainSketch.src;
      screwMainSketch.src = tempPhotoSource;
    });
  }

  for (i = 16; i < 32; i++) {
    secondarySketchContainer[i].addEventListener("click", function (e) {
      // store current (clicked) image's source to a temporary variable
      var tempPhotoSource = this.src;

      // swap sources of click image and image in main frame
      this.src = clipMainSketch.src;
      clipMainSketch.src = tempPhotoSource;
    });
  }

  for (i = 32; i < 48; i++) {
    secondarySketchContainer[i].addEventListener("click", function (e) {
      // store current (clicked) image's source to a temporary variable
      var tempPhotoSource = this.src;

      // swap sources of click image and image in main frame
      this.src = batteryMainSketch.src;
      batteryMainSketch.src = tempPhotoSource;
    });
  }

  for (i = 48; i < 64; i++) {
    secondarySketchContainer[i].addEventListener("click", function (e) {
      // store current (clicked) image's source to a temporary variable
      var tempPhotoSource = this.src;

      // swap sources of click image and image in main frame
      this.src = containerMainSketch.src;
      containerMainSketch.src = tempPhotoSource;
    });
  }

  for (i = 64; i < 80; i++) {
    secondarySketchContainer[i].addEventListener("click", function (e) {
      // store current (clicked) image's source to a temporary variable
      var tempPhotoSource = this.src;

      // swap sources of click image and image in main frame
      this.src = vaseMainSketch.src;
      vaseMainSketch.src = tempPhotoSource;
    });
  }
}

sketchToggle();
photoSwap();
loadRender();
sketchSwap();