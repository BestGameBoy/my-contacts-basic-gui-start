// My Contacts Basic

// HTML Elements
let goBtnEl = document.getElementById("go-btn");
let menuEl = document.getElementById("menu");
let outputEl = document.getElementById("output");

// global array
let contacts = loadContacts();

// Go Btn - Menu Listener
goBtnEl.addEventListener("click", goBtnHandler);

function goBtnHandler() {
  // Get Menu Selection
  let selection = menuEl.value;

  if (selection === "display-all") {
    displayContacts();
  } else if (selection === "add") {
    addContact();
  } else if (selection === "remove") {
    removeContact();
  } else if (selection === "display-name") {
    displayByName();
  } else if (selection === "display-country") {
    displayByCountry();
  }
}

// MENU FUNCTIONS
function displayContacts() {
  let outputStr = "";
  for (let i = 0; i < contacts.length; i++) {
    outputStr += getContactInfoHTMLStr(contacts[i], i);
  }
  outputEl.innerHTML = outputStr;
}

function addContact() {
  let nameInfo = prompt("Enter First and and last name.");
  let emailInfo = prompt("Enter your email.");
  let numberInfo = prompt("Enter your contact number");
  let countryInfo = prompt("Enter which country you live in.");
  contacts.push(contactInfo(nameInfo, emailInfo, numberInfo, countryInfo));
  outputEl.innerHTML = `New Contact Added (${nameInfo})`;
  saveContact();
}

function removeContact() {
  let contactIndex = prompt("Enter number of contact");
  if (contactIndex >= 0 && contactIndex < contacts.length) {
    contacts.splice(contactIndex, 1);
    outputEl.innerHTML = `Contact removed`;
    saveContact();
  }
}

function displayByName() {
  let nameSearch = prompt("Enter the name");
  if (nameSearch) console.log("Display by Name");
}

function displayByCountry() {
  console.log("Display by Country");
}

// Helper functions

function contactInfo(
  nameInformation,
  emailInformation,
  numberInformation,
  countryInformation
) {
  return {
    nameInfo: nameInformation,
    emailInfo: emailInformation,
    numberInfo: numberInformation,
    countryInfo: countryInformation,
  };
}

// get html for given contact
function getContactInfoHTMLStr(oneInfo, i) {
  return `
  <div>
  ${i}: ${oneInfo.nameInfo}: ${oneInfo.emailInfo}: ${oneInfo.numberInfo}: ${oneInfo.countryInfo}
  `;
}
// save contact

function saveContact() {
  localStorage.setItem("contacts", JSON.stringify(contacts));
}
function loadContacts() {
  let contactStr = localStorage.getItem("contacts");
  return JSON.parse(contactStr) ?? [];
}
