
/* ============================================
   CONFETTI
   ============================================ */

// Variable to store the interval ID
let confettiInterval;

// Function to start confetti
const startConfetti = () => {
    confettiInterval = setInterval(() => {
        confetti({
            particleCount: 50,
            startVelocity: 30,
            spread: 360,
            origin: { x: Math.random(), y: 0 },
        });
    }, 500); // Confetti every half-second
};

// Function to stop confetti
const stopConfetti = () => {
    clearInterval(confettiInterval); // Stop the interval
    window.removeEventListener("scroll", stopConfetti); // Remove the scroll event listener
};


/* ============================================
   CAROUSEL
   ============================================ */



/* ============================================
   ONE-LINERS
   ============================================ */

const messages = [
    "Du er en fantastisk venn!",
    "Du sprer glede rundt deg!",
    "Du har et hjerte av gull!",
    "Du inspirerer andre!",
    "Du har en fantastisk sans for humor!",
    "if (Fabian.hasBirthday) { return 🎉; }",
    "Fabian's debugging skills are Gandalf-level: 'You shall not pass!'",
    "System.out.println('Happy Birthday, Fabian!');",
    "404: Bugs Not Found (on Fabian's birthday).",
    "Fabian is like a lambda function—lightweight, efficient, and always useful.",
    "Not all who wander are lost, but if you wander too far, check the footer.",
    "This webpage is 100% bug-free, except the Easter eggs. Those are features.",
    "Fabian doesn’t debug; the bugs leave out of respect.",
    "I’d say Fabian is like WiFi, but he’s way more reliable."

];

document.getElementById("cool-button").addEventListener("click", () => {
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById("random-message").innerText = randomMessage;
});

// List of image paths
const images = [
    "media/carousel/1_ai1.webp",
    "media/carousel/2_ai5.webp",
    "media/carousel/3_happy-birthday-lotr.jpg",
    "media/carousel/4_ai4.webp",
    "media/carousel/5_secrets.webp",
    "media/carousel/6_Hobbit_Day_2020_Birthday_Banner.jpg",
    "media/carousel/7_ai2.webp",
    "media/carousel/8_ai8.webp",
    "media/carousel/9_lotr2.jpg",
    "media/carousel/10_foot.webp",
    "media/carousel/11_foot2.webp",
    "media/carousel/12_ai7.webp",
    "media/carousel/13_lotr1.jpg",
    "media/carousel/14_ai9.webp",
    "media/carousel/15_ai10.webp",
    "media/carousel/16_zlegolas-bday.jpg"
];

// Get the carousel container
const carouselContainer = document.getElementById("carousel-images");

// Dynamically add images to the carousel
images.forEach((src, index) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = `Image ${index + 1}`;
    img.classList.add("carousel-image");
    if (index === 0) {
        img.classList.add("visible"); // Show the first image by default
    }
    carouselContainer.appendChild(img);
});

let currentIndex = 0;

// Add event listeners for navigation buttons
document.getElementById("prev-btn").addEventListener("click", () => {
    changeImage(-1);
});
document.getElementById("next-btn").addEventListener("click", () => {
    changeImage(1);
});

// Function to change images
function changeImage(direction) {
    const images = document.querySelectorAll(".carousel-image");
    images[currentIndex].classList.remove("visible");

    currentIndex = (currentIndex + direction + images.length) % images.length;

    images[currentIndex].classList.add("visible");
}


function revealFooter() {
    const footer = document.querySelector('footer');
    footer.classList.add('revealed');
    const audio = new Audio('media/secret.wav');
    audio.play();
    document.getElementById('command').focus();
    document.getElementById('secret-button').disabled = true; // Disable button
}


/* ============================================
   EVENT LISTENERS
   ============================================ */

/* --------------------------------------------
   DOM Content Loaded: Initialize all scripts
-------------------------------------------- */

// Start confetti immediately after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    startConfetti();
});

