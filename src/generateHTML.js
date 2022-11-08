function makeCard(employeeArr) {
    let cardArr = [];
    for(i=0; i < employeeArr.length; i++) {
        let answer;
        if(employeeArr[i].getRole() === 'Manager') {
            answer = 'Office Number :' + employeeArr[i].getOffice();
        } else if (employeeArr[i].getRole() === 'Engineer') {
            answer = 'Github: <a href="https://github.com/' + employeeArr[i].getGithub() + '">' + employeeArr[i].getGithub() + '</a>';
        } else if (employeeArr[i].getRole() === 'Intern') {
            answer = 'School: ' + employeeArr[i].getSchool();
        }
        let employeeCard =`
        <article class="card col-3 m-2">
        <div class="card-header background">
            <h2>${employeeArr[i].getName()}</h2>
            <h4>${employeeArr[i].getRole()}</h3>
        </div>
        <div class="card-body">
            <p>Employee ID: ${employeeArr[i].getId()}</p>
            <p>Email: <a href=mailto:"${employeeArr[i].getEmail()}">${employeeArr[i].getEmail()}</a></p>
            <p>${answer}</p>
        </div>
        </article>
        `
        cardArr.push(employeeCard);
    }
    return cardArr.join('');
};

function generateHTML(employeeArr) {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie-edge">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.1.3/css/bootstrap.min.css" integrity="sha512-GQGU0fMMi238uA+a/bdWJfpUGKUkBdgfFdgBm72SUQ6BeyWjoY/ton0tEjH+OSH9iP4Dfh+7HM0I9f5eR0L/4w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="./style.css"/>
</head>
<body>
    <header>
        <h1> ${employeeArr[0].name}'s Team</h1>
    </header>
    <main class="row justify-content-center">
            ${makeCard(employeeArr)}
        </main>
</body>
</html>
`
}

module.exports = generateHTML;