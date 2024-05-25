const mongoose = require('mongoose');
const itemModel = require('./models/item.js');
const connectDB = require('./db.js');

const seedData = async () => {
  await connectDB();

  // Définir les données à insérer
  const fighters = [
    {
      nom: "Cyril Gane",
      age: 31,
      description: "Cyril Gane est un combattant français de MMA et de kickboxing. Avec son style fluide et technique, il est devenu l'un des meilleurs poids lourds de l'UFC. Sa carrière sportive impressionnante l'a vu remporter plusieurs victoires par KO et soumission, démontrant sa polyvalence et son talent sur le ring. En dehors de sa carrière de combattant, Gane est également connu pour son attitude humble et son dévouement à son art.",
      style: "Polyvalent",
      image: "https://www.leparisien.fr/resizer/GtrxBLDPy-sXigowDWR9k4wLws8=/932x582/cloudfront-eu-central-1.images.arcpublishing.com/leparisien/6IDFM3NW7BGCFKBXQJ4PEBMSVE.jpg",
      flag: "https://media.cdnws.com/_i/4335/290/359/92/drapeau-france-2.png",
      video: "https://youtu.be/Id8G_VaN88o?si=bfYXcAtK1S_eiWx9"
    },
    {
      nom: "Cédric Doumbé",
      age: 31,
      description: "Cédric Doumbé est un combattant français de kickboxing et de muay thai, réputé pour son style flamboyant et sa capacité à contrôler le rythme du combat. Il est connu pour sa vitesse, sa précision et sa variété de coups, ce qui lui a permis de devenir l'un des champions les plus titrés de la discipline. En dehors du ring, Doumbé est également un personnage charismatique et un modèle pour de nombreux jeunes athlètes.",
      style: "Stricker",
      image: "https://static.cnews.fr/sites/default/files/styles/image_750_422/public/mma_cedric_doumbe_pret_a_mettre_ko_au_premier_round_conor_mcgregor_664504bd0a524_0.jpg?itok=2VkztaZV",
      flag: "https://media.cdnws.com/_i/4335/290/359/92/drapeau-france-2.png",
      video: "https://youtu.be/RNhv4EylKTw?si=WkuZHd81-2Almy2A"
    },
    {
      nom: "Gervonta Davis",
      age: 27,
      description: "Gervonta Davis est un boxeur américain, invaincu dans sa catégorie de poids légers. Surnommé 'Tank' pour sa puissance de frappe, Davis est un combattant redouté sur le ring. Avec son style agressif et sa vitesse de frappe, il a remporté plusieurs titres mondiaux et est considéré comme l'un des meilleurs boxeurs de sa génération. En dehors du ring, Davis est également connu pour son engagement envers sa communauté et son soutien aux jeunes boxeurs en herbe.",
      style: "dangereux",
      image: "https://images.bfmtv.com/CgNkz0E9xHn7r1adrw6Q0PoDy30=/0x45:2048x1197/images/Gervonta-Davis-1622384.jpg",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png",
      video: "https://youtu.be/s0SJgrgQju0?si=oxut7AqbMcxq3jxi"
    },
    {
      nom: "Francis Ngannou",
      age: 35,
      description: "Francis Ngannou est un combattant camerounais de MMA, actuellement champion poids lourds de l'UFC. Avec sa puissance de frappe phénoménale et son style destructeur, Ngannou est l'un des combattants les plus redoutés de sa catégorie. Son ascension fulgurante dans le monde du MMA, de son passé humble en Afrique à sa conquête du titre mondial, en a fait une figure emblématique du sport. En dehors du ring, Ngannou est également impliqué dans des projets caritatifs visant à aider sa communauté d'origine.",
      style: "Stricker",
      image: "https://media.ouest-france.fr/v1/pictures/MjAyMzEwOGRhOTIyNWU2OTdkYTI4OWRlNzlkZGU0MDVhODUxYTg?width=1260&height=708",
      flag: "https://img.freepik.com/photos-premium/drapeau-cameroun-soie-close-up-background_406939-120.jpg",
      video: "https://youtu.be/jLqyRdwDzBQ?si=_NgIoHKvSc-YdnwT"
    },
    {
      nom: "Leon Edwards",
      age: 30,
      description: "Leon Edwards est un combattant britannique de MMA, connu pour sa polyvalence et son intelligence tactique sur le ring. Avec son style technique et son habileté à utiliser une variété de techniques de combat, Edwards est un adversaire redoutable pour tout combattant de sa catégorie. Son parcours professionnel a été marqué par des victoires impressionnantes et une progression constante vers les sommets de sa discipline.",
      style: "Stricker",
      image: "https://lasueur.com/wp-content/uploads/2023/11/leon-edwards-projet-ufc-296.jpeg",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Flag_of_England.svg/langfr-225px-Flag_of_England.svg.png",
      video: "https://youtu.be/c8zWLXRMuEs?si=STIUUVPbUldFOcVw"
    },
    {
      nom: "Khamzat Chimaev",
      age: 28,
      description : "Khamzat Chimaev est un combattant suédois d'origine tchétchène, connu pour son style explosif et sa domination sur le ring. ",
      style : "explosif",
      image : "https://s.france24.com/media/display/874e6a00-b70b-11ec-ae1b-005056bfb2b6/w:980/p:16x9/000_1VS6ME.jpg",
      flag : "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/1280px-Flag_of_Russia.svg.png",
      video : "https://youtu.be/hgBTZz0RsMg?si=tin7k49pJ5B8yyID"
    }
  ];

  try {
    await itemModel.insertMany(fighters);
    console.log("Data successfully seeded!");
    process.exit();
  } catch (error) {
    console.error("Error seeding data: ", error);
    process.exit(1);
  }
};

seedData();