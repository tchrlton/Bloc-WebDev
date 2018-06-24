let grade = '94';

function getScore(grade){if (grade >= 90){
  return ("A");
} else if (grade >= 80){
  return ("B");
} else if (grade >= 70){
  return ("C");
} else if (grade >= 60){
  return ("D");
} else {
  return ("F");
}}

console.log(getScore(grade));

if (getScore(grade) == "F"){
  console.log("Fail");
} else {
  console.log("Pass");
}
