let target = null;

(function() {
    let allLinks = document.getElementsByTagName('a');
    allLinks = Array.from(allLinks);

    let specLinks = [];
    
    allLinks.forEach(element => {
        if (element.href.includes('teacher')) {
            specLinks.push(element);
        }
    });  

    specLinks.forEach(element => {
        element.addEventListener('click', (e) => {
            target = e.originalTarget.outerText;
            localStorage.setItem('targetTeacher', target);
        })
    })
})()
