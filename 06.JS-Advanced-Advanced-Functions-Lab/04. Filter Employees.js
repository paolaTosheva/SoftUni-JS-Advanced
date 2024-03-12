function filterEmployees(data, criteria) {
  const employees = JSON.parse(data);

  function findEmployees(employee) {
    if (criteria === "all") {
      return true;
    }
    const [key, value] = criteria.split("-");
    return employee[key] === value;
  }
  employees.filter(findEmployees).forEach((employee, index) => {
    console.log(
      `${index}. ${employee.first_name} ${employee.last_name} - ${employee.email}`
    );
  });
}
filterEmployees(
  `[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
  "last_name-Johnson"
);
// filterEmployees();
