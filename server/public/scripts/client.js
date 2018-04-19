console.log('client.js has been loaded')

$(document).ready(onReady);

function onReady() {
    console.log('jQuery has been loaded');
    $.ajax({
        method: 'GET',
        url: '/records'
    })
    .then(function (response){
        console.log('my response', response)
        response.forEach(function (record) {
            $('#recordList').append(`<tr>
            <td>${record.title}</td>
            <td>${record.artist}</td>
            <td>${record.year}</td>
            <td>${record.cost}</td>
            </tr>`);
        });
    })

}