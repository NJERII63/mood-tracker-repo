const moodButtons = document.querySelectorAll('.mood-btn');
const moodDisplay = document.getElementById('moodDisplay');
const counterDisplay = document.getElementById('counter');
const resetBtn = document.getElementById('resetBtn');

let count = 0;

const moodMessages = {
  Happy: "We love being happy!! keep that energy pookie🥳✨",
  Productive: "Getting things done is our AMOO🏋️‍♀️💅Keep going Cami !!",
  Tired: "Usijiue msupaa😥 A step at a time, your doing greattt",
  Excited: "Great thingss are comingg!! and that's on Godd🤗😇",
  Learning: "Knowledge is powerr!!, and we sure do love powerr😌😁",
  Hopeful: "Knowing God's in control😎"
};

moodButtons.forEach(button => {
  button.addEventListener('click', function() {
    const mood = this.getAttribute('data-mood');

    moodDisplay.innerHTML = `
    <span style="font-size: 40px;">${this.textContent.split('')[0]}</span><br>
    ${moodMessages[mood]}
    `;

    count++;
    counterDisplay.textContent = `Moods tracked today: ${count}`;

    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
      this.style.transform = '';
    }, 200);
 
  });
});


resetBtn.addEventListener('click', function() {
  count = 0;
  moodDisplay.textContent = 'Select a mood above!';
  counterDisplay.textContent = 'Moods tracked today: 0 times';


  this.textContent = 'Reset!';
  this.style.background = '#2ed573';
  setTimeout(() => {
    this.textContent = 'Reset Day';
    this.style.background = '#ff4757';
  }, 500 );
});

document.addEventListener('keydown', function(event){
  if (event.key >= '1' && event.key <= '5') {
    const index = parseInt(event.key) - 1;
    if (moodButtons[index]) {
      moodButtons[index].click();
    }
  }
  if (event.key === 'r' || event.key === 'R') {
   resetBtn.click();
  }
});



