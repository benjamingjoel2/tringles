const TRIPS = {
  lisbon: {
    city: "Lisbon", name: "Vineyard Week", cls: "m-lisbon", when: "May 2027", price: "€3,600", nights: 7,
    base: "Wine estate in Azeitão → villa in the Sintra hills → Comporta → Lisbon",
    intro: "Start slow among the vines, get competitive in a villa kitchen, end on the coast and a Lisbon rooftop. It's the easiest trip to reach from anywhere in Europe and the most relaxed of the four.",
    facts: [["Group","16 members, 8 + 8"],["Ages","26–38"],["Best for","Wine, horses, slow dinners"],["Getting there","Fly into Lisbon (LIS)"]],
    days: [
      {t:"Arrive among the vines", s:[["Afternoon","Pick-up in Lisbon, 40 minutes south to a wine estate in Azeitão. Check in, pool, settle."],["Evening","Dinner at a long table in the vineyard. Your host opens the week with a short welcome, then everyone introduces themselves with a card."]]},
      {t:"First dates", s:[["Morning","Slow breakfast with scenario cards: it rains on your romantic weekend, now what?"],["Midday","Pairs are drawn and head out on one of five dates, lunch included."],["Late afternoon","Winery tour and tasting."],["Evening","Dinner at a restaurant with a view. Host's circle: what surprised you today?"]],
        f:{h:"The five first dates", list:["Horseback through the estate, then a picnic","Kayaking on the Sado river, lunch by the water","Private boat with a captain, lunch on board","Jeep safari through cork forests and vineyards","Off-road buggy, then lunch in a village tasca"], p:"After every date, each person answers three private questions for the host: Did you feel comfortable with this person? What did you enjoy most? Would you like more time with them?"}},
      {t:"The Secret Recipe Challenge", s:[["Morning","Move to a private villa in the Sintra hills."],["Midday","Five pairs, one lunch, nobody has the full picture. Then you eat what you made."],["Afternoon","Pool time."],["Evening","Into Alfama for dinner and fado. Host's circle on the challenge."]],
        f:{h:"How the challenge works", ol:["Recipe holders describe the ingredients without naming them.","List makers turn the descriptions into a shopping list, then hand it on.","Shoppers buy what's on the list without talking to the recipe holders. They don't know the budget.","Budget keepers know the limit and set the clock. If the receipt is over budget, the shoppers decide what goes back.","Cooks follow spoken instructions only and cook with whatever arrives."], p:"The debrief is about the team, never about who was bossy. If it gets tense, the host brings it back to the shared win."}},
      {t:"Down to the coast", s:[["Morning","Drive west to Comporta: rice fields, storks, long empty beaches."],["Afternoon","Beach club, paddle boards, horses on the sand for whoever wants them."],["Evening","Date Picks, round one: half the group chooses a dinner date in Comporta village."]]},
      {t:"Dolphins on the Sado", s:[["Day","Boat day on the Sado estuary from Setúbal: dolphins, swimming at Tróia, lunch on board."],["Evening","Date Picks, round two: the other half chooses. Back at the house, the Long Table: three quiet rounds, a new partner each time."]]},
      {t:"Lisbon", s:[["Morning","Into Lisbon. Free pairs: Belém by bike, the Gulbenkian gardens or the LX Factory. You choose who and where."],["Evening","Sunset sail on the Tagus, then out in Príncipe Real."]]},
      {t:"The Reveal", s:[["Day","Free day. Final picks go privately to the host by 16:00."],["Sunset","The Reveal on a rooftop over the river, then a farewell dinner."]]},
      {t:"First real date", s:[["Morning","Matched pairs get breakfast for two in a pastelaria. Everyone else: group brunch. Transfers to the airport."]]}
    ]
  },
  rio: {
    city: "Rio de Janeiro", name: "Love Week", cls: "m-rio", when: "March 2027, after Carnival", price: "€4,200", nights: 7,
    base: "One boutique villa in Santa Teresa or Ipanema",
    intro: "The full Love Island energy: beach sport, samba, a schooner day and a sunset reveal at Arpoador. The most social and the loudest of the four.",
    facts: [["Group","16 members, 8 + 8"],["Ages","26–38"],["Best for","Beach, sport, nightlife"],["Getting there","Fly into Rio (GIG)"]],
    days: [
      {t:"Arrive", s:[["Afternoon","Private transfers, check-in, your personal deck in the welcome pack."],["Evening","Welcome dinner on a Santa Teresa rooftop."]]},
      {t:"Beach day", s:[["Morning","Footvolley and beach volleyball at Ipanema in mixed teams, with a coach."],["Evening","Samba class, then a guided night out in Lapa."]]},
      {t:"First dates", s:[["Day","Random pairs: a surf lesson at Prainha, a Tijuca forest hike, hang-gliding at São Conrado, or a cooking class."],["Evening","Caipirinha masterclass and the Hot Seat card game."]], f:{h:"After every date", p:"Three private questions for the host: comfortable? best moment? more time together? The answers weight tomorrow's pairs."}},
      {t:"Sugarloaf", s:[["Day","Pairs weighted by the host: climb or cable car up Sugarloaf, then the Botanical Garden."],["Evening","Date Picks, round one: one-on-one dinners across eight restaurants."]]},
      {t:"Boat day", s:[["Day","Private schooner around the Guanabara Bay islands, swimming and lunch on board."],["Evening","Date Picks, round two, then the Long Table back at the villa: three quiet rounds, a new partner each time."]]},
      {t:"Free pairs", s:[["Afternoon","Choose who and what from a menu of pre-booked outings."],["Evening","Street samba at Pedra do Sal."]]},
      {t:"The Reveal", s:[["Sunrise","Christ the Redeemer before the crowds."],["Sunset","The Reveal on an Arpoador rooftop, then the farewell party."]]},
      {t:"First real date", s:[["Morning","Breakfast for two for matched pairs, group brunch for everyone, transfers out."]]}
    ]
  },
  bali: {
    city: "Bali", name: "Island Week", cls: "m-bali", when: "June 2027", price: "€3,400", nights: 7,
    base: "Jungle villa in Ubud → cliff villa in Uluwatu",
    intro: "Rice terraces and waterfalls first, surf and cliff sunsets second. Bali is the softest landing for a group of strangers and the best value of the four.",
    facts: [["Group","16 members, 8 + 8"],["Ages","26–38"],["Best for","Nature, wellness, surf"],["Getting there","Fly into Denpasar (DPS)"]],
    days: [
      {t:"Arrive in Ubud", s:[["Afternoon","Transfer up to a private jungle villa, then a welcome blessing."],["Evening","Dinner in the rice fields."]]},
      {t:"The Market Relay", s:[["Morning","Cycle down through the rice terraces in random pairs."],["Midday","Bali's version of the recipe challenge: five pairs, Ubud market, a Balinese chef and one lunch to pull off together."],["Evening","Host's circle on what helped you agree."]]},
      {t:"First dates", s:[["Day","Pairs are drawn for one of five dates: rafting on the Ayung, a waterfall hike, a silver-jewellery class, the Tegallalang swing and coffee, or a temple and spring walk."],["Evening","Gong bath and a slow dinner at the villa."]], f:{h:"After every date", p:"Three private questions for the host. Nobody else sees the answers."}},
      {t:"To the cliffs", s:[["Morning","Move south to a cliff villa in Uluwatu."],["Afternoon","Surf lesson at Padang Padang or pool time."],["Evening","Kecak fire dance at the Uluwatu temple, then Date Picks, round one."]]},
      {t:"Island boat day", s:[["Day","Speedboat to Nusa Lembongan: snorkelling with manta rays, a beach lunch."],["Evening","Date Picks, round two, then the Long Table at the cliff villa: three quiet rounds, a new partner each time."]]},
      {t:"Free pairs", s:[["Day","Choose who and what: a spa, a beach club, a yoga class or a scooter ride with a driver."],["Evening","Group night at a beach club."]]},
      {t:"The Reveal", s:[["Sunset","The Reveal on the cliff edge, then a farewell seafood dinner on Jimbaran beach."]]},
      {t:"First real date", s:[["Morning","Breakfast for two for matched pairs, group brunch, transfers out."]]}
    ]
  },
  nairobi: {
    city: "Nairobi", name: "Safari Week", cls: "m-nairobi", when: "September 2027, migration season", price: "€5,900", nights: 7,
    base: "Nairobi garden hotel → tented camp in the Maasai Mara → Lake Naivasha",
    intro: "Shared jeeps, a dawn balloon and dinners by the fire. The most intense week of the four: small camps, early mornings and nowhere to hide from a good conversation.",
    facts: [["Group","12–16 members"],["Ages","28–40"],["Best for","Wildlife, once-in-a-lifetime"],["Getting there","Fly into Nairobi (NBO)"]],
    days: [
      {t:"Arrive in Nairobi", s:[["Afternoon","Garden hotel in Karen, then the Giraffe Centre."],["Evening","Welcome dinner under the trees."]]},
      {t:"Into the Mara", s:[["Morning","Light aircraft to the Maasai Mara."],["Afternoon","First game drive in mixed groups of four."],["Evening","Sundowner on a ridge, then dinner in camp."]]},
      {t:"First dates", s:[["Dawn","Drives in pairs with a guide: the 4×4 is the date."],["Afternoon","Walking safari with Maasai guides, or the camp pool."],["Evening","Fireside host's circle."]], f:{h:"After every date", p:"Three private questions for the host. Pairs change at every drive until day five."}},
      {t:"Balloon at dawn", s:[["Dawn","Hot-air balloon over the plains, then a champagne bush breakfast (alcohol-free option standard)."],["Afternoon","The Camp Kitchen Challenge: the recipe game, cooked over fire with the camp chefs."],["Evening","Date Picks, round one: bush dinners for two."]]},
      {t:"River crossings", s:[["Day","A full day at the Mara River for the migration crossings, with a picnic."],["Evening","Date Picks, round two, then the Long Table around the fire: three quiet rounds, a new partner each time."]]},
      {t:"Lake Naivasha", s:[["Morning","Fly to Naivasha."],["Afternoon","Boat among the hippos, then cycling in Hell's Gate in pairs of your choice."]]},
      {t:"The Reveal", s:[["Sunset","The Reveal at a lakeside sundowner, then a farewell dinner."]]},
      {t:"First real date", s:[["Morning","Breakfast for two for matched pairs, then a road transfer to Nairobi for flights."]]}
    ]
  }
};
const ORDER = ["lisbon","rio","bali","nairobi"];

