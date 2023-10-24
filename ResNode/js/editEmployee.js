window.onload = init;

function init() {
  if (localStorage.getItem("token")) {
    token = localStorage.getItem("token");
    headers = {
      Authorization: "Bearer " + localStorage.getItem("token"),
    };
    document
      .querySelector(".btn-primary")
      .addEventListener("click", searchEmployee);
  } else {
    window.location.href = "index.html";
  }
}

function searchEmployee() {
  var searchTerm = document.getElementById("input-name").value.toUpperCase();
  axios
    .get("http://localhost:3000/employee/search", {
      params: {
        employee_name: searchTerm,
      },
      headers: headers,
    })
    .then(function (res) {
      console.log(res);
      if (res.data.code === 200) {
        displayEmployee(res.data.message);
      } else {
        alert("Employee not found");
        window.location.reload();
      }
    })
    .catch(function (err) {
      console.log(err);
    });
}

function displayEmployee(employees) {
  var selection = document.querySelector(".selection-table");
  selection.innerHTML = "<h3>Results:</h3>";
  for (var i = 0; i < employees.length; i++) {
    var employee = employees[i];
    selection.innerHTML += `
            <tr><td>Employee Name:</td> <td><input type='text' id='input_name' value='${employee.employee_name}'></td></tr>
            <tr><td>Employee Last Name:</td><td><input type='text' id='input_lastname' value='${employee.employee_lastname}'></td></tr>
            <tr><td>Employee Phone:</td><td><input type='text' id='input_phone' value='${employee.employee_phone}'></td></tr>
            <tr><td>Employee Email:</td><td><input type='text' id='input_mail' value='${employee.employee_mail}'></td></tr>
            <tr><td>Employee Address: </td><td><input type='text' id='input_dir' value='${employee.employee_dir}'></td></tr>
            <tr><td colspan='2'><button class='btn btn-warning' onclick="editEmployee(${employee.employee_id})">Edit</button></td></tr>
            <br><hr>
        `;
  }
}

function editEmployee(id) {
  var employee__name = document.getElementById("input_name").value;
  var employee__lastname = document.getElementById("input_lastname").value;
  var employee__phone = document.getElementById("input_phone").value;
  var employee__mail = document.getElementById("input_mail").value;
  var employee__dir = document.getElementById("input_dir").value;

  axios
    .put(
      `http://localhost:3000/employee/edit/${id}`,
      {
        employee_name: employee__name,
        employee_lastname: employee__lastname,
        employee_phone: employee__phone,
        employee_mail: employee__mail,
        employee_dir: employee__dir,
      },
      {
        headers: headers,
      }
    )
    .then(function (res) {
      alert("Employee edited succesfully.");
      window.location.reload();
    })
    .catch(function (err) {
      alert("An error occurred while editing.");
    });
}
