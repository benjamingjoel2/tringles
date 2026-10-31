const TRIPS = {
  lisbon: {
    city: "Lisbonne", name: "Semaine des vignes", cls: "m-lisbon", when: "Mai 2027", price: "€3,600", nights: 7,
    base: "Domaine viticole à Azeitão → villa dans les collines de Sintra → Comporta → Lisbonne",
    intro: "On commence en douceur au milieu des vignes, on se prend au jeu dans la cuisine d’une villa, on finit sur la côte et sur un toit de Lisbonne. C’est le voyage le plus facile à rejoindre depuis toute l’Europe, et le plus détendu des quatre.",
    facts: [["Groupe","16 membres, 8 + 8"],["Âges","26–38"],["Idéal pour","Vin, chevaux, longs dîners"],["Comment s’y rendre","Arrivée à Lisbonne (LIS)"]],
    days: [
      {t:"Arrivée au milieu des vignes", s:[["Après-midi","Accueil à Lisbonne, puis 40 minutes vers le sud jusqu’à un domaine viticole d’Azeitão. Installation, piscine, on prend ses marques."],["Soirée","Dîner à une longue table dans les vignes. Votre hôte ouvre la semaine par un bref mot d’accueil, puis chacun se présente à l’aide d’une carte."]]},
      {t:"Premiers rendez-vous", s:[["Matin","Petit-déjeuner sans hâte avec des cartes scénarios : il pleut pendant votre week-end romantique, et maintenant ?"],["Midi","Les binômes sont tirés au sort et partent pour l’un des cinq rendez-vous, déjeuner compris."],["Fin d’après-midi","Visite du domaine et dégustation."],["Soirée","Dîner dans un restaurant avec vue. Cercle de l’hôte : qu’est-ce qui vous a surpris aujourd’hui ?"]],
        f:{h:"Les cinq premiers rendez-vous", list:["Balade à cheval à travers le domaine, puis pique-nique","Kayak sur le Sado, déjeuner au bord de l’eau","Bateau privé avec capitaine, déjeuner à bord","Safari en jeep à travers les forêts de chênes-lièges et les vignes","Buggy tout-terrain, puis déjeuner dans une tasca de village"], p:"Après chaque rendez-vous, chacun répond à trois questions confidentielles pour l’hôte : vous êtes-vous senti à l’aise avec cette personne ? Qu’avez-vous le plus apprécié ? Aimeriez-vous passer plus de temps avec elle ?"}},
      {t:"Le défi de la recette secrète", s:[["Matin","Installation dans une villa privée des collines de Sintra."],["Midi","Cinq binômes, un déjeuner, et personne n’a toutes les cartes en main. Ensuite, on mange ce qu’on a préparé."],["Après-midi","Moment piscine."],["Soirée","Direction l’Alfama pour dîner au son du fado. Cercle de l’hôte sur le défi."]],
        f:{h:"Comment se déroule le défi", ol:["Les gardiens de la recette décrivent les ingrédients sans les nommer.","Les rédacteurs transforment les descriptions en liste de courses, puis la transmettent.","Les acheteurs achètent ce qui figure sur la liste sans parler aux gardiens de la recette. Ils ne connaissent pas le budget.","Les gardiens du budget connaissent la limite et gèrent le chrono. Si le ticket dépasse le budget, les acheteurs décident de ce qu’on rapporte.","Les cuisiniers ne suivent que des instructions orales et cuisinent avec ce qui arrive."], p:"Le débrief porte sur l’équipe, jamais sur qui a été autoritaire. Si l’ambiance se tend, l’hôte ramène tout le monde vers la réussite commune."}},
      {t:"Cap sur la côte", s:[["Matin","Route vers l’ouest jusqu’à Comporta : rizières, cigognes, longues plages désertes."],["Après-midi","Club de plage, paddle et chevaux sur le sable pour ceux qui le souhaitent."],["Soirée","Date Picks, premier tour : la moitié du groupe choisit un dîner en tête-à-tête au village de Comporta."]]},
      {t:"Dauphins sur le Sado", s:[["Journée","Journée en bateau sur l’estuaire du Sado depuis Setúbal : dauphins, baignade à Tróia, déjeuner à bord."],["Soirée","Date Picks, deuxième tour : l’autre moitié choisit. De retour à la maison, la Longue Table : trois tours tranquilles, un nouveau partenaire à chaque fois."]]},
      {t:"Lisbonne", s:[["Matin","Direction Lisbonne. Binômes libres : Belém à vélo, les jardins de la Gulbenkian ou la LX Factory. Vous choisissez avec qui et où."],["Soirée","Croisière au coucher du soleil sur le Tage, puis soirée au Príncipe Real."]]},
      {t:"La Révélation", s:[["Journée","Journée libre. Les choix finaux sont remis en privé à l’hôte avant 16 h."],["Coucher du soleil","La Révélation sur un toit-terrasse au-dessus du fleuve, puis dîner d’adieu."]]},
      {t:"Premier vrai rendez-vous", s:[["Matin","Les binômes formés partagent un petit-déjeuner à deux dans une pastelaria. Pour les autres : brunch de groupe. Transferts vers l’aéroport."]]}
    ]
  },
  rio: {
    city: "Rio de Janeiro", name: "Semaine de l’amour", cls: "m-rio", when: "Mars 2027, après le Carnaval", price: "€4,200", nights: 7,
    base: "Une villa de charme à Santa Teresa ou Ipanema",
    intro: "Toute l’énergie de Love Island : sport sur la plage, samba, une journée en goélette et une révélation au coucher du soleil à Arpoador. Le plus festif et le plus animé des quatre.",
    facts: [["Groupe","16 membres, 8 + 8"],["Âges","26–38"],["Idéal pour","Plage, sport, vie nocturne"],["Comment s’y rendre","Arrivée à Rio (GIG)"]],
    days: [
      {t:"Arrivée", s:[["Après-midi","Transferts privés, installation, votre jeu de cartes personnel dans le kit de bienvenue."],["Soirée","Dîner de bienvenue sur un toit-terrasse de Santa Teresa."]]},
      {t:"Journée plage", s:[["Matin","Footvolley et beach-volley à Ipanema en équipes mixtes, avec un coach."],["Soirée","Cours de samba, puis sortie accompagnée à Lapa."]]},
      {t:"Premiers rendez-vous", s:[["Journée","Binômes tirés au sort : cours de surf à Prainha, randonnée dans la forêt de Tijuca, deltaplane à São Conrado ou cours de cuisine."],["Soirée","Masterclass caipirinha et jeu de cartes Hot Seat."]], f:{h:"Après chaque rendez-vous", p:"Trois questions confidentielles pour l’hôte : à l’aise ? meilleur moment ? envie de plus de temps ensemble ? Les réponses orientent les binômes du lendemain."}},
      {t:"Pain de Sucre", s:[["Journée","Binômes choisis par l’hôte : ascension ou téléphérique du Pain de Sucre, puis le Jardin botanique."],["Soirée","Date Picks, premier tour : dîners en tête-à-tête dans huit restaurants."]]},
      {t:"Journée en bateau", s:[["Journée","Goélette privée autour des îles de la baie de Guanabara, baignade et déjeuner à bord."],["Soirée","Date Picks, deuxième tour, puis la Longue Table à la villa : trois tours tranquilles, un nouveau partenaire à chaque fois."]]},
      {t:"Binômes libres", s:[["Après-midi","Choisissez avec qui et quoi parmi un menu de sorties déjà réservées."],["Soirée","Samba de rue à Pedra do Sal."]]},
      {t:"La Révélation", s:[["Lever du soleil","Le Christ Rédempteur avant la foule."],["Coucher du soleil","La Révélation sur un toit-terrasse d’Arpoador, puis la fête d’adieu."]]},
      {t:"Premier vrai rendez-vous", s:[["Matin","Petit-déjeuner à deux pour les binômes formés, brunch pour tous, transferts de départ."]]}
    ]
  },
  bali: {
    city: "Bali", name: "Semaine sur l’île", cls: "m-bali", when: "Juin 2027", price: "€3,400", nights: 7,
    base: "Villa dans la jungle à Ubud → villa sur les falaises à Uluwatu",
    intro: "D’abord les rizières en terrasses et les cascades, ensuite le surf et les couchers de soleil sur les falaises. Bali est l’atterrissage le plus doux pour un groupe d’inconnus, et le meilleur rapport qualité-prix des quatre.",
    facts: [["Groupe","16 membres, 8 + 8"],["Âges","26–38"],["Idéal pour","Nature, bien-être, surf"],["Comment s’y rendre","Arrivée à Denpasar (DPS)"]],
    days: [
      {t:"Arrivée à Ubud", s:[["Après-midi","Transfert jusqu’à une villa privée dans la jungle, puis bénédiction de bienvenue."],["Soirée","Dîner au milieu des rizières."]]},
      {t:"Le relais du marché", s:[["Matin","Descente à vélo à travers les rizières en terrasses, en binômes tirés au sort."],["Midi","La version balinaise du défi recette : cinq binômes, le marché d’Ubud, un chef balinais et un déjeuner à réussir ensemble."],["Soirée","Cercle de l’hôte : qu’est-ce qui vous a aidés à vous mettre d’accord ?"]]},
      {t:"Premiers rendez-vous", s:[["Journée","Les binômes sont tirés au sort pour l’un des cinq rendez-vous : rafting sur l’Ayung, randonnée vers une cascade, atelier de bijoux en argent, balançoire de Tegallalang et café, ou balade entre temple et source sacrée."],["Soirée","Bain sonore aux gongs et dîner tranquille à la villa."]], f:{h:"Après chaque rendez-vous", p:"Trois questions confidentielles pour l’hôte. Personne d’autre ne voit les réponses."}},
      {t:"Vers les falaises", s:[["Matin","Installation plus au sud, dans une villa sur les falaises d’Uluwatu."],["Après-midi","Cours de surf à Padang Padang ou moment piscine."],["Soirée","Danse du feu Kecak au temple d’Uluwatu, puis Date Picks, premier tour."]]},
      {t:"Journée en bateau entre les îles", s:[["Journée","Bateau rapide jusqu’à Nusa Lembongan : snorkeling avec les raies manta, déjeuner sur la plage."],["Soirée","Date Picks, deuxième tour, puis la Longue Table dans la villa des falaises : trois tours tranquilles, un nouveau partenaire à chaque fois."]]},
      {t:"Binômes libres", s:[["Journée","Choisissez avec qui et quoi : spa, club de plage, cours de yoga ou balade en scooter avec chauffeur."],["Soirée","Soirée de groupe dans un club de plage."]]},
      {t:"La Révélation", s:[["Coucher du soleil","La Révélation au bord de la falaise, puis dîner d’adieu de fruits de mer sur la plage de Jimbaran."]]},
      {t:"Premier vrai rendez-vous", s:[["Matin","Petit-déjeuner à deux pour les binômes formés, brunch de groupe, transferts de départ."]]}
    ]
  },
  nairobi: {
    city: "Nairobi", name: "Semaine safari", cls: "m-nairobi", when: "Septembre 2027, saison de la migration", price: "€5,900", nights: 7,
    base: "Hôtel-jardin à Nairobi → camp sous tente dans le Masai Mara → lac Naivasha",
    intro: "Jeeps partagées, une montgolfière à l’aube et des dîners autour du feu. La semaine la plus intense des quatre : petits camps, levers matinaux, et impossible d’échapper à une belle conversation.",
    facts: [["Groupe","12 à 16 membres"],["Âges","28–40"],["Idéal pour","Faune sauvage, une expérience unique"],["Comment s’y rendre","Arrivée à Nairobi (NBO)"]],
    days: [
      {t:"Arrivée à Nairobi", s:[["Après-midi","Hôtel-jardin à Karen, puis le Giraffe Centre."],["Soirée","Dîner de bienvenue sous les arbres."]]},
      {t:"Dans le Mara", s:[["Matin","Vol en avion léger vers le Masai Mara."],["Après-midi","Premier safari en groupes mixtes de quatre."],["Soirée","Apéritif au coucher du soleil sur une crête, puis dîner au camp."]]},
      {t:"Premiers rendez-vous", s:[["Aube","Safaris en binôme avec un guide : le 4×4 est le rendez-vous."],["Après-midi","Safari à pied avec des guides maasaï, ou piscine du camp."],["Soirée","Cercle de l’hôte au coin du feu."]], f:{h:"Après chaque rendez-vous", p:"Trois questions confidentielles pour l’hôte. Les binômes changent à chaque safari jusqu’au cinquième jour."}},
      {t:"Montgolfière à l’aube", s:[["Aube","Vol en montgolfière au-dessus des plaines, puis petit-déjeuner au champagne dans la brousse (option sans alcool prévue)."],["Après-midi","Le défi de la cuisine du camp : le jeu de la recette, cuisiné au feu de bois avec les chefs du camp."],["Soirée","Date Picks, premier tour : dîners à deux dans la brousse."]]},
      {t:"Traversées de la rivière", s:[["Journée","Une journée entière au bord de la rivière Mara pour les traversées de la migration, avec pique-nique."],["Soirée","Date Picks, deuxième tour, puis la Longue Table autour du feu : trois tours tranquilles, un nouveau partenaire à chaque fois."]]},
      {t:"Lac Naivasha", s:[["Matin","Vol vers Naivasha."],["Après-midi","Bateau au milieu des hippopotames, puis vélo à Hell’s Gate en binômes de votre choix."]]},
      {t:"La Révélation", s:[["Coucher du soleil","La Révélation lors d’un apéritif au bord du lac, puis dîner d’adieu."]]},
      {t:"Premier vrai rendez-vous", s:[["Matin","Petit-déjeuner à deux pour les binômes formés, puis transfert routier vers Nairobi pour les vols."]]}
    ]
  }
};
const ORDER = ["lisbon","rio","bali","nairobi"];

const DECKS = [
  {id:"spark", name:"Spark · Le côté ludique", cls:"c-spark", sw:"var(--clay)", when:"Jour 1", desc:"Présentations au dîner de bienvenue",
   qs:["De quoi pourriez-vous parler pendant des heures ?","Quelle expérience aimeriez-vous vivre dans l’année qui vient ?","Quelle est la chose la plus spontanée que vous ayez jamais faite ?","Qu’est-ce qui vous rend quelqu’un immédiatement sympathique ?","Quel signal positif remarquez-vous très tôt ?","À quoi ressemblerait votre journée spontanée idéale ?","Qu’avez-vous toujours rêvé d’essayer ?","Quel est le voyage le plus mémorable que vous ayez fait ?"]},
  {id:"know", name:"Faire connaissance", cls:"c-know", sw:"var(--surface)", when:"Premiers rendez-vous", desc:"Enveloppe 2 à chaque premier rendez-vous",
   qs:["Qu’est-ce qui vous fait vous sentir apprécié par quelqu’un ?","Quelles qualités appréciez-vous le plus chez un partenaire ?","À quoi ressemble une très belle relation pour vous ?","Qu’est-ce que les gens comprennent souvent mal chez vous ?","Qu’aimeriez-vous vivre avec un partenaire ?"]},
  {id:"together", name:"Comment nous fonctionnons ensemble", cls:"c-together", sw:"var(--linen)", when:"Jours 2–3", desc:"Scénarios au petit-déjeuner et après les défis",
   qs:["Vous avez prévu un week-end romantique et il pleut. Que faites-vous ?","Une journée libre, un petit budget. Comment la passez-vous ?","Votre partenaire veut de l’aventure. Vous avez besoin de repos. Et maintenant ?","Si un voyage ne se passe pas comme prévu, comment réagissez-vous ?","En cas de désaccord, en parlez-vous tout de suite ou prenez-vous d’abord du recul ?","Qu’est-ce qui a été le plus difficile aujourd’hui : vous expliquer ou comprendre quelqu’un ?"]},
  {id:"circle", name:"Le cercle du soir", cls:"c-circle", sw:"var(--claret)", when:"Chaque soir", desc:"Animé par l’hôte, autour de la table, seulement ce que vous voulez partager",
   qs:["Qu’est-ce qui vous a le plus surpris aujourd’hui ?","Quelqu’un vous a-t-il agréablement surpris ?","Qu’avez-vous appris sur quelqu’un que vous n’auriez pas deviné ?","Y a-t-il eu un moment où vous vous êtes senti particulièrement proche ?","Certaines de vos attentes ont-elles changé aujourd’hui ?","Si vous pouviez revivre un moment de la journée, lequel choisiriez-vous ?"]},
  {id:"deep1", name:"Deep · Niveau I", cls:"c-deep", sw:"var(--oxblood)", when:"Longue Table · Tour 1", desc:"Inspiré des 36 questions d’Aron, série I : légère, ludique",
   qs:["Qui, n’importe où dans le monde, inviteriez-vous à dîner ?","Qu’est-ce qui ferait d’aujourd’hui une journée parfaite pour vous ?","Si vous pouviez vous réveiller demain avec un nouveau talent, lequel serait-ce ?","Aimeriez-vous être célèbre ? Pour quoi ?","À quoi ressemblerait votre week-end idéal ?"]},
  {id:"deep2", name:"Deep · Niveau II", cls:"c-deep", sw:"var(--oxblood)", when:"Longue Table · Tour 2", desc:"Série II : personnelle",
   qs:["Quel rêve nourrissez-vous depuis longtemps sans l’avoir encore réalisé ?","Que représente l’amitié pour vous ?","Quel souvenir aimeriez-vous garder pour toujours ?","Quelle est la plus grande réussite de votre vie jusqu’ici ?","Êtes-vous proche de votre famille ?"]},
  {id:"deep3", name:"Deep · Niveau III", cls:"c-deep", sw:"var(--oxblood)", when:"Longue Table · Tour 3", desc:"Série III : à propos de vous deux",
   qs:["Citez trois choses que vous avez en commun, selon vous.","Qu’avez-vous remarqué chez moi le premier jour ?","Qu’appréciez-vous déjà chez la personne en face de vous ?","Qu’est-ce que vous ne confieriez à quelqu’un qu’après une semaine comme celle-ci ?","Qu’aimeriez-vous vivre ensemble, si cela continuait ?"]}
];


const CREDITS = {"lis_vines": ["Évora IMG 6738 (21135870201).jpg", "Jean-Michel Brunet", "CC BY 2.0"], "lis_grapes": ["Dehydrated and bird damaged grapes in Portugal.jpg", "Filipe Fortes", "CC BY-SA 2.0"], "lis_beach": ["Comporta Beach - 04.tif", "Herdade da Comporta", "CC BY-SA 3.0"], "lis_sunset": ["Sunset by the river Tagus (36234333671).jpg", "Maria Eklind", "CC BY-SA 2.0"], "lis_tagus": ["Sunset in Lisbon (36542861635).jpg", "unknown.mmp, Lisbonne, Portugal", "CC0"], "lis_evora": ["Évora - Praça do Giraldo.jpg", "Paolo Querci", "CC BY 3.0"], "lis_temple": ["Evora - Roman Temple - Backside.jpg", "Ingo Mehling", "CC BY-SA 4.0"], "lis_horses": ["Lusitano Pferd International 2011.JPG", "Usien", "CC BY-SA 3.0"], "rio_sugarloaf": ["Sugarloaf Sunrise 2.jpg", "Donatas Dabravolskas", "CC BY-SA 4.0"], "rio_bay": ["Last Sunlight on the Sugarloaf Mountain.jpg", "Donatas Dabravolskas", "CC BY-SA 4.0"], "rio_ipanema": ["1 ipanema beach vidigal sunset.jpg", "chensiyuan", "CC BY-SA 4.0"], "rio_beachlife": ["Ipanema Beach (4589735501).jpg", "Francisco Anzola", "CC BY 2.0"], "rio_santateresa": ["Street Scene - Santa Teresa District - Rio de Janeiro - Brazil.jpg", "Adam Jones, Ph.D.", "CC BY-SA 3.0"], "rio_islands": ["Ilha de Paquetá - Rio de Janeiro 01.jpg", "VinyNeto", "CC BY-SA 3.0"], "rio_arpoador": ["Pedra do Arpoador RJ 04.jpg", "Deniltonlima", "CC BY-SA 3.0"], "rio_sunset": ["Pedra do Arpoador RJ 03.jpg", "Deniltonlima", "CC BY-SA 3.0"], "bal_terraces": ["Rice terraces tegalaland (9).jpg", "Tavana", "CC BY-SA 3.0"], "bal_terraces2": ["Rice terraces in Tegallalang 1.jpg", "Christophe95", "CC BY-SA 4.0"], "bal_cliff": ["Cliff at Uluwatu temple, Bali.jpg", "Emma THERY", "CC BY-SA 4.0"], "bal_temple": ["Uluwatu Temple Cliff, Bali.jpg", "Ken Eckert", "CC BY-SA 4.0"], "bal_lembongan": ["Nusa Lembongan, Bali.jpg", "Shura, Amsterdam, Pays-Bas", "CC BY 2.0"], "bal_waterfall": ["Gitgit waterfalls in Bali; January 2015.jpg", "Juan Antonio F. Segal", "CC BY 2.0"], "bal_kecak": ["Kecak Dance Bali.jpg", "Dhani ilham", "CC BY-SA 4.0"], "bal_kecak2": ["Balinese dance in Ubud, Kecak, 20220822 1840 0182.jpg", "Jakub Hałun", "CC BY-SA 4.0"], "nai_jeeps": ["Maasai Mara, Kenya (47566656621).jpg", "Nina R, Afrique", "CC BY 2.0"], "nai_balloon": ["Hot air ballon safari Maasai Mara National Reserve Kenya.jpg", "Svein-Magne Tunli", "CC BY-SA 4.0"], "nai_balloons": ["Maasai Mara National Reserve, Kenya (53337843878).jpg", "Nina R, Afrique", "CC BY 2.0"], "nai_naivasha": ["Lake Naivasha Shoreline.jpg", "Kenenock", "CC BY-SA 4.0"], "nai_giraffe": ["Giraffe at Giraffe Centre Nairobi, Kenya.jpg", "GioRan", "CC BY-SA 4.0"], "nai_crossing": ["Wildebeest Jumping Into the Mara River.jpg", "Danijel Mihajlovic", "CC BY-SA 4.0"], "nai_acacia": ["Acacia tree at sunset, Maasai Mara, Kenya.jpg", "Daniel Case", "CC BY-SA 4.0"], "nai_sunrise": ["Masai Mara at Sunset.jpg", "Danijel Mihajlovic", "CC BY-SA 4.0"], "gen_toast": ["Offering a toast with sparkling wine flutes.jpg", "Fabrizio Sciami", "CC BY-SA 2.0"], "gen_sails": ["Traditional sailboat Croatia.jpg", "Ivan Matic", "CC BY-SA 2.0"], "gen_terrace": ["Kathmandu rooftops at sunset (8562532486).jpg", "calflier001", "CC BY-SA 2.0"], "gen_pool": ["Swimming Pool of Lembongan Cliff Villas - 2015.03 - panoramio.jpg", "rheins", "CC BY 3.0"], "gen_candles": ["Wigilia potrawy 554.jpg", "Przykuta", "CC BY-SA 3.0"], "gen_silhouettes": ["Sunset Agta Beach Resort - Biliran Philippines.jpg", "Leodb", "CC BY-SA 3.0"], "gen_pier": ["Tanjung Aru beach sunset view.jpg", "Cerevisae", "CC BY-SA 4.0"], "gen_lamp": ["A cozy rooftop table lit by a warm lamp, Pattaya.jpg", "PattayaPatrol", "CC BY-SA 4.0"]};
const META = {
  lisbon:{band:"#9AA67C", tan:"#DFC8B7", country:"Portugal", region:"Europe", tags:["wine","coast","city"],
    notice:"Les candidatures pour la Semaine des vignes de mai 2027 sont ouvertes.",
    hero:"lis_tagus", heroAlt:"Coucher de soleil sur le Tage à Lisbonne",
    days:["lis_vines","lis_horses","gen_candles","lis_beach","lis_sunset","lis_tagus","gen_lamp","gen_toast"],
    tagline:"Sans hâte dans les vignes, joueurs en cuisine, dorés sur la côte",
    copy:"Deux nuits dans un domaine viticole d’Azeitão, une villa dans les collines de Sintra, les plages de Comporta et une dernière nuit au-dessus de Lisbonne. Seize membres, un hôte et une semaine pensée pour vraiment apprendre à se connaître.",
    bullets:["16 membres, 8 femmes et 8 hommes","7 nuits, 4 étapes","Cinq premiers rendez-vous aventure le deuxième jour","Le défi de la recette secrète","Retour confidentiel après chaque rendez-vous","À 40 minutes de l’aéroport de Lisbonne"],
    pace:{h:"Cinq premiers rendez-vous", img:"lis_horses", alt:"Cavaliers sur des chevaux lusitaniens", p:"Le deuxième jour, les binômes sont tirés au sort et chacun part pour un rendez-vous différent, déjeuner compris. Ensuite, chacun répond à trois questions confidentielles pour l’hôte.", list:"days.1.f.list"},
    story:{img:"lis_grapes", alt:"Raisins mûrs sur la vigne", p1:"Le troisième jour, le groupe s’installe dans une villa privée des collines de Sintra, et le déjeuner devient un jeu. Cinq binômes, une recette, et personne n’a toutes les cartes en main.", ol:"days.2.f.ol"},
    exp:{a:["Les cartes","gen_toast","Un toast au dîner","Des questions qui se rapprochent au fil de la semaine, du dîner de bienvenue à la dernière soirée.","#cards","Comment fonctionnent les cartes"], b:["Comporta","lis_beach","La longue plage de Comporta","Deux nuits sur la côte : rizières, cigognes et plages à perte de vue. C’est ici que commencent les Date Picks.","#lisbon","Le programme","program"]},
    celeb:{a:["La Révélation","gen_lamp","Une table sur un toit-terrasse, la nuit","Le dernier soir, choix confidentiels, amoureux et amical. Seuls les choix réciproques sont annoncés, sur un toit-terrasse au-dessus du fleuve."], b:["Premier vrai rendez-vous","lis_sunset","Coucher de soleil au bord du Tage","Le dernier matin, les binômes formés partagent un petit-déjeuner à deux dans une pastelaria."]},
    summary:{Stays:["Domaine viticole à Azeitão, 2 nuits","Villa privée dans les collines de Sintra, 1 nuit","Maison de plage à Comporta, 2 nuits","Hôtel de charme à Lisbonne, 2 nuits"],Dining:["Dîner au milieu des vignes","Visite du domaine et dégustation","Dîner fado dans l’Alfama","Fruits de mer au village de Comporta"],Included:["Chambre individuelle avec votre propre clé","Tous les transferts depuis l’aéroport de Lisbonne","Tous les rendez-vous et activités","Votre hôte et les jeux de cartes"],"Le groupe":["16 membres, de 26 à 38 ans","8 femmes et 8 hommes","Saison en anglais ou en russe"],"Comment s’y rendre":["Arrivée à Lisbonne (LIS)","Accueil le jour 1 à 15 h","Dépose le jour 8 avant midi"]}},
  rio:{band:"#9E483F", dark:true, country:"Brésil", region:"Amérique du Sud", tags:["coast","city"],
    notice:"La Semaine de l’amour part en mars 2027, après le Carnaval.",
    hero:"rio_sugarloaf", heroAlt:"Le Pain de Sucre au lever du soleil",
    days:["rio_santateresa","rio_beachlife","rio_ipanema","rio_bay","rio_islands","rio_arpoador","rio_sunset","gen_toast"],
    tagline:"Sport sur la plage, samba et révélation au coucher du soleil sur Ipanema",
    copy:"Une semaine depuis une villa de Santa Teresa : équipes mixtes à Ipanema, le Pain de Sucre en bateau, une journée en goélette autour de la baie et la Révélation au coucher du soleil sur un toit d’Arpoador.",
    bullets:["16 membres, 8 femmes et 8 hommes","7 nuits dans une seule villa","Footvolley, surf et samba","Journée en goélette privée","Deux tours de Date Picks","À 40 minutes de l’aéroport de Rio"],
    pace:{h:"Premiers rendez-vous à Rio", img:"rio_beachlife", alt:"La plage d’Ipanema par une journée lumineuse", p:"Les binômes se répartissent entre cours de surf, randonnée dans la forêt de Tijuca, deltaplane à São Conrado ou cours de cuisine. Ensuite, trois questions confidentielles pour l’hôte."},
    story:{img:"rio_islands", alt:"L’île de Paquetá dans la baie de Guanabara", p1:"Le cinquième jour se passe à bord d’une goélette privée autour des îles de la baie de Guanabara. Baignade, repas sur le pont, et le soir commence le deuxième tour des Date Picks.", p2:"Les choix restent confidentiels. Ceux qui n’ont pas été choisis ont un dîner organisé par l’hôte. Personne ne dîne seul."},
    exp:{a:["Les cartes","gen_toast","Un toast au dîner","Des questions qui se rapprochent au fil de la semaine, du dîner de bienvenue à la dernière soirée.","#cards","Comment fonctionnent les cartes"], b:["Ipanema","rio_ipanema","Ipanema au coucher du soleil","Footvolley en équipes mixtes avec un coach, puis le plus beau coucher de soleil de la ville, depuis le sable.","#rio","Le programme","program"]},
    celeb:{a:["La Révélation","rio_arpoador","La foule admire le coucher de soleil à Arpoador","Choix confidentiels, amoureux et amical. Seuls les choix réciproques sont annoncés, au coucher du soleil sur un toit d’Arpoador."], b:["Premier vrai rendez-vous","rio_sunset","Le soleil se couche derrière les Deux Frères","Le dernier matin, les binômes formés partagent un petit-déjeuner à deux."]},
    summary:{Stays:["Villa de charme à Santa Teresa ou Ipanema, 7 nuits"],Dining:["Dîner de bienvenue sur un toit-terrasse","Masterclass caipirinha","Huit restaurants pour les Date Picks","Fête d’adieu à Arpoador"],Included:["Chambre individuelle avec votre propre clé","Tous les transferts","Tous les rendez-vous et activités","Votre hôte et les jeux de cartes"],"Le groupe":["16 membres, de 26 à 38 ans","8 femmes et 8 hommes"],"Comment s’y rendre":["Arrivée à Rio (GIG)","Vérifiez les conditions d’entrée pour votre passeport"]}},
  bali:{band:"#8590A3", country:"Indonésie", region:"Asie", tags:["coast","wellness"],
    notice:"Les candidatures pour la Semaine sur l’île de juin 2027 sont ouvertes.",
    hero:"bal_terraces", heroAlt:"Rizières en terrasses de Tegallalang",
    days:["bal_terraces2","gen_candles","bal_waterfall","bal_cliff","bal_lembongan","gen_pool","bal_temple","gen_toast"],
    tagline:"D’abord les rizières, ensuite les couchers de soleil sur les falaises",
    copy:"Trois nuits dans une villa au cœur de la jungle d’Ubud et quatre sur les falaises d’Uluwatu. Cascades, défi au marché, raies manta au large de Lembongan et la Révélation au bord de la falaise.",
    bullets:["16 membres, 8 femmes et 8 hommes","7 nuits dans 2 villas","Le relais du marché d’Ubud","Bateau de snorkeling vers Nusa Lembongan","Danse du feu Kecak à Uluwatu","À 90 minutes de l’aéroport de Denpasar"],
    pace:{h:"Premiers rendez-vous à Bali", img:"bal_waterfall", alt:"Une cascade dans la jungle balinaise", p:"Les binômes sont tirés au sort pour du rafting, une randonnée vers une cascade, un atelier de bijoux en argent, la balançoire de Tegallalang ou une balade au temple. Ensuite, trois questions confidentielles pour l’hôte."},
    story:{img:"bal_terraces2", alt:"Rizières verdoyantes en terrasses", p1:"La version balinaise du défi de la recette secrète se joue au marché d’Ubud. Cinq binômes, un chef balinais et un déjeuner que tout le groupe doit réussir ensemble.", p2:"Le débrief du soir porte sur la façon dont l’équipe y est arrivée, jamais sur qui s’est trompé."},
    exp:{a:["Les cartes","bal_kecak2","Danseurs de Kecak à la lueur du feu","Des questions qui se rapprochent au fil de la semaine, du dîner de bienvenue à la dernière soirée.","#cards","Comment fonctionnent les cartes"], b:["Nusa Lembongan","bal_lembongan","Eaux limpides au large de Nusa Lembongan","Une journée en bateau rapide pour nager avec les raies manta et déjeuner sur la plage.","#bali","Le programme","program"]},
    celeb:{a:["La Révélation","bal_kecak","Le cercle de feu du Kecak au coucher du soleil","Choix confidentiels, amoureux et amical. Seuls les choix réciproques sont annoncés, au bord de la falaise au coucher du soleil."], b:["Premier vrai rendez-vous","bal_cliff","Les falaises d’Uluwatu","Le dernier matin, les binômes formés partagent un petit-déjeuner à deux."]},
    summary:{Stays:["Villa dans la jungle à Ubud, 3 nuits","Villa sur les falaises à Uluwatu, 4 nuits"],Dining:["Dîner dans les rizières","Déjeuner du relais du marché","Fruits de mer sur la plage de Jimbaran"],Included:["Chambre individuelle avec votre propre clé","Tous les transferts","Tous les rendez-vous et activités","Votre hôte et les jeux de cartes"],"Le groupe":["16 membres, de 26 à 38 ans","8 femmes et 8 hommes"],"Comment s’y rendre":["Arrivée à Denpasar (DPS)","Vérifiez les règles de visa pour votre passeport"]}},
  nairobi:{band:"#DFC8B7", country:"Kenya", region:"Afrique", tags:["wild"],
    notice:"La Semaine safari part en septembre 2027, pendant la saison de la migration.",
    hero:"nai_balloon", heroAlt:"Une montgolfière au-dessus du Masai Mara",
    days:["nai_giraffe","nai_jeeps","nai_sunrise","nai_balloons","nai_crossing","nai_naivasha","nai_acacia","gen_toast"],
    tagline:"Jeeps partagées, montgolfière à l’aube et dîners au coin du feu",
    copy:"Une nuit à Nairobi, trois dans un camp sous tente du Masai Mara en pleine saison de la migration, et deux au bord du lac Naivasha. Petits camps, levers matinaux, et impossible d’échapper à une belle conversation.",
    bullets:["12 à 16 membres","7 nuits, 3 étapes","Avion léger jusqu’au Mara","Montgolfière à l’aube","Dîners à deux dans la brousse","Traversées de la migration sur la rivière Mara"],
    pace:{h:"Premiers rendez-vous en safari", img:"nai_jeeps", alt:"Véhicules de safari dans les plaines du Mara", p:"Dans le Mara, le jeep est le rendez-vous. Les binômes partent à l’aube avec un guide, puis répondent à trois questions confidentielles pour l’hôte. Les binômes changent à chaque safari jusqu’au cinquième jour."},
    story:{img:"nai_balloons", alt:"Deux montgolfières au-dessus de la savane", p1:"Le quatrième jour, le groupe s’élève au-dessus des plaines en montgolfière à l’aube, puis atterrit pour un petit-déjeuner dans la brousse.", p2:"L’après-midi, le défi de la cuisine du camp transpose le jeu de la recette sur un feu de bois, avec les chefs du camp."},
    exp:{a:["Les cartes","gen_candles","Dîner aux chandelles","Des questions qui se rapprochent au fil de la semaine, du dîner de bienvenue à la dernière soirée.","#cards","Comment fonctionnent les cartes"], b:["La rivière Mara","nai_crossing","Gnous traversant la rivière Mara","Une journée entière au bord de la rivière pour les traversées de la migration, avec pique-nique.","#nairobi","Le programme","program"]},
    celeb:{a:["La Révélation","nai_acacia","Un acacia devant le soleil couchant","Choix confidentiels, amoureux et amical. Seuls les choix réciproques sont annoncés, lors d’un apéritif au bord du lac."], b:["Premier vrai rendez-vous","nai_sunrise","Coucher de soleil sur le Mara","Les binômes formés partagent un petit-déjeuner à deux avant la route du retour vers Nairobi."]},
    summary:{Stays:["Hôtel-jardin à Karen, Nairobi, 1 nuit","Camp sous tente dans le Masai Mara, 4 nuits","Lodge au bord du lac Naivasha, 2 nuits"],Dining:["Petit-déjeuner dans la brousse après la montgolfière","Dîners à deux dans la brousse","Dîners au coin du feu au camp"],Included:["Tente ou chambre individuelle","Vols en avion léger","Droits d’entrée des parcs et safaris","Votre hôte et les jeux de cartes"],"Le groupe":["12 à 16 membres, de 28 à 40 ans"],"Comment s’y rendre":["Arrivée à Nairobi (NBO)","eTA kényane obligatoire"]}}
};
const get = (o, path) => path.split(".").reduce((a,k)=>a && a[k], o);
const $ = (s, r=document) => r.querySelector(s);
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const ext = `<svg viewBox="0 0 10 10" aria-hidden="true"><path d="M3 1h6v6M9 1 1 9" fill="none" stroke="currentColor" stroke-width="1.1"/></svg>`;
const reduce = () => matchMedia("(prefers-reduced-motion: reduce)").matches;
/* a photograph by key (falls back to a toned box with its caption if the file can't load) */
function ph(key, alt="", cls="", eager=false){
  const has = typeof CREDITS !== "undefined" && CREDITS[key];
  const tone = key && key.startsWith("#") ? key : "#B8AEA6";
  if (!has) return `<div class="ph ${cls}" style="--tone:${tone}"><span class="fallback">${esc(alt)}</span></div>`;
  // 480 px and 960 px files; the box is sized by CSS, so no layout shift. The page's lead photo loads first.
  const load = eager ? 'fetchpriority="high"' : 'loading="lazy"';
  return `<div class="ph ${cls}"><img src="/img/${key}.jpg" srcset="/img/${key}-480.jpg 480w, /img/${key}.jpg 960w" sizes="(max-width: 700px) 100vw, 50vw" alt="${esc(alt)}" ${load} decoding="async" onerror="this.remove()"><span class="fallback">${esc(alt)}</span></div>`;
}