const DECKS = [
  {id:"spark", name:"Spark · The fun side", cls:"c-spark", sw:"var(--clay)", when:"Day 1", desc:"Intros at the welcome dinner",
   qs:["What's something you could talk about for hours?","What's one experience you'd love to have in the next year?","What's the most spontaneous thing you've ever done?","What makes you instantly like someone?","What's a green flag you notice early?","What would your perfect spontaneous day look like?","What's something you've always wanted to try?","What's the most memorable trip you've ever taken?"]},
  {id:"know", name:"Getting to know you", cls:"c-know", sw:"var(--surface)", when:"First dates", desc:"Envelope 2 on every first date",
   qs:["What makes you feel appreciated by someone?","What qualities do you value most in a partner?","What does a really good relationship look like to you?","What's something people often misunderstand about you?","What's something you'd love to experience with a partner?"]},
  {id:"together", name:"How we work together", cls:"c-together", sw:"var(--linen)", when:"Day 2–3", desc:"Scenarios at breakfast and after challenges",
   qs:["You planned a romantic weekend and it rains. What do you do?","One free day, a small budget. How do you spend it?","Your partner wants adventure. You need rest. Now what?","If a trip doesn't go to plan, how do you react?","When you disagree, do you talk now or take time first?","What was harder today: explaining yourself or understanding someone?"]},
  {id:"circle", name:"Evening circle", cls:"c-circle", sw:"var(--claret)", when:"Every night", desc:"Host-led, around the table, only what you want to share",
   qs:["What surprised you most about today?","Did anyone surprise you in a good way?","What did you learn about someone you wouldn't have guessed?","Was there a moment you felt especially connected?","Did any of your expectations change today?","If you could repeat one moment from today, which one?"]},
  {id:"deep1", name:"Deep · Level I", cls:"c-deep", sw:"var(--oxblood)", when:"Long Table · Round 1", desc:"Inspired by Aron's 36 Questions, set I: easy, playful",
   qs:["Who, anywhere in the world, would you invite to dinner?","What would make today a perfect day for you?","If you could wake up tomorrow with one new skill, what would it be?","Would you like to be famous? For what?","What would your perfect weekend look like?"]},
  {id:"deep2", name:"Deep · Level II", cls:"c-deep", sw:"var(--oxblood)", when:"Long Table · Round 2", desc:"Set II: personal",
   qs:["What's a dream you've had for a long time but haven't acted on?","What does friendship mean to you?","What's a memory you'd like to keep forever?","What's the greatest accomplishment of your life so far?","How close are you with your family?"]},
  {id:"deep3", name:"Deep · Level III", cls:"c-deep", sw:"var(--oxblood)", when:"Long Table · Round 3", desc:"Set III: about the two of you",
   qs:["Name three things you think you two have in common.","What did you notice about me on day one?","What do you already like about the person opposite you?","What's something you'd only tell someone after a week like this?","What would you like to experience together, if this continued?"]}
];


