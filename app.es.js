const TRIPS = {
  lisbon: {
    city: "Lisboa", name: "Semana entre viñedos", cls: "m-lisbon", when: "Mayo de 2027", price: "€3,600", nights: 7,
    base: "Bodega en Azeitão → villa en las colinas de Sintra → Comporta → Lisboa",
    intro: "Empezar sin prisas entre viñedos, picarse en la cocina de una villa y terminar en la costa y en una azotea de Lisboa. Es el viaje más fácil de alcanzar desde cualquier punto de Europa y el más relajado de los cuatro.",
    facts: [["Grupo","16 miembros, 8 + 8"],["Edades","26–38"],["Ideal para","Vino, caballos, cenas sin prisa"],["Cómo llegar","Vuelo a Lisboa (LIS)"]],
    days: [
      {t:"Llegada entre viñedos", s:[["Tarde","Recogida en Lisboa y 40 minutos al sur hasta una bodega de Azeitão. Registro, piscina y tiempo para instalarse."],["Noche","Cena en una mesa larga entre las viñas. Su anfitrión abre la semana con una breve bienvenida y cada uno se presenta con una carta."]]},
      {t:"Primeras citas", s:[["Mañana","Desayuno tranquilo con cartas de escenarios: llueve en vuestro fin de semana romántico, ¿y ahora qué?"],["Mediodía","Se sortean las parejas y cada una sale a una de las cinco citas, con almuerzo incluido."],["Última hora de la tarde","Visita a la bodega y cata."],["Noche","Cena en un restaurante con vistas. Círculo del anfitrión: ¿qué te ha sorprendido hoy?"]],
        f:{h:"Las cinco primeras citas", list:["Paseo a caballo por la finca y después pícnic","Kayak por el río Sado y almuerzo junto al agua","Barco privado con patrón y almuerzo a bordo","Safari en jeep entre alcornocales y viñedos","Buggy todoterreno y después almuerzo en una tasca de pueblo"], p:"Después de cada cita, cada persona responde a tres preguntas privadas para el anfitrión: ¿te sentiste a gusto con esta persona? ¿Qué es lo que más disfrutaste? ¿Te gustaría pasar más tiempo con ella?"}},
      {t:"El reto de la receta secreta", s:[["Mañana","Traslado a una villa privada en las colinas de Sintra."],["Mediodía","Cinco parejas, un almuerzo y nadie tiene la visión completa. Después, se come lo que se ha cocinado."],["Tarde","Tiempo de piscina."],["Noche","A la Alfama para cenar con fado. Círculo del anfitrión sobre el reto."]],
        f:{h:"Cómo funciona el reto", ol:["Los guardianes de la receta describen los ingredientes sin nombrarlos.","Los redactores convierten las descripciones en una lista de la compra y la pasan.","Los compradores compran lo que hay en la lista sin hablar con los guardianes de la receta. No conocen el presupuesto.","Los guardianes del presupuesto conocen el límite y controlan el reloj. Si el tique supera el presupuesto, los compradores deciden qué se devuelve.","Los cocineros solo siguen instrucciones habladas y cocinan con lo que llegue."], p:"El balance trata del equipo, nunca de quién mandó demasiado. Si hay tensión, el anfitrión vuelve a centrar todo en el logro compartido."}},
      {t:"Rumbo a la costa", s:[["Mañana","Viaje al oeste hasta Comporta: arrozales, cigüeñas y largas playas vacías."],["Tarde","Club de playa, paddle surf y caballos en la arena para quien quiera."],["Noche","Date Picks, primera ronda: la mitad del grupo elige una cena para dos en el pueblo de Comporta."]]},
      {t:"Delfines en el Sado", s:[["Día","Día en barco por el estuario del Sado desde Setúbal: delfines, baño en Tróia y almuerzo a bordo."],["Noche","Date Picks, segunda ronda: elige la otra mitad. De vuelta en la casa, la Mesa Larga: tres rondas tranquilas, con una pareja nueva cada vez."]]},
      {t:"Lisboa", s:[["Mañana","Llegada a Lisboa. Parejas libres: Belém en bici, los jardines de la Gulbenkian o la LX Factory. Tú eliges con quién y adónde."],["Noche","Navegación al atardecer por el Tajo y después salida por Príncipe Real."]]},
      {t:"La Revelación", s:[["Día","Día libre. Las elecciones finales se entregan en privado al anfitrión antes de las 16:00."],["Atardecer","La Revelación en una azotea sobre el río y después la cena de despedida."]]},
      {t:"Primera cita de verdad", s:[["Mañana","Las parejas que han conectado desayunan a solas en una pastelaria. El resto, brunch en grupo. Traslados al aeropuerto."]]}
    ]
  },
  rio: {
    city: "Río de Janeiro", name: "Semana del amor", cls: "m-rio", when: "Marzo de 2027, después del Carnaval", price: "€4,200", nights: 7,
    base: "Una villa boutique en Santa Teresa o Ipanema",
    intro: "Toda la energía de Love Island: deporte en la playa, samba, un día en goleta y una revelación al atardecer en Arpoador. El más social y el más animado de los cuatro.",
    facts: [["Grupo","16 miembros, 8 + 8"],["Edades","26–38"],["Ideal para","Playa, deporte y vida nocturna"],["Cómo llegar","Vuelo a Río (GIG)"]],
    days: [
      {t:"Llegada", s:[["Tarde","Traslados privados, registro y tu baraja personal en el pack de bienvenida."],["Noche","Cena de bienvenida en una azotea de Santa Teresa."]]},
      {t:"Día de playa", s:[["Mañana","Futvóley y vóley playa en Ipanema por equipos mixtos, con entrenador."],["Noche","Clase de samba y después noche guiada por Lapa."]]},
      {t:"Primeras citas", s:[["Día","Parejas al azar: clase de surf en Prainha, ruta por el bosque de Tijuca, ala delta en São Conrado o clase de cocina."],["Noche","Masterclass de caipiriña y el juego de cartas Hot Seat."]], f:{h:"Después de cada cita", p:"Tres preguntas privadas para el anfitrión: ¿a gusto? ¿mejor momento? ¿más tiempo juntos? Las respuestas orientan las parejas del día siguiente."}},
      {t:"Pan de Azúcar", s:[["Día","Parejas ponderadas por el anfitrión: subida a pie o en teleférico al Pan de Azúcar y después el Jardín Botánico."],["Noche","Date Picks, primera ronda: cenas para dos en ocho restaurantes."]]},
      {t:"Día en barco", s:[["Día","Goleta privada por las islas de la bahía de Guanabara, baño y almuerzo a bordo."],["Noche","Date Picks, segunda ronda, y después la Mesa Larga en la villa: tres rondas tranquilas, con una pareja nueva cada vez."]]},
      {t:"Parejas libres", s:[["Tarde","Elige con quién y qué en un menú de salidas ya reservadas."],["Noche","Samba callejera en Pedra do Sal."]]},
      {t:"La Revelación", s:[["Amanecer","El Cristo Redentor antes de las multitudes."],["Atardecer","La Revelación en una azotea de Arpoador y después la fiesta de despedida."]]},
      {t:"Primera cita de verdad", s:[["Mañana","Desayuno para dos para las parejas que han conectado, brunch para todos y traslados de salida."]]}
    ]
  },
  bali: {
    city: "Bali", name: "Semana en la isla", cls: "m-bali", when: "Junio de 2027", price: "€3,400", nights: 7,
    base: "Villa en la selva de Ubud → villa en el acantilado de Uluwatu",
    intro: "Primero terrazas de arroz y cascadas, después surf y atardeceres en los acantilados. Bali es el aterrizaje más suave para un grupo de desconocidos y la mejor relación calidad-precio de los cuatro.",
    facts: [["Grupo","16 miembros, 8 + 8"],["Edades","26–38"],["Ideal para","Naturaleza, bienestar y surf"],["Cómo llegar","Vuelo a Denpasar (DPS)"]],
    days: [
      {t:"Llegada a Ubud", s:[["Tarde","Traslado hasta una villa privada en la selva y bendición de bienvenida."],["Noche","Cena entre los arrozales."]]},
      {t:"El relevo del mercado", s:[["Mañana","Descenso en bici entre terrazas de arroz, en parejas al azar."],["Mediodía","La versión balinesa del reto de la receta: cinco parejas, el mercado de Ubud, un chef balinés y un almuerzo que sacar adelante juntos."],["Noche","Círculo del anfitrión: ¿qué os ayudó a poneros de acuerdo?"]]},
      {t:"Primeras citas", s:[["Día","Se sortean las parejas para una de cinco citas: rafting en el Ayung, ruta a una cascada, taller de joyería en plata, el columpio de Tegallalang con café, o un paseo por un templo y su manantial."],["Noche","Baño de gong y cena tranquila en la villa."]], f:{h:"Después de cada cita", p:"Tres preguntas privadas para el anfitrión. Nadie más ve las respuestas."}},
      {t:"Hacia los acantilados", s:[["Mañana","Traslado al sur, a una villa en el acantilado de Uluwatu."],["Tarde","Clase de surf en Padang Padang o tiempo de piscina."],["Noche","Danza del fuego Kecak en el templo de Uluwatu y después Date Picks, primera ronda."]]},
      {t:"Día en barco por las islas", s:[["Día","Lancha rápida a Nusa Lembongan: snorkel con mantarrayas y almuerzo en la playa."],["Noche","Date Picks, segunda ronda, y después la Mesa Larga en la villa del acantilado: tres rondas tranquilas, con una pareja nueva cada vez."]]},
      {t:"Parejas libres", s:[["Día","Elige con quién y qué: spa, club de playa, clase de yoga o un paseo en moto con conductor."],["Noche","Noche en grupo en un club de playa."]]},
      {t:"La Revelación", s:[["Atardecer","La Revelación al borde del acantilado y después una cena de despedida de marisco en la playa de Jimbaran."]]},
      {t:"Primera cita de verdad", s:[["Mañana","Desayuno para dos para las parejas que han conectado, brunch en grupo y traslados de salida."]]}
    ]
  },
  nairobi: {
    city: "Nairobi", name: "Semana de safari", cls: "m-nairobi", when: "Septiembre de 2027, temporada de la migración", price: "€5,900", nights: 7,
    base: "Hotel jardín en Nairobi → campamento de tiendas en el Masái Mara → lago Naivasha",
    intro: "Jeeps compartidos, un globo al amanecer y cenas junto al fuego. La semana más intensa de las cuatro: campamentos pequeños, madrugones y ningún sitio donde esconderse de una buena conversación.",
    facts: [["Grupo","12–16 miembros"],["Edades","28–40"],["Ideal para","Fauna salvaje, una vez en la vida"],["Cómo llegar","Vuelo a Nairobi (NBO)"]],
    days: [
      {t:"Llegada a Nairobi", s:[["Tarde","Hotel jardín en Karen y después el Giraffe Centre."],["Noche","Cena de bienvenida bajo los árboles."]]},
      {t:"Rumbo al Mara", s:[["Mañana","Vuelo en avioneta al Masái Mara."],["Tarde","Primer safari en grupos mixtos de cuatro."],["Noche","Sundowner en una loma y después cena en el campamento."]]},
      {t:"Primeras citas", s:[["Alba","Safaris en pareja con un guía: el 4×4 es la cita."],["Tarde","Safari a pie con guías masái, o la piscina del campamento."],["Noche","Círculo del anfitrión junto al fuego."]], f:{h:"Después de cada cita", p:"Tres preguntas privadas para el anfitrión. Las parejas cambian en cada safari hasta el quinto día."}},
      {t:"Globo al amanecer", s:[["Alba","Vuelo en globo sobre las llanuras y después desayuno con champán en plena sabana (opción sin alcohol incluida)."],["Tarde","El reto de la cocina del campamento: el juego de la receta, cocinado al fuego con los chefs del campamento."],["Noche","Date Picks, primera ronda: cenas para dos en la sabana."]]},
      {t:"Cruces del río", s:[["Día","Un día entero junto al río Mara para ver los cruces de la migración, con pícnic."],["Noche","Date Picks, segunda ronda, y después la Mesa Larga alrededor del fuego: tres rondas tranquilas, con una pareja nueva cada vez."]]},
      {t:"Lago Naivasha", s:[["Mañana","Vuelo a Naivasha."],["Tarde","Barca entre hipopótamos y después bici por Hell’s Gate en las parejas que elijas."]]},
      {t:"La Revelación", s:[["Atardecer","La Revelación en un sundowner junto al lago y después la cena de despedida."]]},
      {t:"Primera cita de verdad", s:[["Mañana","Desayuno para dos para las parejas que han conectado y después traslado por carretera a Nairobi para los vuelos."]]}
    ]
  }
};
const ORDER = ["lisbon","rio","bali","nairobi"];