/* ---------- header state ---------- */
const closedNotice = {};
function header(view){
  const sub = $("#subnav"), n = $("#notice");
  document.querySelectorAll(".mainnav a").forEach(a => a.removeAttribute("aria-current"));
  if (TRIPS[view]){
    const t = TRIPS[view];
    sub.hidden = false;
    sub.innerHTML = `<span class="pn"><span>${esc(t.city)}</span></span><span class="links"><a href="#${view}" data-jump="program">Le programme</a><a href="#${view}" data-jump="dates">Premiers rendez-vous</a><a href="#${view}" data-jump="story">Le défi</a><a href="#${view}" data-jump="scene">Les cartes</a><a href="#${view}" data-jump="reveal">La Révélation</a><a href="#${view}" data-jump="summary">Le voyage</a><a href="#dates-${view}">Dates et prix</a><a href="#apply-${view}">Postuler</a></span>`;
    if (!closedNotice[view]) { n.hidden = false; $("#noticeText").textContent = META[view].notice; } else n.hidden = true;
  } else {
    sub.hidden = true; n.hidden = true;
    const a = document.querySelector(`.mainnav a[data-nav="${view}"]`); if (a) a.setAttribute("aria-current","page");
  }
}
$("#noticeClose").addEventListener("click", () => { const v = location.hash.slice(1); closedNotice[v] = true; $("#notice").hidden = true; });

/* ---------- HOME ---------- */
function home(){
  return `
  <section class="hero" aria-label="Tringles">
    ${ph("rio_sunset","Coucher de soleil sur la plage d’Arpoador, Rio de Janeiro", "", true)}
    <div class="mark">Tringles</div>
    <button class="pill white" type="button" data-finder="1">Destinations <span aria-hidden="true">⌃</span></button>
  </section>
  <section class="welcome"><div class="g"><div class="t"><h1>Bienvenue chez Tringles</h1><p>Oubliez le premier rendez-vous, partez en voyage. Des séjours de sept nuits pour seize célibataires, avec un hôte, un jeu de cartes et quelques-uns des lieux les plus romantiques au monde.</p></div></div></section>
  <section class="bigband" aria-label="Oubliez le premier rendez-vous">
    ${ph("rio_bay","Dernières lueurs sur le Pain de Sucre, Rio de Janeiro")}
    <div class="words"><div class="top"><span class="h">Oubliez le premier rendez-vous,</span></div><div class="bot"><span class="h">partez en voyage.</span><a class="tag-link on-photo" href="#how">Explorer ${ext}</a></div></div>
  </section>
  <section class="world"><div class="wrap">
    <h2>Découvrez notre monde</h2>
    <div class="rail" id="railWorld">
      ${ORDER.map(k => `<a class="wcard" href="#${k}">${ph(META[k].hero, META[k].heroAlt, "r")}<h3>${esc(TRIPS[k].city)}</h3></a>`).join("")}
      <a class="wcard" href="#cards">${ph("gen_toast","Un toast au dîner","r")}<h3>Les cartes</h3></a>
      <a class="wcard" href="#journal">${ph("gen_sails","Toutes voiles dehors","r")}<h3>Journal</h3></a>
    </div>
    <div class="arrows"><button type="button" data-rail="railWorld" data-d="-1" aria-label="Précédent">‹</button><button type="button" data-rail="railWorld" data-d="1" aria-label="Suivant">›</button></div>
  </div></section>
  ${homeCards()}
  <section class="bigband" aria-label="La Révélation">
    ${ph("gen_pier","Silhouettes sur une jetée au coucher du soleil")}
    <div class="words"><div class="top"><span class="eyebrow">La Révélation</span><span class="h">Faites d’une semaine loin de tout</span></div><div class="bot"><span class="h">une histoire d’amour</span><a class="tag-link on-photo" href="#how">Explorer ${ext}</a></div></div>
  </section>`;
}
function wireHome(){}

/* ---------- finder dialog ---------- */
let fstate = {f:"all", q:"", open:{}};
const FTABS = [["all","Tous"],["coast","Côte"],["wine","Vin"],["wild","Nature sauvage"],["city","Ville"],["wellness","Bien-être"]];
function renderFinder(){
  $("#ftabs").innerHTML = FTABS.map(([v,l])=>`<button type="button" data-f="${v}" aria-pressed="${fstate.f===v}">${l}</button>`).join("");
  const q = fstate.q.toLowerCase();
  const keys = ORDER.filter(k => (fstate.f==="all" || META[k].tags.includes(fstate.f)) && (!q || [TRIPS[k].city,TRIPS[k].name,META[k].country,META[k].region].join(" ").toLowerCase().includes(q)));
  const regions = [...new Set(keys.map(k=>META[k].region))];
  $("#flist").innerHTML = regions.length ? regions.map((r,i) => { const open = fstate.open[r] !== false; return `
    <div class="fgroup"><button type="button" data-r="${esc(r)}" aria-expanded="${open}"><span class="n">${String(i+1).padStart(2,"0")}</span><span class="g2">${esc(r)}</span><span aria-hidden="true">${open?"−":"+"}</span></button>
    ${open ? keys.filter(k=>META[k].region===r).map(k => `<a class="frow" href="#${k}">${ph(META[k].hero, META[k].heroAlt)}<span><strong>${esc(TRIPS[k].city)}</strong><small>${esc(TRIPS[k].name)} · ${esc(META[k].country)}</small></span><span class="tag">${TRIPS[k].nights} nuits · À partir de ${TRIPS[k].price}</span></a>`).join("") : ""}</div>`; }).join("")
    : `<p class="fempty">Aucun voyage ne correspond pour l’instant.</p>`;
}
function openFinder(){ $("#finder").hidden = false; renderFinder(); $("#fq").focus(); }
function closeFinder(){ $("#finder").hidden = true; }
$("#ftabs").addEventListener("click", e => { const b=e.target.closest("button"); if(!b) return; fstate.f=b.dataset.f; renderFinder(); });
$("#fq").addEventListener("input", e => { fstate.q=e.target.value.trim(); renderFinder(); });
$("#flist").addEventListener("click", e => { const b=e.target.closest("[data-r]"); if(b){ fstate.open[b.dataset.r] = (fstate.open[b.dataset.r] === false); renderFinder(); return; } if (e.target.closest("a")) closeFinder(); });
$("#finderClose").addEventListener("click", closeFinder);
$("#finder").addEventListener("click", e => { if (e.target.id==="finder") closeFinder(); });

/* ---------- TRIP PAGE (property page) ---------- */
function trip(k){
  const t = TRIPS[k], m = META[k];
  const kv = (d, di) => `<dl class="kv">${d.s.map(([w,x])=>`<dt>${esc(w)}:</dt><dd>${esc(x)}</dd>`).join("")}${dayCards(k, di)}</dl>`;
  const d0 = t.days[0];
  const rest = t.days.slice(1).map((d,i) => `
    <article class="dcard">${ph(m.days[(i+1) % m.days.length], d.t, "r")}<p class="card-name">Journée ${i+2} · ${esc(d.t)}</p>${kv(d, i+1)}</article>`).join("");
  const featList = m.pace.list ? get(t, m.pace.list) : null;
  const storyOl = m.story.ol ? get(t, m.story.ol) : null;
  return `
  <section class="ptitle"><div class="wrap in"><span class="mono">${esc(t.name)}</span><h1>${esc(t.city)}</h1><p>${esc(m.country)} · ${esc(t.when)}</p></div></section>
  <section class="pmedia"><div class="wrap">${ph(m.hero, m.heroAlt, "", true)}</div></section>
  <section class="intro"><div class="g">
    <div class="l"><h2>${esc(m.tagline)}</h2><p>${esc(m.copy)}</p></div>
    <ul class="dash r">${m.bullets.map(b=>`<li>${esc(b)}</li>`).join("")}</ul>
  </div></section>
  <section class="band${m.dark?" dk":""}" id="program" style="--band:${m.band}"><div class="g">
    <p class="eyebrow bl">Le programme</p>
    <div class="bt"><h2>Sept nuits, jour après jour</h2><p>${esc(t.intro)}</p><a class="tag-link" href="#dates-${k}">Dates et prix ${ext}</a></div>
    <article class="feat">${ph(m.days[0], d0.t, "r")}<p class="card-name">Jour 1 · ${esc(d0.t)}</p>${kv(d0, 0)}</article>
  </div></section>
  <section class="drail-wrap"><div class="wrap">
    <div class="drail" id="drail">${rest}</div>
    <div class="arrows"><button type="button" data-rail="drail" data-d="-1" aria-label="Jour précédent">‹</button><button type="button" data-rail="drail" data-d="1" aria-label="Jour suivant">›</button></div>
  </div></section>
  ${sceneSection(k)}
  <section class="pace" id="dates"><div class="g">
    <h2>${esc(m.pace.h)}</h2>
    ${ph(m.pace.img, m.pace.alt)}
    <div class="txt"><p>${esc(m.pace.p)}</p>${featList?`<ol>${featList.map(x=>`<li>${esc(x)}</li>`).join("")}</ol>`:""}<a class="tag-link light" href="#cards">Les questions confidentielles ${ext}</a></div>
  </div></section>
  <section class="storyb" id="story"><div class="g">
    ${ph(m.story.img, m.story.alt)}
    <div class="txt"><p>${esc(m.story.p1)}</p>${storyOl?`<ol>${storyOl.map(x=>`<li>${esc(x)}</li>`).join("")}</ol>`:""}${m.story.p2?`<p>${esc(m.story.p2)}</p>`:""}<a class="tag-link light" href="#how">Le déroulé de la semaine ${ext}</a></div>
  </div></section>
  <section class="expw" id="more"><div class="g">
    ${[["c1",m.exp.a],["c2",m.exp.b]].map(([c,e])=>`<div class="${c}"><h2>${esc(e[0])}</h2>${ph(e[1], e[2])}<p>${esc(e[3])}</p><a class="tag-link light" href="${e[4]}"${e[6]?` data-jump="${e[6]}"`:""}>${esc(e[5])} ${ext}</a></div>`).join("")}
  </div></section>
  <section class="celeb" id="reveal"><div class="g">
    <div class="t"><h2>La dernière soirée</h2><p>Les choix restent confidentiels et personne n’est éliminé. La semaine se termine par la Révélation et, pour les binômes formés, un premier vrai rendez-vous.</p><a class="tag-link" href="#how">Comment ça marche ${ext}</a></div>
    <div class="a"><h3>${esc(m.celeb.a[0])}</h3>${ph(m.celeb.a[1], m.celeb.a[2])}<p>${esc(m.celeb.a[3])}</p></div>
    <div class="b"><h3>${esc(m.celeb.b[0])}</h3>${ph(m.celeb.b[1], m.celeb.b[2])}<p>${esc(m.celeb.b[3])}</p></div>
  </div></section>
  <section class="facts" id="summary"><div class="g">
    <h2>Le voyage</h2>
    <div class="rows">
      <div class="frow2"><h3>Prix</h3><ul class="dash"><li>À partir de ${t.price} par personne</li><li>Hors vols, chambre individuelle</li><li>Un acompte de 500 € réserve votre place</li></ul></div>
      ${Object.entries(m.summary).map(([h,list])=>`<div class="frow2"><h3>${esc(h)}</h3><ul class="dash">${list.map(x=>`<li>${esc(x)}</li>`).join("")}</ul></div>`).join("")}
      <div class="frow2"><h3>Postuler</h3><div><a class="pill outline" href="#apply-${k}">Postuler pour ${esc(t.city)}</a></div></div>
    </div>
  </div></section>`;
}
function wireTrip(){}

/* ---------- HOW IT WORKS ---------- */
function how(){
  return `
  <section class="ptitle"><div class="wrap in"><span class="mono">Le club</span><h1>Comment ça marche</h1><p>Sept nuits, seize membres, trois actes</p></div></section>
  <section class="pmedia"><div class="wrap">${ph("gen_sails","Un voilier traditionnel toutes voiles dehors")}</div></section>
  <section class="intro"><div class="g">
    <div class="l"><h2>Une émission de rencontres, sans la cruauté</h2><p>Chaque voyage se déroule comme une saison en trois actes, avec un hôte qui donne le rythme. Les jours 1 à 3 servent à se mélanger, les jours 4 et 5 à choisir, et les jours 6 et 7 se terminent par la Révélation.</p></div>
    <ul class="dash r"><li>Personne n’est éliminé</li><li>Passez votre tour sur n’importe quelle carte, jeu ou rendez-vous</li><li>Retour confidentiel après chaque rendez-vous</li><li>Les choix restent confidentiels, seuls les choix réciproques sont révélés</li><li>Les binômes formés ont un premier vrai rendez-vous le dernier matin</li></ul>
  </div></section>
  <section class="storyb"><div class="g">
    ${ph("gen_lamp","Une table pour deux, à la nuit tombée")}
    <div class="txt"><p>Se mélanger. Un dîner de bienvenue, des cartes de présentation et un défi d’équipe. Des binômes tirés au sort pour chaque activité, pour que personne ne s’enferme dans un petit clan.</p><p>Choisir. Des premiers rendez-vous à cheval, en bateau ou en buggy, puis les Date Picks : vous choisissez avec qui dîner. Ceux qui n’ont pas été choisis ont un dîner organisé par l’hôte.</p><p>S’engager. Du temps libre avec qui vous voulez, des choix confidentiels et la Révélation au coucher du soleil.</p><a class="tag-link light" href="#cards">Les cartes ${ext}</a></div>
  </div></section>
  ${cardsHow()}
  <section class="facts" id="safety"><div class="g">
    <h2>Sécurité et conduite</h2>
    <div class="rows">
      <div class="frow2"><h3>Avant de partir</h3><ul class="dash"><li>Candidature et appel avec votre hôte</li><li>Vérification d’identité</li><li>Code de conduite signé</li></ul></div>
      <div class="frow2"><h3>Pendant le voyage</h3><ul class="dash"><li>Chambre individuelle avec votre propre clé</li><li>Un hôte formé, habilité à exclure quiconque</li><li>Aucun jeu n’implique d’alcool</li><li>Transferts agréés après les soirées</li></ul></div>
      <div class="frow2"><h3>Caméras</h3><ul class="dash"><li>Uniquement lors des saisons signalées comme filmées</li><li>Uniquement avec une autorisation signée</li><li>Jamais pendant les rendez-vous privés</li></ul></div>
      <div class="frow2"><h3>En savoir plus</h3><div><a class="tag-link light" href="#conduct">Code de conduite ${ext}</a></div></div>
    </div>
  </div></section>`;
}

/* ---------- IMAGE CREDITS ---------- */
function credits(){
  const items = Object.entries(CREDITS).map(([k,[t,a,l]]) => `<li><a href="https://commons.wikimedia.org/wiki/File:${encodeURIComponent(t.replace(/ /g,"_"))}" target="_blank" rel="noopener">${esc(t.replace(/\.(jpe?g|tif|JPG)$/,""))}</a> · ${esc(a)} · ${esc(l)}</li>`).join("");
  return `<section class="ptitle"><div class="wrap in"><span class="mono">Mentions légales</span><h1>Crédits photo</h1><p>Toutes les photographies proviennent de Wikimedia Commons et sont utilisées conformément à leurs licences</p></div></section>
  <section class="summary"><div class="wrap"><ul class="credits">${items}</ul><p class="note">Les photographies sont redimensionnées et recadrées. Licences : CC0, CC BY et CC BY-SA (versions indiquées). Les personnes représentées ne sont pas des membres de Tringles.</p></div></section>`;
}

