# Christian Lirette Code Challenge

Great job on your project, Christian. Since we were not able to sync up and review your project together, we want to give you the opportunity to demonstrate your understanding of JavaScript in an asynchronous code challenge as an alternative to the Project Review. You will have 24 hours after acknowledging the receipt of this code challenge to complete and submit it. By reading this message, you are acknowledging that you have received these instructions and should begin working as soon as possible.

## Getting started

1. Read *all* of the instructions carefully.

2. Fork and clone the following repository onto your local machine: [Repo Link](https://github.com/thompsonplyler/basic-html-project)

## Once you have finished

Commit and push your changes to your fork like you would after completing a lab using the following commands in the code challenge directory:

- `git add .`
- `git commit -m "Completed assignment"`
- `git push`

## Goal of This Challenge

Filter the (supplied) Pokemon array and log the results in the browser's console. (You will **NOT** need to render the results to the DOM)

## Deliverables

1. As a user, I should be able to select a Pokemon type from a drop down list. (code supplied below)

2. As a user, I should see a log in the browser's console of an array containing only Pokemon objects that match the selection from the dropdown. For example, if the 'grass' type Pokemon is selected in the dropdown, I should only see grass type Pokemon objects in the array logged in the browser's console. Ex: `[{"name": "ivysaur","type": "grass"}, {"name": "bulbasaur","type": "grass"}]`

3. Copy the following code below in your code challenge's JavaScript file to get started (See starter code below):

```javascript
const pokeTypes = [
  "normal",
  "fighting",
  "poison",
  "ground",
  "rock",
  "bug",
  "ghost",
  "fire",
  "water",
  "grass",
  "electric",
  "psychic",
  "ice",
];

const dropDown = document.createElement("select");

pokeTypes.forEach((type) => {
  const option = document.createElement("option");
  option.textContent = type;
  dropDown.append(option);
});

dropDown.addEventListener("change", (e) => {
  console.log(e.target.value);
  // Code your solution here:



});

document.body.append(dropDown);
```

4. Copy and paste the following array of Pokemon objects into your JavaScript file as well. This is the array that you will be filtering. 

```javascript
const pokemon = [
  {
    name: "ivysaur",
    abilities: ["overgrow", "chlorophyll"],
    type: "grass",
    id: 1,
  },
  {
    name: "wartortle",
    abilities: ["torrent", "rain-dish"],
    type: "water",
    id: 2,
  },
  {
    name: "venusaur",
    abilities: ["overgrow", "chlorophyll"],
    type: "grass",
    id: 3,
  },
  {
    name: "charmeleon",
    abilities: ["blaze", "solar-power"],
    type: "fire",
    id: 4,
  },
  {
    name: "charmander",
    abilities: ["blaze", "solar-power"],
    type: "fire",
    id: 5,
  },
  {
    name: "charizard",
    abilities: ["blaze", "solar-power"],
    type: "fire",
    id: 6,
  },
  {
    name: "blastoise",
    abilities: ["torrent", "rain-dish"],
    type: "water",
    id: 7,
  },
  {
    name: "squirtle",
    abilities: ["torrent", "rain-dish"],
    type: "water",
    id: 8,
  },
  {
    name: "caterpie",
    abilities: ["shield-dust", "run-away"],
    type: "bug",
    id: 9,
  },
  {
    name: "metapod",
    abilities: ["shed-skin"],
    type: "bug",
    id: 10,
  },
  {
    name: "butterfree",
    abilities: ["compound-eyes", "tinted-lens"],
    type: "bug",
    id: 11,
  },
  {
    name: "weedle",
    abilities: ["shield-dust", "run-away"],
    type: "bug",
    id: 12,
  },
  {
    name: "kakuna",
    abilities: ["shed-skin"],
    type: "bug",
    id: 13,
  },
  {
    name: "beedrill",
    abilities: ["swarm", "sniper"],
    type: "bug",
    id: 14,
  },
  {
    name: "pidgey",
    abilities: ["keen-eye", "tangled-feet", "big-pecks"],
    type: "normal",
    id: 15,
  },
  {
    name: "pidgeotto",
    abilities: ["keen-eye", "tangled-feet", "big-pecks"],
    type: "normal",
    id: 16,
  },
  {
    name: "pidgeot",
    abilities: ["keen-eye", "tangled-feet", "big-pecks"],
    type: "normal",
    id: 17,
  },
  {
    name: "rattata",
    abilities: ["run-away", "guts", "hustle"],
    type: "normal",
    id: 18,
  },
  {
    name: "raticate",
    abilities: ["run-away", "guts", "hustle"],
    type: "normal",
    id: 19,
  },
  {
    name: "spearow",
    abilities: ["keen-eye", "sniper"],
    type: "normal",
    id: 20,
  },
  {
    name: "fearow",
    abilities: ["keen-eye", "sniper"],
    type: "normal",
    id: 21,
  },
  {
    name: "arbok",
    abilities: ["intimidate", "shed-skin", "unnerve"],
    type: "poison",
    id: 22,
  },
  {
    name: "ekans",
    abilities: ["intimidate", "shed-skin", "unnerve"],
    type: "poison",
    id: 23,
  },
  {
    name: "pikachu",
    abilities: ["static", "lightning-rod"],
    type: "electric",
    id: 24,
  },
  {
    name: "raichu",
    abilities: ["static", "lightning-rod"],
    type: "electric",
    id: 25,
  },
  {
    name: "sandshrew",
    abilities: ["sand-veil", "sand-rush"],
    type: "ground",
    id: 26,
  },
  {
    name: "sandslash",
    abilities: ["sand-veil", "sand-rush"],
    type: "ground",
    id: 27,
  },
  {
    name: "nidoran-f",
    abilities: ["poison-point", "rivalry", "hustle"],
    type: "poison",
    id: 28,
  },
  {
    name: "nidorina",
    abilities: ["poison-point", "rivalry", "hustle"],
    type: "poison",
    id: 29,
  },
  {
    name: "nidoqueen",
    abilities: ["poison-point", "rivalry", "sheer-force"],
    type: "poison",
    id: 30,
  },
  {
    name: "nidoran-m",
    abilities: ["poison-point", "rivalry", "hustle"],
    type: "poison",
    id: 31,
  },
  {
    name: "alakazam",
    abilities: ["synchronize", "inner-focus", "magic-guard"],
    type: "psychic",
    id: 32,
  },
  {
    name: "machop",
    abilities: ["guts", "no-guard", "steadfast"],
    type: "fighting",
    id: 33,
  },
  {
    name: "machoke",
    abilities: ["guts", "no-guard", "steadfast"],
    type: "fighting",
    id: 34,
  },
  {
    name: "bellsprout",
    abilities: ["chlorophyll", "gluttony"],
    type: "grass",
    id: 35,
  },
  {
    name: "victreebel",
    abilities: ["chlorophyll", "gluttony"],
    type: "grass",
    id: 36,
  },
  {
    name: "tentacool",
    abilities: ["clear-body", "liquid-ooze", "rain-dish"],
    type: "water",
    id: 37,
  },
  {
    name: "tentacruel",
    abilities: ["clear-body", "liquid-ooze", "rain-dish"],
    type: "water",
    id: 38,
  },
  {
    name: "geodude",
    abilities: ["rock-head", "sturdy", "sand-veil"],
    type: "rock",
    id: 39,
  },
  {
    name: "graveler",
    abilities: ["rock-head", "sturdy", "sand-veil"],
    type: "rock",
    id: 40,
  },
  {
    name: "golem",
    abilities: ["rock-head", "sturdy", "sand-veil"],
    type: "rock",
    id: 41,
  },
  {
    name: "ponyta",
    abilities: ["run-away", "flash-fire", "flame-body"],
    type: "fire",
    id: 42,
  },
  {
    name: "rapidash",
    abilities: ["run-away", "flash-fire", "flame-body"],
    type: "fire",
    id: 43,
  },
  {
    name: "slowpoke",
    abilities: ["oblivious", "own-tempo", "regenerator"],
    type: "water",
    id: 44,
  },
  {
    name: "slowbro",
    abilities: ["oblivious", "own-tempo", "regenerator"],
    type: "water",
    id: 45,
  },
  {
    name: "magnemite",
    abilities: ["magnet-pull", "sturdy", "analytic"],
    type: "electric",
    id: 46,
  },
  {
    name: "magneton",
    abilities: ["magnet-pull", "sturdy", "analytic"],
    type: "electric",
    id: 47,
  },
  {
    name: "farfetchd",
    abilities: ["keen-eye", "inner-focus", "defiant"],
    type: "normal",
    id: 48,
  },
  {
    name: "doduo",
    abilities: ["run-away", "early-bird", "tangled-feet"],
    type: "normal",
    id: 49,
  },
  {
    name: "dodrio",
    abilities: ["run-away", "early-bird", "tangled-feet"],
    type: "normal",
    id: 50,
  },
  {
    name: "seel",
    abilities: ["thick-fat", "hydration", "ice-body"],
    type: "water",
    id: 51,
  },
  {
    name: "dewgong",
    abilities: ["thick-fat", "hydration", "ice-body"],
    type: "water",
    id: 52,
  },
  {
    name: "grimer",
    abilities: ["stench", "sticky-hold", "poison-touch"],
    type: "poison",
    id: 53,
  },
  {
    name: "muk",
    abilities: ["stench", "sticky-hold", "poison-touch"],
    type: "poison",
    id: 54,
  },
  {
    name: "shellder",
    abilities: ["shell-armor", "skill-link", "overcoat"],
    type: "water",
    id: 55,
  },
  {
    name: "cloyster",
    abilities: ["shell-armor", "skill-link", "overcoat"],
    type: "water",
    id: 56,
  },
  {
    name: "gastly",
    abilities: ["levitate"],
    type: "ghost",
    id: 57,
  },
];
```
