import { StaticImageData } from "next/image";
import photo1 from "./photos/Heres-What-it-Means-to-Be-a-Full-Stack-Developer.jpeg";
import photo2 from "./photos/books.webp";
import photo3 from "./photos/cofee-pen.jpg";
import photo4 from "./photos/coffee-books-craft-and-science-of-coffee.webp";
import photo5 from "./photos/coffee-books-craft-coffee.webp";
import photo6 from "./photos/developer-wallpaper.jpg";
import photo7 from "./photos/everyday-is-a-chance-to-be-better-6m (1).jpg";

export type WonderImage = {
  id: string;
  name: string;
  src: StaticImageData;
  photographer: string;
  location: string;
};

const wondersImages: WonderImage[] = [
  {
    id: "1",
    name: "FullStack Dev",
    src: photo1,
    photographer: "Photo by FullStack google",
    location: "US",
  },
  {
    id: "2",
    name: "Book",
    src: photo2,
    photographer: "Photo by booki google",
    location: "England",
  },
  {
    id: "3",
    name: "Coffee pen",
    src: photo3,
    photographer: "Photo by coffee pen",
    location: "France",
  },
  {
    id: "4",
    name: "Science",
    src: photo4,
    photographer: "Photo Craft by crafty people of science",
    location: "Russia",
  },
  {
    id: "5",
    name: "Crafto",
    src: photo5,
    photographer: "Photo Craft by crafty people",
    location: "England",
  },
  {
    id: "6",
    name: "Dev",
    src: photo6,
    photographer: "Photo by Dev google",
    location: "England",
  },
  {
    id: "7",
    name: "Coop",
    src: photo7,
    photographer: "Photo by BeBetter",
    location: "Canada",
  },
];

export default wondersImages;
