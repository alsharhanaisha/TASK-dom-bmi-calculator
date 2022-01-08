function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻

  // Calculating BMI & Defining BMI Ranges:
  let bmi = weight / (height / 100) ** 2;
  let bmiResult;
  if (bmi < 18.5) {
    bmiResult = "Underweight";
  } else {
    if (
      (age >= 19 && age <= 24 && bmi >= 19 && bmi <= 24) ||
      (age >= 25 && age <= 34 && bmi >= 20 && bmi <= 25) ||
      (age >= 35 && age <= 44 && bmi >= 21 && bmi <= 26) ||
      (age >= 45 && age <= 54 && bmi >= 22 && bmi <= 27) ||
      (age >= 55 && age <= 64 && bmi >= 23 && bmi <= 28) ||
      (age >= 65 && bmi >= 24 && bmi <= 29)
    ) {
      bmiResult = "Healthy Weight";
    } else if (bmi >= 25 && bmi <= 29.9) {
      bmiResult = "Overweight";
    } else {
      bmiResult = "Obesity";
    }
  }

  // Male vs Female Result:
  let gender;
  if (male) {
    gender = "Male";
  } else {
    gender = "Female";
  }

  // Posting the Result:
  alert(`
  Based on the following data you entered:
  Age: ${age}
  Weight: ${weight}
  Height: ${height}
  Gender: ${gender}
  
  Your Body Mass Index is:
  ${bmi}
  Which means, you are in the ${bmiResult} range.`);
}