/* rails */
document.addEventListener("click", e => {
  const b = e.target.closest("[data-rail]");
  if (b){ const r = document.getElementById(b.dataset.rail), c = r.firstElementChild; r.scrollBy({left:(c.getBoundingClientRect().width+10)*(+b.dataset.d), behavior: reduce()?"auto":"smooth"}); }
  const f = e.target.closest("[data-finder]");
  if (f){ e.preventDefault(); openFinder(); }
});
$("#toTop").addEventListener("click", () => window.scrollTo({top:0, behavior: reduce()?"auto":"smooth"}));
// Language switch (built by scripts/i18n.mjs): keep the current view (#hash) when changing language.
document.addEventListener("click", e => { const a = e.target.closest && e.target.closest(".lang-switch a"); if (a && location.hash) a.href = a.getAttribute("href").split("#")[0] + location.hash; });
document.addEventListener("keydown", e => { if (e.key==="Escape") closeFinder(); });

/* ================= CARD SYSTEM: four jobs (Today, Spark, Table, Deep) + Private + Power =================
   Cards belong to moments of the day. Each trip page has an animated illustration whose markers open them. */
const KIND = {
  today:["Aujourd’hui","Matin","L’enveloppe scellée de votre hôte : le binôme du jour, une petite mission, ce qu’il faut emporter."],
  spark:["Spark","Pendant la journée","Des cartes de poche pour le bateau, la randonnée ou la route. Facultatives, et on peut passer son tour sur chacune."],
  table:["Table","Dîner","Une question ou un jeu par table. Les places changent chaque soir."],
  private:["Confidentiel","Tard dans la soirée","Trois questions pour l’hôte seulement. Les réponses orientent les binômes du lendemain."],
  deep:["Deep","Un soir","La Longue Table. Inspirée des 36 questions d’Arthur Aron, une seule fois, un soir."],
  power:["Power","Au moment de choisir","Un usage chacune, pendant les jours du choix. Votre hôte se charge de la partie délicate."]
};
const KORDER = ["today","spark","table","private","deep","power"];
const PRIV_B = "Vous êtes-vous senti à l’aise avec cette personne ? Qu’avez-vous le plus apprécié ? Aimeriez-vous passer plus de temps avec elle ?";
const PRIV_N = "Seul votre hôte les lit. Personne ne voit vos réponses.";
const DEEP_N = "Inspiré des 36 questions d’Arthur Aron. Vous pouvez passer votre tour sur n’importe quelle question, et sur le regard dans les yeux.";

const CARDS = {
  lisbon:[
    {id:"lis-t1",k:"today",d:2,t:"Des chaussures qui ne craignent rien",b:"Votre rendez-vous du jour est au dos de cette carte. Cinq rendez-vous ont lieu en même temps et personne ne sait qui a quoi avant le départ des voitures. Règle de la maison jusqu’au déjeuner : on ne parle pas de travail."},
    {id:"lis-t2",k:"today",d:3,t:"Vous n’avez qu’une pièce du puzzle",b:"Le déjeuner est un jeu d’équipe, et votre rôle est au dos : gardien de la recette, rédacteur de la liste, acheteur, gardien du budget ou cuisinier. Ne le montrez à personne. La cuisine ouvre à midi."},
    {id:"lis-s1",k:"spark",d:2,t:"La question que vous éviteriez",b:"Pendant votre rendez-vous, posez la question qu’on aimerait le moins vous poser. Puis répondez-y le premier."},
    {id:"lis-s2",k:"spark",d:3,t:"Azulejos et histoires",b:"En descendant vers l’Alfama, trouvez un panneau d’azulejos qui vous plaît à tous les deux. Chacun invente en deux phrases l’histoire qu’il raconte. Choisissez un gagnant. Le perdant choisit la playlist du lendemain."},
    {id:"lis-s3",k:"spark",d:6,t:"Tram 28",b:"Aucun de vous deux ne choisit le prochain arrêt. À chaque coin de rue, pile ou face : pile, vous décidez ; face, c’est votre partenaire. Celui qui perd le dernier tirage offre les pastéis de nata."},
    {id:"lis-tb1",k:"table",d:1,t:"La longue table",b:"Dites votre prénom, une chose que vous attendez avec impatience cette semaine et une chose qui vous rend nerveux. Votre hôte commence, puis on passe vers la gauche."},
    {id:"lis-tb2",k:"table",d:4,t:"Échangez une question",b:"Avant l’arrivée des entrées, écrivez une question que vous n’avez jamais posée à un inconnu. Échangez-la avec votre voisin de table. Répondez à la sienne, ou passez votre tour sur la vôtre."},
    {id:"lis-tb3",k:"table",d:7,t:"Une chose à emporter",b:"Autour de la table d’adieu, chacun nomme une chose qu’il rapporte de cette semaine. Une personne, un lieu ou un plat."},
    {id:"lis-pv",k:"private",d:2,t:"Trois questions",b:PRIV_B,n:PRIV_N},
    {id:"lis-dp",k:"deep",d:5,t:"La Longue Table",b:"Après le dîner des Date Picks, la maison se fait silencieuse. Trois tours de quinze minutes, une bougie sur chaque table et un nouveau partenaire à chaque tour. Le premier est léger et ludique, le deuxième devient personnel, le troisième parle de vous deux. Si vous le souhaitez tous les deux, terminez par quatre minutes de regard dans les yeux, sans parler.",n:DEEP_N},
    {id:"lis-pw",k:"power",d:4,t:"Échange",b:"Une fois dans la semaine, demandez à votre hôte de vous placer dans un autre binôme pour l’activité suivante. Utilisez-la discrètement. Personne ne saura qui l’a jouée."}
  ],
  rio:[
    {id:"rio-t1",k:"today",d:2,t:"Les équipes sont au dos",b:"La journée commence sur le sable : footvolley en équipes mixtes avec un coach impitoyable. Crème solaire d’abord. Celui qui laisse tomber la balle choisit la musique du déjeuner."},
    {id:"rio-t2",k:"today",d:3,t:"Tirés au sort, pas choisis",b:"Un cours de surf, une randonnée en forêt, un deltaplane ou un cours de cuisine. Vous le découvrez en route, et votre rendez-vous est au dos. Dites oui à la première chose, puis dites à votre hôte ce que vous referiez."},
    {id:"rio-s1",k:"spark",d:2,t:"Apprenez-moi un pas",b:"Apprenez à votre partenaire un pas de danse de votre région d’origine. Il vous en apprend un en retour. Le cours de samba de ce soir dira qui s’est entraîné."},
    {id:"rio-s2",k:"spark",d:4,t:"Téléphérique, sans téléphone",b:"Les deux téléphones vont dans une seule poche pour la montée au Pain de Sucre. Le premier qui tend la main pour le prendre doit une noix de coco à l’autre."},
    {id:"rio-s3",k:"spark",d:6,t:"Menu pour deux",b:"Chacun classe en secret trois sorties du menu préréservé. Révélez-les en même temps. Le premier point commun l’emporte ; sinon, pile ou face."},
    {id:"rio-tb1",k:"table",d:1,t:"Accueil sur le toit",b:"Dites votre prénom et la chose la plus spontanée que vous ayez jamais faite. Le groupe vote pour la meilleure à l’applaudimètre. Le gagnant choisit la première chanson."},
    {id:"rio-tb2",k:"table",d:4,t:"L’histoire d’un objet",b:"Racontez à votre voisin de table l’histoire d’un objet que vous possédez et que vous sauveriez d’un incendie. Puis écoutez la sienne sans chercher à faire mieux."},
    {id:"rio-tb3",k:"table",d:7,t:"Une chose à emporter",b:"À la fête d’Arpoador, chacun nomme une chose qu’il rapporte de cette semaine. Une personne, un lieu ou une caipirinha, tout compte."},
    {id:"rio-pv",k:"private",d:3,t:"Trois questions",b:PRIV_B,n:PRIV_N},
    {id:"rio-dp",k:"deep",d:5,t:"La Longue Table",b:"Après le deuxième tour des Date Picks, la villa se fait silencieuse. Trois tours de quinze minutes, une bougie sur chaque table et un nouveau partenaire à chaque tour. Le premier est léger et ludique, le deuxième devient personnel, le troisième parle de vous deux. Si vous le souhaitez tous les deux, terminez par quatre minutes de regard dans les yeux, sans parler.",n:DEEP_N},
    {id:"rio-pw",k:"power",d:4,t:"Changer de table",b:"Une fois dans la semaine, demandez à votre hôte de vous placer à une autre table pour les Date Picks du soir. L’hôte se charge de la partie délicate, et votre binôme initial profite de sa compagnie."}
  ],
  bali:[
    {id:"bal-t1",k:"today",d:2,t:"Vélos en descente",b:"Descendez à vélo à travers les rizières avec votre binôme. Le premier arrivé au marché choisit le premier ingrédient. Freinez tôt."},
    {id:"bal-t2",k:"today",d:3,t:"Cinq rendez-vous, une jungle",b:"Rafting, une cascade, un atelier d’argent, la balançoire ou une balade au temple. Votre rendez-vous et votre programme sont au dos. Ne regardez pas la carte des autres, et prenez une couche en plus."},
    {id:"bal-s1",k:"spark",d:3,t:"La légende",b:"À la balançoire, votre partenaire prend la photo et vous écrivez la légende. Elle doit être vraie."},
    {id:"bal-s2",k:"spark",d:3,t:"Sous la cascade",b:"À la cascade, chacun dit une chose dont il se défait cette année. À voix haute, par-dessus le bruit, sans répétition."},
    {id:"bal-s3",k:"spark",d:6,t:"La règle du scooter",b:"Lors d’une balade en scooter avec chauffeur, le passager choisit la destination et le chauffeur choisit l’en-cas."},
    {id:"bal-tb1",k:"table",d:1,t:"Dîner dans les rizières",b:"Si vous aviez un panneau « Ne pas déranger » pour cette semaine, que dirait-il ? Écrivez-le sur la carte, puis lisez-le à voix haute. Les autres devinent qui a écrit quoi."},
    {id:"bal-tb2",k:"table",d:4,t:"Un son",b:"Le Kecak, ce sont cent voix et aucun instrument. Au dîner, chacun produit un son qui décrit sa semaine jusqu’ici. La table devine."},
    {id:"bal-tb3",k:"table",d:7,t:"Une chose à emporter",b:"Au dîner de fruits de mer sur la plage de Jimbaran, chacun nomme une chose qu’il rapporte de cette semaine."},
    {id:"bal-pv",k:"private",d:3,t:"Trois questions",b:PRIV_B,n:PRIV_N},
    {id:"bal-dp",k:"deep",d:5,t:"La Longue Table",b:"Après le deuxième tour des Date Picks, la villa des falaises se fait silencieuse. Trois tours de quinze minutes, une bougie sur chaque table et un nouveau partenaire à chaque tour. Le premier est léger et ludique, le deuxième devient personnel, le troisième parle de vous deux. Si vous le souhaitez tous les deux, terminez par quatre minutes de regard dans les yeux, sans parler.",n:DEEP_N},
    {id:"bal-pw",k:"power",d:4,t:"Échange",b:"Une fois dans la semaine, demandez à votre hôte de vous placer dans un autre binôme pour l’activité suivante. Utilisez-la discrètement. Personne ne saura qui l’a jouée."}
  ],
  nairobi:[
    {id:"nai-t1",k:"today",d:2,t:"Quatre par jeep",b:"Votre premier safari, en groupes mixtes de quatre. Chacun doit repérer une chose : un animal, un oiseau, une trace ou un son. Celui qui ne trouve rien raconte le plus beau mensonge à ce sujet."},
    {id:"nai-t2",k:"today",d:4,t:"Debout avant le soleil",b:"La montgolfière décolle à l’aube. Tenez-vous la main dans la nacelle seulement si vous en avez envie, mais tenez votre chapeau dans tous les cas. Le petit-déjeuner vous attend à l’atterrissage."},
    {id:"nai-s1",k:"spark",d:3,t:"Le 4×4 est le rendez-vous",b:"Un jeep, c’est une petite pièce. Pendant les vingt premières minutes, vous ne pouvez vous poser que des questions commençant par « quoi » ou « quand ». C’est parti."},
    {id:"nai-s2",k:"spark",d:1,t:"Giraffe Centre",b:"Nourrissez une girafe ensemble. Puis dites chacun ce que vous feriez cette année si vous n’aviez pas peur d’avoir l’air ridicule."},
    {id:"nai-s3",k:"spark",d:6,t:"Choisissez l’animal",b:"Nommez l’animal que serait la personne à côté de vous, et expliquez pourquoi. Ce doit être gentil, et ce doit être juste."},
    {id:"nai-tb1",k:"table",d:1,t:"Sous les arbres",b:"Au dîner de bienvenue, dites votre prénom et la meilleure chose que vous ayez jamais mangée. Votre hôte commence, et doit défendre son choix."},
    {id:"nai-tb2",k:"table",d:4,t:"Dîner à deux dans la brousse",b:"Date Picks, premier tour. Échangez avec votre partenaire une règle de vie que vous suivez, et une que vous avez enfreinte récemment. Le feu reste allumé, les téléphones restent rangés."},
    {id:"nai-tb3",k:"table",d:7,t:"Une chose à emporter",b:"Au dîner d’adieu au bord du lac, chacun nomme une chose qu’il rapporte de cette semaine."},
    {id:"nai-pv",k:"private",d:3,t:"Trois questions",b:PRIV_B,n:PRIV_N},
    {id:"nai-dp",k:"deep",d:5,t:"La Longue Table",b:"Après le deuxième tour des Date Picks, le camp se fait silencieux. Trois tours de quinze minutes au coin du feu, une lanterne sur chaque table et un nouveau partenaire à chaque tour. Le premier est léger et ludique, le deuxième devient personnel, le troisième parle de vous deux. Si vous le souhaitez tous les deux, terminez par quatre minutes de regard dans les yeux, sans parler.",n:DEEP_N},
    {id:"nai-pw",k:"power",d:4,t:"Changer de jeep",b:"Une fois dans la semaine, demandez à votre hôte de vous placer dans un autre jeep pour le safari suivant. Utilisez-la discrètement. Personne ne saura qui l’a jouée."}
  ]
};
const CARD_BY_ID = {};
Object.entries(CARDS).forEach(([city,list]) => list.forEach(c => { CARD_BY_ID[c.id] = {city, card:c}; }));
const SEEN = new Set(), PASSED = new Set();

/* markers on each illustration: [card id, left %, top %] — spaced at least 16% apart for touch */
const HS = {
  lisbon:[["lis-t1",76,19],["lis-s3",39,60],["lis-s2",11,81],["lis-tb1",70,82],["lis-pv",17,19],["lis-dp",91,76]],
  rio:[["rio-t1",84,19],["rio-s2",55,36],["rio-s1",31,79],["rio-tb1",11,50],["rio-pv",20,19],["rio-dp",89,76]],
  bali:[["bal-t1",19,18],["bal-s1",75,36],["bal-s2",12,57],["bal-tb1",60,84],["bal-pv",91,12],["bal-dp",50,57]],
  nairobi:[["nai-t2",70,15],["nai-s1",62,70],["nai-s2",28,40],["nai-tb2",86,78],["nai-pv",11,15],["nai-dp",37,76]]
};
const SKY = {lisbon:"#EEF0E6", rio:"#F4E4DE", bali:"#E6EAF0", nairobi:"#F6EDE6"};
const TN = {lisbon:"#B9C39C", rio:"#C98F86", bali:"#AEB7C6", nairobi:"#C9AE9A"};
const SALT = {
  lisbon:"Illustration animée de Lisbonne : le tram 28 sur le quai sous l’Alfama, un pont sur le fleuve, un mur d’azulejos et une lanterne.",
  rio:"Illustration animée de Rio : le Pain de Sucre et son téléphérique, les vagues d’Ipanema et un filet de footvolley, un toit-terrasse sous des guirlandes lumineuses.",
  bali:"Illustration animée de Bali : rizières en terrasses, porte de temple fendue avec une lanterne, une balançoire, une cascade et des palmiers qui ondulent.",
  nairobi:"Illustration animée du Masai Mara : une montgolfière, un acacia, une girafe, un jeep de safari et un feu de camp."
};
function shade(hex, f){ const n=parseInt(hex.slice(1),16); const c=[n>>16&255,n>>8&255,n&255].map(v=>Math.max(0,Math.min(255,Math.round(v*f)))); return "#"+c.map(v=>v.toString(16).padStart(2,"0")).join(""); }
const ENV = `<svg viewBox="0 0 16 12" aria-hidden="true"><rect x=".6" y=".6" width="14.8" height="10.8" rx="1.5" fill="none" stroke="currentColor"/><path d="M1 1.5l7 5 7-5" fill="none" stroke="currentColor"/></svg>`;

/* ---------- SVG scenes (800 x 450, flat shapes, neutrals plus the trip's own colour) ---------- */
function bulbs(x1,y1,x2,y2,sag,n){ let s=`<path class="ln" d="M${x1} ${y1} Q${(x1+x2)/2} ${y1+sag*2} ${x2} ${y2}"/>`; for(let i=1;i<=n;i++){ const t=i/(n+1); const x=x1+(x2-x1)*t, y=y1+(y2-y1)*t+2*sag*t*(1-t); s+=`<circle class="tn glow" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="4" style="animation-delay:${(i*.35).toFixed(2)}s"/>`; } return s; }
function crescent(x,y){ return `<circle class="wh" cx="${x}" cy="${y}" r="22" opacity=".95"/><circle class="sk" cx="${x+11}" cy="${y-6}" r="20"/>`; }
function palm(x,base,h){ const tx=x+14, ty=base-h; let f=""; [-170,-130,-90,-50,-10,30].forEach(a=>{ f+=`<path class="b2" d="M0 0 C18 -16 44 -12 60 6 C40 0 18 2 0 0Z" transform="translate(${tx} ${ty}) rotate(${a})"/>`; });
  return `<g class="sway" style="transform-origin:${x}px ${base}px"><path d="M${x} ${base} C${x+8} ${base-h*.4} ${x+4} ${base-h*.8} ${tx} ${ty}" fill="none" stroke="#1A1A1A" stroke-width="5" stroke-linecap="round" opacity=".85"/>${f}</g>`; }