const DECKS = [
  {id:"spark", name:"Spark · El lado divertido", cls:"c-spark", sw:"var(--clay)", when:"Día 1", desc:"Presentaciones en la cena de bienvenida",
   qs:["¿De qué podrías hablar durante horas?","¿Qué experiencia te encantaría vivir en el próximo año?","¿Qué es lo más espontáneo que has hecho nunca?","¿Qué hace que alguien te caiga bien al instante?","¿Qué buena señal notas desde el principio?","¿Cómo sería tu día espontáneo perfecto?","¿Qué has querido probar siempre?","¿Cuál es el viaje más memorable que has hecho?"]},
  {id:"know", name:"Conocerse", cls:"c-know", sw:"var(--surface)", when:"Primeras citas", desc:"Sobre 2 en cada primera cita",
   qs:["¿Qué te hace sentir valorado por alguien?","¿Qué cualidades valoras más en una pareja?","¿Cómo es para ti una relación realmente buena?","¿Qué es lo que la gente suele malinterpretar de ti?","¿Qué te encantaría vivir con una pareja?"]},
  {id:"together", name:"Cómo funcionamos juntos", cls:"c-together", sw:"var(--linen)", when:"Días 2–3", desc:"Escenarios en el desayuno y después de los retos",
   qs:["Has planeado un fin de semana romántico y llueve. ¿Qué haces?","Un día libre y poco presupuesto. ¿Cómo lo pasas?","Tu pareja quiere aventura. Tú necesitas descanso. ¿Y ahora qué?","Si un viaje no sale según lo previsto, ¿cómo reaccionas?","Cuando no estáis de acuerdo, ¿lo hablas en el momento o te tomas un tiempo antes?","¿Qué ha sido más difícil hoy: explicarte o entender a alguien?"]},
  {id:"circle", name:"El círculo de la noche", cls:"c-circle", sw:"var(--claret)", when:"Cada noche", desc:"Guiado por el anfitrión, alrededor de la mesa, solo lo que quieras compartir",
   qs:["¿Qué es lo que más te ha sorprendido hoy?","¿Alguien te ha sorprendido para bien?","¿Qué has descubierto de alguien que no habrías adivinado?","¿Hubo un momento en que te sentiste especialmente conectado?","¿Ha cambiado hoy alguna de tus expectativas?","Si pudieras repetir un momento de hoy, ¿cuál sería?"]},
  {id:"deep1", name:"Deep · Nivel I", cls:"c-deep", sw:"var(--oxblood)", when:"Mesa Larga · Ronda 1", desc:"Inspirado en las 36 preguntas de Aron, serie I: ligera y divertida",
   qs:["¿A quién, de cualquier lugar del mundo, invitarías a cenar?","¿Qué haría de hoy un día perfecto para ti?","Si mañana pudieras despertarte con una habilidad nueva, ¿cuál sería?","¿Te gustaría ser famoso? ¿Por qué?","¿Cómo sería tu fin de semana perfecto?"]},
  {id:"deep2", name:"Deep · Nivel II", cls:"c-deep", sw:"var(--oxblood)", when:"Mesa Larga · Ronda 2", desc:"Serie II: personal",
   qs:["¿Qué sueño tienes desde hace tiempo y aún no has perseguido?","¿Qué significa para ti la amistad?","¿Qué recuerdo te gustaría conservar para siempre?","¿Cuál es el mayor logro de tu vida hasta ahora?","¿Qué relación tienes con tu familia?"]},
  {id:"deep3", name:"Deep · Nivel III", cls:"c-deep", sw:"var(--oxblood)", when:"Mesa Larga · Ronda 3", desc:"Serie III: sobre vosotros dos",
   qs:["Di tres cosas que creéis tener en común.","¿Qué te llamó la atención de mí el primer día?","¿Qué te gusta ya de la persona que tienes enfrente?","¿Qué le contarías a alguien solo después de una semana como esta?","¿Qué os gustaría vivir juntos si esto continuara?"]}
];


