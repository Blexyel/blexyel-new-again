function web3() {
    document.getElementById("buttons").remove();
    document.getElementById("la").remove();
    document.getElementById("la").remove();
    document.getElementById("la").remove();
    document.getElementById("abuse").remove();
    document.getElementById("abuse").remove();
    document.getElementById("status").remove();
    document.getElementById("status_iframe").remove();
    
    for (var m = 0; m < 100; m++) {
        try {
            document.getElementById("break").remove();
        } catch (e) {
            break;
        }
    }
    
    const adContainer = document.createElement("div");
    adContainer.id = "ad";
    adContainer.innerHTML = `
    🚨 <span class="blinking">WARNING!</span> YOU HAVE WON A MILLION DOLLARS! 🚨<br>
    Click below to claim your prize now!
    <button id="claimButton">CLAIM NOW</button>`;

    document.body.appendChild(adContainer);

    document.getElementById("claimButton").addEventListener("click", () => {
        rickie();
    });

    setInterval(() => {
        document.title = document.title === "🚨 WARNING! CLAIM NOW! 🚨" ? "💰 YOU HAVE WON! CLICK! 💰" : "🚨 WARNING! CLAIM NOW! 🚨";
    }, 500);

    // CSS styles dynamically added to the document
    const style = document.createElement("style");
    style.innerHTML = `
    #ad {
        position: sticky;
        padding: 100px;
        border: 5px solid red;
        background: yellow;
        font-size: 24px;
        font-weight: bold;
        text-transform: uppercase;
        animation: flash 0.5s infinite alternate;
    }
    @keyframes flash {
        0% { background: red; color: yellow; }
        100% { background: yellow; color: red; }
    }
    .blinking {
        animation: blinkText 0.7s infinite alternate;
    }
    @keyframes blinkText {
        0% { opacity: 1; }
        100% { opacity: 0; }
    }
    #claimButton {
        font-size: 20px;
        padding: 10px;
        margin-top: 20px;
        background: green;
        color: white;
        border: none;
        cursor: pointer;
    }
`;
    document.head.appendChild(style);

}