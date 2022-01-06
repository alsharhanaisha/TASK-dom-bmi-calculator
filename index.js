function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻
  height = height / 100;
  result = weight / (height * height);
  alert(result);

  if (result < 18.5) {
    alert("YOU ARE UNDER WEIGHT!!!!");
  } else if (result >= 18.5 && result <= 24.9) {
    alert("Healthy Weight");
  } else if (result >= 25.0 && result <= 29.9) {
    alert("Overwight");
  } else if (result >= 30.0) {
    alert("OBESSSSEEEEE!!!!");
  }
}
