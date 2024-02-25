const marks=89;
let grade;
if (marks>=90){
    grade="A";
}
else if (marks>=70 && marks<90){
    grade="B";
}
else if (marks>=50 && marks<70){
    grade="C";
}
else if (marks<50){
    grade="F";
}
console.log("Your grade according to marks is "+grade);