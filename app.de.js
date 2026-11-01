const TRIPS = {
  lisbon: {
    city: "Lissabon", name: "Weinberg-Woche", cls: "m-lisbon", when: "Mai 2027", price: "€3,600", nights: 7,
    base: "Weingut in Azeitão → Villa in den Hügeln von Sintra → Comporta → Lissabon",
    intro: "Ganz entspannt zwischen den Reben beginnen, in einer Villenküche den Ehrgeiz entdecken, an der Küste und auf einer Dachterrasse in Lissabon enden. Die am leichtesten erreichbare Reise aus ganz Europa und die entspannteste der vier.",
    facts: [["Gruppe","16 Mitglieder, 8 + 8"],["Alter","26–38"],["Ideal für","Wein, Pferde, lange Abendessen"],["Anreise","Flug nach Lissabon (LIS)"]],
    days: [
      {t:"Ankunft zwischen den Reben", s:[["Nachmittag","Abholung in Lissabon, 40 Minuten südlich zu einem Weingut in Azeitão. Einchecken, Pool, ankommen."],["Abend","Abendessen an einer langen Tafel im Weinberg. Ihr Gastgeber eröffnet die Woche mit einer kurzen Begrüßung, dann stellt sich jeder mit einer Karte vor."]]},
      {t:"Erste Dates", s:[["Morgen","Ausgiebiges Frühstück mit Szenario-Karten: Es regnet an Ihrem romantischen Wochenende – was nun?"],["Mittag","Die Paare werden ausgelost und brechen zu einem von fünf Dates auf, Mittagessen inklusive."],["Später Nachmittag","Weingutsführung und Verkostung."],["Abend","Abendessen in einem Restaurant mit Aussicht. Gesprächsrunde mit dem Gastgeber: Was hat Sie heute überrascht?"]],
        f:{h:"Die fünf ersten Dates", list:["Ausritt über das Weingut, danach Picknick","Kajakfahrt auf dem Sado, Mittagessen am Wasser","Privatboot mit Kapitän, Mittagessen an Bord","Jeep-Safari durch Korkeichenwälder und Weinberge","Offroad-Buggy, danach Mittagessen in einer Dorf-Tasca"], p:"Nach jedem Date beantwortet jeder drei vertrauliche Fragen für den Gastgeber: Haben Sie sich mit dieser Person wohlgefühlt? Was hat Ihnen am besten gefallen? Möchten Sie mehr Zeit mit ihr verbringen?"}},
      {t:"Die Geheimrezept-Challenge", s:[["Morgen","Umzug in eine private Villa in den Hügeln von Sintra."],["Mittag","Fünf Paare, ein Mittagessen, und niemand hat den vollen Überblick. Danach wird gegessen, was gekocht wurde."],["Nachmittag","Zeit am Pool."],["Abend","Abendessen mit Fado in der Alfama. Gesprächsrunde mit dem Gastgeber über die Challenge."]],
        f:{h:"So funktioniert die Challenge", ol:["Die Rezepthüter beschreiben die Zutaten, ohne sie zu nennen.","Die Listenschreiber machen aus den Beschreibungen eine Einkaufsliste und geben sie weiter.","Die Einkäufer kaufen, was auf der Liste steht, ohne mit den Rezepthütern zu sprechen. Das Budget kennen sie nicht.","Die Budgethüter kennen das Limit und behalten die Uhr im Blick. Liegt der Kassenbon über dem Budget, entscheiden die Einkäufer, was zurückgeht.","Die Köche folgen nur mündlichen Anweisungen und kochen mit dem, was ankommt."], p:"In der Nachbesprechung geht es um das Team, nie darum, wer den Ton angegeben hat. Wird es angespannt, lenkt der Gastgeber den Blick auf den gemeinsamen Erfolg."}},
      {t:"Hinunter an die Küste", s:[["Morgen","Fahrt nach Westen nach Comporta: Reisfelder, Störche, lange leere Strände."],["Nachmittag","Beach Club, Stand-up-Paddling und Pferde am Strand für alle, die möchten."],["Abend","Date Picks, Runde eins: Die Hälfte der Gruppe wählt ein Dinner-Date im Dorf Comporta."]]},
      {t:"Delfine auf dem Sado", s:[["Tag","Bootstag auf der Sado-Mündung ab Setúbal: Delfine, Baden vor Tróia, Mittagessen an Bord."],["Abend","Date Picks, Runde zwei: Die andere Hälfte wählt. Zurück im Haus die Lange Tafel: drei ruhige Runden, jedes Mal ein neues Gegenüber."]]},
      {t:"Lissabon", s:[["Morgen","Weiter nach Lissabon. Freie Paare: Belém mit dem Fahrrad, die Gärten der Gulbenkian oder die LX Factory. Sie entscheiden, mit wem und wohin."],["Abend","Segeltörn zum Sonnenuntergang auf dem Tejo, danach Ausgehen in Príncipe Real."]]},
      {t:"Die Enthüllung", s:[["Tag","Freier Tag. Die finale Wahl geht bis 16:00 Uhr vertraulich an den Gastgeber."],["Sonnenuntergang","Die Enthüllung auf einer Dachterrasse über dem Fluss, danach das Abschiedsessen."]]},
      {t:"Erstes echtes Date", s:[["Morgen","Die Paare, die sich gefunden haben, frühstücken zu zweit in einer Pastelaria. Alle anderen: Gruppenbrunch. Transfers zum Flughafen."]]}
    ]
  },
  rio: {
    city: "Rio de Janeiro", name: "Love Week", cls: "m-rio", when: "März 2027, nach dem Karneval", price: "€4,200", nights: 7,
    base: "Eine Boutique-Villa in Santa Teresa oder Ipanema",
    intro: "Die volle Love-Island-Energie: Beachsport, Samba, ein Tag auf dem Schoner und eine Enthüllung bei Sonnenuntergang am Arpoador. Die geselligste und lauteste der vier Reisen.",
    facts: [["Gruppe","16 Mitglieder, 8 + 8"],["Alter","26–38"],["Ideal für","Strand, Sport, Nachtleben"],["Anreise","Flug nach Rio (GIG)"]],
    days: [
      {t:"Ankunft", s:[["Nachmittag","Private Transfers, Check-in, Ihr persönliches Kartendeck im Willkommenspaket."],["Abend","Willkommensessen auf einer Dachterrasse in Santa Teresa."]]},
      {t:"Strandtag", s:[["Morgen","Footvolley und Beachvolleyball in Ipanema in gemischten Teams, mit Trainer."],["Abend","Sambakurs, danach ein begleiteter Abend in Lapa."]]},
      {t:"Erste Dates", s:[["Tag","Zufällige Paare: Surfstunde in Prainha, Wanderung im Tijuca-Wald, Drachenfliegen in São Conrado oder ein Kochkurs."],["Abend","Caipirinha-Masterclass und das Kartenspiel Hot Seat."]], f:{h:"Nach jedem Date", p:"Drei vertrauliche Fragen für den Gastgeber: wohlgefühlt? schönster Moment? mehr Zeit miteinander? Die Antworten fließen in die Paare des nächsten Tages ein."}},
      {t:"Zuckerhut", s:[["Tag","Vom Gastgeber gewichtete Paare: Aufstieg oder Seilbahn auf den Zuckerhut, danach der Botanische Garten."],["Abend","Date Picks, Runde eins: Dinner zu zweit in acht Restaurants."]]},
      {t:"Bootstag", s:[["Tag","Privater Schoner rund um die Inseln der Guanabara-Bucht, Baden und Mittagessen an Bord."],["Abend","Date Picks, Runde zwei, danach die Lange Tafel in der Villa: drei ruhige Runden, jedes Mal ein neues Gegenüber."]]},
      {t:"Freie Paare", s:[["Nachmittag","Wählen Sie, mit wem und was, aus einem Menü vorgebuchter Ausflüge."],["Abend","Straßensamba an der Pedra do Sal."]]},
      {t:"Die Enthüllung", s:[["Sonnenaufgang","Christus der Erlöser vor dem großen Andrang."],["Sonnenuntergang","Die Enthüllung auf einer Dachterrasse am Arpoador, danach die Abschiedsparty."]]},
      {t:"Erstes echtes Date", s:[["Morgen","Frühstück zu zweit für die Paare, Brunch für alle, Transfers zur Abreise."]]}
    ]
  },
  bali: {
    city: "Bali", name: "Insel-Woche", cls: "m-bali", when: "Juni 2027", price: "€3,400", nights: 7,
    base: "Dschungelvilla in Ubud → Klippenvilla in Uluwatu",
    intro: "Erst Reisterrassen und Wasserfälle, dann Surfen und Sonnenuntergänge an den Klippen. Bali ist der sanfteste Einstieg für eine Gruppe von Fremden und die preiswerteste der vier Reisen.",
    facts: [["Gruppe","16 Mitglieder, 8 + 8"],["Alter","26–38"],["Ideal für","Natur, Wellness, Surfen"],["Anreise","Flug nach Denpasar (DPS)"]],
    days: [
      {t:"Ankunft in Ubud", s:[["Nachmittag","Transfer hinauf zu einer privaten Dschungelvilla, danach ein Willkommenssegen."],["Abend","Abendessen in den Reisfeldern."]]},
      {t:"Die Markt-Staffel", s:[["Morgen","Mit dem Rad durch die Reisterrassen bergab, in zufälligen Paaren."],["Mittag","Balis Version der Rezept-Challenge: fünf Paare, der Markt von Ubud, ein balinesischer Koch und ein Mittagessen, das gemeinsam gelingen muss."],["Abend","Gesprächsrunde mit dem Gastgeber: Was hat Ihnen geholfen, sich zu einigen?"]]},
      {t:"Erste Dates", s:[["Tag","Die Paare werden für eines von fünf Dates ausgelost: Rafting auf dem Ayung, Wasserfallwanderung, Silberschmuck-Kurs, die Schaukel von Tegallalang mit Kaffee oder ein Spaziergang zu Tempel und Quelle."],["Abend","Gong-Klangbad und ein ruhiges Abendessen in der Villa."]], f:{h:"Nach jedem Date", p:"Drei vertrauliche Fragen für den Gastgeber. Niemand sonst sieht die Antworten."}},
      {t:"Zu den Klippen", s:[["Morgen","Weiter nach Süden in eine Klippenvilla in Uluwatu."],["Nachmittag","Surfstunde in Padang Padang oder Zeit am Pool."],["Abend","Kecak-Feuertanz am Tempel von Uluwatu, danach Date Picks, Runde eins."]]},
      {t:"Bootstag zu den Inseln", s:[["Tag","Mit dem Speedboot nach Nusa Lembongan: Schnorcheln mit Mantarochen, Mittagessen am Strand."],["Abend","Date Picks, Runde zwei, danach die Lange Tafel in der Klippenvilla: drei ruhige Runden, jedes Mal ein neues Gegenüber."]]},
      {t:"Freie Paare", s:[["Tag","Wählen Sie, mit wem und was: Spa, Beach Club, Yogastunde oder eine Rollerfahrt mit Fahrer."],["Abend","Gruppenabend in einem Beach Club."]]},
      {t:"Die Enthüllung", s:[["Sonnenuntergang","Die Enthüllung an der Klippenkante, danach ein Abschiedsessen mit Meeresfrüchten am Strand von Jimbaran."]]},
      {t:"Erstes echtes Date", s:[["Morgen","Frühstück zu zweit für die Paare, Gruppenbrunch, Transfers zur Abreise."]]}
    ]
  },
  nairobi: {
    city: "Nairobi", name: "Safari-Woche", cls: "m-nairobi", when: "September 2027, Zeit der großen Migration", price: "€5,900", nights: 7,
    base: "Gartenhotel in Nairobi → Zeltcamp in der Masai Mara → Naivashasee",
    intro: "Geteilte Jeeps, ein Ballon im Morgengrauen und Abendessen am Feuer. Die intensivste Woche der vier: kleine Camps, frühe Morgen und kein Entkommen vor einem guten Gespräch.",
    facts: [["Gruppe","12–16 Mitglieder"],["Alter","28–40"],["Ideal für","Wildtiere, einmal im Leben"],["Anreise","Flug nach Nairobi (NBO)"]],
    days: [
      {t:"Ankunft in Nairobi", s:[["Nachmittag","Gartenhotel in Karen, danach das Giraffe Centre."],["Abend","Willkommensessen unter den Bäumen."]]},
      {t:"In die Mara", s:[["Morgen","Flug mit dem Kleinflugzeug in die Masai Mara."],["Nachmittag","Erste Pirschfahrt in gemischten Vierergruppen."],["Abend","Sundowner auf einem Bergrücken, danach Abendessen im Camp."]]},
      {t:"Erste Dates", s:[["Morgengrauen","Pirschfahrten zu zweit mit einem Guide: Der Geländewagen ist das Date."],["Nachmittag","Fußsafari mit Massai-Guides oder der Pool im Camp."],["Abend","Gesprächsrunde mit dem Gastgeber am Feuer."]], f:{h:"Nach jedem Date", p:"Drei vertrauliche Fragen für den Gastgeber. Die Paare wechseln bei jeder Pirschfahrt bis Tag fünf."}},
      {t:"Ballon im Morgengrauen", s:[["Morgengrauen","Heißluftballonfahrt über die Ebenen, danach ein Champagnerfrühstück im Busch (alkoholfreie Variante selbstverständlich)."],["Nachmittag","Die Camp-Küchen-Challenge: das Rezeptspiel, über dem Feuer gekocht mit den Köchen des Camps."],["Abend","Date Picks, Runde eins: Dinner zu zweit im Busch."]]},
      {t:"Flussüberquerungen", s:[["Tag","Ein ganzer Tag am Mara-Fluss für die Flussüberquerungen der Migration, mit Picknick."],["Abend","Date Picks, Runde zwei, danach die Lange Tafel am Feuer: drei ruhige Runden, jedes Mal ein neues Gegenüber."]]},
      {t:"Naivashasee", s:[["Morgen","Flug nach Naivasha."],["Nachmittag","Bootsfahrt zwischen Flusspferden, danach Radfahren im Hell’s Gate in Paaren Ihrer Wahl."]]},
      {t:"Die Enthüllung", s:[["Sonnenuntergang","Die Enthüllung beim Sundowner am See, danach das Abschiedsessen."]]},
      {t:"Erstes echtes Date", s:[["Morgen","Frühstück zu zweit für die Paare, danach Transfer auf der Straße nach Nairobi zu den Flügen."]]}
    ]
  }
};
const ORDER = ["lisbon","rio","bali","nairobi"];

