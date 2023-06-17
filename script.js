

// Prompt the user to input their marks
let marks = prompt("INPUT YOUR MARKS");

// Variable to store the grade
let yourGrade;

// Check if marks are greater than 80
if (marks > 80) {
    yourGrade = "A";
}
// Check if marks are exactly 100
else if (marks === 100) {
    yourGrade = "A";
}

// Check if marks are between 60 and 79 (inclusive)
if (marks >= 60 && marks <= 79) {
    yourGrade = "B";
}

// Check if marks are between 50 and 59 (inclusive)
if (marks >= 50 && marks <= 59) {
    yourGrade = "C";
}

// Check if marks are between 40 and 49 (inclusive)
if (marks >= 40 && marks <= 49) {
    yourGrade = "D";
}

// Check if marks are less than or equal to 39
if (marks <= 39) {
    yourGrade = "E";
}

// Output the calculated grade
console.log("THIS IS YOUR GRADE", yourGrade);
