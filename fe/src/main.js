var uri = 'http://192.168.99.100:3000';

$( document ).ready(function() {
    $.ajax({
        url: uri + '/books',
        type: 'GET',
        crossDomain: true,
        data: {
            format: 'json'
        },
        success: function(data) {
            console.log(data);
            var content = '';
            for (var i = 0, len = data.length; i < len; i++) {
                console.log(data[i]);
                content += '<div class="book">' +
                    '<div class="book__name">' + data[i].name + '</div>' +
                    '<div class="book__author">Created by ' + data[i].author + '</div>' +
                    '<div class="book__date">Release date ' + data[i].publishDate + '</div>' +
                    '<div>Amount of pages ' + data[i].pageNumber + '</div>' +
                    '</div>';
            }
            $( "#main" ).append( content);
        },
        error: function(error) {
            console.error(error);
        }
    });
});