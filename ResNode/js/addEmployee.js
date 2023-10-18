window.onload = init;
var headers = {};
var url = 'http://localhost:3000';

function init() {
    if (localStorage.getItem("token")) {
        token = localStorage.getItem("token")
        headers = {
            'Authorization': "Bearer " + localStorage.getItem("token")
        }
        document.querySelector(".btn-primary").addEventListener('click', addEmployee);
    } else {
        window.location.href = 'index.html';
    }
}

function addEmployee() {
    var employee__name = document.getElementById('input-name').value.toUpperCase();
    var employee__lastname = document.getElementById('input-lastname').value.toUpperCase();
    var employee__phone = document.getElementById('input-phone').value;
    var employee__mail = document.getElementById('input-mail').value;
    var employee__dir = document.getElementById('input-dir').value.toUpperCase();

    axios.post('http://localhost:3000/employee/add', {
        employee_name: employee__name,
        employee_lastname: employee__lastname,
        employee_phone: employee__phone,
        employee_mail: employee__mail,
        employee_dir: employee__dir
    }, {
        headers: headers
    })
    .then(function (res) {
        if (res.data.code === 201) {
            alert('Employee added successfully.');
            Window.location.href = 'dashboard.html';
        } else if (res.data.code === 400) {
            alert('Error while adding employee.');
        } else {
            alert("Please fill all the fields.")
        }
    })
    .catch(function (err) {
        console.log(err);
    });
}