const DECKS = [
  {id:"spark", name:"Spark · Die lockere Seite", cls:"c-spark", sw:"var(--clay)", when:"Tag 1", desc:"Vorstellungsrunde beim Willkommensessen",
   qs:["Worüber könnten Sie stundenlang reden?","Welches Erlebnis wünschen Sie sich fürs nächste Jahr?","Was ist das Spontanste, das Sie je getan haben?","Was macht Ihnen jemanden sofort sympathisch?","Welches gute Zeichen fällt Ihnen früh auf?","Wie sähe Ihr perfekter spontaner Tag aus?","Was wollten Sie schon immer einmal ausprobieren?","Was war Ihre unvergesslichste Reise?"]},
  {id:"know", name:"Kennenlernen", cls:"c-know", sw:"var(--surface)", when:"Erste Dates", desc:"Umschlag 2 bei jedem ersten Date",
   qs:["Wodurch fühlen Sie sich von jemandem wertgeschätzt?","Welche Eigenschaften schätzen Sie an einem Partner am meisten?","Wie sieht für Sie eine richtig gute Beziehung aus?","Was wird an Ihnen oft missverstanden?","Was würden Sie gern mit einem Partner erleben?"]},
  {id:"together", name:"Wie wir zusammenarbeiten", cls:"c-together", sw:"var(--linen)", when:"Tag 2–3", desc:"Szenarien beim Frühstück und nach den Challenges",
   qs:["Sie haben ein romantisches Wochenende geplant und es regnet. Was tun Sie?","Ein freier Tag, ein kleines Budget. Wie verbringen Sie ihn?","Ihr Partner will Abenteuer. Sie brauchen Ruhe. Was nun?","Wenn eine Reise nicht nach Plan läuft, wie reagieren Sie?","Wenn Sie anderer Meinung sind: Sprechen Sie es sofort an oder lassen Sie sich erst Zeit?","Was war heute schwieriger: sich selbst zu erklären oder jemanden zu verstehen?"]},
  {id:"circle", name:"Abendrunde", cls:"c-circle", sw:"var(--claret)", when:"Jeden Abend", desc:"Vom Gastgeber geleitet, am Tisch, nur was Sie teilen möchten",
   qs:["Was hat Sie heute am meisten überrascht?","Hat Sie jemand positiv überrascht?","Was haben Sie über jemanden erfahren, das Sie nicht erwartet hätten?","Gab es einen Moment, in dem Sie sich besonders verbunden gefühlt haben?","Haben sich heute Ihre Erwartungen verändert?","Wenn Sie einen Moment des Tages wiederholen könnten, welcher wäre es?"]},
  {id:"deep1", name:"Deep · Stufe I", cls:"c-deep", sw:"var(--oxblood)", when:"Lange Tafel · Runde 1", desc:"Inspiriert von Arons 36 Fragen, Set I: leicht, verspielt",
   qs:["Wen auf der ganzen Welt würden Sie zum Abendessen einladen?","Was würde den heutigen Tag für Sie perfekt machen?","Wenn Sie morgen mit einer neuen Fähigkeit aufwachen könnten, welche wäre es?","Wären Sie gern berühmt? Wofür?","Wie sähe Ihr perfektes Wochenende aus?"]},
  {id:"deep2", name:"Deep · Stufe II", cls:"c-deep", sw:"var(--oxblood)", when:"Lange Tafel · Runde 2", desc:"Set II: persönlich",
   qs:["Welchen Traum haben Sie schon lange, ohne ihn anzugehen?","Was bedeutet Ihnen Freundschaft?","Welche Erinnerung möchten Sie für immer behalten?","Was ist bisher die größte Leistung Ihres Lebens?","Wie eng ist Ihr Verhältnis zu Ihrer Familie?"]},
  {id:"deep3", name:"Deep · Stufe III", cls:"c-deep", sw:"var(--oxblood)", when:"Lange Tafel · Runde 3", desc:"Set III: über Sie beide",
   qs:["Nennen Sie drei Dinge, die Sie beide Ihrer Meinung nach gemeinsam haben.","Was ist Ihnen am ersten Tag an mir aufgefallen?","Was mögen Sie schon jetzt an der Person Ihnen gegenüber?","Was würden Sie jemandem erst nach einer Woche wie dieser erzählen?","Was würden Sie gern gemeinsam erleben, wenn es weiterginge?"]}
];


