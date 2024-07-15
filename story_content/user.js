function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5vtWY18dF9S":
        Script1();
        break;
      case "5slMiMD4eG0":
        Script2();
        break;
      case "6rhc5QEa10P":
        Script3();
        break;
      case "6meTZ0h2zsi":
        Script4();
        break;
      case "69rkE30WDf2":
        Script5();
        break;
      case "65V5DC70jYr":
        Script6();
        break;
      case "5s08yenamgd":
        Script7();
        break;
      case "65Wxf6qwYuM":
        Script8();
        break;
      case "5ePvtCY2r8K":
        Script9();
        break;
      case "6Z5cngDcYep":
        Script10();
        break;
      case "6O9P5pEweUo":
        Script11();
        break;
      case "6EN3pgwUBRu":
        Script12();
        break;
      case "6LtHfhFdR4H":
        Script13();
        break;
      case "5m6nDY5Qoft":
        Script14();
        break;
      case "6BAyOnIrXFs":
        Script15();
        break;
      case "5aG3jP33uHU":
        Script16();
        break;
      case "64zCYmAYFOR":
        Script17();
        break;
      case "6S9bSYzGyMo":
        Script18();
        break;
      case "5jycK2UNW34":
        Script19();
        break;
      case "6DsiLagJTV8":
        Script20();
        break;
      case "5wlgRxr7oy1":
        Script21();
        break;
  }
}

function Script1()
{
  player = GetPlayer();
//for each var in SL

var langKey = player.GetVar("lang");
var langAllVars = {};
var langAllKeys = [];

//first layer Chapter
for (const [ChKey, value] of Object.entries(lang[langKey])) {
  //second layer slide
  for (const [SlKey, value] of Object.entries(lang[langKey][`${ChKey}`])) {
    //thrid layer contexts
    for (const [key, value] of Object.entries(
      lang[langKey][`${ChKey}`][`${SlKey}`]
    )) {
      langAllVars[`${ChKey}_${SlKey}_${key}`] = `${value}`;
      langAllKeys.push(`${ChKey}_${SlKey}_${key}`);
    }
  }
}

console.log(langAllVars);
console.log(langAllKeys);

langAllKeys.forEach((e) => {
  if (player.GetVar(e) || player.GetVar(e) == "") {
    player.SetVar(e, langAllVars[e]);
  }
});

}

function Script2()
{
  //
e = document.querySelector("#achievement_popup_text");
player = GetPlayer();
e.innerHTML = player.GetVar("achievementText");
anime({
  targets: "#achievement_popup",
  translateX: ["-100%", 0],
  opacity: [0, 1],
  endDelay: 1500,
  duration: 750,
  direction: "alternate",
  easing: "easeOutQuint",
});

}

function Script3()
{
  function loadScript(sSrc) {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = sSrc;
  document.body.appendChild(script);
}


if (!window.scriptLoaded) {
  loadScript(
    "https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"
  );
  loadScript(
    "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"
  );
  console.log("loaded");
  window.scriptLoaded = true;
}

let se = document.createElement("script");
se.setAttribute("type", "module");
se.innerHTML = `
import { default as data } from './story_content/external_files/lang.js';
window.lang = data;
`;
let body = document.querySelector("body");
body.append(se);



}

function Script4()
{
  e = document.querySelector("#slide");

var achievement = document.createElement("div");
achievement.id = "achievement_popup";

achievement.style.display = "flex";
achievement.style.width = "25%";
achievement.style.backgroundColor = "#1B4965";
achievement.style.height = "13VH";
achievement.style.position = "absolute";
achievement.style.left = "-2%";
achievement.style.top = "3%";
achievement.style["z-index"] = "999";
achievement.style["border-radius"] = "0.3em";
achievement.style.border = "2px solid white";
achievement.style["flex-direction"] = "row";
achievement.style.padding = "0.5% 0%";
achievement.style.transform = "translateX(-100%)";

//------------------------------
var achievementImg = document.createElement("img");

achievementImg.src = "./story_content/external_files/achieve.png";
achievementImg.style.height = "100%";
achievementImg.style["margin-left"] = "10%";

var achievementText = document.createElement("p");
achievementText.id = "achievement_popup_text";
achievementText.innerHTML = "text achievement";
achievementText.style["font-family"] = "Arial, Helvetica, sans-serif";
achievementText.style["font-size"] = "3vh";
achievementText.style["align-self"] = "center";
achievementText.style.color = "white";
achievementText.style["margin-left"] = "3vh";

achievement.appendChild(achievementImg);
achievement.appendChild(achievementText);
e.appendChild(achievement);
}

