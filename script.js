var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var linearGradient = document.querySelector("p");
var body = document.getElementById("gradient");
var random = document.querySelector(".random-button");

const addGradient = () => {
  body.style.background = `linear-gradient(to right,${color1.value},${color2.value})`;
  linearGradient.textContent = "background: " + body.style.background + ";";
};

const HSLToHex = (hsl) => {
  let sep = hsl.indexOf(",") > -1 ? "," : " ";
  hsl = hsl.substr(4).split(")")[0].split(sep);

  let h = hsl[0],
    s = hsl[1].substr(0, hsl[1].length - 1) / 100,
    l = hsl[2].substr(0, hsl[2].length - 1) / 100;

  if (h.indexOf("deg") > -1) h = h.substr(0, h.length - 3);
  else if (h.indexOf("rad") > -1)
    h = Math.round(h.substr(0, h.length - 3) * (180 / Math.PI));
  else if (h.indexOf("turn") > -1)
    h = Math.round(h.substr(0, h.length - 4) * 360);
  if (h >= 360) h %= 360;

  let c = (1 - Math.abs(2 * l - 1)) * s,
    x = c * (1 - Math.abs(((h / 60) % 2) - 1)),
    m = l - c / 2,
    r = 0,
    g = 0,
    b = 0;

  if (0 <= h && h < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (60 <= h && h < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (120 <= h && h < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (180 <= h && h < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (240 <= h && h < 300) {
    r = x;
    g = 0;
    b = c;
  } else if (300 <= h && h < 360) {
    r = c;
    g = 0;
    b = x;
  }

  r = Math.round((r + m) * 255).toString(16);
  g = Math.round((g + m) * 255).toString(16);
  b = Math.round((b + m) * 255).toString(16);

  if (r.length == 1) r = "0" + r;
  if (g.length == 1) g = "0" + g;
  if (b.length == 1) b = "0" + b;

  return "#" + r + g + b;
};

const randomColor = () => {
  return `hsl(${Math.random() * 360}, 100%, 50%)`;
};

const setRandomColors = () => {
  const randomColor1 = randomColor();
  const randomColor2 = randomColor();
  color1.value = HSLToHex(randomColor1);
  color2.value = HSLToHex(randomColor2);
  body.style.background = `linear-gradient(to right,${randomColor1},${randomColor2})`;
  linearGradient.textContent = "background: " + body.style.backgroundImage + ";";
};


const copyFunction = () => {
  var property = document.getElementById("css-property");
  navigator.clipboard.writeText(property.innerText);
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied to clipboard";
};

color1.addEventListener("input", addGradient);
color2.addEventListener("input", addGradient);
random.addEventListener("click", setRandomColors);