// Start writing out the h1 message in the header
document.addEventListener("DOMContentLoaded", function () {
    const text = "Gratulerer med dagen, Fabian! ";
    const typingElement = document.getElementById("typing-text");
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            typingElement.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100); // Adjust speed here
        }
    }

    setTimeout(() => {
        typeWriter(); // Start typing after 3 seconds
    }, 3000);
});

// Observes whether the music player is being interacted with, to dim the page
document.addEventListener('DOMContentLoaded', () => {
    // Create the overlay element
    const overlay = document.createElement('div');
    overlay.className = 'page-overlay';
    document.body.appendChild(overlay); // Append it to the body

    // Select the music player iframe
    const musicPlayer = document.querySelector('iframe');
    let hasBeenFocused = false; // Track if the player has been interacted with

    // IntersectionObserver to detect when the player is in view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting && !hasBeenFocused) {
                // Player is in view - show dimming effect
                overlay.classList.add('active');
            } else if (!hasBeenFocused) {
                // Player is out of view - hide dimming effect
                overlay.classList.remove('active');
            }
        });
    });

    // Observe the music player
    observer.observe(musicPlayer);

    // Remove dimming permanently on first interaction
    const removeDimming = () => {
        overlay.classList.remove('active'); // Remove the dimming
        hasBeenFocused = true; // Mark the player as interacted
        observer.disconnect(); // Stop observing the player
    };

    // Detect user interaction
    musicPlayer.addEventListener('mouseenter', removeDimming);
    musicPlayer.addEventListener('focus', removeDimming); // For keyboard navigation
});

// Adds glow to the music player
document.addEventListener('DOMContentLoaded', () => {
    const musicPlayer = document.querySelector('iframe'); // Select the music player iframe

    // Simulate glow removal when user interacts
    musicPlayer.addEventListener('load', () => {
        musicPlayer.classList.add('music-player'); // Add glow by default
    });

    // Remove glow on interaction (play)
    musicPlayer.addEventListener('mouseenter', () => {
        musicPlayer.classList.add('no-glow'); // Simulate glow removal
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });

    fadeElements.forEach((el) => observer.observe(el));
});

function typeResponse(response, delay = 50) {
    let i = 0;
    const interval = setInterval(() => {
        if (i < response.length) {
            term.write(response.charAt(i));
            i++;
        } else {
            clearInterval(interval);
            term.write('\r\n$ ');
        }
    }, delay);
}



// Stop confetti on scroll
window.addEventListener("scroll", stopConfetti);


document.getElementById('secret-button').addEventListener('click', revealFooter);

const outputDiv = document.getElementById('output');
const commandInput = document.getElementById('command');
const terminal = document.getElementById('terminal');


// Reveal the terminal when footer is clicked
document.querySelector('footer').addEventListener('click', () => {
    terminal.style.display = 'block';
});

// Initialize the terminal
const term = new Terminal();
term.open(document.getElementById('output')); // Attach to #output
term.write('Welcome to the bash terminal!\r\n$ ');

let solvedClues = {
    clue1: false,
    clue2: false,
    clue3: false,
};


