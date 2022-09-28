const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const answers = {};
rl.question("What's your name? Nicknames are also acceptable :) ",  (a1) => {
  answers.name = a1;
  rl.question("What's an activity you like doing? ",  (a2) => {
    answers.activity = a2;
    rl.question("What do you listen to while doing that? ",  (a3) => {
      answers.track = a3;
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ",  (a4) => {
        answers.meal = a4;
        rl.question("What's your favourite thing to eat for that meal? ",  (a5) => {
          answers.food = a5;
          rl.question("Which sport is your absolute favourite? ",  (a6) => {
            answers.sport = a6;
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ",  (a7) => {
              answers.super = a7;
              rl.question("What's your goal in life? ",  (a8) => {
                answers.goal = a8;
                console.log(`${a1} loves to listen to ${a3} while ${a2}. After ${a2}, ${a1} loves ${a4} specifically the ${a5}. ${a1} loves to watch/play ${a6} and is great at ${a7}. Goal in life: ${a8}.`);
                rl.close();
              });
            });
          });
        });
      });
    });
  });
            
});