function Script5()
{
  player = GetPlayer();
//for each var in SL

var langKey = player.GetVar("lang");
var langAllVars = {};
var langAllKeys = [];

//first layer Chapter
for (const [ChKey, value] of Object.entries(lang[langKey])) {
  //second layer slide
  for (const [SlKey, value] of Object.entries(lang[langKey][`${ChKey}`])) {
    //thrid layer contexts
    for (const [key, value] of Object.entries(
      lang[langKey][`${ChKey}`][`${SlKey}`]
    )) {
      langAllVars[`${ChKey}_${SlKey}_${key}`] = `${value}`;
      langAllKeys.push(`${ChKey}_${SlKey}_${key}`);
    }
  }
}

console.log(langAllVars);
console.log(langAllKeys);

langAllKeys.forEach((e) => {
  if (player.GetVar(e) || player.GetVar(e) == "") {
    player.SetVar(e, langAllVars[e]);
  }
});

}

function Script6()
{
  //
e = document.querySelector("#achievement_popup_text");
player = GetPlayer();
e.innerHTML = player.GetVar("achievementText");
anime({
  targets: "#achievement_popup",
  translateX: ["-100%", 0],
  opacity: [0, 1],
  endDelay: 1500,
  duration: 750,
  direction: "alternate",
  easing: "easeOutQuint",
});

}

function Script7()
{
  player = GetPlayer();
//for each var in SL

var langKey = player.GetVar("lang");
var langAllVars = {};
var langAllKeys = [];

//first layer Chapter
for (const [ChKey, value] of Object.entries(lang[langKey])) {
  //second layer slide
  for (const [SlKey, value] of Object.entries(lang[langKey][`${ChKey}`])) {
    //thrid layer contexts
    for (const [key, value] of Object.entries(
      lang[langKey][`${ChKey}`][`${SlKey}`]
    )) {
      langAllVars[`${ChKey}_${SlKey}_${key}`] = `${value}`;
      langAllKeys.push(`${ChKey}_${SlKey}_${key}`);
    }
  }
}

langAllKeys.forEach((e) => {
  if (player.GetVar(e) || player.GetVar(e) == "") {
    player.SetVar(e, langAllVars[e]);
  }
});

}

function Script8()
{
  player = GetPlayer();
//for each var in SL

var langKey = player.GetVar("lang");
var langAllVars = {};
var langAllKeys = [];

//first layer Chapter
for (const [ChKey, value] of Object.entries(lang[langKey])) {
  //second layer slide
  for (const [SlKey, value] of Object.entries(lang[langKey][`${ChKey}`])) {
    //thrid layer contexts
    for (const [key, value] of Object.entries(
      lang[langKey][`${ChKey}`][`${SlKey}`]
    )) {
      langAllVars[`${ChKey}_${SlKey}_${key}`] = `${value}`;
      langAllKeys.push(`${ChKey}_${SlKey}_${key}`);
    }
  }
}

console.log(langAllVars);
console.log(langAllKeys);

langAllKeys.forEach((e) => {
  if (player.GetVar(e) || player.GetVar(e) == "") {
    player.SetVar(e, langAllVars[e]);
  }
});

}

function Script9()
{
  //
e = document.querySelector("#achievement_popup_text");
player = GetPlayer();
e.innerHTML = player.GetVar("achievementText");
anime({
  targets: "#achievement_popup",
  translateX: ["-100%", 0],
  opacity: [0, 1],
  endDelay: 1500,
  duration: 750,
  direction: "alternate",
  easing: "easeOutQuint",
});

}

function Script10()
{
  player = GetPlayer();
//for each var in SL

var langKey = player.GetVar("lang");
var langAllVars = {};
var langAllKeys = [];

//first layer Chapter
for (const [ChKey, value] of Object.entries(lang[langKey])) {
  //second layer slide
  for (const [SlKey, value] of Object.entries(lang[langKey][`${ChKey}`])) {
    //thrid layer contexts
    for (const [key, value] of Object.entries(
      lang[langKey][`${ChKey}`][`${SlKey}`]
    )) {
      langAllVars[`${ChKey}_${SlKey}_${key}`] = `${value}`;
      langAllKeys.push(`${ChKey}_${SlKey}_${key}`);
    }
  }
}

console.log(langAllVars);
console.log(langAllKeys);

langAllKeys.forEach((e) => {
  if (player.GetVar(e) || player.GetVar(e) == "") {
    player.SetVar(e, langAllVars[e]);
  }
});

}

