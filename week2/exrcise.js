///////////////Coding Challenge 1
// Data1
let markHighe =1.69;
let markWeight =78;
let bmiMark =  markWeight /(markHighe**2);

let johnHighe=1.95;
let jonWeighe=92;
let bmiJohn= jonWeighe/(johnHighe**2)
// Data2
console.log(bmiMark ,bmiJohn)
console.log(bmiMark >bmiJohn)
markHighe =95;
 markWeight =1.88;
 bmiMark =  markWeight /(markHighe**2);

 johnHighe=85;
 jonWeighe=1.76;
 bmiJohn= jonWeighe/(johnHighe**2)

  let markhigher =   console.log(bmiMark ,bmiJohn)



/////////////////// Coding Challenge 2
// Data1

const markweight = 95;
const jonweight = 85;
const markHeight = 1.88;
const jonHeight = 1.76;
const markBmi = markweight / (markHeight **2);
const jonBmi = jonweight / (jonHeight **2);
console.log(markBmi> jonBmi);
const markHigherBMI = markBmi > jonBmi;
console.log(markHigherBMI);
if (markHigherBMI) {
  console.log(`Mark's BMI (${markBmi}) is higher than John's (${jonBmi})!`);
} else {
  console.log(`John's (${jonBmi}) BMI is higher than Mark's (${markBmi})!`);
}
// Data2

markHighe =1.69;
 markWeight =78;
 bmiMark =  markWeight /(markHighe**2);

 johnHighe=1.95;
 jonWeighe=92;
 bmiJohn= jonWeighe/(johnHighe**2)

 if (bmiMark >bmiJohn) {
    console.log(`Mark's BMI (${bmiMark}) is higher than John's (${ bmiJohn})!`);
  } else {
    console.log(`John's (${ bmiJohn}) BMI is higher than Mark's (${bmiMark})!`);
  }
  //////////////////////////// Coding Challenge 3
  // Data
  let dolphinsAvg = (96 + 108 + 89) / 3;
  console.log(dolphinsAvg) 
let koalasAvg = (88 + 91 + 110) / 3;
console.log( koalasAvg) 
let minScore = 100;

if (dolphinsAvg > koalasAvg && minScore) {
  console.log("dolpni's are winners");
} else if (dolphinsAvg < koalasAvg && minScore) {
  console.log("Koalas are winners");
} else {
  console.log("Non");
}

 //bouns1
 const dolphinsAvg2 = (97 + 112 + 101) / 3
 const koalasAvg2 = (109 + 95 + 123) / 3
if (dolphinsAvg2 > koalasAvg2 && minScore) {
    console.log("dolpni's are winners");
  } else if (dolphinsAvg2 < koalasAvg2 && minScore) {
    console.log("Koalas are winners");
  } else {
    console.log("Non");
  }

  //bouns2
  const dolphinsAvg3 = (97 + 112 + 101) / 3
  const koalasAvg3 = (109 + 95 + 106) / 3
if (dolphinsAvg3 === koalasAvg3 && minScore >= 100)
console.log("draw")
