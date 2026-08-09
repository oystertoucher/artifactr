// Artifactr artifact data
// To add a new artifact: paste a new { ... } object below, before the closing ];
// Then commit the change on GitHub — the live site updates automatically.

const ITEMS = [
  {
    title:"The Rosetta Stone",
    wiki:"https://en.wikipedia.org/wiki/Rosetta_Stone",
    img:"https://commons.wikimedia.org/wiki/Special:FilePath/Rosetta_Stone_BW.jpeg",
    clue:["Ptolemaic Egypt","Granodiorite stele"],
    place:"Rashid, Egypt",
    lat:31.40, lng:30.42, century:-2,
    desc:"A royal decree issued at Memphis in 196 BCE, carved in three scripts. It resurfaced during military fortification work near the Nile Delta town of Rosetta and became the key to reading Egyptian hieroglyphs."
  },
  {
    title:"The Terracotta Army",
    wiki:"https://en.wikipedia.org/wiki/Terracotta_Army",
    img:"https://commons.wikimedia.org/wiki/Special:FilePath/51714-Terracota-Army.jpg",
    clue:["Qin Dynasty","Fired clay"],
    place:"Xi'an, China",
    lat:34.38, lng:109.28, century:-3,
    desc:"Thousands of life-sized soldiers buried to guard China's first emperor in the afterlife. Local farmers digging a well stumbled onto the pits in the 20th century, more than two thousand years after they were sealed."
  },
  {
    title:"Venus de Milo",
    wiki:"https://en.wikipedia.org/wiki/Venus_de_Milo",
    img:"https://commons.wikimedia.org/wiki/Special:FilePath/Venus_de_Milo_Louvre_Ma399_n4.jpg",
    clue:["Hellenistic Greece","Marble"],
    place:"Milos, Greece",
    lat:36.68, lng:24.43, century:-2,
    desc:"A marble figure of Aphrodite, missing both arms, unearthed by a farmer on a small Aegean island and quickly acquired for the French crown."
  },
  {
    title:"The Antikythera Mechanism",
    wiki:"https://en.wikipedia.org/wiki/Antikythera_mechanism",
    img:"https://commons.wikimedia.org/wiki/Special:FilePath/Fragments_of_the_Antikythera_Mechanism.jpg",
    clue:["Hellenistic Greece","Bronze gearwork"],
    place:"Antikythera, Greece",
    lat:35.87, lng:23.31, century:-1,
    desc:"A corroded lump of bronze gears recovered from a Roman-era shipwreck turned out to be an astronomical calculator centuries ahead of anything else known from antiquity."
  },
  {
    title:"The Sutton Hoo Helmet",
    wiki:"https://en.wikipedia.org/wiki/Sutton_Hoo_helmet",
    img:"https://commons.wikimedia.org/wiki/Special:FilePath/Sutton.hoo.helmet.jpg",
    clue:["Anglo-Saxon England","Iron and tinned bronze"],
    place:"Suffolk, England",
    lat:52.09, lng:1.34, century:7,
    desc:"Found in the ship burial of an Anglo-Saxon leader beneath a Suffolk field, this helmet remains the clearest image most people have of the 'Dark Ages.'"
  },
  {
    title:"Bust of Nefertiti",
    wiki:"https://en.wikipedia.org/wiki/Nefertiti_Bust",
    img:"https://commons.wikimedia.org/wiki/Special:FilePath/Nofretete_Neues_Museum.jpg",
    clue:["New Kingdom Egypt","Painted limestone"],
    place:"Amarna, Egypt",
    lat:27.65, lng:30.90, century:-14,
    desc:"Excavated from the studio of the royal sculptor Thutmose at Akhetaten, the pharaoh's short-lived new capital, and later shipped to Berlin, where it still draws controversy over its ownership."
  },
  {
    title:"The Parthenon Marbles",
    wiki:"https://en.wikipedia.org/wiki/Elgin_Marbles",
    img:"https://commons.wikimedia.org/wiki/Special:FilePath/Egastinai frieze Louvre MR825 detail.jpg",
    clue:["Classical Greece","Marble frieze"],
    place:"Athens, Greece",
    lat:37.97, lng:23.73, century:-5,
    desc:"Sculpted under the supervision of Phidias for the temple of Athena on the Acropolis, then removed to Britain in the early 1800s — a removal Greece still disputes today."
  },
  {
    title:"The Code of Hammurabi",
    wiki:"https://en.wikipedia.org/wiki/Code_of_Hammurabi",
    img:"https://commons.wikimedia.org/wiki/Special:FilePath/Détail du Code of Hammurabi, Sb 8 (16103433400).jpg",
    clue:["Babylonian Empire","Basalt stele"],
    place:"Susa, Iran",
    lat:32.19, lng:48.25, century:-18,
    desc:"Nearly 300 laws carved onto a towering black stele under Babylon's sixth king. Centuries later it was carried off as war plunder to Susa, where French excavators found it in pieces."
  },
  {
    title:"The Standard of Ur",
    wiki:"https://en.wikipedia.org/wiki/Standard_of_Ur",
    img:"https://commons.wikimedia.org/wiki/Special:FilePath/Standard_of_ur.jpg",
    clue:["Sumerian city-state","Shell, lapis lazuli and wood"],
    place:"Ur, Iraq",
    lat:30.96, lng:46.11, century:-26,
    desc:"A hollow wooden box inlaid with shell and lapis, showing scenes of war on one side and peace on the other. Found in a royal grave by archaeologist Leonard Woolley, its original purpose is still debated."
  },
  {
    title:"The Narmer Palette",
    wiki:"https://en.wikipedia.org/wiki/Narmer_Palette",
    img:"https://commons.wikimedia.org/wiki/Special:FilePath/Narmer_Palette.jpg",
    clue:["Predynastic Egypt","Carved siltstone"],
    place:"Hierakonpolis, Egypt",
    lat:25.10, lng:32.78, century:-31,
    desc:"A ceremonial cosmetics palette showing a king smiting an enemy, often read as a record of Egypt's unification. Discovered in a temple deposit at Hierakonpolis."
  },
  {
    title:"Venus of Willendorf",
    wiki:"https://en.wikipedia.org/wiki/Venus_of_Willendorf",
    img:"https://commons.wikimedia.org/wiki/Special:FilePath/Venus_von_Willendorf_01.jpg",
    clue:["Upper Paleolithic","Oolitic limestone"],
    place:"Willendorf, Austria",
    lat:48.33, lng:15.28, century:-240,
    desc:"A palm-sized carved figure of a woman, tinted with red ochre, unearthed by railway workers cutting through a terrace above the Danube."
  },
  {
    title:"The Gundestrup Cauldron",
    wiki:"https://en.wikipedia.org/wiki/Gundestrup_cauldron",
    img:"https://commons.wikimedia.org/wiki/Special:FilePath/Gundestrupkarret1.jpg",
    clue:["Iron Age Europe","Silver"],
    place:"Gundestrup, Denmark",
    lat:56.80, lng:9.52, century:-1,
    desc:"An elaborately decorated silver vessel found dismantled in a peat bog, its imagery blending Celtic and Thracian styles from opposite ends of Iron Age Europe."
  },
  {
    title:"The Oseberg Ship",
    wiki:"https://en.wikipedia.org/wiki/Oseberg_ship",
    img:"https://commons.wikimedia.org/wiki/Special:FilePath/Oseberg_ship_-_IMG_9186.jpg",
    clue:["Viking Age","Carved oak"],
    place:"Oseberg, Norway",
    lat:59.27, lng:10.42, century:9,
    desc:"A richly carved Viking ship hauled ashore and used as a burial chamber for two women of high status, preserved for over a thousand years in blue clay."
  },
  {
    title:"The Trundholm Sun Chariot",
    wiki:"https://en.wikipedia.org/wiki/Trundholm_sun_chariot",
    img:"https://commons.wikimedia.org/wiki/Special:FilePath/Trundholm_Sun_Chariot.jpg",
    clue:["Nordic Bronze Age","Cast bronze"],
    place:"Trundholm, Denmark",
    lat:55.92, lng:11.62, century:-14,
    desc:"A bronze horse pulling a gilded sun disk on spoked wheels, likely representing the sun's daily journey across the sky. Found by a farmer plowing a bog."
  },
  {
    title:"A Benin Bronze Plaque",
    wiki:"https://en.wikipedia.org/wiki/Benin_Bronzes",
    img:"https://commons.wikimedia.org/wiki/Special:FilePath/Benin_brass_plaque_01.jpg",
    clue:["Kingdom of Benin","Cast brass"],
    place:"Benin City, Nigeria",
    lat:6.34, lng:5.62, century:16,
    desc:"One of thousands of brass plaques that once lined the Oba's palace, cast by guild artisans to record the kingdom's history. Seized by a British force in 1897."
  },
  {
    title:"The Dead Sea Scrolls",
    wiki:"https://en.wikipedia.org/wiki/Dead_Sea_Scrolls",
    img:"https://commons.wikimedia.org/wiki/Special:FilePath/Qumran_pottery.jpg",
    clue:["Second Temple Judaism","Parchment and ink"],
    place:"Qumran, West Bank",
    lat:31.74, lng:35.46, century:-2,
    desc:"Ancient Hebrew and Aramaic texts sealed in clay jars inside desert caves, found by a Bedouin shepherd searching for a stray goat."
  },
  {
    title:"The Bayeux Tapestry",
    wiki:"https://en.wikipedia.org/wiki/Bayeux_Tapestry",
    img:"https://commons.wikimedia.org/wiki/Special:FilePath/BayeuxTapestryScene01.jpg",
    clue:["Norman Conquest","Wool embroidery on linen"],
    place:"Bayeux, France",
    lat:49.28, lng:-0.70, century:11,
    desc:"Seventy meters of embroidered linen narrating the Norman conquest of England in comic-strip fashion, most likely stitched in England for a Norman patron."
  },
  {
    title:"The Warka Vase",
    wiki:"https://en.wikipedia.org/wiki/Warka_Vase",
    img:"https://commons.wikimedia.org/wiki/Special:FilePath/Warka vase (background retouched).jpg",
    clue:["Uruk period","Carved alabaster"],
    place:"Uruk, Iraq",
    lat:31.32, lng:45.64, century:-32,
    desc:"A tall alabaster vessel carved in registers showing offerings to a goddess, among the earliest known works of narrative relief sculpture."
  },
  {
    title:"Priam's Treasure",
    wiki:"https://en.wikipedia.org/wiki/Priam%27s_Treasure",
    img:"https://commons.wikimedia.org/wiki/Special:FilePath/Priam's_treasure.jpg",
    clue:["Bronze Age Anatolia","Gold and silver"],
    place:"Hisarlik, Turkey",
    lat:39.96, lng:26.24, century:-25,
    desc:"A hoard of gold jewelry and vessels that excavator Heinrich Schliemann claimed belonged to the Homeric king of Troy, then smuggled out of the country."
  },
  {
    title:"The Pazyryk Carpet",
    wiki:"https://en.wikipedia.org/wiki/Pazyryk_carpet",
    img:"https://commons.wikimedia.org/wiki/Special:FilePath/Pazyryk_carpet.jpg",
    clue:["Scythian nomads","Wool pile weave"],
    place:"Altai Mountains, Russia",
    lat:50.75, lng:88.05, century:-3,
    desc:"The oldest known pile carpet in the world, preserved for over two thousand years by a freak deep freeze inside a frozen burial mound in the Altai Mountains."
  },
  {
    title:"The Poporo Quimbaya",
    wiki:"https://en.wikipedia.org/wiki/Quimbaya_artifacts",
    img:"https://commons.wikimedia.org/wiki/Special:FilePath/Poporo quimbaya.jpg",
    clue:["Quimbaya culture","Cast gold"],
    place:"Quimbaya, Colombia",
    lat:4.72, lng:-75.68, century:6,
    desc:"A gold vessel for storing powdered lime used with coca leaves, cast with remarkable technical precision by goldsmiths of the Cauca River valley."
  },
  {
    title:"The Dancing Girl of Mohenjo-daro",
    wiki:"https://en.wikipedia.org/wiki/Dancing_Girl_(sculpture)",
    img:"https://commons.wikimedia.org/wiki/Special:FilePath/Dancing girl of Mohenjo-daro.jpg",
    clue:["Indus Valley Civilization","Cast bronze"],
    place:"Mohenjo-daro, Pakistan",
    lat:27.3242, lng:68.1339, century:-25,
    desc:"A small bronze figure of a confident, bangled young woman, cast using the lost-wax method in one of the world's earliest cities — and among the first bronze castings ever found."
  },
  {
    title:"A Jōmon Dogū Figurine",
    wiki:"https://en.wikipedia.org/wiki/Dog%C5%AB",
    img:"https://commons.wikimedia.org/wiki/Special:FilePath/Dogu-Jomon.jpg",
    clue:["Jōmon culture","Fired clay"],
    place:"Aomori, Japan",
    lat:40.822, lng:140.699, century:-35,
    desc:"Enigmatic clay figures made by one of the world's earliest pottery-using cultures, often found deliberately broken — their exact ritual purpose is still debated."
  },
  {
    title:"The Lord of Sipán's Funerary Mask",
    wiki:"https://en.wikipedia.org/wiki/Lord_of_Sip%C3%A1n",
    img:"https://commons.wikimedia.org/wiki/Special:FilePath/Funerary mask, Sipán 01.jpg",
    clue:["Moche civilization","Hammered gold"],
    place:"Sipán, Peru",
    lat:-6.7725, lng:-79.6033, century:3,
    desc:"Part of the burial regalia of a Moche ruler found intact and unlooted in 1987 — one of the richest tombs ever excavated in the Western Hemisphere."
  },
  {
    title:"The Ife Head",
    wiki:"https://en.wikipedia.org/wiki/Bronze_Head_from_Ife",
    img:"https://commons.wikimedia.org/wiki/Special:FilePath/Arte yoruba, nigeria, testa da ife, 12-15mo secolo.JPG",
    clue:["Yoruba kingdom","Cast copper alloy"],
    place:"Ife, Nigeria",
    lat:7.4722, lng:4.5556, century:14,
    desc:"One of eighteen strikingly naturalistic royal heads found by accident during house construction, cast with a technical sophistication that stunned early European observers."
  },
  {
    title:"A Sanxingdui Bronze Mask",
    wiki:"https://en.wikipedia.org/wiki/Sanxingdui",
    img:"https://commons.wikimedia.org/wiki/Special:FilePath/Ancient Bronze Mask from Sanxingdui 3.jpg",
    clue:["Unknown Bronze Age culture","Cast bronze"],
    place:"Guanghan, China",
    lat:31.00, lng:104.22, century:-12,
    desc:"A mask with cartoonishly protruding eyes from a civilization entirely unknown to historians until a farmer's plow struck buried bronze in 1929."
  },
  {
    title:"The Golden Man of Issyk",
    wiki:"https://en.wikipedia.org/wiki/Issyk_kurgan",
    img:"https://commons.wikimedia.org/wiki/Special:FilePath/Golden Man (Issyk kurgan).jpg",
    clue:["Saka nomads","Gold-plated armor"],
    place:"Issyk, Kazakhstan",
    lat:43.30, lng:77.47, century:-5,
    desc:"A suit covered in thousands of gold plaques found in a steppe burial mound, discovered by chance during roadworks — possibly the armor of a young Scythian prince."
  },
  {
    title:"The Golden Mask of Tutankhamun",
    wiki:"https://en.wikipedia.org/wiki/Funerary_mask_of_Tutankhamun",
    img:"https://commons.wikimedia.org/wiki/Special:FilePath/Golden mask of Tutankhamun.jpg",
    clue:["New Kingdom Egypt","Gold and inlay"],
    place:"Valley of the Kings, Egypt",
    lat:25.7402, lng:32.6014, century:-14,
    desc:"The solid gold death mask of a minor pharaoh, found almost undisturbed in the Valley of the Kings — the tomb's obscurity is exactly why grave robbers never found it first."
  },
  {
    title:"The Cyrus Cylinder",
    wiki:"https://en.wikipedia.org/wiki/Cyrus_Cylinder",
    img:"https://commons.wikimedia.org/wiki/Special:FilePath/Cyrus Cylinder.jpg",
    clue:["Achaemenid Persia","Fired clay"],
    place:"Babylon, Iraq",
    lat:32.54, lng:44.42, century:-6,
    desc:"A clay cylinder inscribed after the Persian conquest of Babylon, sometimes called an early declaration of human rights for its account of restoring displaced peoples."
  },
  {
    title:"A Lamassu from Nimrud",
    wiki:"https://en.wikipedia.org/wiki/Lamassu",
    img:"https://commons.wikimedia.org/wiki/Special:FilePath/Lammasu2.jpg",
    clue:["Neo-Assyrian Empire","Carved alabaster"],
    place:"Nimrud, Iraq",
    lat:36.0994, lng:43.3264, century:-9,
    desc:"A colossal human-headed winged bull that once guarded an Assyrian king's palace gate, meant to be seen as five-legged — four in profile, but always standing firm from the front."
  },
  {
    title:"The Staffordshire Hoard",
    wiki:"https://en.wikipedia.org/wiki/Staffordshire_Hoard",
    img:"https://commons.wikimedia.org/wiki/Special:FilePath/Fragments from a helmet (Staffordshire Hoard).jpg",
    clue:["Anglo-Saxon England","Gold, silver, garnet"],
    place:"Staffordshire, England",
    lat:52.6553, lng:-1.9067, century:7,
    desc:"The largest hoard of Anglo-Saxon gold ever found, almost entirely war gear stripped of its wooden and leather fittings — found by a retiree with a metal detector in a farmer's field."
  },
  {
    title:"The Ardagh Chalice",
    wiki:"https://en.wikipedia.org/wiki/Ardagh_Hoard",
    img:"https://commons.wikimedia.org/wiki/Special:FilePath/Ardagh chalice.jpg",
    clue:["Early Christian Ireland","Silver, gold, enamel"],
    place:"Ardagh, Ireland",
    lat:52.4442, lng:-8.8508, century:8,
    desc:"An intricately decorated communion cup, found by two boys digging in a potato field who initially had no idea what they'd unearthed."
  },
  {
    title:"Lascaux Cave Paintings",
    wiki:"https://en.wikipedia.org/wiki/Lascaux",
    img:"https://commons.wikimedia.org/wiki/Special:FilePath/Lascaux_painting.jpg",
    clue:["Upper Paleolithic","Mineral pigment on rock"],
    place:"Dordogne, France",
    lat:45.05, lng:1.17, century:-170,
    desc:"A teenager chasing his dog into a hillside hole in 1940 found one of the largest galleries of Ice Age art ever seen, painted some 17,000 years earlier."
  },
  {
    title:"The Moai of Rapa Nui",
    wiki:"https://en.wikipedia.org/wiki/Moai",
    img:"https://commons.wikimedia.org/wiki/Special:FilePath/Moai_Rano_raraku.jpg",
    clue:["Rapa Nui culture","Carved volcanic tuff"],
    place:"Rapa Nui, Chile",
    lat:-27.12, lng:-109.29, century:13,
    desc:"Monumental stone figures carved from a single volcanic crater and moved across the island, likely representing ancestors watching over their communities."
  },
  {
    title:"An Olmec Colossal Head",
    wiki:"https://en.wikipedia.org/wiki/Olmec_colossal_heads",
    img:"https://commons.wikimedia.org/wiki/Special:FilePath/OlmecheadMNAH.jpg",
    clue:["Olmec civilization","Carved basalt"],
    place:"San Lorenzo, Mexico",
    lat:17.75, lng:-94.72, century:-12,
    desc:"A multi-ton basalt boulder carved into a portrait head, likely of a ruler, hauled many miles from a distant quarry with no wheels or draft animals."
  },
  {
    title:"The Gateway of the Sun",
    wiki:"https://en.wikipedia.org/wiki/Gate_of_the_Sun",
    img:"https://commons.wikimedia.org/wiki/Special:FilePath/Puerta del sol Tiwanaku.jpg",
    clue:["Tiwanaku civilization","Carved andesite"],
    place:"Tiwanaku, Bolivia",
    lat:-16.5544, lng:-68.6733, century:6,
    desc:"A single block of stone carved into a gateway near Lake Titicaca, likely serving an astronomical or calendrical function for a highland Andean civilization."
  },
  {
    title:"The Ajanta Cave Paintings",
    wiki:"https://en.wikipedia.org/wiki/Ajanta_Caves",
    img:"https://commons.wikimedia.org/wiki/Special:FilePath/A mural painting at Ajanta Caves.jpg",
    clue:["Gupta-era India","Mineral pigment on rock"],
    place:"Maharashtra, India",
    lat:20.5522, lng:75.7033, century:5,
    desc:"Elaborate Buddhist murals painted deep inside rock-cut caves, abandoned and swallowed by jungle until a British officer tiger-hunting stumbled onto them in 1819."
  },
  {
    title:"The Royal Game of Ur",
    wiki:"https://en.wikipedia.org/wiki/Royal_Game_of_Ur",
    img:"https://commons.wikimedia.org/wiki/Special:FilePath/Royal game of Ur,at the British Museum.jpg",
    clue:["Sumerian city-state","Wood, shell, lapis inlay"],
    place:"Ur, Iraq",
    lat:30.96, lng:46.11, century:-26,
    desc:"One of the oldest board games ever found, discovered in a royal tomb alongside dice and gaming pieces; a cuneiform tablet centuries later preserved rules for how it was played."
  },
  {
    title:"The Younger Memnon",
    wiki:"https://en.wikipedia.org/wiki/Younger_Memnon",
    img:"https://commons.wikimedia.org/wiki/Special:FilePath/BM, AES Egyptian Sulpture ~ Colossal bust of Ramesses II, the 'Younger Memnon' (1250 BC) (Room 4).jpg",
    clue:["New Kingdom Egypt","Carved granite"],
    place:"Luxor, Egypt",
    lat:25.7189, lng:32.6103, century:-13,
    desc:"A seven-ton granite bust of a pharaoh, hauled out of his mortuary temple by an Italian strongman-turned-adventurer working for the British consul."
  },
  {
    title:"The Riace Bronzes",
    wiki:"https://en.wikipedia.org/wiki/Riace_bronzes",
    img:"https://commons.wikimedia.org/wiki/Special:FilePath/Reggio calabria museo nazionale bronzi di riace.jpg",
    clue:["Classical Greece","Cast bronze"],
    place:"Riace, Italy",
    lat:38.279, lng:16.533, century:-5,
    desc:"Two full-size bronze warriors that spent over two thousand years on the seafloor before a diver spotted an arm sticking out of the sand in 1972."
  },
  {
    title:"The Sword of Tiberius",
    wiki:"https://en.wikipedia.org/wiki/Mainz_Gladius",
    img:"https://commons.wikimedia.org/wiki/Special:FilePath/Sword of Tiberius.jpg",
    clue:["Roman Empire","Iron and gilded bronze"],
    place:"Mainz, Germany",
    lat:49.998, lng:8.271, century:-1,
    desc:"A Roman officer's ceremonial sword, its gilded scabbard decorated with a scene of Tiberius presenting a victory to Augustus, pulled from the Rhine in the 19th century."
  },
  {
    title:"Augustus of Prima Porta",
    wiki:"https://en.wikipedia.org/wiki/Augustus_of_Prima_Porta",
    img:"https://commons.wikimedia.org/wiki/Special:FilePath/Augustus of Prima Porta.jpg",
    clue:["Roman Empire","Carved marble"],
    place:"Prima Porta, Italy",
    lat:42.0028, lng:12.4881, century:1,
    desc:"An idealized portrait of Rome's first emperor, discovered in the villa of his widow — its breastplate carved with propaganda celebrating a diplomatic win over Parthia."
  },
  {
    title:"An Ulfberht Sword",
    wiki:"https://en.wikipedia.org/wiki/Ulfberht_swords",
    img:"https://commons.wikimedia.org/wiki/Special:FilePath/1000 Sword ULFBERTH anagoria.JPG",
    clue:["Viking Age","Pattern-welded steel"],
    place:"Haithabu, Germany",
    lat:54.5, lng:9.5, century:9,
    desc:"A prized Frankish-made blade stamped with a maker's mark and traded across the Viking world — its steel was purer than most European smiths could reliably reproduce for centuries."
  },
  {
    title:"An Islamic Astrolabe",
    wiki:"https://en.wikipedia.org/wiki/Astrolabe",
    img:"https://commons.wikimedia.org/wiki/Special:FilePath/Astrolabio di ahmad ibn muhammad al-naqqash, ottone inciso, saragozza, 1079-1080.jpg",
    clue:["Islamic Golden Age","Engraved brass"],
    place:"Zaragoza, Spain",
    lat:41.6488, lng:-0.8891, century:11,
    desc:"A portable brass instrument for tracking the stars, telling time, and finding the direction of Mecca, crafted in an era when Islamic scholars led the world in astronomy."
  },
  {
    title:"A Clovis Spear Point",
    wiki:"https://en.wikipedia.org/wiki/Clovis_point",
    img:"https://commons.wikimedia.org/wiki/Special:FilePath/Clovis spear point, British Museum.jpg",
    clue:["Paleo-Indian culture","Chipped flint"],
    place:"Clovis, New Mexico",
    lat:34.40, lng:-103.20, century:-110,
    desc:"A finely fluted stone spearhead from among the earliest confirmed toolmaking traditions in the Americas, used to hunt mammoths and other Ice Age megafauna."
  },
  {
    title:"The Liberty Bell",
    wiki:"https://en.wikipedia.org/wiki/Liberty_Bell",
    img:"https://commons.wikimedia.org/wiki/Special:FilePath/Independence National Historical Park Liberty Bell in LBC closeup 1.jpg",
    clue:["American colonial era","Cast bronze"],
    place:"Philadelphia, USA",
    lat:39.9496, lng:-75.1503, century:18,
    desc:"A bronze bell cast for the Pennsylvania State House and later adopted as a symbol of abolition and independence, famous today for the crack that silenced it."
  },
  {
    title:"Michelangelo's David",
    wiki:"https://en.wikipedia.org/wiki/David_(Michelangelo)",
    img:"https://commons.wikimedia.org/wiki/Special:FilePath/Michelangelos David.jpg",
    clue:["Italian Renaissance","Carved marble"],
    place:"Florence, Italy",
    lat:43.7765, lng:11.2588, century:16,
    desc:"A seventeen-foot marble giant carved from a block of stone other sculptors had already given up on, meant from the start to be seen from far below."
  },
  {
    title:"Galileo's Telescopes",
    wiki:"https://en.wikipedia.org/wiki/Galileo_Galilei",
    img:"https://commons.wikimedia.org/wiki/Special:FilePath/Galileo telescope replica (1) - white bg.jpg",
    clue:["Scientific Revolution","Wood, leather, glass"],
    place:"Florence, Italy",
    lat:43.7696, lng:11.2558, century:17,
    desc:"The handmade instruments Galileo used to spot Jupiter's moons and craters on our own — observations that helped topple the idea that Earth sat at the center of the universe."
  },
  {
    title:"The Gutenberg Bible",
    wiki:"https://en.wikipedia.org/wiki/Gutenberg_Bible",
    img:"https://commons.wikimedia.org/wiki/Special:FilePath/Gutenberg Bible B42 Genesis.JPG",
    clue:["Early printing press","Ink on vellum"],
    place:"Mainz, Germany",
    lat:49.998, lng:8.271, century:15,
    desc:"The first major book printed in Europe using movable type, a technology that would upend how knowledge spread across the continent."
  },
  {
    title:"The Magna Carta",
    wiki:"https://en.wikipedia.org/wiki/Magna_Carta",
    img:"https://commons.wikimedia.org/wiki/Special:FilePath/Magna Carta (1215) - BL Cotton MS Augustus II 106.jpg",
    clue:["Medieval England","Ink on parchment"],
    place:"Runnymede, England",
    lat:51.4436, lng:-0.5636, century:13,
    desc:"A peace agreement forced on an unpopular king by rebellious barons, later reinterpreted as a foundational statement about limits on royal power."
  },
  {
    title:"The Aztec Sun Stone",
    wiki:"https://en.wikipedia.org/wiki/Aztec_sun_stone",
    img:"https://commons.wikimedia.org/wiki/Special:FilePath/Aztec Sun Stone or Calendar Stone.jpg",
    clue:["Mexica civilization","Carved basalt"],
    place:"Mexico City, Mexico",
    lat:19.4326, lng:-99.1332, century:16,
    desc:"A massive carved basalt disc depicting Aztec cosmology, buried after the Spanish conquest and rediscovered by chance during repairs to Mexico City's main square."
  },
  {
    title:"The Portland Vase",
    wiki:"https://en.wikipedia.org/wiki/Portland_Vase",
    img:"https://commons.wikimedia.org/wiki/Special:FilePath/Portland Vase.jpg",
    clue:["Roman Empire","Cameo glass"],
    place:"Rome, Italy",
    lat:41.9028, lng:12.4964, century:1,
    desc:"A cobalt-blue glass vase carved in white cameo relief, first recorded in Rome around 1600. In 1845 a drunken museum visitor smashed it to pieces — it has since been painstakingly reconstructed three times."
  },
  {
    title:"The Vindolanda Tablets",
    wiki:"https://en.wikipedia.org/wiki/Vindolanda_tablets",
    img:"https://commons.wikimedia.org/wiki/Special:FilePath/Vindolanda tablets 1.jpg",
    clue:["Roman Britain","Ink on wood"],
    place:"Northumberland, England",
    lat:54.9906, lng:-2.3608, century:2,
    desc:"Postcard-sized wooden leaves bearing everyday Latin correspondence from a Roman fort near Hadrian's Wall, including a birthday party invitation — the oldest surviving document written in Latin by a woman."
  },
  {
    title:"The Boscoreale Treasure",
    wiki:"https://en.wikipedia.org/wiki/Boscoreale_Treasure",
    img:"https://commons.wikimedia.org/wiki/Special:FilePath/Boscoreale Treasure silver head (BM).JPG",
    clue:["Roman Empire","Silver"],
    place:"Boscoreale, Italy",
    lat:40.7622, lng:14.4906, century:1,
    desc:"Over a hundred pieces of fine Roman silverware, buried in a wine-pressing room when Vesuvius erupted in 79 AD and not rediscovered until 1895."
  },
  {
    title:"The Cross of Cong",
    wiki:"https://en.wikipedia.org/wiki/Cross_of_Cong",
    img:"https://commons.wikimedia.org/wiki/Special:FilePath/Cross of Cong in the National Museum of Ireland.jpg",
    clue:["Medieval Ireland","Oak, gold, silver, niello"],
    place:"Cong, Ireland",
    lat:53.5417, lng:-9.2833, century:12,
    desc:"A processional cross made to hold a fragment of the True Cross, commissioned by a High King of Ireland for a cathedral before later moving to the abbey that gave it its name."
  },
  {
    title:"The Blue Qur'an",
    wiki:"https://en.wikipedia.org/wiki/Blue_Quran",
    img:"https://commons.wikimedia.org/wiki/Special:FilePath/Der blaue Koran,Kairouan.JPG",
    clue:["Islamic Golden Age","Gold ink on indigo-dyed vellum"],
    place:"Kairouan, Tunisia",
    lat:35.6781, lng:10.0963, century:9,
    desc:"Gold Kufic script on parchment dyed deep indigo blue, among the most luxurious manuscripts to survive from the early Islamic world. Scholars still debate whether it was made in Tunisia or further east."
  },
  {
    title:"Newton's Principia Mathematica",
    wiki:"https://en.wikipedia.org/wiki/Philosophiae_Naturalis_Principia_Mathematica",
    img:"https://commons.wikimedia.org/wiki/Special:FilePath/NewtonsPrincipia.jpg",
    clue:["Scientific Revolution","Ink on paper"],
    place:"Cambridge, England",
    lat:52.2043, lng:0.1149, century:17,
    desc:"The book that laid out the laws of motion and universal gravitation, funded and pushed to publication by Newton's friend Edmond Halley after Newton nearly abandoned the project."
  },
  {
    title:"An Armillary Sphere",
    wiki:"https://en.wikipedia.org/wiki/Armillary_sphere",
    img:"https://commons.wikimedia.org/wiki/Special:FilePath/Armillary sphere c 1450, Whipple Museum, Cambridge.jpg",
    clue:["Renaissance astronomy","Brass rings"],
    place:"Cambridge, England",
    lat:52.2043, lng:0.1149, century:15,
    desc:"A model of interlocking rings representing the celestial sphere, used to teach and calculate the positions of the sun, moon, and stars centuries before the telescope existed."
  },
  {
    title:"The Star-Spangled Banner",
    wiki:"https://en.wikipedia.org/wiki/Star-Spangled_Banner_(flag)",
    img:"https://commons.wikimedia.org/wiki/Special:FilePath/Star Spangled Banner Flag on display at the Smithsonian's National Museum of History and Technology, around 1964.jpg",
    clue:["War of 1812","Wool and cotton"],
    place:"Baltimore, USA",
    lat:39.2627, lng:-76.5800, century:19,
    desc:"The garrison flag that flew over Fort McHenry through a night of British naval bombardment, inspiring the poem that later became the American national anthem."
  },
  {
    title:"The Declaration of Independence",
    wiki:"https://en.wikipedia.org/wiki/United_States_Declaration_of_Independence",
    img:"https://commons.wikimedia.org/wiki/Special:FilePath/Engrossed Declaration of Independence, front.jpg",
    clue:["American Revolution","Ink on parchment"],
    place:"Philadelphia, USA",
    lat:39.9483, lng:-75.1503, century:18,
    desc:"The hand-lettered parchment copy signed by delegates to the Continental Congress, now so faded from over a century of light exposure that it's kept permanently dim to preserve what remains."
  },
  {
    title:"A Folsom Point",
    wiki:"https://en.wikipedia.org/wiki/Folsom_point",
    img:"https://commons.wikimedia.org/wiki/Special:FilePath/002 Folsom.jpg",
    clue:["Folsom tradition","Fluted chert"],
    place:"Folsom, New Mexico",
    lat:36.8492, lng:-103.9036, century:-90,
    desc:"A finely fluted spear point found lodged between the ribs of an extinct species of bison, proof that humans had hunted in the Americas thousands of years earlier than most scientists had believed."
  },
  {
    title:"The Swimming Reindeer",
    wiki:"https://en.wikipedia.org/wiki/Swimming_Reindeer",
    img:"https://commons.wikimedia.org/wiki/Special:FilePath/Swimming reindeerDSCF6976.jpg",
    clue:["Magdalenian culture","Carved mammoth ivory"],
    place:"Montastruc, France",
    lat:44.13, lng:1.63, century:-110,
    desc:"Two reindeer carved nose-to-tail from a single mammoth tusk, found in two pieces in 1866 — it took almost forty years before anyone realized the fragments fit together."
  },
  {
    title:"A Nok Terracotta Figure",
    wiki:"https://en.wikipedia.org/wiki/Nok_culture",
    img:"https://commons.wikimedia.org/wiki/Special:FilePath/Image of Nok Terracotta.jpg",
    clue:["Nok culture","Fired terracotta"],
    place:"Kaduna State, Nigeria",
    lat:9.5, lng:8.5, century:-6,
    desc:"A hollow-cast clay figure from one of the earliest known sub-Saharan African civilizations to work iron, first noticed when tin miners began turning them up in the early 20th century."
  },
  {
    title:"The Nebra Sky Disc",
    wiki:"https://en.wikipedia.org/wiki/Nebra_sky_disc",
    img:"https://commons.wikimedia.org/wiki/Special:FilePath/Nebra disc 1.jpg",
    clue:["Bronze Age Europe","Bronze with gold inlay"],
    place:"Nebra, Germany",
    lat:51.28, lng:11.55, century:-17,
    desc:"A bronze disc inlaid with gold stars, sun, and crescent moon — the oldest known concrete depiction of the cosmos anywhere in the world. Looters dug it up and sold it on the black market before police recovered it in a sting."
  },
  {
    title:"The Alfred Jewel",
    wiki:"https://en.wikipedia.org/wiki/Alfred_Jewel",
    img:"https://commons.wikimedia.org/wiki/Special:FilePath/Alfred Jewel.jpg",
    clue:["Anglo-Saxon England","Gold, enamel, rock crystal"],
    place:"Somerset, England",
    lat:51.0833, lng:-3.0333, century:9,
    desc:"A teardrop of gold and enamel inscribed 'Alfred ordered me made,' likely the handle of a pointer for following text while reading — commissioned by Alfred the Great himself."
  },
  {
    title:"The Lewis Chessmen",
    wiki:"https://en.wikipedia.org/wiki/Lewis_chessmen",
    img:"https://commons.wikimedia.org/wiki/Special:FilePath/Lewis Chessman, British Museum.jpg",
    clue:["Norse medieval culture","Carved walrus ivory"],
    place:"Isle of Lewis, Scotland",
    lat:58.2064, lng:-7.0264, century:12,
    desc:"Wide-eyed kings, queens, and berserk warders biting their shields, carved from walrus ivory and found buried in a sandbank — nobody knows why nearly 100 pieces ended up on a remote Scottish island."
  },
  {
    title:"The Mold Gold Cape",
    wiki:"https://en.wikipedia.org/wiki/Mold_gold_cape",
    img:"https://commons.wikimedia.org/wiki/Special:FilePath/Gold Mold Cape - British Museum - Joy of Museums.jpg",
    clue:["Bronze Age Britain","Sheet gold"],
    place:"Flintshire, Wales",
    lat:53.1667, lng:-3.1333, century:-18,
    desc:"A ceremonial cape hammered from a single sheet of gold, found crushed inside a burial mound quarrymen nicknamed 'Goblins' Hill.' Its owner's body had almost entirely decayed away."
  },
  {
    title:"The Hoxne Hoard",
    wiki:"https://en.wikipedia.org/wiki/Hoxne_Hoard",
    img:"https://commons.wikimedia.org/wiki/Special:FilePath/Hoxne Hoard 24.jpg",
    clue:["Late Roman Britain","Gold and silver"],
    place:"Suffolk, England",
    lat:52.35, lng:1.20, century:5,
    desc:"Nearly 15,000 Roman coins plus gold jewelry and silver tableware, buried as the empire's grip on Britain was collapsing and found by a farmer searching for a lost hammer with a metal detector."
  },
  {
    title:"An Oracle Bone",
    wiki:"https://en.wikipedia.org/wiki/Oracle_bone",
    img:"https://commons.wikimedia.org/wiki/Special:FilePath/Oracle bone from the Shang dynasty.jpg",
    clue:["Shang Dynasty","Inscribed ox bone or turtle shell"],
    place:"Anyang, China",
    lat:36.1256, lng:114.3086, century:-13,
    desc:"A bone or shell heated until it cracked, then read by diviners for the Shang royal court — the cracks and questions scratched beside them are the earliest confirmed form of Chinese writing."
  },
  {
    title:"A Pillar Edict of Ashoka",
    wiki:"https://en.wikipedia.org/wiki/Pillars_of_Ashoka",
    img:"https://commons.wikimedia.org/wiki/Special:FilePath/6thPillarOfAshoka.JPG",
    clue:["Mauryan Empire","Carved sandstone"],
    place:"Meerut, India",
    lat:28.9845, lng:77.7064, century:-3,
    desc:"A fragment inscribed with one of dozens of edicts an emperor had carved across his realm after a bloody war left him so remorseful he converted to Buddhism and renounced further conquest."
  },
  {
    title:"A Roman Denarius",
    wiki:"https://en.wikipedia.org/wiki/Denarius",
    img:"https://commons.wikimedia.org/wiki/Special:FilePath/Ancient Roman Silver Denarius Depicting Emperor Caracalla (198-217 CE).jpg",
    clue:["Roman Empire","Struck silver"],
    place:"Rome, Italy",
    lat:41.9028, lng:12.4964, century:3,
    desc:"The standard silver coin of Rome for over four centuries, stamped with the emperor's portrait and carried by soldiers and merchants from Britain to the Persian frontier."
  },
  {
    title:"The Book of Kells",
    wiki:"https://en.wikipedia.org/wiki/Book_of_Kells",
    img:"https://commons.wikimedia.org/wiki/Special:FilePath/KellsFol033rCarpetPage v2.jpg",
    clue:["Celtic Christian art","Ink and pigment on vellum"],
    place:"Kells, Ireland",
    lat:53.7247, lng:-6.8794, century:8,
    desc:"An illuminated gospel book so densely decorated that a single page can take weeks to fully examine, likely begun by monks on the Scottish island of Iona and finished after Viking raids forced them to flee to Ireland."
  }
];