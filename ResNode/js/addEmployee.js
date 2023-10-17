window.onload = init;
var headers = {};
var url = 'http://localhost:3000';

function init(){
    if (localStorage.getItem("token")) {
        token = localStorage.getItem("token")
        headers = {
            headers: {
                'Authorization': "bearer " + localStorage.getItem("token")
            }
        }
        document.querySelector(".btn-primary").addEventListener('click', addEmployee);
    }
    else {
        window.location.href = 'index.html';
    }
}

function addEmployee(){
    var employee__name = document.getElementById('input-name').value.toUpperCase();
    var employee__lastname = document.getElementById('input-lastname').value.toUpperCase();
    var employee__phone = document.getElementById('input-phone').value;
    var employee__mail = document.getElementById('input-mail').value;
    var employee__dir = document.getElementById('input-dir').value.toUpperCase();

    axios({
        method: 'post',
        url: 'http://localhost:3000/employee/add',
        data: {
            employee_name: employee__name,
            employee_lastname: employee__lastname,
            employee_phone: employee__phone,
            employee_mail: employee__mail,
            employee_dir: employee__dir
        }
    }).then(function (res) {
        if(res.data.code === 201){
            alert('Employee added succesfully.');
        }
        else {
            alert('Error while adding employee.');
        }
    }).catch(function (err){
        console.log(err);
    })
}