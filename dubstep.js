function songDecoder(song){
  song_array = song.split("")
  for(i = 0; i < song_array.length; i++){
    console.log(song_array)
    if(song_array[i] === "w" || "W"){
      if(song_array[i+1] === "u" || "U"){
        if(song_array[i+2] === "b" || "B"){
          song_array[i] = " ";
          song_array.splice(i+1, 2)
          i = i - 2
        }
      }
    }
  }
  console.log(song_array);
}

songDecoder("wub")
