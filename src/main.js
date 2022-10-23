import "./css/index.css"

const ccBgColor01 = document.querySelector(".cc-bg svg > g g:nth-child(1) path")
const ccBgColor02 = document.querySelector(".cc-bg svg > g g:nth-child(2) path")
const ccLogo = document.querySelector(".cc-logo span:nth-child(2) img")


function setCardType(type) {
  const colors = {
    visa: ["#315881", "#DFA43B"],
    mastercard: ["#EB001B", "#F79E1B"],
    alelo: ["#007858", "#C7D540"],
    americanexpress: ["#FFFFFF", "#0077A6"],
    hipercard: ["#822124", "#FFFFFF"],
    rocket: ["#F900BF", "#4700D8"],
    default: ["black", "gray"],
  }
  
  ccBgColor01.setAttribute("fill", colors[type][0])
  ccBgColor02.setAttribute("fill", colors[type][1])
  ccLogo.setAttribute("src", `cc-${type}.svg`)
}

globalThis.setCardType = setCardType