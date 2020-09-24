const mongoose = require("mongoose");
const db = require("../models/");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/googlebooks"
);

const bookSeed = [
  {
    title: "A Game of Thrones",
    author: "George R.R. martin",
    description:
      "A Game of Thrones is the first novel in A Song of Ice and Fire, a series of fantasy novels by the American author George R. R. Martin. It was first published on August 1, 1996. The novel won the 1997 Locus Award and was nominated for both the 1997 Nebula Award and the 1997 World Fantasy Award.",
    image: "#",
    link: "#",
    date: new Date(Date.now())
  },
  {
    title: "A Clash of Kings",
    author: "George R.R. martin",
    description:
      "A Clash of Kings is the second novel in A Song of Ice and Fire, an epic fantasy series by American author George R. R. Martin expected to consist of seven volumes.",
    image: "#",
    link: "#",
    date: new Date(Date.now())
  },
  {
    title: "A Storm of Swords",
    author: "George R.R. martin",
    description:
      "A Storm of Swords is the third of seven planned novels in A Song of Ice and Fire, a fantasy series by American author George R. R. Martin. It was first published on August 8, 2000, in the United Kingdom, with a United States edition following in November 2000.",
    image: "#",
    link: "#",
    date: new Date(Date.now())
  },
  {
    title: "GoT: A Feast of Crows",
    author: "George R.R. martin",
    description:
      "A Feast for Crows is the fourth of seven planned novels in the epic fantasy series A Song of Ice and Fire by American author George R. R. Martin. The novel was first published on October 17, 2005, in the United Kingdom, with a United States edition following on November 8, 2005.",
    image: "#",
    link: "#",
    date: new Date(Date.now())
  },
  {
    title: "A Dance with Dragons",
    author: "George R.R. martin",
    description:
      "A Dance with Dragons is the fifth novel, of seven planned, in the epic fantasy series A Song of Ice and Fire by American author George R. R. Martin. In some areas, the paperback edition was published in two parts, titled Dreams and Dust and After the Feast.",
    image: "#",
    link: "#",
    date: new Date(Date.now())
  },
  {
    title: "The Winds of Winter",
    author: "George R.R. martin",
    description:
      "The Winds of Winter is the planned sixth novel in the epic fantasy series A Song of Ice and Fire by American writer George R. R. Martin. Martin believes the last two volumes of the series will total over 3,000 manuscript pages.",
    image: "#",
    link: "#",
    date: new Date(Date.now())
  },
  {
    title: "Eragon",
    author: "Christopher Paolini",
    description:
      "Eragon is the first book in The Inheritance Cycle by American fantasy writer Christopher Paolini. Paolini, born in 1983, wrote the novel while still in his teens. After writing the first draft for a year, Paolini spent a second year rewriting and fleshing out the story and characters. His parents saw the final manuscript and in 2001 decided to self-publish Eragon;[1] Paolini spent a year traveling around the United States promoting the novel. The book was discovered by novelist Carl Hiaasen, who got it re-published by Alfred A. Knopf. The re-published version was released on August 26, 2003.",
    image: "#",
    link: "#",
    date: new Date(Date.now())
  },
  {
    title: "Eldest",
    author: "Christopher Paolini",
    description:
      "Eldest is the second novel in the Inheritance Cycle by Christopher Paolini and the sequel to Eragon. Eldest was first published in hardcover on August 23, 2005, and was released in paperback in September 2006.[1] Eldest has been released in an audiobook format,[2] and as an ebook.[3] Like Eragon, Eldest became a New York Times bestseller.[3] A deluxe edition of Eldest was released on September 26, 2006, including new information and art by both the illustrator and the author.[4] Other editions of Eldest are translated into different languages",
    image: "#",
    link: "#",
    date: new Date(Date.now())
  },
  {
    title: "Brisingr",
    author: "Christopher Paolini",
    description:
      "Brisingr is the third novel in the Inheritance Cycle by Christopher Paolini. It was released on September 20, 2008. Originally, Paolini intended to conclude the then Inheritance Trilogy in three books, but during writing the third book he decided that the series was too complex to conclude in one book, because the single book would be close to 1,500 pages long.[1] A deluxe edition of Brisingr, which includes removed scenes and previously unseen art, was released on October 13, 2009.",
    image: "#",
    link: "#",
    date: new Date(Date.now())
  },
  {
    title: "Inheritance",
    author: "Christopher Paolini",
    description:
      "I plotted out the Inheritance series as a trilogy nine years ago, when I was fifteen. At that time, I never imagined I’d write all three books, much less that they would be published. When I finally delved into Book Three [Brisingr], it soon became obvious that the remainder of the story was far too big to fit in one volume. Having spent so long thinking about the series as a trilogy, it was difficult for me to realize that, in order to be true to my characters and to address all of the plot points and unanswered questions Eragon and Eldest raised, I needed to split the end of the series into two books. - Christopher Paolini's decision for fourth book for trilogy.",
    image: "#",
    link: "#",
    date: new Date(Date.now())
  },
  {
    title: "The Hobbit",
    author: "J. R. R. Tolkien",
    description: "The Hobbit, or There and Back Again is a children's fantasy novel by English author J. R. R. Tolkien. It was published on 21 September 1937 to wide critical acclaim, being nominated for the Carnegie Medal and awarded a prize from the New York Herald Tribune for best juvenile fiction. The book remains popular and is recognized as a classic in children's literature.",
    image: "#",
    link: "",
    date: new Date(Date.now())
  },
  {
    title: "The Fellowship of the Ring",
    author: "J. R. R. Tolkien",
    description: "Bilbo celebrates his 111th birthday and leaves the Shire, leaving the Ring to Frodo Baggins, his cousin[a] and heir.[T 4] Neither hobbit is aware of the Ring's nature, but the wizard Gandalf realises that it is a Ring of Power. Seventeen years later, Gandalf tells Frodo that he has confirmed that the Ring is the one lost by the Dark Lord Sauron long ago and counsels him to take it away from the Shire.[T 3] Gandalf leaves, promising to return by Frodo's birthday and accompany him on his journey, but fails to do so. Frodo sets out on foot, ostensibly moving to his new home in Crickhollow, accompanied by his gardener, Sam Gamgee, and his cousin, Pippin Took. They are pursued by mysterious Black Riders, but meet a passing group of Elves and spend the night with them.[T 5] The next day they take a short cut to avoid the Riders, and arrive at the farm of Farmer Maggot. He takes them to Bucklebury Ferry, where they meet their friend Merry Brandybuck who was looking for them.[T 6] When they reach the house at Crickhollow, Merry and Pippin reveal they know about the Ring and insist on travelling with Frodo and Sam.[T 7] They decide to shake off the Black Riders by cutting through the Old Forest. Merry and Pippin are trapped by Old Man Willow, an evil tree who controls much of the forest, but are rescued by the mysterious Tom Bombadil.[T 8][T 9] Leaving, they are caught by a barrow-wight, who traps them in a barrow on the downs. Frodo, awakening from the barrow-wight's spell, manages to call Bombadil, who frees them, and equips them with ancient swords from the barrow-wight's hoard.",
    image: "#",
    link: "",
    date: new Date(Date.now())
  },
  {
    title: "The Two Towers",
    author: "J. R. R. Tolkien",
    description: "Large Orcs, Uruk-hai, sent by Saruman and other Orcs sent by Sauron kill Boromir and capture Merry and Pippin.[T 24] Aragorn, Gimli and Legolas decide to pursue the Orcs taking Merry and Pippin to Saruman.[T 25] In the kingdom of Rohan, the Orcs are killed by Riders of Rohan, led by Éomer.[T 26] Merry and Pippin escape into Fangorn Forest, where they are befriended by Treebeard, the oldest of the tree-like Ents.[T 27] Aragorn, Gimli and Legolas track the hobbits to Fangorn. There they unexpectedly meet Gandalf.",
    image: "#",
    link: "",
    date: new Date(Date.now())
  },
  {
    title: "The Return of the King",
    author: "J. R. R. Tolkien",
    description: "Sauron sends a great army against Gondor. Gandalf arrives at Minas Tirith to warn Denethor of the attack,[T 45] while Théoden musters the Rohirrim to ride to Gondor's aid.[T 46] Minas Tirith is besieged; the Lord of the Nazgûl uses a battering-ram and the power of his Ring to destroy the city's gates.[T 47] Denethor, deceived by Sauron, falls into despair. He burns himself alive on a pyre, nearly taking his son Faramir with him.[T 48] Aragorn, accompanied by Legolas, Gimli and the Rangers of the North, takes the Paths of the Dead to recruit the Dead Men of Dunharrow, who are bound by a curse which denies them rest until they fulfil their ancient oath to fight for the King of Gondor.",
    image: "#",
    link: "",
    date: new Date(Date.now())
  }
];

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });