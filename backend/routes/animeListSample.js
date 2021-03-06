const data = [
    {
      
      "name": "Naruto: Shippuuden",
      "description": "It has been two and a half years since Naruto Uzumaki left Konohagakure, the Hidden Leaf Village, for intense training following events which fueled his desire to be stronger. Now Akatsuki, the mysterious organization of elite rogue ninja, is closing in on their grand plan which may threaten the safety of the entire shinobi world.",
      "rating": "8.16",
      "episode": 500,
      "category": "Animation | Drama | Adventure",
      "studio": "Studio Pierrot",
      "img": "https://cdn.myanimelist.net/images/anime/6/54815.jpg"
    },
    {
      "name": "One Piece",
      "description": "Gol D. Roger was known as the 'Pirate King',the strongest and most infamous being to have sailed the Grand Line. The capture and death of Roger by the World Government brought a change throughout the world. His last words before his death revealed the existence of the greatest treasure in the world, One Piece. It was this revelation that brought about the Grand Age of Pirates, men who dreamed of finding One Piece—which promises an unlimited amount of riches and fame—and quite possibly the pinnacle of glory and the title of the Pirate King.",
      "rating": "8.54",
      "episode": 700,
      "category": "Animation | Drama | Adventure",
      "studio": "Toei Animation",
      "img": "https://cdn.myanimelist.net/images/anime/2/79900.jpg"
    },
    {
      "name": "Attack on Titan",
      "description": "Centuries ago, mankind was slaughtered to near extinction by monstrous humanoid creatures called titans, forcing humans to hide in fear behind enormous concentric walls. What makes these giants truly terrifying is that their taste for human flesh is not born out of hunger but what appears to be out of pleasure. To ensure their survival, the remnants of humanity began living within defensive barriers, resulting in one hundred years without a single titan encounter. However, that fragile calm is soon shattered when a colossal titan manages to breach the supposedly impregnable outer wall, reigniting the fight for survival against the man-eating abominations.",
      "rating": "8.50",
      "episode": 500,
      "category": "Animation | Drama | Adventure",
      "studio": "Wit Studio",
      "img": "https://cdn.myanimelist.net/images/anime/6/26770.jpg"
    },
    {
      "name": "Monster",
      "description": "It has been two and a half years since Naruto Uzumaki left Konohagakure, the Hidden Leaf Village, for intense training following events which fueled his desire to be stronger. Now Akatsuki, the mysterious organization of elite rogue ninja, is closing in on their grand plan which may threaten the safety of the entire shinobi world.",
      "rating": "8.16",
      "episode": 70,
      "category": "Animation | Drama | Adventure",
      "studio": "Madhouse",
      "img": "https://cdn.myanimelist.net/images/anime/3/65151.jpg"
    },
    {
      "name": "Death Note",
      "description": "It has been two and a half years since Naruto Uzumaki left Konohagakure, the Hidden Leaf Village, for intense training following events which fueled his desire to be stronger. Now Akatsuki, the mysterious organization of elite rogue ninja, is closing in on their grand plan which may threaten the safety of the entire shinobi world.",
      "rating": "8.16",
      "episode": 500,
      "category": "Animation | Adventure",
      "studio": "Madhouse",
      "img": "https://cdn.myanimelist.net/images/anime/8/81162.jpg"
    },
    {
      "name": "Violet Evergarden",
      "description": "There are words Violet heard on the battlefield, which she cannot forget. These words were given to her by someone she holds dear, more than anyone else. She does not yet know their meaning.A certain point in time, in the continent of Telesis. The great war which divided the continent into North and South has ended after four years, and the people are welcoming a new generation.",
      "rating": "8.39",
      "episode": 14,
      "category": "Fantasy | Drama ",
      "studio": "Kyoto Animation",
      "img": "https://cdn.myanimelist.net/images/anime/7/38319.jpg"
    },
    {
      "name": "Tokyo Ghoul",
      "description": "",
      "rating": "8.01",
      "episode": 12,
      "category": "Action | Mystery",
      "studio": "Studio Pierrot",
      "img": "https://cdn.myanimelist.net/images/anime/1392/95935.jpg"
    },
    {
      "name": "Black Clover",
      "description": "Asta and Yuno were abandoned at the same church on the same day. Raised together as children, they came to know of the Wizard King—a title given to the strongest mage in the kingdom—and promised that they would compete against each other for the position of the next Wizard King. However, as they grew up, the stark difference between them became evident. While Yuno is able to wield magic with amazing power and control, Asta cannot use magic at all and desperately tries to awaken his powers by training physically.",
      "rating": "6.55",
      "episode": 51,
      "category": "Magic | Shounen | Adventure",
      "studio": "Studio Pierrot",
      "img": "https://cdn.myanimelist.net/images/anime/4/84552.jpg"
    },
    {
      "name": "Sword Art Online",
      "description": "In the year 2022, virtual reality has progressed by leaps and bounds, and a massive online role-playing game called Sword Art Online (SAO) is launched. With the aid of NerveGear technology, players can control their avatars within the game using nothing but their own thoughts.",
      "rating": "7.66",
      "episode": 25,
      "category": "Drama | Adventure",
      "studio": "A-1 Pictures",
      "img": "https://cdn.myanimelist.net/images/anime/7/83694.jpg"
    },
    {
      "name": "Nanatsu no Taizai",
      "description": "It has been two and a half years since Naruto Uzumaki left Konohagakure, the Hidden Leaf Village, for intense training following events which fueled his desire to be stronger. Now Akatsuki, the mysterious organization of elite rogue ninja, is closing in on their grand plan which may threaten the safety of the entire shinobi world.",
      "rating": "8.30",
      "episode": 24,
      "category": "Animation | Drama | Adventure",
      "studio": "A-1 Pictures",
      "img": "https://cdn.myanimelist.net/images/anime/5/88829.jpg"
    },
    {
      "name": "Kiseijuu: Sei no Kakuritsu",
      "description": "It has been two and a half years since Naruto Uzumaki left Konohagakure, the Hidden Leaf Village, for intense training following events which fueled his desire to be stronger. Now Akatsuki, the mysterious organization of elite rogue ninja, is closing in on their grand plan which may threaten the safety of the entire shinobi world.",
      "rating": "8.53",
      "episode": 24,
      "category": "Animation | Drama | Adventure",
      "studio": "Madhouse",
      "img": "https://cdn.myanimelist.net/images/anime/6/85893.jpg"
    },
    {
      "name": "Hunter x Hunter (2011)",
      "description": "It has been two and a half years since Naruto Uzumaki left Konohagakure, the Hidden Leaf Village, for intense training following events which fueled his desire to be stronger. Now Akatsuki, the mysterious organization of elite rogue ninja, is closing in on their grand plan which may threaten the safety of the entire shinobi world.",
      "rating": "9.11",
      "episode": 148,
      "category": "Animation | Drama | Adventure",
      "studio": "Madhouse",
      "img": "https://cdn.myanimelist.net/images/anime/1108/105484.jpg"
    }
]
module.exports = data;
