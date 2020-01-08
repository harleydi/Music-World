let apiKey = '&apikey=6f92fa3de58512351a3fdae15458744b';
let searchBarInput = document.querySelector('#search').value;
let searchButton = document.querySelector('.searchBtn');


// ====================================================
// ============     SEARCH BY ARTIST       =============
// ====================================================

async function getData(e) {
    e.preventDefault()
    let searchBarInput = document.querySelector('#search').value;
    console.log(searchBarInput)
    twitter(searchBarInput);
    songs(searchBarInput);

    // ====================================================
    // ============     RESET DOM       =============
    // ====================================================

    let artistResults = document.querySelector('.results-list');
    while (artistResults.lastChild) {
    artistResults.removeChild(artistResults.lastChild)
}

    try {
        const apiCall = await axios(` https://api.musixmatch.com/ws/1.1/artist.search?q_artist=${searchBarInput}&page_size=5&apikey=6f92fa3de58512351a3fdae15458744b`)
        const artistList = apiCall.data.message.body.artist_list;
        //console.log(trackList)
        artistList.forEach( artist => {
            //console.log(artist.track.track_name)
            let artistResults = document.querySelector('.results-list');
            let addArtist = document.createElement('li');
            addArtist.classList.add("listStyle")
            addArtist.innerHTML = artist.artist.artist_name;
            artistResults.append(addArtist);
            //let makeLink = document.createElement('a');
            //makeLink.innerHTML = track.track.track_name;

        });
    }
    catch(e) {
        console.log(e);
    }
}

    async function twitter(searchBarInput) {
        const apiSocialCall = await axios(`https://api.musixmatch.com/ws/1.1/artist.search?q_artist=${searchBarInput}&page_size=5&apikey=6f92fa3de58512351a3fdae15458744b`)
        console.log(apiSocialCall)
        const socialList = apiSocialCall.data.message.body.artist_list;
        console.log(socialList)
        socialList.forEach( social => {
            console.log(social.artist.artist_name)
            let socialResults = document.querySelector('.social-list');
            let addSocial = document.createElement('li');
            addSocial.classList.add("listStyle")
            addSocial.innerHTML = `<a href="${social.artist.artist_twitter_url}">${social.artist.artist_twitter_url}</a>`;
            socialResults.append(addSocial);
            //let makeLink = document.createElement('a');
            //makeLink.innerHTML = track.track.track_name;

        });
    }

    async function songs(searchBarInput) {
        const apiCall = await axios(`https://api.musixmatch.com/ws/1.1/track.search?q_artist=${searchBarInput}&apikey=6f92fa3de58512351a3fdae15458744b`)
        //console.log(apiCall.data.message.body.track_list)
        const trackList = apiCall.data.message.body.track_list;
        console.log(trackList)
        trackList.forEach( track => {
            console.log(track.track_name)
            let artistResults = document.querySelector('.track-list');
            let addArtist = document.createElement('li');
            //addArtist.appendChild(document.createTextNode(trackList));
            console.log(`Add me: ${addArtist}`);
            addArtist.innerHTML = track.track.track_name;
            addArtist.classList.add('listStyle');
            //console.log(artistResults);
            artistResults.append(addArtist);
    
    

        });
    }

searchButton.addEventListener('click', getData);