const CREDITS = {"lis_vines": ["Évora IMG 6738 (21135870201).jpg", "Jean-Michel Brunet", "CC BY 2.0"], "lis_grapes": ["Dehydrated and bird damaged grapes in Portugal.jpg", "Filipe Fortes", "CC BY-SA 2.0"], "lis_beach": ["Comporta Beach - 04.tif", "Herdade da Comporta", "CC BY-SA 3.0"], "lis_sunset": ["Sunset by the river Tagus (36234333671).jpg", "Maria Eklind", "CC BY-SA 2.0"], "lis_tagus": ["Sunset in Lisbon (36542861635).jpg", "unknown.mmp from Lisbon, Portugal", "CC0"], "lis_evora": ["Évora - Praça do Giraldo.jpg", "Paolo Querci", "CC BY 3.0"], "lis_temple": ["Evora - Roman Temple - Backside.jpg", "Ingo Mehling", "CC BY-SA 4.0"], "lis_horses": ["Lusitano Pferd International 2011.JPG", "Usien", "CC BY-SA 3.0"], "rio_sugarloaf": ["Sugarloaf Sunrise 2.jpg", "Donatas Dabravolskas", "CC BY-SA 4.0"], "rio_bay": ["Last Sunlight on the Sugarloaf Mountain.jpg", "Donatas Dabravolskas", "CC BY-SA 4.0"], "rio_ipanema": ["1 ipanema beach vidigal sunset.jpg", "chensiyuan", "CC BY-SA 4.0"], "rio_beachlife": ["Ipanema Beach (4589735501).jpg", "Francisco Anzola", "CC BY 2.0"], "rio_santateresa": ["Street Scene - Santa Teresa District - Rio de Janeiro - Brazil.jpg", "Adam Jones, Ph.D.", "CC BY-SA 3.0"], "rio_islands": ["Ilha de Paquetá - Rio de Janeiro 01.jpg", "VinyNeto", "CC BY-SA 3.0"], "rio_arpoador": ["Pedra do Arpoador RJ 04.jpg", "Deniltonlima", "CC BY-SA 3.0"], "rio_sunset": ["Pedra do Arpoador RJ 03.jpg", "Deniltonlima", "CC BY-SA 3.0"], "bal_terraces": ["Rice terraces tegalaland (9).jpg", "Tavana", "CC BY-SA 3.0"], "bal_terraces2": ["Rice terraces in Tegallalang 1.jpg", "Christophe95", "CC BY-SA 4.0"], "bal_cliff": ["Cliff at Uluwatu temple, Bali.jpg", "Emma THERY", "CC BY-SA 4.0"], "bal_temple": ["Uluwatu Temple Cliff, Bali.jpg", "Ken Eckert", "CC BY-SA 4.0"], "bal_lembongan": ["Nusa Lembongan, Bali.jpg", "Shura from Amsterdam, Netherlands", "CC BY 2.0"], "bal_waterfall": ["Gitgit waterfalls in Bali; January 2015.jpg", "Juan Antonio F. Segal", "CC BY 2.0"], "bal_kecak": ["Kecak Dance Bali.jpg", "Dhani ilham", "CC BY-SA 4.0"], "bal_kecak2": ["Balinese dance in Ubud, Kecak, 20220822 1840 0182.jpg", "Jakub Hałun", "CC BY-SA 4.0"], "nai_jeeps": ["Maasai Mara, Kenya (47566656621).jpg", "Nina R from Africa", "CC BY 2.0"], "nai_balloon": ["Hot air ballon safari Maasai Mara National Reserve Kenya.jpg", "Svein-Magne Tunli", "CC BY-SA 4.0"], "nai_balloons": ["Maasai Mara National Reserve, Kenya (53337843878).jpg", "Nina R from Africa", "CC BY 2.0"], "nai_naivasha": ["Lake Naivasha Shoreline.jpg", "Kenenock", "CC BY-SA 4.0"], "nai_giraffe": ["Giraffe at Giraffe Centre Nairobi, Kenya.jpg", "GioRan", "CC BY-SA 4.0"], "nai_crossing": ["Wildebeest Jumping Into the Mara River.jpg", "Danijel Mihajlovic", "CC BY-SA 4.0"], "nai_acacia": ["Acacia tree at sunset, Maasai Mara, Kenya.jpg", "Daniel Case", "CC BY-SA 4.0"], "nai_sunrise": ["Masai Mara at Sunset.jpg", "Danijel Mihajlovic", "CC BY-SA 4.0"], "gen_toast": ["Offering a toast with sparkling wine flutes.jpg", "Fabrizio Sciami", "CC BY-SA 2.0"], "gen_sails": ["Traditional sailboat Croatia.jpg", "Ivan Matic", "CC BY-SA 2.0"], "gen_terrace": ["Kathmandu rooftops at sunset (8562532486).jpg", "calflier001", "CC BY-SA 2.0"], "gen_pool": ["Swimming Pool of Lembongan Cliff Villas - 2015.03 - panoramio.jpg", "rheins", "CC BY 3.0"], "gen_candles": ["Wigilia potrawy 554.jpg", "Przykuta", "CC BY-SA 3.0"], "gen_silhouettes": ["Sunset Agta Beach Resort - Biliran Philippines.jpg", "Leodb", "CC BY-SA 3.0"], "gen_pier": ["Tanjung Aru beach sunset view.jpg", "Cerevisae", "CC BY-SA 4.0"], "gen_lamp": ["A cozy rooftop table lit by a warm lamp, Pattaya.jpg", "PattayaPatrol", "CC BY-SA 4.0"]};
const META = {
  lisbon:{band:"#9AA67C", tan:"#DFC8B7", country:"Portugal", region:"Europe", tags:["wine","coast","city"],
    notice:"Vineyard Week is open for applications for May 2027.",
    hero:"lis_tagus", heroAlt:"Sunset over the Tagus in Lisbon",
    days:["lis_vines","lis_horses","gen_candles","lis_beach","lis_sunset","lis_tagus","gen_lamp","gen_toast"],
    tagline:"Slow among the vines, competitive in the kitchen, golden on the coast",
    copy:"Two nights on a wine estate in Azeitão, a villa in the Sintra hills, the beaches of Comporta and a last night above Lisbon. Sixteen members, one host and a week built for getting to know each other properly.",
    bullets:["16 members, 8 women and 8 men","7 nights across 4 stays","Five first-date adventures on day two","The Secret Recipe Challenge","Private feedback after every date","40 minutes from Lisbon airport"],
    pace:{h:"Five first dates", img:"lis_horses", alt:"Riders on Lusitano horses", p:"On day two, pairs are drawn and each heads out on a different date, lunch included. Afterwards everyone answers three private questions for the host.", list:"days.1.f.list"},
    story:{img:"lis_grapes", alt:"Ripe grapes on the vine", p1:"On day three the group moves to a private villa in the Sintra hills, and lunch becomes a game. Five pairs, one recipe, and nobody holds the whole picture.", ol:"days.2.f.ol"},
    exp:{a:["The Cards","gen_toast","A toast at dinner","Questions that get closer as the week goes on, from the welcome dinner to the last night.","#cards","How the cards work"], b:["Comporta","lis_beach","The long beach at Comporta","Two nights on the coast: rice fields, storks and beaches that go on for miles. Date Picks begin here.","#lisbon","The program","program"]},
    celeb:{a:["The Reveal","gen_lamp","A rooftop table at night","On the last night, private picks, romantic and friend. Only mutual matches are announced, on a rooftop over the river."], b:["First real date","lis_sunset","Sunset by the Tagus","Matched pairs get breakfast for two in a pastelaria on the last morning."]},
    summary:{Stays:["Wine estate in Azeitão, 2 nights","Private villa in the Sintra hills, 1 night","Beach house in Comporta, 2 nights","Boutique hotel in Lisbon, 2 nights"],Dining:["Dinner among the vines","Winery tour and tasting","Fado dinner in Alfama","Seafood in Comporta village"],Included:["Single room with own key","All transfers from Lisbon airport","Every date and activity","Your host and the card decks"],"The Group":["16 members, ages 26–38","8 women and 8 men","English or Russian season"],"Getting There":["Fly into Lisbon (LIS)","Pick-up on day 1 at 15:00","Drop-off on day 8 by noon"]}},
  rio:{band:"#9E483F", dark:true, country:"Brazil", region:"South America", tags:["coast","city"],
    notice:"Love Week departs in March 2027, after Carnival.",
    hero:"rio_sugarloaf", heroAlt:"Sugarloaf Mountain at sunrise",
    days:["rio_santateresa","rio_beachlife","rio_ipanema","rio_bay","rio_islands","rio_arpoador","rio_sunset","gen_toast"],
    tagline:"Beach sport, samba and a sunset reveal over Ipanema",
    copy:"A week from a villa in Santa Teresa: mixed teams on Ipanema, Sugarloaf by boat, a schooner day around the bay and the Reveal on an Arpoador rooftop at sunset.",
    bullets:["16 members, 8 women and 8 men","7 nights in one villa","Footvolley, surf and samba","Private schooner day","Two rounds of Date Picks","40 minutes from Rio airport"],
    pace:{h:"First dates in Rio", img:"rio_beachlife", alt:"Ipanema beach on a bright day", p:"Pairs split across a surf lesson, a Tijuca forest hike, hang-gliding at São Conrado or a cooking class. Three private questions for the host afterwards."},
    story:{img:"rio_islands", alt:"Paquetá island in Guanabara Bay", p1:"Day five is spent on a private schooner around the islands of Guanabara Bay. Swim, eat on deck, and that evening the second round of Date Picks begins.", p2:"Picks stay private. Anyone not picked gets a dinner arranged by the host. Nobody eats alone."},
    exp:{a:["The Cards","gen_toast","A toast at dinner","Questions that get closer as the week goes on, from the welcome dinner to the last night.","#cards","How the cards work"], b:["Ipanema","rio_ipanema","Ipanema at sunset","Footvolley in mixed teams with a coach, then the city's best sunset from the sand.","#rio","The program","program"]},
    celeb:{a:["The Reveal","rio_arpoador","Crowds watching sunset at Arpoador","Private picks, romantic and friend. Only mutual matches are announced, at sunset on an Arpoador rooftop."], b:["First real date","rio_sunset","Sun setting behind the Two Brothers","Matched pairs get breakfast for two on the last morning."]},
    summary:{Stays:["Boutique villa in Santa Teresa or Ipanema, 7 nights"],Dining:["Welcome dinner on a rooftop","Caipirinha masterclass","Eight Date Picks restaurants","Farewell party at Arpoador"],Included:["Single room with own key","All transfers","Every date and activity","Your host and the card decks"],"The Group":["16 members, ages 26–38","8 women and 8 men"],"Getting There":["Fly into Rio (GIG)","Check entry rules for your passport"]}},
  bali:{band:"#8590A3", country:"Indonesia", region:"Asia", tags:["coast","wellness"],
    notice:"Island Week is open for applications for June 2027.",
    hero:"bal_terraces", heroAlt:"Rice terraces at Tegallalang",
    days:["bal_terraces2","gen_candles","bal_waterfall","bal_cliff","bal_lembongan","gen_pool","bal_temple","gen_toast"],
    tagline:"Rice terraces first, cliff sunsets second",
    copy:"Three nights in a jungle villa in Ubud and four on the cliffs of Uluwatu. Waterfalls, a market challenge, manta rays off Lembongan and the Reveal on the cliff edge.",
    bullets:["16 members, 8 women and 8 men","7 nights across 2 villas","The Ubud Market Relay","Snorkel boat to Nusa Lembongan","Kecak fire dance at Uluwatu","90 minutes from Denpasar airport"],
    pace:{h:"First dates in Bali", img:"bal_waterfall", alt:"A waterfall in the Balinese jungle", p:"Pairs are drawn for rafting, a waterfall hike, a silver-jewellery class, the Tegallalang swing or a temple walk. Three private questions for the host afterwards."},
    story:{img:"bal_terraces2", alt:"Green rice terraces", p1:"Bali's version of the Secret Recipe Challenge happens at Ubud market. Five pairs, a Balinese chef and one lunch the whole group has to pull off together.", p2:"The debrief that evening is about how the team got there, never about who got it wrong."},
    exp:{a:["The Cards","bal_kecak2","Kecak dancers by firelight","Questions that get closer as the week goes on, from the welcome dinner to the last night.","#cards","How the cards work"], b:["Nusa Lembongan","bal_lembongan","Clear water off Nusa Lembongan","A speedboat day for snorkelling with manta rays and a beach lunch.","#bali","The program","program"]},
    celeb:{a:["The Reveal","bal_kecak","The Kecak fire circle at sunset","Private picks, romantic and friend. Only mutual matches are announced, on the cliff edge at sunset."], b:["First real date","bal_cliff","The cliffs of Uluwatu","Matched pairs get breakfast for two on the last morning."]},
    summary:{Stays:["Jungle villa in Ubud, 3 nights","Cliff villa in Uluwatu, 4 nights"],Dining:["Dinner in the rice fields","Market Relay lunch","Jimbaran beach seafood"],Included:["Single room with own key","All transfers","Every date and activity","Your host and the card decks"],"The Group":["16 members, ages 26–38","8 women and 8 men"],"Getting There":["Fly into Denpasar (DPS)","Check visa rules for your passport"]}},
  nairobi:{band:"#DFC8B7", country:"Kenya", region:"Africa", tags:["wild"],
    notice:"Safari Week departs in September 2027, during migration season.",
    hero:"nai_balloon", heroAlt:"A hot-air balloon over the Maasai Mara",
    days:["nai_giraffe","nai_jeeps","nai_sunrise","nai_balloons","nai_crossing","nai_naivasha","nai_acacia","gen_toast"],
    tagline:"Shared jeeps, a dawn balloon and fireside dinners",
    copy:"A night in Nairobi, three in a tented camp in the Maasai Mara for migration season, and two by Lake Naivasha. Small camps, early mornings and nowhere to hide from a good conversation.",
    bullets:["12–16 members","7 nights across 3 stays","Light aircraft into the Mara","Hot-air balloon at dawn","Bush dinners for two","Migration crossings on the Mara River"],
    pace:{h:"First dates on safari", img:"nai_jeeps", alt:"Safari vehicles on the Mara plains", p:"In the Mara the jeep is the date. Pairs head out at dawn with a guide, then answer three private questions for the host. Pairs change at every drive until day five."},
    story:{img:"nai_balloons", alt:"Two balloons over the grasslands", p1:"On day four the group rises over the plains in a hot-air balloon at dawn, then lands for a bush breakfast.", p2:"In the afternoon the Camp Kitchen Challenge puts the recipe game on an open fire with the camp chefs."},
    exp:{a:["The Cards","gen_candles","Dinner by candlelight","Questions that get closer as the week goes on, from the welcome dinner to the last night.","#cards","How the cards work"], b:["The Mara River","nai_crossing","Wildebeest crossing the Mara River","A full day at the river for the migration crossings, with a picnic.","#nairobi","The program","program"]},
    celeb:{a:["The Reveal","nai_acacia","An acacia against the setting sun","Private picks, romantic and friend. Only mutual matches are announced, at a lakeside sundowner."], b:["First real date","nai_sunrise","Sunset over the Mara","Matched pairs get breakfast for two before the road back to Nairobi."]},
    summary:{Stays:["Garden hotel in Karen, Nairobi, 1 night","Tented camp in the Maasai Mara, 4 nights","Lodge on Lake Naivasha, 2 nights"],Dining:["Bush breakfast after the balloon","Bush dinners for two","Fireside camp dinners"],Included:["Single tent or room","Light-aircraft flights","Park fees and game drives","Your host and the card decks"],"The Group":["12–16 members, ages 28–40"],"Getting There":["Fly into Nairobi (NBO)","Kenya eTA required"]}}
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
    sub.innerHTML = `<span class="pn"><span>${esc(t.city)}</span></span><span class="links"><a href="#${view}" data-jump="program">The Program</a><a href="#${view}" data-jump="dates">First Dates</a><a href="#${view}" data-jump="story">The Challenge</a><a href="#${view}" data-jump="scene">The Cards</a><a href="#${view}" data-jump="reveal">The Reveal</a><a href="#${view}" data-jump="summary">The Trip</a><a href="#dates-${view}">Dates &amp; Prices</a><a href="#apply-${view}">Apply</a></span>`;
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
    ${ph("rio_sunset","Sun setting over the beach at Arpoador, Rio de Janeiro", "", true)}
    <div class="mark">Tringles</div>
    <button class="pill white" type="button" data-finder="1">Destinations <span aria-hidden="true">⌃</span></button>
  </section>
  <section class="welcome"><div class="g"><div class="t"><h1>Welcome to Tringles</h1><p>Skip the first date and take the trip. Seven-night journeys for sixteen singles, with a host, a deck of cards and some of the most romantic places on earth.</p></div></div></section>
  <section class="bigband" aria-label="Skip the first date">
    ${ph("rio_bay","Last light on Sugarloaf Mountain, Rio de Janeiro")}
    <div class="words"><div class="top"><span class="h">Skip the first date,</span></div><div class="bot"><span class="h">Take the trip.</span><a class="tag-link on-photo" href="#how">Explore ${ext}</a></div></div>
  </section>
  <section class="world"><div class="wrap">
    <h2>Explore Our World</h2>
    <div class="rail" id="railWorld">
      ${ORDER.map(k => `<a class="wcard" href="#${k}">${ph(META[k].hero, META[k].heroAlt, "r")}<h3>${esc(TRIPS[k].city)}</h3></a>`).join("")}
      <a class="wcard" href="#cards">${ph("gen_toast","A toast at dinner","r")}<h3>The Cards</h3></a>
      <a class="wcard" href="#journal">${ph("gen_sails","Under sail","r")}<h3>Journal</h3></a>
    </div>
    <div class="arrows"><button type="button" data-rail="railWorld" data-d="-1" aria-label="Previous">‹</button><button type="button" data-rail="railWorld" data-d="1" aria-label="Next">›</button></div>
  </div></section>
  ${homeCards()}
  <section class="bigband" aria-label="The Reveal">
    ${ph("gen_pier","People on a pier at sunset")}
    <div class="words"><div class="top"><span class="eyebrow">The Reveal</span><span class="h">Turn one week away</span></div><div class="bot"><span class="h">into a love story</span><a class="tag-link on-photo" href="#how">Explore ${ext}</a></div></div>
  </section>`;
}
function wireHome(){}

/* ---------- finder dialog ---------- */
let fstate = {f:"all", q:"", open:{}};
const FTABS = [["all","All"],["coast","Coast"],["wine","Wine"],["wild","Wild"],["city","City"],["wellness","Wellness"]];
function renderFinder(){
  $("#ftabs").innerHTML = FTABS.map(([v,l])=>`<button type="button" data-f="${v}" aria-pressed="${fstate.f===v}">${l}</button>`).join("");
  const q = fstate.q.toLowerCase();
  const keys = ORDER.filter(k => (fstate.f==="all" || META[k].tags.includes(fstate.f)) && (!q || [TRIPS[k].city,TRIPS[k].name,META[k].country,META[k].region].join(" ").toLowerCase().includes(q)));
  const regions = [...new Set(keys.map(k=>META[k].region))];
  $("#flist").innerHTML = regions.length ? regions.map((r,i) => { const open = fstate.open[r] !== false; return `
    <div class="fgroup"><button type="button" data-r="${esc(r)}" aria-expanded="${open}"><span class="n">${String(i+1).padStart(2,"0")}</span><span class="g2">${esc(r)}</span><span aria-hidden="true">${open?"−":"+"}</span></button>
    ${open ? keys.filter(k=>META[k].region===r).map(k => `<a class="frow" href="#${k}">${ph(META[k].hero, META[k].heroAlt)}<span><strong>${esc(TRIPS[k].city)}</strong><small>${esc(TRIPS[k].name)} · ${esc(META[k].country)}</small></span><span class="tag">${TRIPS[k].nights} nights · From ${TRIPS[k].price}</span></a>`).join("") : ""}</div>`; }).join("")
    : `<p class="fempty">No trips match that yet.</p>`;
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
    <article class="dcard">${ph(m.days[(i+1) % m.days.length], d.t, "r")}<p class="card-name">Day ${i+2} · ${esc(d.t)}</p>${kv(d, i+1)}</article>`).join("");
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
    <p class="eyebrow bl">The Program</p>
    <div class="bt"><h2>Seven nights, day by day</h2><p>${esc(t.intro)}</p><a class="tag-link" href="#dates-${k}">Dates &amp; Prices ${ext}</a></div>
    <article class="feat">${ph(m.days[0], d0.t, "r")}<p class="card-name">Day 1 · ${esc(d0.t)}</p>${kv(d0, 0)}</article>
  </div></section>
  <section class="drail-wrap"><div class="wrap">
    <div class="drail" id="drail">${rest}</div>
    <div class="arrows"><button type="button" data-rail="drail" data-d="-1" aria-label="Previous day">‹</button><button type="button" data-rail="drail" data-d="1" aria-label="Next day">›</button></div>
  </div></section>
  ${sceneSection(k)}
  <section class="pace" id="dates"><div class="g">
    <h2>${esc(m.pace.h)}</h2>
    ${ph(m.pace.img, m.pace.alt)}
    <div class="txt"><p>${esc(m.pace.p)}</p>${featList?`<ol>${featList.map(x=>`<li>${esc(x)}</li>`).join("")}</ol>`:""}<a class="tag-link light" href="#cards">The private feedback questions ${ext}</a></div>
  </div></section>
  <section class="storyb" id="story"><div class="g">
    ${ph(m.story.img, m.story.alt)}
    <div class="txt"><p>${esc(m.story.p1)}</p>${storyOl?`<ol>${storyOl.map(x=>`<li>${esc(x)}</li>`).join("")}</ol>`:""}${m.story.p2?`<p>${esc(m.story.p2)}</p>`:""}<a class="tag-link light" href="#how">How the week works ${ext}</a></div>
  </div></section>
  <section class="expw" id="more"><div class="g">
    ${[["c1",m.exp.a],["c2",m.exp.b]].map(([c,e])=>`<div class="${c}"><h2>${esc(e[0])}</h2>${ph(e[1], e[2])}<p>${esc(e[3])}</p><a class="tag-link light" href="${e[4]}"${e[6]?` data-jump="${e[6]}"`:""}>${esc(e[5])} ${ext}</a></div>`).join("")}
  </div></section>
  <section class="celeb" id="reveal"><div class="g">
    <div class="t"><h2>The last night</h2><p>Picks stay private and nobody is sent home. The week ends with the Reveal and, for matched pairs, a first real date.</p><a class="tag-link" href="#how">How it works ${ext}</a></div>
    <div class="a"><h3>${esc(m.celeb.a[0])}</h3>${ph(m.celeb.a[1], m.celeb.a[2])}<p>${esc(m.celeb.a[3])}</p></div>
    <div class="b"><h3>${esc(m.celeb.b[0])}</h3>${ph(m.celeb.b[1], m.celeb.b[2])}<p>${esc(m.celeb.b[3])}</p></div>
  </div></section>
  <section class="facts" id="summary"><div class="g">
    <h2>The Trip</h2>
    <div class="rows">
      <div class="frow2"><h3>Price</h3><ul class="dash"><li>From ${t.price} per person</li><li>Land only, single room</li><li>€500 deposit holds your seat</li></ul></div>
      ${Object.entries(m.summary).map(([h,list])=>`<div class="frow2"><h3>${esc(h)}</h3><ul class="dash">${list.map(x=>`<li>${esc(x)}</li>`).join("")}</ul></div>`).join("")}
      <div class="frow2"><h3>Apply</h3><div><a class="pill outline" href="#apply-${k}">Apply for ${esc(t.city)}</a></div></div>
    </div>
  </div></section>`;
}
function wireTrip(){}

/* ---------- HOW IT WORKS ---------- */
function how(){
  return `
  <section class="ptitle"><div class="wrap in"><span class="mono">The Club</span><h1>How It Works</h1><p>Seven nights, sixteen members, three acts</p></div></section>
  <section class="pmedia"><div class="wrap">${ph("gen_sails","A traditional sailboat under sail")}</div></section>
  <section class="intro"><div class="g">
    <div class="l"><h2>A dating show without the cruelty</h2><p>Each trip runs as a season in three acts, with a host who sets the pace. Days 1 to 3 are for mixing, days 4 and 5 for choosing, and days 6 and 7 end in the Reveal.</p></div>
    <ul class="dash r"><li>Nobody gets sent home</li><li>Pass on any card, game or date</li><li>Private feedback after every date</li><li>Picks stay private, only mutual matches are revealed</li><li>Matched pairs get a first real date on the last morning</li></ul>
  </div></section>
  <section class="storyb"><div class="g">
    ${ph("gen_lamp","A table for two after dark")}
    <div class="txt"><p>Mix. A welcome dinner, introduction cards and a team challenge. Random pairs for every activity, so nobody settles into a clique.</p><p>Choose. First dates on horseback, boats and buggies, then Date Picks: you choose who to have dinner with. Anyone not picked gets a dinner arranged by the host.</p><p>Commit. Free time with whoever you like, private picks, and the Reveal at sunset.</p><a class="tag-link light" href="#cards">The Cards ${ext}</a></div>
  </div></section>
  ${cardsHow()}
  <section class="facts" id="safety"><div class="g">
    <h2>Safety &amp; Conduct</h2>
    <div class="rows">
      <div class="frow2"><h3>Before you go</h3><ul class="dash"><li>Application and a call with your host</li><li>ID check</li><li>Signed code of conduct</li></ul></div>
      <div class="frow2"><h3>On the trip</h3><ul class="dash"><li>Single room with own key</li><li>A trained host with authority to remove anyone</li><li>No game involves alcohol</li><li>Licensed transfers after nights out</li></ul></div>
      <div class="frow2"><h3>Cameras</h3><ul class="dash"><li>Only on seasons marked as filmed</li><li>Only with a signed release</li><li>Never on private dates</li></ul></div>
      <div class="frow2"><h3>Read more</h3><div><a class="tag-link light" href="#conduct">Code of Conduct ${ext}</a></div></div>
    </div>
  </div></section>`;
}

/* ---------- IMAGE CREDITS ---------- */
function credits(){
  const items = Object.entries(CREDITS).map(([k,[t,a,l]]) => `<li><a href="https://commons.wikimedia.org/wiki/File:${encodeURIComponent(t.replace(/ /g,"_"))}" target="_blank" rel="noopener">${esc(t.replace(/\.(jpe?g|tif|JPG)$/,""))}</a> · ${esc(a)} · ${esc(l)}</li>`).join("");
  return `<section class="ptitle"><div class="wrap in"><span class="mono">Legal</span><h1>Image Credits</h1><p>All photographs from Wikimedia Commons, used under their licences</p></div></section>
  <section class="summary"><div class="wrap"><ul class="credits">${items}</ul><p class="note">Photographs are resized and cropped. Licences: CC0, CC BY and CC BY-SA (versions as listed). People shown are not Tringles members.</p></div></section>`;
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
  today:["Today","Morning","The sealed envelope from your host: the day's pairing, a small mission, what to bring."],
  spark:["Spark","During the day","Pocket cards for the boat, the hike or the drive. Optional, and every one can be passed."],
  table:["Table","Dinner","One question or game per table. Seats rotate every night."],
  private:["Private","Late evening","Three questions for the host only. The answers shape tomorrow's pairs."],
  deep:["Deep","One evening","The Long Table. Inspired by Arthur Aron's 36 Questions, once, on one evening."],
  power:["Power","When choosing","One use each, during the Choose days. Your host handles the awkward part."]
};
const KORDER = ["today","spark","table","private","deep","power"];
const PRIV_B = "Did you feel comfortable with this person? What did you enjoy most? Would you like more time with them?";
const PRIV_N = "Only your host reads these. Nobody sees your answers.";
const DEEP_N = "Inspired by Arthur Aron's 36 Questions. You can pass on any question, and on the eye contact.";

const CARDS = {
  lisbon:[
    {id:"lis-t1",k:"today",d:2,t:"Shoes you can get dirty",b:"Your date for the day is on the back of this card. Five dates run at once and nobody knows who got which until the cars leave. House rule until lunch: no talking about work."},
    {id:"lis-t2",k:"today",d:3,t:"You only hold one piece",b:"Lunch is a team game, and your role is on the back: Recipe holder, List maker, Shopper, Budget keeper or Cook. Show nobody. The kitchen opens at noon."},
    {id:"lis-s1",k:"spark",d:2,t:"The question you'd dodge",b:"On your date, ask the question you'd least like to be asked yourself. Then answer it first."},
    {id:"lis-s2",k:"spark",d:3,t:"Tiles and tales",b:"On the way into Alfama, find an azulejo panel you both like. Each of you invents the story it tells in two sentences. Pick a winner. The loser chooses tomorrow's playlist."},
    {id:"lis-s3",k:"spark",d:6,t:"Tram 28",b:"Neither of you may choose the next stop. Flip a coin at every corner: heads, you decide; tails, your partner does. Whoever loses the last flip buys the pastéis de nata."},
    {id:"lis-tb1",k:"table",d:1,t:"The long table",b:"Say your name, one thing you're looking forward to this week and one thing you're nervous about. Your host goes first, then it moves to the left."},
    {id:"lis-tb2",k:"table",d:4,t:"Swap a question",b:"Before the starters arrive, write one question you've never asked a stranger. Trade it with your dinner partner. Answer theirs, or pass on yours."},
    {id:"lis-tb3",k:"table",d:7,t:"One thing to take home",b:"Around the farewell table, each person names one thing they're taking home from this week. It can be a person, a place or a dish."},
    {id:"lis-pv",k:"private",d:2,t:"Three questions",b:PRIV_B,n:PRIV_N},
    {id:"lis-dp",k:"deep",d:5,t:"The Long Table",b:"After the Date Picks dinner the house goes quiet. Three rounds of fifteen minutes, a candle on every table and a new partner each round. Round one is easy and playful, round two gets personal, round three is about the two of you. If you both want to, finish with four minutes of eye contact and no talking.",n:DEEP_N},
    {id:"lis-pw",k:"power",d:4,t:"Swap",b:"Once this week, ask your host to move you into a different pair for the next activity. Use it quietly. Nobody is told who used it."}
  ],
  rio:[
    {id:"rio-t1",k:"today",d:2,t:"Teams are on the back",b:"Today starts on the sand: footvolley in mixed teams with a coach who shows no mercy. Sunscreen first. Whoever drops the ball chooses the music at lunch."},
    {id:"rio-t2",k:"today",d:3,t:"Drawn, not chosen",b:"A surf lesson, a forest hike, a hang-glider or a cooking class. You find out on the way, and your date is on the back. Say yes to the first thing, then tell your host what you'd do again."},
    {id:"rio-s1",k:"spark",d:2,t:"Teach me a step",b:"Teach your partner one dance move from where you grew up. They teach you one back. Samba class tonight will show who practised."},
    {id:"rio-s2",k:"spark",d:4,t:"Cable car, no phones",b:"Both phones go in one pocket for the ride up Sugarloaf. First one to reach for it owes the other a coconut."},
    {id:"rio-s3",k:"spark",d:6,t:"Menu for two",b:"Each of you secretly ranks three outings from the pre-booked menu. Reveal at the same time. The first overlap wins, and if there's none, flip a coin."},
    {id:"rio-tb1",k:"table",d:1,t:"Rooftop welcome",b:"Say your name and the most spontaneous thing you've ever done. The group votes on the best one by applause. The winner picks the first song."},
    {id:"rio-tb2",k:"table",d:4,t:"Souvenir story",b:"Tell your dinner partner the story behind one object you own and would save from a fire. Then listen to theirs without topping it."},
    {id:"rio-tb3",k:"table",d:7,t:"One thing to take home",b:"At the Arpoador party, each person names one thing they're taking home from this week. A person, a place or a caipirinha all count."},
    {id:"rio-pv",k:"private",d:3,t:"Three questions",b:PRIV_B,n:PRIV_N},
    {id:"rio-dp",k:"deep",d:5,t:"The Long Table",b:"After the second round of Date Picks the villa goes quiet. Three rounds of fifteen minutes, a candle on every table and a new partner each round. Round one is easy and playful, round two gets personal, round three is about the two of you. If you both want to, finish with four minutes of eye contact and no talking.",n:DEEP_N},
    {id:"rio-pw",k:"power",d:4,t:"Change tables",b:"Once this week, ask your host to put you at a different table for tonight's Date Picks. The host handles the awkward part, and your original pair gets the host's company."}
  ],
  bali:[
    {id:"bal-t1",k:"today",d:2,t:"Bicycles downhill",b:"Ride down through the rice terraces with your pair. Whoever reaches the market first chooses the first ingredient. Brake early."},
    {id:"bal-t2",k:"today",d:3,t:"Five dates, one jungle",b:"Rafting, a waterfall, silver-making, the swing or a temple walk. Your date and your plan are on the back. Don't peek at anyone else's card, and bring a layer."},
    {id:"bal-s1",k:"spark",d:3,t:"Caption it",b:"At the swing, your date takes the photo and you write the caption. It has to be true."},
    {id:"bal-s2",k:"spark",d:3,t:"Under the water",b:"At the waterfall, each of you says one thing you're letting go of this year. Out loud, over the noise, no repeats."},
    {id:"bal-s3",k:"spark",d:6,t:"Scooter rule",b:"On a scooter ride with a driver, the passenger chooses the destination and the driver chooses the snack."},
    {id:"bal-tb1",k:"table",d:1,t:"Dinner in the rice fields",b:"If you had a do-not-disturb sign for this week, what would it say? Write it on the card, then read it out. Others guess who wrote what."},
    {id:"bal-tb2",k:"table",d:4,t:"One sound",b:"Kecak is a hundred voices and no instruments. At dinner, each person makes one sound that describes their week so far. The table guesses."},
    {id:"bal-tb3",k:"table",d:7,t:"One thing to take home",b:"At the seafood dinner on Jimbaran beach, each person names one thing they're taking home from this week."},
    {id:"bal-pv",k:"private",d:3,t:"Three questions",b:PRIV_B,n:PRIV_N},
    {id:"bal-dp",k:"deep",d:5,t:"The Long Table",b:"After the second round of Date Picks the cliff villa goes quiet. Three rounds of fifteen minutes, a candle on every table and a new partner each round. Round one is easy and playful, round two gets personal, round three is about the two of you. If you both want to, finish with four minutes of eye contact and no talking.",n:DEEP_N},
    {id:"bal-pw",k:"power",d:4,t:"Swap",b:"Once this week, ask your host to move you into a different pair for the next activity. Use it quietly. Nobody is told who used it."}
  ],
  nairobi:[
    {id:"nai-t1",k:"today",d:2,t:"Four to a jeep",b:"Your first game drive, in mixed groups of four. Each of you is responsible for spotting one thing: an animal, a bird, a track or a sound. Whoever finds nothing tells the best lie about it."},
    {id:"nai-t2",k:"today",d:4,t:"Up before the sun",b:"The balloon lifts at dawn. Hold hands in the basket only if you want to, but hold your hat either way. Breakfast is waiting where you land."},
    {id:"nai-s1",k:"spark",d:3,t:"The 4×4 is the date",b:"A jeep is a small room. For the first twenty minutes, you may only ask each other questions that start with 'what' or 'when'. Go."},
    {id:"nai-s2",k:"spark",d:1,t:"Giraffe Centre",b:"Feed a giraffe together. Then each say what you'd do this year if you weren't afraid of looking silly."},
    {id:"nai-s3",k:"spark",d:6,t:"Pick the animal",b:"Name the animal the person next to you would be, and explain why. It has to be kind, and it has to be accurate."},
    {id:"nai-tb1",k:"table",d:1,t:"Under the trees",b:"At the welcome dinner, say your name and the best thing you've ever eaten. Your host goes first, and has to defend a choice."},
    {id:"nai-tb2",k:"table",d:4,t:"Bush dinner for two",b:"Date Picks, round one. Swap one rule you live by with your partner, and one you broke recently. Fire stays lit, phones stay away."},
    {id:"nai-tb3",k:"table",d:7,t:"One thing to take home",b:"At the lakeside farewell dinner, each person names one thing they're taking home from this week."},
    {id:"nai-pv",k:"private",d:3,t:"Three questions",b:PRIV_B,n:PRIV_N},
    {id:"nai-dp",k:"deep",d:5,t:"The Long Table",b:"After the second round of Date Picks the camp goes quiet. Three rounds of fifteen minutes by the fire, a lantern on every table and a new partner each round. Round one is easy and playful, round two gets personal, round three is about the two of you. If you both want to, finish with four minutes of eye contact and no talking.",n:DEEP_N},
    {id:"nai-pw",k:"power",d:4,t:"Swap a drive",b:"Once this week, ask your host to put you in a different jeep for the next drive. Use it quietly. Nobody is told who used it."}
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
  lisbon:"Animated illustration of Lisbon: Tram 28 on the quay below Alfama, a river bridge, a tiled azulejo wall and a lantern.",
  rio:"Animated illustration of Rio: Sugarloaf with a cable car, Ipanema waves and a footvolley net, a rooftop with string lights.",
  bali:"Animated illustration of Bali: rice terraces, a split temple gate with a lantern, a swing, a waterfall and swaying palms.",
  nairobi:"Animated illustration of the Maasai Mara: a hot-air balloon, an acacia, a giraffe, a safari jeep and a campfire."
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
    return `<div class="mrow"><div class="mh"><h3>${KIND[kind][0]}</h3><p>${KIND[kind][1]}</p></div><div class="mc">${cs.map(c => `<button type="button" class="tag-link light chip${SEEN.has(c.id)?" seen":""}" data-card="${c.id}"><b>Day ${c.d}</b> ${esc(c.t)}</button>`).join("")}</div></div>`; }).join("");
}
function sceneSection(k){
  return `<section class="scene" id="scene"><div class="g">
    <div class="sh"><span class="eyebrow">The Cards</span><h2>Open a card</h2></div>
    <div class="sp"><p>Your host hands out cards through the week, and every card belongs to a moment of the day. Tap a marker in the picture to open one, or pick from the list. Every card can be passed.</p></div>
    <div class="sf">${scene(k)}</div>
    <div class="sm">${moments(k)}</div>
  </div></section>`;
}
function dayCards(k, di){
  const cs = CARDS[k].filter(c => c.d===di+1); if (!cs.length) return "";
  return `<dt>Cards:</dt><dd class="cl">${cs.map(c => `<button type="button" class="cl-b" data-card="${c.id}" title="${esc(KIND[c.k][1])}: ${esc(c.t)}">${KIND[c.k][0]}</button>`).join("")}</dd>`;
}

/* ---------- homepage example: different cities, different cards ---------- */
let homeCity = "lisbon";
function homeGrid(k){
  const first = CARD_BY_ID[HS[k][0][0]].card, t = TRIPS[k];
  const lines = ["today","spark","table","private"].map(kind => { const c = CARDS[k].find(x => x.k===kind); return `<li><button type="button" data-card="${c.id}"><b>${KIND[kind][0]}</b><span>${KIND[kind][1]}</span><em>${esc(c.t)}</em></button></li>`; }).join("");
  return `<div class="cscene">${scene(k)}</div>
  <div class="cface"><div class="cf-card" style="--b:${META[k].band}"><span class="cf-k">${KIND[first.k][0]} · Day ${first.d} · ${t.city}</span><h3>${esc(first.t)}</h3><p>${esc(first.b)}</p><div class="cf-a"><button class="pill dark" type="button" data-card="${first.id}">Open this card</button><a class="tag-link light" href="#${k}">See ${esc(t.city)} ${ext}</a></div></div>
  <ul class="cf-l" aria-label="Moments of the day">${lines}</ul></div>`;
}
function homeCards(){
  return `<section class="cshow" id="cshow"><div class="wrap">
    <h2>A card for every city</h2>
    <p class="lead">Each trip has its own cards, opened at different moments of the day. Pick a city, then tap a marker in the picture.</p>
    <div class="ctabs" id="ctabs">${ORDER.map(k => `<button type="button" data-ctab="${k}" aria-pressed="${k===homeCity}">${esc(TRIPS[k].city)}</button>`).join("")}</div>
    <div class="cgrid" id="cgrid">${homeGrid(homeCity)}</div>
  </div></section>`;
}

/* ---------- card dialog: sealed envelope, then an unfolding card ---------- */
document.body.insertAdjacentHTML("beforeend", `<div class="cdlg" id="cdlg" hidden role="dialog" aria-modal="true" aria-labelledby="cdT">
  <button class="cd-x" type="button" id="cdX" aria-label="Close card">✕</button>
  <div class="cd-in" id="cdIn">
    <div class="stage">
      <button class="env" type="button" id="cdEnv" aria-label="Open the sealed card"><span class="eback"></span><span class="epocket"></span><span class="eflap"></span><span class="eseal">T</span><span class="elbl" id="cdLbl"></span></button>
      <article class="cardf" id="cdCard"><span class="cd-k" id="cdK"></span><h3 id="cdT"></h3><p class="cd-b" id="cdB"></p><p class="cd-n" id="cdN"></p><div class="cd-a"><button class="pill outline" type="button" id="cdPass">Pass</button><button class="pill dark" type="button" id="cdKeep">Keep it</button></div><p class="cd-f" id="cdF">Every card can be passed.</p></article>
    </div>
    <p class="hint" id="cdHint">Tap the envelope to open</p>
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
  cdEl("cdLbl").textContent = `${kl[0]} · Day ${c.d} · ${TRIPS[city].city}`;
  cdEl("cdK").textContent = `${kl[0]} · ${kl[1]} · Day ${c.d}`;
  cdEl("cdT").textContent = c.t; cdEl("cdB").textContent = c.b;
  const n = cdEl("cdN"); n.textContent = c.n || ""; n.hidden = !c.n;
  cdEl("cdPass").disabled = false; cdEl("cdKeep").disabled = false; cdEl("cdF").textContent = "Every card can be passed.";
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
  cdEl("cdB").textContent = "Passed. Nobody asks why."; cdEl("cdN").hidden = true; cdEl("cdF").textContent = "Every card can be passed.";
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
    <h2>The Cards</h2>
    <div class="rows">
      <div class="frow2"><h3>The idea</h3><div><p>Cards are how your host runs the week without a rigid schedule. They arrive at set moments of the day, they tell you what to do with whoever you're next to, and every one can be passed.</p></div></div>
      ${["today","spark","table","private"].map(kind => `<div class="frow2"><h3>${KIND[kind][0]}</h3><div><p><strong>${KIND[kind][1]}.</strong> ${KIND[kind][2]}</p></div></div>`).join("")}
      <div class="frow2"><h3>The Long Table</h3><div><p>One evening, usually the fifth, after the second round of Date Picks. Three rounds of fifteen minutes with a new partner each time, built from Arthur Aron's 36 Questions. Round one is easy and playful, round two gets personal, round three is about the two of you. If you both want to, you finish with four minutes of eye contact and no talking.</p></div></div>
      ${[["Round 1","deep1"],["Round 2","deep2"],["Round 3","deep3"]].map(([n,id]) => `<div class="frow2"><h3>${n}</h3><ul class="dash">${lvl(id).map(q => `<li>${esc(q)}</li>`).join("")}</ul></div>`).join("")}
      <div class="frow2"><h3>Power cards</h3><div><p>During the Choose days, each member holds four cards, one use each: <strong>Swap</strong> (move to a different pair), <strong>Change tables</strong> (a different dinner seat), <strong>Veto</strong> (decline a pairing, no reason needed) and <strong>Double date</strong> (bring a friend along). Your host handles the awkward part, and nobody is told who used what.</p></div></div>
      <div class="frow2"><h3>See them</h3><div><a class="tag-link light" href="#lisbon-scene">Open a Lisbon card ${ext}</a> <a class="tag-link light" href="#rio-scene">Rio ${ext}</a> <a class="tag-link light" href="#bali-scene">Bali ${ext}</a> <a class="tag-link light" href="#nairobi-scene">Nairobi ${ext}</a></div></div>
    </div>
  </div></section>`;
}

/* ---------- shared page helpers ---------- */
const pageTitle = (eyebrow, h1, sub) => `<section class="ptitle"><div class="wrap in"><span class="mono">${esc(eyebrow)}</span><h1>${esc(h1)}</h1>${sub?`<p>${esc(sub)}</p>`:""}</div></section>`;
const INCLUDED = ["Single room with your own key, every night","All ground transfers from arrival to departure","Every date, activity and challenge in the program","Most meals, as listed in each program","Your host for the whole week","The Tringles card decks"];
const NOT_INCLUDED = ["International flights","Travel insurance (required)","Visas or entry fees where needed","Drinks outside included meals","Personal spending"];
const SEATS = {lisbon:"8 + 8", rio:"8 + 8", bali:"8 + 8", nairobi:"6–8 + 6–8"};
const NIGHTS = {lisbon:"Sat 15 – Sat 22 May 2027", rio:"Sat 13 – Sat 20 Mar 2027", bali:"Sat 12 – Sat 19 Jun 2027", nairobi:"Sat 11 – Sat 18 Sep 2027"};

/* ---------- DATES & PRICES ---------- */
function dates(){
  return pageTitle("Season one","Dates & Prices","Indicative prices per person, land only, single room") + `
  <section class="summary"><div class="wrap">
    <div class="ptable" role="table" aria-label="Season one dates and prices">
      <div class="prow phead" role="row"><span role="columnheader">Trip</span><span role="columnheader">Dates</span><span role="columnheader">Nights</span><span role="columnheader">Seats per list</span><span role="columnheader">From</span><span role="columnheader"></span></div>
      ${ORDER.map(k=>`<div class="prow" role="row" id="row-${k}">
        <span role="cell"><a href="#${k}" class="pname">${esc(TRIPS[k].city)}</a><small>${esc(TRIPS[k].name)}</small></span>
        <span role="cell">${esc(NIGHTS[k])}</span>
        <span role="cell">${TRIPS[k].nights}</span>
        <span role="cell">${esc(SEATS[k])}</span>
        <span role="cell" class="pp">From ${TRIPS[k].price}</span>
        <span role="cell"><a class="tag-link" href="#apply-${k}">Apply</a></span>
      </div>`).join("")}
    </div>
    <p class="note">Exact dates are provisional until each season opens. A €500 deposit holds your seat once your application is accepted; the balance is due 60 days before departure.</p>
    <div class="sgrid" style="margin-top:56px">
      <div><h3>Included</h3><ul class="dash">${INCLUDED.map(x=>`<li>${esc(x)}</li>`).join("")}</ul></div>
      <div><h3>Not included</h3><ul class="dash">${NOT_INCLUDED.map(x=>`<li>${esc(x)}</li>`).join("")}</ul></div>
      <div><h3>Deposit &amp; payment</h3><ul class="dash"><li>€500 deposit after acceptance</li><li>Balance due 60 days before departure</li><li>Payment by secure link, never through this site</li></ul></div>
    </div>
  </div></section>`;
}

/* ---------- FAQ ---------- */
const FAQS = [
  ["Who are the trips for?","Single people roughly 26 to 38 (28 to 40 for Nairobi) who would rather meet someone over a kayak than a chat window. Every cohort holds an 8/8 balance, so women and men apply on separate lists."],
  ["Do I have to be looking for romance?","No. Many members come for the trip and the people. At the Reveal you pick romantic and friend connections, so the week ends with people to see again either way."],
  ["What if I don't match with anyone?","Picks are private and only mutual matches are announced, so nobody hears a no. Most members leave with new friends and a story, and many with plans to meet again."],
  ["Will I be paired with someone I don't like?","Early pairs are random and change every activity. After each date you give the host private feedback, and they use it to shape the next pairings. You can pass on any card, game or date."],
  ["Which language is the trip in?","Each season runs in English or Russian, and the trip page says which. Hosts speak both for season one."],
  ["Are flights included?","No. Prices cover the land program: rooms, transfers, most meals, every activity, your host and the card decks. We'll suggest arrival and departure times."],
  ["Is it filmed?","Only flagship seasons, clearly marked in advance. Filming needs your signed release, and private dates, rooms and your picks are never filmed. You can say no and still come."],
  ["How do you keep people safe?","Every applicant has a call with a host and an ID check, and signs the code of conduct. Rooms are single with your own key, a trained host travels with every group and can remove anyone, and licensed transfers take you home after every night out."],
  ["Can I come with a friend?","Yes, apply separately and mention each other in your application. You'll be in different pairs for activities, which is half the fun."],
  ["What is the cancellation policy?","The €500 deposit is refundable for 14 days after acceptance. After that, cancellations more than 60 days out lose the deposit; within 60 days the full price is due unless your seat is filled from the same list. Travel insurance is required."],
  ["What happens if a trip is cancelled?","If we cancel, you get everything you paid us back in full, or a seat on another season if you prefer."]
];
function faq(){
  return pageTitle("Support","FAQ","Good to know before you apply") + `
  <section class="summary"><div class="wrap faqwrap">
    ${FAQS.map(([q,a],i)=>`<details class="faqi"${i===0?" open":""}><summary>${esc(q)}</summary><p>${esc(a)}${a.startsWith("Draft")?"":""}</p></details>`).join("")}
    <p class="note" style="margin-top:28px">Still unsure? Write to tringles@tourground.com.</p>
  </div></section>`;
}

/* ---------- ABOUT / HOSTS ---------- */
function about(){
  return pageTitle("The club","About Tringles","Skip the first date. Take the trip.") + `
  <section class="intro"><div class="wrap">
    <div><h2>A club you join for a week</h2><p>Tringles started with a simple observation: a first date over a drink tells you very little, and a week on a boat, a horse and a dance floor tells you a lot. So we built small, hosted trips where meeting someone is part of the itinerary, never the whole point of it.</p></div>
    <ul class="dash"><li>Small cohorts of 12 to 16 members</li><li>Every trip run by a host, on the ground all week</li><li>Local partners we've worked with for years</li><li>Season one: Lisbon, Rio, Bali and Nairobi</li></ul>
  </div></section>
  <section class="story"><div class="wrap">
    ${ph("gen_candles","A long table set for dinner")}
    <div class="txt"><p>Tringles is co-founded by a travel operator whose destination company works with partners in more than 130 countries, and a dating creator whose audience has been asking for something better than the apps for years.</p><p>One knows how to run a flawless week anywhere in the world. The other knows what makes people open up, and what makes them close down.</p></div>
  </div></section>
  <section class="summary"><div class="wrap"><h2>The Hosts</h2><div class="sgrid">
    <div><h3>Who they are</h3><ul class="dash"><li>Experienced tour leaders or event hosts</li><li>Fluent in the season's language</li><li>Trained in group dynamics and safeguarding</li></ul></div>
    <div><h3>What they do</h3><ul class="dash"><li>Run the cards, the circles and the pairings</li><li>Read your private feedback after each date</li><li>Look after anyone who feels left out</li></ul></div>
    <div><h3>What they can do</h3><ul class="dash"><li>Change any plan for safety or weather</li><li>Remove anyone who breaks the code of conduct</li><li>Call the local team at any hour</li></ul></div>
  </div></div></section>`;
}

/* ---------- JOURNAL ---------- */
const STORIES = [
  {t:"Why the first date is broken", d:"Ninety minutes, two drinks and a verdict. A case for meeting someone over a week of real things to do.", tone:"gen_sails", cap:"Under sail", href:"#how", cta:"How It Works"},
  {t:"Thirty-six questions, three levels", d:"How Arthur Aron's study on closeness shaped the Deep deck, and why the hardest questions come last.", tone:"gen_lamp", cap:"A table for two after dark", href:"#cards", cta:"The Cards"},
  {t:"Five first dates around Lisbon", d:"Horses through the cork oaks, a captain on the Sado, a buggy in the dust. Day two of Vineyard Week.", tone:"lis_horses", cap:"Riders on Lusitano horses", href:"#lisbon", cta:"Lisbon"},
  {t:"What a host actually does", d:"The pairings, the evening circles and the quiet word with whoever feels left out. A day with a Tringles host.", tone:"gen_toast", cap:"A toast at dinner", href:"#about", cta:"About the hosts"}
];
function journal(){
  return pageTitle("Stories","Journal","Notes from the club") + `
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
const conduct = () => legal("The club","Code of Conduct","What every member agrees to before they travel",[
  ["Respect is the rule",["Treat every member, host, guide and local partner with respect. No harassment, pressure or unwanted contact, in person or online."]],
  ["Consent, always",["Interest is shown, never assumed. A no, a pass or silence is a no. Anyone can pass on any card, game or date without giving a reason."]],
  ["Rooms are private",["Everyone has a single room with their own key. Games and group activities never take place in bedrooms."]],
  ["Drink responsibly",["Nobody is pushed to drink and no game involves alcohol. The host may step in if anyone is unable to look after themselves."]],
  ["Privacy",["Don't photograph or post other members without their permission. Picks, feedback and the Reveal stay private."]],
  ["Honesty",["You confirm you are single and over 18, and that what you tell us in your application is true."]],
  ["If something goes wrong",["Tell your host or contact the founders directly at any time. Hosts may remove anyone who breaks this code, at that person's own cost and without refund."]]
]);
const ADDRESS = "Second Home Lisboa, Mercado da Ribeira, Avenida 24 de Julho 49, 1200-479 Lisboa, Portugal";
const privacy = () => legal("Legal","Privacy Policy","What we collect, why, and what you can ask us to do with it",[
  ["Who we are",["Tringles runs small-group trips for singles. Our address is " + ADDRESS + ". We decide how the personal data described here is used and are responsible for it. Write to us about anything on this page at tringles@tourground.com."]],
  ["What the application collects",["Your name, email and a phone or messaging contact; your country, city, age range and which list you apply on; your languages; what you're looking for, interests, activity level, optional dietary, room or accessibility needs; your answers about safety and consent; a short note about yourself and an optional Instagram handle. If you subscribe to the newsletter, your email address."]],
  ["Why we use it, and on what basis",["To review your application, balance each cohort, plan the trip around your needs and contact you about it: steps you ask us to take before a contract. Once you book, to run your trip: performance of our contract. Dietary, health and accessibility details only with your explicit consent, which you can withdraw. Records the law requires us to keep: legal obligation. Newsletters only if you opt in."]],
  ["What we never ask for here",["Passport numbers, card or bank details, or anything else not listed above. ID checks happen later on a call, and payments by a separate secure link."]],
  ["Who we share it with",["Only those who need it: your host, the hotels, transport and activity partners who deliver your trip (for example dietary or access needs), and the companies that provide our email, forms and website hosting. Your application is never visible to other applicants. We never sell your data."]],
  ["International transfers",["Our trips run in Portugal, Brazil, Indonesia and Kenya, so the partners there receive what they need to look after you. Where the law requires it, we put appropriate safeguards in place for those transfers, or rely on the transfer being necessary to arrange the trip you asked for."]],
  ["How long we keep it",["Applications that do not lead to a booking are deleted within two years of our last contact. Booking records are kept for as long as tax and accounting law requires. Health, dietary and access details are deleted once your trip is over."]],
  ["Your rights",["You can ask to see, correct or delete your data, limit or object to how we use it, take a copy with you, and withdraw consent at any time. Write to tringles@tourground.com; we reply within one month. You can also complain to the data protection authority where you live, in Portugal the CNPD."]],
  ["Cookies and storage",["See the Cookie Policy."]],
  ["Changes",["We update this policy when our practices change and show the date at the top of the page. Last updated 30 October 2026."]]
]);
const terms = () => legal("Legal","Booking Terms","How applications, seats and bookings work",[
  ["About these terms",["These terms apply to every trip arranged by Tringles (\u201cwe\u201d), " + ADDRESS + ", and to your use of this website. Last updated 30 October 2026."]],
  ["Applications and offers",["Applying is free and doesn't guarantee a seat. Each cohort is balanced between lists and selected after a short call with a host. If we offer you a seat, the offer sets out the trip, the price and how long it stays open."]],
  ["Prices and payment",["Prices are \u201cfrom\u201d prices, per person, land only, and are confirmed when your seat is offered. A \u20ac500 deposit holds your seat; the balance is due 60 days before departure. If the balance is not paid on time, we may treat the seat as cancelled by you."]],
  ["Changes you ask for",["We will try to help if you want to change trips or dates, but cannot promise to. Any cost from our partners is passed on, and we tell you before you decide."]],
  ["If you cancel",["Cancel in writing at any time. The deposit is refundable for 14 days after acceptance. After that, cancellations more than 60 days before departure lose the deposit; within 60 days the full price is due unless your seat is filled from the same list."]],
  ["If we change or cancel a trip",["Hosts may change part of a program for safety, weather or availability, replacing it with something of similar value. If we cancel a trip, you get everything you paid us back in full, or a seat on another season if you prefer. We are not responsible for events no one could foresee or avoid, such as extreme weather, epidemics or official advice against travel; if such an event stops a trip we refund what we can recover."]],
  ["Travel insurance",["Travel insurance covering cancellation, medical treatment and repatriation is required from the moment you book."]],
  ["Passports, visas and health",["You are responsible for a valid passport, any visa, the vaccinations and health documents your trip needs, and meeting the entry rules of every country you pass through. Check them with official sources before you travel."]],
  ["Conduct and filming",["Every member agrees to the Code of Conduct. Breaking it can mean removal from the trip without refund. Only seasons announced as filmed are filmed, and only members who sign a release appear."]],
  ["Our responsibility",["We plan and run every trip with reasonable skill and care. We are not responsible where a problem is caused by you, by someone unconnected with the trip, or by events beyond anyone's control. Where international conventions limit the liability of airlines or hotels, ours is limited in the same way. Nothing here limits liability for death or personal injury caused by negligence, or anything else that cannot be limited by law."]],
  ["Complaints",["Tell your host straight away so it can be put right on the spot. If you are still unhappy, write to tringles@tourground.com within 28 days of coming home; we reply within 28 days."]],
  ["Law",["These terms are governed by the law of Portugal, where Tringles is established. This does not take away any rights you have under the consumer law of the country where you live."]]
]);
const cookies = () => legal("Legal","Cookie Policy","What this site stores in your browser, listed exactly",[
  ["What we store",["tringles-apply (local storage, set by this site): keeps your application draft on your own device so you can finish it later. It is strictly necessary for the form and is deleted when you send your application or clear your browser storage."]],
  ["What we don't",["This site sets no cookies and runs no analytics, advertising or social-media trackers. Fonts and photographs are served from this site."]],
  ["Your choices",["Because the only item stored is strictly necessary for a feature you choose to use, there is nothing to consent to. If we ever add anything optional, such as analytics, we will ask you first and list it here. You can clear this site's storage at any time in your browser settings."]],
  ["Contact",["Questions about this policy: tringles@tourground.com. Last updated 30 October 2026."]]
]);

