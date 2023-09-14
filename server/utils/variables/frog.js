const traitsArray = [
    { name: "evil", modifiers: [{ attributeName: "alignment", value: -5 }] },
    { name: "bad", modifiers: [{ attributeName: "alignment", value: -3 }] },
    { name: "means ill", modifiers: [{ attributeName: "alignment", value: -1 }] },
    {
        name: "heart of Gold",
        modifiers: [{ attributeName: "alignment", value: 5 }],
    },
    {
      name: "good",
      modifiers: [{ attributeName: "alignment", value: 3 }],
    },
    {
      name: "means well",
      modifiers: [{ attributeName: "alignment", value: 1 }],
    },
    { name: "lucky", modifiers: [{ attributeName: "luck", value: 3 }] },
    { name: "strong", modifiers: [{ attributeName: "strength", value: 3 }] },
    { name: "quick", modifiers: [{ attributeName: "speed", value: 3 }] },
    { name: "iron will", modifiers: [{ attributeName: "will", value: 3 }] },
    { name: "smart", modifiers: [{ attributeName: "intelligence", value: 3 }] },
    { name: "good jumper", modifiers: [{ attributeName: "jump", value: 3 }] },
    { name: "moist eyed", modifiers: [{ attributeName: "speed", value: -1 }] },
    {
        name: "speaks mouse",
        modifiers: [{ attributeName: "diplomacyMouse", value: 3 }],
    },
    {
        name: "speaks toad",
        modifiers: [{ attributeName: "diplomacyToad", value: 3 }],
    },
    {
        name: "rabid",
        modifiers: [
            { attributeName: "strength", value: 3 },
            { attributeName: "will", value: -3 },
            { attributeName: "intelligence", value: -3 },
        ],
    },
    {
        name: "shy",
        modifiers: [
            { attributeName: "diplomacy", value: -3 },
            { attributeName: "intelligence", value: 2 },
            { attributeName: "stealth", value: 2 },
        ],
    },
    {
        name: "passive-aggressive",
        modifiers: [{ attributeName: "diplomacy", value: -1 }],
    },
    { name: "weak willed", modifiers: [{ attributeName: "will", value: -3 }] },
    {
        name: "chemical dependency",
        modifiers: [{ attributeName: "will", value: -1 }],
    },
    { name: "gay", modifiers: [] },
    { name: "bi-curious", modifiers: [] },
    { name: "flamboyant", modifiers: [] },
    { name: "dark", modifiers: [{ attributeName: "alignment", value: -2 }] },
    { name: "sanguine", modifiers: [{ attributeName: "happiness", value: 2 }] },
    { name: "pretty", modifiers: [] },
    { name: "cute", modifiers: [] },
    { name: "night owl", modifiers: [] },
    { name: "nudist", modifiers: [] },
    { name: "greedy", modifiers: [{ attributeName: "alignment", value: -1 }] },
    { name: "jealous", modifiers: [{ attributeName: "alignment", value: -2 }] },
    {
        name: "pyromaniac",
        modifiers: [{ attributeName: "alignment", value: -1 }],
    },
    {
        name: "cannibal",
        modifiers: [{ attributeName: "alignment", value: -3 }],
    },
    { name: "nimble", modifiers: [{ attributeName: "speed", value: 3 }] },
    {
        name: "wimp",
        modifiers: [
            { attributeName: "strength", value: -2 },
            { attributeName: "will", value: -2 },
        ],
    },
    {
        name: "annoying croak",
        modifiers: [],
    },
    {
        name: "very neurotic",
        modifiers: [
            { attributeName: "will", value: -3 },
            { attributeName: "intelligence", value: 3 },
        ],
    },
    { name: "restless", modifiers: [{ attributeName: "speed", value: 1 }] },
    {
        name: "murderer",
        modifiers: [{ attributeName: "alignment", value: -3 }],
    },
    {
        name: "loves mice",
        modifiers: [{ attributeName: "diplomacyMouse", value: 2 }],
    },
    {
        name: "toad killer",
        modifiers: [{ attributeName: "bonusVsToad", value: 3 }],
    },
    {
        name: "toad lover",
        modifiers: [{ attributeName: "diplomacyToad", value: 2 }],
    },
    {
        name: "a frog amongst frogs",
        modifiers: [{ attributeName: "diplomacy", value: 2 }],
    },
    {
        name: "plague spreader",
        modifiers: [],
    },
    {
        name: "cocaine addiction",
        modifiers: [
            { attributeName: "will", value: -2 },
            { attributeName: "strength", value: 1 },
            { attributeName: "speed", value: 1 },
        ],
    },
    {
        name: "button presser",
        modifiers: [],
    },
    {
        name: "sexual deviant",
        modifiers: [],
    },
    {
        name: "forgetful",
        modifiers: [
            { attributeName: "intelligence", value: -2 },
            { attributeName: "diplomacy", value: 1 },
            { attributeName: "happiness", value: 1 },
        ],
    },
    { name: "lazy", modifiers: [{ attributeName: "speed", value: -2 }] },
    { name: "smart", modifiers: [{ attributeName: "intelligence", value: 3 }] },
    {
        name: "snappy dresser",
        modifiers: [{ attributeName: "diplomacy", value: 1 }],
    },
    {
        name: "talks too much",
        modifiers: [{ attributeName: "diplomacy", value: -1 }],
    },
    { name: "sneaky", modifiers: [{ attributeName: "stealth", value: 3 }] },
    {
        name: "ambivalent towards mice",
        modifiers: [{ attributeName: "bonusVsMouse", value: 1 }],
    },
    { name: "crazy", modifiers: [] },
    { name: "loves to cook", modifiers: [{ attributeName: "diplomacy", value: 2 }] },
    { name: "overweight", modifiers: [{ attributeName: "speed", value: -2 }] },
    { name: "classy", modifiers: [{ attributeName: "diplomacy", value: 2 }] },
    { name: "class act", modifiers: [{ attributeName: "diplomacy", value: 2 }] },
    {
        name: "prefers the company of newts",
        modifiers: [{ attributeName: "diplomacyNewt", value: 2 }],
    },
    {
        name: "frog about town",
        modifiers: [
          { attributeName: "diplomacy", value: 2 },
          { attributeName: "stealth", value: -2 },
        ],
    },
    { name: "hates toads", modifiers: [
      { attributeName: "bonusVsToad", value: 2 },
      { attributeName: "diplomacyToad", value: -2 },
    ] },
    {
        name: "people pleaser",
        modifiers: [
          { attributeName: "diplomacy", value: 1 },
          { attributeName: "will", value: -1 },
        ],
    },
    { name: "brave", modifiers: [
      { attributeName: "strength", value: 1 },
      { attributeName: "will", value: 2 },
    ] },
    {
        name: "descended from royalty",
        modifiers: [
          { attributeName: "diplomacy", value: 1 },
          { attributeName: "stealth", value: -1 },
          { attributeName: "happiness", value: -1 },
        ],
    },
    { name: "beautiful", modifiers: [{ attributeName: "diplomacy", value: 2 }] },
    { name: "sarcastic", modifiers: [{ attributeName: "diplomacy", value: -1 }] },
    {
        name: "mistrustful of humans",
        modifiers: [],
    },
    { name: "narcissistic", modifiers: [
      { attributeName: "diplomacy", value: -1 },
      { attributeName: "will", value: 1 },
    ] },
    {
        name: "holier than thou",
        modifiers: [{ attributeName: "diplomacy", value: -2 }],
    },
    {
        name: "friend of toads",
        modifiers: [
          { attributeName: "diplomacyToad", value: 2 },
          { attributeName: "bonusVsToad", value: -2 },
        ],
    },
];

module.exports = { traitsArray };
