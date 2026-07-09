function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    console.log("intializing...")

    let card = document.createElement("div");
    card.classList.add("card");
    document.querySelector(".container").append(card);

    let thumbNail = document.createElement("div");
    thumbNail.classList.add("thumbNail");
    card.append(thumbNail);

    let img = document.createElement("img");
    img.src = thumbnail;
    thumbNail.append(img);

    let badge = document.createElement("div");
    badge.classList.add("badge");
    badge.innerText = duration;
    thumbNail.append(badge);

    let info = document.createElement("div");
    info.classList.add("info");

    let titleHeading = document.createElement("h3");

    let meta = document.createElement("p");
    meta.innerText = `${cName} • ${views} views • ${monthsOld} months ago`;

    titleHeading.innerText = title;

    info.append(titleHeading);
    info.append(meta);

    card.append(info);
    console.log(card);
}


createCard("Introduction to Backend | Sigma Web Dev video #1", "CodeWithHarry", 56000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")

createCard("Our Planet | Forests | FULL EPISODE | Netflix", "Netflix", 48000, 2, "48:18", "	https://i.ytimg.com/vi/JkaxUblCGz0/hq720.jpg?sqp=-…BACGAY4AUAB&rs=AOn4CLCt3IKtn3VM2NItKIjFTasjg0gGEg")

createCard("Coldplay - Hymn For The Weekend (Official Video)", "Coldplay", 64000, 9, "4:21", "https://i.ytimg.com/vi/YykjpeuMNEk/hq720.jpg?sqp=-…BACGAY4AUAB&rs=AOn4CLDmguwhsnka7Jk68V5i_mR01ORVoA")

createCard("GOKU MASTERED ULTRA INSTINCT VS JIREN {4K ULTRA HD}", "ONE WINGED ANGEL", 84000, 18, "2:52", "	https://i.ytimg.com/vi/lZ2EXxBMkvo/hq720.jpg?sqp=-…BACGAY4AUAB&rs=AOn4CLDbvLdLLkokck9aJ2Dh7Wi8_1TAVg")

