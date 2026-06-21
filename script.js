const cardImage = document.getElementById('cardImage');
const greeting = document.getElementById('greeting');
const message = document.getElementById('message');
const signature = document.getElementById('signature');
const nameInput = document.getElementById('nameInput');
const messageInput = document.getElementById('messageInput');
const styleInput = document.getElementById('styleInput');
const generateBtn = document.getElementById('generateBtn');
const randomBtn = document.getElementById('randomBtn');
const status = document.getElementById('status');

const themes = {
    birthday: {
        greeting: 'Happy Birthday!',
        message: 'Wishing you a day filled with joy and happiness!',
        signature: 'From',
        imageStyle: 'birthday+celebration'
    },
    love: {
        greeting: 'I Love You!',
        message: 'You make my world brighter every single day!',
        signature: 'All my love',
        imageStyle: 'love+romantic'
    },
    thank_you: {
        greeting: 'Thank You!',
        message: 'I appreciate you more than words can express!',
        signature: 'Gratefully',
        imageStyle: 'thankful+grateful'
    },
    christmas: {
        greeting: 'Merry Christmas!',
        message: 'Wishing you a magical holiday season!',
        signature: 'Warm Wishes',
        imageStyle: 'christmas+snow'
    },
    congratulations: {
        greeting: 'Congratulations!',
        message: 'You did it! So proud of your achievement!',
        signature: 'Celebrating You',
        imageStyle: 'celebration+party'
    }
};

function getRandomImage(style = '') {
    const randomId = Math.floor(Math.random() * 1000);
    return `https://picsum.photos/400/300?random=${randomId}`;
}

function getQuote() {
    const fallbackQuotes = [
        'Believe you can and you\'re halfway there.',
        'The best way to predict the future is to create it.',
        'Life is what happens when you\'re busy making plans.',
        'Dream big, work hard, stay focused.'
    ];
    message.textContent = fallbackQuotes[Math.floor(Math.random() * fallbackQuotes.length)];
}

function getRandomQuotes() {
    fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
            if (data.content) {
                message.textContent = `"${data.content}"`;
                status.textContent = '✨ Added random quote!';
            }
        })
        .catch(() => getQuote());
}

function updateCard(name, msg, style = '') {
    if (msg) {
        greeting.textContent = msg;
    }
    if (name) {
        signature.textContent = `- From ${name}`;
    }
    cardImage.src = getRandomImage(style);
    status.textContent = '✅ Card updated!';
}

function generateOnClick() {
    const name = nameInput.value.trim();
    const msg = messageInput.value.trim();
    const style = styleInput.value.trim().toLowerCase();

    if (!name || !msg) {
        status.textContent = '⚠️ Please enter a name and message!';
        status.style.color = '#dc3545';
        return;
    }

    let theme = themes[style];

    if (theme) {
        greeting.textContent = theme.greeting;
        message.textContent = theme.message;
        signature.textContent = `- From ${name}`;
        cardImage.src = getRandomImage(theme.imageStyle);
        status.textContent = `🎨 Created ${style} card for ${name}!`;
    } else {
        greeting.textContent = msg;
        message.textContent = `Special message from ${name}`;
        signature.textContent = `- From ${name}`;
        cardImage.src = getRandomImage(style);
        status.textContent = `✨ Created custom card for ${name}!`;
    }
    
    status.style.color = '#28a745';
}

function randomCard() {
    const themeKeys = Object.keys(themes);
    const randomTheme = themeKeys[Math.floor(Math.random() * themeKeys.length)];
    const theme = themes[randomTheme];

    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            const name = data.results[0].name.first;
            nameInput.value = name;

            greeting.textContent = theme.greeting;
            message.textContent = theme.message;
            signature.textContent = `- From ${name}`;
            cardImage.src = getRandomImage(theme.imageStyle);
            status.textContent = `🎲 Random ${randomTheme} card for ${name}!`;
            status.style.color = '#007bff';
        })
        .catch(() => {
            const fallbackNames = ['Alex', 'Sam', 'Jordan', 'Taylor', 'Casey'];
            const name = fallbackNames[Math.floor(Math.random() * fallbackNames.length)];
            nameInput.value = name;

            greeting.textContent = theme.greeting;
            message.textContent = theme.message;
            signature.textContent = `- From ${name}`;
            cardImage.src = getRandomImage(theme.imageStyle);
            status.textContent = `🎲 Random ${randomTheme} card!`;
        });
}

generateBtn.onclick = generateOnClick;
randomBtn.onclick = randomCard;

nameInput.value = 'Friend';
messageInput.value = 'Happy Birthday!';
updateCard('Friend', 'Happy Birthday!');

document.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        generateBtn.click();
    }
});