const SC = {
lisbon(){
  let houses="";
  [[14,34,44],[50,30,52],[84,36,40],[122,30,56],[156,38,46],[196,32,38],[230,36,50]].forEach(([x,w,h],i)=>{ const y=296-h;
    houses+=`<rect class="${i%2?'st':'wh'}" x="${x}" y="${y}" width="${w}" height="${h}"/><path class="tr" d="M${x-3} ${y} L${x+w/2} ${y-12} L${x+w+3} ${y}Z" opacity="${i%3?.8:1}"/><rect class="b2" x="${x+w/2-4}" y="278" width="8" height="18"/><rect class="b2" x="${x+6}" y="${y+10}" width="7" height="9"/>`; });
  let shim=""; [[60,330],[210,350],[360,336],[520,356],[640,332],[740,364]].forEach(([x,y],i)=>{ shim+=`<rect class="wh shim" x="${x}" y="${y}" width="34" height="3" rx="1.5" style="animation-delay:${i*.7}s"/>`; });
  let hang=""; for(let x=490;x<=640;x+=15){ const t=(x-473)/180; const y=172+160*t*(1-t); hang+=`<line class="ln" x1="${x}" y1="${y.toFixed(1)}" x2="${x}" y2="262"/>`; }
  let cob=""; for(let i=0;i<14;i++) cob+=`<rect class="st" x="${20+i*58}" y="${392+(i%2)*18}" width="30" height="3" rx="1.5" opacity=".28"/>`;
  let tiles=""; for(let r=0;r<2;r++) for(let c=0;c<4;c++){ const x=40+c*24, y=394+r*24; tiles+=`<rect class="wh" x="${x}" y="${y}" width="24" height="24" stroke="var(--b2)" stroke-width="1"/><path d="M${x+12} ${y+4}v16M${x+4} ${y+12}h16" stroke="var(--b2)" stroke-width="2.2" fill="none"/><circle cx="${x+12}" cy="${y+12}" r="3" class="tr"/>`; }
  return `<rect class="sk" width="800" height="450"/>${crescent(150,82)}
  <g class="bob"><circle class="tr" cx="610" cy="110" r="54" opacity=".12"/><circle class="tr" cx="610" cy="110" r="36"/></g>
  <path class="b1" d="M0 262 C90 214 180 238 270 252 C380 270 470 214 580 228 C680 240 740 224 800 214 V320 H0Z" opacity=".75"/>
  <rect class="ink" x="360" y="262" width="440" height="5"/>
  <rect class="tr" x="470" y="170" width="7" height="150"/><rect class="tr" x="650" y="170" width="7" height="150"/>
  <path class="ln" d="M360 262 Q420 200 473 172 M473 172 Q563 252 653 172 M653 172 Q730 205 800 250"/>${hang}
  <rect class="rv" y="312" width="800" height="82"/>${shim}
  <rect class="st" y="296" width="800" height="18"/><rect class="ink" y="299" width="800" height="1.5" opacity=".6"/>
  <path class="b2" d="M0 296 V262 C70 250 150 258 230 280 L270 296Z"/>${houses}
  <g class="tramg"><rect class="tn" x="300" y="270" width="72" height="28" rx="4"/><rect class="wh" x="300" y="282" width="72" height="5"/>
    <rect class="ink" x="306" y="274" width="11" height="8" rx="1" opacity=".75"/><rect class="ink" x="322" y="274" width="11" height="8" rx="1" opacity=".75"/><rect class="ink" x="338" y="274" width="11" height="8" rx="1" opacity=".75"/><rect class="ink" x="354" y="274" width="11" height="8" rx="1" opacity=".75"/>
    <path class="ln" d="M336 270 L346 258 M338 258 H356"/><circle class="ink" cx="312" cy="299" r="4"/><circle class="ink" cx="360" cy="299" r="4"/></g>
  <rect class="b2" y="380" width="800" height="70"/>${cob}
  <rect class="ink" x="37" y="391" width="102" height="52" rx="2" opacity=".85"/>${tiles}
  <path class="ln" d="M510 348 V402 M634 348 V402"/>${bulbs(510,348,634,348,32,5)}
  <rect class="wh" x="520" y="402" width="104" height="6" rx="1"/><rect class="ink" x="530" y="408" width="4" height="30"/><rect class="ink" x="610" y="408" width="4" height="30"/>
  <rect class="ink" x="728" y="352" width="3" height="50"/><circle class="tn glow" cx="729.5" cy="351" r="28" opacity=".25"/><rect class="tn" x="720" y="338" width="19" height="26" rx="3"/><rect class="wh" x="724" y="342" width="11" height="18" opacity=".8"/>`;
},
rio(){
  let wv=""; for(let r=0;r<2;r++){ wv+=`<path class="wave${r?' w2':''}" d="M-100 ${346+r*14} ${'q25 -9 50 0 t50 0 '.repeat(18)}" fill="none" stroke="#fff" stroke-width="2.2" opacity="${r?.55:.85}"/>`; }
  let net=""; for(let i=0;i<=12;i++) net+=`<line x1="${170+i*10}" y1="364" x2="${170+i*10}" y2="386" stroke="#fff" stroke-width="1" opacity=".8"/>`; for(let j=0;j<=3;j++) net+=`<line x1="170" y1="${364+j*7.3}" x2="290" y2="${364+j*7.3}" stroke="#fff" stroke-width="1" opacity=".8"/>`;
  return `<rect class="sk" width="800" height="450"/>${crescent(160,80)}
  <g class="bob"><circle class="tr" cx="670" cy="125" r="56" opacity=".12"/><circle class="tr" cx="670" cy="125" r="38"/></g>
  <path class="b2" d="M20 330 L70 222 L98 244 L140 196 L212 330Z" opacity=".8"/>
  <path class="b1" d="M0 300 C110 262 230 296 330 280 C420 266 640 290 800 270 V340 H0Z" opacity=".7"/>
  <path class="b1" d="M270 340 C282 262 330 232 382 240 C424 248 446 288 456 340Z"/>
  <path class="b2" d="M430 340 C436 242 476 176 546 150 C614 168 650 242 676 340Z"/><path class="b1" d="M546 150 C520 190 500 240 496 340 H470 C470 250 500 186 546 150Z" opacity=".5"/>
  <path class="ln" d="M352 240 L540 154 M346 252 L352 236 L358 252"/>
  <g class="cab"><line class="ln" x1="352" y1="240" x2="352" y2="248"/><rect class="wh" x="341" y="248" width="22" height="14" rx="3"/><rect class="ink" x="345" y="251" width="14" height="5" opacity=".5"/></g>
  <rect class="rv" y="336" width="800" height="20"/>
  <g class="bobx"><path class="ink" d="M560 332 H622 L612 342 H570Z"/><path class="ln" d="M592 296 V332"/><path class="wh" d="M591 298 V330 H566Z"/><path class="wh" d="M595 302 V330 H620Z"/></g>
  <path class="tn" d="M0 352 C150 340 300 356 450 346 S720 338 800 350 V450 H0Z"/>${wv}
  <path class="b2" opacity=".22" d="M0 410 C200 396 400 420 800 404 V450 H0Z"/>
  <rect class="st" x="30" y="282" width="120" height="50"/><rect class="b2" x="24" y="276" width="132" height="8"/><rect class="ink" x="44" y="298" width="14" height="20" opacity=".55"/><rect class="ink" x="76" y="298" width="14" height="20" opacity=".55"/><rect class="ink" x="108" y="298" width="14" height="20" opacity=".55"/>
  ${bulbs(20,268,162,268,26,6)}
  <line class="ln" x1="170" y1="352" x2="170" y2="392"/><line class="ln" x1="290" y1="352" x2="290" y2="392"/>${net}
  <circle class="wh bounce" cx="230" cy="380" r="7" stroke="#1A1A1A" stroke-width="1.2"/>
  <path class="b2" d="M660 400 C670 360 730 350 770 372 C790 384 800 396 800 404 V450 H650Z"/>
  <rect class="ink" x="733" y="332" width="3" height="40"/><circle class="tn glow" cx="734.5" cy="322" r="26" opacity=".25"/><rect class="tn" x="725" y="310" width="19" height="26" rx="3"/><rect class="wh" x="729" y="314" width="11" height="18" opacity=".8"/>`;
},
bali(){
  const cls=["b1","b2","tn","b1","b2","tn","b2"]; let ter="", edge="";
  for(let i=0;i<7;i++){ const y=236+i*30, a=16+(i%3)*4; const d=`M0 ${y} C160 ${y-a} 320 ${y+12} 480 ${y-6} S720 ${y+8} 800 ${y-4}`; ter+=`<path class="${cls[i]}" d="${d} V450 H0Z"/>`; edge+=`<path d="${d}" fill="none" stroke="#fff" stroke-width="1.6" opacity=".35"/>`; }
  return `<rect class="sk" width="800" height="450"/>
  <g class="bob"><circle class="tr" cx="150" cy="110" r="52" opacity=".12"/><circle class="tr" cx="150" cy="110" r="34"/></g>${crescent(700,75)}
  <path class="b1" d="M0 250 C90 200 170 170 250 205 C330 240 380 190 470 180 C560 170 640 210 800 190 V300 H0Z" opacity=".75"/>
  <ellipse class="wh drift" cx="250" cy="170" rx="110" ry="9" opacity=".5"/><ellipse class="wh drift" cx="560" cy="150" rx="90" ry="7" opacity=".4" style="animation-delay:-8s"/>
  ${ter}${edge}
  <path class="b2" d="M52 232 L150 232 L162 316 L40 316Z"/><rect class="wh" x="94" y="232" width="9" height="84" rx="4" opacity=".9"/><line class="fall" x1="98.5" y1="232" x2="98.5" y2="316" stroke="var(--b)" stroke-width="3" stroke-dasharray="6 8"/><ellipse class="wh" cx="98" cy="318" rx="24" ry="5" opacity=".7"/>
  <path class="ink" opacity=".85" d="M330 330 V272 H342 V250 H354 V228 H366 V208 H380 V330Z M470 330 V272 H458 V250 H446 V228 H434 V208 H420 V330Z"/>
  <path class="ln" d="M380 208 H420 M400 208 V222"/><circle class="tn glow" cx="400" cy="236" r="26" opacity=".25"/><rect class="tn" x="391" y="222" width="18" height="24" rx="4"/><rect class="wh" x="395" y="227" width="10" height="14" opacity=".8"/>
  <path class="ln" d="M566 184 L552 292 M634 184 L648 292"/><rect class="ink" x="563" y="180" width="74" height="5" rx="1"/><g class="swing"><line class="ln" x1="588" y1="187" x2="588" y2="255"/><line class="ln" x1="612" y1="187" x2="612" y2="255"/><rect class="tn" x="580" y="255" width="40" height="6" rx="2"/></g>
  ${palm(710,424,150)}${palm(762,432,118)}
  <rect class="b2" y="428" width="800" height="22"/>
  <path class="tr" d="M440 372 L480 350 L520 372Z"/>${bulbs(446,372,514,372,10,4)}<rect class="wh" x="450" y="402" width="60" height="5" rx="1"/><rect class="ink" x="458" y="407" width="4" height="22"/><rect class="ink" x="498" y="407" width="4" height="22"/>`;
},
nairobi(){
  let acacia=`<path class="ln" style="stroke-width:6" d="M652 336 C650 300 642 270 640 250"/><path class="ln" style="stroke-width:3" d="M642 262 C620 250 596 246 580 240 M644 258 C670 246 700 246 724 238"/><ellipse class="ink" cx="650" cy="232" rx="96" ry="12" opacity=".85"/><ellipse class="ink" cx="600" cy="224" rx="50" ry="9" opacity=".85"/><ellipse class="ink" cx="712" cy="226" rx="50" ry="9" opacity=".85"/>`;
  let stars=""; [[40,40],[210,30],[330,56],[460,24],[740,48],[600,34],[150,120]].forEach(([x,y],i)=>{ stars+=`<circle class="wh glow" cx="${x}" cy="${y}" r="1.8" style="animation-delay:${i*.5}s"/>`; });
  return `<rect class="sk" width="800" height="450"/>${stars}${crescent(90,70)}
  <g class="bob"><circle class="tr" cx="300" cy="300" r="112" opacity=".12"/><circle class="tr" cx="300" cy="300" r="80"/></g>
  <path class="b1" d="M0 300 C120 276 220 296 330 288 C460 278 600 296 800 282 V310 H0Z" opacity=".7"/>
  <rect class="tn" y="300" width="800" height="150"/>
  <ellipse class="b1" cx="150" cy="332" rx="220" ry="14" opacity=".35"/><ellipse class="b1" cx="600" cy="352" rx="260" ry="16" opacity=".35"/><ellipse class="b1" cx="400" cy="402" rx="380" ry="18" opacity=".3"/>
  ${acacia}
  <g class="float"><ellipse class="tn" cx="560" cy="140" rx="34" ry="40" stroke="#1A1A1A" stroke-width="1" stroke-opacity=".25"/><path class="wh" opacity=".85" d="M560 100 C546 112 542 128 548 150 C552 164 556 174 560 180 C564 174 568 164 572 150 C578 128 574 112 560 100Z"/><path class="b2" opacity=".7" d="M527 140 C528 128 534 116 544 108 C538 124 538 140 546 156 C536 154 528 148 527 140Z"/><line class="ln" x1="545" y1="172" x2="551" y2="188"/><line class="ln" x1="575" y1="172" x2="569" y2="188"/><rect class="ink" x="551" y="188" width="18" height="11"/></g>
  <g><ellipse class="b2" cx="165" cy="326" rx="46" ry="22" stroke="#1A1A1A" stroke-opacity=".25"/><circle class="tn" cx="150" cy="322" r="6"/><circle class="tn" cx="172" cy="332" r="7"/><circle class="tn" cx="188" cy="320" r="5"/>
   <rect class="b2" x="128" y="336" width="8" height="54"/><rect class="b2" x="144" y="338" width="8" height="52"/><rect class="b2" x="180" y="338" width="8" height="52"/><rect class="b2" x="196" y="336" width="8" height="54"/><path class="ln" d="M122 322 C108 332 106 352 112 368"/>
   <g class="gneck"><polygon class="b2" points="182,320 200,214 214,216 214,322" stroke="#1A1A1A" stroke-opacity=".25"/><circle class="tn" cx="203" cy="260" r="5"/><circle class="tn" cx="205" cy="290" r="5"/><ellipse class="b2" cx="224" cy="208" rx="17" ry="8" transform="rotate(-18 224 208)"/><path class="ln" d="M208 204 L206 194 M214 202 L214 192"/><circle class="ink" cx="228" cy="205" r="1.6"/></g></g>
  <g class="jeepg"><rect class="ink" x="468" y="334" width="66" height="20" rx="3"/><rect class="ink" x="480" y="318" width="38" height="18" rx="3" opacity=".9"/><rect class="wh" x="484" y="322" width="14" height="10" opacity=".8"/><rect class="wh" x="502" y="322" width="12" height="10" opacity=".8"/><path class="ln" d="M478 318 H522"/><circle class="ink" cx="484" cy="356" r="8"/><circle class="st" cx="484" cy="356" r="3"/><circle class="ink" cx="520" cy="356" r="8"/><circle class="st" cx="520" cy="356" r="3"/></g>
  <circle class="tn glow" cx="302" cy="386" r="36" opacity=".25"/><rect class="ink" x="280" y="402" width="44" height="7" rx="3" transform="rotate(8 302 405)"/><rect class="ink" x="280" y="402" width="44" height="7" rx="3" transform="rotate(-8 302 405)"/>
  <g class="flame" style="transform-origin:302px 402px"><path class="tr" d="M300 402 C288 388 296 372 302 362 C308 374 318 384 310 402Z"/><path class="tn" d="M302 402 C296 394 300 384 303 378 C308 386 312 394 306 402Z"/></g>
  <path class="ln" d="M640 350 V398 M760 350 V398"/>${bulbs(640,350,760,350,32,5)}
  <rect class="wh" x="650" y="398" width="100" height="6" rx="1"/><rect class="ink" x="662" y="404" width="4" height="30"/><rect class="ink" x="734" y="404" width="4" height="30"/>`;
}
};

/* ---------- illustration with markers ---------- */
function scene(k){
  const m = META[k];
  const hs = HS[k].map(([id,x,y],i) => { const c = CARD_BY_ID[id].card, kl = KIND[c.k][0];
    return `<button type="button" class="hs${SEEN.has(id)?" seen":""}${PASSED.has(id)?" passed":""}" data-card="${id}" style="left:${x}%;top:${y}%;--dl:${(i*.45).toFixed(2)}s" aria-label="Open the ${kl} card: ${esc(c.t)}"><span class="mk">${ENV}<span class="t">${kl}</span></span></button>`; }).join("");
  return `<div class="scn" style="--sky:${SKY[k]};--b:${m.band};--b2:${shade(m.band,.78)};--tn:${TN[k]};--bi:${m.dark?"#FBFBFA":"#1A1A1A"}"><svg viewBox="0 0 800 450" preserveAspectRatio="xMidYMid slice" role="img" aria-label="${esc(SALT[k])}">${SC[k]()}</svg><div class="hsl">${hs}</div></div>`;
}
function moments(k){
  return KORDER.map(kind => { const cs = CARDS[k].filter(c => c.k===kind); if (!cs.length) return "";
    return `<div class="mrow"><div class="mh"><h3>${KIND[kind][0]}</h3><p>${KIND[kind][1]}</p></div><div class="mc">${cs.map(c => `<button type="button" class="tag-link light chip${SEEN.has(c.id)?" seen":""}" data-card="${c.id}"><b>Journée ${c.d}</b> ${esc(c.t)}</button>`).join("")}</div></div>`; }).join("");
}
function sceneSection(k){
  return `<section class="scene" id="scene"><div class="g">
    <div class="sh"><span class="eyebrow">Les cartes</span><h2>Ouvrir une carte</h2></div>
    <div class="sp"><p>Votre hôte distribue des cartes tout au long de la semaine, et chaque carte correspond à un moment de la journée. Touchez un repère dans l’image pour en ouvrir une, ou choisissez dans la liste. On peut passer son tour sur chaque carte.</p></div>
    <div class="sf">${scene(k)}</div>
    <div class="sm">${moments(k)}</div>
  </div></section>`;
}
function dayCards(k, di){
  const cs = CARDS[k].filter(c => c.d===di+1); if (!cs.length) return "";
  return `<dt>Cartes :</dt><dd class="cl">${cs.map(c => `<button type="button" class="cl-b" data-card="${c.id}" title="${esc(KIND[c.k][1])}: ${esc(c.t)}">${KIND[c.k][0]}</button>`).join("")}</dd>`;
}

/* ---------- homepage example: different cities, different cards ---------- */
let homeCity = "lisbon";
function homeGrid(k){
  const first = CARD_BY_ID[HS[k][0][0]].card, t = TRIPS[k];
  const lines = ["today","spark","table","private"].map(kind => { const c = CARDS[k].find(x => x.k===kind); return `<li><button type="button" data-card="${c.id}"><b>${KIND[kind][0]}</b><span>${KIND[kind][1]}</span><em>${esc(c.t)}</em></button></li>`; }).join("");
  return `<div class="cscene">${scene(k)}</div>
  <div class="cface"><div class="cf-card" style="--b:${META[k].band}"><span class="cf-k">${KIND[first.k][0]} · Jour ${first.d} · ${t.city}</span><h3>${esc(first.t)}</h3><p>${esc(first.b)}</p><div class="cf-a"><button class="pill dark" type="button" data-card="${first.id}">Ouvrir cette carte</button><a class="tag-link light" href="#${k}">Voir ${esc(t.city)} ${ext}</a></div></div>
  <ul class="cf-l" aria-label="Les moments de la journée">${lines}</ul></div>`;
}
function homeCards(){
  return `<section class="cshow" id="cshow"><div class="wrap">
    <h2>Des cartes pour chaque ville</h2>
    <p class="lead">Chaque voyage a ses propres cartes, ouvertes à différents moments de la journée. Choisissez une ville, puis touchez un repère dans l’image.</p>
    <div class="ctabs" id="ctabs">${ORDER.map(k => `<button type="button" data-ctab="${k}" aria-pressed="${k===homeCity}">${esc(TRIPS[k].city)}</button>`).join("")}</div>
    <div class="cgrid" id="cgrid">${homeGrid(homeCity)}</div>
  </div></section>`;
}

/* ---------- card dialog: sealed envelope, then an unfolding card ---------- */
document.body.insertAdjacentHTML("beforeend", `<div class="cdlg" id="cdlg" hidden role="dialog" aria-modal="true" aria-labelledby="cdT">
  <button class="cd-x" type="button" id="cdX" aria-label="Fermer la carte">✕</button>
  <div class="cd-in" id="cdIn">
    <div class="stage">
      <button class="env" type="button" id="cdEnv" aria-label="Ouvrir la carte scellée"><span class="eback"></span><span class="epocket"></span><span class="eflap"></span><span class="eseal">T</span><span class="elbl" id="cdLbl"></span></button>
      <article class="cardf" id="cdCard"><span class="cd-k" id="cdK"></span><h3 id="cdT"></h3><p class="cd-b" id="cdB"></p><p class="cd-n" id="cdN"></p><div class="cd-a"><button class="pill outline" type="button" id="cdPass">Passer</button><button class="pill dark" type="button" id="cdKeep">La garder</button></div><p class="cd-f" id="cdF">On peut passer son tour sur chaque carte.</p></article>
    </div>
    <p class="hint" id="cdHint">Touchez l’enveloppe pour l’ouvrir</p>
  </div></div>`);
