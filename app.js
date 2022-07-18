console.log("Let's get this party started!");

$('#searchSubmit').on('click', function(e) {
    e.preventDefault();
    const searchTerm = $('#gifSearch').val();
    giphyRequest(searchTerm);
});

async function giphyRequest(searchTerm) {
    const giphyRes = await axios.get('http://api.giphy.com/v1/gifs/search', { params: {
        api_key: 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym',
        q: searchTerm,
        limit: 1
    }});
    const newImg = document.createElement('img');
    newImg.setAttribute('src', giphyRes.data.data[0].images.original.url);
    $('#results').append(newImg);
}

$('#remove').on('click', function(e) {
    e.preventDefault();
    $('#results').html('');
});