function Script11()
{
  //
e = document.querySelector("#achievement_popup_text");
player = GetPlayer();
e.innerHTML = player.GetVar("achievementText");
anime({
  targets: "#achievement_popup",
  translateX: ["-100%", 0],
  opacity: [0, 1],
  endDelay: 1500,
  duration: 750,
  direction: "alternate",
  easing: "easeOutQuint",
});

}

function Script12()
{
  var dragObj = ["C1_drag", "MBL_drag", "C3_drag", "Ficolin_drag"];

dragObj.forEach((e) => {
  obj = document.querySelector('[data-acc-text="' + e + '"]');
  obj.addEventListener("mousedown", function () {
    player.SetVar("Ch3MouseUp", false);
    player.SetVar("Ch3_nowHover", e);

  });
});
window.addEventListener("mouseup", function () {
    player.SetVar("Ch3MouseUp", true);
    player.SetVar("Ch3_nowHover", '');
  });
  
  var t=null;
  
window.addEventListener("click", function () {
    player.SetVar("Ch3_clickDetected", true);
if (t != null) { window.clearTimeout(t); }
t = window.setTimeout(function() {
    player.SetVar("Ch3_clickDetected", false);
}, 500);

});
  
  
window.addEventListener("dblclick", function () {
    player.SetVar("Ch3_clickDetected", true);
if (t != null) { window.clearTimeout(t); }
t = window.setTimeout(function() {
    player.SetVar("Ch3_clickDetected", false);
}, 500);

});

}

function Script13()
{
  //detect return to position----------------------------------------------
if (!player) {
  var player = GetPlayer();
}

// var eName = ["C1_drag", "MBL_drag", "Ficolin_drag", "C3_drag"];
var returnDetect = "Ch3_returnDetect";
var targetNodes = document.getElementsByClassName("draggable");

//get window width and height
const slide = document.getElementById("slide");

//helper function to get translate x and y
function getTranslateValues(t) {
  const n = window.getComputedStyle(t),
    o = n.transform || n.webkitTransform || n.mozTransform;
  if ("none" === o || void 0 === o) return { x: 0, y: 0, z: 0 };
  const r = o.includes("3d") ? "3d" : "2d",
    d = o.match(/matrix.*\((.+)\)/)[1].split(", ");
  return "2d" === r
    ? { x: d[4], y: d[5], z: 0 }
    : "3d" === r
    ? { x: d[12], y: d[13], z: d[14] }
    : void 0;
}

//helper function to get position relative to layer DOM
function getRelativePosition(e) {
  var transformValues = getTranslateValues(e);
  var left = parseFloat(transformValues.x) / parseFloat(slide.style.width);
  var top = parseFloat(transformValues.y) / parseFloat(slide.style.height);
  return left.toFixed(2) + " " + top.toFixed(2);
}

// Options for the observer (which mutations to observe)
const config = { attributes: true, childList: false, subtree: false };
var oriPositions = {};

for (let targetNode of targetNodes) {
  var position = getRelativePosition(targetNode);
  oriPositions[targetNode.dataset.modelId] = getRelativePosition(targetNode);
  // Callback function to execute when mutations are observed
  var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      if (mutation.type === "attributes") {
        var newPosition = getRelativePosition(targetNode);
        if (position != newPosition) {
          if (newPosition === oriPositions[targetNode.dataset.modelId]) {
            player.SetVar(returnDetect, true);
          }
          position = newPosition;
        }
      }
      if (!player.GetVar(returnDetect)) {
        player.SetVar(returnDetect, false);
      }
    });
  });
  observer.observe(targetNode, config);
}
}

function Script14()
{
  player = GetPlayer();
//for each var in SL

var langKey = player.GetVar("lang");
var langAllVars = {};
var langAllKeys = [];

//first layer Chapter
for (const [ChKey, value] of Object.entries(lang[langKey])) {
  //second layer slide
  for (const [SlKey, value] of Object.entries(lang[langKey][`${ChKey}`])) {
    //thrid layer contexts
    for (const [key, value] of Object.entries(
      lang[langKey][`${ChKey}`][`${SlKey}`]
    )) {
      langAllVars[`${ChKey}_${SlKey}_${key}`] = `${value}`;
      langAllKeys.push(`${ChKey}_${SlKey}_${key}`);
    }
  }
}

console.log(langAllVars);
console.log(langAllKeys);

langAllKeys.forEach((e) => {
  if (player.GetVar(e) || player.GetVar(e) == "") {
    player.SetVar(e, langAllVars[e]);
  }
});

}

