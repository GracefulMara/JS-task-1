const myName = "Grace Aronu";

const task1Score = 9;
const task2Score = 10;
let task3Score = 10;

var totalScore = task1Score + task2Score + task3Score;
var avgScore = totalScore / 3;

var grade;
if (avgScore >= 9) {
    grade = "A"
}
else if (avgScore >= 8 ) {
    grade = "B"
}
else if (avgScore >= 7 ) {
    grade = "C"
}
else if (avgScore >= 6 ) {
    grade = "D"
}
else {
    grade = "E"
};

console.log(grade)

grade = "A";
let feedbackMsg;
switch(grade) {
    case 'A':
        feedbackMsg = 'Excellent performance!';
        break;
    case 'B':
        feedbackMsg = 'Great job! Keep aiming high';
        break;
    case 'C':
        feedbackMsg = 'Good effort. Try to improve';
        break;
    case 'D':
        feedbackMsg = "You're close. Keep working at it. ";
        break;
    case 'E':
        feedbackMsg = "Don't give up. You can do better next time.";
        break;
    default:
        feedbackMsg = 'Invalid grade';
}

console.log(`
    Student Name: ${myName}
    Task-1 Score: ${task1Score}
    Task-2 Score: ${task2Score}
    Task-3 Score: ${task3Score}
    Total Score: ${totalScore}
    Average Score: ${avgScore.toFixed(2)}  
    Final Grade: ${grade}
    Comment: ${feedbackMsg}`
);


