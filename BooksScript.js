$(document).ready(function()
{

    $('#showBooks').click(function (mittEvent){
        mittEvent.preventDefault();

        $.get('books.xml', function(minaData)
        {
            $(minaData).find('book').each(function()
            {
                var $book = $(this);

                var html = '<tr><td class = "genre">';
                html += $book.find('genre').text();
                html += '</td><td class = "title">';
                html += $book.find('title').text();
                html += '</td><td class = "author">';
                html += $book.find('author').text();
                html += '</td><td class = "price">';
                html += $book.find('price').text();
                html += '</td><td><button id = "';
                html += $book.attr('id');
                html += '">K&ouml;p</button></td></tr>';

                $('#listOfBooks').append($(html));
            });
        });

        $('#showBooks').prop("disabled", true);
    });

        var totalSum = 0;

        $('#listOfBooks').on('click', 'button', function(mittEvent2)
        {
            var bookId = mittEvent2.target.id;
            var bookTitle = $(this).parent().siblings('.title').text();
            var bookPrice = $(this).parent().siblings('.price').text();

            var cart = '<tr><td>' + bookTitle + '</td><td>' + bookPrice + '</td></tr>';
            $('#cart').append($(cart));

        })


});