let cdOpener = null, cdId = null, cdTimer = null;
const cdEl = id => document.getElementById(id);
function markCard(id){ document.querySelectorAll(`[data-card="${id}"]`).forEach(b => { b.classList.toggle("seen", SEEN.has(id)); b.classList.toggle("passed", PASSED.has(id)); }); }
function openCard(id, opener){
  const rec = CARD_BY_ID[id]; if (!rec) return;
  const {city, card:c} = rec, m = META[city], kl = KIND[c.k];
  clearTimeout(cdTimer); cdOpener = opener || document.activeElement; cdId = id;
  const inn = cdEl("cdIn"); inn.classList.remove("open","gone");
  inn.style.setProperty("--b", m.band); inn.style.setProperty("--b2", shade(m.band,.78)); inn.style.setProperty("--bi", m.dark?"#FBFBFA":"#1A1A1A");
  cdEl("cdLbl").textContent = `${kl[0]} · Jour ${c.d} · ${TRIPS[city].city}`;
  cdEl("cdK").textContent = `${kl[0]} · ${kl[1]} · Jour ${c.d}`;
  cdEl("cdT").textContent = c.t; cdEl("cdB").textContent = c.b;
  const n = cdEl("cdN"); n.textContent = c.n || ""; n.hidden = !c.n;
  cdEl("cdPass").disabled = false; cdEl("cdKeep").disabled = false; cdEl("cdF").textContent = "On peut passer son tour sur chaque carte.";
  cdEl("cdHint").hidden = false;
  cdEl("cdlg").hidden = false; document.documentElement.style.overflow = "hidden";
  cdEl("cdEnv").focus();
}
function unseal(){
  const inn = cdEl("cdIn"); if (inn.classList.contains("open") || !cdId) return;
  inn.classList.add("open"); cdEl("cdHint").hidden = true; SEEN.add(cdId); markCard(cdId);
  setTimeout(() => cdEl("cdKeep").focus(), reduce() ? 0 : 520);
}
function closeCard(){
  const dlg = cdEl("cdlg"); if (dlg.hidden) return;
  clearTimeout(cdTimer); dlg.hidden = true; document.documentElement.style.overflow = "";
  const o = cdOpener; cdId = null; cdOpener = null; if (o && document.contains(o) && o.focus) o.focus();
}
function passCard(){
  if (!cdId) return; PASSED.add(cdId); markCard(cdId);
  cdEl("cdB").textContent = "Passé. Personne ne demande pourquoi."; cdEl("cdN").hidden = true; cdEl("cdF").textContent = "On peut passer son tour sur chaque carte.";
  cdEl("cdPass").disabled = true; cdEl("cdKeep").disabled = true;
  cdTimer = setTimeout(closeCard, reduce() ? 500 : 1100);
}
cdEl("cdEnv").addEventListener("click", unseal);
cdEl("cdKeep").addEventListener("click", closeCard);
cdEl("cdPass").addEventListener("click", passCard);
cdEl("cdX").addEventListener("click", closeCard);
cdEl("cdlg").addEventListener("click", e => { if (e.target.id === "cdlg" || e.target.id === "cdIn" || e.target.classList.contains("stage")) closeCard(); });
document.addEventListener("keydown", e => {
  if (cdEl("cdlg").hidden) return;
  if (e.key === "Escape") { e.preventDefault(); closeCard(); return; }
  if (e.key === "Tab") {
    const f = [...cdEl("cdlg").querySelectorAll("button:not([disabled])")].filter(b => b.offsetParent !== null && getComputedStyle(b).visibility !== "hidden");
    if (!f.length) return; const first = f[0], last = f[f.length-1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
});
document.addEventListener("click", e => {
  const b = e.target.closest("[data-card]"); if (b && !b.closest("#cdlg")) { e.preventDefault(); openCard(b.dataset.card, b); return; }
  const t = e.target.closest("[data-ctab]");
  if (t) { homeCity = t.dataset.ctab; const g = document.getElementById("cgrid"); if (g) g.innerHTML = homeGrid(homeCity); document.querySelectorAll("#ctabs button").forEach(x => x.setAttribute("aria-pressed", String(x.dataset.ctab === homeCity))); }
});

/* ---------- How It Works: the card system in words ---------- */
function cardsHow(){
  const lvl = (id) => DECKS.find(d => d.id===id).qs.slice(0,3);
  return `<section class="facts" id="cards-sec"><div class="g">
    <h2>Les cartes</h2>
    <div class="rows">
      <div class="frow2"><h3>L’idée</h3><div><p>Les cartes permettent à votre hôte d’animer la semaine sans programme rigide. Elles arrivent à des moments précis de la journée, vous disent quoi faire avec la personne à côté de vous, et on peut passer son tour sur chacune.</p></div></div>
      ${["today","spark","table","private"].map(kind => `<div class="frow2"><h3>${KIND[kind][0]}</h3><div><p><strong>${KIND[kind][1]}.</strong> ${KIND[kind][2]}</p></div></div>`).join("")}
      <div class="frow2"><h3>La Longue Table</h3><div><p>Un soir, généralement le cinquième, après le deuxième tour des Date Picks. Trois tours de quinze minutes avec un nouveau partenaire à chaque fois, construits à partir des 36 questions d’Arthur Aron. Le premier est léger et ludique, le deuxième devient personnel, le troisième parle de vous deux. Si vous le souhaitez tous les deux, vous terminez par quatre minutes de regard dans les yeux, sans parler.</p></div></div>
      ${[["Tour 1","deep1"],["Tour 2","deep2"],["Tour 3","deep3"]].map(([n,id]) => `<div class="frow2"><h3>${n}</h3><ul class="dash">${lvl(id).map(q => `<li>${esc(q)}</li>`).join("")}</ul></div>`).join("")}
      <div class="frow2"><h3>Cartes Power</h3><div><p>Pendant les jours du choix, chaque membre dispose de quatre cartes, à usage unique : <strong>Échange</strong> (changer de binôme), <strong>Changer de table</strong> (une autre place au dîner), <strong>Veto</strong> (refuser un binôme, sans justification) et <strong>Rendez-vous à quatre</strong> (venir avec un ami). Votre hôte se charge de la partie délicate, et personne ne sait qui a joué quoi.</p></div></div>
      <div class="frow2"><h3>Les découvrir</h3><div><a class="tag-link light" href="#lisbon-scene">Ouvrir une carte de Lisbonne ${ext}</a> <a class="tag-link light" href="#rio-scene">Rio ${ext}</a> <a class="tag-link light" href="#bali-scene">Bali ${ext}</a> <a class="tag-link light" href="#nairobi-scene">Nairobi ${ext}</a></div></div>
    </div>
  </div></section>`;
}

/* ---------- shared page helpers ---------- */
const pageTitle = (eyebrow, h1, sub) => `<section class="ptitle"><div class="wrap in"><span class="mono">${esc(eyebrow)}</span><h1>${esc(h1)}</h1>${sub?`<p>${esc(sub)}</p>`:""}</div></section>`;
const INCLUDED = ["Chambre individuelle avec votre propre clé, chaque nuit","Tous les transferts terrestres, de l’arrivée au départ","Tous les rendez-vous, activités et défis du programme","La plupart des repas, comme indiqué dans chaque programme","Votre hôte pendant toute la semaine","Les jeux de cartes Tringles"];
const NOT_INCLUDED = ["Vols internationaux","Assurance voyage (obligatoire)","Visas ou frais d’entrée le cas échéant","Boissons en dehors des repas inclus","Dépenses personnelles"];
const SEATS = {lisbon:"8 + 8", rio:"8 + 8", bali:"8 + 8", nairobi:"6–8 + 6–8"};
const NIGHTS = {lisbon:"Sam. 15 – sam. 22 mai 2027", rio:"Sam. 13 – sam. 20 mars 2027", bali:"Sam. 12 – sam. 19 juin 2027", nairobi:"Sam. 11 – sam. 18 sept. 2027"};

/* ---------- DATES & PRICES ---------- */
function dates(){
  return pageTitle("Saison un","Dates et prix","Prix indicatifs par personne, hors vols, chambre individuelle") + `
  <section class="summary"><div class="wrap">
    <div class="ptable" role="table" aria-label="Dates et prix de la saison un">
      <div class="prow phead" role="row"><span role="columnheader">Voyage</span><span role="columnheader">Dates</span><span role="columnheader">Nuits</span><span role="columnheader">Places par liste</span><span role="columnheader">À partir de</span><span role="columnheader"></span></div>
      ${ORDER.map(k=>`<div class="prow" role="row" id="row-${k}">
        <span role="cell"><a href="#${k}" class="pname">${esc(TRIPS[k].city)}</a><small>${esc(TRIPS[k].name)}</small></span>
        <span role="cell">${esc(NIGHTS[k])}</span>
        <span role="cell">${TRIPS[k].nights}</span>
        <span role="cell">${esc(SEATS[k])}</span>
        <span role="cell" class="pp">À partir de ${TRIPS[k].price}</span>
        <span role="cell"><a class="tag-link" href="#apply-${k}">Postuler</a></span>
      </div>`).join("")}
    </div>
    <p class="note">Les dates exactes restent provisoires jusqu’à l’ouverture de chaque saison. Un acompte de 500 € réserve votre place une fois votre candidature acceptée ; le solde est dû 60 jours avant le départ.</p>
    <div class="sgrid" style="margin-top:56px">
      <div><h3>Inclus</h3><ul class="dash">${INCLUDED.map(x=>`<li>${esc(x)}</li>`).join("")}</ul></div>
      <div><h3>Non inclus</h3><ul class="dash">${NOT_INCLUDED.map(x=>`<li>${esc(x)}</li>`).join("")}</ul></div>
      <div><h3>Acompte et paiement</h3><ul class="dash"><li>Acompte de 500 € après acceptation</li><li>Solde dû 60 jours avant le départ</li><li>Paiement par lien sécurisé, jamais via ce site</li></ul></div>
    </div>
  </div></section>`;
}

/* ---------- FAQ ---------- */
const FAQS = [
  ["À qui s’adressent les voyages ?","Aux célibataires d’environ 26 à 38 ans (28 à 40 pour Nairobi) qui préfèrent rencontrer quelqu’un en kayak plutôt que dans une fenêtre de discussion. Chaque groupe respecte un équilibre 8/8 : femmes et hommes postulent sur des listes séparées."],
  ["Faut-il chercher l’amour ?","Non. Beaucoup de membres viennent pour le voyage et les rencontres. Lors de la Révélation, vous choisissez des liens amoureux et amicaux, si bien que la semaine se termine de toute façon avec des personnes à revoir."],
  ["Et si je ne forme de binôme avec personne ?","Les choix sont confidentiels et seuls les choix réciproques sont annoncés : personne n’entend de refus. La plupart des membres repartent avec de nouveaux amis et une histoire à raconter, et beaucoup avec des projets de se revoir."],
  ["Serai-je associé à quelqu’un qui ne me plaît pas ?","Les premiers binômes sont tirés au sort et changent à chaque activité. Après chaque rendez-vous, vous donnez un retour confidentiel à l’hôte, qui s’en sert pour composer les binômes suivants. Vous pouvez passer votre tour sur n’importe quelle carte, jeu ou rendez-vous."],
  ["Dans quelle langue se déroule le voyage ?","Chaque saison se déroule en anglais ou en russe, et la page du voyage l’indique. Pour la saison un, les hôtes parlent les deux langues."],
  ["Les vols sont-ils inclus ?","Non. Les prix couvrent le programme sur place : chambres, transferts, la plupart des repas, toutes les activités, votre hôte et les jeux de cartes. Nous vous suggérons des horaires d’arrivée et de départ."],
  ["Est-ce filmé ?","Seulement les saisons phares, clairement signalées à l’avance. Le tournage nécessite votre autorisation signée, et les rendez-vous privés, les chambres et vos choix ne sont jamais filmés. Vous pouvez refuser et venir quand même."],
  ["Comment assurez-vous la sécurité de chacun ?","Chaque candidat a un appel avec un hôte et une vérification d’identité, et signe le code de conduite. Les chambres sont individuelles avec votre propre clé, un hôte formé accompagne chaque groupe et peut exclure quiconque, et des transferts agréés vous raccompagnent après chaque soirée."],
  ["Puis-je venir avec un ami ?","Oui, postulez séparément et mentionnez-vous mutuellement dans votre candidature. Vous serez dans des binômes différents pendant les activités, et c’est la moitié du plaisir."],
  ["Quelles sont les conditions d’annulation ?","L’acompte de 500 € est remboursable pendant 14 jours après l’acceptation. Ensuite, une annulation plus de 60 jours avant le départ entraîne la perte de l’acompte ; à moins de 60 jours, le prix total est dû, sauf si votre place est reprise par quelqu’un de la même liste. L’assurance voyage est obligatoire."],
  ["Que se passe-t-il si un voyage est annulé ?","Si nous annulons, nous vous remboursons intégralement tout ce que vous nous avez payé, ou vous proposons une place sur une autre saison si vous préférez."]
];
function faq(){
  return pageTitle("Assistance","FAQ","Bon à savoir avant de postuler") + `
  <section class="summary"><div class="wrap faqwrap">
    ${FAQS.map(([q,a],i)=>`<details class="faqi"${i===0?" open":""}><summary>${esc(q)}</summary><p>${esc(a)}${a.startsWith("Brouillon")?"":""}</p></details>`).join("")}
    <p class="note" style="margin-top:28px">Encore des doutes ? Écrivez à tringles@tourground.com.</p>
  </div></section>`;
}

/* ---------- ABOUT / HOSTS ---------- */
function about(){
  return pageTitle("Le club","À propos de Tringles","Oubliez le premier rendez-vous. Partez en voyage.") + `
  <section class="intro"><div class="wrap">
    <div><h2>Un club que l’on rejoint pour une semaine</h2><p>Tringles est né d’un constat simple : un premier rendez-vous autour d’un verre en dit très peu, une semaine en bateau, à cheval et sur une piste de danse en dit beaucoup. Nous avons donc créé de petits voyages accompagnés où rencontrer quelqu’un fait partie de l’itinéraire, sans jamais en être le seul but.</p></div>
    <ul class="dash"><li>De petits groupes de 12 à 16 membres</li><li>Chaque voyage mené par un hôte, présent sur place toute la semaine</li><li>Des partenaires locaux avec qui nous travaillons depuis des années</li><li>Saison un : Lisbonne, Rio, Bali et Nairobi</li></ul>
  </div></section>
  <section class="story"><div class="wrap">
    ${ph("gen_candles","Une longue table dressée pour le dîner")}
    <div class="txt"><p>Tringles a été cofondé par un voyagiste dont l’agence réceptive travaille avec des partenaires dans plus de 130 pays, et par un créateur de contenu sur les rencontres dont l’audience réclame depuis des années quelque chose de mieux que les applis.</p><p>L’un sait organiser une semaine sans faute n’importe où dans le monde. L’autre sait ce qui pousse les gens à s’ouvrir, et ce qui les fait se refermer.</p></div>
  </div></section>
  <section class="summary"><div class="wrap"><h2>Les hôtes</h2><div class="sgrid">
    <div><h3>Qui ils sont</h3><ul class="dash"><li>Des accompagnateurs ou animateurs d’événements expérimentés</li><li>Parlant couramment la langue de la saison</li><li>Formés à la dynamique de groupe et à la protection des personnes</li></ul></div>
    <div><h3>Ce qu’ils font</h3><ul class="dash"><li>Ils gèrent les cartes, les cercles et les binômes</li><li>Ils lisent vos retours confidentiels après chaque rendez-vous</li><li>Ils veillent sur ceux qui se sentent mis à l’écart</li></ul></div>
    <div><h3>Ce qu’ils peuvent faire</h3><ul class="dash"><li>Modifier n’importe quel programme pour raison de sécurité ou de météo</li><li>Exclure quiconque enfreint le code de conduite</li><li>Appeler l’équipe locale à toute heure</li></ul></div>
  </div></div></section>`;
}

/* ---------- JOURNAL ---------- */
const STORIES = [
  {t:"Pourquoi le premier rendez-vous ne fonctionne pas", d:"Quatre-vingt-dix minutes, deux verres et un verdict. Plaidoyer pour rencontrer quelqu’un au fil d’une semaine pleine de vraies choses à faire.", tone:"gen_sails", cap:"Toutes voiles dehors", href:"#how", cta:"Comment ça marche"},
  {t:"Trente-six questions, trois niveaux", d:"Comment l’étude d’Arthur Aron sur la proximité a façonné le jeu Deep, et pourquoi les questions les plus difficiles viennent en dernier.", tone:"gen_lamp", cap:"Une table pour deux, à la nuit tombée", href:"#cards", cta:"Les cartes"},
  {t:"Cinq premiers rendez-vous autour de Lisbonne", d:"Des chevaux à travers les chênes-lièges, un capitaine sur le Sado, un buggy dans la poussière. Le deuxième jour de la Semaine des vignes.", tone:"lis_horses", cap:"Cavaliers sur des chevaux lusitaniens", href:"#lisbon", cta:"Lisbonne"},
  {t:"Ce que fait vraiment un hôte", d:"Les binômes, les cercles du soir et le mot discret pour celui qui se sent mis à l’écart. Une journée avec un hôte Tringles.", tone:"gen_toast", cap:"Un toast au dîner", href:"#about", cta:"À propos des hôtes"}
];
function journal(){
  return pageTitle("Récits","Journal","Notes du club") + `
  <section class="journal"><div class="wrap">
    ${STORIES.map(s=>`<a class="jcard" href="${s.href}">${ph(s.tone, s.cap, "r")}<span class="eyebrow">${esc(s.cta)}</span><h2>${esc(s.t)}</h2><p>${esc(s.d)}</p></a>`).join("")}
  </div></section>`;
}

/* ---------- CODE OF CONDUCT / PRIVACY / TERMS ---------- */
function legal(eyebrow, title, sub, sections){
  return pageTitle(eyebrow, title, sub) + `
  <section class="summary"><div class="wrap legal">
    ${sections.map(([h,ps])=>`<div class="lsec"><h2>${esc(h)}</h2>${ps.map(p=>`<p>${esc(p)}</p>`).join("")}</div>`).join("")}
  </div></section>`;
}
const conduct = () => legal("Le club","Code de conduite","Ce que chaque membre accepte avant de partir",[
  ["Le respect est la règle",["Traitez chaque membre, hôte, guide et partenaire local avec respect. Aucun harcèlement, aucune pression ni aucun contact non désiré, en personne comme en ligne."]],
  ["Le consentement, toujours",["L’intérêt se manifeste, il ne se présume jamais. Un non, un « je passe » ou un silence est un non. Chacun peut passer son tour sur n’importe quelle carte, jeu ou rendez-vous sans donner de raison."]],
  ["Les chambres sont privées",["Chacun dispose d’une chambre individuelle avec sa propre clé. Les jeux et activités de groupe n’ont jamais lieu dans les chambres."]],
  ["Boire avec modération",["Personne n’est poussé à boire et aucun jeu n’implique d’alcool. L’hôte peut intervenir si quelqu’un n’est plus en état de prendre soin de lui-même."]],
  ["Confidentialité",["Ne photographiez pas les autres membres et ne publiez rien les concernant sans leur accord. Les choix, les retours et la Révélation restent confidentiels."]],
  ["Honnêteté",["Vous confirmez être célibataire et majeur, et que les informations de votre candidature sont exactes."]],
  ["En cas de problème",["Prévenez votre hôte ou contactez directement les fondateurs à tout moment. Les hôtes peuvent exclure toute personne qui enfreint ce code, à ses frais et sans remboursement."]]
]);
const ADDRESS = "Second Home Lisboa, Mercado da Ribeira, Avenida 24 de Julho 49, 1200-479 Lisboa, Portugal";
const privacy = () => legal("Mentions légales","Politique de confidentialité","Ce que nous collectons, pourquoi, et ce que vous pouvez nous demander d’en faire",[
  ["Qui sommes-nous",["Tringles organise des voyages en petit groupe pour célibataires. Notre adresse est " + ADDRESS + ". We decide how the personal data described here is used and are responsible for it. Write to us about anything on this page at tringles@tourground.com."]],
  ["Ce que recueille la candidature",["Vos nom, e-mail et un numéro de téléphone ou contact de messagerie ; votre pays, votre ville, votre tranche d’âge et la liste sur laquelle vous postulez ; vos langues ; ce que vous recherchez, vos centres d’intérêt, votre niveau d’activité, éventuellement vos besoins alimentaires, de chambre ou d’accessibilité ; vos réponses sur la sécurité et le consentement ; une courte présentation et, si vous le souhaitez, votre compte Instagram. Si vous vous abonnez à la newsletter, votre adresse e-mail."]],
  ["Pourquoi nous les utilisons, et sur quelle base",["Pour étudier votre candidature, équilibrer chaque groupe, organiser le voyage en fonction de vos besoins et vous contacter à ce sujet : mesures prises à votre demande avant un contrat. Une fois votre réservation faite, pour organiser votre voyage : exécution de notre contrat. Les informations alimentaires, de santé et d’accessibilité uniquement avec votre consentement explicite, que vous pouvez retirer. Les documents que la loi nous impose de conserver : obligation légale. Les newsletters uniquement si vous y consentez."]],
  ["Ce que nous ne demandons jamais ici",["Numéro de passeport, coordonnées bancaires ou de carte, ni rien d’autre qui ne figure ci-dessus. La vérification d’identité se fait plus tard lors d’un appel, et les paiements par un lien sécurisé distinct."]],
  ["Avec qui nous les partageons",["Uniquement avec ceux qui en ont besoin : votre hôte, les hôtels, transporteurs et prestataires d’activités qui réalisent votre voyage (par exemple pour des besoins alimentaires ou d’accès), et les sociétés qui fournissent notre messagerie, nos formulaires et l’hébergement du site. Votre candidature n’est jamais visible par les autres candidats. Nous ne vendons jamais vos données."]],
  ["Transferts internationaux",["Nos voyages ont lieu au Portugal, au Brésil, en Indonésie et au Kenya ; les partenaires sur place reçoivent donc ce dont ils ont besoin pour prendre soin de vous. Lorsque la loi l’exige, nous mettons en place des garanties appropriées pour ces transferts, ou nous nous appuyons sur le fait que le transfert est nécessaire pour organiser le voyage que vous avez demandé."]],
  ["Durée de conservation",["Les candidatures qui n’aboutissent pas à une réservation sont supprimées dans les deux ans suivant notre dernier contact. Les dossiers de réservation sont conservés aussi longtemps que l’exige la législation fiscale et comptable. Les informations de santé, alimentaires et d’accès sont supprimées à la fin de votre voyage."]],
  ["Vos droits",["Vous pouvez demander à consulter, corriger ou supprimer vos données, limiter leur utilisation ou vous y opposer, en obtenir une copie, et retirer votre consentement à tout moment. Écrivez à tringles@tourground.com ; nous répondons sous un mois. Vous pouvez aussi saisir l’autorité de protection des données de votre lieu de résidence, au Portugal la CNPD."]],
  ["Cookies et stockage",["Voir la Politique relative aux cookies."]],
  ["Modifications",["Nous mettons à jour cette politique lorsque nos pratiques évoluent et indiquons la date en haut de la page. Dernière mise à jour : 30 octobre 2026."]]
]);
const terms = () => legal("Mentions légales","Conditions de réservation","Comment fonctionnent les candidatures, les places et les réservations",[
  ["À propos de ces conditions",["Ces conditions s’appliquent à tout voyage organisé par Tringles (« nous »), " + ADDRESS + ", ainsi qu’à votre utilisation de ce site. Dernière mise à jour : 30 octobre 2026."]],
  ["Candidatures et offres",["Postuler est gratuit et ne garantit pas une place. Chaque groupe est équilibré entre les listes et constitué après un court appel avec un hôte. Si nous vous proposons une place, l’offre précise le voyage, le prix et sa durée de validité."]],
  ["Prix et paiement",["Les prix sont des prix « à partir de », par personne, hors vols, et sont confirmés lorsque votre place vous est proposée. Un acompte de 500 € réserve votre place ; le solde est dû 60 jours avant le départ. Si le solde n’est pas réglé à temps, nous pouvons considérer la place comme annulée par vous."]],
  ["Modifications à votre demande",["Nous essaierons de vous aider si vous souhaitez changer de voyage ou de dates, sans pouvoir le garantir. Tout coût facturé par nos partenaires vous est répercuté, et nous vous en informons avant votre décision."]],
  ["Si vous annulez",["Annulez par écrit à tout moment. L’acompte est remboursable pendant 14 jours après l’acceptation. Ensuite, une annulation plus de 60 jours avant le départ entraîne la perte de l’acompte ; à moins de 60 jours, le prix total est dû, sauf si votre place est reprise par quelqu’un de la même liste."]],
  ["Si nous modifions ou annulons un voyage",["Les hôtes peuvent modifier une partie d’un programme pour des raisons de sécurité, de météo ou de disponibilité, en la remplaçant par une prestation de valeur similaire. Si nous annulons un voyage, nous vous remboursons intégralement tout ce que vous nous avez payé, ou vous proposons une place sur une autre saison si vous préférez. Nous ne sommes pas responsables des événements que personne ne pouvait prévoir ni éviter, comme des conditions météorologiques extrêmes, des épidémies ou des avis officiels déconseillant de voyager ; si un tel événement empêche un voyage, nous remboursons ce que nous pouvons récupérer."]],
  ["Assurance voyage",["Une assurance voyage couvrant l’annulation, les frais médicaux et le rapatriement est obligatoire dès la réservation."]],
  ["Passeports, visas et santé",["Il vous appartient de disposer d’un passeport valide, de tout visa, des vaccinations et documents sanitaires nécessaires à votre voyage, et de respecter les règles d’entrée de chaque pays traversé. Vérifiez-les auprès des sources officielles avant de partir."]],
  ["Conduite et tournage",["Chaque membre accepte le Code de conduite. L’enfreindre peut entraîner l’exclusion du voyage sans remboursement. Seules les saisons annoncées comme filmées le sont, et seuls apparaissent les membres qui ont signé une autorisation."]],
  ["Notre responsabilité",["Nous préparons et organisons chaque voyage avec compétence et diligence raisonnables. Nous ne sommes pas responsables lorsqu’un problème est causé par vous, par une personne étrangère au voyage ou par des événements indépendants de la volonté de quiconque. Lorsque des conventions internationales limitent la responsabilité des compagnies aériennes ou des hôtels, la nôtre est limitée de la même manière. Rien ici ne limite la responsabilité en cas de décès ou de dommage corporel dû à une négligence, ni toute autre responsabilité qui ne peut être limitée par la loi."]],
  ["Réclamations",["Prévenez votre hôte immédiatement pour que le problème puisse être réglé sur place. Si vous n’êtes toujours pas satisfait, écrivez à tringles@tourground.com dans les 28 jours suivant votre retour ; nous répondons sous 28 jours."]],
  ["Droit applicable",["Ces conditions sont régies par le droit portugais, Tringles étant établi au Portugal. Cela ne vous prive d’aucun des droits que vous confère le droit de la consommation de votre pays de résidence."]]
]);
const cookies = () => legal("Mentions légales","Politique relative aux cookies","Ce que ce site enregistre dans votre navigateur, liste exacte",[
  ["Ce que nous enregistrons",["tringles-apply (stockage local, défini par ce site) : conserve le brouillon de votre candidature sur votre appareil pour que vous puissiez la terminer plus tard. Il est strictement nécessaire au formulaire et est supprimé lorsque vous envoyez votre candidature ou videz le stockage de votre navigateur."]],
  ["Ce que nous n’enregistrons pas",["Ce site ne dépose aucun cookie et n’utilise aucun outil d’analyse, de publicité ou de suivi des réseaux sociaux. Les polices et les photographies sont servies par ce site."]],
  ["Vos choix",["Le seul élément enregistré étant strictement nécessaire à une fonction que vous choisissez d’utiliser, aucun consentement n’est requis. Si nous ajoutons un jour un élément facultatif, comme un outil d’analyse, nous vous le demanderons d’abord et l’indiquerons ici. Vous pouvez effacer le stockage de ce site à tout moment dans les réglages de votre navigateur."]],
  ["Contact",["Questions sur cette politique : tringles@tourground.com. Dernière mise à jour : 30 octobre 2026."]]
]);

/* ---------- INTAKE FORM ---------- */
const STEPS = ["Voyage","À propos de vous","Votre semaine","Sécurité et consentement","Avec vos mots","Récapitulatif"];
let form = null, step = 0, submitting = false;
function blankForm(trip){
  return {trip: trip || "", season:"", first:"", last:"", email:"", contact:"", country:"", city:"", age:"", list:"", langs:[], langOther:"",
    looking:"", interests:[], activity:"", diet:"", access:"", single:false, conduct:false, filming:"", idcheck:false, marketing:false, about:"", instagram:""};
}
function loadDraft(){ try { const s = localStorage.getItem("tringles-apply"); return s ? JSON.parse(s) : null; } catch(e){ return null; } }
function saveDraft(){ try { localStorage.setItem("tringles-apply", JSON.stringify(form)); } catch(e){} }
function clearDraft(){ try { localStorage.removeItem("tringles-apply"); } catch(e){} }

const opt = (name, value, label, type, checked) => `<label class="opt"><input type="${type}" name="${name}" value="${esc(value)}"${checked?" checked":""}><span>${esc(label)}</span></label>`;
function stepHTML(){
  const f = form;
  if (step===0) return `
    <fieldset><legend>Quel voyage ?</legend><div class="opts trips">${ORDER.map(k=>`<label class="opt tripopt"><input type="radio" name="trip" value="${k}"${f.trip===k?" checked":""}><span><b>${esc(TRIPS[k].city)}</b><small>${esc(TRIPS[k].name)} · ${esc(TRIPS[k].when)} · À partir de ${TRIPS[k].price}</small></span></label>`).join("")}</div></fieldset>
    <fieldset><legend>Quand aimeriez-vous partir ?</legend><div class="opts">${[["season1","Saison un (aux dates indiquées)"],["later","Une saison ultérieure"],["flexible","Je suis flexible"]].map(([v,l])=>opt("season",v,l,"radio",f.season===v)).join("")}</div></fieldset>`;
  if (step===1) return `
    <div class="fgrid">
      <label class="fl">Prénom<input id="i-first" value="${esc(f.first)}" autocomplete="given-name"></label>
      <label class="fl">Nom<input id="i-last" value="${esc(f.last)}" autocomplete="family-name"></label>
      <label class="fl">E-mail<input id="i-email" type="email" value="${esc(f.email)}" autocomplete="email"></label>
      <label class="fl">Téléphone ou contact de messagerie<input id="i-contact" value="${esc(f.contact)}" autocomplete="tel" placeholder="${"+33… ou @pseudo"}"></label>
      <label class="fl">Pays<input id="i-country" value="${esc(f.country)}" autocomplete="country-name"></label>
      <label class="fl">Ville<input id="i-city" value="${esc(f.city)}" autocomplete="address-level2"></label>
    </div>
    <fieldset><legend>Tranche d’âge</legend><div class="opts">${["26–30","31–35","36–40","40+"].map(v=>opt("age",v,v,"radio",f.age===v)).join("")}</div></fieldset>
    <fieldset><legend>Sur quelle liste postulez-vous ?</legend><p class="hint">Chaque groupe respecte un équilibre 8/8.</p><div class="opts">${[["women","Liste des femmes"],["men","Liste des hommes"]].map(([v,l])=>opt("list",v,l,"radio",f.list===v)).join("")}</div></fieldset>
    <fieldset><legend>Langues dans lesquelles vous êtes à l’aise</legend><div class="opts">${[["en","English"],["ru","Russe"],["other","Autre"]].map(([v,l])=>opt("langs",v,l,"checkbox",f.langs.includes(v))).join("")}</div>
      <label class="fl" id="langOtherWrap"${f.langs.includes("other")?"":" hidden"}>Quelles autres langues ?<input id="i-langOther" value="${esc(f.langOther)}"></label></fieldset>`;
  if (step===2) return `
    <fieldset><legend>Que recherchez-vous ?</legend><div class="opts">${[["romance","L’amour"],["friendship","L’amitié"],["both","Ouvert aux deux"]].map(([v,l])=>opt("looking",v,l,"radio",f.looking===v)).join("")}</div></fieldset>
    <fieldset><legend>Qu’aimez-vous ? Choix multiple</legend><div class="opts">${["Vin","Sport","Plage","Vie nocturne","Nature","Bien-être","Gastronomie"].map(v=>opt("interests",v.toLowerCase(),v,"checkbox",f.interests.includes(v.toLowerCase()))).join("")}</div></fieldset>
    <fieldset><legend>Votre niveau d’activité</legend><div class="opts">${[["easy","Facile : balades et baignades"],["moderate","Modéré : randonnées, cours de surf"],["active","Actif : partant pour tout"]].map(([v,l])=>opt("activity",v,l,"radio",f.activity===v)).join("")}</div></fieldset>
    <div class="fgrid">
      <label class="fl">Régime alimentaire ou allergies <span class="opt-t">Facultatif</span><textarea id="i-diet" rows="3">${esc(f.diet)}</textarea></label>
      <label class="fl">Besoins de chambre ou d’accessibilité <span class="opt-t">Facultatif</span><textarea id="i-access" rows="3">${esc(f.access)}</textarea></label>
    </div>`;
  if (step===3) return `
    <fieldset><legend>Merci de confirmer</legend><div class="opts col">
      ${opt("single","yes","Je suis célibataire et majeur","checkbox",f.single)}
      ${opt("conduct","yes","J’accepte le Code de conduite","checkbox",f.conduct)}
      ${opt("idcheck","yes","Je comprends qu’un appel avec un hôte et une vérification d’identité ont lieu avant toute offre de place","checkbox",f.idcheck)}
    </div><p class="hint"><a href="#conduct" target="_self" data-keep="1">Lire le Code de conduite</a></p></fieldset>
    <fieldset><legend>Tournage</legend><p class="hint">Seules les saisons phares sont filmées, et uniquement avec une autorisation signée.</p><div class="opts col">${[["yes","D’accord pour être filmé lors d’une saison filmée"],["no","Je préfère ne pas être filmé"]].map(([v,l])=>opt("filming",v,l,"radio",f.filming===v)).join("")}</div></fieldset>
    <fieldset><legend>Rester en contact <span class="opt-t">Facultatif</span></legend><div class="opts col">${opt("marketing","yes","Envoyez-moi des nouvelles des prochaines saisons","checkbox",f.marketing)}</div></fieldset>`;
  if (step===4) return `
    <label class="fl">Parlez-nous de vous<span class="hint">Quelques phrases : ce que vous faites, à quoi ressemble pour vous une semaine réussie, ce que votre hôte devrait savoir. 40 à 800 caractères.</span><textarea id="i-about" rows="7" maxlength="800">${esc(f.about)}</textarea><span class="count" id="aboutCount">${f.about.length}/800</span></label>
    <label class="fl">Instagram <span class="opt-t">Facultatif</span><input id="i-instagram" value="${esc(f.instagram)}" placeholder="${"@votrenom"}"></label>`;
  // review
  const t = TRIPS[f.trip];
  const L = (a,b) => `<dt>${esc(a)}</dt><dd>${esc(b||"—")}</dd>`;
  const lab = {season1:"Saison un",later:"Une saison ultérieure",flexible:"Flexible",women:"Liste des femmes",men:"Liste des hommes",romance:"L’amour",friendship:"L’amitié",both:"Ouvert aux deux",easy:"Facile",moderate:"Modéré",active:"Actif",yes:"D’accord pour être filmé",no:"Préfère ne pas être filmé"};
  return `
    <div class="review">
      <div><h3>Voyage</h3><dl class="kv">${L("Voyage", t ? `${t.city} · ${t.name}` : "")}${L("Quand", lab[f.season])}</dl><button type="button" class="tag-link" data-goto="0">Modifier</button></div>
      <div><h3>À propos de vous</h3><dl class="kv">${L("Nom", `${f.first} ${f.last}`)}${L("E-mail", f.email)}${L("Contact", f.contact)}${L("Habite à", `${f.city}, ${f.country}`)}${L("Âge", f.age)}${L("Liste", lab[f.list])}${L("Langues", f.langs.map(x=>({en:"English",ru:"Russe",other:f.langOther||"Autre"})[x]).join(", "))}</dl><button type="button" class="tag-link" data-goto="1">Modifier</button></div>
      <div><h3>Votre semaine</h3><dl class="kv">${L("Recherche", lab[f.looking])}${L("Aime", f.interests.join(", "))}${L("Activité", lab[f.activity])}${L("Alimentation", f.diet)}${L("Chambre / accès", f.access)}</dl><button type="button" class="tag-link" data-goto="2">Modifier</button></div>
      <div><h3>Sécurité et consentement</h3><dl class="kv">${L("Confirmé", "Célibataire, code de conduite, appel et vérification d’identité")}${L("Tournage", lab[f.filming])}${L("Nouvelles", f.marketing?"Oui":"Non")}</dl><button type="button" class="tag-link" data-goto="3">Modifier</button></div>
      <div class="wide"><h3>Avec vos mots</h3><p class="quote">${esc(f.about)}</p><dl class="kv">${L("Instagram", f.instagram)}</dl><button type="button" class="tag-link" data-goto="4">Modifier</button></div>
    </div>`;
}
function collect(){
  const f = form, v = id => { const el = document.getElementById(id); return el ? el.value.trim() : null; };
  const radio = n => { const el = document.querySelector(`input[name="${n}"]:checked`); return el ? el.value : ""; };
  const checks = n => [...document.querySelectorAll(`input[name="${n}"]:checked`)].map(x=>x.value);
  if (step===0){ f.trip = radio("trip"); f.season = radio("season"); }
  if (step===1){ f.first=v("i-first"); f.last=v("i-last"); f.email=v("i-email"); f.contact=v("i-contact"); f.country=v("i-country"); f.city=v("i-city"); f.age=radio("age"); f.list=radio("list"); f.langs=checks("langs"); f.langOther = v("i-langOther") ?? f.langOther; }
  if (step===2){ f.looking=radio("looking"); f.interests=checks("interests"); f.activity=radio("activity"); f.diet=v("i-diet"); f.access=v("i-access"); }
  if (step===3){ f.single=checks("single").length>0; f.conduct=checks("conduct").length>0; f.idcheck=checks("idcheck").length>0; f.filming=radio("filming"); f.marketing=checks("marketing").length>0; }
  if (step===4){ f.about=v("i-about"); f.instagram=v("i-instagram"); }
  saveDraft();
}
function validate(){
  const f = form, e = [];
  if (step===0){ if(!f.trip) e.push("Choisissez un voyage."); if(!f.season) e.push("Choisissez quand vous aimeriez partir."); }
  if (step===1){
    if(!f.first) e.push("Indiquez votre prénom."); if(!f.last) e.push("Indiquez votre nom.");
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.email)) e.push("Indiquez une adresse e-mail valide.");
    if(f.contact.length<3) e.push("Indiquez un numéro de téléphone ou un contact de messagerie.");
    if(!f.country) e.push("Indiquez votre pays."); if(!f.city) e.push("Indiquez votre ville.");
    if(!f.age) e.push("Choisissez votre tranche d’âge."); if(!f.list) e.push("Choisissez la liste sur laquelle vous postulez.");
    if(!f.langs.length) e.push("Choisissez au moins une langue.");
  }
  if (step===2){ if(!f.looking) e.push("Choisissez ce que vous recherchez."); if(!f.interests.length) e.push("Choisissez au moins une chose que vous aimez."); if(!f.activity) e.push("Choisissez votre niveau d’activité."); }
  if (step===3){ if(!f.single) e.push("Confirmez que vous êtes célibataire et majeur."); if(!f.conduct) e.push("Acceptez le Code de conduite pour postuler."); if(!f.idcheck) e.push("Confirmez que vous avez compris l’appel avec l’hôte et la vérification d’identité."); if(!f.filming) e.push("Choisissez une préférence de tournage."); }
  if (step===4){ if(f.about.length<40) e.push("Parlez-nous un peu plus de vous (au moins 40 caractères)."); }
  return e;
}
function applyPage(prefill){
  const d = loadDraft();
  if (!form) form = d ? Object.assign(blankForm(), d) : blankForm(prefill);
  if (prefill && TRIPS[prefill]) form.trip = prefill;
  step = 0;
  return pageTitle("Saison un","Postuler","Six étapes courtes. Une dizaine de minutes.") + `
  <section class="intake"><div class="wrap">
    <ol class="progress" id="progress" aria-label="Progression"></ol>
    <form id="intake" novalidate>
      <div id="stepBody"></div>
      <div class="errs" id="errs" role="alert" hidden></div>
      <div class="navrow"><button type="button" class="pill outline" id="back">Retour</button><button type="submit" class="pill dark" id="next">Continuer</button></div>
    </form>
    <div id="done" hidden></div>
    <p class="note" style="margin-top:28px">Nous ne demandons que ce dont nous avons besoin pour préparer votre semaine. Voir la <a href="#privacy">Politique de confidentialité</a>. Nous ne demandons jamais ici de numéro de passeport ni de coordonnées de paiement.</p>
  </div></section>`;
}
function paintStep(){
  $("#progress").innerHTML = STEPS.map((s,i)=>`<li class="${i<step?"done":i===step?"cur":""}"${i===step?' aria-current="step"':""}><span>${i+1}</span>${esc(s)}</li>`).join("");
  $("#stepBody").innerHTML = `<h2 class="sh">${esc(STEPS[step])}</h2>` + stepHTML();
  $("#back").hidden = step===0;
  $("#next").textContent = step===STEPS.length-1 ? "Envoyer la candidature" : "Continuer";
  $("#errs").hidden = true;
  const lo = document.querySelectorAll('input[name="langs"]');
  lo.forEach(x => x.addEventListener("change", () => { const w = $("#langOtherWrap"); if (w) w.hidden = !document.querySelector('input[name="langs"][value="other"]').checked; }));
  const ab = $("#i-about"); if (ab) ab.addEventListener("input", () => { $("#aboutCount").textContent = `${ab.value.length}/800`; });
}
function wireApply(){
  paintStep();
  $("#back").addEventListener("click", () => { collect(); step = Math.max(0, step-1); paintStep(); window.scrollTo(0, $("#progress").offsetTop - 80); });
  $("#stepBody").addEventListener("click", e => { const g = e.target.closest("[data-goto]"); if (g){ step = +g.dataset.goto; paintStep(); } });
  $("#intake").addEventListener("submit", async e => {
    e.preventDefault();
    if (step < STEPS.length-1){
      collect(); const errs = validate();
      if (errs.length){ $("#errs").innerHTML = `<p>Avant de continuer :</p><ul>${errs.map(x=>`<li>${esc(x)}</li>`).join("")}</ul>`; $("#errs").hidden = false; $("#errs").scrollIntoView({block:"center"}); return; }
      step++; paintStep(); window.scrollTo(0, $("#progress").offsetTop - 80); return;
    }
    if (submitting) return; submitting = true; $("#next").disabled = true; $("#next").textContent = "Sending…";
    const res = await submitApplication(form);
    submitting = false; $("#next").disabled = false; $("#next").textContent = "Envoyer la candidature";
    if (res.ok){ clearDraft(); const t = TRIPS[form.trip]; $("#intake").hidden = true; $("#progress").hidden = true;
      $("#done").hidden = false; $("#done").innerHTML = `<div class="done"><span class="eyebrow">Candidature reçue</span><h2>Merci, ${esc(form.first)}.</h2><p>Votre candidature pour ${esc(t.city)} · ${esc(t.name)} nous est bien parvenue. Un hôte vous contactera dans la semaine pour convenir d’un court appel. Rien à payer pour l’instant.</p><a class="pill outline" href="#${form.trip}">Retour à ${esc(t.city)}</a></div>`;
      form = null; window.scrollTo(0,0);
    } else {
      $("#errs").innerHTML = `<p>${esc(res.msg)}</p>`; $("#errs").hidden = false;
    }
  });
}

