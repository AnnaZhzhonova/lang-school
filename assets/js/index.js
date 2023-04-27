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

            if (e.target.textContent) {
                target = e.target.textContent
            }
            else if (e.originalTarget?.outerText) {
                target = e.originalTarget.outerText;
            } 
            else if (e.srcElement.innerText) {
                target = e.srcElement.innerText
            }

            localStorage.setItem('targetTeacher', target);
        })
    })
})()
