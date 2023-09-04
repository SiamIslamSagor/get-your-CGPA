let inputObject = {};
inputObject.subjectName = "83" * 1;
inputObject.sbjectName = "89" * 1;
inputObject.subjeName = "56" * 1;
inputObject.bjectName = "78" * 1;
inputObject.subctName = "45" * 1;
// console.log(inputObject);
//////////////////////

/* // single subject gpa finder
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
}; */
/* 
// getGpa function
const getGpa = (AllSubjectResult) => {
  let resultArr = [];
  let gpaSum = 0;

  for (singleSubjectResult in AllSubjectResult) {
    const singleResult = AllSubjectResult[singleSubjectResult];
    resultArr.push(singleResult);
  }

  resultArr.forEach((singleSubjectResult) => {
    let singleSubjectGpa = getResult(singleSubjectResult);
    gpaSum += singleSubjectGpa;
  });

  const totalSubject = Object.keys(AllSubjectResult).length;
  const myGpa = gpaSum / totalSubject;
  const myGpaToToDecimal = myGpa.toFixed(2) * 1;
  console.log(myGpaToToDecimal);
  return myGpaToToDecimal;
}; */

//////////////////////
// myAllSubjectResult
const myAllSubjectResult = {
  bangla: 87,
  english: 56,
  math: 94,
  biology: 45,
  physics: 82,
};

// myGpa
// const myGpa = getCgpa(myAllSubjectResult);
// console.log("your GPA is:", myGpa);

/* const ck = {};
// console.log(ck);
if (ck) {
  // console.log("tr");
} else {
  // console.log("fl");
} */

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

console.log(getGrade(3.0));
