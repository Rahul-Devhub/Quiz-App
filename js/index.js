/* ****************This javascript is for clock only***************/
// Accessing and clicking start button
let btnStart = document.getElementById("start");

// accessing time remaining span
let remTime = document.getElementById("secnds");

// Accessing question area
let qArea = document.getElementById("question-p");

// Correct variable
let correctValue = "";

// changing time so accessing it
var time = document.getElementById("time");
// Accessing submit button
let submitBtn = document.getElementById("submit");

// Accessing ans section & spans
let ansSec = document.getElementById("ans");
let selectedAns = document.getElementById("selected-answer");

// colors
colors = ["black", "orange", "red"];
// Event listener to start button
btnStart.addEventListener("click", function () {
  //   Time show
  remTime.style.display = "block";
  // Answer hide
  ansSec.style.display = "none";
  // timer start
  var timeleft = 30;
  var downloadTimer = setInterval(function () {
    if (timeleft <= 0) {
      clearInterval(downloadTimer);
      time.innerHTML = "Finished";

      // enabling button start
      btnStart.disabled = false;
    } else {
      // disabling button start
      btnStart.disabled = true;

      time.innerHTML = timeleft;

      //   time value
      if (time.innerHTML > 20) {
        time.style.color = colors[0];
      } else if (time.innerHTML > 10) {
        time.style.color = colors[1];
      } else {
        time.style.color = colors[2];
      }

      //   submit button
      submitBtn.addEventListener("click", function () {
        // Selected Value
        var selValue = undefined;
        // getting the value of checked radio
        var checkedButton = getCheckedRadio(
          document.getElementsByName("answers")
        );
        if (checkedButton) {
          selValue = checkedButton.value;
          selValue = selValue.slice(0, -4);
          console.log("The value is " + selValue);

          // Inserting answers to html
          ansSec.style.display = "block";
          if (selValue == correctValue) {
            selectedAns.innerHTML = "Correct Answer :)";
          } else {
            selectedAns.innerHTML = "Sorry!!! Wronge Answer";
            // alert("Sorry!!! Incorrect Answer");
          }
        }

        // --------------------
        // Enabling start button
        btnStart.disabled = false;
        clearInterval(downloadTimer);
        console.log("clicked!!!");
        // correct value
        console.log("corerct: ", correctValue);
        // deleting radio buttons
        while (wrapper.firstChild) {
          wrapper.removeChild(wrapper.firstChild);
        }
      });
    }
    timeleft -= 1;
  }, 1000);

  /* ****************This javascript is for clock only***************/

  // -------------------------------------------------------------------
  // -------------------------------------------------------------------
  // -------------------------------------------------------------------

  /* ****************This javascript is for Questions***************/

  let questionsAnswers = {
    //   Question 1
    "The working principle of a washing machine is?": [
      "Reverse osmosis",
      "Diffusion",
      ["Centrifugation", "yes"],
      "Dialysis",
    ],
    // Question 2
    "The purest form of iron is?": [
      ["wrought iron", "yes"],
      "steel",
      "pig iron",
      "Nickel steel",
    ],
    // Question 3
    "Ctrl, Shift and Alt are called .......... keys.": [
      ["Modifier Keys", "yes"],
      "Function",
      "Alphanumeric",
      "Adjustment",
    ],
    // Question 4
    "MS-Word is an example of?": [
      "Operating System",
      "Input Device",
      ["Application Software", "yes"],
      "NTS Test",
    ],
    // Question 5
    "A computer cannot 'boot' if it does not have the _____.": [
      ["Operating System", "yes"],
      "Compiler",
      "Loader",
      "Assembler",
    ],
  };

  //   ************ Generating Random Questions and Answers ******************
  //   All keys[0] with values[1]
  let randomQuestion = Math.floor(
    Math.random() * Object.entries(questionsAnswers).length
  );
  questions = Object.entries(questionsAnswers)[randomQuestion];
  //   console.log("questions length: ", randomQuestion);

  myArray = questions[1];
  console.log("Answers: ", myArray);

  //   Inserting question into question area
  qArea.innerHTML = questions[0];

  //   Stack code
  //   var myArray = ["Asian", "Thai", "Korean", "Chinese", "Mexican"];

  var wrapper = document.getElementsByClassName("answers")[0];

  //   for radio id
  var id = 1;

  //   var elementsToInsert = [];

  while (myArray.length) {
    var randomIndex = Math.floor(Math.random() * myArray.length);

    var value = myArray.splice(randomIndex, 1)[0];
    var radio = document.createElement("input");
    var label = document.createElement("label");

    radio.type = "radio";
    radio.name = "answers";
    radio.value = value;
    radio.id = "radio" + id;
    id++;
    radio.checked = true;

    label.setAttribute("for", value);

    // Separating yes from correct value
    console.log("value: ", value);
    if (value.length == 2) {
      //   console.log("inside 2 value: ", value[0]);
      label.innerHTML = value[0];
      correctValue = value[0];
      //   console.log("correct value: ", correctValue);
    } else {
      label.innerHTML = value;
    }

    wrapper.appendChild(radio);
    // console.log("label: ", label);

    wrapper.appendChild(label);

    wrapper.appendChild(document.createElement("br"));
    wrapper.appendChild(document.createElement("br"));
  }

  //   Enabling submit button
  submitBtn.disabled = false;
});

// checking which radio button is checked
function getCheckedRadio(radio_group) {
  for (var i = 0; i < radio_group.length; i++) {
    var button = radio_group[i];
    if (button.checked) {
      return button;
    }
  }
  return undefined;
}
