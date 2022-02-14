import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
      name: "Keep Going",
      artist: "Swørn",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9222",
      color: ["#b73573", "#490f4c"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Fox",
      artist: "Swørn",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9224",
      color: ["#b73573", "#490f4c"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Upset (hold it in)",
      artist: "Swørn",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=7925",
      color: ["#b73573", "#490f4c"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Reflection",
      artist: "Swørn",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9228",
      color: ["#b73573", "#490f4c"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Everlight",
      artist: "Parkbench Epiphany",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/11/4c9682ee612a3b8ef51de286c49b5489408e9257-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=27501",
      color: ["#f5999a", "#48616e"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Waiting",
      artist: "Parkbench Epiphany",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/11/4c9682ee612a3b8ef51de286c49b5489408e9257-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=27504",
      color: ["#f5999a", "#48616e"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Turbulence",
      artist: "Parkbench Epiphany",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/11/4c9682ee612a3b8ef51de286c49b5489408e9257-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=27503",
      color: ["#f5999a", "#48616e"],
      id: uuidv4(),
      active: false,
    },
  ];
}

export default chillHop;
