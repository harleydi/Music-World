let baseArtist = 'https://api.musixmatch.com/ws/1.1/artist.search?q_artist=';

//let artist = 'drake';
let apiKey = '&apikey=6f92fa3de58512351a3fdae15458744b';


const renderArtistResults = (results) =>
 {
     let artistName = results.data.message.body.artist_list[0].artist.artist_name;
     console.log(results)
     console.log(results.data.message.body.artist_list[0].artist.artist_name);
     let artistValue = document.querySelector('#artist-value');
     artistValue.innerHTML = artistName;
 }

const collectArtistResults = async (artist) =>
{
    try
    {
        let queryString = `${baseArtist}${artist}${apiKey}`;
        let resultsFromAxios = await axios.get(queryString) 
        renderArtistResults(resultsFromAxios) 
    } catch (error)
    {
        console.log(`Oops! There was an error: ${error}`)
        console.log(error);
    }
}
//collectArtistResults('jay-z');

let searchBarInput = document.querySelector('#search');
let searchButton = document.querySelector('.searchBtn');

function searchResults() {
    event.preventDefault();
    let userInput = searchBarInput.value;

    collectArtistResults(userInput);
}

searchButton.addEventListener('click', searchResults)

// song