const CREDITS = {"lis_vines": ["Évora IMG 6738 (21135870201).jpg", "Jean-Michel Brunet", "CC BY 2.0"], "lis_grapes": ["Dehydrated and bird damaged grapes in Portugal.jpg", "Filipe Fortes", "CC BY-SA 2.0"], "lis_beach": ["Comporta Beach - 04.tif", "Herdade da Comporta", "CC BY-SA 3.0"], "lis_sunset": ["Sunset by the river Tagus (36234333671).jpg", "Maria Eklind", "CC BY-SA 2.0"], "lis_tagus": ["Sunset in Lisbon (36542861635).jpg", "unknown.mmp desde Lisboa, Portugal", "CC0"], "lis_evora": ["Évora - Praça do Giraldo.jpg", "Paolo Querci", "CC BY 3.0"], "lis_temple": ["Evora - Roman Temple - Backside.jpg", "Ingo Mehling", "CC BY-SA 4.0"], "lis_horses": ["Lusitano Pferd International 2011.JPG", "Usien", "CC BY-SA 3.0"], "rio_sugarloaf": ["Sugarloaf Sunrise 2.jpg", "Donatas Dabravolskas", "CC BY-SA 4.0"], "rio_bay": ["Last Sunlight on the Sugarloaf Mountain.jpg", "Donatas Dabravolskas", "CC BY-SA 4.0"], "rio_ipanema": ["1 ipanema beach vidigal sunset.jpg", "chensiyuan", "CC BY-SA 4.0"], "rio_beachlife": ["Ipanema Beach (4589735501).jpg", "Francisco Anzola", "CC BY 2.0"], "rio_santateresa": ["Street Scene - Santa Teresa District - Rio de Janeiro - Brazil.jpg", "Adam Jones, Ph.D.", "CC BY-SA 3.0"], "rio_islands": ["Ilha de Paquetá - Rio de Janeiro 01.jpg", "VinyNeto", "CC BY-SA 3.0"], "rio_arpoador": ["Pedra do Arpoador RJ 04.jpg", "Deniltonlima", "CC BY-SA 3.0"], "rio_sunset": ["Pedra do Arpoador RJ 03.jpg", "Deniltonlima", "CC BY-SA 3.0"], "bal_terraces": ["Rice terraces tegalaland (9).jpg", "Tavana", "CC BY-SA 3.0"], "bal_terraces2": ["Rice terraces in Tegallalang 1.jpg", "Christophe95", "CC BY-SA 4.0"], "bal_cliff": ["Cliff at Uluwatu temple, Bali.jpg", "Emma THERY", "CC BY-SA 4.0"], "bal_temple": ["Uluwatu Temple Cliff, Bali.jpg", "Ken Eckert", "CC BY-SA 4.0"], "bal_lembongan": ["Nusa Lembongan, Bali.jpg", "Shura desde Ámsterdam, Países Bajos", "CC BY 2.0"], "bal_waterfall": ["Gitgit waterfalls in Bali; January 2015.jpg", "Juan Antonio F. Segal", "CC BY 2.0"], "bal_kecak": ["Kecak Dance Bali.jpg", "Dhani ilham", "CC BY-SA 4.0"], "bal_kecak2": ["Balinese dance in Ubud, Kecak, 20220822 1840 0182.jpg", "Jakub Hałun", "CC BY-SA 4.0"], "nai_jeeps": ["Maasai Mara, Kenya (47566656621).jpg", "Nina R desde África", "CC BY 2.0"], "nai_balloon": ["Hot air ballon safari Maasai Mara National Reserve Kenya.jpg", "Svein-Magne Tunli", "CC BY-SA 4.0"], "nai_balloons": ["Maasai Mara National Reserve, Kenya (53337843878).jpg", "Nina R desde África", "CC BY 2.0"], "nai_naivasha": ["Lake Naivasha Shoreline.jpg", "Kenenock", "CC BY-SA 4.0"], "nai_giraffe": ["Giraffe at Giraffe Centre Nairobi, Kenya.jpg", "GioRan", "CC BY-SA 4.0"], "nai_crossing": ["Wildebeest Jumping Into the Mara River.jpg", "Danijel Mihajlovic", "CC BY-SA 4.0"], "nai_acacia": ["Acacia tree at sunset, Maasai Mara, Kenya.jpg", "Daniel Case", "CC BY-SA 4.0"], "nai_sunrise": ["Masai Mara at Sunset.jpg", "Danijel Mihajlovic", "CC BY-SA 4.0"], "gen_toast": ["Offering a toast with sparkling wine flutes.jpg", "Fabrizio Sciami", "CC BY-SA 2.0"], "gen_sails": ["Traditional sailboat Croatia.jpg", "Ivan Matic", "CC BY-SA 2.0"], "gen_terrace": ["Kathmandu rooftops at sunset (8562532486).jpg", "calflier001", "CC BY-SA 2.0"], "gen_pool": ["Swimming Pool of Lembongan Cliff Villas - 2015.03 - panoramio.jpg", "rheins", "CC BY 3.0"], "gen_candles": ["Wigilia potrawy 554.jpg", "Przykuta", "CC BY-SA 3.0"], "gen_silhouettes": ["Sunset Agta Beach Resort - Biliran Philippines.jpg", "Leodb", "CC BY-SA 3.0"], "gen_pier": ["Tanjung Aru beach sunset view.jpg", "Cerevisae", "CC BY-SA 4.0"], "gen_lamp": ["A cozy rooftop table lit by a warm lamp, Pattaya.jpg", "PattayaPatrol", "CC BY-SA 4.0"]};
const META = {
  lisbon:{band:"#9AA67C", tan:"#DFC8B7", country:"Portugal", region:"Europa", tags:["wine","coast","city"],
    notice:"Ya están abiertas las solicitudes para la Semana entre viñedos de mayo de 2027.",
    hero:"lis_tagus", heroAlt:"Atardecer sobre el Tajo en Lisboa",
    days:["lis_vines","lis_horses","gen_candles","lis_beach","lis_sunset","lis_tagus","gen_lamp","gen_toast"],
    tagline:"Sin prisas entre viñas, competitivos en la cocina, dorados en la costa",
    copy:"Dos noches en una bodega de Azeitão, una villa en las colinas de Sintra, las playas de Comporta y una última noche sobre Lisboa. Dieciséis miembros, un anfitrión y una semana pensada para conocerse de verdad.",
    bullets:["16 miembros, 8 mujeres y 8 hombres","7 noches en 4 alojamientos","Cinco primeras citas de aventura el segundo día","El reto de la receta secreta","Opinión privada después de cada cita","A 40 minutos del aeropuerto de Lisboa"],
    pace:{h:"Cinco primeras citas", img:"lis_horses", alt:"Jinetes en caballos lusitanos", p:"El segundo día se sortean las parejas y cada una sale a una cita distinta, con almuerzo incluido. Después, todos responden a tres preguntas privadas para el anfitrión.", list:"days.1.f.list"},
    story:{img:"lis_grapes", alt:"Uvas maduras en la vid", p1:"El tercer día el grupo se traslada a una villa privada en las colinas de Sintra y el almuerzo se convierte en un juego. Cinco parejas, una receta y nadie tiene la visión completa.", ol:"days.2.f.ol"},
    exp:{a:["Las cartas","gen_toast","Un brindis en la cena","Preguntas que se van acercando a lo largo de la semana, de la cena de bienvenida a la última noche.","#cards","Cómo funcionan las cartas"], b:["Comporta","lis_beach","La larga playa de Comporta","Dos noches en la costa: arrozales, cigüeñas y playas que se pierden de vista. Aquí empiezan los Date Picks.","#lisbon","El programa","program"]},
    celeb:{a:["La Revelación","gen_lamp","Una mesa en una azotea de noche","La última noche, elecciones privadas, románticas y de amistad. Solo se anuncian las coincidencias mutuas, en una azotea sobre el río."], b:["Primera cita de verdad","lis_sunset","Atardecer junto al Tajo","La última mañana, las parejas que han conectado desayunan a solas en una pastelaria."]},
    summary:{Stays:["Bodega en Azeitão, 2 noches","Villa privada en las colinas de Sintra, 1 noche","Casa de playa en Comporta, 2 noches","Hotel boutique en Lisboa, 2 noches"],Dining:["Cena entre viñedos","Visita a la bodega y cata","Cena con fado en la Alfama","Marisco en el pueblo de Comporta"],Included:["Habitación individual con llave propia","Todos los traslados desde el aeropuerto de Lisboa","Todas las citas y actividades","Tu anfitrión y las barajas de cartas"],"El grupo":["16 miembros, de 26 a 38 años","8 mujeres y 8 hombres","Temporada en inglés o en ruso"],"Cómo llegar":["Vuelo a Lisboa (LIS)","Recogida el día 1 a las 15:00","Regreso el día 8 antes del mediodía"]}},
  rio:{band:"#9E483F", dark:true, country:"Brasil", region:"Sudamérica", tags:["coast","city"],
    notice:"La Semana del amor sale en marzo de 2027, después del Carnaval.",
    hero:"rio_sugarloaf", heroAlt:"El Pan de Azúcar al amanecer",
    days:["rio_santateresa","rio_beachlife","rio_ipanema","rio_bay","rio_islands","rio_arpoador","rio_sunset","gen_toast"],
    tagline:"Deporte en la playa, samba y una revelación al atardecer sobre Ipanema",
    copy:"Una semana desde una villa en Santa Teresa: equipos mixtos en Ipanema, el Pan de Azúcar en barco, un día en goleta por la bahía y la Revelación al atardecer en una azotea de Arpoador.",
    bullets:["16 miembros, 8 mujeres y 8 hombres","7 noches en una sola villa","Futvóley, surf y samba","Día en goleta privada","Dos rondas de Date Picks","A 40 minutos del aeropuerto de Río"],
    pace:{h:"Primeras citas en Río", img:"rio_beachlife", alt:"La playa de Ipanema en un día luminoso", p:"Las parejas se reparten entre clase de surf, ruta por el bosque de Tijuca, ala delta en São Conrado o clase de cocina. Después, tres preguntas privadas para el anfitrión."},
    story:{img:"rio_islands", alt:"La isla de Paquetá en la bahía de Guanabara", p1:"El quinto día se pasa en una goleta privada por las islas de la bahía de Guanabara. Baño, comida en cubierta y, por la noche, empieza la segunda ronda de Date Picks.", p2:"Las elecciones son privadas. Quien no haya sido elegido tiene una cena organizada por el anfitrión. Nadie cena solo."},
    exp:{a:["Las cartas","gen_toast","Un brindis en la cena","Preguntas que se van acercando a lo largo de la semana, de la cena de bienvenida a la última noche.","#cards","Cómo funcionan las cartas"], b:["Ipanema","rio_ipanema","Ipanema al atardecer","Futvóley por equipos mixtos con entrenador y después el mejor atardecer de la ciudad desde la arena.","#rio","El programa","program"]},
    celeb:{a:["La Revelación","rio_arpoador","Gente contemplando el atardecer en Arpoador","Elecciones privadas, románticas y de amistad. Solo se anuncian las coincidencias mutuas, al atardecer en una azotea de Arpoador."], b:["Primera cita de verdad","rio_sunset","El sol se pone tras los Dos Hermanos","La última mañana, las parejas que han conectado desayunan a solas."]},
    summary:{Stays:["Villa boutique en Santa Teresa o Ipanema, 7 noches"],Dining:["Cena de bienvenida en una azotea","Masterclass de caipiriña","Ocho restaurantes para los Date Picks","Fiesta de despedida en Arpoador"],Included:["Habitación individual con llave propia","Todos los traslados","Todas las citas y actividades","Tu anfitrión y las barajas de cartas"],"El grupo":["16 miembros, de 26 a 38 años","8 mujeres y 8 hombres"],"Cómo llegar":["Vuelo a Río (GIG)","Consulta los requisitos de entrada para tu pasaporte"]}},
  bali:{band:"#8590A3", country:"Indonesia", region:"Asia", tags:["coast","wellness"],
    notice:"Ya están abiertas las solicitudes para la Semana en la isla de junio de 2027.",
    hero:"bal_terraces", heroAlt:"Terrazas de arroz de Tegallalang",
    days:["bal_terraces2","gen_candles","bal_waterfall","bal_cliff","bal_lembongan","gen_pool","bal_temple","gen_toast"],
    tagline:"Primero arrozales, después atardeceres en los acantilados",
    copy:"Tres noches en una villa en la selva de Ubud y cuatro en los acantilados de Uluwatu. Cascadas, un reto en el mercado, mantarrayas frente a Lembongan y la Revelación al borde del acantilado.",
    bullets:["16 miembros, 8 mujeres y 8 hombres","7 noches en 2 villas","El relevo del mercado de Ubud","Barco de snorkel a Nusa Lembongan","Danza del fuego Kecak en Uluwatu","A 90 minutos del aeropuerto de Denpasar"],
    pace:{h:"Primeras citas en Bali", img:"bal_waterfall", alt:"Una cascada en la selva balinesa", p:"Se sortean las parejas para rafting, ruta a una cascada, taller de joyería en plata, el columpio de Tegallalang o un paseo por un templo. Después, tres preguntas privadas para el anfitrión."},
    story:{img:"bal_terraces2", alt:"Terrazas de arroz verdes", p1:"La versión balinesa del reto de la receta secreta se juega en el mercado de Ubud. Cinco parejas, un chef balinés y un almuerzo que todo el grupo tiene que sacar adelante.", p2:"El balance de esa noche trata de cómo llegó el equipo, nunca de quién se equivocó."},
    exp:{a:["Las cartas","bal_kecak2","Bailarines de Kecak a la luz del fuego","Preguntas que se van acercando a lo largo de la semana, de la cena de bienvenida a la última noche.","#cards","Cómo funcionan las cartas"], b:["Nusa Lembongan","bal_lembongan","Aguas cristalinas frente a Nusa Lembongan","Un día en lancha rápida para hacer snorkel con mantarrayas y almorzar en la playa.","#bali","El programa","program"]},
    celeb:{a:["La Revelación","bal_kecak","El círculo de fuego del Kecak al atardecer","Elecciones privadas, románticas y de amistad. Solo se anuncian las coincidencias mutuas, al borde del acantilado al atardecer."], b:["Primera cita de verdad","bal_cliff","Los acantilados de Uluwatu","La última mañana, las parejas que han conectado desayunan a solas."]},
    summary:{Stays:["Villa en la selva de Ubud, 3 noches","Villa en el acantilado de Uluwatu, 4 noches"],Dining:["Cena entre arrozales","Almuerzo del relevo del mercado","Marisco en la playa de Jimbaran"],Included:["Habitación individual con llave propia","Todos los traslados","Todas las citas y actividades","Tu anfitrión y las barajas de cartas"],"El grupo":["16 miembros, de 26 a 38 años","8 mujeres y 8 hombres"],"Cómo llegar":["Vuelo a Denpasar (DPS)","Consulta los requisitos de visado para tu pasaporte"]}},
  nairobi:{band:"#DFC8B7", country:"Kenia", region:"África", tags:["wild"],
    notice:"La Semana de safari sale en septiembre de 2027, en plena temporada de la migración.",
    hero:"nai_balloon", heroAlt:"Un globo aerostático sobre el Masái Mara",
    days:["nai_giraffe","nai_jeeps","nai_sunrise","nai_balloons","nai_crossing","nai_naivasha","nai_acacia","gen_toast"],
    tagline:"Jeeps compartidos, globo al amanecer y cenas junto al fuego",
    copy:"Una noche en Nairobi, tres en un campamento de tiendas en el Masái Mara en plena migración y dos junto al lago Naivasha. Campamentos pequeños, madrugones y ningún sitio donde esconderse de una buena conversación.",
    bullets:["12–16 miembros","7 noches en 3 alojamientos","Avioneta hasta el Mara","Globo al amanecer","Cenas para dos en la sabana","Cruces de la migración en el río Mara"],
    pace:{h:"Primeras citas de safari", img:"nai_jeeps", alt:"Vehículos de safari en las llanuras del Mara", p:"En el Mara, el jeep es la cita. Las parejas salen al amanecer con un guía y después responden a tres preguntas privadas para el anfitrión. Las parejas cambian en cada safari hasta el quinto día."},
    story:{img:"nai_balloons", alt:"Dos globos sobre la sabana", p1:"El cuarto día, el grupo se eleva sobre las llanuras en globo al amanecer y aterriza para desayunar en la sabana.", p2:"Por la tarde, el reto de la cocina del campamento lleva el juego de la receta al fuego abierto, con los chefs del campamento."},
    exp:{a:["Las cartas","gen_candles","Cena a la luz de las velas","Preguntas que se van acercando a lo largo de la semana, de la cena de bienvenida a la última noche.","#cards","Cómo funcionan las cartas"], b:["El río Mara","nai_crossing","Ñus cruzando el río Mara","Un día entero en el río para ver los cruces de la migración, con pícnic.","#nairobi","El programa","program"]},
    celeb:{a:["La Revelación","nai_acacia","Una acacia ante el sol poniente","Elecciones privadas, románticas y de amistad. Solo se anuncian las coincidencias mutuas, en un sundowner junto al lago."], b:["Primera cita de verdad","nai_sunrise","Atardecer sobre el Mara","Las parejas que han conectado desayunan a solas antes de volver por carretera a Nairobi."]},
    summary:{Stays:["Hotel jardín en Karen, Nairobi, 1 noche","Campamento de tiendas en el Masái Mara, 4 noches","Lodge en el lago Naivasha, 2 noches"],Dining:["Desayuno en la sabana después del globo","Cenas para dos en la sabana","Cenas junto al fuego en el campamento"],Included:["Tienda o habitación individual","Vuelos en avioneta","Tasas de los parques y safaris","Tu anfitrión y las barajas de cartas"],"El grupo":["12–16 miembros, de 28 a 40 años"],"Cómo llegar":["Vuelo a Nairobi (NBO)","eTA de Kenia obligatoria"]}}
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
    sub.innerHTML = `<span class="pn"><span>${esc(t.city)}</span></span><span class="links"><a href="#${view}" data-jump="program">El programa</a><a href="#${view}" data-jump="dates">Primeras citas</a><a href="#${view}" data-jump="story">El reto</a><a href="#${view}" data-jump="scene">Las cartas</a><a href="#${view}" data-jump="reveal">La Revelación</a><a href="#${view}" data-jump="summary">El viaje</a><a href="#dates-${view}">Fechas y precios</a><a href="#apply-${view}">Solicitar</a></span>`;
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
    ${ph("rio_sunset","Atardecer sobre la playa de Arpoador, Río de Janeiro", "", true)}
    <div class="mark">Tringles</div>
    <button class="pill white" type="button" data-finder="1">Destinos <span aria-hidden="true">⌃</span></button>
  </section>
  <section class="welcome"><div class="g"><div class="t"><h1>Bienvenido a Tringles</h1><p>Sáltate la primera cita y haz el viaje. Viajes de siete noches para dieciséis solteros, con un anfitrión, una baraja de cartas y algunos de los lugares más románticos del mundo.</p></div></div></section>
  <section class="bigband" aria-label="Sáltate la primera cita">
    ${ph("rio_bay","Última luz sobre el Pan de Azúcar, Río de Janeiro")}
    <div class="words"><div class="top"><span class="h">Sáltate la primera cita,</span></div><div class="bot"><span class="h">haz el viaje.</span><a class="tag-link on-photo" href="#how">Explorar ${ext}</a></div></div>
  </section>
  <section class="world"><div class="wrap">
    <h2>Descubre nuestro mundo</h2>
    <div class="rail" id="railWorld">
      ${ORDER.map(k => `<a class="wcard" href="#${k}">${ph(META[k].hero, META[k].heroAlt, "r")}<h3>${esc(TRIPS[k].city)}</h3></a>`).join("")}
      <a class="wcard" href="#cards">${ph("gen_toast","Un brindis en la cena","r")}<h3>Las cartas</h3></a>
      <a class="wcard" href="#journal">${ph("gen_sails","A toda vela","r")}<h3>Diario</h3></a>
    </div>
    <div class="arrows"><button type="button" data-rail="railWorld" data-d="-1" aria-label="Anterior">‹</button><button type="button" data-rail="railWorld" data-d="1" aria-label="Siguiente">›</button></div>
  </div></section>
  ${homeCards()}
  <section class="bigband" aria-label="La Revelación">
    ${ph("gen_pier","Personas en un muelle al atardecer")}
    <div class="words"><div class="top"><span class="eyebrow">La Revelación</span><span class="h">Convierte una semana fuera</span></div><div class="bot"><span class="h">en una historia de amor</span><a class="tag-link on-photo" href="#how">Explorar ${ext}</a></div></div>
  </section>`;
}
function wireHome(){}

/* ---------- finder dialog ---------- */
let fstate = {f:"all", q:"", open:{}};
const FTABS = [["all","Todos"],["coast","Costa"],["wine","Vino"],["wild","Naturaleza salvaje"],["city","Ciudad"],["wellness","Bienestar"]];
function renderFinder(){
  $("#ftabs").innerHTML = FTABS.map(([v,l])=>`<button type="button" data-f="${v}" aria-pressed="${fstate.f===v}">${l}</button>`).join("");
  const q = fstate.q.toLowerCase();
  const keys = ORDER.filter(k => (fstate.f==="all" || META[k].tags.includes(fstate.f)) && (!q || [TRIPS[k].city,TRIPS[k].name,META[k].country,META[k].region].join(" ").toLowerCase().includes(q)));
  const regions = [...new Set(keys.map(k=>META[k].region))];
  $("#flist").innerHTML = regions.length ? regions.map((r,i) => { const open = fstate.open[r] !== false; return `
    <div class="fgroup"><button type="button" data-r="${esc(r)}" aria-expanded="${open}"><span class="n">${String(i+1).padStart(2,"0")}</span><span class="g2">${esc(r)}</span><span aria-hidden="true">${open?"−":"+"}</span></button>
    ${open ? keys.filter(k=>META[k].region===r).map(k => `<a class="frow" href="#${k}">${ph(META[k].hero, META[k].heroAlt)}<span><strong>${esc(TRIPS[k].city)}</strong><small>${esc(TRIPS[k].name)} · ${esc(META[k].country)}</small></span><span class="tag">${TRIPS[k].nights} noches · Desde ${TRIPS[k].price}</span></a>`).join("") : ""}</div>`; }).join("")
    : `<p class="fempty">Todavía no hay viajes que coincidan.</p>`;
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
    <article class="dcard">${ph(m.days[(i+1) % m.days.length], d.t, "r")}<p class="card-name">Día ${i+2} · ${esc(d.t)}</p>${kv(d, i+1)}</article>`).join("");
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
    <p class="eyebrow bl">El programa</p>
    <div class="bt"><h2>Siete noches, día a día</h2><p>${esc(t.intro)}</p><a class="tag-link" href="#dates-${k}">Fechas y precios ${ext}</a></div>
    <article class="feat">${ph(m.days[0], d0.t, "r")}<p class="card-name">Día 1 · ${esc(d0.t)}</p>${kv(d0, 0)}</article>
  </div></section>
  <section class="drail-wrap"><div class="wrap">
    <div class="drail" id="drail">${rest}</div>
    <div class="arrows"><button type="button" data-rail="drail" data-d="-1" aria-label="Día anterior">‹</button><button type="button" data-rail="drail" data-d="1" aria-label="Día siguiente">›</button></div>
  </div></section>
  ${sceneSection(k)}
  <section class="pace" id="dates"><div class="g">
    <h2>${esc(m.pace.h)}</h2>
    ${ph(m.pace.img, m.pace.alt)}
    <div class="txt"><p>${esc(m.pace.p)}</p>${featList?`<ol>${featList.map(x=>`<li>${esc(x)}</li>`).join("")}</ol>`:""}<a class="tag-link light" href="#cards">Las preguntas privadas ${ext}</a></div>
  </div></section>
  <section class="storyb" id="story"><div class="g">
    ${ph(m.story.img, m.story.alt)}
    <div class="txt"><p>${esc(m.story.p1)}</p>${storyOl?`<ol>${storyOl.map(x=>`<li>${esc(x)}</li>`).join("")}</ol>`:""}${m.story.p2?`<p>${esc(m.story.p2)}</p>`:""}<a class="tag-link light" href="#how">Cómo funciona la semana ${ext}</a></div>
  </div></section>
  <section class="expw" id="more"><div class="g">
    ${[["c1",m.exp.a],["c2",m.exp.b]].map(([c,e])=>`<div class="${c}"><h2>${esc(e[0])}</h2>${ph(e[1], e[2])}<p>${esc(e[3])}</p><a class="tag-link light" href="${e[4]}"${e[6]?` data-jump="${e[6]}"`:""}>${esc(e[5])} ${ext}</a></div>`).join("")}
  </div></section>
  <section class="celeb" id="reveal"><div class="g">
    <div class="t"><h2>La última noche</h2><p>Las elecciones son privadas y nadie es expulsado. La semana termina con la Revelación y, para las parejas que han conectado, una primera cita de verdad.</p><a class="tag-link" href="#how">Cómo funciona ${ext}</a></div>
    <div class="a"><h3>${esc(m.celeb.a[0])}</h3>${ph(m.celeb.a[1], m.celeb.a[2])}<p>${esc(m.celeb.a[3])}</p></div>
    <div class="b"><h3>${esc(m.celeb.b[0])}</h3>${ph(m.celeb.b[1], m.celeb.b[2])}<p>${esc(m.celeb.b[3])}</p></div>
  </div></section>
  <section class="facts" id="summary"><div class="g">
    <h2>El viaje</h2>
    <div class="rows">
      <div class="frow2"><h3>Precio</h3><ul class="dash"><li>Desde ${t.price} por persona</li><li>Sin vuelos, habitación individual</li><li>Un depósito de 500 € reserva tu plaza</li></ul></div>
      ${Object.entries(m.summary).map(([h,list])=>`<div class="frow2"><h3>${esc(h)}</h3><ul class="dash">${list.map(x=>`<li>${esc(x)}</li>`).join("")}</ul></div>`).join("")}
      <div class="frow2"><h3>Solicitar</h3><div><a class="pill outline" href="#apply-${k}">Solicitar plaza en ${esc(t.city)}</a></div></div>
    </div>
  </div></section>`;
}
function wireTrip(){}

/* ---------- HOW IT WORKS ---------- */
function how(){
  return `
  <section class="ptitle"><div class="wrap in"><span class="mono">El club</span><h1>Cómo funciona</h1><p>Siete noches, dieciséis miembros, tres actos</p></div></section>
  <section class="pmedia"><div class="wrap">${ph("gen_sails","Un velero tradicional navegando")}</div></section>
  <section class="intro"><div class="g">
    <div class="l"><h2>Un reality de citas sin crueldad</h2><p>Cada viaje funciona como una temporada en tres actos, con un anfitrión que marca el ritmo. Los días 1 a 3 son para mezclarse, los días 4 y 5 para elegir, y los días 6 y 7 terminan con la Revelación.</p></div>
    <ul class="dash r"><li>Nadie es expulsado</li><li>Puedes pasar de cualquier carta, juego o cita</li><li>Opinión privada después de cada cita</li><li>Las elecciones son privadas; solo se revelan las coincidencias mutuas</li><li>Las parejas que han conectado tienen una primera cita de verdad la última mañana</li></ul>
  </div></section>
  <section class="storyb"><div class="g">
    ${ph("gen_lamp","Una mesa para dos al caer la noche")}
    <div class="txt"><p>Mezclarse. Una cena de bienvenida, cartas de presentación y un reto en equipo. Parejas al azar en cada actividad, para que nadie se encierre en un grupito.</p><p>Elegir. Primeras citas a caballo, en barco y en buggy, y después los Date Picks: tú eliges con quién cenar. Quien no haya sido elegido tiene una cena organizada por el anfitrión.</p><p>Comprometerse. Tiempo libre con quien quieras, elecciones privadas y la Revelación al atardecer.</p><a class="tag-link light" href="#cards">Las cartas ${ext}</a></div>
  </div></section>
  ${cardsHow()}
  <section class="facts" id="safety"><div class="g">
    <h2>Seguridad y conducta</h2>
    <div class="rows">
      <div class="frow2"><h3>Antes de viajar</h3><ul class="dash"><li>Solicitud y llamada con tu anfitrión</li><li>Verificación de identidad</li><li>Código de conducta firmado</li></ul></div>
      <div class="frow2"><h3>Durante el viaje</h3><ul class="dash"><li>Habitación individual con llave propia</li><li>Un anfitrión formado con autoridad para expulsar a cualquiera</li><li>Ningún juego implica alcohol</li><li>Traslados con licencia después de salir de noche</li></ul></div>
      <div class="frow2"><h3>Cámaras</h3><ul class="dash"><li>Solo en temporadas marcadas como grabadas</li><li>Solo con autorización firmada</li><li>Nunca en citas privadas</li></ul></div>
      <div class="frow2"><h3>Leer más</h3><div><a class="tag-link light" href="#conduct">Código de conducta ${ext}</a></div></div>
    </div>
  </div></section>`;
}

/* ---------- IMAGE CREDITS ---------- */
function credits(){
  const items = Object.entries(CREDITS).map(([k,[t,a,l]]) => `<li><a href="https://commons.wikimedia.org/wiki/File:${encodeURIComponent(t.replace(/ /g,"_"))}" target="_blank" rel="noopener">${esc(t.replace(/\.(jpe?g|tif|JPG)$/,""))}</a> · ${esc(a)} · ${esc(l)}</li>`).join("");
  return `<section class="ptitle"><div class="wrap in"><span class="mono">Legal</span><h1>Créditos de imagen</h1><p>Todas las fotografías proceden de Wikimedia Commons y se usan según sus licencias</p></div></section>
  <section class="summary"><div class="wrap"><ul class="credits">${items}</ul><p class="note">Las fotografías están redimensionadas y recortadas. Licencias: CC0, CC BY y CC BY-SA (versiones indicadas). Las personas que aparecen no son miembros de Tringles.</p></div></section>`;
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
  today:["Hoy","Mañana","El sobre sellado de tu anfitrión: la pareja del día, una pequeña misión y qué llevar."],
  spark:["Spark","Durante el día","Cartas de bolsillo para el barco, la caminata o el trayecto. Opcionales, y puedes pasar de cualquiera."],
  table:["Mesa","Cena","Una pregunta o un juego por mesa. Los sitios rotan cada noche."],
  private:["Privado","Por la noche","Tres preguntas solo para el anfitrión. Las respuestas dan forma a las parejas del día siguiente."],
  deep:["Deep","Una noche","La Mesa Larga. Inspirada en las 36 preguntas de Arthur Aron, una sola vez, una noche."],
  power:["Power","Al elegir","Un uso cada una, durante los días de elegir. Tu anfitrión se encarga de la parte incómoda."]
};
const KORDER = ["today","spark","table","private","deep","power"];
const PRIV_B = "¿Te sentiste a gusto con esta persona? ¿Qué es lo que más disfrutaste? ¿Te gustaría pasar más tiempo con ella?";
const PRIV_N = "Solo tu anfitrión las lee. Nadie ve tus respuestas.";
const DEEP_N = "Inspirado en las 36 preguntas de Arthur Aron. Puedes pasar de cualquier pregunta, y también del contacto visual.";

const CARDS = {
  lisbon:[
    {id:"lis-t1",k:"today",d:2,t:"Zapatos que se puedan ensuciar",b:"Tu cita del día está en el reverso de esta carta. Hay cinco citas a la vez y nadie sabe quién tiene cuál hasta que salen los coches. Norma de la casa hasta el almuerzo: no se habla de trabajo."},
    {id:"lis-t2",k:"today",d:3,t:"Solo tienes una pieza",b:"El almuerzo es un juego de equipo y tu papel está en el reverso: guardián de la receta, redactor de la lista, comprador, guardián del presupuesto o cocinero. No se lo enseñes a nadie. La cocina abre a mediodía."},
    {id:"lis-s1",k:"spark",d:2,t:"La pregunta que esquivarías",b:"En tu cita, haz la pregunta que menos te gustaría que te hicieran. Y respóndela tú primero."},
    {id:"lis-s2",k:"spark",d:3,t:"Azulejos e historias",b:"De camino a la Alfama, buscad un panel de azulejos que os guste a los dos. Cada uno inventa en dos frases la historia que cuenta. Elegid un ganador. El perdedor elige la playlist de mañana."},
    {id:"lis-s3",k:"spark",d:6,t:"Tranvía 28",b:"Ninguno de los dos elige la siguiente parada. En cada esquina, cara o cruz: cara, decides tú; cruz, decide tu pareja. Quien pierda el último lanzamiento paga los pastéis de nata."},
    {id:"lis-tb1",k:"table",d:1,t:"La mesa larga",b:"Di tu nombre, algo que te haga ilusión esta semana y algo que te ponga nervioso. Tu anfitrión empieza y después se sigue hacia la izquierda."},
    {id:"lis-tb2",k:"table",d:4,t:"Intercambia una pregunta",b:"Antes de que lleguen los entrantes, escribe una pregunta que nunca le hayas hecho a un desconocido. Intercámbiala con tu compañero de mesa. Responde a la suya o pasa de la tuya."},
    {id:"lis-tb3",k:"table",d:7,t:"Algo que llevarse",b:"En la mesa de despedida, cada persona dice algo que se lleva de esta semana. Puede ser una persona, un lugar o un plato."},
    {id:"lis-pv",k:"private",d:2,t:"Tres preguntas",b:PRIV_B,n:PRIV_N},
    {id:"lis-dp",k:"deep",d:5,t:"La Mesa Larga",b:"Después de la cena de los Date Picks, la casa se queda en silencio. Tres rondas de quince minutos, una vela en cada mesa y una pareja nueva en cada ronda. La primera es ligera y divertida, la segunda se vuelve personal y la tercera trata de vosotros dos. Si los dos queréis, terminad con cuatro minutos de contacto visual sin hablar.",n:DEEP_N},
    {id:"lis-pw",k:"power",d:4,t:"Cambio",b:"Una vez esta semana, pide a tu anfitrión que te cambie de pareja para la siguiente actividad. Úsala con discreción. Nadie sabrá quién la ha usado."}
  ],
  rio:[
    {id:"rio-t1",k:"today",d:2,t:"Los equipos están en el reverso",b:"El día empieza en la arena: futvóley por equipos mixtos con un entrenador sin piedad. Primero, protector solar. Quien deje caer la pelota elige la música del almuerzo."},
    {id:"rio-t2",k:"today",d:3,t:"Por sorteo, no por elección",b:"Una clase de surf, una caminata por el bosque, un vuelo en ala delta o una clase de cocina. Lo descubres por el camino y tu cita está en el reverso. Di que sí a lo primero y después cuéntale a tu anfitrión qué repetirías."},
    {id:"rio-s1",k:"spark",d:2,t:"Enséñame un paso",b:"Enseña a tu pareja un paso de baile de donde creciste. Te enseñará uno a cambio. La clase de samba de esta noche dirá quién ha practicado."},
    {id:"rio-s2",k:"spark",d:4,t:"Teleférico, sin móviles",b:"Los dos móviles van al mismo bolsillo para la subida al Pan de Azúcar. El primero que eche mano del suyo le debe un coco al otro."},
    {id:"rio-s3",k:"spark",d:6,t:"Menú para dos",b:"Cada uno ordena en secreto tres salidas del menú reservado. Mostradlas a la vez. Gana la primera coincidencia y, si no la hay, cara o cruz."},
    {id:"rio-tb1",k:"table",d:1,t:"Bienvenida en la azotea",b:"Di tu nombre y lo más espontáneo que hayas hecho nunca. El grupo vota la mejor con aplausos. Quien gane elige la primera canción."},
    {id:"rio-tb2",k:"table",d:4,t:"La historia de un recuerdo",b:"Cuéntale a tu compañero de mesa la historia de un objeto tuyo que salvarías de un incendio. Después escucha la suya sin intentar superarla."},
    {id:"rio-tb3",k:"table",d:7,t:"Algo que llevarse",b:"En la fiesta de Arpoador, cada persona dice algo que se lleva de esta semana. Vale una persona, un lugar o una caipiriña."},
    {id:"rio-pv",k:"private",d:3,t:"Tres preguntas",b:PRIV_B,n:PRIV_N},
    {id:"rio-dp",k:"deep",d:5,t:"La Mesa Larga",b:"Después de la segunda ronda de Date Picks, la villa se queda en silencio. Tres rondas de quince minutos, una vela en cada mesa y una pareja nueva en cada ronda. La primera es ligera y divertida, la segunda se vuelve personal y la tercera trata de vosotros dos. Si los dos queréis, terminad con cuatro minutos de contacto visual sin hablar.",n:DEEP_N},
    {id:"rio-pw",k:"power",d:4,t:"Cambiar de mesa",b:"Una vez esta semana, pide a tu anfitrión que te siente en otra mesa para los Date Picks de esta noche. El anfitrión se encarga de la parte incómoda y tu pareja original disfruta de su compañía."}
  ],
  bali:[
    {id:"bal-t1",k:"today",d:2,t:"Bicis cuesta abajo",b:"Bajad en bici entre las terrazas de arroz con tu pareja. Quien llegue primero al mercado elige el primer ingrediente. Frena con tiempo."},
    {id:"bal-t2",k:"today",d:3,t:"Cinco citas, una selva",b:"Rafting, una cascada, un taller de plata, el columpio o un paseo por un templo. Tu cita y tu plan están en el reverso. No mires las cartas de los demás y lleva una capa de abrigo."},
    {id:"bal-s1",k:"spark",d:3,t:"El pie de foto",b:"En el columpio, tu cita hace la foto y tú escribes el pie. Tiene que ser verdad."},
    {id:"bal-s2",k:"spark",d:3,t:"Bajo el agua",b:"En la cascada, cada uno dice algo que deja atrás este año. En voz alta, por encima del ruido, sin repetir."},
    {id:"bal-s3",k:"spark",d:6,t:"La regla de la moto",b:"En un paseo en moto con conductor, el pasajero elige el destino y el conductor elige el tentempié."},
    {id:"bal-tb1",k:"table",d:1,t:"Cena entre arrozales",b:"Si tuvieras un cartel de «No molestar» para esta semana, ¿qué diría? Escríbelo en la carta y léelo en voz alta. Los demás adivinan quién escribió qué."},
    {id:"bal-tb2",k:"table",d:4,t:"Un sonido",b:"El Kecak son cien voces y ningún instrumento. En la cena, cada persona hace un sonido que describa su semana hasta ahora. La mesa lo adivina."},
    {id:"bal-tb3",k:"table",d:7,t:"Algo que llevarse",b:"En la cena de marisco en la playa de Jimbaran, cada persona dice algo que se lleva de esta semana."},
    {id:"bal-pv",k:"private",d:3,t:"Tres preguntas",b:PRIV_B,n:PRIV_N},
    {id:"bal-dp",k:"deep",d:5,t:"La Mesa Larga",b:"Después de la segunda ronda de Date Picks, la villa del acantilado se queda en silencio. Tres rondas de quince minutos, una vela en cada mesa y una pareja nueva en cada ronda. La primera es ligera y divertida, la segunda se vuelve personal y la tercera trata de vosotros dos. Si los dos queréis, terminad con cuatro minutos de contacto visual sin hablar.",n:DEEP_N},
    {id:"bal-pw",k:"power",d:4,t:"Cambio",b:"Una vez esta semana, pide a tu anfitrión que te cambie de pareja para la siguiente actividad. Úsala con discreción. Nadie sabrá quién la ha usado."}
  ],
  nairobi:[
    {id:"nai-t1",k:"today",d:2,t:"Cuatro por jeep",b:"Tu primer safari, en grupos mixtos de cuatro. Cada uno se encarga de avistar algo: un animal, un ave, una huella o un sonido. Quien no encuentre nada cuenta la mejor mentira al respecto."},
    {id:"nai-t2",k:"today",d:4,t:"En pie antes que el sol",b:"El globo despega al amanecer. Daos la mano en la cesta solo si queréis, pero sujetad el sombrero en cualquier caso. El desayuno os espera donde aterricéis."},
    {id:"nai-s1",k:"spark",d:3,t:"El 4×4 es la cita",b:"Un jeep es una habitación pequeña. Durante los primeros veinte minutos, solo podéis haceros preguntas que empiecen por «qué» o «cuándo». Adelante."},
    {id:"nai-s2",k:"spark",d:1,t:"Giraffe Centre",b:"Dad de comer juntos a una jirafa. Después, cada uno dice qué haría este año si no tuviera miedo de hacer el ridículo."},
    {id:"nai-s3",k:"spark",d:6,t:"Elige el animal",b:"Di qué animal sería la persona que tienes al lado y explica por qué. Tiene que ser amable y tiene que ser acertado."},
    {id:"nai-tb1",k:"table",d:1,t:"Bajo los árboles",b:"En la cena de bienvenida, di tu nombre y lo mejor que hayas comido nunca. Tu anfitrión empieza y tiene que defender su elección."},
    {id:"nai-tb2",k:"table",d:4,t:"Cena para dos en la sabana",b:"Date Picks, primera ronda. Comparte con tu pareja una norma por la que vives y otra que hayas roto hace poco. El fuego sigue encendido y los móviles, guardados."},
    {id:"nai-tb3",k:"table",d:7,t:"Algo que llevarse",b:"En la cena de despedida junto al lago, cada persona dice algo que se lleva de esta semana."},
    {id:"nai-pv",k:"private",d:3,t:"Tres preguntas",b:PRIV_B,n:PRIV_N},
    {id:"nai-dp",k:"deep",d:5,t:"La Mesa Larga",b:"Después de la segunda ronda de Date Picks, el campamento se queda en silencio. Tres rondas de quince minutos junto al fuego, un farol en cada mesa y una pareja nueva en cada ronda. La primera es ligera y divertida, la segunda se vuelve personal y la tercera trata de vosotros dos. Si los dos queréis, terminad con cuatro minutos de contacto visual sin hablar.",n:DEEP_N},
    {id:"nai-pw",k:"power",d:4,t:"Cambiar de jeep",b:"Una vez esta semana, pide a tu anfitrión que te ponga en otro jeep para el siguiente safari. Úsala con discreción. Nadie sabrá quién la ha usado."}
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
  lisbon:"Ilustración animada de Lisboa: el tranvía 28 en el muelle bajo la Alfama, un puente sobre el río, una pared de azulejos y un farol.",
  rio:"Ilustración animada de Río: el Pan de Azúcar con su teleférico, las olas de Ipanema y una red de futvóley, una azotea con guirnaldas de luces.",
  bali:"Ilustración animada de Bali: terrazas de arroz, una puerta de templo partida con un farol, un columpio, una cascada y palmeras que se mecen.",
  nairobi:"Ilustración animada del Masái Mara: un globo aerostático, una acacia, una jirafa, un jeep de safari y una hoguera."
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
    return `<div class="mrow"><div class="mh"><h3>${KIND[kind][0]}</h3><p>${KIND[kind][1]}</p></div><div class="mc">${cs.map(c => `<button type="button" class="tag-link light chip${SEEN.has(c.id)?" seen":""}" data-card="${c.id}"><b>Día ${c.d}</b> ${esc(c.t)}</button>`).join("")}</div></div>`; }).join("");
}
function sceneSection(k){
  return `<section class="scene" id="scene"><div class="g">
    <div class="sh"><span class="eyebrow">Las cartas</span><h2>Abrir una carta</h2></div>
    <div class="sp"><p>Tu anfitrión reparte cartas a lo largo de la semana y cada carta pertenece a un momento del día. Toca un marcador de la imagen para abrir una o elige de la lista. Puedes pasar de cualquier carta.</p></div>
    <div class="sf">${scene(k)}</div>
    <div class="sm">${moments(k)}</div>
  </div></section>`;
}
function dayCards(k, di){
  const cs = CARDS[k].filter(c => c.d===di+1); if (!cs.length) return "";
  return `<dt>Cartas:</dt><dd class="cl">${cs.map(c => `<button type="button" class="cl-b" data-card="${c.id}" title="${esc(KIND[c.k][1])}: ${esc(c.t)}">${KIND[c.k][0]}</button>`).join("")}</dd>`;
}

/* ---------- homepage example: different cities, different cards ---------- */
let homeCity = "lisbon";
function homeGrid(k){
  const first = CARD_BY_ID[HS[k][0][0]].card, t = TRIPS[k];
  const lines = ["today","spark","table","private"].map(kind => { const c = CARDS[k].find(x => x.k===kind); return `<li><button type="button" data-card="${c.id}"><b>${KIND[kind][0]}</b><span>${KIND[kind][1]}</span><em>${esc(c.t)}</em></button></li>`; }).join("");
  return `<div class="cscene">${scene(k)}</div>
  <div class="cface"><div class="cf-card" style="--b:${META[k].band}"><span class="cf-k">${KIND[first.k][0]} · Día ${first.d} · ${t.city}</span><h3>${esc(first.t)}</h3><p>${esc(first.b)}</p><div class="cf-a"><button class="pill dark" type="button" data-card="${first.id}">Abrir esta carta</button><a class="tag-link light" href="#${k}">Ver ${esc(t.city)} ${ext}</a></div></div>
  <ul class="cf-l" aria-label="Momentos del día">${lines}</ul></div>`;
}
function homeCards(){
  return `<section class="cshow" id="cshow"><div class="wrap">
    <h2>Cartas para cada ciudad</h2>
    <p class="lead">Cada viaje tiene sus propias cartas, que se abren en distintos momentos del día. Elige una ciudad y toca un marcador de la imagen.</p>
    <div class="ctabs" id="ctabs">${ORDER.map(k => `<button type="button" data-ctab="${k}" aria-pressed="${k===homeCity}">${esc(TRIPS[k].city)}</button>`).join("")}</div>
    <div class="cgrid" id="cgrid">${homeGrid(homeCity)}</div>
  </div></section>`;
}

/* ---------- card dialog: sealed envelope, then an unfolding card ---------- */
document.body.insertAdjacentHTML("beforeend", `<div class="cdlg" id="cdlg" hidden role="dialog" aria-modal="true" aria-labelledby="cdT">
  <button class="cd-x" type="button" id="cdX" aria-label="Cerrar carta">✕</button>
  <div class="cd-in" id="cdIn">
    <div class="stage">
      <button class="env" type="button" id="cdEnv" aria-label="Abrir la carta sellada"><span class="eback"></span><span class="epocket"></span><span class="eflap"></span><span class="eseal">T</span><span class="elbl" id="cdLbl"></span></button>
      <article class="cardf" id="cdCard"><span class="cd-k" id="cdK"></span><h3 id="cdT"></h3><p class="cd-b" id="cdB"></p><p class="cd-n" id="cdN"></p><div class="cd-a"><button class="pill outline" type="button" id="cdPass">Pasar</button><button class="pill dark" type="button" id="cdKeep">Quedármela</button></div><p class="cd-f" id="cdF">Puedes pasar de cualquier carta.</p></article>
    </div>
    <p class="hint" id="cdHint">Toca el sobre para abrirlo</p>
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
  cdEl("cdLbl").textContent = `${kl[0]} · Día ${c.d} · ${TRIPS[city].city}`;
  cdEl("cdK").textContent = `${kl[0]} · ${kl[1]} · Día ${c.d}`;
  cdEl("cdT").textContent = c.t; cdEl("cdB").textContent = c.b;
  const n = cdEl("cdN"); n.textContent = c.n || ""; n.hidden = !c.n;
  cdEl("cdPass").disabled = false; cdEl("cdKeep").disabled = false; cdEl("cdF").textContent = "Puedes pasar de cualquier carta.";
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
  cdEl("cdB").textContent = "Pasada. Nadie pregunta por qué."; cdEl("cdN").hidden = true; cdEl("cdF").textContent = "Puedes pasar de cualquier carta.";
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
    <h2>Las cartas</h2>
    <div class="rows">
      <div class="frow2"><h3>La idea</h3><div><p>Las cartas son la forma en que tu anfitrión dirige la semana sin un horario rígido. Llegan en momentos concretos del día, te dicen qué hacer con quien tengas al lado y puedes pasar de cualquiera.</p></div></div>
      ${["today","spark","table","private"].map(kind => `<div class="frow2"><h3>${KIND[kind][0]}</h3><div><p><strong>${KIND[kind][1]}.</strong> ${KIND[kind][2]}</p></div></div>`).join("")}
      <div class="frow2"><h3>La Mesa Larga</h3><div><p>Una noche, normalmente la quinta, después de la segunda ronda de Date Picks. Tres rondas de quince minutos con una pareja nueva cada vez, basadas en las 36 preguntas de Arthur Aron. La primera es ligera y divertida, la segunda se vuelve personal y la tercera trata de vosotros dos. Si los dos queréis, termináis con cuatro minutos de contacto visual sin hablar.</p></div></div>
      ${[["Ronda 1","deep1"],["Ronda 2","deep2"],["Ronda 3","deep3"]].map(([n,id]) => `<div class="frow2"><h3>${n}</h3><ul class="dash">${lvl(id).map(q => `<li>${esc(q)}</li>`).join("")}</ul></div>`).join("")}
      <div class="frow2"><h3>Cartas Power</h3><div><p>Durante los días de elegir, cada miembro tiene cuatro cartas, de un solo uso: <strong>Cambio</strong> (cambiar de pareja), <strong>Cambiar de mesa</strong> (otro sitio en la cena), <strong>Veto</strong> (rechazar una pareja, sin dar motivos) y <strong>Cita doble</strong> (llevar a un amigo). Tu anfitrión se encarga de la parte incómoda y nadie sabe quién ha usado qué.</p></div></div>
      <div class="frow2"><h3>Verlas</h3><div><a class="tag-link light" href="#lisbon-scene">Abrir una carta de Lisboa ${ext}</a> <a class="tag-link light" href="#rio-scene">Río ${ext}</a> <a class="tag-link light" href="#bali-scene">Bali ${ext}</a> <a class="tag-link light" href="#nairobi-scene">Nairobi ${ext}</a></div></div>
    </div>
  </div></section>`;
}

/* ---------- shared page helpers ---------- */
const pageTitle = (eyebrow, h1, sub) => `<section class="ptitle"><div class="wrap in"><span class="mono">${esc(eyebrow)}</span><h1>${esc(h1)}</h1>${sub?`<p>${esc(sub)}</p>`:""}</div></section>`;
const INCLUDED = ["Habitación individual con llave propia, todas las noches","Todos los traslados por tierra, de la llegada a la salida","Todas las citas, actividades y retos del programa","La mayoría de las comidas, según cada programa","Tu anfitrión durante toda la semana","Las barajas de cartas Tringles"];
const NOT_INCLUDED = ["Vuelos internacionales","Seguro de viaje (obligatorio)","Visados o tasas de entrada cuando se requieran","Bebidas fuera de las comidas incluidas","Gastos personales"];
const SEATS = {lisbon:"8 + 8", rio:"8 + 8", bali:"8 + 8", nairobi:"6–8 + 6–8"};
const NIGHTS = {lisbon:"Sáb. 15 – sáb. 22 de mayo de 2027", rio:"Sáb. 13 – sáb. 20 de marzo de 2027", bali:"Sáb. 12 – sáb. 19 de junio de 2027", nairobi:"Sáb. 11 – sáb. 18 de septiembre de 2027"};

/* ---------- DATES & PRICES ---------- */
function dates(){
  return pageTitle("Temporada uno","Fechas y precios","Precios orientativos por persona, sin vuelos, habitación individual") + `
  <section class="summary"><div class="wrap">
    <div class="ptable" role="table" aria-label="Fechas y precios de la temporada uno">
      <div class="prow phead" role="row"><span role="columnheader">Viaje</span><span role="columnheader">Fechas</span><span role="columnheader">Noches</span><span role="columnheader">Plazas por lista</span><span role="columnheader">Desde</span><span role="columnheader"></span></div>
      ${ORDER.map(k=>`<div class="prow" role="row" id="row-${k}">
        <span role="cell"><a href="#${k}" class="pname">${esc(TRIPS[k].city)}</a><small>${esc(TRIPS[k].name)}</small></span>
        <span role="cell">${esc(NIGHTS[k])}</span>
        <span role="cell">${TRIPS[k].nights}</span>
        <span role="cell">${esc(SEATS[k])}</span>
        <span role="cell" class="pp">Desde ${TRIPS[k].price}</span>
        <span role="cell"><a class="tag-link" href="#apply-${k}">Solicitar</a></span>
      </div>`).join("")}
    </div>
    <p class="note">Las fechas exactas son provisionales hasta que se abre cada temporada. Un depósito de 500 € reserva tu plaza una vez aceptada tu solicitud; el resto se paga 60 días antes de la salida.</p>
    <div class="sgrid" style="margin-top:56px">
      <div><h3>Incluido</h3><ul class="dash">${INCLUDED.map(x=>`<li>${esc(x)}</li>`).join("")}</ul></div>
      <div><h3>No incluido</h3><ul class="dash">${NOT_INCLUDED.map(x=>`<li>${esc(x)}</li>`).join("")}</ul></div>
      <div><h3>Depósito y pago</h3><ul class="dash"><li>Depósito de 500 € tras la aceptación</li><li>Resto a pagar 60 días antes de la salida</li><li>Pago mediante enlace seguro, nunca a través de esta web</li></ul></div>
    </div>
  </div></section>`;
}

/* ---------- FAQ ---------- */
const FAQS = [
  ["¿Para quién son los viajes?","Para solteros de entre 26 y 38 años aproximadamente (de 28 a 40 en Nairobi) que prefieren conocer a alguien en un kayak que en una ventana de chat. Cada grupo mantiene un equilibrio 8/8, así que mujeres y hombres se inscriben en listas separadas."],
  ["¿Tengo que buscar el amor?","No. Muchos miembros vienen por el viaje y la gente. En la Revelación eliges conexiones románticas y de amistad, así que la semana termina, en cualquier caso, con personas a las que volver a ver."],
  ["¿Y si no coincido con nadie?","Las elecciones son privadas y solo se anuncian las coincidencias mutuas, así que nadie escucha un no. La mayoría de los miembros se va con nuevos amigos y una historia, y muchos con planes de volver a verse."],
  ["¿Me pondrán con alguien que no me cae bien?","Las primeras parejas son al azar y cambian en cada actividad. Después de cada cita das tu opinión privada al anfitrión, que la usa para formar las siguientes parejas. Puedes pasar de cualquier carta, juego o cita."],
  ["¿En qué idioma es el viaje?","Cada temporada es en inglés o en ruso, y la página del viaje lo indica. En la temporada uno, los anfitriones hablan ambos idiomas."],
  ["¿Están incluidos los vuelos?","No. Los precios cubren el programa en destino: habitaciones, traslados, la mayoría de las comidas, todas las actividades, tu anfitrión y las barajas de cartas. Te sugeriremos horarios de llegada y salida."],
  ["¿Se graba?","Solo las temporadas principales, claramente señaladas de antemano. Grabar requiere tu autorización firmada, y las citas privadas, las habitaciones y tus elecciones nunca se graban. Puedes decir que no y venir igualmente."],
  ["¿Cómo garantizáis la seguridad?","Cada solicitante tiene una llamada con un anfitrión y una verificación de identidad, y firma el código de conducta. Las habitaciones son individuales con llave propia, un anfitrión formado viaja con cada grupo y puede expulsar a cualquiera, y traslados con licencia te llevan de vuelta después de cada salida nocturna."],
  ["¿Puedo ir con un amigo?","Sí, inscribíos por separado y mencionaos en la solicitud. En las actividades estaréis en parejas distintas, y eso es la mitad de la gracia."],
  ["¿Cuál es la política de cancelación?","El depósito de 500 € es reembolsable durante 14 días después de la aceptación. Después, si cancelas con más de 60 días de antelación pierdes el depósito; a menos de 60 días se debe el precio completo, salvo que tu plaza se cubra desde la misma lista. El seguro de viaje es obligatorio."],
  ["¿Qué pasa si se cancela un viaje?","Si cancelamos, te devolvemos íntegramente todo lo que nos hayas pagado o, si lo prefieres, te damos una plaza en otra temporada."]
];
function faq(){
  return pageTitle("Ayuda","Preguntas frecuentes","Conviene saber antes de solicitar") + `
  <section class="summary"><div class="wrap faqwrap">
    ${FAQS.map(([q,a],i)=>`<details class="faqi"${i===0?" open":""}><summary>${esc(q)}</summary><p>${esc(a)}${a.startsWith("Borrador")?"":""}</p></details>`).join("")}
    <p class="note" style="margin-top:28px">¿Aún tienes dudas? Escribe a tringles@tourground.com.</p>
  </div></section>`;
}

/* ---------- ABOUT / HOSTS ---------- */
function about(){
  return pageTitle("El club","Sobre Tringles","Sáltate la primera cita. Haz el viaje.") + `
  <section class="intro"><div class="wrap">
    <div><h2>Un club al que te unes durante una semana</h2><p>Tringles nació de una observación sencilla: una primera cita tomando algo dice muy poco, y una semana en barco, a caballo y en la pista de baile dice mucho. Así que creamos viajes pequeños y acompañados en los que conocer a alguien forma parte del itinerario, pero nunca es su único objetivo.</p></div>
    <ul class="dash"><li>Grupos pequeños de 12 a 16 miembros</li><li>Cada viaje dirigido por un anfitrión, presente toda la semana</li><li>Socios locales con los que trabajamos desde hace años</li><li>Temporada uno: Lisboa, Río, Bali y Nairobi</li></ul>
  </div></section>
  <section class="story"><div class="wrap">
    ${ph("gen_candles","Una mesa larga puesta para cenar")}
    <div class="txt"><p>Tringles lo cofundaron un operador de viajes cuya empresa receptiva trabaja con socios en más de 130 países y un creador de contenido sobre citas cuya audiencia lleva años pidiendo algo mejor que las apps.</p><p>Uno sabe organizar una semana impecable en cualquier lugar del mundo. El otro sabe qué hace que la gente se abra y qué hace que se cierre.</p></div>
  </div></section>
  <section class="summary"><div class="wrap"><h2>Los anfitriones</h2><div class="sgrid">
    <div><h3>Quiénes son</h3><ul class="dash"><li>Coordinadores de viaje o anfitriones de eventos con experiencia</li><li>Con dominio del idioma de la temporada</li><li>Formados en dinámica de grupos y protección de personas</li></ul></div>
    <div><h3>Qué hacen</h3><ul class="dash"><li>Gestionan las cartas, los círculos y las parejas</li><li>Leen tu opinión privada después de cada cita</li><li>Cuidan de quien se sienta excluido</li></ul></div>
    <div><h3>Qué pueden hacer</h3><ul class="dash"><li>Cambiar cualquier plan por seguridad o por el tiempo</li><li>Expulsar a quien incumpla el código de conducta</li><li>Llamar al equipo local a cualquier hora</li></ul></div>
  </div></div></section>`;
}

/* ---------- JOURNAL ---------- */
const STORIES = [
  {t:"Por qué la primera cita no funciona", d:"Noventa minutos, dos copas y un veredicto. Un alegato a favor de conocer a alguien durante una semana llena de cosas reales que hacer.", tone:"gen_sails", cap:"A toda vela", href:"#how", cta:"Cómo funciona"},
  {t:"Treinta y seis preguntas, tres niveles", d:"Cómo el estudio de Arthur Aron sobre la cercanía dio forma a la baraja Deep, y por qué las preguntas más difíciles llegan al final.", tone:"gen_lamp", cap:"Una mesa para dos al caer la noche", href:"#cards", cta:"Las cartas"},
  {t:"Cinco primeras citas en los alrededores de Lisboa", d:"Caballos entre alcornoques, un patrón en el Sado, un buggy entre el polvo. El segundo día de la Semana entre viñedos.", tone:"lis_horses", cap:"Jinetes en caballos lusitanos", href:"#lisbon", cta:"Lisboa"},
  {t:"Lo que hace de verdad un anfitrión", d:"Las parejas, los círculos de la noche y la palabra discreta para quien se siente excluido. Un día con un anfitrión de Tringles.", tone:"gen_toast", cap:"Un brindis en la cena", href:"#about", cta:"Sobre los anfitriones"}
];
function journal(){
  return pageTitle("Historias","Diario","Notas del club") + `
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
const conduct = () => legal("El club","Código de conducta","Lo que acepta cada miembro antes de viajar",[
  ["El respeto es la norma",["Trata con respeto a cada miembro, anfitrión, guía y socio local. Nada de acoso, presión ni contacto no deseado, en persona o en línea."]],
  ["Consentimiento, siempre",["El interés se muestra, nunca se da por hecho. Un no, un «paso» o un silencio es un no. Cualquiera puede pasar de cualquier carta, juego o cita sin dar explicaciones."]],
  ["Las habitaciones son privadas",["Todos tienen una habitación individual con llave propia. Los juegos y las actividades de grupo nunca tienen lugar en los dormitorios."]],
  ["Beber con responsabilidad",["Nadie es presionado para beber y ningún juego implica alcohol. El anfitrión puede intervenir si alguien no está en condiciones de cuidar de sí mismo."]],
  ["Privacidad",["No fotografíes ni publiques a otros miembros sin su permiso. Las elecciones, las opiniones y la Revelación son privadas."]],
  ["Honestidad",["Confirmas que estás soltero, que eres mayor de 18 años y que lo que nos cuentas en tu solicitud es cierto."]],
  ["Si algo va mal",["Avisa a tu anfitrión o contacta directamente con los fundadores en cualquier momento. Los anfitriones pueden expulsar a quien incumpla este código, a su propia costa y sin reembolso."]]
]);
// Privacy Policy, Booking Terms and Cookie Policy are real pages (privacy.html, terms.html, cookies.html).
const LP = document.documentElement.lang === "en" ? "" : "/" + document.documentElement.lang;

