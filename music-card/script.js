function createCard(title, artist, duration, albumcover) {
    console.log("intializing...")

    let card = document.createElement("div");
    card.classList.add("card");
    document.querySelector(".container").append(card);

    let cover = document.createElement("div");
    cover.classList.add("cover");
    card.append(cover);

    let image = document.createElement("img");
    image.src = albumcover;
    cover.append(image);

    let info = document.createElement("div");
    info.classList.add("info");
    card.append(info);

    let titleHeading = document.createElement("h3");
    titleHeading.innerText = title;

    let artistName = document.createElement("h4");
    artistName.innerText = artist;

    info.append(titleHeading);
    info.append(artistName);

    let wave = document.createElement("div");
    wave.classList.add("wave");
    card.append(wave);

    let waveImage = document.createElement("img");
    waveImage.src = "wave.png";
    wave.append(waveImage);

    let badge = document.createElement("div");
    badge.classList.add("badge");
    badge.innerText = duration;
    wave.append(badge);

    let playButton = document.createElement("button");
    playButton.classList.add("play-button");
    playButton.innerText = "▶";

    let isPlaying = false;

    playButton.addEventListener("click", () => {

        let rand1 = Math.floor(Math.random() * 206) + 50;
        let rand2 = Math.floor(Math.random() * 206) + 50;
        let rand3 = Math.floor(Math.random() * 206) + 50;

        let rand4 = Math.floor(Math.random() * 206) + 50;
        let rand5 = Math.floor(Math.random() * 206) + 50;
        let rand6 = Math.floor(Math.random() * 206) + 50;

        if (isPlaying == false) {
            playButton.innerText = "❚❚";
            isPlaying = true;
            playButton.style.backgroundColor = `rgb(${rand1}, ${rand2}, ${rand3})`;
            playButton.style.color = `rgb(${rand4}, ${rand5}, ${rand6})`;
        }
        else {
            playButton.innerText = "▶";
            isPlaying = false;
            playButton.style.backgroundColor = `rgb(${rand1}, ${rand2}, ${rand3})`;
            playButton.style.color = `rgb(${rand4}, ${rand5}, ${rand6})`;
        }

    });
    card.append(playButton);

}

createCard("Cheap Thrills", "Sia", "3:42", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJjiRNLLnH_N0wRhzIDSl24SDOdBWFTgPNfFk2I4PgeQ&s");

createCard("Blinding Lights", "The Weeknd", "3:20", "https://upload.wikimedia.org/wikipedia/en/e/e6/The_Weeknd_-_Blinding_Lights.png");

createCard("Counting Stars", "OneRepublic", "4:17", "https://i1.sndcdn.com/artworks-000040814493-eu3kr3-t500x500.jpg");

createCard("Believer", "Imagine Dragons", "3:24", "https://i.scdn.co/image/ab67616d0000b2735675e83f707f1d7271e5cf8a");

createCard("Heat Waves", "Glass Animals", "3:58", "https://upload.wikimedia.org/wikipedia/en/b/b0/Glass_Animals_-_Heat_Waves.png");