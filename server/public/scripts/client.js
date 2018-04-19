console.log('client.js has been loaded')

$(document).ready(onReady);

function onReady() {
    console.log('jQuery has been loaded');
    $('#addNewSong').on('click', addNew)
    getAllSongs();
    addNew();
}

function getAllSongs() {
    $.ajax({
        method: 'GET',
        url: '/records'
    })
        .then(function (response) {
            console.log('my response', response)
            $('#recordList').empty();
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
function addNew() {
    const newSong = {
        title: $('#newSongTitle').val(),
        artist: $('#newSongArtist').val(),
        year: $('#newSongYear').val(),
        cost: $('#newSongCost').val()
    };
    console.log('New song object', newSong);
    $.ajax({
        method: 'POST',
        url: '/add-record',
        data: newSong //the object
    })
        .then(function (response) {
            console.log('my repose: ', response);
            getAllSongs();
        });
}


