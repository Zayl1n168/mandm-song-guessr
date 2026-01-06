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

    // --- ENCORE ---
    { name: "Evil Deeds", file: "audio/Evil_Deeds.mp3" },
    { name: "Never Enough", file: "audio/Never_Enough.mp3" },
    { name: "Yellow Brick Road", file: "audio/Yellow_Brick_Road.mp3" },
    { name: "Like Toy Soldiers", file: "audio/Like_Toy_Soldiers.mp3" },
    { name: "Mosh", file: "audio/Mosh.mp3" },
    { name: "Puke", file: "audio/Puke.mp3" },
    { name: "My 1st Single", file: "audio/My_1st_Single.mp3" },
    { name: "Rain Man", file: "audio/Rain_Man.mp3" },
    { name: "Big Weenie", file: "audio/Big_Weenie.mp3" },
    { name: "Just Lose It", file: "audio/Just_Lose_It.mp3" },
    { name: "Ass Like That", file: "audio/Ass_Like_That.mp3" },
    { name: "Mockingbird", file: "audio/Mockingbird.mp3" },
    { name: "One Shot 2 Shot", file: "audio/One_Shot_2_Shot.mp3" },
    { name: "Encore", file: "audio/Encore.mp3" },

    // --- RELAPSE ---
    { name: "3am", file: "audio/3am.mp3" },
    { name: "My Mom", file: "audio/My_Mom.mp3" },
    { name: "Insane", file: "audio/Insane.mp3" },
    { name: "Bagpipes from Baghdad", file: "audio/Bagpipes_from_Baghdad.mp3" },
    { name: "Hello", file: "audio/Hello.mp3" },
    { name: "Same Song & Dance", file: "audio/Same_Song_&_Dance.mp3" },
    { name: "We Made You", file: "audio/We_Made_You.mp3" },
    { name: "Medicine Ball", file: "audio/Medicine_Ball.mp3" },
    { name: "Stay Wide Awake", file: "audio/Stay_Wide_Awake.mp3" },
    { name: "Old Time's Sake", file: "audio/Old_Time's_Sake.mp3" },
    { name: "Must Be The Ganja", file: "audio/Must_Be_The_Ganja.mp3" },
    { name: "Beautiful", file: "audio/Beautiful.mp3" },
    { name: "Crack A Bottle", file: "audio/Crack_A_Bottle.mp3" },
    { name: "Underground", file: "audio/Underground.mp3" },

    // --- RECOVERY ---
    { name: "Cold Wind Blows", file: "audio/Cold_Wind_Blows.mp3" },
    { name: "Talkin' 2 Myself", file: "audio/Talkin'_2_Myself.mp3" },
    { name: "On Fire", file: "audio/On_Fire.mp3" },
    { name: "Won't Back Down", file: "audio/Won't_Back_Down.mp3" },
    { name: "W.T.P.", file: "audio/W.T.P..mp3" },
    { name: "Going Through Changes", file: "audio/Going_Through_Changes.mp3" },
    { name: "Not Afraid", file: "audio/Not_Afraid.mp3" },
    { name: "Seduction", file: "audio/Seduction.mp3" },
    { name: "No Love", file: "audio/No_Love.mp3" },
    { name: "Space Bound", file: "audio/Space_Bound.mp3" },
    { name: "Cinderella Man", file: "audio/Cinderella_Man.mp3" },
    { name: "25 to Life", file: "audio/25_to_Life.mp3" },
    { name: "So Bad", file: "audio/So_Bad.mp3" },
    { name: "Almost Famous", file: "audio/Almost_Famous.mp3" },
    { name: "Love the Way You Lie", file: "audio/Love_the_Way_You_Lie.mp3" },
    { name: "You're Never Over", file: "audio/You're_Never_Over.mp3" },

    // --- CURTAIN CALL ---
    { name: "FACK", file: "audio/FACK.mp3" },
    { name: "Shake That", file: "audio/Shake_That.mp3" },
    { name: "When I'm Gone", file: "audio/When_I'm_Gone.mp3" }
    { name: "Sing For The Moment", file: "audio/Sing_For_The_Moment.mp3" }
];

let currentSong = null;
let totalScore = 0;
let streak = 0;
let audio = new Audio();

function playSong() {
    document.getElementById('feedback').innerText = "Listening...";
    document.getElementById('guess-input').value = "";
    
    currentSong = songs[Math.floor(Math.random() * songs.length)];
    
    audio.src = currentSong.file;
    audio.play().catch(e => {
        console.error("Missing file:", currentSong.file);
        playSong(); 
    });
}

function checkAnswer() {
    if (!currentSong) return;

    const userGuess = document.getElementById('guess-input').value.trim().toLowerCase();
    const correctAnswer = currentSong.name.toLowerCase();

    // Clean logic for punctuation/spaces
    const clean = (str) => str.replace(/[^\w]/gi, '').replace(/\s+/g, '');

    if (clean(userGuess) === clean(correctAnswer)) {
        totalScore++;
        streak++;
        updateDisplay();
        document.getElementById('feedback').innerText = "🎯 CORRECT! It was " + currentSong.name;
        document.getElementById('feedback').style.color = "#00ff00";
        audio.pause();
        currentSong = null; // Prevent double submitting
    } else {
        streak = 0; // Reset streak on wrong answer
        updateDisplay();
        document.getElementById('feedback').innerText = "❌ WRONG! Streak Reset.";
        document.getElementById('feedback').style.color = "#ff0000";
    }
}

function revealSong() {
    if (!currentSong) return;
    document.getElementById('feedback').innerText = "The song was: " + currentSong.name;
    document.getElementById('feedback').style.color = "#ffcc00";
    streak = 0; // Reveal counts as a fail for the streak
    updateDisplay();
    audio.pause();
    currentSong = null;
}

function updateDisplay() {
    document.getElementById('score').innerText = totalScore;
    document.getElementById('streak').innerText = streak;
}
