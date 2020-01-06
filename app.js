// let apiKey = '&apikey=6f92fa3de58512351a3fdae15458744b';

let searchButton = document.querySelector('.searchBtn');


async function getData(e) {
    e.preventDefault()
    let searchBarInput = document.querySelector('#search').value;
    console.log(searchBarInput)

    try {
        const apiCall = await axios(`https://api.musixmatch.com/ws/1.1/track.search?q_artist=${searchBarInput}&apikey=6f92fa3de58512351a3fdae15458744b`)
        //console.log(apiCall.data.message.body.track_list)
        const trackList = apiCall.data.message.body.track_list;
        //console.log(trackList)
        trackList.forEach( track => {
            //console.log(track_list.track.track_name)
            let artistResults = document.querySelector('.results-list');
            let addArtist = document.createElement('li');
            //addArtist.appendChild(document.createTextNode(trackList));
            console.log(`Add me: ${addArtist}`);
            addArtist.innerHTML = track.track.track_name;
            //console.log(artistResults);
            artistResults.append(addArtist);
        })
    } catch (error) {
        console.log(error)
    }
   

}

searchButton.addEventListener('click', getData)

