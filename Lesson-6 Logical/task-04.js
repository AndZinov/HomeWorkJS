// Переписываю на while

/*let i = 0;
while ( i < 3 ){
    let newStudent = prompt('Enter name new student!');
    if (newStudent){
        newStudent = newStudent.trim();
        alert(`You are welcome ${newStudent}!`)
        i += 3;
    } else {
        i ++;
    }
} */

// Переписываю на do ... while

let i = 0;
do { 
    let newStudent = prompt('Enter name new student!');
if (newStudent){
    newStudent = newStudent.trim();
    alert(`You are welcome ${newStudent}!`)
    i += 3;
} else {
    i ++;
}
} while (i < 3);