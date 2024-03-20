export const formatTime = (time) =>{

    let minutes = Math.floor(time/60);
    var seconds = time % 60;

    return (
      (minutes < 10 ? "0" + minutes : minutes) + ":" +
      (seconds < 10 ? "0" + seconds : seconds)
    )

  }


  export const minutesFormatOnly = (time) =>{

    let minutes = Math.floor(time/60);
    // var seconds = time % 60;

    return (
      (minutes)     )

  }