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
        imageStyle: 'Birthday + Celebration'
    },

    love: {
        greeting: 'I love you!',
        message: 'You make my world brighter every single day!',
        signature: 'All my love',
        imageStyle: 'love + romantic'
    },

    thanks_you: {
        greeting: 'Thanks you!',
        message: 'I appreciate you more than words can express!',
        signature: 'gratefully',
        imageStyle: 'thankful + grateful'
    },

    christmas: {
        greeting: 'Marry Christmas!',
        message: 'Wishing you a magical holiday season!',
        signature: 'Warm Wishes',
        imageStyle: 'christmas + show'
    },

    congratulations: {
        greetings: 'congratulations',
        message: 'You did it! So proud of your achievement!',
        signature: 'Celebrating You',
        imageStyle: 'celebration + party'
    }
};

function getRandomImage( style = '') {

    const randomId = Math.floor(Math.random() * 1000);
    
    return 'https://picsum.photos/400/300?random=${randomId}';
}

function getTime() {
    
    if (date.content) {
        message.textContent = `"${data.content}"`;
        status.textContent = 'Add random quote!';
    }
}

function getQuote() {

    const fallbackQuote = [

        'Believe you can and you`re halfway there.',
        'The best way to predict future is to create it.',
        'Life is what happends when you`re busy making plans.',
        'Dream big, work hard, stay focused.'
    ];

    message.textContent = fallbackQuote[Math.floor(Math.random()*fallbackQuote.length)];
}

function getRandomQuotes() {

    fetch('https://api.quotable.io/random').then(Response => Response.json()).then( date => getTime()).catch(() => getQuote());
}

function updateCard(name, msg, style='') {
    
    if (msg) {
        greeting.textContent = msg;
    }

    if (name) {
        signature.textContent = `from ${name} `;
    }

    cardImage.src = getRandomImage(style);

    status.textContent = 'Card update!';

}

function generateOnClick() {
    
    const name = nameInput.Value.trim();
    const msg = message.Value.trim();
    const style = styleInput.Value.trim().toLowerCase();

    if (!name || !msg) {
        status.textContent = 'Please Enter a name and message!';
        status.style.color = '#dc3545';
        return;
    }

    let themeKey = style;
    let theme = themes[themeKey];

    if (theme) {

        greeting.textContent = msg;
        message.textContent = `Special message from ${name}`;
        signature.textContent = `- From ${name}`;
        cardImage.src = getRandomImage(style);
        status.textContent = `Create custom card for ${name}`;
    }

    status.style.color = '#28a745';
}

generateBtn.onclick = generateOnClick();

function then011() {

    const name = data.result[0].name.first;
    nameInpute.Value = name;

    greeting.textContent = theme.greeting;
    message.textContent = theme.message;
    signature.textContent = `- From ${name}`;
    cardImage.src = getRandomImage(theme.ImageStyle);
    status.textContent = `Random ${randomTheme} card for ${name}!`;
    status.style.color = '#00&bff'; 
}

function catchMe() {

    const fallbackNames = ['Alex', 'Sam', 'Jordan', 'Tylor', 'Cassey'];
    const name = fallbackNames[Math.floor(Math.random()*fallbackNames.length)];

    nameInput.Value = name;

    greetings.textContent = theme.greeting;
    message.textContent = theme.message;
    signature.textContent = `- From ${name}`;
    cardImage.src = getRandomImage(theme.imageStyle);
    status.textContent = ` Random ${randomTheme} Card`;
}

function randomCard() {

    const themeKey = Object.keys(themes);
    const randomThemes = themeKEy[Math.floor(Math.random()*themeKey.length)];
    const theme = themes[randomTheme];

    fetch('https://randomuser.me/api/').then( response => response.json()).then( date => then011()).catch(() => catchMe());
}

randomBtn.onclick() = randomCard();

nameInput.value = 'Friend';
messageInput.value = 'Happy Birthday!';
updateCard('Friends', 'Happy Birthday!');

document.addEventListener('keypress', function(e) {

    if (e.key === 'Enter') {
        generateBtn.click();
    }
});
