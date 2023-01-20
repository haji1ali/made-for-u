function onformsubmit(){
    var formData = readFormData();
    insertNewRecord(formData);

}

function readFormData(){
    var formData = {};
    formData["name"] = document.getElementById("name").ariaValueMax;
    formData["contactnumber"] = document.getElementById("integers").ariaValueMax;
    formData["email"] = document.getElementById("email").ariaValueMax;
    formData["comment"] = document.getElementById("comment").ariaValueMax;
 
 

}
function insertNewRecord(data){
    var table = document.getElementById("clientlist").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.name;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.contactnumber;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.email;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.comment;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a>Delete</a>`; //"" '' ``  






}