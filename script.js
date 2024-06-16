document.getElementById("form-details").addEventListener('submit', function(event)
{
    event.preventDefault();
    var data = new FormData(event.target);
    fetch("https://formspree.io/f/xoqggnwo",{
        method: 'POST',
        body: data,
    }).then(response => {
        if(response.ok) {
            alert('Sucess');
        }else{
            alert('Error');
        }
    })
    document.getElementById("form-details").requestFullscreen();
})