const CREDITS = {"lis_vines": ["Évora IMG 6738 (21135870201).jpg", "Jean-Michel Brunet", "CC BY 2.0"], "lis_grapes": ["Dehydrated and bird damaged grapes in Portugal.jpg", "Filipe Fortes", "CC BY-SA 2.0"], "lis_beach": ["Comporta Beach - 04.tif", "Herdade da Comporta", "CC BY-SA 3.0"], "lis_sunset": ["Sunset by the river Tagus (36234333671).jpg", "Maria Eklind", "CC BY-SA 2.0"], "lis_tagus": ["Sunset in Lisbon (36542861635).jpg", "unknown.mmp aus Lissabon, Portugal", "CC0"], "lis_evora": ["Évora - Praça do Giraldo.jpg", "Paolo Querci", "CC BY 3.0"], "lis_temple": ["Evora - Roman Temple - Backside.jpg", "Ingo Mehling", "CC BY-SA 4.0"], "lis_horses": ["Lusitano Pferd International 2011.JPG", "Usien", "CC BY-SA 3.0"], "rio_sugarloaf": ["Sugarloaf Sunrise 2.jpg", "Donatas Dabravolskas", "CC BY-SA 4.0"], "rio_bay": ["Last Sunlight on the Sugarloaf Mountain.jpg", "Donatas Dabravolskas", "CC BY-SA 4.0"], "rio_ipanema": ["1 ipanema beach vidigal sunset.jpg", "chensiyuan", "CC BY-SA 4.0"], "rio_beachlife": ["Ipanema Beach (4589735501).jpg", "Francisco Anzola", "CC BY 2.0"], "rio_santateresa": ["Street Scene - Santa Teresa District - Rio de Janeiro - Brazil.jpg", "Adam Jones, Ph.D.", "CC BY-SA 3.0"], "rio_islands": ["Ilha de Paquetá - Rio de Janeiro 01.jpg", "VinyNeto", "CC BY-SA 3.0"], "rio_arpoador": ["Pedra do Arpoador RJ 04.jpg", "Deniltonlima", "CC BY-SA 3.0"], "rio_sunset": ["Pedra do Arpoador RJ 03.jpg", "Deniltonlima", "CC BY-SA 3.0"], "bal_terraces": ["Rice terraces tegalaland (9).jpg", "Tavana", "CC BY-SA 3.0"], "bal_terraces2": ["Rice terraces in Tegallalang 1.jpg", "Christophe95", "CC BY-SA 4.0"], "bal_cliff": ["Cliff at Uluwatu temple, Bali.jpg", "Emma THERY", "CC BY-SA 4.0"], "bal_temple": ["Uluwatu Temple Cliff, Bali.jpg", "Ken Eckert", "CC BY-SA 4.0"], "bal_lembongan": ["Nusa Lembongan, Bali.jpg", "Shura aus Amsterdam, Niederlande", "CC BY 2.0"], "bal_waterfall": ["Gitgit waterfalls in Bali; January 2015.jpg", "Juan Antonio F. Segal", "CC BY 2.0"], "bal_kecak": ["Kecak Dance Bali.jpg", "Dhani ilham", "CC BY-SA 4.0"], "bal_kecak2": ["Balinese dance in Ubud, Kecak, 20220822 1840 0182.jpg", "Jakub Hałun", "CC BY-SA 4.0"], "nai_jeeps": ["Maasai Mara, Kenya (47566656621).jpg", "Nina R aus Afrika", "CC BY 2.0"], "nai_balloon": ["Hot air ballon safari Maasai Mara National Reserve Kenya.jpg", "Svein-Magne Tunli", "CC BY-SA 4.0"], "nai_balloons": ["Maasai Mara National Reserve, Kenya (53337843878).jpg", "Nina R aus Afrika", "CC BY 2.0"], "nai_naivasha": ["Lake Naivasha Shoreline.jpg", "Kenenock", "CC BY-SA 4.0"], "nai_giraffe": ["Giraffe at Giraffe Centre Nairobi, Kenya.jpg", "GioRan", "CC BY-SA 4.0"], "nai_crossing": ["Wildebeest Jumping Into the Mara River.jpg", "Danijel Mihajlovic", "CC BY-SA 4.0"], "nai_acacia": ["Acacia tree at sunset, Maasai Mara, Kenya.jpg", "Daniel Case", "CC BY-SA 4.0"], "nai_sunrise": ["Masai Mara at Sunset.jpg", "Danijel Mihajlovic", "CC BY-SA 4.0"], "gen_toast": ["Offering a toast with sparkling wine flutes.jpg", "Fabrizio Sciami", "CC BY-SA 2.0"], "gen_sails": ["Traditional sailboat Croatia.jpg", "Ivan Matic", "CC BY-SA 2.0"], "gen_terrace": ["Kathmandu rooftops at sunset (8562532486).jpg", "calflier001", "CC BY-SA 2.0"], "gen_pool": ["Swimming Pool of Lembongan Cliff Villas - 2015.03 - panoramio.jpg", "rheins", "CC BY 3.0"], "gen_candles": ["Wigilia potrawy 554.jpg", "Przykuta", "CC BY-SA 3.0"], "gen_silhouettes": ["Sunset Agta Beach Resort - Biliran Philippines.jpg", "Leodb", "CC BY-SA 3.0"], "gen_pier": ["Tanjung Aru beach sunset view.jpg", "Cerevisae", "CC BY-SA 4.0"], "gen_lamp": ["A cozy rooftop table lit by a warm lamp, Pattaya.jpg", "PattayaPatrol", "CC BY-SA 4.0"]};
const META = {
  lisbon:{band:"#9AA67C", tan:"#DFC8B7", country:"Portugal", region:"Europa", tags:["wine","coast","city"],
    notice:"Für die Weinberg-Woche im Mai 2027 kann man sich jetzt bewerben.",
    hero:"lis_tagus", heroAlt:"Sonnenuntergang über dem Tejo in Lissabon",
    days:["lis_vines","lis_horses","gen_candles","lis_beach","lis_sunset","lis_tagus","gen_lamp","gen_toast"],
    tagline:"Entspannt in den Reben, ehrgeizig in der Küche, sonnengebräunt an der Küste",
    copy:"Zwei Nächte auf einem Weingut in Azeitão, eine Villa in den Hügeln von Sintra, die Strände von Comporta und eine letzte Nacht über Lissabon. Sechzehn Mitglieder, ein Gastgeber und eine Woche, die gemacht ist, um sich wirklich kennenzulernen.",
    bullets:["16 Mitglieder, 8 Frauen und 8 Männer","7 Nächte in 4 Unterkünften","Fünf Abenteuer-Dates am zweiten Tag","Die Geheimrezept-Challenge","Vertrauliches Feedback nach jedem Date","40 Minuten vom Flughafen Lissabon"],
    pace:{h:"Fünf erste Dates", img:"lis_horses", alt:"Reiter auf Lusitano-Pferden", p:"Am zweiten Tag werden die Paare ausgelost, und jedes bricht zu einem anderen Date auf, Mittagessen inklusive. Danach beantwortet jeder drei vertrauliche Fragen für den Gastgeber.", list:"days.1.f.list"},
    story:{img:"lis_grapes", alt:"Reife Trauben am Rebstock", p1:"Am dritten Tag zieht die Gruppe in eine private Villa in den Hügeln von Sintra, und das Mittagessen wird zum Spiel. Fünf Paare, ein Rezept, und niemand hat den vollen Überblick.", ol:"days.2.f.ol"},
    exp:{a:["Die Karten","gen_toast","Ein Toast beim Abendessen","Fragen, die im Lauf der Woche persönlicher werden, vom Willkommensessen bis zum letzten Abend.","#cards","So funktionieren die Karten"], b:["Comporta","lis_beach","Der lange Strand von Comporta","Zwei Nächte an der Küste: Reisfelder, Störche und kilometerlange Strände. Hier beginnen die Date Picks.","#lisbon","Das Programm","program"]},
    celeb:{a:["Die Enthüllung","gen_lamp","Ein Tisch auf einer Dachterrasse bei Nacht","Am letzten Abend die vertrauliche Wahl, romantisch und freundschaftlich. Bekannt gegeben werden nur gegenseitige Matches, auf einer Dachterrasse über dem Fluss."], b:["Erstes echtes Date","lis_sunset","Sonnenuntergang am Tejo","Am letzten Morgen frühstücken die Paare zu zweit in einer Pastelaria."]},
    summary:{Stays:["Weingut in Azeitão, 2 Nächte","Private Villa in den Hügeln von Sintra, 1 Nacht","Strandhaus in Comporta, 2 Nächte","Boutique-Hotel in Lissabon, 2 Nächte"],Dining:["Abendessen zwischen den Reben","Weingutsführung und Verkostung","Fado-Abendessen in der Alfama","Meeresfrüchte im Dorf Comporta"],Included:["Einzelzimmer mit eigenem Schlüssel","Alle Transfers ab Flughafen Lissabon","Alle Dates und Aktivitäten","Ihr Gastgeber und die Kartendecks"],"Die Gruppe":["16 Mitglieder, 26–38 Jahre","8 Frauen und 8 Männer","Saison auf Englisch oder Russisch"],"Anreise":["Flug nach Lissabon (LIS)","Abholung an Tag 1 um 15:00 Uhr","Rückfahrt an Tag 8 bis 12:00 Uhr"]}},
  rio:{band:"#9E483F", dark:true, country:"Brasilien", region:"Südamerika", tags:["coast","city"],
    notice:"Die Love Week startet im März 2027, nach dem Karneval.",
    hero:"rio_sugarloaf", heroAlt:"Der Zuckerhut bei Sonnenaufgang",
    days:["rio_santateresa","rio_beachlife","rio_ipanema","rio_bay","rio_islands","rio_arpoador","rio_sunset","gen_toast"],
    tagline:"Beachsport, Samba und eine Enthüllung bei Sonnenuntergang über Ipanema",
    copy:"Eine Woche von einer Villa in Santa Teresa aus: gemischte Teams in Ipanema, der Zuckerhut per Boot, ein Schonertag in der Bucht und die Enthüllung bei Sonnenuntergang auf einer Dachterrasse am Arpoador.",
    bullets:["16 Mitglieder, 8 Frauen und 8 Männer","7 Nächte in einer Villa","Footvolley, Surfen und Samba","Tag auf dem privaten Schoner","Zwei Runden Date Picks","40 Minuten vom Flughafen Rio"],
    pace:{h:"Erste Dates in Rio", img:"rio_beachlife", alt:"Der Strand von Ipanema an einem strahlenden Tag", p:"Die Paare verteilen sich auf Surfstunde, Wanderung im Tijuca-Wald, Drachenfliegen in São Conrado oder einen Kochkurs. Danach drei vertrauliche Fragen für den Gastgeber."},
    story:{img:"rio_islands", alt:"Die Insel Paquetá in der Guanabara-Bucht", p1:"Tag fünf verbringen Sie auf einem privaten Schoner rund um die Inseln der Guanabara-Bucht. Baden, an Deck essen, und am Abend beginnt die zweite Runde Date Picks.", p2:"Die Wahl bleibt vertraulich. Wer nicht gewählt wurde, bekommt ein vom Gastgeber organisiertes Abendessen. Niemand isst allein."},
    exp:{a:["Die Karten","gen_toast","Ein Toast beim Abendessen","Fragen, die im Lauf der Woche persönlicher werden, vom Willkommensessen bis zum letzten Abend.","#cards","So funktionieren die Karten"], b:["Ipanema","rio_ipanema","Ipanema bei Sonnenuntergang","Footvolley in gemischten Teams mit Trainer, danach der schönste Sonnenuntergang der Stadt vom Strand aus.","#rio","Das Programm","program"]},
    celeb:{a:["Die Enthüllung","rio_arpoador","Zuschauer beim Sonnenuntergang am Arpoador","Vertrauliche Wahl, romantisch und freundschaftlich. Bekannt gegeben werden nur gegenseitige Matches, bei Sonnenuntergang auf einer Dachterrasse am Arpoador."], b:["Erstes echtes Date","rio_sunset","Die Sonne geht hinter den Dois Irmãos unter","Am letzten Morgen frühstücken die Paare zu zweit."]},
    summary:{Stays:["Boutique-Villa in Santa Teresa oder Ipanema, 7 Nächte"],Dining:["Willkommensessen auf einer Dachterrasse","Caipirinha-Masterclass","Acht Restaurants für die Date Picks","Abschiedsparty am Arpoador"],Included:["Einzelzimmer mit eigenem Schlüssel","Alle Transfers","Alle Dates und Aktivitäten","Ihr Gastgeber und die Kartendecks"],"Die Gruppe":["16 Mitglieder, 26–38 Jahre","8 Frauen und 8 Männer"],"Anreise":["Flug nach Rio (GIG)","Prüfen Sie die Einreisebestimmungen für Ihren Pass"]}},
  bali:{band:"#8590A3", country:"Indonesien", region:"Asien", tags:["coast","wellness"],
    notice:"Für die Insel-Woche im Juni 2027 kann man sich jetzt bewerben.",
    hero:"bal_terraces", heroAlt:"Reisterrassen in Tegallalang",
    days:["bal_terraces2","gen_candles","bal_waterfall","bal_cliff","bal_lembongan","gen_pool","bal_temple","gen_toast"],
    tagline:"Erst Reisterrassen, dann Sonnenuntergänge an den Klippen",
    copy:"Drei Nächte in einer Dschungelvilla in Ubud und vier auf den Klippen von Uluwatu. Wasserfälle, eine Markt-Challenge, Mantarochen vor Lembongan und die Enthüllung an der Klippenkante.",
    bullets:["16 Mitglieder, 8 Frauen und 8 Männer","7 Nächte in 2 Villen","Die Markt-Staffel von Ubud","Schnorchelboot nach Nusa Lembongan","Kecak-Feuertanz in Uluwatu","90 Minuten vom Flughafen Denpasar"],
    pace:{h:"Erste Dates auf Bali", img:"bal_waterfall", alt:"Ein Wasserfall im balinesischen Dschungel", p:"Die Paare werden ausgelost: Rafting, Wasserfallwanderung, Silberschmuck-Kurs, die Schaukel von Tegallalang oder ein Tempelspaziergang. Danach drei vertrauliche Fragen für den Gastgeber."},
    story:{img:"bal_terraces2", alt:"Grüne Reisterrassen", p1:"Balis Version der Geheimrezept-Challenge findet auf dem Markt von Ubud statt. Fünf Paare, ein balinesischer Koch und ein Mittagessen, das die ganze Gruppe gemeinsam schaffen muss.", p2:"In der Nachbesprechung am Abend geht es darum, wie das Team ans Ziel kam, nie darum, wer sich geirrt hat."},
    exp:{a:["Die Karten","bal_kecak2","Kecak-Tänzer im Feuerschein","Fragen, die im Lauf der Woche persönlicher werden, vom Willkommensessen bis zum letzten Abend.","#cards","So funktionieren die Karten"], b:["Nusa Lembongan","bal_lembongan","Klares Wasser vor Nusa Lembongan","Ein Tag im Speedboot zum Schnorcheln mit Mantarochen und Mittagessen am Strand.","#bali","Das Programm","program"]},
    celeb:{a:["Die Enthüllung","bal_kecak","Der Feuerkreis des Kecak bei Sonnenuntergang","Vertrauliche Wahl, romantisch und freundschaftlich. Bekannt gegeben werden nur gegenseitige Matches, bei Sonnenuntergang an der Klippenkante."], b:["Erstes echtes Date","bal_cliff","Die Klippen von Uluwatu","Am letzten Morgen frühstücken die Paare zu zweit."]},
    summary:{Stays:["Dschungelvilla in Ubud, 3 Nächte","Klippenvilla in Uluwatu, 4 Nächte"],Dining:["Abendessen in den Reisfeldern","Mittagessen der Markt-Staffel","Meeresfrüchte am Strand von Jimbaran"],Included:["Einzelzimmer mit eigenem Schlüssel","Alle Transfers","Alle Dates und Aktivitäten","Ihr Gastgeber und die Kartendecks"],"Die Gruppe":["16 Mitglieder, 26–38 Jahre","8 Frauen und 8 Männer"],"Anreise":["Flug nach Denpasar (DPS)","Prüfen Sie die Visabestimmungen für Ihren Pass"]}},
  nairobi:{band:"#DFC8B7", country:"Kenia", region:"Afrika", tags:["wild"],
    notice:"Die Safari-Woche startet im September 2027, zur Zeit der Migration.",
    hero:"nai_balloon", heroAlt:"Ein Heißluftballon über der Masai Mara",
    days:["nai_giraffe","nai_jeeps","nai_sunrise","nai_balloons","nai_crossing","nai_naivasha","nai_acacia","gen_toast"],
    tagline:"Geteilte Jeeps, Ballon im Morgengrauen und Abendessen am Feuer",
    copy:"Eine Nacht in Nairobi, drei in einem Zeltcamp in der Masai Mara zur Zeit der Migration und zwei am Naivashasee. Kleine Camps, frühe Morgen und kein Entkommen vor einem guten Gespräch.",
    bullets:["12–16 Mitglieder","7 Nächte in 3 Unterkünften","Mit dem Kleinflugzeug in die Mara","Heißluftballon im Morgengrauen","Dinner zu zweit im Busch","Flussüberquerungen der Migration am Mara"],
    pace:{h:"Erste Dates auf Safari", img:"nai_jeeps", alt:"Safarifahrzeuge in den Ebenen der Mara", p:"In der Mara ist der Jeep das Date. Die Paare brechen im Morgengrauen mit einem Guide auf und beantworten danach drei vertrauliche Fragen für den Gastgeber. Die Paare wechseln bei jeder Pirschfahrt bis Tag fünf."},
    story:{img:"nai_balloons", alt:"Zwei Ballone über dem Grasland", p1:"An Tag vier schwebt die Gruppe im Morgengrauen im Heißluftballon über die Ebenen und landet zum Frühstück im Busch.", p2:"Am Nachmittag verlegt die Camp-Küchen-Challenge das Rezeptspiel ans offene Feuer, zusammen mit den Köchen des Camps."},
    exp:{a:["Die Karten","gen_candles","Abendessen bei Kerzenlicht","Fragen, die im Lauf der Woche persönlicher werden, vom Willkommensessen bis zum letzten Abend.","#cards","So funktionieren die Karten"], b:["Der Mara-Fluss","nai_crossing","Gnus überqueren den Mara-Fluss","Ein ganzer Tag am Fluss für die Überquerungen der Migration, mit Picknick.","#nairobi","Das Programm","program"]},
    celeb:{a:["Die Enthüllung","nai_acacia","Eine Akazie vor der untergehenden Sonne","Vertrauliche Wahl, romantisch und freundschaftlich. Bekannt gegeben werden nur gegenseitige Matches, beim Sundowner am See."], b:["Erstes echtes Date","nai_sunrise","Sonnenuntergang über der Mara","Die Paare frühstücken zu zweit, bevor es auf der Straße zurück nach Nairobi geht."]},
    summary:{Stays:["Gartenhotel in Karen, Nairobi, 1 Nacht","Zeltcamp in der Masai Mara, 4 Nächte","Lodge am Naivashasee, 2 Nächte"],Dining:["Frühstück im Busch nach dem Ballon","Dinner zu zweit im Busch","Abendessen am Lagerfeuer im Camp"],Included:["Einzelzelt oder Einzelzimmer","Flüge mit dem Kleinflugzeug","Parkgebühren und Pirschfahrten","Ihr Gastgeber und die Kartendecks"],"Die Gruppe":["12–16 Mitglieder, 28–40 Jahre"],"Anreise":["Flug nach Nairobi (NBO)","Kenianische eTA erforderlich"]}}
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
    sub.innerHTML = `<span class="pn"><span>${esc(t.city)}</span></span><span class="links"><a href="#${view}" data-jump="program">Das Programm</a><a href="#${view}" data-jump="dates">Erste Dates</a><a href="#${view}" data-jump="story">Die Challenge</a><a href="#${view}" data-jump="scene">Die Karten</a><a href="#${view}" data-jump="reveal">Die Enthüllung</a><a href="#${view}" data-jump="summary">Die Reise</a><a href="#dates-${view}">Termine &amp; Preise</a><a href="#apply-${view}">Bewerben</a></span>`;
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
    ${ph("rio_sunset","Sonnenuntergang über dem Strand am Arpoador, Rio de Janeiro", "", true)}
    <div class="mark">Tringles</div>
    <button class="pill white" type="button" data-finder="1">Reiseziele <span aria-hidden="true">⌃</span></button>
  </section>
  <section class="welcome"><div class="g"><div class="t"><h1>Willkommen bei Tringles</h1><p>Überspringen Sie das erste Date und gehen Sie auf Reisen. Sieben Nächte für sechzehn Singles, mit einem Gastgeber, einem Kartendeck und einigen der romantischsten Orte der Welt.</p></div></div></section>
  <section class="bigband" aria-label="Erstes Date überspringen">
    ${ph("rio_bay","Letztes Licht auf dem Zuckerhut, Rio de Janeiro")}
    <div class="words"><div class="top"><span class="h">Vergessen Sie das erste Date,</span></div><div class="bot"><span class="h">gehen Sie auf Reisen.</span><a class="tag-link on-photo" href="#how">Entdecken ${ext}</a></div></div>
  </section>
  <section class="world"><div class="wrap">
    <h2>Entdecken Sie unsere Welt</h2>
    <div class="rail" id="railWorld">
      ${ORDER.map(k => `<a class="wcard" href="#${k}">${ph(META[k].hero, META[k].heroAlt, "r")}<h3>${esc(TRIPS[k].city)}</h3></a>`).join("")}
      <a class="wcard" href="#cards">${ph("gen_toast","Ein Toast beim Abendessen","r")}<h3>Die Karten</h3></a>
      <a class="wcard" href="#journal">${ph("gen_sails","Unter Segeln","r")}<h3>Journal</h3></a>
    </div>
    <div class="arrows"><button type="button" data-rail="railWorld" data-d="-1" aria-label="Zurück">‹</button><button type="button" data-rail="railWorld" data-d="1" aria-label="Weiter">›</button></div>
  </div></section>
  ${homeCards()}
  <section class="bigband" aria-label="Die Enthüllung">
    ${ph("gen_pier","Menschen auf einem Steg bei Sonnenuntergang")}
    <div class="words"><div class="top"><span class="eyebrow">Die Enthüllung</span><span class="h">Machen Sie aus einer Woche Auszeit</span></div><div class="bot"><span class="h">eine Liebesgeschichte</span><a class="tag-link on-photo" href="#how">Entdecken ${ext}</a></div></div>
  </section>`;
}
function wireHome(){}

/* ---------- finder dialog ---------- */
let fstate = {f:"all", q:"", open:{}};
const FTABS = [["all","Alle"],["coast","Küste"],["wine","Wein"],["wild","Wildnis"],["city","Stadt"],["wellness","Wellness"]];
function renderFinder(){
  $("#ftabs").innerHTML = FTABS.map(([v,l])=>`<button type="button" data-f="${v}" aria-pressed="${fstate.f===v}">${l}</button>`).join("");
  const q = fstate.q.toLowerCase();
  const keys = ORDER.filter(k => (fstate.f==="all" || META[k].tags.includes(fstate.f)) && (!q || [TRIPS[k].city,TRIPS[k].name,META[k].country,META[k].region].join(" ").toLowerCase().includes(q)));
  const regions = [...new Set(keys.map(k=>META[k].region))];
  $("#flist").innerHTML = regions.length ? regions.map((r,i) => { const open = fstate.open[r] !== false; return `
    <div class="fgroup"><button type="button" data-r="${esc(r)}" aria-expanded="${open}"><span class="n">${String(i+1).padStart(2,"0")}</span><span class="g2">${esc(r)}</span><span aria-hidden="true">${open?"−":"+"}</span></button>
    ${open ? keys.filter(k=>META[k].region===r).map(k => `<a class="frow" href="#${k}">${ph(META[k].hero, META[k].heroAlt)}<span><strong>${esc(TRIPS[k].city)}</strong><small>${esc(TRIPS[k].name)} · ${esc(META[k].country)}</small></span><span class="tag">${TRIPS[k].nights} Nächte · Ab ${TRIPS[k].price}</span></a>`).join("") : ""}</div>`; }).join("")
    : `<p class="fempty">Noch keine passende Reise.</p>`;
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
    <article class="dcard">${ph(m.days[(i+1) % m.days.length], d.t, "r")}<p class="card-name">Tag ${i+2} · ${esc(d.t)}</p>${kv(d, i+1)}</article>`).join("");
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
    <p class="eyebrow bl">Das Programm</p>
    <div class="bt"><h2>Sieben Nächte, Tag für Tag</h2><p>${esc(t.intro)}</p><a class="tag-link" href="#dates-${k}">Termine &amp; Preise ${ext}</a></div>
    <article class="feat">${ph(m.days[0], d0.t, "r")}<p class="card-name">Tag 1 · ${esc(d0.t)}</p>${kv(d0, 0)}</article>
  </div></section>
  <section class="drail-wrap"><div class="wrap">
    <div class="drail" id="drail">${rest}</div>
    <div class="arrows"><button type="button" data-rail="drail" data-d="-1" aria-label="Vorheriger Tag">‹</button><button type="button" data-rail="drail" data-d="1" aria-label="Nächster Tag">›</button></div>
  </div></section>
  ${sceneSection(k)}
  <section class="pace" id="dates"><div class="g">
    <h2>${esc(m.pace.h)}</h2>
    ${ph(m.pace.img, m.pace.alt)}
    <div class="txt"><p>${esc(m.pace.p)}</p>${featList?`<ol>${featList.map(x=>`<li>${esc(x)}</li>`).join("")}</ol>`:""}<a class="tag-link light" href="#cards">Die vertraulichen Feedback-Fragen ${ext}</a></div>
  </div></section>
  <section class="storyb" id="story"><div class="g">
    ${ph(m.story.img, m.story.alt)}
    <div class="txt"><p>${esc(m.story.p1)}</p>${storyOl?`<ol>${storyOl.map(x=>`<li>${esc(x)}</li>`).join("")}</ol>`:""}${m.story.p2?`<p>${esc(m.story.p2)}</p>`:""}<a class="tag-link light" href="#how">So läuft die Woche ab ${ext}</a></div>
  </div></section>
  <section class="expw" id="more"><div class="g">
    ${[["c1",m.exp.a],["c2",m.exp.b]].map(([c,e])=>`<div class="${c}"><h2>${esc(e[0])}</h2>${ph(e[1], e[2])}<p>${esc(e[3])}</p><a class="tag-link light" href="${e[4]}"${e[6]?` data-jump="${e[6]}"`:""}>${esc(e[5])} ${ext}</a></div>`).join("")}
  </div></section>
  <section class="celeb" id="reveal"><div class="g">
    <div class="t"><h2>Der letzte Abend</h2><p>Die Wahl bleibt vertraulich, und niemand wird nach Hause geschickt. Die Woche endet mit der Enthüllung und, für die Paare, einem ersten echten Date.</p><a class="tag-link" href="#how">So funktioniert’s ${ext}</a></div>
    <div class="a"><h3>${esc(m.celeb.a[0])}</h3>${ph(m.celeb.a[1], m.celeb.a[2])}<p>${esc(m.celeb.a[3])}</p></div>
    <div class="b"><h3>${esc(m.celeb.b[0])}</h3>${ph(m.celeb.b[1], m.celeb.b[2])}<p>${esc(m.celeb.b[3])}</p></div>
  </div></section>
  <section class="facts" id="summary"><div class="g">
    <h2>Die Reise</h2>
    <div class="rows">
      <div class="frow2"><h3>Preis</h3><ul class="dash"><li>Ab ${t.price} pro Person</li><li>Ohne Flüge, Einzelzimmer</li><li>Eine Anzahlung von 500 € sichert Ihren Platz</li></ul></div>
      ${Object.entries(m.summary).map(([h,list])=>`<div class="frow2"><h3>${esc(h)}</h3><ul class="dash">${list.map(x=>`<li>${esc(x)}</li>`).join("")}</ul></div>`).join("")}
      <div class="frow2"><h3>Bewerben</h3><div><a class="pill outline" href="#apply-${k}">Bewerben für ${esc(t.city)}</a></div></div>
    </div>
  </div></section>`;
}
function wireTrip(){}

/* ---------- HOW IT WORKS ---------- */
function how(){
  return `
  <section class="ptitle"><div class="wrap in"><span class="mono">Der Club</span><h1>So funktioniert’s</h1><p>Sieben Nächte, sechzehn Mitglieder, drei Akte</p></div></section>
  <section class="pmedia"><div class="wrap">${ph("gen_sails","Ein traditionelles Segelboot unter Segeln")}</div></section>
  <section class="intro"><div class="g">
    <div class="l"><h2>Eine Dating-Show ohne Grausamkeit</h2><p>Jede Reise läuft wie eine Staffel in drei Akten, mit einem Gastgeber, der das Tempo vorgibt. Tag 1 bis 3 dienen dem Kennenlernen, Tag 4 und 5 der Wahl, und Tag 6 und 7 enden mit der Enthüllung.</p></div>
    <ul class="dash r"><li>Niemand wird nach Hause geschickt</li><li>Jede Karte, jedes Spiel, jedes Date darf man auslassen</li><li>Vertrauliches Feedback nach jedem Date</li><li>Die Wahl bleibt vertraulich, nur gegenseitige Matches werden enthüllt</li><li>Die Paare haben am letzten Morgen ein erstes echtes Date</li></ul>
  </div></section>
  <section class="storyb"><div class="g">
    ${ph("gen_lamp","Ein Tisch für zwei nach Einbruch der Dunkelheit")}
    <div class="txt"><p>Mischen. Ein Willkommensessen, Vorstellungskarten und eine Team-Challenge. Zufällige Paare bei jeder Aktivität, damit sich keine Grüppchen bilden.</p><p>Wählen. Erste Dates zu Pferd, im Boot und im Buggy, dann die Date Picks: Sie wählen, mit wem Sie zu Abend essen. Wer nicht gewählt wurde, bekommt ein vom Gastgeber organisiertes Abendessen.</p><p>Sich festlegen. Freie Zeit mit wem Sie möchten, die vertrauliche Wahl und die Enthüllung bei Sonnenuntergang.</p><a class="tag-link light" href="#cards">Die Karten ${ext}</a></div>
  </div></section>
  ${cardsHow()}
  <section class="facts" id="safety"><div class="g">
    <h2>Sicherheit &amp; Verhalten</h2>
    <div class="rows">
      <div class="frow2"><h3>Vor der Reise</h3><ul class="dash"><li>Bewerbung und Gespräch mit Ihrem Gastgeber</li><li>Identitätsprüfung</li><li>Unterschriebener Verhaltenskodex</li></ul></div>
      <div class="frow2"><h3>Auf der Reise</h3><ul class="dash"><li>Einzelzimmer mit eigenem Schlüssel</li><li>Ein geschulter Gastgeber, der jeden ausschließen darf</li><li>Kein Spiel hat mit Alkohol zu tun</li><li>Lizenzierte Transfers nach dem Ausgehen</li></ul></div>
      <div class="frow2"><h3>Kameras</h3><ul class="dash"><li>Nur bei Staffeln, die als gefilmt gekennzeichnet sind</li><li>Nur mit unterschriebener Einverständniserklärung</li><li>Nie bei privaten Dates</li></ul></div>
      <div class="frow2"><h3>Mehr erfahren</h3><div><a class="tag-link light" href="#conduct">Verhaltenskodex ${ext}</a></div></div>
    </div>
  </div></section>`;
}

/* ---------- IMAGE CREDITS ---------- */
function credits(){
  const items = Object.entries(CREDITS).map(([k,[t,a,l]]) => `<li><a href="https://commons.wikimedia.org/wiki/File:${encodeURIComponent(t.replace(/ /g,"_"))}" target="_blank" rel="noopener">${esc(t.replace(/\.(jpe?g|tif|JPG)$/,""))}</a> · ${esc(a)} · ${esc(l)}</li>`).join("");
  return `<section class="ptitle"><div class="wrap in"><span class="mono">Rechtliches</span><h1>Bildnachweise</h1><p>Alle Fotos stammen von Wikimedia Commons und werden gemäß ihren Lizenzen verwendet</p></div></section>
  <section class="summary"><div class="wrap"><ul class="credits">${items}</ul><p class="note">Die Fotos wurden verkleinert und zugeschnitten. Lizenzen: CC0, CC BY und CC BY-SA (Versionen wie angegeben). Die abgebildeten Personen sind keine Tringles-Mitglieder.</p></div></section>`;
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
  today:["Heute","Morgen","Der versiegelte Umschlag Ihres Gastgebers: das Paar des Tages, eine kleine Mission, was Sie mitbringen sollten."],
  spark:["Spark","Tagsüber","Taschenkarten für das Boot, die Wanderung oder die Fahrt. Freiwillig, und jede darf man auslassen."],
  table:["Tisch","Abendessen","Eine Frage oder ein Spiel pro Tisch. Die Plätze wechseln jeden Abend."],
  private:["Vertraulich","Später Abend","Drei Fragen nur für den Gastgeber. Die Antworten prägen die Paare des nächsten Tages."],
  deep:["Deep","Ein Abend","Die Lange Tafel. Inspiriert von Arthur Arons 36 Fragen, einmal, an einem Abend."],
  power:["Power","Bei der Wahl","Jede einmal einsetzbar, während der Tage der Wahl. Den heiklen Teil übernimmt Ihr Gastgeber."]
};
const KORDER = ["today","spark","table","private","deep","power"];
const PRIV_B = "Haben Sie sich mit dieser Person wohlgefühlt? Was hat Ihnen am besten gefallen? Möchten Sie mehr Zeit mit ihr verbringen?";
const PRIV_N = "Nur Ihr Gastgeber liest sie. Niemand sieht Ihre Antworten.";
const DEEP_N = "Inspiriert von Arthur Arons 36 Fragen. Jede Frage und auch den Blickkontakt dürfen Sie auslassen.";

const CARDS = {
  lisbon:[
    {id:"lis-t1",k:"today",d:2,t:"Schuhe, die schmutzig werden dürfen",b:"Ihr Date des Tages steht auf der Rückseite dieser Karte. Fünf Dates laufen gleichzeitig, und niemand weiß, wer welches hat, bis die Autos losfahren. Hausregel bis zum Mittagessen: kein Wort über die Arbeit."},
    {id:"lis-t2",k:"today",d:3,t:"Sie haben nur ein Teil",b:"Das Mittagessen ist ein Teamspiel, und Ihre Rolle steht auf der Rückseite: Rezepthüter, Listenschreiber, Einkäufer, Budgethüter oder Koch. Zeigen Sie sie niemandem. Die Küche öffnet um zwölf."},
    {id:"lis-s1",k:"spark",d:2,t:"Die Frage, der Sie ausweichen würden",b:"Stellen Sie bei Ihrem Date die Frage, die Sie selbst am wenigsten gestellt bekommen möchten. Und beantworten Sie sie zuerst."},
    {id:"lis-s2",k:"spark",d:3,t:"Fliesen und Geschichten",b:"Suchen Sie auf dem Weg in die Alfama ein Azulejo-Bild, das Ihnen beiden gefällt. Jeder erfindet in zwei Sätzen die Geschichte, die es erzählt. Wählen Sie einen Sieger. Wer verliert, wählt die Playlist für morgen."},
    {id:"lis-s3",k:"spark",d:6,t:"Tram 28",b:"Keiner von Ihnen darf die nächste Haltestelle wählen. An jeder Ecke wird eine Münze geworfen: Kopf, Sie entscheiden; Zahl, Ihr Gegenüber. Wer den letzten Wurf verliert, zahlt die Pastéis de Nata."},
    {id:"lis-tb1",k:"table",d:1,t:"Die lange Tafel",b:"Nennen Sie Ihren Namen, etwas, worauf Sie sich diese Woche freuen, und etwas, das Sie nervös macht. Ihr Gastgeber beginnt, dann geht es nach links weiter."},
    {id:"lis-tb2",k:"table",d:4,t:"Tauschen Sie eine Frage",b:"Bevor die Vorspeisen kommen, schreiben Sie eine Frage auf, die Sie noch nie einem Fremden gestellt haben. Tauschen Sie sie mit Ihrem Tischpartner. Beantworten Sie seine oder lassen Sie Ihre aus."},
    {id:"lis-tb3",k:"table",d:7,t:"Eine Sache für zu Hause",b:"An der Abschiedstafel nennt jeder eine Sache, die er aus dieser Woche mitnimmt. Eine Person, ein Ort oder ein Gericht."},
    {id:"lis-pv",k:"private",d:2,t:"Drei Fragen",b:PRIV_B,n:PRIV_N},
    {id:"lis-dp",k:"deep",d:5,t:"Die Lange Tafel",b:"Nach dem Date-Picks-Dinner wird es still im Haus. Drei Runden à fünfzehn Minuten, eine Kerze auf jedem Tisch und in jeder Runde ein neues Gegenüber. Runde eins ist leicht und verspielt, Runde zwei wird persönlich, Runde drei dreht sich um Sie beide. Wenn Sie beide möchten, enden Sie mit vier Minuten Blickkontakt, ohne zu sprechen.",n:DEEP_N},
    {id:"lis-pw",k:"power",d:4,t:"Tausch",b:"Einmal in dieser Woche können Sie Ihren Gastgeber bitten, Sie für die nächste Aktivität einem anderen Paar zuzuteilen. Setzen Sie sie diskret ein. Niemand erfährt, wer sie genutzt hat."}
  ],
  rio:[
    {id:"rio-t1",k:"today",d:2,t:"Die Teams stehen auf der Rückseite",b:"Der Tag beginnt im Sand: Footvolley in gemischten Teams mit einem gnadenlosen Trainer. Erst Sonnencreme. Wer den Ball fallen lässt, wählt die Musik zum Mittagessen."},
    {id:"rio-t2",k:"today",d:3,t:"Ausgelost, nicht gewählt",b:"Eine Surfstunde, eine Waldwanderung, ein Drachenflug oder ein Kochkurs. Sie erfahren es unterwegs, und Ihr Date steht auf der Rückseite. Sagen Sie zum Ersten Ja und erzählen Sie Ihrem Gastgeber danach, was Sie wieder machen würden."},
    {id:"rio-s1",k:"spark",d:2,t:"Bring mir einen Schritt bei",b:"Bringen Sie Ihrem Gegenüber einen Tanzschritt aus Ihrer Heimat bei. Es zeigt Ihnen im Gegenzug einen. Der Sambakurs heute Abend zeigt, wer geübt hat."},
    {id:"rio-s2",k:"spark",d:4,t:"Seilbahn, ohne Handy",b:"Beide Handys kommen für die Fahrt auf den Zuckerhut in eine Tasche. Wer zuerst danach greift, schuldet dem anderen eine Kokosnuss."},
    {id:"rio-s3",k:"spark",d:6,t:"Menü für zwei",b:"Jeder ordnet heimlich drei Ausflüge aus dem vorgebuchten Menü. Gleichzeitig aufdecken. Die erste Übereinstimmung gewinnt, gibt es keine, entscheidet eine Münze."},
    {id:"rio-tb1",k:"table",d:1,t:"Willkommen auf der Dachterrasse",b:"Nennen Sie Ihren Namen und das Spontanste, das Sie je getan haben. Die Gruppe stimmt per Applaus über die beste Geschichte ab. Wer gewinnt, wählt den ersten Song."},
    {id:"rio-tb2",k:"table",d:4,t:"Die Geschichte eines Andenkens",b:"Erzählen Sie Ihrem Tischpartner die Geschichte eines Gegenstands, den Sie aus einem Feuer retten würden. Dann hören Sie seiner zu, ohne sie übertrumpfen zu wollen."},
    {id:"rio-tb3",k:"table",d:7,t:"Eine Sache für zu Hause",b:"Auf der Party am Arpoador nennt jeder eine Sache, die er aus dieser Woche mitnimmt. Eine Person, ein Ort oder eine Caipirinha – alles zählt."},
    {id:"rio-pv",k:"private",d:3,t:"Drei Fragen",b:PRIV_B,n:PRIV_N},
    {id:"rio-dp",k:"deep",d:5,t:"Die Lange Tafel",b:"Nach der zweiten Runde Date Picks wird es still in der Villa. Drei Runden à fünfzehn Minuten, eine Kerze auf jedem Tisch und in jeder Runde ein neues Gegenüber. Runde eins ist leicht und verspielt, Runde zwei wird persönlich, Runde drei dreht sich um Sie beide. Wenn Sie beide möchten, enden Sie mit vier Minuten Blickkontakt, ohne zu sprechen.",n:DEEP_N},
    {id:"rio-pw",k:"power",d:4,t:"Tisch wechseln",b:"Einmal in dieser Woche können Sie Ihren Gastgeber bitten, Sie bei den Date Picks am Abend an einen anderen Tisch zu setzen. Den heiklen Teil übernimmt er, und Ihr ursprüngliches Gegenüber bekommt seine Gesellschaft."}
  ],
  bali:[
    {id:"bal-t1",k:"today",d:2,t:"Mit dem Rad bergab",b:"Fahren Sie mit Ihrem Gegenüber durch die Reisterrassen bergab. Wer zuerst am Markt ist, wählt die erste Zutat. Früh bremsen."},
    {id:"bal-t2",k:"today",d:3,t:"Fünf Dates, ein Dschungel",b:"Rafting, ein Wasserfall, Silberschmieden, die Schaukel oder ein Tempelspaziergang. Ihr Date und Ihr Plan stehen auf der Rückseite. Nicht in fremde Karten schauen, und eine Jacke mitnehmen."},
    {id:"bal-s1",k:"spark",d:3,t:"Die Bildunterschrift",b:"An der Schaukel macht Ihr Date das Foto, und Sie schreiben die Bildunterschrift. Sie muss stimmen."},
    {id:"bal-s2",k:"spark",d:3,t:"Unter dem Wasser",b:"Am Wasserfall sagt jeder eine Sache, die er dieses Jahr loslässt. Laut, über das Rauschen hinweg, keine Wiederholungen."},
    {id:"bal-s3",k:"spark",d:6,t:"Die Roller-Regel",b:"Bei einer Rollerfahrt mit Fahrer wählt der Beifahrer das Ziel und der Fahrer den Snack."},
    {id:"bal-tb1",k:"table",d:1,t:"Abendessen in den Reisfeldern",b:"Wenn Sie für diese Woche ein „Bitte nicht stören“-Schild hätten, was stünde darauf? Schreiben Sie es auf die Karte und lesen Sie es vor. Die anderen raten, wer was geschrieben hat."},
    {id:"bal-tb2",k:"table",d:4,t:"Ein Klang",b:"Kecak sind hundert Stimmen und kein Instrument. Beim Abendessen macht jeder einen Laut, der seine bisherige Woche beschreibt. Der Tisch rät."},
    {id:"bal-tb3",k:"table",d:7,t:"Eine Sache für zu Hause",b:"Beim Meeresfrüchte-Dinner am Strand von Jimbaran nennt jeder eine Sache, die er aus dieser Woche mitnimmt."},
    {id:"bal-pv",k:"private",d:3,t:"Drei Fragen",b:PRIV_B,n:PRIV_N},
    {id:"bal-dp",k:"deep",d:5,t:"Die Lange Tafel",b:"Nach der zweiten Runde Date Picks wird es still in der Klippenvilla. Drei Runden à fünfzehn Minuten, eine Kerze auf jedem Tisch und in jeder Runde ein neues Gegenüber. Runde eins ist leicht und verspielt, Runde zwei wird persönlich, Runde drei dreht sich um Sie beide. Wenn Sie beide möchten, enden Sie mit vier Minuten Blickkontakt, ohne zu sprechen.",n:DEEP_N},
    {id:"bal-pw",k:"power",d:4,t:"Tausch",b:"Einmal in dieser Woche können Sie Ihren Gastgeber bitten, Sie für die nächste Aktivität einem anderen Paar zuzuteilen. Setzen Sie sie diskret ein. Niemand erfährt, wer sie genutzt hat."}
  ],
  nairobi:[
    {id:"nai-t1",k:"today",d:2,t:"Zu viert im Jeep",b:"Ihre erste Pirschfahrt, in gemischten Vierergruppen. Jeder ist dafür zuständig, etwas zu entdecken: ein Tier, einen Vogel, eine Spur oder ein Geräusch. Wer nichts findet, erzählt die beste Lüge darüber."},
    {id:"nai-t2",k:"today",d:4,t:"Vor der Sonne auf",b:"Der Ballon steigt im Morgengrauen auf. Halten Sie sich im Korb nur an den Händen, wenn Sie möchten – Ihren Hut aber auf jeden Fall. Das Frühstück wartet dort, wo Sie landen."},
    {id:"nai-s1",k:"spark",d:3,t:"Der Geländewagen ist das Date",b:"Ein Jeep ist ein kleiner Raum. In den ersten zwanzig Minuten dürfen Sie einander nur Fragen stellen, die mit „Was“ oder „Wann“ beginnen. Los geht’s."},
    {id:"nai-s2",k:"spark",d:1,t:"Giraffe Centre",b:"Füttern Sie gemeinsam eine Giraffe. Dann sagt jeder, was er dieses Jahr tun würde, wenn er keine Angst hätte, sich lächerlich zu machen."},
    {id:"nai-s3",k:"spark",d:6,t:"Wählen Sie das Tier",b:"Nennen Sie das Tier, das die Person neben Ihnen wäre, und erklären Sie, warum. Es muss freundlich sein, und es muss stimmen."},
    {id:"nai-tb1",k:"table",d:1,t:"Unter den Bäumen",b:"Nennen Sie beim Willkommensessen Ihren Namen und das Beste, was Sie je gegessen haben. Ihr Gastgeber beginnt und muss seine Wahl verteidigen."},
    {id:"nai-tb2",k:"table",d:4,t:"Dinner zu zweit im Busch",b:"Date Picks, Runde eins. Tauschen Sie mit Ihrem Gegenüber eine Regel aus, nach der Sie leben, und eine, die Sie kürzlich gebrochen haben. Das Feuer brennt, die Handys bleiben weg."},
    {id:"nai-tb3",k:"table",d:7,t:"Eine Sache für zu Hause",b:"Beim Abschiedsessen am See nennt jeder eine Sache, die er aus dieser Woche mitnimmt."},
    {id:"nai-pv",k:"private",d:3,t:"Drei Fragen",b:PRIV_B,n:PRIV_N},
    {id:"nai-dp",k:"deep",d:5,t:"Die Lange Tafel",b:"Nach der zweiten Runde Date Picks wird es still im Camp. Drei Runden à fünfzehn Minuten am Feuer, eine Laterne auf jedem Tisch und in jeder Runde ein neues Gegenüber. Runde eins ist leicht und verspielt, Runde zwei wird persönlich, Runde drei dreht sich um Sie beide. Wenn Sie beide möchten, enden Sie mit vier Minuten Blickkontakt, ohne zu sprechen.",n:DEEP_N},
    {id:"nai-pw",k:"power",d:4,t:"Jeep tauschen",b:"Einmal in dieser Woche können Sie Ihren Gastgeber bitten, Sie für die nächste Pirschfahrt in einen anderen Jeep zu setzen. Setzen Sie sie diskret ein. Niemand erfährt, wer sie genutzt hat."}
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
  lisbon:"Animierte Illustration von Lissabon: die Tram 28 am Kai unterhalb der Alfama, eine Flussbrücke, eine Azulejo-Wand und eine Laterne.",
  rio:"Animierte Illustration von Rio: der Zuckerhut mit Seilbahn, die Wellen von Ipanema und ein Footvolley-Netz, eine Dachterrasse mit Lichterketten.",
  bali:"Animierte Illustration von Bali: Reisterrassen, ein gespaltenes Tempeltor mit Laterne, eine Schaukel, ein Wasserfall und wiegende Palmen.",
  nairobi:"Animierte Illustration der Masai Mara: ein Heißluftballon, eine Akazie, eine Giraffe, ein Safari-Jeep und ein Lagerfeuer."
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
    return `<div class="mrow"><div class="mh"><h3>${KIND[kind][0]}</h3><p>${KIND[kind][1]}</p></div><div class="mc">${cs.map(c => `<button type="button" class="tag-link light chip${SEEN.has(c.id)?" seen":""}" data-card="${c.id}"><b>Tag ${c.d}</b> ${esc(c.t)}</button>`).join("")}</div></div>`; }).join("");
}
function sceneSection(k){
  return `<section class="scene" id="scene"><div class="g">
    <div class="sh"><span class="eyebrow">Die Karten</span><h2>Karte öffnen</h2></div>
    <div class="sp"><p>Ihr Gastgeber verteilt die ganze Woche über Karten, und jede Karte gehört zu einem Moment des Tages. Tippen Sie auf eine Markierung im Bild, um eine zu öffnen, oder wählen Sie aus der Liste. Jede Karte darf man auslassen.</p></div>
    <div class="sf">${scene(k)}</div>
    <div class="sm">${moments(k)}</div>
  </div></section>`;
}
function dayCards(k, di){
  const cs = CARDS[k].filter(c => c.d===di+1); if (!cs.length) return "";
  return `<dt>Karten:</dt><dd class="cl">${cs.map(c => `<button type="button" class="cl-b" data-card="${c.id}" title="${esc(KIND[c.k][1])}: ${esc(c.t)}">${KIND[c.k][0]}</button>`).join("")}</dd>`;
}

/* ---------- homepage example: different cities, different cards ---------- */
let homeCity = "lisbon";
function homeGrid(k){
  const first = CARD_BY_ID[HS[k][0][0]].card, t = TRIPS[k];
  const lines = ["today","spark","table","private"].map(kind => { const c = CARDS[k].find(x => x.k===kind); return `<li><button type="button" data-card="${c.id}"><b>${KIND[kind][0]}</b><span>${KIND[kind][1]}</span><em>${esc(c.t)}</em></button></li>`; }).join("");
  return `<div class="cscene">${scene(k)}</div>
  <div class="cface"><div class="cf-card" style="--b:${META[k].band}"><span class="cf-k">${KIND[first.k][0]} · Tag ${first.d} · ${t.city}</span><h3>${esc(first.t)}</h3><p>${esc(first.b)}</p><div class="cf-a"><button class="pill dark" type="button" data-card="${first.id}">Diese Karte öffnen</button><a class="tag-link light" href="#${k}">Mehr zu ${esc(t.city)} ${ext}</a></div></div>
  <ul class="cf-l" aria-label="Momente des Tages">${lines}</ul></div>`;
}
function homeCards(){
  return `<section class="cshow" id="cshow"><div class="wrap">
    <h2>Karten für jede Stadt</h2>
    <p class="lead">Jede Reise hat ihre eigenen Karten, die zu verschiedenen Momenten des Tages geöffnet werden. Wählen Sie eine Stadt und tippen Sie dann auf eine Markierung im Bild.</p>
    <div class="ctabs" id="ctabs">${ORDER.map(k => `<button type="button" data-ctab="${k}" aria-pressed="${k===homeCity}">${esc(TRIPS[k].city)}</button>`).join("")}</div>
    <div class="cgrid" id="cgrid">${homeGrid(homeCity)}</div>
  </div></section>`;
}

/* ---------- card dialog: sealed envelope, then an unfolding card ---------- */
document.body.insertAdjacentHTML("beforeend", `<div class="cdlg" id="cdlg" hidden role="dialog" aria-modal="true" aria-labelledby="cdT">
  <button class="cd-x" type="button" id="cdX" aria-label="Karte schließen">✕</button>
  <div class="cd-in" id="cdIn">
    <div class="stage">
      <button class="env" type="button" id="cdEnv" aria-label="Versiegelte Karte öffnen"><span class="eback"></span><span class="epocket"></span><span class="eflap"></span><span class="eseal">T</span><span class="elbl" id="cdLbl"></span></button>
      <article class="cardf" id="cdCard"><span class="cd-k" id="cdK"></span><h3 id="cdT"></h3><p class="cd-b" id="cdB"></p><p class="cd-n" id="cdN"></p><div class="cd-a"><button class="pill outline" type="button" id="cdPass">Auslassen</button><button class="pill dark" type="button" id="cdKeep">Behalten</button></div><p class="cd-f" id="cdF">Jede Karte darf man auslassen.</p></article>
    </div>
    <p class="hint" id="cdHint">Zum Öffnen auf den Umschlag tippen</p>
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
  cdEl("cdLbl").textContent = `${kl[0]} · Tag ${c.d} · ${TRIPS[city].city}`;
  cdEl("cdK").textContent = `${kl[0]} · ${kl[1]} · Tag ${c.d}`;
  cdEl("cdT").textContent = c.t; cdEl("cdB").textContent = c.b;
  const n = cdEl("cdN"); n.textContent = c.n || ""; n.hidden = !c.n;
  cdEl("cdPass").disabled = false; cdEl("cdKeep").disabled = false; cdEl("cdF").textContent = "Jede Karte darf man auslassen.";
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
  cdEl("cdB").textContent = "Ausgelassen. Niemand fragt, warum."; cdEl("cdN").hidden = true; cdEl("cdF").textContent = "Jede Karte darf man auslassen.";
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
    <h2>Die Karten</h2>
    <div class="rows">
      <div class="frow2"><h3>Die Idee</h3><div><p>Mit den Karten führt Ihr Gastgeber durch die Woche, ohne starren Zeitplan. Sie kommen zu festen Momenten des Tages, sagen Ihnen, was Sie mit der Person neben Ihnen tun sollen, und jede darf man auslassen.</p></div></div>
      ${["today","spark","table","private"].map(kind => `<div class="frow2"><h3>${KIND[kind][0]}</h3><div><p><strong>${KIND[kind][1]}.</strong> ${KIND[kind][2]}</p></div></div>`).join("")}
      <div class="frow2"><h3>Die Lange Tafel</h3><div><p>Ein Abend, meist der fünfte, nach der zweiten Runde Date Picks. Drei Runden à fünfzehn Minuten mit jeweils neuem Gegenüber, aufgebaut auf Arthur Arons 36 Fragen. Runde eins ist leicht und verspielt, Runde zwei wird persönlich, Runde drei dreht sich um Sie beide. Wenn Sie beide möchten, enden Sie mit vier Minuten Blickkontakt, ohne zu sprechen.</p></div></div>
      ${[["Runde 1","deep1"],["Runde 2","deep2"],["Runde 3","deep3"]].map(([n,id]) => `<div class="frow2"><h3>${n}</h3><ul class="dash">${lvl(id).map(q => `<li>${esc(q)}</li>`).join("")}</ul></div>`).join("")}
      <div class="frow2"><h3>Power-Karten</h3><div><p>Während der Tage der Wahl hat jedes Mitglied vier Karten, jede einmal einsetzbar: <strong>Tausch</strong> (in ein anderes Paar wechseln), <strong>Tisch wechseln</strong> (ein anderer Platz beim Abendessen), <strong>Veto</strong> (eine Paarung ablehnen, ohne Begründung) und <strong>Doppeldate</strong> (eine Freundin oder einen Freund mitnehmen). Den heiklen Teil übernimmt Ihr Gastgeber, und niemand erfährt, wer was eingesetzt hat.</p></div></div>
      <div class="frow2"><h3>Ansehen</h3><div><a class="tag-link light" href="#lisbon-scene">Eine Lissabon-Karte öffnen ${ext}</a> <a class="tag-link light" href="#rio-scene">Rio ${ext}</a> <a class="tag-link light" href="#bali-scene">Bali ${ext}</a> <a class="tag-link light" href="#nairobi-scene">Nairobi ${ext}</a></div></div>
    </div>
  </div></section>`;
}

/* ---------- shared page helpers ---------- */
const pageTitle = (eyebrow, h1, sub) => `<section class="ptitle"><div class="wrap in"><span class="mono">${esc(eyebrow)}</span><h1>${esc(h1)}</h1>${sub?`<p>${esc(sub)}</p>`:""}</div></section>`;
const INCLUDED = ["Einzelzimmer mit eigenem Schlüssel, jede Nacht","Alle Transfers vor Ort, von der Ankunft bis zur Abreise","Alle Dates, Aktivitäten und Challenges im Programm","Die meisten Mahlzeiten, wie im jeweiligen Programm angegeben","Ihr Gastgeber für die ganze Woche","Die Tringles-Kartendecks"];
const NOT_INCLUDED = ["Internationale Flüge","Reiseversicherung (Pflicht)","Visa oder Einreisegebühren, falls nötig","Getränke außerhalb der inklusiven Mahlzeiten","Persönliche Ausgaben"];
const SEATS = {lisbon:"8 + 8", rio:"8 + 8", bali:"8 + 8", nairobi:"6–8 + 6–8"};
const NIGHTS = {lisbon:"Sa. 15. – Sa. 22. Mai 2027", rio:"Sa. 13. – Sa. 20. März 2027", bali:"Sa. 12. – Sa. 19. Juni 2027", nairobi:"Sa. 11. – Sa. 18. Sept. 2027"};

/* ---------- DATES & PRICES ---------- */
function dates(){
  return pageTitle("Staffel eins","Termine & Preise","Unverbindliche Preise pro Person, ohne Flüge, Einzelzimmer") + `
  <section class="summary"><div class="wrap">
    <div class="ptable" role="table" aria-label="Termine und Preise der ersten Staffel">
      <div class="prow phead" role="row"><span role="columnheader">Reise</span><span role="columnheader">Termine</span><span role="columnheader">Nächte</span><span role="columnheader">Plätze pro Liste</span><span role="columnheader">Ab</span><span role="columnheader"></span></div>
      ${ORDER.map(k=>`<div class="prow" role="row" id="row-${k}">
        <span role="cell"><a href="#${k}" class="pname">${esc(TRIPS[k].city)}</a><small>${esc(TRIPS[k].name)}</small></span>
        <span role="cell">${esc(NIGHTS[k])}</span>
        <span role="cell">${TRIPS[k].nights}</span>
        <span role="cell">${esc(SEATS[k])}</span>
        <span role="cell" class="pp">Ab ${TRIPS[k].price}</span>
        <span role="cell"><a class="tag-link" href="#apply-${k}">Bewerben</a></span>
      </div>`).join("")}
    </div>
    <p class="note">Die genauen Termine sind vorläufig, bis die jeweilige Staffel öffnet. Eine Anzahlung von 500 € sichert Ihren Platz, sobald Ihre Bewerbung angenommen ist; der Restbetrag ist 60 Tage vor Abreise fällig.</p>
    <div class="sgrid" style="margin-top:56px">
      <div><h3>Inklusive</h3><ul class="dash">${INCLUDED.map(x=>`<li>${esc(x)}</li>`).join("")}</ul></div>
      <div><h3>Nicht inklusive</h3><ul class="dash">${NOT_INCLUDED.map(x=>`<li>${esc(x)}</li>`).join("")}</ul></div>
      <div><h3>Anzahlung &amp; Zahlung</h3><ul class="dash"><li>500 € Anzahlung nach Annahme</li><li>Restzahlung 60 Tage vor Abreise</li><li>Zahlung über einen sicheren Link, nie über diese Website</li></ul></div>
    </div>
  </div></section>`;
}

/* ---------- FAQ ---------- */
const FAQS = [
  ["Für wen sind die Reisen?","Für Singles zwischen etwa 26 und 38 (28 bis 40 für Nairobi), die jemanden lieber im Kajak kennenlernen als in einem Chatfenster. Jede Gruppe hat ein Verhältnis von 8/8, deshalb bewerben sich Frauen und Männer auf getrennten Listen."],
  ["Muss ich auf der Suche nach Romantik sein?","Nein. Viele Mitglieder kommen wegen der Reise und der Menschen. Bei der Enthüllung wählen Sie romantische und freundschaftliche Verbindungen, sodass die Woche in jedem Fall mit Menschen endet, die Sie wiedersehen möchten."],
  ["Was, wenn ich kein Match habe?","Die Wahl ist vertraulich, und nur gegenseitige Matches werden bekannt gegeben, also hört niemand ein Nein. Die meisten Mitglieder gehen mit neuen Freunden und einer Geschichte nach Hause, viele mit Plänen für ein Wiedersehen."],
  ["Werde ich mit jemandem gepaart, den ich nicht mag?","Die ersten Paare sind zufällig und wechseln bei jeder Aktivität. Nach jedem Date geben Sie dem Gastgeber vertrauliches Feedback, das er für die nächsten Paarungen nutzt. Jede Karte, jedes Spiel und jedes Date dürfen Sie auslassen."],
  ["In welcher Sprache findet die Reise statt?","Jede Staffel läuft auf Englisch oder Russisch, und die Reiseseite sagt, in welcher Sprache. In der ersten Staffel sprechen die Gastgeber beide."],
  ["Sind Flüge inklusive?","Nein. Die Preise decken das Programm vor Ort ab: Zimmer, Transfers, die meisten Mahlzeiten, alle Aktivitäten, Ihren Gastgeber und die Kartendecks. Wir schlagen Ihnen Ankunfts- und Abflugzeiten vor."],
  ["Wird gefilmt?","Nur ausgewählte Staffeln, vorab klar gekennzeichnet. Für Aufnahmen braucht es Ihre unterschriebene Einwilligung, und private Dates, Zimmer und Ihre Wahl werden nie gefilmt. Sie können ablehnen und trotzdem mitkommen."],
  ["Wie sorgen Sie für Sicherheit?","Jeder Bewerber führt ein Gespräch mit einem Gastgeber, durchläuft eine Identitätsprüfung und unterschreibt den Verhaltenskodex. Die Zimmer sind Einzelzimmer mit eigenem Schlüssel, ein geschulter Gastgeber begleitet jede Gruppe und kann jeden ausschließen, und lizenzierte Transfers bringen Sie nach jedem Abend nach Hause."],
  ["Kann ich mit einer Freundin oder einem Freund kommen?","Ja, bewerben Sie sich getrennt und erwähnen Sie einander in der Bewerbung. Bei den Aktivitäten sind Sie in verschiedenen Paaren, und das ist der halbe Spaß."],
  ["Wie sind die Stornobedingungen?","Die Anzahlung von 500 € ist 14 Tage nach der Annahme erstattbar. Danach verfällt bei Stornierung mehr als 60 Tage vor Abreise die Anzahlung; innerhalb von 60 Tagen ist der volle Preis fällig, es sei denn, Ihr Platz wird von derselben Liste neu besetzt. Eine Reiseversicherung ist Pflicht."],
  ["Was passiert, wenn eine Reise abgesagt wird?","Wenn wir absagen, erstatten wir Ihnen alles, was Sie an uns gezahlt haben, vollständig zurück, oder Sie erhalten auf Wunsch einen Platz in einer anderen Staffel."]
];
function faq(){
  return pageTitle("Service","FAQ","Gut zu wissen vor der Bewerbung") + `
  <section class="summary"><div class="wrap faqwrap">
    ${FAQS.map(([q,a],i)=>`<details class="faqi"${i===0?" open":""}><summary>${esc(q)}</summary><p>${esc(a)}${a.startsWith("Entwurf")?"":""}</p></details>`).join("")}
    <p class="note" style="margin-top:28px">Noch unsicher? Schreiben Sie an tringles@tourground.com.</p>
  </div></section>`;
}

/* ---------- ABOUT / HOSTS ---------- */
function about(){
  return pageTitle("Der Club","Über Tringles","Erstes Date überspringen. Auf Reisen gehen.") + `
  <section class="intro"><div class="wrap">
    <div><h2>Ein Club für eine Woche</h2><p>Tringles begann mit einer einfachen Beobachtung: Ein erstes Date bei einem Drink verrät sehr wenig, eine Woche auf dem Boot, im Sattel und auf der Tanzfläche verrät sehr viel. Also haben wir kleine, begleitete Reisen entwickelt, bei denen das Kennenlernen Teil der Reiseroute ist, aber nie ihr einziger Zweck.</p></div>
    <ul class="dash"><li>Kleine Gruppen mit 12 bis 16 Mitgliedern</li><li>Jede Reise mit einem Gastgeber, die ganze Woche vor Ort</li><li>Lokale Partner, mit denen wir seit Jahren arbeiten</li><li>Staffel eins: Lissabon, Rio, Bali und Nairobi</li></ul>
  </div></section>
  <section class="story"><div class="wrap">
    ${ph("gen_candles","Eine lange, für das Abendessen gedeckte Tafel")}
    <div class="txt"><p>Tringles wurde von einem Reiseveranstalter gegründet, dessen Destination-Management-Firma mit Partnern in über 130 Ländern arbeitet, gemeinsam mit einem Dating-Creator, dessen Community seit Jahren nach etwas Besserem als den Apps fragt.</p><p>Der eine weiß, wie man überall auf der Welt eine makellose Woche organisiert. Der andere weiß, was Menschen sich öffnen lässt und was sie verschließt.</p></div>
  </div></section>
  <section class="summary"><div class="wrap"><h2>Die Gastgeber</h2><div class="sgrid">
    <div><h3>Wer sie sind</h3><ul class="dash"><li>Erfahrene Reiseleiter oder Event-Gastgeber</li><li>Fließend in der Sprache der Staffel</li><li>Geschult in Gruppendynamik und Schutzkonzepten</li></ul></div>
    <div><h3>Was sie tun</h3><ul class="dash"><li>Sie leiten die Karten, die Runden und die Paarungen</li><li>Sie lesen Ihr vertrauliches Feedback nach jedem Date</li><li>Sie kümmern sich um alle, die sich außen vor fühlen</li></ul></div>
    <div><h3>Was sie dürfen</h3><ul class="dash"><li>Jeden Plan aus Sicherheits- oder Wettergründen ändern</li><li>Jeden ausschließen, der gegen den Verhaltenskodex verstößt</li><li>Das lokale Team rund um die Uhr anrufen</li></ul></div>
  </div></div></section>`;
}

/* ---------- JOURNAL ---------- */
const STORIES = [
  {t:"Warum das erste Date nicht funktioniert", d:"Neunzig Minuten, zwei Drinks und ein Urteil. Ein Plädoyer dafür, jemanden in einer Woche voller echter Erlebnisse kennenzulernen.", tone:"gen_sails", cap:"Unter Segeln", href:"#how", cta:"So funktioniert’s"},
  {t:"Sechsunddreißig Fragen, drei Stufen", d:"Wie Arthur Arons Studie über Nähe das Deep-Deck geprägt hat und warum die schwierigsten Fragen zuletzt kommen.", tone:"gen_lamp", cap:"Ein Tisch für zwei nach Einbruch der Dunkelheit", href:"#cards", cta:"Die Karten"},
  {t:"Fünf erste Dates rund um Lissabon", d:"Pferde zwischen Korkeichen, ein Kapitän auf dem Sado, ein Buggy im Staub. Tag zwei der Weinberg-Woche.", tone:"lis_horses", cap:"Reiter auf Lusitano-Pferden", href:"#lisbon", cta:"Lissabon"},
  {t:"Was ein Gastgeber wirklich tut", d:"Die Paarungen, die Abendrunden und das leise Wort für alle, die sich außen vor fühlen. Ein Tag mit einem Tringles-Gastgeber.", tone:"gen_toast", cap:"Ein Toast beim Abendessen", href:"#about", cta:"Über die Gastgeber"}
];
function journal(){
  return pageTitle("Geschichten","Journal","Notizen aus dem Club") + `
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
const conduct = () => legal("Der Club","Verhaltenskodex","Was jedes Mitglied vor der Reise zusagt",[
  ["Respekt ist die Regel",["Begegnen Sie jedem Mitglied, Gastgeber, Guide und lokalen Partner mit Respekt. Keine Belästigung, kein Druck und kein unerwünschter Kontakt, weder persönlich noch online."]],
  ["Einvernehmen, immer",["Interesse wird gezeigt, nie vorausgesetzt. Ein Nein, ein Auslassen oder Schweigen ist ein Nein. Jeder darf jede Karte, jedes Spiel und jedes Date ohne Begründung auslassen."]],
  ["Zimmer sind privat",["Jeder hat ein Einzelzimmer mit eigenem Schlüssel. Spiele und Gruppenaktivitäten finden nie in Schlafzimmern statt."]],
  ["Verantwortungsvoll trinken",["Niemand wird zum Trinken gedrängt, und kein Spiel hat mit Alkohol zu tun. Der Gastgeber kann eingreifen, wenn jemand nicht mehr auf sich selbst achten kann."]],
  ["Privatsphäre",["Fotografieren oder posten Sie andere Mitglieder nicht ohne deren Erlaubnis. Wahl, Feedback und Enthüllung bleiben privat."]],
  ["Ehrlichkeit",["Sie bestätigen, dass Sie Single und über 18 sind und dass Ihre Angaben in der Bewerbung stimmen."]],
  ["Wenn etwas schiefgeht",["Wenden Sie sich jederzeit an Ihren Gastgeber oder direkt an die Gründer. Gastgeber können jeden, der gegen diesen Kodex verstößt, auf dessen eigene Kosten und ohne Erstattung von der Reise ausschließen."]]
]);
// Privacy Policy, Booking Terms and Cookie Policy are real pages (privacy.html, terms.html, cookies.html).
const LP = document.documentElement.lang === "en" ? "" : "/" + document.documentElement.lang;

