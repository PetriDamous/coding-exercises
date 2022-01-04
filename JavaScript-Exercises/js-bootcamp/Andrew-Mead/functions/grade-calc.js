// students score, total possible score
// 15/20 -> You got a C (75%)!
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59

function gradeCalc(score, totalScore) {
    
    const percent = Math.round((score / totalScore) * 100); 
    let letterGrade;   

    if (percent >= 90 && percent <= 100) {
        letterGrade = 'A';
    } else if (percent >= 80 && percent <= 89) {
        letterGrade = 'B';    
    } else if (percent >= 70 && percent <= 79) {
        letterGrade = 'C';    
    } else if (percent >= 60 && percent <= 69) {
        letterGrade = 'D';    
    } else if (percent >= 0 && percent <= 59) {
        letterGrade = 'F';    
    } else {
        return 'Score not possible';
    }

    return `You got a ${letterGrade} (${percent}%)`
}

console.log(gradeCalc(92, 100));

console.log(gradeCalc(8, 10));

console.log(gradeCalc(15, 20));

console.log(gradeCalc(12, 18));

console.log(gradeCalc(5, 10));

console.log(gradeCalc(300, 10));



