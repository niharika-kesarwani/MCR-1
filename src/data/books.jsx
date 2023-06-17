import { shelvesConstants } from "../constants/books-constants";

const { CURRENTLY_READING, WANT_TO_READ, READ } = shelvesConstants;

export const books = [
  {
    _id: "62f89fcdd3f0aa3df7ca94e1",
    id: 1,
    title: "Harry Potter Complete Set",
    author: "J.K. Rowling",
    genres: ["Fiction", "Fantasy", "Young Adult", "Adventure", "Childrens"],
    coverImg:
      "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780545162074_p3_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
    shelf: CURRENTLY_READING,
  },
  {
    _id: "62f89fcdd3f0aa3df7ca94e5",
    id: 2,
    title: "7 Mindsets for Success, Happiness and Fulfilment",
    author: "Swami Mukundananda",
    genres: [
      "Non-Fiction",
      "Spirituality",
      "Self Help",
      "Philosophy",
      "Psychology",
    ],
    coverImg:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1569209892l/51987423._SX318_SY475_.jpg",
    shelf: WANT_TO_READ,
  },
  {
    _id: "62f89fcdd3f0aa3df7ca94e9",
    id: 3,
    title: "Love on the Brain",
    author: "Ali Hazelwood",
    genres: ["Romance", "Contemporary Romance", "Adult", "Fiction", "Academic"],
    coverImg:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1642069168l/59571699._SY475_.jpg",
    shelf: READ,
  },
  {
    _id: "62f89fcdd3f0aa3df7ca94ed",
    id: 4,
    title: "Why We Sleep: Unlocking the Power of Sleep and Dreams",
    author: "Matthew Walker",

    genres: [
      "Non-Fiction",
      "Neuroscience",
      "Health",
      "Psychology",
      "Self Help",
    ],
    coverImg:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1556604137l/34466963._SY475_.jpg",
    shelf: CURRENTLY_READING,
  },
  {
    _id: "62f89fcdd3f0aa3df7ca94f1",
    id: 5,
    title: "The Krishna Key",
    author: "Ashwin Sanghi",

    genres: ["Fiction", "Thriller", "Mythology", "History", "Mystery"],
    coverImg:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1341289060l/15733523.jpg",
    shelf: WANT_TO_READ,
  },
  {
    _id: "62f89fcdd3f0aa3df7ca94f5",
    id: 6,
    title: "Atomic Habits",
    author: "James Clear",

    genres: ["Non-Fiction", "Health", "Self Help", "Philosophy", "Science"],
    coverImg:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1535115320l/40121378._SY475_.jpg",
    shelf: READ,
  },
  {
    _id: "62f89fcdd3f0aa3df7ca94f9",
    id: 7,
    title: "Attitude Is Everything",
    author: "Jeff Keller",
    genres: [
      "Non-Fiction",
      "Self Help",
      "Personal Development",
      "Leadership",
      "Motivational",
    ],
    coverImg:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1482649723l/33561786._SY475_.jpg",
    shelf: CURRENTLY_READING,
  },
  {
    _id: "62f89fcdd3f0aa3df7ca94fd",
    id: 8,
    title: "The Book Theif",
    author: "Markus Zusak",

    genres: ["History", "Fiction", "Young Adult", "Classics", "War"],
    coverImg:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1522157426l/19063._SY475_.jpg",
    shelf: WANT_TO_READ,
  },
  {
    _id: "62f89fcdd3f0aa3df7ca9501",
    id: 9,
    title: "The Da Vinci Code",
    author: "Dan Brown",

    genres: ["Fiction", "Mystery", "Thriller", "Suspense", "Adventure"],
    coverImg:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1579621267l/968.jpg",
    shelf: READ,
  },
  {
    _id: "62f89fcdd3f0aa3df7ca9505",
    id: 10,
    title: "Lean In: Women, Work, and the Will to Lead",
    author: "Sheryl Sandberg",

    genres: [
      "Non-Fiction",
      "Feminism",
      "Leadership",
      "Business",
      "Autobiography",
    ],
    coverImg:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1630483761l/16071764._SY475_.jpg",
    shelf: CURRENTLY_READING,
  },
  {
    _id: "62f89fcdd3f0aa3df7ca9509",
    id: 11,
    title: "Divergent Series Complete Set",
    author: "Veronica Roth",
    genres: ["Dystopian", "Fiction", "Fantasy", "Romance", "Young Adult"],
    coverImg:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1372682053l/17383994.jpg",
    shelf: WANT_TO_READ,
  },
];
