let apiKey = '&apikey=6f92fa3de58512351a3fdae15458744b';
let searchBarInput = document.querySelector('#search');
let searchButton = document.querySelector('.searchBtn');


// ====================================================
// ===============     FUNCTIONS       ================
// ====================================================

// // IT TRACKS USER INPUT
// function searchResults() {
//     event.preventDefault();
//     let userInput = searchBarInput.value;

//     collectArtistResults(userInput);
//     collectSongResults(userInput);
//     // collectAlbumnResults(userInput);
// }

// ====================================================
// ================   SEARCH BY TRACK  ===============
// ====================================================



// let baseArtist = 'https://api.musixmatch.com/ws/1.1/artist.search?q_artist=';

// //let artist = 'drake';



// const renderArtistResults = (results) => {
//     let artistName = results.data.message
//     console.log("artist name", artistName);

//     let artistList = results.data.message.body.artist_list;
//     //console.log(artistList);

//     let artistValue = document.querySelector('#artist-value');
//     //console.log(artistValue);
//     //console.log(artistValue.innerHTML);
   

//     artistValue.innerHTML = '';

//     // for (let i = 0; i < artistList.length; i++) {
//     //     // console.log(artistList[i].artist.artist_name);
//     //     artistName = artistList[i].artist.artist_name;
//     //     let allArtist = document.createElement('li');
//     //     allArtist.innerHTML += artistName;
//     //     artistResultsList.append(allArtist);

//     //     // artistList.forEach(function(artist_name) {
//     //     //     str += '<li>'+ artistName + '</li>';
//     //     //   }); 
//     // }

//     artistList.forEach( artist => {
//         let artistResultsList = document.querySelector('.results-list');
//         let addArtist = document.createElement('li');
//         console.log(data.message.body)
//         // addArtist.innerHTML = artistName;
//         //console.log(addArtist);
//         // artistResultsList.append(addArtist);
//     });


//     //  console.log(results);
//     //  console.log(results.data.message.body.artist_list[0].artist.artist_name);


// }

// const collectArtistResults = async (artist) => {
//     try {
//         let queryString = `${baseArtist}${artist}${apiKey}`;
//         let resultsFromAxios = await axios.get(queryString)
//         renderArtistResults(resultsFromAxios)
//     } catch (error) {
//         console.log(`Oops! There was an error: ${error}`)
//         console.log(error);
//     }
// }
// //collectArtistResults('jay-z');

// searchButton.addEventListener('click', searchResults)


// ====================================================
// ============     SEARCH BY ARTIST       =============
// ====================================================


async function getData(e) {
    e.preventDefault()
    let searchBarInput = document.querySelector('#search').value;
    console.log(searchBarInput)

    try {
        const apiCall = await axios(`https://api.musixmatch.com/ws/1.1/track.search?q_artist=${searchBarInput}&apikey=6f92fa3de58512351a3fdae15458744b`)
        // console.log(apiCall.data.message.body.track_list)
        const trackList = apiCall.data.message.body.track_list;
        // console.log(trackList)
        trackList.forEach( track => {
            console.log(track.track.track_name)
            let artistResults = document.querySelector('.results-list');
            let addArtist = document.createElement('li');
            addArtist.innerHTML = track.track.track_name;
            artistResults.append(addArtist);
        })
    } catch (error) {
        console.log(error)
    }
    
    

}

searchButton.addEventListener('click', getData)

// let baseSong = 'https://api.musixmatch.com/ws/1.1/track.search?q_track=';


// const renderSongResults = (results) => {
//     let songName = results.data.message.body.track_list[0].track.track_name;
//     console.log(songName);
//     let songValue = document.querySelector('#song-value');
//     songValue.innerHTML = songName;
//     console.log(results);

// }
// const collectSongResults = async (track) => {
//     try {
//         let queryString = `${baseSong}${track}${apiKey}`;
//         let resultsFromAxios = await axios.get(queryString);
//         renderSongResults(resultsFromAxios);
//     } catch (error) {
//         console.log(`Oops! There was an error: ${error}`);
//         console.log(error);
//     }
// }



// ====================================================
// ===========     SEARCH BY ALBUMN       =============
// ====================================================


// let baseAlbumn = 'https://api.musixmatch.com/ws/1.1/artist.albumn.get?q_track=';


// const renderAlbumnResults = (results) =>
//  {
//     console.log(results);
//      let albumnName = results.data.message.body.albumn_list[0].albumn.albumn_name;
//      console.log(albumnName);
//      let albumnValue = document.querySelector('#albumn-value');
//      albumnValue.innerHTML = albumnName;


//  }
// const collectAlbumnResults = async (albumn) =>
// {
//     try
//     {
//         let queryString = `${baseAlbumn}${albumn}${apiKey}` ;
//         console.log(queryString);
//         let resultsFromAxios = await axios.get(queryString);
//         renderAlbumnResults(resultsFromAxios); 
//     } catch (error)
//     {
//         console.log(`Oops! There was an error: ${error}`);
//         console.log(error);
//     }
// }