/* ---------- INTAKE FORM ---------- */
const STEPS = ["Viaje","Sobre ti","Tu semana","Seguridad y consentimiento","En tus palabras","Revisión"];
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
    <fieldset><legend>¿Qué viaje?</legend><div class="opts trips">${ORDER.map(k=>`<label class="opt tripopt"><input type="radio" name="trip" value="${k}"${f.trip===k?" checked":""}><span><b>${esc(TRIPS[k].city)}</b><small>${esc(TRIPS[k].name)} · ${esc(TRIPS[k].when)} · Desde ${TRIPS[k].price}</small></span></label>`).join("")}</div></fieldset>
    <fieldset><legend>¿Cuándo te gustaría ir?</legend><div class="opts">${[["season1","Temporada uno (las fechas indicadas)"],["later","Una temporada posterior"],["flexible","Soy flexible"]].map(([v,l])=>opt("season",v,l,"radio",f.season===v)).join("")}</div></fieldset>`;
  if (step===1) return `
    <div class="fgrid">
      <label class="fl">Nombre<input id="i-first" value="${esc(f.first)}" autocomplete="given-name"></label>
      <label class="fl">Apellidos<input id="i-last" value="${esc(f.last)}" autocomplete="family-name"></label>
      <label class="fl">Correo electrónico<input id="i-email" type="email" value="${esc(f.email)}" autocomplete="email"></label>
      <label class="fl">Teléfono o contacto de mensajería<input id="i-contact" value="${esc(f.contact)}" autocomplete="tel" placeholder="${"+34… o @usuario"}"></label>
      <label class="fl">País<input id="i-country" value="${esc(f.country)}" autocomplete="country-name"></label>
      <label class="fl">Ciudad<input id="i-city" value="${esc(f.city)}" autocomplete="address-level2"></label>
    </div>
    <fieldset><legend>Franja de edad</legend><div class="opts">${["26–30","31–35","36–40","40+"].map(v=>opt("age",v,v,"radio",f.age===v)).join("")}</div></fieldset>
    <fieldset><legend>¿En qué lista te inscribes?</legend><p class="hint">Cada grupo mantiene un equilibrio 8/8.</p><div class="opts">${[["women","Lista de mujeres"],["men","Lista de hombres"]].map(([v,l])=>opt("list",v,l,"radio",f.list===v)).join("")}</div></fieldset>
    <fieldset><legend>Idiomas en los que te sientes cómodo</legend><div class="opts">${[["en","English"],["ru","Ruso"],["other","Otro"]].map(([v,l])=>opt("langs",v,l,"checkbox",f.langs.includes(v))).join("")}</div>
      <label class="fl" id="langOtherWrap"${f.langs.includes("other")?"":" hidden"}>¿Qué otros idiomas?<input id="i-langOther" value="${esc(f.langOther)}"></label></fieldset>`;
  if (step===2) return `
    <fieldset><legend>¿Qué buscas?</legend><div class="opts">${[["romance","Romance"],["friendship","Amistad"],["both","Abierto a ambas"]].map(([v,l])=>opt("looking",v,l,"radio",f.looking===v)).join("")}</div></fieldset>
    <fieldset><legend>¿Qué te gusta? Elige las que quieras</legend><div class="opts">${["Vino","Deporte","Playa","Vida nocturna","Naturaleza","Bienestar","Gastronomía"].map(v=>opt("interests",v.toLowerCase(),v,"checkbox",f.interests.includes(v.toLowerCase()))).join("")}</div></fieldset>
    <fieldset><legend>Tu nivel de actividad</legend><div class="opts">${[["easy","Suave: paseos y baños"],["moderate","Moderado: caminatas y clases de surf"],["active","Activo: me apunto a todo"]].map(([v,l])=>opt("activity",v,l,"radio",f.activity===v)).join("")}</div></fieldset>
    <div class="fgrid">
      <label class="fl">Necesidades alimentarias o alergias <span class="opt-t">Opcional</span><textarea id="i-diet" rows="3">${esc(f.diet)}</textarea></label>
      <label class="fl">Necesidades de habitación o accesibilidad <span class="opt-t">Opcional</span><textarea id="i-access" rows="3">${esc(f.access)}</textarea></label>
    </div>`;
  if (step===3) return `
    <fieldset><legend>Confirma, por favor</legend><div class="opts col">
      ${opt("single","yes","Estoy soltero y soy mayor de 18 años","checkbox",f.single)}
      ${opt("conduct","yes","Acepto el Código de conducta","checkbox",f.conduct)}
      ${opt("idcheck","yes","Entiendo que hay una llamada con un anfitrión y una verificación de identidad antes de ofrecer una plaza","checkbox",f.idcheck)}
    </div><p class="hint"><a href="#conduct" target="_self" data-keep="1">Leer el Código de conducta</a></p></fieldset>
    <fieldset><legend>Grabación</legend><p class="hint">Solo se graban las temporadas principales, y solo con autorización firmada.</p><div class="opts col">${[["yes","Acepto que me graben en una temporada grabada"],["no","Prefiero que no me graben"]].map(([v,l])=>opt("filming",v,l,"radio",f.filming===v)).join("")}</div></fieldset>
    <fieldset><legend>Seguir en contacto <span class="opt-t">Opcional</span></legend><div class="opts col">${opt("marketing","yes","Enviadme novedades sobre nuevas temporadas","checkbox",f.marketing)}</div></fieldset>`;
  if (step===4) return `
    <label class="fl">Háblanos de ti<span class="hint">Unas frases: a qué te dedicas, cómo sería para ti una semana estupenda y cualquier cosa que deba saber tu anfitrión. De 40 a 800 caracteres.</span><textarea id="i-about" rows="7" maxlength="800">${esc(f.about)}</textarea><span class="count" id="aboutCount">${f.about.length}/800</span></label>
    <label class="fl">Instagram <span class="opt-t">Opcional</span><input id="i-instagram" value="${esc(f.instagram)}" placeholder="${"@tunombre"}"></label>`;
  // review
  const t = TRIPS[f.trip];
  const L = (a,b) => `<dt>${esc(a)}</dt><dd>${esc(b||"—")}</dd>`;
  const lab = {season1:"Temporada uno",later:"Una temporada posterior",flexible:"Flexible",women:"Lista de mujeres",men:"Lista de hombres",romance:"Romance",friendship:"Amistad",both:"Abierto a ambas",easy:"Suave",moderate:"Moderado",active:"Activo",yes:"Acepto que me graben",no:"Prefiero que no me graben"};
  return `
    <div class="review">
      <div><h3>Viaje</h3><dl class="kv">${L("Viaje", t ? `${t.city} · ${t.name}` : "")}${L("Cuándo", lab[f.season])}</dl><button type="button" class="tag-link" data-goto="0">Editar</button></div>
      <div><h3>Sobre ti</h3><dl class="kv">${L("Nombre", `${f.first} ${f.last}`)}${L("Correo electrónico", f.email)}${L("Contacto", f.contact)}${L("Vive en", `${f.city}, ${f.country}`)}${L("Edad", f.age)}${L("Lista", lab[f.list])}${L("Idiomas", f.langs.map(x=>({en:"English",ru:"Ruso",other:f.langOther||"Otro"})[x]).join(", "))}</dl><button type="button" class="tag-link" data-goto="1">Editar</button></div>
      <div><h3>Tu semana</h3><dl class="kv">${L("Busca", lab[f.looking])}${L("Le gusta", f.interests.join(", "))}${L("Actividad", lab[f.activity])}${L("Alimentación", f.diet)}${L("Habitación / acceso", f.access)}</dl><button type="button" class="tag-link" data-goto="2">Editar</button></div>
      <div><h3>Seguridad y consentimiento</h3><dl class="kv">${L("Confirmado", "Soltero, código de conducta, llamada y verificación de identidad")}${L("Grabación", lab[f.filming])}${L("Novedades", f.marketing?"Sí":"No")}</dl><button type="button" class="tag-link" data-goto="3">Editar</button></div>
      <div class="wide"><h3>En tus palabras</h3><p class="quote">${esc(f.about)}</p><dl class="kv">${L("Instagram", f.instagram)}</dl><button type="button" class="tag-link" data-goto="4">Editar</button></div>
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
  if (step===0){ if(!f.trip) e.push("Elige un viaje."); if(!f.season) e.push("Elige cuándo te gustaría ir."); }
  if (step===1){
    if(!f.first) e.push("Añade tu nombre."); if(!f.last) e.push("Añade tus apellidos.");
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.email)) e.push("Añade un correo electrónico válido.");
    if(f.contact.length<3) e.push("Añade un teléfono o contacto de mensajería.");
    if(!f.country) e.push("Añade tu país."); if(!f.city) e.push("Añade tu ciudad.");
    if(!f.age) e.push("Elige tu franja de edad."); if(!f.list) e.push("Elige la lista en la que te inscribes.");
    if(!f.langs.length) e.push("Elige al menos un idioma.");
  }
  if (step===2){ if(!f.looking) e.push("Elige lo que buscas."); if(!f.interests.length) e.push("Elige al menos una cosa que te guste."); if(!f.activity) e.push("Elige tu nivel de actividad."); }
  if (step===3){ if(!f.single) e.push("Confirma que estás soltero y eres mayor de 18 años."); if(!f.conduct) e.push("Acepta el Código de conducta para inscribirte."); if(!f.idcheck) e.push("Confirma que entiendes la llamada con el anfitrión y la verificación de identidad."); if(!f.filming) e.push("Elige una preferencia de grabación."); }
  if (step===4){ if(f.about.length<40) e.push("Cuéntanos un poco más sobre ti (al menos 40 caracteres)."); }
  return e;
}
function applyPage(prefill){
  const d = loadDraft();
  if (!form) form = d ? Object.assign(blankForm(), d) : blankForm(prefill);
  if (prefill && TRIPS[prefill]) form.trip = prefill;
  step = 0;
  return pageTitle("Temporada uno","Solicitar","Seis pasos cortos. Unos diez minutos.") + `
  <section class="intake"><div class="wrap">
    <ol class="progress" id="progress" aria-label="Progreso"></ol>
    <form id="intake" novalidate>
      <div id="stepBody"></div>
      <div class="errs" id="errs" role="alert" hidden></div>
      <div class="navrow"><button type="button" class="pill outline" id="back">Atrás</button><button type="submit" class="pill dark" id="next">Continuar</button></div>
    </form>
    <div id="done" hidden></div>
    <p class="note" style="margin-top:28px">Solo pedimos lo que necesitamos para planificar tu semana. Consulta la <a href="${LP}/privacy">Política de privacidad</a>. Aquí nunca pedimos números de pasaporte ni datos de pago.</p>
  </div></section>`;
}
function paintStep(){
  $("#progress").innerHTML = STEPS.map((s,i)=>`<li class="${i<step?"done":i===step?"cur":""}"${i===step?' aria-current="step"':""}><span>${i+1}</span>${esc(s)}</li>`).join("");
  $("#stepBody").innerHTML = `<h2 class="sh">${esc(STEPS[step])}</h2>` + stepHTML();
  $("#back").hidden = step===0;
  $("#next").textContent = step===STEPS.length-1 ? "Enviar solicitud" : "Continuar";
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
      if (errs.length){ $("#errs").innerHTML = `<p>Antes de continuar:</p><ul>${errs.map(x=>`<li>${esc(x)}</li>`).join("")}</ul>`; $("#errs").hidden = false; $("#errs").scrollIntoView({block:"center"}); return; }
      step++; paintStep(); window.scrollTo(0, $("#progress").offsetTop - 80); return;
    }
    if (submitting) return; submitting = true; $("#next").disabled = true; $("#next").textContent = "Sending…";
    const res = await submitApplication(form);
    submitting = false; $("#next").disabled = false; $("#next").textContent = "Enviar solicitud";
    if (res.ok){ clearDraft(); const t = TRIPS[form.trip]; $("#intake").hidden = true; $("#progress").hidden = true;
      $("#done").hidden = false; $("#done").innerHTML = `<div class="done"><span class="eyebrow">Solicitud recibida</span><h2>Gracias, ${esc(form.first)}.</h2><p>Tu solicitud para ${esc(t.city)} · ${esc(t.name)} ya está con nosotros. Un anfitrión se pondrá en contacto contigo en el plazo de una semana para concertar una breve llamada. Todavía no hay nada que pagar.</p><a class="pill outline" href="#${form.trip}">Volver a ${esc(t.city)}</a></div>`;
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
  const r = await fetch(ENDPOINT, {method:"POST", headers:{"Content-Type":"application/json", "Aceptar":"application/json"}, body: JSON.stringify({kind, ...data})});
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
    catch(e){ return {ok:false, msg:`No hemos podido enviar tu solicitud ahora mismo. Tus respuestas se guardan en este dispositivo; inténtalo de nuevo o escribe a ${CONTACT} y te ayudaremos.`}; }
  }
  const t = TRIPS[f.trip];
  mailto(`Application: ${t ? t.city + " · " + t.name : f.trip} (${f.first} ${f.last})`,
    Object.entries(record).map(([k,v]) => `${k}: ${Array.isArray(v) ? v.join(", ") : v}`).join("\n"));
  return {ok:true};
}
async function subscribe(email){
  if (ENDPOINT){ try { await post("newsletter", {email, at:new Date().toISOString()}); return true; } catch(e){ return false; } }
  mailto("Boletín", `Por favor, añadid ${email} al boletín de Tringles.`);
  return true;
}

/* ---------- router ---------- */
const VIEWS = {home:[home,wireHome], how:[how,null], credits:[credits,null], dates:[dates,null], faq:[faq,null], about:[about,null], journal:[journal,null], conduct:[conduct,null]};
function route(){
  if (document.body.hasAttribute("data-static")) return;
  let v = (location.hash || "#home").slice(1) || "home";
  if (v==="privacy" || v==="terms" || v==="cookies") { location.replace(LP + "/" + v); return; }
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
  $("#fab").textContent = TRIPS[v] ? "Solicitar este viaje" : "Solicitar ahora";
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
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(m)) { $("#subMsg").textContent = "Añade un correo electrónico válido."; return; }
  $("#subMsg").textContent = "Saving…";
  $("#subMsg").textContent = (await subscribe(m)) ? "Gracias, ya estás en la lista." : "No se ha podido guardar desde esta vista. Escribe a tringles@tourground.com para apuntarte.";
});
addEventListener("hashchange", route);
route();