function Script15()
{
  //
e = document.querySelector("#achievement_popup_text");
player = GetPlayer();
e.innerHTML = player.GetVar("achievementText");
anime({
  targets: "#achievement_popup",
  translateX: ["-100%", 0],
  opacity: [0, 1],
  endDelay: 1500,
  duration: 750,
  direction: "alternate",
  easing: "easeOutQuint",
});

}

function Script16()
{
  player = GetPlayer();
//for each var in SL

var langKey = player.GetVar("lang");
var langAllVars = {};
var langAllKeys = [];

//first layer Chapter
for (const [ChKey, value] of Object.entries(lang[langKey])) {
  //second layer slide
  for (const [SlKey, value] of Object.entries(lang[langKey][`${ChKey}`])) {
    //thrid layer contexts
    for (const [key, value] of Object.entries(
      lang[langKey][`${ChKey}`][`${SlKey}`]
    )) {
      langAllVars[`${ChKey}_${SlKey}_${key}`] = `${value}`;
      langAllKeys.push(`${ChKey}_${SlKey}_${key}`);
    }
  }
}

console.log(langAllVars);
console.log(langAllKeys);

langAllKeys.forEach((e) => {
  if (player.GetVar(e) || player.GetVar(e) == "") {
    player.SetVar(e, langAllVars[e]);
  }
});

}

function Script17()
{
  //
e = document.querySelector("#achievement_popup_text");
player = GetPlayer();
e.innerHTML = player.GetVar("achievementText");
anime({
  targets: "#achievement_popup",
  translateX: ["-100%", 0],
  opacity: [0, 1],
  endDelay: 1500,
  duration: 750,
  direction: "alternate",
  easing: "easeOutQuint",
});

}

function Script18()
{
  player = GetPlayer();
//for each var in SL

var langKey = player.GetVar("lang");
var langAllVars = {};
var langAllKeys = [];

//first layer Chapter
for (const [ChKey, value] of Object.entries(lang[langKey])) {
  //second layer slide
  for (const [SlKey, value] of Object.entries(lang[langKey][`${ChKey}`])) {
    //thrid layer contexts
    for (const [key, value] of Object.entries(
      lang[langKey][`${ChKey}`][`${SlKey}`]
    )) {
      langAllVars[`${ChKey}_${SlKey}_${key}`] = `${value}`;
      langAllKeys.push(`${ChKey}_${SlKey}_${key}`);
    }
  }
}

console.log(langAllVars);
console.log(langAllKeys);

langAllKeys.forEach((e) => {
  if (player.GetVar(e) || player.GetVar(e) == "") {
    player.SetVar(e, langAllVars[e]);
  }
});

}

function Script19()
{
  //
e = document.querySelector("#achievement_popup_text");
player = GetPlayer();
e.innerHTML = player.GetVar("achievementText");
anime({
  targets: "#achievement_popup",
  translateX: ["-100%", 0],
  opacity: [0, 1],
  endDelay: 1500,
  duration: 750,
  direction: "alternate",
  easing: "easeOutQuint",
});

}

function Script20()
{
  player = GetPlayer();
//for each var in SL

var langKey = player.GetVar("lang");
var langAllVars = {};
var langAllKeys = [];

//first layer Chapter
for (const [ChKey, value] of Object.entries(lang[langKey])) {
  //second layer slide
  for (const [SlKey, value] of Object.entries(lang[langKey][`${ChKey}`])) {
    //thrid layer contexts
    for (const [key, value] of Object.entries(
      lang[langKey][`${ChKey}`][`${SlKey}`]
    )) {
      langAllVars[`${ChKey}_${SlKey}_${key}`] = `${value}`;
      langAllKeys.push(`${ChKey}_${SlKey}_${key}`);
    }
  }
}

console.log(langAllVars);
console.log(langAllKeys);

langAllKeys.forEach((e) => {
  if (player.GetVar(e) || player.GetVar(e) == "") {
    player.SetVar(e, langAllVars[e]);
  }
});

}

function Script21()
{
  //
e = document.querySelector("#achievement_popup_text");
player = GetPlayer();
e.innerHTML = player.GetVar("achievementText");
anime({
  targets: "#achievement_popup",
  translateX: ["-100%", 0],
  opacity: [0, 1],
  endDelay: 1500,
  duration: 750,
  direction: "alternate",
  easing: "easeOutQuint",
});

}

