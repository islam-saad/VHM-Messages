$(document).ready(function () {
    // هتعرض ال model  بتاعك 
    $("#exampleModal").modal('show');
});

var data = [
    {
        "ATTRIBUTEID": "CONTENT",
        "ATTRIBUTENAME": "Rate the Content",
        "POSITION": 1
    },
    {
        "ATTRIBUTEID": "SPEAKER",
        "ATTRIBUTENAME": "Rate the Speaker",
        "POSITION": 2
    },

];

for (i = 0; i < data.length; i++) {
    var container = document.getElementById("container");

    var row = document.createElement('div');
    row.className = `form-row ${data[i].ATTRIBUTEID} col-md-12 text-center  mr-2`;

    var commonLabel = document.createElement('label');
    commonLabel.className = "commonLable col-lg-12";
    commonLabel.innerHTML = data[i].ATTRIBUTENAME;


    var form_group = document.createElement('div');
    form_group.className = "form-group col-lg-12 d-flex flex-row-reverse justify-content-center";

    var rate_text = document.createElement('h3');
    rate_text.className = "rate-text";
    rate_text.innerHTML = "Thanks For Rating";

    for (j = 5; j > 0; j--) {
        var star = document.createElement("input");
        var label = document.createElement("label");
        star.type = "radio";
        star.id = data[i].ATTRIBUTEID + j;
        star.name = data[i].ATTRIBUTEID;
        star.className = "star star-" + j;
        star.value = j;
        label.className = "star star-" + j;
        label.htmlFor = data[i].ATTRIBUTEID + j;
        form_group.append(star, label);
    }

    row.append(commonLabel, form_group);
    container.appendChild(row);

}

$('input[name ="CONTENT"]').on('click', function (e) {
    // alert($('input[name ="CONTENT"]:checked').val())


    $('.CONTENT').remove();
    container.append(rate_text);
});

$('input[name ="SPEAKER"]').on('click', function (e) {
    // alert($('input[name ="SPEAKER"]:checked').val())
    $('.SPEAKER').remove();
    container.append(rate_text);
});
$.post("https://secure.hyperfair.com/global/VHM/registrationservice/",
    {
        'secret': 'q94Hg1743gMnaczyxg87r32fg943', 'email': 'attendee@hyperfair.com',
        'password': 'myPassword', 'firstName': 'AttendeeFirstName', 'lastName': 'AttendeeLastName',
        'gender': 'female', 'workplace': 'myWorkPlace', 'specialty': 'mySpecialty',
        'mobilePhone': '+123456789', 'SHCLN': '1234567', '_DEBUG_': 'true'
    },
    function (data, status) {
        alert("Data: " + data + "\nStatus: " + status);
    });