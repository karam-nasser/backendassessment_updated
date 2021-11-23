import express, { json, response } from 'express';

import cors from 'cors';

const app = express();

app.use(cors());


app.use(json());

app.get('/api/compliment', (_req, res) => {

  console.log('compliment');

  const compliments = [

    "Gee, you're a smart cookie!",

    'Cool shirt!',

    'Your Javascript skills are stellar.',

  ];

  // choose random compliment

  let randomIndex = Math.floor(Math.random()
* compliments.length);

  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);

});


app.get('/api/fortunes', (_req, res) => {

  console.log('fortunes');


  const fortunes = [

    'All the effort you are making will ultimately pay off.',

    'Better ask twice than lose yourself once.',

    'Courtesy begins in the home.',

    'Distance yourself from the vain.',

    'Do not be intimidated by the eloquence of others.',

    'Failure is the path of lease persistence.',

  ];


  // choose random compliment

  let randomIndex = Math.floor(Math.random()
* fortunes.length);

  let fortune = fortunes[randomIndex];

  // let fortune = fortunes[randomIndex];

  console.log(fortune);

  res.status(200).send(fortune);

});

app.get('/api/encourage', (_req, res) => {

    console.log('encourage');
  
    const encouragement = [
  
      "You make your own luck, if you stay at it enough",
  
      'The means of learning are abundant, the desire to learn is scarce',
   
      'A fit body, a calm mind, a house full of love: all must be earned',
  
    ];
  
    // choose random encouragement
  
    let randomIndex = Math.floor(Math.random()
  * encouragement.length);
  
    let randomEncouragement = encouragement[randomIndex];

    console.log(randomEncouragement);
  
    res.status(200).send(randomEncouragement);
  
  });


app.post('/api/yourmood/', (req, res) => {

  const inspirations = [

    'inspire me 1',

    'inspire me 2',

    'inspire me 3',

    'inspire me 4',

    'inspire me 5',

  ];

  const encouragements = [

    'encourage me 1',

    'encourage me 2',

    'encourage me 3',

    'encourage me 4',

    'encourage me 5',

  ];

  const philosophicals = [

    'philosophical 1',

    'philosophical 2',

    'philosophical 3',

    'philosophical 4',

    'philosophical 5',

  ];

  const spirituals = [

    'spiritual 1',

    'spiritual 2',

    'spiritual 3',

    'spiritual 4',

    'spiritual 5',

  ];

  const randoms = ['random 1', 'random 2', 'random 3', 'random 4', 'random 5'];

  // console.log('your mood path');

  const { mood }
= req.query;

  console.log(mood);

  if (mood === 'inspiration') moodArr = inspirations;

  else if (mood === 'encouragement') moodArr = encouragements;

  else if (mood === 'philosophical') moodArr = philosophicals;

  else if (mood === 'spiritual') moodArr = spirituals;

  else moodArr = randoms;

  console.log(moodArr);

  let randIndex = Math.floor(Math.random()
* moodArr.length);

  console.log(randIndex);

  let quote = moodArr[randIndex];

  console.log(quote);

  res.status(200).send(quote);

  //11/21 .delete(ADDED)
  
  app.delete('api/yourmood/random 2/', (_req, res) => {

  let inspirations  = moodArr.randoms.mood
  for (let i = 0; i < users.length; i++) {
    if (mood[i].moodArray === inspirations ) {
      mood.slice(i, 1)
      res.status(200).send(mood)
    }
  }
})

//11/21 .put(Added)

app.put('/api/yourmood/', (_req, res) => {

  let spirituals  = mood.randoms.mood
  for (let i = 0; i < users.length; i++) {
    if (mood[i].moodArray === spirituals) {
      mood[i].moodArray = spirituals
      res.status(200).send(mood)
    }
  }
 

app.listen(4000, () => console.log('Server running on 4000'));