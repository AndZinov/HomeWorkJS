const student = {
    fullName: 'Максим',
    experienceInMonths: 12,
    stack: ['HTML', 'CSS', 'JavaScript', 'React'],
  }

const giveJobToStudent = (student, jobName) => {
    const resultJobToStudent = {
        ...student,
        job: jobName,
    }
    alert(`“Поздравляем! У студента ${student.fullName} появилась новая работа! Теперь он ${resultJobToStudent.job}”`)
    return resultJobToStudent
}

const updatedStudent = giveJobToStudent(student, 'веб-разработчик');
console.log(updatedStudent);