/* ---------- submissions ----------
   Set FORM_ENDPOINT in config.js to any JSON-accepting form backend (Formspree, a Vercel
   function, a webhook). With none set, the application opens as a pre-filled email instead. */
const CONTACT = "tringles@tourground.com";
const ENDPOINT = (window.TRINGLES_CONFIG || {}).formEndpoint || "";
async function post(kind, data){
  const r = await fetch(ENDPOINT, {method:"POST", headers:{"Content-Type":"application/json", "Accepter":"application/json"}, body: JSON.stringify({kind, ...data})});
  if (!r.ok) throw new Error(String(r.status));
}
function mailto(subject, body){ location.href = `mailto:${CONTACT}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`; }
async function submitApplication(f){
  const record = {trip:f.trip, season:f.season, first:f.first, last:f.last, email:f.email, contact:f.contact, country:f.country, city:f.city, age:f.age, list:f.list,
    langs:f.langs, langOther:f.langOther, looking:f.looking, interests:f.interests, activity:f.activity, diet:f.diet, access:f.access,
    single:f.single, conduct:f.conduct, idcheck:f.idcheck, filming:f.filming, marketing:f.marketing, about:f.about, instagram:f.instagram,
    submittedAt:new Date().toISOString()};
  if (ENDPOINT){
    try { await post("application", record); return {ok:true}; }
    catch(e){ return {ok:false, msg:`Nous n’avons pas pu envoyer votre candidature pour le moment. Vos réponses sont conservées sur cet appareil ; réessayez, ou écrivez à ${CONTACT} et nous vous aiderons.`}; }
  }
  const t = TRIPS[f.trip];
  mailto(`Application: ${t ? t.city + " · " + t.name : f.trip} (${f.first} ${f.last})`,
    Object.entries(record).map(([k,v]) => `${k}: ${Array.isArray(v) ? v.join(", ") : v}`).join("\n"));
  return {ok:true};
}
async function subscribe(email){
  if (ENDPOINT){ try { await post("newsletter", {email, at:new Date().toISOString()}); return true; } catch(e){ return false; } }
  mailto("Newsletter", `Merci d’ajouter ${email} à la newsletter Tringles.`);
  return true;
}

/* ---------- router ---------- */
const VIEWS = {home:[home,wireHome], how:[how,null], credits:[credits,null], dates:[dates,null], faq:[faq,null], about:[about,null], journal:[journal,null], conduct:[conduct,null], privacy:[privacy,null], terms:[terms,null], cookies:[cookies,null]};
function route(){
  let v = (location.hash || "#home").slice(1) || "home";
  let prefill = null, rowTarget = null, toSec = null;
  if (v==="cards") { v = "how"; toSec = "cards-sec"; }
  const sm = v.match(/^(lisbon|rio|bali|nairobi)-scene$/); if (sm) { v = sm[1]; toSec = "scene"; }
  if (v.startsWith("apply")) { prefill = v.split("-")[1] || null; v = "apply"; }
  if (v.startsWith("dates-")) { rowTarget = v.split("-")[1]; v = "dates"; }
  if (!(TRIPS[v] || VIEWS[v] || v==="apply")) v = "home";
  header(v);
  const app = $("#app");
  if (TRIPS[v]) { app.innerHTML = trip(v); wireTrip(); }
  else if (v==="apply") { app.innerHTML = applyPage(prefill); wireApply(); }
  else { const [r,w] = VIEWS[v]; app.innerHTML = r(); if (w) w(); }
  $("#fab").hidden = v==="apply";
  $("#fab").textContent = TRIPS[v] ? "Postuler pour ce voyage" : "Postuler maintenant";
  $("#fab").setAttribute("href", TRIPS[v] ? `#apply-${v}` : "#apply");
  $("#menu").hidden = true;
  window.scrollTo(0,0);
  if (toSec){ const el = document.getElementById(toSec); if (el) window.scrollTo(0, el.getBoundingClientRect().top + scrollY - $("header.top").offsetHeight); }
  if (rowTarget){ const r = document.getElementById("row-"+rowTarget); if (r){ r.classList.add("hl"); const y = r.getBoundingClientRect().top + scrollY - $("header.top").offsetHeight - 24; window.scrollTo(0,y); } }
}
document.addEventListener("click", e => {
  const j = e.target.closest("[data-jump]");
  if (j){ e.preventDefault(); const el = document.getElementById(j.dataset.jump); if (el) { const y = el.getBoundingClientRect().top + scrollY - $("header.top").offsetHeight; window.scrollTo({top:y, behavior: reduce()?"auto":"smooth"}); } }
});
$("#burger").addEventListener("click", () => { $("#menu").hidden = false; $("#menuClose").focus(); });
$("#menuClose").addEventListener("click", () => { $("#menu").hidden = true; });
document.addEventListener("keydown", e => { if (e.key==="Escape") $("#menu").hidden = true; });
$("#subForm").addEventListener("submit", async e => {
  e.preventDefault(); const m = $("#subEmail").value.trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(m)) { $("#subMsg").textContent = "Indiquez une adresse e-mail valide."; return; }
  $("#subMsg").textContent = "Saving…";
  $("#subMsg").textContent = (await subscribe(m)) ? "Merci, vous êtes inscrit." : "Impossible d’enregistrer depuis cette vue. Écrivez à tringles@tourground.com pour vous inscrire.";
});
addEventListener("hashchange", route);
route();

