
function generateCards(employeeData) {
    return `
${employeeData
  .filter(({office}) => office)
  .map(({name, id, email, office}) => {
    return `
    <div class="team col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
    <div class="card employee-card mx-2 w-100">
      <div class="card-header">
        <h2 class="card-title>">${name}</h2>
        <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i> Manager</h3>
      </div>
      <div class="card-body">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Id: ${email}</li>
          <li class="list-group-item">
          Email: <a href="mailto:${email}">${email}</a></li>
          <li class="list-group-item">Office Number: ${office}</li>
          </ul>
        </div>
        </div>
        </div>
`;
})
.join('')
}

${employeeData
    .filter(({github}) => github)
    .map(({name, id, email, github}) => {
        return `
    <div class="team col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
    <div class="card employee-card mx-2 w-100">
      <div class="card-header">
      <h2 class="card-title>">${name}</h2>
      <h3 class="card-title"><i class="fas fa-solid fa-glasses"></i> Engineer</h3>
    </div>
    <div class="card-body">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Id: ${id}</li>
        <li class="list-group-item">
        Email: <a href="mailto:${email}">${email}</a>
        </li>
        <li class="list-group-item">GitHub: ${github}</li>
        </ul>
        </div>
      </div>
      </div>
      `;
      })
      .join('')
    }

${employeeData
  .filter(({school}) => school)
  .map(({name, id, email, school}) => {
    return`

    <div class="team col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
    <div class="card employee-card mx-2 w-100">
      <div class="card-header">
        <h2 class="card-title>">${name}</h2>
        <h3 class="card-title"><i class="fas fa-solid fa-graduation-cap"></i> Intern</h3>
      </div>
   <div class="card-body">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Id: ${id}</li>
      <li class="list-group-item">
        Email: <a href="mailto:${email}">${email}</a>
      </li>
      <li class="list-group-item">School: ${school}</li>
      </ul>
      </div>
  </div>
  </div>
  `;
})
.join('')
}
`;
};


module.exports = employeeData => {
    const {manager, engineer, intern} = employeeData;
    return`
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>My Team</title>
  <link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"
  />
  <link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
  rel="stylesheet"
  integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
  crossorigin="anonymous"
  />
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 jumbotron mb-3 team-heading">
        <h1 class="text-center">My Team</h1>
      </div>
    </div>
  </div>
  <div class="container">
  <div class="row">
    ${generateCards(employeeData)}
    </div>
  </div>
</body>
</html>
`;
}