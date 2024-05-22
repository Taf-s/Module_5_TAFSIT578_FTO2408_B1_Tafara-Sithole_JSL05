// Array of song objects with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
   
];

// Added 5 new songs to the array using .push() method 
const newSongs = songs;  

newSongs.push({title: "Fox on the Run", artist: "The Sweet", genre: "Rock"},
              {title: "Bring It On Home to Me", artist: "Sam Cooke", genre: "R&B"},
              {title:"We care a lot", artist: "Faith no More", genre: "Pop"},
              {title: "Southern Nights", artist: "Glen Campbell", genre: "R&B"},
              {title: "The Rubberband Man", artist: "The Spinners", genre: "R&B"} );


// Object containing each Guardian's preferred genre
// Added preferences for Drax, Rocket and Groot
  const guardians = [
    { name: 'Star-Lord', preferredGenre: 'Rock' },
    { name: 'Gamora', preferredGenre: 'Pop' },
    { name: 'Groot', preferredGenre: 'R&B' },
    { name: 'Rocket', preferredGenre: 'Rock' },
    { name: 'Drax', preferredGenre: 'Pop' }
  ];

// Function to generate playlist based on preferred genre
    // Use the map() function to create playlists for each Guardian
    // Your code here

    const guardianPlaylist = []; 

// Maped over the objects array 
  function generatePlaylist(guardians, songs) {
  return guardians.map(guardian => ({
    name: guardian.name,
    songs: songs.filter(song => song.genre === guardian.preferredGenre)
  }));
}

// Created and append elements to the #playlist div 

    const playlistsDiv = document.getElementById("playlists");

    const guardianPlaylists = generatePlaylist(guardians, songs);
    
    guardianPlaylists.forEach(playlist => {
      const outerPlaylistDiv = document.createElement("div");
      outerPlaylistDiv.classList.add("playlist");
    
      const playlistTitle = document.createElement("h2");
      playlistTitle.textContent = `${playlist.name}'s Playlist`;
      outerPlaylistDiv.appendChild(playlistTitle);
    
      const playlistUl = document.createElement("ul");
      playlistUl.style.listStyle = "none";
      outerPlaylistDiv.appendChild(playlistUl);
    
      playlist.songs.forEach(song => {
        const songItem = document.createElement("li");
        songItem.classList.add("song-item");
      
        const songTitle = document.createElement("span");
        songTitle.classList.add("song-title");
        songTitle.textContent = song.title;
        songItem.appendChild(songTitle);
      
        const songArtist = document.createElement("span");
        songArtist.classList.add("song-artist");
        songArtist.textContent = `by ${song.artist}`;
        songItem.appendChild(songArtist);
      
        playlistUl.appendChild(songItem);
      });

      playlistsDiv.appendChild(outerPlaylistDiv);
    });