/* ---------- INTAKE FORM ---------- */
const STEPS = ["Reise","Über Sie","Ihre Woche","Sicherheit & Einvernehmen","In Ihren Worten","Überprüfen"];
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
    <fieldset><legend>Welche Reise?</legend><div class="opts trips">${ORDER.map(k=>`<label class="opt tripopt"><input type="radio" name="trip" value="${k}"${f.trip===k?" checked":""}><span><b>${esc(TRIPS[k].city)}</b><small>${esc(TRIPS[k].name)} · ${esc(TRIPS[k].when)} · Ab ${TRIPS[k].price}</small></span></label>`).join("")}</div></fieldset>
    <fieldset><legend>Wann möchten Sie reisen?</legend><div class="opts">${[["season1","Staffel eins (die angegebenen Termine)"],["later","Eine spätere Staffel"],["flexible","Ich bin flexibel"]].map(([v,l])=>opt("season",v,l,"radio",f.season===v)).join("")}</div></fieldset>`;
  if (step===1) return `
    <div class="fgrid">
      <label class="fl">Vorname<input id="i-first" value="${esc(f.first)}" autocomplete="given-name"></label>
      <label class="fl">Nachname<input id="i-last" value="${esc(f.last)}" autocomplete="family-name"></label>
      <label class="fl">E-Mail<input id="i-email" type="email" value="${esc(f.email)}" autocomplete="email"></label>
      <label class="fl">Telefon oder Messenger-Kontakt<input id="i-contact" value="${esc(f.contact)}" autocomplete="tel" placeholder="${"+49… oder @benutzername"}"></label>
      <label class="fl">Land<input id="i-country" value="${esc(f.country)}" autocomplete="country-name"></label>
      <label class="fl">Stadt<input id="i-city" value="${esc(f.city)}" autocomplete="address-level2"></label>
    </div>
    <fieldset><legend>Altersgruppe</legend><div class="opts">${["26–30","31–35","36–40","40+"].map(v=>opt("age",v,v,"radio",f.age===v)).join("")}</div></fieldset>
    <fieldset><legend>Auf welche Liste bewerben Sie sich?</legend><p class="hint">Jede Gruppe hat ein Verhältnis von 8/8.</p><div class="opts">${[["women","Frauenliste"],["men","Männerliste"]].map(([v,l])=>opt("list",v,l,"radio",f.list===v)).join("")}</div></fieldset>
    <fieldset><legend>Sprachen, in denen Sie sich wohlfühlen</legend><div class="opts">${[["en","English"],["ru","Russisch"],["other","Andere"]].map(([v,l])=>opt("langs",v,l,"checkbox",f.langs.includes(v))).join("")}</div>
      <label class="fl" id="langOtherWrap"${f.langs.includes("other")?"":" hidden"}>Welche anderen Sprachen?<input id="i-langOther" value="${esc(f.langOther)}"></label></fieldset>`;
  if (step===2) return `
    <fieldset><legend>Was suchen Sie?</legend><div class="opts">${[["romance","Romantik"],["friendship","Freundschaft"],["both","Offen für beides"]].map(([v,l])=>opt("looking",v,l,"radio",f.looking===v)).join("")}</div></fieldset>
    <fieldset><legend>Was mögen Sie? Mehrfachauswahl</legend><div class="opts">${["Wein","Sport","Strand","Nachtleben","Natur","Wellness","Essen"].map(v=>opt("interests",v.toLowerCase(),v,"checkbox",f.interests.includes(v.toLowerCase()))).join("")}</div></fieldset>
    <fieldset><legend>Ihr Aktivitätsniveau</legend><div class="opts">${[["easy","Leicht: Spaziergänge und Schwimmen"],["moderate","Mittel: Wanderungen, Surfstunden"],["active","Aktiv: für alles zu haben"]].map(([v,l])=>opt("activity",v,l,"radio",f.activity===v)).join("")}</div></fieldset>
    <div class="fgrid">
      <label class="fl">Ernährungsbedürfnisse oder Allergien <span class="opt-t">Optional</span><textarea id="i-diet" rows="3">${esc(f.diet)}</textarea></label>
      <label class="fl">Zimmer- oder Barrierefreiheitsbedürfnisse <span class="opt-t">Optional</span><textarea id="i-access" rows="3">${esc(f.access)}</textarea></label>
    </div>`;
  if (step===3) return `
    <fieldset><legend>Bitte bestätigen</legend><div class="opts col">
      ${opt("single","yes","Ich bin Single und über 18","checkbox",f.single)}
      ${opt("conduct","yes","Ich stimme dem Verhaltenskodex zu","checkbox",f.conduct)}
      ${opt("idcheck","yes","Mir ist klar, dass vor einem Platzangebot ein Gespräch mit einem Gastgeber und eine Identitätsprüfung stattfinden","checkbox",f.idcheck)}
    </div><p class="hint"><a href="#conduct" target="_self" data-keep="1">Verhaltenskodex lesen</a></p></fieldset>
    <fieldset><legend>Dreharbeiten</legend><p class="hint">Nur ausgewählte Staffeln werden gefilmt, und nur mit unterschriebener Einwilligung.</p><div class="opts col">${[["yes","Einverstanden, in einer gefilmten Staffel gefilmt zu werden"],["no","Ich möchte lieber nicht gefilmt werden"]].map(([v,l])=>opt("filming",v,l,"radio",f.filming===v)).join("")}</div></fieldset>
    <fieldset><legend>In Kontakt bleiben <span class="opt-t">Optional</span></legend><div class="opts col">${opt("marketing","yes","Schicken Sie mir Neuigkeiten zu neuen Staffeln","checkbox",f.marketing)}</div></fieldset>`;
  if (step===4) return `
    <label class="fl">Erzählen Sie uns von sich<span class="hint">Ein paar Sätze: was Sie machen, wie für Sie eine großartige Woche aussieht, was Ihr Gastgeber wissen sollte. 40 bis 800 Zeichen.</span><textarea id="i-about" rows="7" maxlength="800">${esc(f.about)}</textarea><span class="count" id="aboutCount">${f.about.length}/800</span></label>
    <label class="fl">Instagram <span class="opt-t">Optional</span><input id="i-instagram" value="${esc(f.instagram)}" placeholder="${"@ihrname"}"></label>`;
  // review
  const t = TRIPS[f.trip];
  const L = (a,b) => `<dt>${esc(a)}</dt><dd>${esc(b||"—")}</dd>`;
  const lab = {season1:"Staffel eins",later:"Eine spätere Staffel",flexible:"Flexibel",women:"Frauenliste",men:"Männerliste",romance:"Romantik",friendship:"Freundschaft",both:"Offen für beides",easy:"Leicht",moderate:"Mittel",active:"Aktiv",yes:"Einverstanden, gefilmt zu werden",no:"Lieber nicht gefilmt"};
  return `
    <div class="review">
      <div><h3>Reise</h3><dl class="kv">${L("Reise", t ? `${t.city} · ${t.name}` : "")}${L("Wann", lab[f.season])}</dl><button type="button" class="tag-link" data-goto="0">Bearbeiten</button></div>
      <div><h3>Über Sie</h3><dl class="kv">${L("Name", `${f.first} ${f.last}`)}${L("E-Mail", f.email)}${L("Kontakt", f.contact)}${L("Wohnort", `${f.city}, ${f.country}`)}${L("Alter", f.age)}${L("Liste", lab[f.list])}${L("Sprachen", f.langs.map(x=>({en:"English",ru:"Russisch",other:f.langOther||"Andere"})[x]).join(", "))}</dl><button type="button" class="tag-link" data-goto="1">Bearbeiten</button></div>
      <div><h3>Ihre Woche</h3><dl class="kv">${L("Sucht", lab[f.looking])}${L("Mag", f.interests.join(", "))}${L("Aktivität", lab[f.activity])}${L("Ernährung", f.diet)}${L("Zimmer / Zugang", f.access)}</dl><button type="button" class="tag-link" data-goto="2">Bearbeiten</button></div>
      <div><h3>Sicherheit &amp; Einvernehmen</h3><dl class="kv">${L("Bestätigt", "Single, Verhaltenskodex, Gespräch und Identitätsprüfung")}${L("Dreharbeiten", lab[f.filming])}${L("Neuigkeiten", f.marketing?"Ja":"Nein")}</dl><button type="button" class="tag-link" data-goto="3">Bearbeiten</button></div>
      <div class="wide"><h3>In Ihren Worten</h3><p class="quote">${esc(f.about)}</p><dl class="kv">${L("Instagram", f.instagram)}</dl><button type="button" class="tag-link" data-goto="4">Bearbeiten</button></div>
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
  if (step===0){ if(!f.trip) e.push("Wählen Sie eine Reise."); if(!f.season) e.push("Wählen Sie, wann Sie reisen möchten."); }
  if (step===1){
    if(!f.first) e.push("Geben Sie Ihren Vornamen an."); if(!f.last) e.push("Geben Sie Ihren Nachnamen an.");
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.email)) e.push("Geben Sie eine gültige E-Mail-Adresse an.");
    if(f.contact.length<3) e.push("Geben Sie eine Telefonnummer oder einen Messenger-Kontakt an.");
    if(!f.country) e.push("Geben Sie Ihr Land an."); if(!f.city) e.push("Geben Sie Ihre Stadt an.");
    if(!f.age) e.push("Wählen Sie Ihre Altersgruppe."); if(!f.list) e.push("Wählen Sie die Liste, auf die Sie sich bewerben.");
    if(!f.langs.length) e.push("Wählen Sie mindestens eine Sprache.");
  }
  if (step===2){ if(!f.looking) e.push("Wählen Sie, was Sie suchen."); if(!f.interests.length) e.push("Wählen Sie mindestens eine Sache, die Sie mögen."); if(!f.activity) e.push("Wählen Sie Ihr Aktivitätsniveau."); }
  if (step===3){ if(!f.single) e.push("Bestätigen Sie, dass Sie Single und über 18 sind."); if(!f.conduct) e.push("Stimmen Sie dem Verhaltenskodex zu, um sich zu bewerben."); if(!f.idcheck) e.push("Bestätigen Sie, dass Sie das Gastgebergespräch und die Identitätsprüfung verstanden haben."); if(!f.filming) e.push("Wählen Sie eine Präferenz zu Dreharbeiten."); }
  if (step===4){ if(f.about.length<40) e.push("Erzählen Sie uns etwas mehr über sich (mindestens 40 Zeichen)."); }
  return e;
}
function applyPage(prefill){
  const d = loadDraft();
  if (!form) form = d ? Object.assign(blankForm(), d) : blankForm(prefill);
  if (prefill && TRIPS[prefill]) form.trip = prefill;
  step = 0;
  return pageTitle("Staffel eins","Bewerben","Sechs kurze Schritte. Etwa zehn Minuten.") + `
  <section class="intake"><div class="wrap">
    <ol class="progress" id="progress" aria-label="Fortschritt"></ol>
    <form id="intake" novalidate>
      <div id="stepBody"></div>
      <div class="errs" id="errs" role="alert" hidden></div>
      <div class="navrow"><button type="button" class="pill outline" id="back">Zurück</button><button type="submit" class="pill dark" id="next">Weiter</button></div>
    </form>
    <div id="done" hidden></div>
    <p class="note" style="margin-top:28px">Wir fragen nur, was wir für die Planung Ihrer Woche brauchen. Siehe <a href="${LP}/privacy">Datenschutzerklärung</a>. Passnummern oder Zahlungsdaten fragen wir hier nie ab.</p>
  </div></section>`;
}
function paintStep(){
  $("#progress").innerHTML = STEPS.map((s,i)=>`<li class="${i<step?"done":i===step?"cur":""}"${i===step?' aria-current="step"':""}><span>${i+1}</span>${esc(s)}</li>`).join("");
  $("#stepBody").innerHTML = `<h2 class="sh">${esc(STEPS[step])}</h2>` + stepHTML();
  $("#back").hidden = step===0;
  $("#next").textContent = step===STEPS.length-1 ? "Bewerbung senden" : "Weiter";
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
      if (errs.length){ $("#errs").innerHTML = `<p>Bevor Sie fortfahren:</p><ul>${errs.map(x=>`<li>${esc(x)}</li>`).join("")}</ul>`; $("#errs").hidden = false; $("#errs").scrollIntoView({block:"center"}); return; }
      step++; paintStep(); window.scrollTo(0, $("#progress").offsetTop - 80); return;
    }
    if (submitting) return; submitting = true; $("#next").disabled = true; $("#next").textContent = "Sending…";
    const res = await submitApplication(form);
    submitting = false; $("#next").disabled = false; $("#next").textContent = "Bewerbung senden";
    if (res.ok){ clearDraft(); const t = TRIPS[form.trip]; $("#intake").hidden = true; $("#progress").hidden = true;
      $("#done").hidden = false; $("#done").innerHTML = `<div class="done"><span class="eyebrow">Bewerbung erhalten</span><h2>Danke, ${esc(form.first)}.</h2><p>Ihre Bewerbung für ${esc(t.city)} · ${esc(t.name)} ist bei uns eingegangen. Ein Gastgeber meldet sich innerhalb einer Woche, um ein kurzes Gespräch zu vereinbaren. Noch ist nichts zu zahlen.</p><a class="pill outline" href="#${form.trip}">Zurück zu ${esc(t.city)}</a></div>`;
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
  const r = await fetch(ENDPOINT, {method:"POST", headers:{"Content-Type":"application/json", "Akzeptieren":"application/json"}, body: JSON.stringify({kind, ...data})});
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
    catch(e){ return {ok:false, msg:`Ihre Bewerbung konnte gerade nicht gesendet werden. Ihre Antworten bleiben auf diesem Gerät gespeichert; versuchen Sie es erneut oder schreiben Sie an ${CONTACT} und wir helfen Ihnen weiter.`}; }
  }
  const t = TRIPS[f.trip];
  mailto(`Application: ${t ? t.city + " · " + t.name : f.trip} (${f.first} ${f.last})`,
    Object.entries(record).map(([k,v]) => `${k}: ${Array.isArray(v) ? v.join(", ") : v}`).join("\n"));
  return {ok:true};
}
async function subscribe(email){
  if (ENDPOINT){ try { await post("newsletter", {email, at:new Date().toISOString()}); return true; } catch(e){ return false; } }
  mailto("Newsletter", `Bitte fügen Sie ${email} zum Tringles-Newsletter hinzu.`);
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
  $("#fab").textContent = TRIPS[v] ? "Für diese Reise bewerben" : "Jetzt bewerben";
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
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(m)) { $("#subMsg").textContent = "Geben Sie eine gültige E-Mail-Adresse an."; return; }
  $("#subMsg").textContent = "Saving…";
  $("#subMsg").textContent = (await subscribe(m)) ? "Danke, Sie stehen auf der Liste." : "Aus dieser Ansicht konnte nichts gespeichert werden. Schreiben Sie an tringles@tourground.com, um sich einzutragen.";
});
addEventListener("hashchange", route);
route();

