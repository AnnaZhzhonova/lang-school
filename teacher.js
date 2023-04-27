let target = null;

(function() {
    target = localStorage.getItem('targetTeacher');

    if (target) {
        findTeacher();
    }

})()


function findTeacher() {
    let allTeachers = document.getElementsByClassName('teacher');
    allTeachers = Array.from(allTeachers);

    allTeachers.forEach(element => {
        if (element.textContent.includes(target)) {
            let teacherSpec = element.classList[1];

            showTeacher(teacherSpec, element)
        }
    })
}

function showTeacher(specialization, elem) {

    let allSlides = document.getElementsByClassName(`carousel-item-${specialization}`);

    Array.from(allSlides).forEach((element) => {
        if (element.contains(elem)) {
            element.classList.add('active');
        } 
        else if (!element.contains(elem) && element.classList.contains('active')) {
            element.classList.remove('active');
        }
    })

    localStorage.removeItem('targetTeacher');
    target = null;
}