/* ---------- INTAKE FORM ---------- */
const STEPS = ["Trip","About you","Your week","Safety & consent","In your words","Review"];
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
    <fieldset><legend>Which trip?</legend><div class="opts trips">${ORDER.map(k=>`<label class="opt tripopt"><input type="radio" name="trip" value="${k}"${f.trip===k?" checked":""}><span><b>${esc(TRIPS[k].city)}</b><small>${esc(TRIPS[k].name)} · ${esc(TRIPS[k].when)} · From ${TRIPS[k].price}</small></span></label>`).join("")}</div></fieldset>
    <fieldset><legend>When would you like to go?</legend><div class="opts">${[["season1","Season one (the dates shown)"],["later","A later season"],["flexible","I'm flexible"]].map(([v,l])=>opt("season",v,l,"radio",f.season===v)).join("")}</div></fieldset>`;
  if (step===1) return `
    <div class="fgrid">
      <label class="fl">First name<input id="i-first" value="${esc(f.first)}" autocomplete="given-name"></label>
      <label class="fl">Last name<input id="i-last" value="${esc(f.last)}" autocomplete="family-name"></label>
      <label class="fl">Email<input id="i-email" type="email" value="${esc(f.email)}" autocomplete="email"></label>
      <label class="fl">Phone or messaging contact<input id="i-contact" value="${esc(f.contact)}" autocomplete="tel" placeholder="${"+351… or @username"}"></label>
      <label class="fl">Country<input id="i-country" value="${esc(f.country)}" autocomplete="country-name"></label>
      <label class="fl">City<input id="i-city" value="${esc(f.city)}" autocomplete="address-level2"></label>
    </div>
    <fieldset><legend>Age range</legend><div class="opts">${["26–30","31–35","36–40","40+"].map(v=>opt("age",v,v,"radio",f.age===v)).join("")}</div></fieldset>
    <fieldset><legend>Which list are you applying on?</legend><p class="hint">Each cohort holds an 8/8 balance.</p><div class="opts">${[["women","Women's list"],["men","Men's list"]].map(([v,l])=>opt("list",v,l,"radio",f.list===v)).join("")}</div></fieldset>
    <fieldset><legend>Languages you're comfortable in</legend><div class="opts">${[["en","English"],["ru","Russian"],["other","Other"]].map(([v,l])=>opt("langs",v,l,"checkbox",f.langs.includes(v))).join("")}</div>
      <label class="fl" id="langOtherWrap"${f.langs.includes("other")?"":" hidden"}>Which other languages?<input id="i-langOther" value="${esc(f.langOther)}"></label></fieldset>`;
  if (step===2) return `
    <fieldset><legend>What are you looking for?</legend><div class="opts">${[["romance","Romance"],["friendship","Friendship"],["both","Open to both"]].map(([v,l])=>opt("looking",v,l,"radio",f.looking===v)).join("")}</div></fieldset>
    <fieldset><legend>What do you enjoy? Choose any</legend><div class="opts">${["Wine","Sport","Beach","Nightlife","Nature","Wellness","Food"].map(v=>opt("interests",v.toLowerCase(),v,"checkbox",f.interests.includes(v.toLowerCase()))).join("")}</div></fieldset>
    <fieldset><legend>Your activity level</legend><div class="opts">${[["easy","Easy: walks and swims"],["moderate","Moderate: hikes, surf lessons"],["active","Active: up for anything"]].map(([v,l])=>opt("activity",v,l,"radio",f.activity===v)).join("")}</div></fieldset>
    <div class="fgrid">
      <label class="fl">Dietary needs or allergies <span class="opt-t">Optional</span><textarea id="i-diet" rows="3">${esc(f.diet)}</textarea></label>
      <label class="fl">Room or accessibility needs <span class="opt-t">Optional</span><textarea id="i-access" rows="3">${esc(f.access)}</textarea></label>
    </div>`;
  if (step===3) return `
    <fieldset><legend>Please confirm</legend><div class="opts col">
      ${opt("single","yes","I'm single and over 18","checkbox",f.single)}
      ${opt("conduct","yes","I agree to the Code of Conduct","checkbox",f.conduct)}
      ${opt("idcheck","yes","I understand there's a call with a host and an ID check before a seat is offered","checkbox",f.idcheck)}
    </div><p class="hint"><a href="#conduct" target="_self" data-keep="1">Read the Code of Conduct</a></p></fieldset>
    <fieldset><legend>Filming</legend><p class="hint">Only flagship seasons are filmed, and only with a signed release.</p><div class="opts col">${[["yes","Happy to be filmed on a filmed season"],["no","I'd prefer not to be filmed"]].map(([v,l])=>opt("filming",v,l,"radio",f.filming===v)).join("")}</div></fieldset>
    <fieldset><legend>Staying in touch <span class="opt-t">Optional</span></legend><div class="opts col">${opt("marketing","yes","Send me news about new seasons","checkbox",f.marketing)}</div></fieldset>`;
  if (step===4) return `
    <label class="fl">Tell us about yourself<span class="hint">A few sentences: what you do, what a great week looks like to you, anything your host should know. 40 to 800 characters.</span><textarea id="i-about" rows="7" maxlength="800">${esc(f.about)}</textarea><span class="count" id="aboutCount">${f.about.length}/800</span></label>
    <label class="fl">Instagram <span class="opt-t">Optional</span><input id="i-instagram" value="${esc(f.instagram)}" placeholder="${"@yourname"}"></label>`;
  // review
  const t = TRIPS[f.trip];
  const L = (a,b) => `<dt>${esc(a)}</dt><dd>${esc(b||"—")}</dd>`;
  const lab = {season1:"Season one",later:"A later season",flexible:"Flexible",women:"Women's list",men:"Men's list",romance:"Romance",friendship:"Friendship",both:"Open to both",easy:"Easy",moderate:"Moderate",active:"Active",yes:"Happy to be filmed",no:"Prefer not to be filmed"};
  return `
    <div class="review">
      <div><h3>Trip</h3><dl class="kv">${L("Trip", t ? `${t.city} · ${t.name}` : "")}${L("When", lab[f.season])}</dl><button type="button" class="tag-link" data-goto="0">Edit</button></div>
      <div><h3>About you</h3><dl class="kv">${L("Name", `${f.first} ${f.last}`)}${L("Email", f.email)}${L("Contact", f.contact)}${L("Lives in", `${f.city}, ${f.country}`)}${L("Age", f.age)}${L("List", lab[f.list])}${L("Languages", f.langs.map(x=>({en:"English",ru:"Russian",other:f.langOther||"Other"})[x]).join(", "))}</dl><button type="button" class="tag-link" data-goto="1">Edit</button></div>
      <div><h3>Your week</h3><dl class="kv">${L("Looking for", lab[f.looking])}${L("Enjoys", f.interests.join(", "))}${L("Activity", lab[f.activity])}${L("Dietary", f.diet)}${L("Room / access", f.access)}</dl><button type="button" class="tag-link" data-goto="2">Edit</button></div>
      <div><h3>Safety &amp; consent</h3><dl class="kv">${L("Confirmed", "Single, code of conduct, call and ID check")}${L("Filming", lab[f.filming])}${L("News", f.marketing?"Yes":"No")}</dl><button type="button" class="tag-link" data-goto="3">Edit</button></div>
      <div class="wide"><h3>In your words</h3><p class="quote">${esc(f.about)}</p><dl class="kv">${L("Instagram", f.instagram)}</dl><button type="button" class="tag-link" data-goto="4">Edit</button></div>
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
  if (step===0){ if(!f.trip) e.push("Choose a trip."); if(!f.season) e.push("Choose when you'd like to go."); }
  if (step===1){
    if(!f.first) e.push("Add your first name."); if(!f.last) e.push("Add your last name.");
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.email)) e.push("Add a valid email address.");
    if(f.contact.length<3) e.push("Add a phone number or messaging contact.");
    if(!f.country) e.push("Add your country."); if(!f.city) e.push("Add your city.");
    if(!f.age) e.push("Choose your age range."); if(!f.list) e.push("Choose which list you're applying on.");
    if(!f.langs.length) e.push("Choose at least one language.");
  }
  if (step===2){ if(!f.looking) e.push("Choose what you're looking for."); if(!f.interests.length) e.push("Choose at least one thing you enjoy."); if(!f.activity) e.push("Choose your activity level."); }
  if (step===3){ if(!f.single) e.push("Confirm you're single and over 18."); if(!f.conduct) e.push("Agree to the Code of Conduct to apply."); if(!f.idcheck) e.push("Confirm you understand the host call and ID check."); if(!f.filming) e.push("Choose a filming preference."); }
  if (step===4){ if(f.about.length<40) e.push("Tell us a little more about yourself (at least 40 characters)."); }
  return e;
}
function applyPage(prefill){
  const d = loadDraft();
  if (!form) form = d ? Object.assign(blankForm(), d) : blankForm(prefill);
  if (prefill && TRIPS[prefill]) form.trip = prefill;
  step = 0;
  return pageTitle("Season one","Apply","Six short steps. About ten minutes.") + `
  <section class="intake"><div class="wrap">
    <ol class="progress" id="progress" aria-label="Progress"></ol>
    <form id="intake" novalidate>
      <div id="stepBody"></div>
      <div class="errs" id="errs" role="alert" hidden></div>
      <div class="navrow"><button type="button" class="pill outline" id="back">Back</button><button type="submit" class="pill dark" id="next">Continue</button></div>
    </form>
    <div id="done" hidden></div>
    <p class="note" style="margin-top:28px">We only ask for what we need to plan your week. See the <a href="#privacy">Privacy Policy</a>. We never ask for passport numbers or payment details here.</p>
  </div></section>`;
}
function paintStep(){
  $("#progress").innerHTML = STEPS.map((s,i)=>`<li class="${i<step?"done":i===step?"cur":""}"${i===step?' aria-current="step"':""}><span>${i+1}</span>${esc(s)}</li>`).join("");
  $("#stepBody").innerHTML = `<h2 class="sh">${esc(STEPS[step])}</h2>` + stepHTML();
  $("#back").hidden = step===0;
  $("#next").textContent = step===STEPS.length-1 ? "Send application" : "Continue";
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
      if (errs.length){ $("#errs").innerHTML = `<p>Before you continue:</p><ul>${errs.map(x=>`<li>${esc(x)}</li>`).join("")}</ul>`; $("#errs").hidden = false; $("#errs").scrollIntoView({block:"center"}); return; }
      step++; paintStep(); window.scrollTo(0, $("#progress").offsetTop - 80); return;
    }
    if (submitting) return; submitting = true; $("#next").disabled = true; $("#next").textContent = "Sending…";
    const res = await submitApplication(form);
    submitting = false; $("#next").disabled = false; $("#next").textContent = "Send application";
    if (res.ok){ clearDraft(); const t = TRIPS[form.trip]; $("#intake").hidden = true; $("#progress").hidden = true;
      $("#done").hidden = false; $("#done").innerHTML = `<div class="done"><span class="eyebrow">Application received</span><h2>Thank you, ${esc(form.first)}.</h2><p>Your application for ${esc(t.city)} · ${esc(t.name)} is with us. A host will be in touch within a week to arrange a short call. Nothing to pay yet.</p><a class="pill outline" href="#${form.trip}">Back to ${esc(t.city)}</a></div>`;
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
  const r = await fetch(ENDPOINT, {method:"POST", headers:{"Content-Type":"application/json", "Accept":"application/json"}, body: JSON.stringify({kind, ...data})});
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
    catch(e){ return {ok:false, msg:`We couldn't send your application just now. Your answers are kept on this device; try again, or email ${CONTACT} and we'll help.`}; }
  }
  const t = TRIPS[f.trip];
  mailto(`Application: ${t ? t.city + " · " + t.name : f.trip} (${f.first} ${f.last})`,
    Object.entries(record).map(([k,v]) => `${k}: ${Array.isArray(v) ? v.join(", ") : v}`).join("\n"));
  return {ok:true};
}
async function subscribe(email){
  if (ENDPOINT){ try { await post("newsletter", {email, at:new Date().toISOString()}); return true; } catch(e){ return false; } }
  mailto("Newsletter", `Please add ${email} to the Tringles newsletter.`);
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
  $("#fab").textContent = TRIPS[v] ? "Apply for this trip" : "Apply now";
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
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(m)) { $("#subMsg").textContent = "Add a valid email."; return; }
  $("#subMsg").textContent = "Saving…";
  $("#subMsg").textContent = (await subscribe(m)) ? "Thanks, you're on the list." : "Couldn't save from this view. Email tringles@tourground.com to join.";
});
addEventListener("hashchange", route);
route();

