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
  if (Mark >= 80 && Mark <= 100) {
    myResult = 4.0;
    return myResult;
  } else if (Mark >= 75 && Mark <= 79) {
    myResult = 3.75;
    return myResult;
  } else if (Mark >= 70 && Mark <= 74) {
    myResult = 3.5;
    return myResult;
  } else if (Mark >= 65 && Mark <= 69) {
    myResult = 3.25;
    return myResult;
  } else if (Mark >= 60 && Mark <= 64) {
    myResult = 3.0;
    return myResult;
  } else if (Mark >= 55 && Mark <= 59) {
    myResult = 2.75;
    return myResult;
  } else if (Mark >= 50 && Mark <= 54) {
    myResult = 2.5;
    return myResult;
  } else if (Mark >= 45 && Mark <= 49) {
    myResult = 2.25;
    return myResult;
  } else if (Mark >= 40 && Mark <= 44) {
    myResult = 2.0;
    return myResult;
  } else if (Mark >= 0 && Mark <= 39) {
    myResult = 0.0;
    return myResult;
  }
};

//GET Grade
const getGrade = (cgpaResult) => {
  let grade = "";
  if (cgpaResult >= 4.0) {
    grade = "A+";
    return grade;
  } else if (cgpaResult >= 3.75) {
    grade = "A";
    return grade;
  } else if (cgpaResult >= 3.5) {
    grade = "A-";
    return grade;
  } else if (cgpaResult >= 3.25) {
    grade = "B+";
    return grade;
  } else if (cgpaResult >= 3.0) {
    grade = "B";
    return grade;
  } else if (cgpaResult >= 2.75) {
    grade = "B-";
    return grade;
  } else if (cgpaResult >= 2.5) {
    grade = "C+";
    return grade;
  } else if (cgpaResult >= 2.25) {
    grade = "C";
    return grade;
  } else if (cgpaResult >= 2.0) {
    grade = "D";
    return grade;
  } else if (cgpaResult >= 0.0) {
    grade = "F";
    return grade;
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
    // let singleSubjectGCgpa;
    let singleSubjectCgpa = getResult(singleSubjectResult);
    cgpaSum += singleSubjectCgpa;
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
  const grade = getGrade(result);
  const div = document.createElement("div");
  div.classList = `text-center text-4xl font-semibold`;
  if (grade === "F") {
    div.innerHTML = `
  <h1 class = "mt-4">You are Fail!</h1>
  <h2>your grade is ${grade}</h2>
  <button class="btn btn-primary mt-4" onclick = 'subjectClearBtn()'>Clear All</button>
  `;
    displayResultContainer.innerHTML = ``;
    displayResultContainer.appendChild(div);
    return;
  }
  div.innerHTML = `
  <h1 class = "mt-4">Congratulations!!!</h1>
  <h2>your CGPA is ${result}</h2>
  <h2>you get ${grade}</h2>
  <button class="btn btn-primary mt-4" onclick = 'subjectClearBtn()'>Clear All</button>
  `;
  displayResultContainer.innerHTML = ``;
  displayResultContainer.appendChild(div);
};
