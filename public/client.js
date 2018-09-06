console.log('js');

$(document).ready(readyNow);

let monthlyTotal = 0;

$(document).on('click', '.delete-button', function () {
    $(this).parent().parent().remove();

    console.log(this);

})

function readyNow() {
    $('#submitButton').on('click', handleClick);

    console.log('button working');
}
    //create variables with input values 
function handleClick() {
    $('#totalMonthly').empty()
    let firstName = $('#firstNameInput').val()
    let lastName = $('#lastNameInput').val()
    let identity = $('#identityInput').val()
    let title = $('#titleInput').val()
    let annualSalary = $('#annualSalaryInput').val()

    



    //append new variable which are input values to DOM


    $('#employeeTableBody').append(`
    <tr>
        <td>` + firstName + `</td>
        <td>` + lastName + `</td>
        <td>` + identity + `</td>
        <td>` + title + `</td>
        <td>` + annualSalary + `</td>
        <td> <button class="delete-button">Delete</button> </td>
    </tr>
`);

    //call monthly total function and append to DOM
    calculateMonthly();
    $('#totalMonthly').append('<footer>' + monthlyTotal + '</footer')

    
    //clear input fields
    $('#firstNameInput').val('')
    $('#lastNameInput').val('')
    $('#identityInput').val('')
    $('#titleInput').val('')
    $('#annualSalaryInput').val('')

}
    //caluclate monthly total
function calculateMonthly() {
    let annualSalary = $('#annualSalaryInput').val()
    monthlyTotal = monthlyTotal + (annualSalary / 12);

    if (
        monthlyTotal > 20000) {
        $('#totalMonthly').css('background-color', 'red');
    }
}








console.log('jq workin');