const songs = [
    // --- THE SLIM SHADY LP ---
    { name: "My Name Is", file: "audio/My_Name_Is.mp3" },
    { name: "Guilty Conscience", file: "audio/Guilty_Conscience.mp3" },
    { name: "Brain Damage", file: "audio/Brain_Damage.mp3" },
    { name: "If I Had", file: "audio/If_I_Had.mp3" },
    { name: "97 Bonnie & Clyde", file: "audio/97_Bonnie_&_Clyde.mp3" },
    { name: "Role Model", file: "audio/Role_Model.mp3" },
    { name: "My Fault", file: "audio/My_Fault.mp3" },
    { name: "Cum On Everybody", file: "audio/Cum_On_Everybody.mp3" },
    { name: "Rock Bottom", file: "audio/Rock_Bottom.mp3" },
    { name: "Just Don't Give a Fuck", file: "audio/Just_Don't_Give_a_Fuck.mp3" },
    { name: "As the World Turns", file: "audio/As_the_World_Turns.mp3" },
    { name: "I'm Shady", file: "audio/I'm_Shady.mp3" },
    { name: "Bad Meets Evil", file: "audio/Bad_Meets_Evil.mp3" },
    { name: "Still Don't Give a Fuck", file: "audio/Still_Don't_Give_a_Fuck.mp3" },

    // --- THE MARSHALL MATHERS LP ---
    { name: "Kill You", file: "audio/Kill_You.mp3" },
    { name: "Stan", file: "audio/Stan.mp3" },
    { name: "Who Knew", file: "audio/Who_Knew.mp3" },
    { name: "The Way I Am", file: "audio/The_Way_I_Am.mp3" },
    { name: "The Real Slim Shady", file: "audio/The_Real_Slim_Shady.mp3" },
    { name: "Remember Me", file: "audio/Remember_Me.mp3" },
    { name: "I'm Back", file: "audio/I'm_Back.mp3" },
    { name: "Marshall Mathers", file: "audio/Marshall_Mathers.mp3" },
    { name: "Drug Ballad", file: "audio/Drug_Ballad.mp3" },
    { name: "Amityville", file: "audio/Amityville.mp3" },
    { name: "Bitch Please II", file: "audio/Bitch_Please_II.mp3" },
    { name: "Kim", file: "audio/Kim.mp3" },
    { name: "Under the Influence", file: "audio/Under_the_Influence.mp3" },
    { name: "Criminal", file: "audio/Criminal.mp3" },

    // --- CURTAIN CALL (DELUXE/NEW TRACKS) ---
    { name: "FACK", file: "audio/FACK.mp3" },
    { name: "Shake That", file: "audio/Shake_That.mp3" },
    { name: "When I'm Gone", file: "audio/When_I'm_Gone.mp3" },
    { name: "Lose Yourself", file: "audio/Lose_Yourself.mp3" },
    { name: "Without Me", file: "audio/Without_Me.mp3" },
    { name: "Sing for the Moment", file: "audio/Sing_for_the_Moment.mp3" },
    { name: "Mockingbird", file: "audio/Mock_ingbird.mp3" },
    { name: "Like Toy Soldiers", file: "audio/Like_Toy_Soldiers.mp3" },
    { name: "Cleanin' Out My Closet", file: "audio/Cleanin'_Out_My_Closet.mp3" }
];

let currentSong = null;
let score = 0;
let audio = new Audio();

function playSong() {
    document.getElementById('feedback').innerText = "Listening...";
    document.getElementById('guess-input').value = "";
    
    // Pick a random song from the list
    currentSong = songs[Math.floor(Math.random() * songs.length)];
    
    audio.src = currentSong.file;
    audio.play().catch(e => {
        console.error("Playback failed. Make sure the file exists in the audio folder:", currentSong.file);
        document.getElementById('feedback').innerText = "Error loading song. Try again.";
    });
}

function checkAnswer() {
    if (!currentSong) return;

    const userGuess = document.getElementById('guess-input').value.trim().toLowerCase();
    const correctAnswer = currentSong.name.toLowerCase();

    // Cleaning strings for better matching (removes punctuation and spaces)
    const clean = (str) => str.replace(/[^\w\s]/gi, '').replace(/\s+/g, '');

    if (clean(userGuess) === clean(correctAnswer)) {
        score++;
        document.getElementById('score').innerText = score;
        document.getElementById('feedback').innerText = "🎯 CORRECT! It was " + currentSong.name;
        document.getElementById('feedback').style.color = "#00ff00";
    } else {
        document.getElementById('feedback').innerText = "❌ WRONG! Keep listening...";
        document.getElementById('feedback').style.color = "#ff0000";
    }
}
