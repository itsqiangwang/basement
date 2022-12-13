// how to detect swiping direction: https://stackoverflow.com/questions/53192433/how-to-detect-swipe-in-javascript
//--------------- Swipe Up / Down ---------------//

var screen = document.querySelector("html");
var buttonImage = document.getElementById("button-image");
var lightsOnContainer = document.getElementById("lights-on-container");
var lightsOffContainer = document.getElementById("lights-off-container");
var objectImage = document.getElementById("object-image");
var objectDescription = [
  "hand woven in rural Ghana from the durable elephant grass", 
  "wrapped with soft hand dyed cow leather",
  "a concentric circle of black devil's claw emanating stepped rays whirling in the sunwise (clockwise) direction",
  "fine weave",
  "Chinese symbols",
  "unknown meaning",
  "rare",
  "generous",
  "spindle-like silhouette",
  "a stately body in Italian walnut", 
  "can be reshaped by immersing the basket in cold water",
  "can be used throughout the home blending age-old tradition with today's contemporary interiors and exteriors", 
  "will complement any space", 
  "a touch of rustic elegance", 
  "with a sly look she said '10 cows' which brought the house down with laughter", 
  "one-of-a-kind", 
  "handmade", 
  "original", 
  "very collectible", 
  "unique", 
  "rarely seen",
  "in style", 
  "versatile", 
  "organize wires or cords", 
  "hang them from bulletin boards", 
  "or use them as stands for small items", 
  "smooth", 
  "shiny finish", 
  "created with pride by Americans who are blind or have significant disabilities", 
  "squeeze to open with ease", 
  "and release for a firm grip", 
  "durable and reusable", 
  "providing long time operation", 
  "assembled with steel arms", 
  "ready to work", 
  "bend back into shape after each use", 
  "while also reducing waste", 
  "keep important information organized", 
  "triangular design", 
  "superior", 
  "secure", 
  "can be used both temporarily and permanently", 
  "won't slip, slide, or fall off", 
  "hold up to 3/8 of material", 
  "optimum", 
  "perfect size", 
  "in one pile", 
  "high-end", 
  "just what you need", 
  "tempered", 
  "suitable for various tasks", 
  "made with a corrosion-resistant coating", 
  "for everyday use", 
  "ideal size", 
  "strong tension", 
  "without any issues", 
  "glide smoothly", 
  "manipulating", 
  "double-sawtooth",
  "low drain", 
  "before leakage can occur", 
  "developed for the value minded consumer", 
  "Mercury Free", 
  "a trusted industry leader", 
  "since 1931", 
  "exceptional", 
  "a shelf life of up to 4 years", 
  "perfect", 
  "will keep your favorite devices running", 
  "easy to open package", 
  "mercury and cadmium free", 
  "long-lasting and cost-effective", 
  "reliable power source", 
  "for discerning professionals", 
  "for serious professionals", 
  "longest lasting", 
  "running longer than any other", 
  "10 Year Shelf Life", 
  "you don’t have time to worry", 
  "for rugged work conditions", 
  "safe from boots", 
  "tires", 
  "dropped tools or anything else you can throw at them",
  "a refined collection",
  "drawn from extensive travel", 
  "glazed with incised pattern", 
  "1950s-60s", 
  "Beautiful and unique", 
  "it has a small glazing error", 
  "come and take them", 
  "truly looks like the deep blue ocean", 
  "for anyone", 
  "hand thrown or hand built", 
  "glaze fired to over 2280 degrees in early February of 2021", 
  "microscopic expansion", 
  "does not dribble", 
  "has an indent for a spoon (spoon not included)", 
  "no two pieces are the same", 
  "survived the last 100 years", 
  "solid and sturdy", 
  "once broken and is now repaired", 
  "casted into shape using the 'slip casting technique", 
  "fired at 1250°C to make it durable", 
  "strong and waterproof", 
  "truly is a unique and one-of-a-kind piece", 
  "perfect as a small art or decorative object for a dresser or shelf", 
  "relaxed and interesting", 
  "in one piece", 
  "it will complement the beauty of any medium size plant or succulent",
  "firmly fixed",
  "both practical and beautiful", 
  "Can be reused many times without affecting the overall appearance of the wall", 
  "strong enough", 
  "self-piercing", 
  "made from heat treated C1022 steel", 
  "faster drive time and greater resistance to pull out", 
  "conforms to the surface", 
  "sturdy threads in softwoods", 
  "Hand-formed", 
  "Silver Plated", 
  "65-56 Million Years Ago", 
  "sold individually", 
  "highly versatile", 
  "corrosion resistance", 
  "Easy-to-use", 
  "rustic flare", 
  "a touch of holiday cheer"
]
var objectDescriptionContainer = document.getElementById("object-description");

screen.addEventListener("touchstart", startTouch, false);
screen.addEventListener("touchmove", moveTouch, false);

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
    console.log('source: ' + objectImage.src);
    objectImage.src = `media/object-image-${Math.floor(Math.random() * (46 - 1) + 1)}.png`;
    // if (objectImage.src == ''){
    //   objectImage.src = `media/object-image-${Math.floor(Math.random() * (46 - 1) + 1)}.png`;
    //   var tempImageSource = objectImage.src;
    // } else {
    //   objectImage.src = tempImageSource;
    // }
    // console.log(tempImageSource);
    // console.log(objectImage.src);
  } else {
    // swiped down
    console.log("swiped down");
    screen.style.backgroundColor = "black";
    buttonImage.src = "media/off.png";
    buttonImage.style.animation = "Down 2s ease-in";
    lightsOffContainer.style.display = "flex";
    lightsOnContainer.style.display = "none";
    objectImage.src = '';
    objectDescriptionContainer.innerHTML = objectDescription[Math.floor(Math.random() * (objectDescription.length - 1) + 0)];
    // console.log(objectDescriptionContainer);
    // console.log(typeof objectDescriptionContainer);
  }

  initialY = null;

  e.preventDefault();
}

//--------------- load render ---------------//
function loadRender() {
  buttonImage.style.animation = "Up 2s ease-in";
}

// sketchToggle must run before photoSwap
loadRender();