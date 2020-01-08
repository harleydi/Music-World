// let apiKey = '&apikey=6f92fa3de58512351a3fdae15458744b';
let searchBarInputA = document.querySelector('#searchArtist').value;
let searchBarInputB = document.querySelector('#searchSong').value;
let searchButton = document.querySelector('.searchBtn');


async function getData(e) {
    e.preventDefault()
    //console.log(searchBarInputA)

    try {
        let searchBarInput = document.querySelector('#search').value;
        //let searchBarInputB = document.querySelector('#searchSong').value;
        let searchButton = document.querySelector('.searchBtn');
        const apiCall = await axios(`https://api.musixmatch.com/ws/1.1/track.search?q_artist=${searchBarInput}&apikey=6f92fa3de58512351a3fdae15458744b`)
        //console.log(apiCall.data.message.body.track_list)
        //const myLyrics = await axios.get(`https://api.musixmatch.com/ws/1.1/matcher.lyrics.get?q_artist=${searchBarInputA}&q_track=${searchBarInputB}&apikey=6f92fa3de58512351a3fdae15458744b`);
        const trackList = data.message.body.track_list.track.track;
        console.log(trackList)
        trackList.forEach( track => {
            //console.log(track_list.track.track_name)
            let artistResults = document.querySelector('.results-list');
            let addArtist = document.createElement('li');
            //addArtist.appendChild(document.createTextNode(trackList));
            //addArtist.classList.add('results-list');
            //console.log(`Add me: ${addArtist}`);
            // let artistLink = document.createElement('a');
            // //artistLink.
            // artistLink.innerHTML = track.track.track_name;
            // addArtist.append(artistLink);
            //addArtist.innerHTML = track.track.track_name;
            //console.log(artistResults);
            artistResults.append(addArtist);
        })
    } catch (error) {
        console.log(error)
    }
   

}

searchButton.addEventListener('click', getData)


