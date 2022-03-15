const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nickname is also acceptable :). ', (answer1) => {
  console.log(`Hello: ${answer1}`);
  rl.question('Whats\'s an activity you like to do? ', (answer2) => {
    console.log(`That ${answer2} sounds like fun!`);
    rl.question('What do you listen to while doing that activity ', (answer3) => {
      console.log(`Likes to listen to: ${answer3}`);
      rl.question('Which meal is your favourite? ', (answer4) => {
        console.log(`Favourite meal is: ${answer4}`);
        rl.question('What\'s your favourite thing to eat for that meal? ', (answer5) => {
          console.log(`Favourite food during that meal is: ${answer5}`);
          rl.question('Which is sport is your absolute favourite? ', (answer6) => {
            console.log(`Favourite sport is: ${answer6}`);
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer7) => {
              console.log(`That is a great answer: ${answer7}`);
              console.log(`${answer1} loves listening to ${answer3} while ${answer2}, devouring ${answer5} for ${answer4}, prefers ${answer6} over any ither sport and is amazing at ${answer7}.`)
              rl.close();
            })
          })
        })
      })
    })
  })
});