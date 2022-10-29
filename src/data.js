import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
      name: "Sorry",
      artist: "Swørn",
      cover: "https://i.scdn.co/image/a107c2856862918d8da5249f77ec83bec388d4cf",
      color: ["#F6DA79", "#322B54"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=8305",
      id: uuidv4(),
      active: true,
    },
    {
      name: "Flower",
      artist: "Swørn",
      cover: "https://i.scdn.co/image/ab67616d0000b273d804232b3fac29b5fd25fe26",
      color: ["#D58087", "#1F313D"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=7948",
      id: uuidv4(),
      active: false,
    },
    {
      name: "Spring",
      artist: "Miscél, Swørn",
      cover: "https://i.scdn.co/image/f519348c059d707ffebd4655c2bec42dea42b393",
      color: ["#EB5E5D", "#01395C"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9130",
      id: uuidv4(),
      active: false,
    },
    {
      name: "Barcade",
      artist: "Philanthrope, Ian Ewing",
      cover: "https://i.scdn.co/image/ab67616d0000b273c62484bfd9df5e76ac8b3721",
      color: ["#EFCDAA", "#2960B3"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=32849",
      id: uuidv4(),
      active: false,
    },
    {
      name: "Growing apart",
      artist: "Swørn",
      cover: "https://i.scdn.co/image/ab67616d0000b2739f0f86b54e7ca8870fac0ede",
      color: ["#C24D7A", "#190634"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9219",
      id: uuidv4(),
      active: false,
    },
  ];
}

export default chillHop;
