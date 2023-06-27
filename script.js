let myjoke = [
  {
    "category": "Programming",
    "type": "single",
    "joke": "Two C strings walk into a bar.\nThe bartender asks \"What can I get ya?\"\nThe first string says \"I'll have a gin and tonic.\"\nThe second string thinks for a minute, then says \"I'll take a tequila sunriseJF()#$JF(#)$(@J#()$@#())!*FNIN!OBN134ufh1ui34hf9813f8h8384h981h3984h5F!##@\"\nThe first string apologizes, \"You'll have to excuse my friend, he's not null-terminated.\"",
    "flags": {
      "nsfw": false,
      "religious": false,
      "political": false,
      "racist": false,
      "sexist": false,
      "explicit": false
    },
    "id": 28,
    "safe": true,
    "lang": "en"
  },
  {
    "category": "Misc",
    "type": "single",
    "joke": "My husband and I were happy for 20 years. And then we met.",
    "flags": {
      "nsfw": false,
      "religious": false,
      "political": false,
      "racist": false,
      "sexist": false,
      "explicit": false
    },
    "safe": true,
    "id": 273,
    "lang": "en"
  },
  {
    "category": "Misc",
    "type": "single",
    "joke": "I visited my friend at his new house. He told me to make myself at home. So I threw him out. I hate having visitors.",
    "flags": {
      "nsfw": false,
      "religious": false,
      "political": false,
      "racist": false,
      "sexist": false,
      "explicit": false
    },
    "safe": true,
    "id": 304,
    "lang": "en"
  },
  {
    "category": "Misc",
    "type": "single",
    "joke": "I went to the zoo the other day. There was only a dog in it – it was a shihtzu.",
    "flags": {
      "nsfw": false,
      "religious": false,
      "political": false,
      "racist": false,
      "sexist": false,
      "explicit": true
    },
    "safe": false,
    "id": 307,
    "lang": "en"
  },
  {
    "category": "Dark",
    "type": "single",
    "joke": "Nowadays people are so sensitive, you can't even say \"black paint\" anymore.\nInstead, you have to say \"Jamal, please paint the fence\".",
    "flags": {
      "nsfw": false,
      "religious": false,
      "political": false,
      "racist": true,
      "sexist": false,
      "explicit": false
    },
    "id": 133,
    "safe": false,
    "lang": "en"
  },
  {
    "category": "Pun",
    "type": "single",
    "joke": "I have these weird muscle spasms in my gluteus maximus.\nI figured out from my doctor that everything was alright:\nHe said \"Weird flex, butt okay.\"",
    "flags": {
      "nsfw": false,
      "religious": false,
      "political": false,
      "racist": false,
      "sexist": false,
      "explicit": false
    },
    "id": 82,
    "safe": false,
    "lang": "en"
  },
  {
    "category": "Programming",
    "type": "single",
    "joke": "Debugging is like being the detective in a crime movie where you're also the murderer at the same time.",
    "flags": {
      "nsfw": false,
      "religious": false,
      "political": false,
      "racist": false,
      "sexist": false,
      "explicit": false
    },
    "id": 42,
    "safe": true,
    "lang": "en"
  },
  {
    "category": "Programming",
    "type": "single",
    "joke": "The six stages of debugging:\n1. That can't happen.\n2. That doesn't happen on my machine.\n3. That shouldn't happen.\n4. Why does that happen?\n5. Oh, I see.\n6. How did that ever work?",
    "flags": {
      "nsfw": false,
      "religious": false,
      "political": false,
      "racist": false,
      "sexist": false,
      "explicit": false
    },
    "id": 123,
    "safe": true,
    "lang": "en"
  },
  {
    "category": "Misc",
    "type": "single",
    "joke": "Stop being homophobic and rude to the LGBTQ+ community. You should be thanking them for saving us plenty of room in heaven.",
    "flags": {
      "nsfw": false,
      "religious": true,
      "political": false,
      "racist": false,
      "sexist": false,
      "explicit": false
    },
    "id": 114,
    "safe": false,
    "lang": "en"
  },
  {
    "category": "Misc",
    "type": "single",
    "joke": "Never date a baker. They're too kneady.",
    "flags": {
      "nsfw": false,
      "religious": false,
      "political": false,
      "racist": false,
      "sexist": false,
      "explicit": false
    },
    "safe": true,
    "id": 271,
    "lang": "en"
  }
]
let index = Math.floor(Math.random() * (myjoke.length - 1))
document.getElementById("joke").innerHTML = myjoke[index].joke