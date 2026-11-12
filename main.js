function messageLog() { 
    console.log("Hello, this is a message log!"); 
}  
messageLog();  
//Start of const for 12 zodiac signs 

const zodiacSigns = [ 
    { 
        name: "Aries", 
        character: "Barret Wallace", 
        dateRange: "March 21 - April 19", 
        start: { month: 3, day: 21 }, 
        end: { month: 4, day: 19 },  
        image: "assets/images/barret.jpg",
        audio: "assets/audio/barrett.mp3" 
    }, 
    {
        name: "Taurus", 
        character: "Tifa Lockhart", 
        dateRange: "April 20 - May 20", 
        start: { month: 4, day: 20 },
        end: { month: 5, day: 20 },
        image: "assets/images/tifa.jpg",
        audio: "assets/audio/tifa.mp3" ,
    }, 
    { 
        name: "Gemini", 
        character: "Zack Fair",
        dateRange: "May 21 - June 20",
        start: { month: 5, day: 21 },
        end: { month: 6, day: 20 },
        image: "assets/images/zack.jpg",
        audio: "assets/audio/zack.mp3"
    }, 
    { 
        name: "Cancer", 
        character: "Cid Highwind",
        dateRange: "June 21 - July 22",
        start: { month: 6, day: 21 },   
        end: { month: 7, day: 22 },
        image: "assets/images/cid.jpg",
        audio: "assets/audio/cid.mp3"
    }, 
    { 
        name: "Leo", 
        character: "Cloud Strife",
        dateRange: "July 23 - August 22",
        start: { month: 7, day: 23 },
        end: { month: 8, day: 22 },
        image: "assets/images/cloud.jpg",
        audio: "assets/audio/cloud.mp3"
    }, 
    { 
        name: "Virgo",
        character: "Aerith Gainsborough", 
        dateRange: "August 23 - September 22", 
        start: { month: 8, day: 23 },
        end: { month: 9, day: 22 },
        img: { src: "images/aerith_resize.jpg" },
        audio: "assets/audio/aerith.mp3"
    },
    { 
        name: "Libra",
        character: "Vincent Valentine",
        dateRange: "September 23 - October 22",
        start: { month: 9, day: 23 },
        end: { month: 10, day: 22 },
        image: "assets/images/vincent.jpg",
        audio: "assets/audio/vincent.mp3"
    }, 
    {
        name: "Scorpio",
        character: "Yuffie Kisaragi",
        dateRange: "October 23 - November 21",
        start: { month: 10, day: 23 },
        end: { month: 11, day: 21 },
        image: "assets/images/yuffie.jpg",
        audio: "assets/audio/yuffie.mp3"
    }, 
    { 
        name:"Sagittarius",
        character: "Reno", 
        dateRange: "November 22 - December 21", 
        start: { month: 11, day: 22 },
        end: { month: 12, day: 21 },
        image: "assets/images/reno.jpg",
        audio: "assets/audio/reno.mp3"
    },
    {
        name: "Capricorn",
        character: "Rufus Shinra", 
        dateRange: "December 22 - January 19",
        start: { month: 12, day: 22 },
        end: { month: 1, day: 19 },
        image: "assets/images/rufus.jpg",
        audio: "assets/audio/rufus.mp3"
    },
    {
        name:"Aquarius", 
        character: "Tseng",
        dateRange: "January 20 - February 18", 
        start: { month: 1, day: 20 }, 
        end: { month: 2, day: 18 }, 
        image: "assets/images/tseng.jpg", 
        audio: "assets/audio/tseng.mp3" 
    },
    {
        name: "Pisces",
        character: "Rude", 
        dateRange: "February 19 - March 20", 
        start: { month: 2, day: 19 }, 
        end: { month: 3, day: 20 }, 
        image: "assets/images/rude.jpg", 
        audio: "assets/audio/rude.mp3" 
    } 
] 

// Function to find a sign based on a birth date 

function getDateValue(month, day) { 
    return month * 100 + day; 
} 
 // a look up function that uses a loop and a range to check over the data 
function findDate(month, day) {
    const targetValue = getDateValue(month, day);

    for (const sign of zodiacSigns) {
        const startValue = getDateValue(sign.start.month, sign.start.day);
        const endValue = getDateValue(sign.end.month, sign.end.day);
        const wraps = startValue > endValue; // Check if the date range wraps around the year

        if (!wraps && targetValue >= startValue && targetValue <= endValue) { 
            return sign;
        } 
        if (wraps && (targetValue >= startValue || targetValue <= endValue)) {
            return sign;
        } 
    } 
    return null; // Return null if no matching sign is found 
} 


//  Find the different  elements on the page:
const signContainer = document.querySelector('#signContainer'); // Container for the zodiac sign cards
const dateInput = document.querySelector('input#birthDate'); // Input field for the birth date
const lookupBtn = document.querySelector('button#lookupBtn'); // Button to trigger the lookup
const outputArea = document.querySelector('#outputArea'); // Area to display the lookup results

if (signContainer) {
    zodiacSigns.forEach(sign => {
        // Create the new card element, set its text, and add a class:
        const card = document.createElement('div');
        card.classList.add('sign-card');

        // Create and add the title:
        const title = document.createElement('h3');
        title.textContent = sign.name;
        card.appendChild(title);

        // Create and add the date range:
        const dateRange = document.createElement('p');
        dateRange.textContent = sign.dateRange;
        card.appendChild(dateRange);

        // Create and add the character name:
        const character = document.createElement('p');
        character.textContent = `FF7 Match: ${sign.character}`;
        card.appendChild(character);

        // adds the completed card to the container on the page:
        signContainer.appendChild(card);
    });
}
 // Find your button container on the page
const buttonContainer = document.querySelector('#buttonContainer');

// Check if the container exists so it doesn't cause errors
if (signContainer && outputArea) {
    
    zodiacSigns.forEach(sign => {
        // 1. Create a real <button> element (crucial for accessibility: tab-stop, Enter/Space support)
        const charButton = document.createElement('button');
        charButton.type = 'button'; // Best practice for buttons on the same page
        
        // 2. Give the button a visible name (its accessible name for screen readers)
        charButton.textContent = `${sign.character} (${sign.name})`;

        // 3. Wire the event listener using addEventListener (as taught in lecture)
        charButton.addEventListener('click', (event) => {
            // Clear previous results from the output area
            outputArea.textContent = '';

            // Create a new result container to display the clicked character
            const resultDiv = document.createElement('div');
            resultDiv.classList.add('result-item');

            const heading = document.createElement('h3');
            heading.textContent = `Zodiac Sign: ${sign.name}`;
            resultDiv.appendChild(heading);

            const desc = document.createElement('p');
            desc.textContent = `FF7 Character: ${sign.character} | Date Range: ${sign.dateRange}`;
            resultDiv.appendChild(desc);

            // Append the generated result to the live region output area
            outputArea.appendChild(resultDiv);
        });

        // 4. Add the finished button into your HTML container grid
        signContainer.appendChild(charButton);
    });
}






