// access all field
////////////////////////////////////////////////////////
const subjectNameField = document.getElementById("subject-name-field");
const subjectMarkField = document.getElementById("subject-mark-field");
const displayResultContainer = document.getElementById(
  "display-result-container"
);
const displayInfoContainer = document.getElementById("display-info-container");
const getResultButton = document.getElementById("get-result-btn");
const savedButton = document.getElementById("saved-button");
////////////////////////////////////////////////////////

// single subject gpa finder
const getResult = (Mark) => {
  let myResult = 0;
  if (Mark <= 100 && Mark >= 80) {
    myResult = 4.0;
    return myResult;
  } else if (Mark <= 79 && Mark >= 70) {
    myResult = 3.75;
    return myResult;
  } else if (Mark <= 69 && Mark >= 60) {
    myResult = 3.5;
    return myResult;
  } else if (Mark <= 59 && Mark >= 50) {
    myResult = 3.0;
    return myResult;
  } else if (Mark <= 49 && Mark >= 36) {
    myResult = 2.0;
    return myResult;
  } else if (Mark <= 35 && Mark >= 0) {
    myResult = 0.0;
    return myResult;
  }
};

// getGpa function
const getCgpa = (AllSubjectResult) => {
  let resultArr = [];
  let cgpaSum = 0;

  for (singleSubjectResult in AllSubjectResult) {
    const singleResult = AllSubjectResult[singleSubjectResult];
    resultArr.push(singleResult);
  }

  resultArr.forEach((singleSubjectResult) => {
    let singleSubjectGCgpa;
  });

  const totalSubject = Object.keys(AllSubjectResult).length;
  const myCgpa = parseFloat(cgpaSum / totalSubject);
  const myCgpaToToDecimal = myCgpa.toFixed(2);
  return myCgpaToToDecimal;
};

let inputObject = {};
/////////////////////
const setValueInObject = () => {
  const subjectName = subjectNameField.value;
  const subjectMark = subjectMarkField.value;
  inputObject[subjectName] = subjectMark * 1;
};

const displayInfo = () => {
  const subjectName = subjectNameField.value;
  const subjectMark = subjectMarkField.value;
  if (subjectName === "" || subjectMark === "") {
    alert("Please input your subject name and mark");
    return;
  }
  if (subjectMark > 100) {
    alert("your subject mark can not be bigger then 100");
    return;
  }
  getResultButton.removeAttribute("disabled");
  subjectNameField.value = "";
  subjectMarkField.value = "";
  const ul = document.createElement("ul");
  ul.style = `text-align: center; font-size: 2rem`;
  ul.innerHTML = `
  <p>Subject Name: ${subjectName} &nbsp;&nbsp;&nbsp;&nbsp;and Mark: ${subjectMark}</p>
  `;
  displayInfoContainer.appendChild(ul);

  if (displayInfoContainer === true) {
    document.body.style.backgroundColor = "red";
  }
};

const log = () => {
  console.log(inputObject);
};

const subjectClearBtn = () => {
  displayResultContainer.innerHTML = ``;
  displayInfoContainer.innerHTML = ``;
};

const result = () => {
  const result = getCgpa(inputObject);
  const div = document.createElement("div");
  div.classList = `text-center text-4xl font-semibold`;
  div.innerHTML = `
  <h1 class = "mt-4">Congratulations!!!</h1>
  <h2>your CGPA is ${result}</h2>
  <button class="btn btn-primary" onclick = 'subjectClearBtn()'>Clear All Subject</button>
  `;
  displayResultContainer.innerHTML = ``;
  displayResultContainer.appendChild(div);
};