// Add a key listener for input
document.getElementById('command').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        const command = this.value.trim();
        this.value = ''; // Clear input
        term.write(`$ ${command}\r\n`);
        // Simulate responses
        const responses = {
            ls: 'gandalf.txt clue1.txt clue2.txt readme.md invite.txt guest_list.txt cake.png',
            help: 'Available commands: ls, cat <file>, help, whoami, sudo, pwd, touch',
            'whoami': 'The birthday VIP, obviously.',
            'sudo': 'Access denied: You cannot sudo your way out of fun!',
            'pwd': '/home/fabian/birthday_bash',
            'cd': 'Oops, no running away from your birthday fun! 🥳',
            'cd ..': 'Oops, no running away from your birthday fun! 🥳',

            'touch cake.png': 'Hands off! The cake is already baked! 🍰',

            'cat clue1.txt': 'Hint: Look where shadows hide. Some treasures prefer to stay hidden.',
            'cat clue2.txt': 'SHVudDogU29tZXRpbWVzIHNlY3JldHMgYXJlIGVuY29kZWQuIERlY29kZSB0aGUgbWVzc2FnZSBpbiAnc2VjcmV0X21lc3NhZ2UudHh0JyB0byBmaW5kIHlvdXIgbmV4dCBrZXl3b3JkLg==\n',
            'cat readme.md': 'Welcome to the birthday terminal. There are three secret keywords hidden. If you find one, there is a prize waiting for you the next time you see Kine. If you find all three ... who knows :) When you have the keyword(s), send them to Kine in a message. Enjoy the hunt!',
            'cat cake.png': 'Sorry, you can’t eat the cake here.',
            'cat invite.txt': 'Welcome to the best birthday terminal experience! 🎂',
            'cat .hidden_treasure': 'Every good birthday starts with a slice of something sweet. The keyword is: "chocolate_cake."',
            'cat gandalf.txt': 'You shall not pass... until you find the next clue!',
            'cat secret_message.txt': 'The keyword is: birthday_boy',
            'cat guest_list.txt': 'Bilbo Baggins: "Bring the cake."\n' +
                'Frodo Baggins: "I\'ll handle the decorations."\n' +
                'Samwise Gamgee: "Don’t forget the potatoes!"\n' +
                'Gandalf the Grey: "Secret message: 112 97 114 116 121 95 116 105 109 101"\n' +
                'Legolas Greenleaf: "Balloons are my thing."\n' +
                'Aragorn son of Arathorn: "Let’s keep the party safe."\n' +
                'Gimli son of Glóin: "Let me know when to arrive."\n',

            'less clue1.txt': 'Hint: Look where shadows hide. Some treasures prefer to stay hidden.',
            'less clue2.txt': 'SHVudDogU29tZXRpbWVzIHNlY3JldHMgYXJlIGVuY29kZWQuIERlY29kZSB0aGUgbWVzc2FnZSBpbiAnc2VjcmV0X21lc3NhZ2UudHh0JyB0byBmaW5kIHlvdXIgbmV4dCBrZXl3b3JkLg==\n',
            'less readme.md': 'Welcome to the birthday terminal. There are three secret keywords hidden. If you find one, there is a prize waiting for you the next time you see Kine. If you find all three ... who knows :) Enjoy the hunt!',
            'less cake.png': 'Sorry, you can’t eat the cake here.',
            'less invite.txt': 'Welcome to the best birthday terminal experience! 🎂',
            'less .hidden_treasure': 'Every good birthday starts with a slice of something sweet. The keyword is: "chocolate_cake."',
            'less gandalf.txt': 'You shall not pass... until you find the next clue!',
            'less secret_message.txt': 'The keyword is: birthday_boy',
            'less guest_list.txt': 'Bilbo Baggins: "Bring the cake."' +
                'Frodo Baggins: "I\'ll handle the decorations".' +
                'Samwise Gamgee: "Don’t forget the potatoes!"' +
                'Gandalf the Grey: "Secret message: 112 97 114 116 121 95 116 105 109 101"' +
                'Legolas Greenleaf: "Balloons are my thing."' +
                'Aragorn son of Arathorn: "Let’s keep the party safe."' +
                'Gimli son of Glóin: "Let me know when to arrive."',

            'ls -a': 'gandalf.txt clue1.txt clue2.txt readme.md invite.txt surprise.tar.gz clue.md cake.png present.exe .hidden_treasure',


        };
        const response = responses[command] || 'Command not found!';
        term.write(`${response}\r\n$ `);
        if (command === 'cat secret.txt') {
            const audio1 = new Audio('media/found_item.wav');
            audio1.play();
        } else if (command === 'cat .hidden_treasure') {
            const audio2 = new Audio('media/found_item.wav');
            audio2.play();
        }

    }
});












