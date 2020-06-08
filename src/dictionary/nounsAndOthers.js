const dict = [
    [{
        'no': 'hei',
        'pl': 'cześć (na powitanie)',
        'id': 'noun0',
    },
    {
        'no': 'god dag',
        'pl': 'dzień dobry',
        'id': 'noun1',
    },
    {
        'no': 'god morgen',
        'pl': 'dzień dobry (rano do 1400)',
        'id': 'noun2',
    },
    {
        'no': 'ha det',
        'pl': 'cześć na pożegnanie',
        'id': 'noun3',
    },
    {
        'no': 'ha det bra',
        'pl': 'cześć na pożegnanie',
        'id': 'noun4',
    },
    {
        'no': 'takk',
        'pl': 'dziękuję',
        'id': 'noun5',
    },
    {
        'no': 'tusen takk',
        'pl': 'bardzo dziękuję',
        'id': 'noun6',
    },
    {
        'no': 'ha en fin dag',
        'pl': 'miłego dnia',
        'id': 'noun7',
    },
    {
        'no': 'lykke til',
        'pl': 'powodzenia',
        'id': 'noun8',
    },
    {
        'no': 'vi snakkes',
        'pl': 'do usłyszenia',
        'id': 'noun9',
    },
    {
        'no': 'vi ses',
        'pl': 'do zobaczenia',
        'id': 'noun10',
    },
    {
        'no': 'ukedager',
        'pl': 'dni tygodnia',
        'id': 'noun11',
    },
    {
        'no': 'mandag',
        'pl': 'poniedziałek',
        'id': 'noun12',
    },
    {
        'no': 'tirsdag',
        'pl': 'wtorek',
        'id': 'noun13',
    },
    {
        'no': 'onsdag',
        'pl': 'środa',
        'id': 'noun14',
    },
    {
        'no': 'torsdag',
        'pl': 'czwartek',
        'id': 'noun15',
    },
    {
        'no': 'fredag',
        'pl': 'piątek',
        'id': 'noun16',
    },
    {
        'no': 'lørdag',
        'pl': 'sobota',
        'id': 'noun17',
    },
    {
        'no': 'søndag',
        'pl': 'niedziela',
        'id': 'noun18',
    },
    {
        'no': 'måneder',
        'pl': 'miesiące',
        'id': 'noun19',
    },
    {
        'no': 'januar',
        'pl': 'styczeń',
        'id': 'noun20',
    },
    {
        'no': 'februar',
        'pl': 'luty',
        'id': 'noun21',
    },
    {
        'no': 'mars',
        'pl': 'marzec',
        'id': 'noun22',
    },
    {
        'no': 'april',
        'pl': 'kwiecień',
        'id': 'noun23',
    },
    {
        'no': 'mai',
        'pl': 'maj',
        'id': 'noun24',
    },
    {
        'no': 'juni',
        'pl': 'czerwiec',
        'id': 'noun25',
    },
    {
        'no': 'juli',
        'pl': 'lipiec',
        'id': 'noun26',
    },
    {
        'no': 'august',
        'pl': 'sierpień',
        'id': 'noun27',
    },
    {
        'no': 'september',
        'pl': 'wrzesień',
        'id': 'noun28',
    },
    {
        'no': 'oktober',
        'pl': 'październik',
        'id': 'noun29',
    },
    {
        'no': 'november',
        'pl': 'listopad',
        'id': 'noun30',
    },
    {
        'no': 'desember',
        'pl': 'grudzień',
        'id': 'noun31',
    },
    {
        'no': 'en/ei årstider',
        'pl': 'pory roku',
        'id': 'noun32',
    },
    {
        'no': 'en vår',
        'pl': 'wiosna',
        'id': 'noun33',
    },
    {
        'no': 'en sommer',
        'pl': 'lato',
        'id': 'noun34',
    },
    {
        'no': 'en høst',
        'pl': 'jesień',
        'id': 'noun35',
    },
    {
        'no': 'en vinter',
        'pl': 'zima',
        'id': 'noun36',
    },
    {
        'no': 'i dag',
        'pl': 'dzisiaj',
        'id': 'noun37',
    },
    {
        'no': 'i morgen',
        'pl': 'jutro',
        'id': 'noun38',
    },
    {
        'no': 'i går',
        'pl': 'wczoraj',
        'id': 'noun39',
    },
    {
        'no': 'nå',
        'pl': 'teraz',
        'id': 'noun40',
    },
    {
        'no': 'etterpå',
        'pl': 'później',
        'id': 'noun41',
    },
    {
        'no': 'en morgen (morgenen)',
        'pl': 'ranek, rano',
        'id': 'noun42',
    },
    {
        'no': 'formiddag',
        'pl': 'przedpołudnie',
        'id': 'noun43',
    },
    {
        'no': 'middag',
        'pl': 'południe, obiad',
        'id': 'noun44',
    },
    {
        'no': 'ettermiddag',
        'pl': 'popołudnie',
        'id': 'noun45',
    },
    {
        'no': 'en kveld',
        'pl': 'wieczór',
        'id': 'noun46',
    },
    {
        'no': 'i kveld',
        'pl': 'wieczorem',
        'id': 'noun47',
    },
    {
        'no': 'en/ei natt',
        'pl': 'noc',
        'id': 'noun48',
    },
    {
        'no': 'jeg',
        'pl': 'ja',
        'id': 'noun49',
    },
    {
        'no': 'du',
        'pl': 'ty',
        'id': 'noun50',
    },
    {
        'no': 'han',
        'pl': 'on',
        'id': 'noun51',
    },
    {
        'no': 'hun',
        'pl': 'ona',
        'id': 'noun52',
    },
    {
        'no': 'vi',
        'pl': 'my',
        'id': 'noun53',
    },
    {
        'no': 'dere',
        'pl': 'wy',
        'id': 'noun54',
    },
    {
        'no': 'de',
        'pl': 'oni',
        'id': 'noun55',
    },
    ],
    [{
        'no': 'en gutt',
        'pl': 'chłopiec',
        'id': 'noun56',
    },
    {
        'no': 'ei jente',
        'pl': 'dziewczyna',
        'id': 'noun57',
    },
    {
        'no': 'et bilde',
        'pl': 'obraz',
        'id': 'noun58',
    },
    {
        'no': 'en/ei klokke',
        'pl': 'zegar',
        'id': 'noun59',
    },
    {
        'no': 'en/ei  søster',
        'pl': 'siostra',
        'id': 'noun60',
    },
    {
        'no': 'en/ei  mor',
        'pl': 'matka',
        'id': 'noun61',
    },
    {
        'no': 'en/ei  bok',
        'pl': 'ksiażka',
        'id': 'noun62',
    },
    {
        'no': 'en/ei  avis',
        'pl': 'gazeta',
        'id': 'noun63',
    },
    {
        'no': 'en/ei  skole',
        'pl': 'szkoła',
        'id': 'noun64',
    },
    {
        'no': 'en/ei  bro',
        'pl': 'most',
        'id': 'noun65',
    },
    {
        'no': 'en/ei  ferge',
        'pl': 'prom',
        'id': 'noun66',
    },
    {
        'no': 'en/ei  kone',
        'pl': 'żona',
        'id': 'noun67',
    },
    {
        'no': 'en hund',
        'pl': 'pies',
        'id': 'noun68',
    },
    {
        'no': 'en/ei mor',
        'pl': 'mama',
        'id': 'noun69',
    },
    ],
    [{
        'no': 'en',
        'pl': '1',
        'id': 'noun70',
    },
    {
        'no': 'to',
        'pl': '2',
        'id': 'noun71',
    },
    {
        'no': 'tre',
        'pl': '3',
        'id': 'noun72',
    },
    {
        'no': 'fire',
        'pl': '4',
        'id': 'noun73',
    },
    {
        'no': 'fem',
        'pl': '5',
        'id': 'noun74',
    },
    {
        'no': 'seks',
        'pl': '6',
        'id': 'noun75',
    },
    {
        'no': 'sju',
        'pl': '7',
        'id': 'noun76',
    },
    {
        'no': 'åtte',
        'pl': '8',
        'id': 'noun77',
    },
    {
        'no': 'ni',
        'pl': '9',
        'id': 'noun78',
    },
    {
        'no': 'ti',
        'pl': '10',
        'id': 'noun79',
    },
    {
        'no': 'elleve',
        'pl': '11',
        'id': 'noun80',
    },
    {
        'no': 'tolv',
        'pl': '12',
        'id': 'noun81',
    },
    {
        'no': 'tretten',
        'pl': '13',
        'id': 'noun82',
    },
    {
        'no': 'fjorten',
        'pl': '14',
        'id': 'noun83',
    },
    {
        'no': 'femten',
        'pl': '15',
        'id': 'noun84',
    },
    {
        'no': 'seksten',
        'pl': '16',
        'id': 'noun85',
    },
    {
        'no': 'sytten',
        'pl': '17',
        'id': 'noun86',
    },
    {
        'no': 'atten',
        'pl': '18',
        'id': 'noun87',
    },
    {
        'no': 'nitten',
        'pl': '19',
        'id': 'noun88',
    },
    {
        'no': 'tjue',
        'pl': '20',
        'id': 'noun89',
    },
    ],
    [{
        'no': 'aldri',
        'pl': 'nigdy',
        'id': 'noun90',
    },
    {
        'no': 'alltid',
        'pl': 'zawsze',
        'id': 'noun91',
    },
    {
        'no': 'bestandig',
        'pl': 'ciągle',
        'id': 'noun92',
    },
    {
        'no': 'sjelden',
        'pl': 'rzadko',
        'id': 'noun93',
    },
    {
        'no': 'ennå, fremdeles',
        'pl': 'jeszcze',
        'id': 'noun94',
    },
    {
        'no': 'da',
        'pl': 'wtedy, gdy',
        'id': 'noun95',
    },
    {
        'no': 'noen ganger, iblant',
        'pl': 'czasami',
        'id': 'noun96',
    },
    {
        'no': 'av og til',
        'pl': 'od czasu do czasu',
        'id': 'noun97',
    },
    {
        'no': 'ofte',
        'pl': 'często',
        'id': 'noun98',
    },
    {
        'no': 'nettopp',
        'pl': 'właśnie',
        'id': 'noun99',
    },
    {
        'no': 'først',
        'pl': 'najpierw',
        'id': 'noun100',
    },
    {
        'no': 'lenge',
        'pl': 'długo',
        'id': 'noun101',
    },
    {
        'no': 'snart',
        'pl': 'wkrótce',
        'id': 'noun102',
    },
    {
        'no': 'kanskje',
        'pl': 'może',
        'id': 'noun103',
    },
    ],
    [{
        'no': 'at',
        'pl': 'że',
        'id': 'noun104',
    },
    {
        'no': 'om',
        'pl': 'o, za, czy',
        'id': 'noun105',
    },
    {
        'no': 'med',
        'pl': 'z',
        'id': 'noun106',
    },
    {
        'no': 'fra',
        'pl': 'z, od',
        'id': 'noun107',
    },
    {
        'no': 'til',
        'pl': 'do',
        'id': 'noun108',
    },
    {
        'no': 'et hus',
        'pl': 'dom',
        'id': 'noun109',
    },
    {
        'no': 'hjem',
        'pl': 'dom, do domu',
        'id': 'noun110',
    },
    {
        'no': 'hjemme',
        'pl': 'w domu',
        'id': 'noun111',
    },
    {
        'no': 'et navn',
        'pl': 'imię i nazwisko',
        'id': 'noun112',
    },
    {
        'no': 'en lærer',
        'pl': 'nauczyciel',
        'id': 'noun113',
    },
    {
        'no': 'gift',
        'pl': 'żonaty, mężatka',
        'id': 'noun114',
    },
    {
        'no': 'sammen',
        'pl': 'razem',
        'id': 'noun115',
    },
    {
        'no': 'alene',
        'pl': 'sam',
        'id': 'noun116',
    },
    {
        'no': 'unnskyld',
        'pl': 'przepraszam',
        'id': 'noun117',
    },
    {
        'no': 'gjenta',
        'pl': 'powtarzać',
        'id': 'noun118',
    },
    {
        'no': 'kan',
        'pl': 'móc, umieć, potrafić',
        'id': 'noun119',
    },
    {
        'no': 'vanskelig',
        'pl': 'trudny',
        'id': 'noun120',
    },
    {
        'no': 'lett',
        'pl': 'łatwy',
        'id': 'noun121',
    },
    {
        'no': 'et barn',
        'pl': 'dziecko',
        'id': 'noun122',
    },
    {
        'no': 'en barnehage',
        'pl': 'przedszkole',
        'id': 'noun123',
    },
    {
        'no': 'en familie',
        'pl': 'rodzina',
        'id': 'noun124',
    },
    {
        'no': 'en mann',
        'pl': 'mężczyzna, mąż',
        'id': 'noun125',
    },
    {
        'no': 'en ektemann',
        'pl': 'mąż',
        'id': 'noun126',
    },
    {
        'no': 'en bil',
        'pl': 'samochód',
        'id': 'noun127',
    },
    {
        'no': 'et år',
        'pl': 'rok',
        'id': 'noun128',
    },
    {
        'no': 'gammel',
        'pl': 'stary',
        'id': 'noun129',
    },
    {
        'no': 'når ?',
        'pl': 'kiedy ?',
        'id': 'noun130',
    },
    {
        'no': 'hvordan ?',
        'pl': 'jak ?',
        'id': 'noun131',
    },
    {
        'no': 'hvor gammel er du ?',
        'pl': 'ile masz lat ?',
        'id': 'noun132',
    },
    {
        'no': 'en vei',
        'pl': 'droga',
        'id': 'noun133',
    },
    {
        'no': 'en/ei gate',
        'pl': 'ulica',
        'id': 'noun134',
    },
    ],
    [{
        'no': 'tørst',
        'pl': 'spragniony',
        'id': 'noun135',
    },
    {
        'no': 'sulten',
        'pl': 'głodny',
        'id': 'noun136',
    },
    {
        'no': 'et glass',
        'pl': 'każde naczynie szklane do picia',
        'id': 'noun137',
    },
    {
        'no': 'en kopp',
        'pl': 'filiżanka',
        'id': 'noun138',
    },
    {
        'no': 'en lyst',
        'pl': 'ochota',
        'id': 'noun139',
    },
    {
        'no': 'å ha lyst på',
        'pl': 'mieć ochotę na',
        'id': 'noun140',
    },
    {
        'no': 'en brus',
        'pl': 'napój gazowany (ogólnie)',
        'id': 'noun141',
    },
    {
        'no': 'gjerne',
        'pl': 'chętnie',
        'id': 'noun142',
    },
    {
        'no': 'å drikke',
        'pl': 'pić',
        'id': 'noun143',
    },
    {
        'no': 'å få',
        'pl': 'otrzymywać',
        'id': 'noun144',
    },
    {
        'no': 'noe',
        'pl': 'coś',
        'id': 'noun145',
    },
    {
        'no': 'en/ei brødskive',
        'pl': 'kanapka',
        'id': 'noun146',
    },
    {
        'no': 'en/ei skive',
        'pl': 'kromka',
        'id': 'noun147',
    },
    {
        'no': 'et syltetøy',
        'pl': 'dżem',
        'id': 'noun148',
    },
    {
        'no': 'et smør',
        'pl': 'masło',
        'id': 'noun149',
    },
    {
        'no': 'et brød',
        'pl': 'chlep',
        'id': 'noun150',
    },
    {
        'no': 'en skinke',
        'pl': 'szynka',
        'id': 'noun151',
    },
    {
        'no': 'en ost',
        'pl': 'ser żółty',
        'id': 'noun152',
    },
    {
        'no': 'et rundstykke',
        'pl': 'bułka okrągła',
        'id': 'noun153',
    },
    ],
    [{
        'no': 'en boks',
        'pl': 'puszka',
        'id': 'noun154',
    },
    {
        'no': 'en mat',
        'pl': 'jedzenie',
        'id': 'noun155',
    },
    {
        'no': 'en pose',
        'pl': 'reklamówka',
        'id': 'noun156',
    },
    {
        'no': 'en potet',
        'pl': 'ziemniak',
        'id': 'noun157',
    },
    {
        'no': 'en handlelapp',
        'pl': 'kartka na zakupy',
        'id': 'noun158',
    },
    {
        'no': 'en handlevogn',
        'pl': 'wózek',
        'id': 'noun159',
    },
    {
        'no': 'et ukeblad',
        'pl': 'tygodnik',
        'id': 'noun160',
    },
    {
        'no': 'mett',
        'pl': 'najedzony',
        'id': 'noun161',
    },
    {
        'no': 'forsynt',
        'pl': 'najedzony',
        'id': 'noun162',
    },
    {
        'no': 'en is',
        'pl': 'lody',
        'id': 'noun163',
    },
    {
        'no': 'til høyre',
        'pl': 'na prawo',
        'id': 'noun164',
    },
    {
        'no': 'til venstre',
        'pl': 'na lewo',
        'id': 'noun165',
    },
    {
        'no': 'borte',
        'pl': 'tam daleko, coś odległego',
        'id': 'noun166',
    },
    {
        'no': 'en pakke',
        'pl': 'paczka',
        'id': 'noun167',
    },
    {
        'no': 'et sukker',
        'pl': 'cukier',
        'id': 'noun168',
    },
    {
        'no': 'der',
        'pl': 'tam',
        'id': 'noun169',
    },
    {
        'no': 'en matpapir',
        'pl': 'papier śniadaniowy',
        'id': 'noun170',
    },
    {
        'no': 'en leverpostei',
        'pl': 'pasztet wątrobowy',
        'id': 'noun171',
    },
    {
        'no': 'en fårepølse',
        'pl': 'barania kiełbasa',
        'id': 'noun172',
    },
    {
        'no': 'en pølse',
        'pl': 'parówka',
        'id': 'noun173',
    },
    {
        'no': 'en brunost',
        'pl': 'kozi ser',
        'id': 'noun174',
    },
    {
        'no': 'fiskeboller',
        'pl': 'kluski rybne',
        'id': 'noun175',
    },
    {
        'no': 'en matpakke',
        'pl': 'pudełko na śniadanie do szkoły i pracy',
        'id': 'noun176',
    },
    {
        'no': 'et kontor',
        'pl': 'biuro',
        'id': 'noun177',
    },
    {
        'no': 'vær så god',
        'pl': 'proszę',
        'id': 'noun178',
    },
    {
        'no': 'glad',
        'pl': 'zadowolony',
        'id': 'noun179',
    },
    {
        'no': 'tidlig',
        'pl': 'wcześnie',
        'id': 'noun180',
    },
    {
        'no': 'et loff',
        'pl': 'biały chleb',
        'id': 'noun181',
    },
    {
        'no': 'et grovbrød',
        'pl': 'chleb razowy',
        'id': 'noun182',
    },
    ],
    [{
        'no': 'når',
        'pl': 'kiedy?',
        'id': 'noun183',
    },
    {
        'no': 'her',
        'pl': 'tutaj',
        'id': 'noun184',
    },
    {
        'no': 'hos',
        'pl': 'u',
        'id': 'noun185',
    },
    {
        'no': 'en buss',
        'pl': 'autobus',
        'id': 'noun186',
    },
    {
        'no': 'et tog',
        'pl': 'pociąg',
        'id': 'noun187',
    },
    {
        'no': 'en frokost',
        'pl': 'śniadanie',
        'id': 'noun188',
    },
    {
        'no': 'mellom',
        'pl': 'między',
        'id': 'noun189',
    },
    {
        'no': 'presis',
        'pl': 'dokładnie',
        'id': 'noun190',
    },
    {
        'no': 'for seint',
        'pl': 'spóźniony',
        'id': 'noun191',
    },
    {
        'no': 'en time',
        'pl': 'godzina, lekcja',
        'id': 'noun192',
    },
    {
        'no': 'en venn',
        'pl': 'przyjaciel',
        'id': 'noun193',
    },
    {
        'no': 'en/ei uke',
        'pl': 'tydzień',
        'id': 'noun194',
    },
    {
        'no': 'en lunsj',
        'pl': 'lancz',
        'id': 'noun195',
    },
    {
        'no': 'en butikk, butikken',
        'pl': 'sklep',
        'id': 'noun196',
    },
    {
        'no': 'en/ei tid',
        'pl': 'czas',
        'id': 'noun197',
    },
    {
        'no': 'en bror',
        'pl': 'brat',
        'id': 'noun198',
    },
    ],
    [{
        'no': 'selv',
        'pl': 'sam',
        'id': 'noun199',
    },
    {
        'no': 'et frimerke',
        'pl': 'znaczek pocztowy',
        'id': 'noun200',
    },
    {
        'no': 'en kjærlighet',
        'pl': 'miłość',
        'id': 'noun201',
    },
    {
        'no': 'en/ei reise',
        'pl': 'podróż',
        'id': 'noun202',
    },
    {
        'no': 'en e-post',
        'pl': 'e-mail',
        'id': 'noun203',
    },
    {
        'no': 'gjennom',
        'pl': 'przez',
        'id': 'noun204',
    },
    {
        'no': 'en flyktning',
        'pl': 'uchodźca',
        'id': 'noun205',
    },
    {
        'no': 'en nyhet',
        'pl': 'wiadomość',
        'id': 'noun206',
    },
    {
        'no': 'en vei',
        'pl': 'droga',
        'id': 'noun207',
    },
    {
        'no': 'på veien',
        'pl': 'w drodze',
        'id': 'noun208',
    },
    {
        'no': 'en vare',
        'pl': 'towar',
        'id': 'noun209',
    },
    {
        'no': 'trist',
        'pl': 'smutny',
        'id': 'noun210',
    },
    {
        'no': 'under',
        'pl': 'pod',
        'id': 'noun211',
    },
    {
        'no': 'om kvelden, hver kveld',
        'pl': 'każdego wieczora',
        'id': 'noun212',
    },
    {
        'no': 'en penn',
        'pl': 'długopis',
        'id': 'noun214',
    },
    {
        'no': 'alle',
        'pl': 'wszyscy',
        'id': 'noun215',
    },
    {
        'no': 'et land',
        'pl': 'kraj',
        'id': 'noun216',
    },
    {
        'no': 'et kurs',
        'pl': 'kurs',
        'id': 'noun217',
    },
    ],
    [{
        'no': 'meg',
        'pl': 'mnie, mi, mną',
        'id': 'noun218',
    },
    {
        'no': 'deg',
        'pl': 'ciebie, tobie, tobą',
        'id': 'noun219',
    },
    {
        'no': 'ham',
        'pl': 'jego, jemu, nim, go, niego',
        'id': 'noun220',
    },
    {
        'no': 'henne',
        'pl': 'jej, ją, nią, niej',
        'id': 'noun221',
    },
    {
        'no': 'den',
        'pl': 'tego, temu, tym',
        'id': 'noun222',
    },
    {
        'no': 'det',
        'pl': 'tego, temu, tym',
        'id': 'noun223',
    },
    {
        'no': 'oss',
        'pl': 'nas, nam, nami',
        'id': 'noun224',
    },
    {
        'no': 'dere',
        'pl': 'was, wam, wami',
        'id': 'noun225',
    },
    {
        'no': 'dem',
        'pl': 'ich, im, nimi, nich',
        'id': 'noun226',
    },
    ],
    [{
        'no': 'en/ei tann',
        'pl': 'ząb',
        'id': 'noun227',
    },
    {
        'no': 'travelt',
        'pl': 'śpieszyć się, zagoniony, zabiegany',
        'id': 'noun228',
    },
    {
        'no': 'en sekk',
        'pl': 'worek',
        'id': 'noun229',
    },
    {
        'no': 'en skolesekk',
        'pl': 'plecak',
        'id': 'noun230',
    },
    {
        'no': 'gjøre vondt',
        'pl': 'ból',
        'id': 'noun231',
    },
    {
        'no': 'vondt i magen',
        'pl': 'ból brzucha',
        'id': 'noun232',
    },
    {
        'no': 'vondt i halsen',
        'pl': 'ból gardła',
        'id': 'noun233',
    },
    {
        'no': 'en/ei kantine',
        'pl': 'stołówka',
        'id': 'noun234',
    },
    {
        'no': 'cirka, ca.',
        'pl': 'około',
        'id': 'noun235',
    },
    {
        'no': 'en feil',
        'pl': 'błąd',
        'id': 'noun236',
    },
    {
        'no': 'et menneske',
        'pl': 'człowiek',
        'id': 'noun237',
    },
    {
        'no': 'bare',
        'pl': 'tylko',
        'id': 'noun238',
    },
    {
        'no': 'trøtt',
        'pl': 'zmęczony',
        'id': 'noun239',
    },
    {
        'no': 'foran',
        'pl': 'przy',
        'id': 'noun240',
    },
    {
        'no': 'under',
        'pl': 'pod',
        'id': 'noun241',
    },
    {
        'no': 'før',
        'pl': 'przed, przedtem',
        'id': 'noun242',
    },
    {
        'no': 'fri',
        'pl': 'wolne',
        'id': 'noun243',
    },
    {
        'no': 'en/ei stue',
        'pl': 'salon',
        'id': 'noun244',
    },
    {
        'no': 'en sofa',
        'pl': 'sofa',
        'id': 'noun245',
    },
    {
        'no': 'et teppe',
        'pl': 'dywan',
        'id': 'noun246',
    },
    {
        'no': 'en lenestol',
        'pl': 'fotel',
        'id': 'noun247',
    },
    {
        'no': 'en/ei bokhylle',
        'pl': 'półka',
        'id': 'noun248',
    },
    {
        'no': 'ferdig',
        'pl': 'gotowy',
        'id': 'noun249',
    },
    {
        'no': 'en/ei kake',
        'pl': 'ciasto, ciastko',
        'id': 'noun250',
    },
    {
        'no': 'en katt',
        'pl': 'kot',
        'id': 'noun251',
    },
    {
        'no': 'en/ei mus',
        'pl': 'mysz',
        'id': 'noun252',
    },
    {
        'no': 'en/ei høne',
        'pl': 'kura',
        'id': 'noun253',
    },
    {
        'no': 'et mel',
        'pl': 'mąka',
        'id': 'noun254',
    },
    {
        'no': 'tilbake',
        'pl': 'z powrotem, wstecz',
        'id': 'noun255',
    },
    {
        'no': 'hel',
        'pl': 'cały, całkowity',
        'id': 'noun256',
    },
    {
        'no': 'vanlig',
        'pl': 'zwyczajny',
        'id': 'noun257',
    },
    {
        'no': 'beklager',
        'pl': 'przykro mi',
        'id': 'noun258',
    },
    {
        'no': 'et smørbrød',
        'pl': 'kanapka',
        'id': 'noun259',
    },
    {
        'no': 'en servitør',
        'pl': 'kelner',
        'id': 'noun260',
    },
    {
        'no': 'en gjest',
        'pl': 'gość',
        'id': 'noun261',
    },
    {
        'no': 'en hjelp',
        'pl': 'pomoc',
        'id': 'noun262',
    },
    {
        'no': 'en lege',
        'pl': 'lekarz',
        'id': 'noun263',
    },
    {
        'no': 'en tannlege',
        'pl': 'dentysta',
        'id': 'noun264',
    },
    ],
    [{
        'no': 'dessverre',
        'pl': 'niestety',
        'id': 'noun265',
    },
    {
        'no': 'utsolg',
        'pl': 'wyprzedane',
        'id': 'noun266',
    },
    {
        'no': 'et skjema',
        'pl': 'blankiet',
        'id': 'noun267',
    },
    {
        'no': 'et gebyr',
        'pl': 'opłata bankowa',
        'id': 'noun268',
    },
    {
        'no': 'født',
        'pl': 'urodzony',
        'id': 'noun269',
    },
    {
        'no': 'skrive under',
        'pl': 'podpisać',
        'id': 'noun270',
    },
    {
        'no': 'passe',
        'pl': 'uważać',
        'id': 'noun271',
    },
    {
        'no': 'selvfølgelig',
        'pl': 'oczywiście',
        'id': 'noun272',
    },
    {
        'no': 'en bil',
        'pl': 'samochód',
        'id': 'noun273',
    },
    {
        'no': 'noe annet',
        'pl': 'coś innego',
        'id': 'noun274',
    },
    {
        'no': 'tilbake',
        'pl': 'z powrotem',
        'id': 'noun275',
    },
    {
        'no': 'en pakke',
        'pl': 'paczka',
        'id': 'noun276',
    },
    {
        'no': 'for å',
        'pl': 'aby',
        'id': 'noun277',
    },
    {
        'no': 'greit',
        'pl': 'wporządku',
        'id': 'noun278',
    },
    {
        'no': 'en/ei pære',
        'pl': 'gruszka',
        'id': 'noun279',
    },
    ],
    [{
        'no': 'en by',
        'pl': 'miasto',
        'id': 'noun280',
    },
    {
        'no': 'en innsjø',
        'pl': 'jezioro',
        'id': 'noun281',
    },
    {
        'no': 'en/ei elv',
        'pl': 'rzeka',
        'id': 'noun282',
    },
    {
        'no': 'en skog',
        'pl': 'las',
        'id': 'noun283',
    },
    {
        'no': 'et fjell',
        'pl': 'góra',
        'id': 'noun284',
    },
    {
        'no': 'en/ei luft',
        'pl': 'powietrze',
        'id': 'noun285',
    },
    {
        'no': 'et hav',
        'pl': 'morze',
        'id': 'noun286',
    },
    {
        'no': 'en natur',
        'pl': 'przyroda',
        'id': 'noun287',
    },
    {
        'no': 'en restaurant',
        'pl': 'restaracja',
        'id': 'noun288',
    },
    {
        'no': 'en/ei sol',
        'pl': 'słońce',
        'id': 'noun289',
    },
    {
        'no': 'en fiord',
        'pl': 'fjord',
        'id': 'noun290',
    },
    {
        'no': 'ei hytte',
        'pl': 'hytta',
        'id': 'noun291',
    },
    {
        'no': 'en/ei helg',
        'pl': 'weekend',
        'id': 'noun292',
    },
    {
        'no': 'en hovedstad',
        'pl': 'stolica',
        'id': 'noun293',
    },
    {
        'no': 'en/ei kirke',
        'pl': 'kościół',
        'id': 'noun294',
    },
    {
        'no': 'et land (l.mn: land, landene)',
        'pl': 'kraj',
        'id': 'noun295',
    },
    {
        'no': 'en kyst',
        'pl': 'brzeg, wybrzeże',
        'id': 'noun296',
    },
    {
        'no': 'et sted',
        'pl': 'miejsce',
        'id': 'noun297',
    },
    {
        'no': 'en/ei øy',
        'pl': 'wyspa',
        'id': 'noun298',
    },
    {
        'no': 'frisk',
        'pl': 'świeży, zdrowy',
        'id': 'noun299',
    },
    {
        'no': 'fantastisk',
        'pl': 'fantastyczny',
        'id': 'noun300',
    },
    {
        'no': 'å nyte',
        'pl': 'rozkoszować się',
        'id': 'noun301',
    },
    {
        'no': 'deilig (koncówki ‘g’ nie wymawiamy)',
        'pl': 'smaczny(o jedzeniu), piękny',
        'id': 'noun302',
    },
    {
        'no': 'hel',
        'pl': 'cały, całkowity',
        'id': 'noun303',
    },
    {
        'no': 'makt',
        'pl': 'moc, władza, potęga',
        'id': 'noun304',
    },
    {
        'no': 'langstrakt',
        'pl': 'wydłużony, rozciągnięty',
        'id': 'noun305',
    },
    {
        'no': 'over',
        'pl': 'ponad',
        'id': 'noun306',
    },
    {
        'no': 'under',
        'pl': 'pod',
        'id': 'noun307',
    },
    {
        'no': 'trivelig',
        'pl': 'miły, przyjemny',
        'id': 'noun308',
    },
    {
        'no': 'nord',
        'pl': 'północ',
        'id': 'noun309',
    },
    {
        'no': 'sør',
        'pl': 'południe',
        'id': 'noun310',
    },
    {
        'no': 'vest',
        'pl': 'zachód',
        'id': 'noun311',
    },
    {
        'no': 'øst',
        'pl': 'wschód',
        'id': 'noun312',
    },
    ],
    [{
        'no': 'et vær',
        'pl': 'pogoda',
    }, {
        'no': 'en periode',
        'pl': 'okres',
    }, {
        'no': 'en bris',
        'pl': 'słaby wiatr do 10 m/s',
    }, {
        'no': 'en/ei sky',
        'pl': 'chmura',
    }, {
        'no': 'en vind',
        'pl': 'wiatr',
    }, {
        'no': 'et sludd',
        'pl': 'śnieg z deszczem',
    }, {
        'no': 'en/ei byge',
        'pl': 'przelotne opady',
    }, {
        'no': 'en nedbør',
        'pl': 'opady',
    }, {
        'no': 'en foss',
        'pl': 'wodospad',
    }, {
        'no': 'en topp',
        'pl': 'wieżchołek , szczyt',
    }, {
        'no': 'en/ei strand',
        'pl': 'plaża',
    }, {
        'no': 'en/ei sikt',
        'pl': 'widzialność , widok',
    }, {
        'no': 'en storm',
        'pl': 'burza',
    }, {
        'no': 'et yr',
        'pl': 'mżawka',
    }, {
        'no': 'et snøfokk',
        'pl': 'śnieżyca, zamieć',
    }, {
        'no': 'en torden',
        'pl': 'grzmot, grom',
    }, {
        'no': 'et lyn',
        'pl': 'piorun',
    }, {
        'no': 'en fjellovergang',
        'pl': 'przełęcz',
    }, {
        'no': 'en skredfare',
        'pl': 'osuwisko (wszystko co spada z gór)',
    }, {
        'no': 'et skred',
        'pl': 'lawina',
    }, {
        'no': 'en fare',
        'pl': 'niebezpieczeństwo',
    }, {
        'no': 'en regnbue',
        'pl': 'tęcza',
    }, {
        'no': 'en sølepytt',
        'pl': 'kałuża',
    }, {
        'no': 'enn/inn',
        'pl': 'niż (wolę to niż tamto)',
    }, {
        'no': 'full',
        'pl': 'pełno',
    }, {
        'no': 'tom',
        'pl': 'pusto',
    }, {
        'no': 'en snømann',
        'pl': 'bałwan',
    }, {
        'no': 'en tåke',
        'pl': 'mgła',
    }, {
        'no': 'uvær',
        'pl': 'niepogoda',
    }, {
        'no': 'kraftig',
        'pl': 'mocny, silny',
    }, {
        'no': 'et nedbørområde',
        'pl': 'powierzchnia opadu',
    }, {
        'no': 'en kuling',
        'pl': 'wicher, wichura do 20 m/s',
    }, {
        'no': 'tørr',
        'pl': 'suchy',
    }, {
        'no': 'mild',
        'pl': 'łagodny, potulny',
    }, {
        'no': 'en hete',
        'pl': 'upał, skwar',
    }, {
        'no': 'het',
        'pl': 'upalny, gorący',
    }, {
        'no': 'sterk',
        'pl': 'silny',
    }, {
        'no': 'førte',
        'pl': 'doprowadziło',
    }, {
        'no': 'å komme seg',
        'pl': 'przedostać się',
    }, {
        'no': 'klær',
        'pl': 'ubrania (tylko l.mn)',
    }, {
        'no': 'fortsatt',
        'pl': 'nadal',
    }, {
        'no': 'stengt',
        'pl': 'zamknięty, nieczynny',
    }, {
        'no': 'åpen',
        'pl': 'otwarty',
    }, {
        'no': 'på grunn av',
        'pl': 'z przyczyny , z powodu',
    }, {
        'no': 'redusert',
        'pl': 'zmniejszona',
    }, {
        'no': 'en flyplass',
        'pl': 'lotnisko',
    }, {
        'no': 'en tunnel',
        'pl': 'tunel',
    }, {
        'no': 'betydelig',
        'pl': 'wielki, pokaźny',
    }, {
        'no': 'å dele',
        'pl': 'dzielić',
    }, {
        'no': 'et hegl',
        'pl': 'grad',
    }, {
        'no': 'en frost',
        'pl': 'mróz',
    }, {
        'no': 'frost',
        'pl': 'mroźny',
    }, {
        'no': 'en rimfrost',
        'pl': 'przymrozek',
    }, {
        'no': 'et islag',
        'pl': 'szron',
    }, {
        'no': 'en måne',
        'pl': 'księżyc',
    }, {
        'no': 'en himmel',
        'pl': 'niebo',
    }, {
        'no': 'et stjerne',
        'pl': 'gwiazda',
    }, {
        'no': 'det blåser',
        'pl': 'wiać (mowa o wietrze)',
    }, {
        'no': 'en soloppgang',
        'pl': 'wschód słońca',
    }, {
        'no': 'en solnedgang',
        'pl': 'zachód słońca',
    }, {
        'no': 'et regn',
        'pl': 'deszcz',
    }, {
        'no': 'en snøfnugg',
        'pl': 'płatek śniegu',
    }, {
        'no': 'en snøfonn',
        'pl': 'zaspa',
    }, {
        'no': 'en istapp',
        'pl': 'sopel',
    }, {
        'no': 'et nordlys',
        'pl': 'zorza polarna',
    }, {
        'no': 'et polarlys',
        'pl': 'zorza polarna',
    }, {
        'no': 'en paraply',
        'pl': 'parasol',
    }],
    [{
        'no': 'et vær',
        'pl': 'pogoda',
    }, {
        'no': 'en lege',
        'pl': 'lekarz',
    }, {
        'no': 'en fastlege',
        'pl': 'stały lekarz',
    }, {
        'no': 'en snø',
        'pl': 'śnieg',
    }, {
        'no': 'flott',
        'pl': 'świetnie',
    }, {
        'no': 'deprimert',
        'pl': 'przygnębiony',
    }, {
        'no': 'gravid',
        'pl': 'ciąża',
    }, {
        'no': 'gøy',
        'pl': 'wesoły, zabawny',
    }, {
        'no': 'en permisjon',
        'pl': 'urlop',
    }, {
        'no': 'en årsak',
        'pl': 'przyczyna',
    }, {
        'no': 'en vanlig',
        'pl': 'zwyczaj',
    }, {
        'no': 'en/ei lønn',
        'pl': 'pensja',
    }, {
        'no': 'sånn',
        'pl': 'taki',
    }, {
        'no': 'en synd',
        'pl': 'szkoda, grzech',
    }, {
        'no': 'et forslag',
        'pl': 'propozycja',
    }, {
        'no': 'å slappe av',
        'pl': 'odpoczywac, wypoczywać',
    }, {
        'no': 'å trives',
        'pl': 'dobrze się czuć',
    }, {
        'no': 'å tro',
        'pl': 'sądzić (poparte dowodami)',
    }, {
        'no': 'å synes',
        'pl': 'sądzić (własne odczucie)',
    }, {
        'no': 'en barnetrygd',
        'pl': 'zasiłek rodzinny',
    }, {
        'no': 'et søknadskjema',
        'pl': 'blankiet podania',
    }, {
        'no': 'en rett',
        'pl': 'prawo, racja, słuszność, sąd',
    }, {
        'no': 'et språk',
        'pl': 'język',
    }, {
        'no': 'en arbeidsgiver',
        'pl': 'pracodawca',
    }, {
        'no': 'det blåser',
        'pl': 'wiać',
    }, {
        'no': 'det skyer over',
        'pl': 'chmurzy się',
    }, {
        'no': 'det klarner',
        'pl': 'rozjaśnia się',
    }, {
        'no': 'det sludd',
        'pl': 'śnieg z deszczem',
    }, {
        'no': 'vil du sitte på ?',
        'pl': 'chcesz wsiąść ?',
    }, {
        'no': 'å forstå',
        'pl': 'rozumieć, umieć (chodzi o język)',
    }, {
        'no': 'å regne',
        'pl': 'padać',
    }, {
        'no': 'å snø',
        'pl': 'śnieżyć',
    }, {
        'no': 'å bety',
        'pl': 'znaczyć',
    }, {
        'no': 'å huske',
        'pl': 'pamiętać',
    }, {
        'no': 'å skinne',
        'pl': 'świecić',
    }, {
        'no': 'å forklare',
        'pl': 'wyjaśniać, wytłumaczyć',
    }, {
        'no': 'en fødsel',
        'pl': 'poród, narodziny',
    }, {
        'no': 'en engangsstønad',
        'pl': 'zasiłek jednorazowy',
    }, {
        'no': 'en park',
        'pl': 'park',
    }, {
        'no': 'hyggelig',
        'pl': 'miły, przyjemny',
    }, {
        'no': 'en/ei mørketid',
        'pl': 'noc polarna',
    }, {
        'no': 'en/ei midnattssol',
        'pl': 'dzień polarny',
    }, {
        'no': 'nesten',
        'pl': 'prawie',
    }, {
        'no': 'neste',
        'pl': 'następny',
    }, {
        'no': 'mørk',
        'pl': 'ciemny',
    }, {
        'no': 'lys',
        'pl': 'jasny',
    }, {
        'no': 'hvorfor',
        'pl': 'dlaczego',
    }],
    [{
        'no': 'billig',
        'pl': 'tani',
    }, {
        'no': 'dyr',
        'pl': 'drogi',
    }, {
        'no': 'kikke litt',
        'pl': 'rozejrzeć się trochę',
    }, {
        'no': 'å fryse',
        'pl': 'marznąć',
    }, {
        'no': 'et regntøy',
        'pl': 'odzież przeciwdeszczowa',
    }, {
        'no': 'en gummistøvl',
        'pl': 'kalosz',
    }, {
        'no': 'et salg',
        'pl': 'sprzedaż, przecena',
    }, {
        'no': 'til salg',
        'pl': 'na sprzedaż',
    }, {
        'no': 'å bli med',
        'pl': 'towarzyszyć',
    }, {
        'no': 'en pris',
        'pl': 'cena',
    }, {
        'no': 'å prøve',
        'pl': 'próbować, przymierzać',
    }, {
        'no': 'en farge',
        'pl': 'kolor',
    }, {
        'no': 'en dusk',
        'pl': 'pompon',
    }, {
        'no': 'å hilse',
        'pl': 'pozdrawiać',
    }, {
        'no': 'slike',
        'pl': 'taki',
    }, {
        'no': 'en størrelse',
        'pl': 'rozmiar',
    }, {
        'no': 'annen',
        'pl': 'inny, drugi',
    }, {
        'no': 'samme',
        'pl': 'ten sam, taki sam',
    }, {
        'no': 'ledig',
        'pl': 'wolny',
    }, {
        'no': 'en/ei avdeling',
        'pl': 'dział',
    }, {
        'no': 'en minibank',
        'pl': 'bankomat',
    }, {
        'no': 'en/ei ekspeditrise',
        'pl': 'ekspedient, sprzedawca',
    }, {
        'no': 'en passasjer',
        'pl': 'pasażer',
    }, {
        'no': 'en kåpe',
        'pl': 'płaszcz damski',
    }, {
        'no': 'en frakk',
        'pl': 'płaszcz męski',
    }, {
        'no': 'en genser',
        'pl': 'sweter',
    }, {
        'no': 'en/ei lue',
        'pl': 'czapka',
    }, {
        'no': 'en kjole',
        'pl': 'sukienka',
    }, {
        'no': 'et par sko',
        'pl': 'para butów',
    }, {
        'no': 'en bluse',
        'pl': 'bluska (damska koszula)',
    }, {
        'no': 'et belte',
        'pl': 'pasek',
    }, {
        'no': 'et skjørt',
        'pl': 'spódnica',
    }, {
        'no': 'en/ei jakke',
        'pl': 'kurtka',
    }, {
        'no': 'en/ei bukse',
        'pl': 'spodnie',
    }, {
        'no': 'en topp',
        'pl': 'top',
    }, {
        'no': 'en/ei truse',
        'pl': 'majtki',
    }, {
        'no': 'en BH',
        'pl': 'biustonosz',
    }, {
        'no': 'en/ei t-skjorte',
        'pl': 't-shirt',
    }, {
        'no': 'en/ei skjorte',
        'pl': 'koszula',
    }, {
        'no': 'et slips',
        'pl': 'krawat',
    }, {
        'no': 'en/ei dongeribukse',
        'pl': 'jeansy',
    }, {
        'no': 'en/ei underbukse',
        'pl': 'bokserki',
    }, {
        'no': 'rød',
        'pl': 'czerwony',
    }, {
        'no': 'gul',
        'pl': 'zółty',
    }, {
        'no': 'brun',
        'pl': 'brązowy',
    }, {
        'no': 'hvit',
        'pl': 'biały',
    }, {
        'no': 'svart',
        'pl': 'czarny',
    }, {
        'no': 'blå',
        'pl': 'niebieski',
    }, {
        'no': 'vi vil bare kikke litt',
        'pl': 'my chcemy tylko rozejrzeć się trochę',
    }, {
        'no': 'kan jeg få prøve',
        'pl': 'czy mogę przymierzyć',
    }, {
        'no': 'tar ut',
        'pl': 'wypłacać (np. pieniądze z bankomatu)',
    }, {
        'no': 'bort',
        'pl': 'daleko',
    }, {
        'no': 'tøff',
        'pl': 'twardy',
    }, {
        'no': 'kikke etter',
        'pl': 'rozglądać się',
    }, {
        'no': 'noen',
        'pl': 'jakieś/kilka',
    }],
    [{ 'no': 'utenladsk', 'pl': 'zagraniczny' }, { 'no': 'et oljeselskap', 'pl': 'przeds.ropy naftowej' }, { 'no': 'å passe på', 'pl': 'opiekować się, dbać' }, { 'no': 'en ingeniør', 'pl': 'inżynier' }, { 'no': 'en fotball', 'pl': 'piłka nożna' }, { 'no': 'en håndball', 'pl': 'piłka ręczna' }, { 'no': 'foran', 'pl': 'przed' }, { 'no': 'deretter', 'pl': 'następnie' }, { 'no': 'å diskutere', 'pl': 'dyskutować' }, { 'no': 'trøtt', 'pl': 'zmęczony' }, { 'no': 'en/ei dagsavis', 'pl': 'gazeta codzienna' }, { 'no': 'en/ei lokalavis', 'pl': 'gazeta lokalna' }, { 'no': 'statlig', 'pl': 'państwowy' }, { 'no': 'en lisens', 'pl': 'licencja' }, { 'no': 'viktig', 'pl': 'ważny' }, { 'no': 'en/ei mening', 'pl': 'przekonanie, pogląd' }, { 'no': 'et hjemsted', 'pl': 'rodzinna miejscowość' }, { 'no': 'ulik', 'pl': 'różny' }, { 'no': 'massemedium', 'pl': 'masmedium' }, { 'no': 'en befolkning', 'pl': 'ludność' }, { 'no': 'et fjersyn', 'pl': 'telewizja' }, { 'no': 'å få inn', 'pl': 'odbierać' }, { 'no': 'morsom', 'pl': 'wesoły, zabawny' }, { 'no': 'tysk', 'pl': 'niemiecki' }, { 'no': 'en/ei venninne', 'pl': 'przyjaciółka' }, { 'no': 'noe annet', 'pl': 'coś innego' }, { 'no': 'en serie', 'pl': 'serial' }, { 'no': 'en kamp', 'pl': 'mecz, walka' }, { 'no': 'et program', 'pl': 'program' }, { 'no': 'seinere', 'pl': 'później' }, { 'no': 'en helse', 'pl': 'zdrowie' }, { 'no': 'et sykehus', 'pl': 'szpital' }, { 'no': 'en trening', 'pl': 'trening' }, { 'no': 'en sport', 'pl': 'sport' }, { 'no': 'et sykehus', 'pl': 'szpital' }, { 'no': 'et sykehjem', 'pl': 'dom opieki' }, { 'no': 'en sykepleier', 'pl': 'pielęgniarka' }, { 'no': 'en/ei helsesøster', 'pl': 'pielęgniarka' }, { 'no': 'en/ei helse', 'pl': 'zdrowie' }, { 'no': 'syk', 'pl': 'chory' }, { 'no': 'en pasient', 'pl': 'pacjent' }, { 'no': 'en helsestasjon', 'pl': 'przychodnia' }, { 'no': 'et legesenter', 'pl': 'przychodnia' }, { 'no': 'en/ei legevakt', 'pl': 'pogotowie ratunkowe' }, { 'no': 'en/ei tann', 'pl': 'ząb' }, { 'no': 'forskjølet', 'pl': 'przeziębiony' }, { 'no': 'en diare', 'pl': 'biegunka' }, { 'no': 'en/ei seng', 'pl': 'łóżko' }, { 'no': 'å undersøke', 'pl': 'badać' }, { 'no': 'en undersøkelse', 'pl': 'badanie' }],
    [{ 'no': 'voksen', 'pl': 'dorosły' }, { 'no': 'voksne', 'pl': 'dorośli (l.mn.)' }, { 'no': 'nok', 'pl': 'wystarczająco, dokładnie, dość' }, { 'no': 'forresten', 'pl': 'przy okazji, zresztą' }, { 'no': 'en lillebror', 'pl': 'młodszy brat' }, { 'no': 'en/ei tid', 'pl': 'czas' }, { 'no': 'en billett', 'pl': 'bilet' }, { 'no': 'en/ei tante', 'pl': 'ciocia' }, { 'no': 'nødvendig', 'pl': 'konieczne' }, { 'no': 'mulig', 'pl': 'możliwe' }, { 'no': 'innen', 'pl': 'do' }, { 'no': 'en/ei luftlinje', 'pl': 'linia powietrzna' }, { 'no': 'dyp', 'pl': 'głęboki' }, { 'no': 'utenfor', 'pl': 'poza (eng. outside)' }, { 'no': 'en landsdel', 'pl': 'część kraju' }, { 'no': 'spennende', 'pl': 'ciekawy, interesujący, ekscytujący' }, { 'no': 'variert', 'pl': 'różnorodny' }, { 'no': 'et dyr', 'pl': 'zwierze' }, { 'no': 'et dyreliv', 'pl': 'życie zwierząt' }, { 'no': 'en/ei rute', 'pl': 'trasa' }, { 'no': 'et tilbud', 'pl': 'oferta' }, { 'no': 'et kort', 'pl': 'karta' }, { 'no': 'en kode', 'pl': 'kod' }, { 'no': 'et byrå', 'pl': 'biuro/urząd' }, { 'no': 'et reisebyrå', 'pl': 'biuro podróży' }, { 'no': 'langs', 'pl': 'wzdłuż' }, { 'no': 'tusenvis', 'pl': 'tysiące' }, { 'no': 'en jernbanestasjon', 'pl': 'stacja kolejowa' }, { 'no': 'en bilferie', 'pl': 'samochodowe wakacje' }, { 'no': 'en nasjonalpark', 'pl': 'park narodowy' }, { 'no': 'tur-retur', 'pl': 'bilet w dwie strony, powrotny.' }, { 'no': 'en/ei bestemor', 'pl': 'babcia(ogólnie)' }, { 'no': 'å slå slår', 'pl': 'wystukać, uderzyć' }, { 'no': 'å bygge bygger', 'pl': 'budować' }, { 'no': 'å reservere reserverer', 'pl': 'rezerwować' }, { 'no': 'å skifte skifter', 'pl': 'zmieniać' }, { 'no': 'å kjenne kjenner', 'pl': 'znać' }, { 'no': 'å løpe løper', 'pl': 'biegać' }, { 'no': 'å flytte flytter', 'pl': 'przeprowadzać się' }, { 'no': 'plassen på toget', 'pl': 'miejsce w pociągu' },
        { 'no': 'å betale kontant', 'pl': 'płać gotówką' }, { 'no': 'forretningen', 'pl': 'sklep biznes' },
    ],
    [{ 'no': 'en pine', 'pl': 'ból' }, { 'no': 'en smerte', 'pl': 'ból' }, { 'no': 'en trening', 'pl': 'trening' }, { 'no': 'et treningsstudio', 'pl': 'siłownia' }, { 'no': 'nok', 'pl': 'wystarczająco, dokładnie, dość' }, { 'no': 'en søvn', 'pl': 'sen' }, { 'no': 'en pleier', 'pl': 'opiekun' }, { 'no': 'en gang', 'pl': 'raz, chód, hol, korytarz' }, { 'no': 'ellers', 'pl': 'poza tym, ponadto' }, { 'no': 'en tablett', 'pl': 'tabletka' }, { 'no': 'en medisin', 'pl': 'medycyna, lekarstwo' }, { 'no': 'et apotek', 'pl': 'apteka' }, { 'no': 'sånn', 'pl': 'taki' }, { 'no': 'hvorfor', 'pl': 'dlaczego' }, { 'no': 'forresten', 'pl': 'przy okazji, zresztą' }, { 'no': 'en/ei vakt', 'pl': 'warowanie' }, { 'no': 'en/ei barnevakt', 'pl': 'opieka nad dzieckiem' }, { 'no': 'en beskjed', 'pl': 'wiadomość, informacja, zawiadomienie, zapowiedź' }, { 'no': 'det er sant', 'pl': 'to prawda' }, { 'no': 'ikke sant', 'pl': 'nie prawdaż' }, { 'no': 'frisk', 'pl': 'świeży, zdrowy' }, { 'no': 'å holde seg', 'pl': 'trzymać się' }, { 'no': 'å smitte', 'pl': 'zarazić' }, { 'no': 'innom', 'pl': 'do' }, { 'no': 'en nesespray', 'pl': 'krople do nosa' }, { 'no': 'å sovne', 'pl': 'zasnąć' }, { 'no': 'god bedring', 'pl': 'dobrego zdrowia, polepszenia' }, { 'no': 'en navnedag', 'pl': 'imieniny' }, { 'no': 'en fødselsdag', 'pl': 'urodziny' }, { 'no': 'en bursdag', 'pl': 'urodziny' }, { 'no': 'å spille', 'pl': 'grać' }, { 'no': 'hyggelig', 'pl': 'miło, przyjemnie' }, { 'no': 'takk i like måte (mówi się: tak i lige mode)', 'pl': 'dziękuję, nawzajem' }, { 'no': 'stillende', 'pl': 'uśmierzający' }, { 'no': 'smertestillende tabletter', 'pl': 'przeciwbólowe, uśmierzające tabletki' }, { 'no': 'et hode', 'pl': 'głowa' }, { 'no': 'en hodepine', 'pl': 'ból głowy' }, { 'no': 'en hodepinetablett', 'pl': 'tabletka od bólu głowy' }, { 'no': 'vel', 'pl': 'dobrze' }, { 'no': 'en form', 'pl': 'forma' }],
    [{ 'no': 'en frukt', 'pl': 'owoc' }, { 'no': 'en/ei drue', 'pl': 'winogrono' }, { 'no': 'en/ei helmelk', 'pl': 'pełne mleko' }, { 'no': 'en/ei lettmelk', 'pl': 'tłuste mleko' }, { 'no': 'en/ei skummetmelk', 'pl': 'chude mleko' }, { 'no': 'å hoste', 'pl': 'kasłać' }, { 'no': 'å putte', 'pl': 'włożyć, położyć' }, { 'no': 'en/ei hylle', 'pl': 'półka' }, { 'no': 'en/ei brødhylle', 'pl': 'półka z chlebem' }, { 'no': 'ved', 'pl': 'u, przy' }, { 'no': 'en/ei bærepose', 'pl': 'reklamówka do niesienia' }, { 'no': 'forbauset', 'pl': 'zdziwiony, zaskoczony' }, { 'no': 'virkelig', 'pl': 'rzeczywiście, prawdziwie' }, { 'no': 'lettet', 'pl': 'z ulgą, ulżyć' }, { 'no': 'forskjellig', 'pl': 'różnie' }, { 'no': 'et pålegg', 'pl': 'dodatek do chleba' }, { 'no': 'en samboer', 'pl': 'partner, konkubent' }, { 'no': 'et kjøtt', 'pl': 'mięso' }, { 'no': 'en fisk', 'pl': 'ryba' }, { 'no': 'en torsk', 'pl': 'dorsz' }, { 'no': 'en ris', 'pl': 'ryż' }, { 'no': 'et sukker', 'pl': 'cukier' }, { 'no': 'søtsaker', 'pl': 'słodycze' }, { 'no': 'en tomat', 'pl': 'pomidor' }, { 'no': 'et tilbud', 'pl': 'oferta' }, { 'no': 'en disk', 'pl': 'lada' }, { 'no': 'en fruktdisk', 'pl': 'lada z owocami' }, { 'no': 'en grønnsakdisk', 'pl': 'lada z warzywami' }, { 'no': 'i stedet', 'pl': 'zamiast' }, { 'no': 'frossen', 'pl': 'mrożony' }, { 'no': 'en frysedisk', 'pl': 'lodówka' }, { 'no': 'en kjoledisk', 'pl': 'szafa chłodnicza' }, { 'no': 'grønnsaker', 'pl': 'warzywa' }, { 'no': 'en agurk', 'pl': 'ogórek' }, { 'no': 'en gulrot', 'pl': 'marchewka' }, { 'no': 'en blomkål', 'pl': 'kalafior' }, { 'no': 'en/ei kjøttkake', 'pl': 'klops, kotlet' }, { 'no': 'en/ei pølse', 'pl': 'parówka' }, { 'no': 'en paste', 'pl': 'makaron' }, { 'no': 'å prate', 'pl': 'rozmawiać, plotkować' }, { 'no': 'heldigvis', 'pl': 'szczęśliwie' }, { 'no': 'i tolvtida', 'pl': 'w dwunastej godzinie' }, { 'no': 'i sjutida', 'pl': 'w siódmej godzinie' }, { 'no': 'en konvolutt', 'pl': 'koperta' }, { 'no': 'a legge brevet i konvolutt', 'pl': 'włożyć list do koperty' }, { 'no': 'et blad', 'pl': 'czasopismo, ostrze, prześcieradło, liść, karta, kartka, arkusz.' }, { 'no': 'frossen', 'pl': 'zamarźnięty, zamrożony' }],
    [{ 'no': 'et yrke', 'pl': 'zawód' }, { 'no': 'en bilmekaniker', 'pl': 'mechanik samochodowy' }, { 'no': 'et verksted', 'pl': 'warsztat' }, { 'no': 'en industriarbeider', 'pl': 'robotnik w przemyśle' }, { 'no': 'et selskap', 'pl': 'spółka , towarzystwo, party, dinner party' }, { 'no': 'en industri', 'pl': 'przemysł' }, { 'no': 'en oljeindustri', 'pl': 'przemysł naftowy' }, { 'no': 'en platform', 'pl': 'platforma' }, { 'no': 'en mening', 'pl': 'opinia, pogląd' }, { 'no': 'ikke så verst', 'pl': 'nie najgorzej' }, { 'no': 'en/ei utdanning', 'pl': 'wykrztałcenie' }, { 'no': 'en fisker', 'pl': 'rybak' }, { 'no': 'en fisk', 'pl': 'ryba' }, { 'no': 'en/ei fiskeskøyte', 'pl': 'kuter rybacki' }, { 'no': 'en sjø', 'pl': 'morze' }, { 'no': 'et hav', 'pl': 'morze' }, { 'no': 'en prest', 'pl': 'pastor' }, { 'no': 'et barnebarn', 'pl': 'wnuk' }, { 'no': 'et oldebarn', 'pl': 'prawnuk' }, { 'no': 'velkomen', 'pl': 'zapraszamy' }, { 'no': 'arbeidsledig', 'pl': 'bezrobotny' }, { 'no': 'en elev', 'pl': 'uczeń' }, { 'no': 'om seg selv', 'pl': 'o sobie samym' }, { 'no': 'å flykte', 'pl': 'emigrować , uciekać' }, { 'no': 'å flytte', 'pl': 'przeprowadzać się' }, { 'no': 'en ting', 'pl': 'rzecz' }, { 'no': 'heldigvis', 'pl': 'szczęśliwie' }, { 'no': 'et bakeri', 'pl': 'piekarnia' }, { 'no': 'å bake', 'pl': 'piec, smażyć' }, { 'no': 'en baker', 'pl': 'piekarz' }, { 'no': 'et skift', 'pl': 'zmiana' }, { 'no': 'å miste', 'pl': 'stracić , zgubić' }, { 'no': 'ganske', 'pl': 'całkiem' }, { 'no': 'å melde', 'pl': 'meldować się, zgłosić' }, { 'no': 'å håpe', 'pl': 'mieć nadzieje' }, { 'no': 'et menneske', 'pl': 'człowiek' }, { 'no': 'å re, re opp', 'pl': 'ścielić(łóżko)' }, { 'no': 'en bolle', 'pl': 'bułeczka (słodka)' }, { 'no': 'et horn', 'pl': 'rogalik' }, { 'no': 'å reparere', 'pl': 'reperować' }, { 'no': 'å undervise', 'pl': 'nauczać' }, { 'no': 'å ha rett', 'pl': 'mieć rację' }, { 'no': 'samme', 'pl': 'taki sam' }, { 'no': 'fordi', 'pl': 'ponieważ' }, { 'no': 'et hjemland', 'pl': 'ojczyzna' }, { 'no': 'et heltidsarbeid', 'pl': 'praca na pełnym etacie, całodzienny czas pracy' }, { 'no': 'et hagearbeid', 'pl': 'praca w ogrodzie' }, { 'no': 'liknende', 'pl': 'tym podobne' }, { 'no': 'yrkesaktiv', 'pl': 'aktywny zawodowo' }, { 'no': 'en kokk', 'pl': 'kucharz' }, { 'no': 'i tillegg', 'pl': 'w dodatku' }, { 'no': 'å støvsuge', 'pl': 'odkurzać' }, { 'no': 'å dele', 'pl': 'dzielić' }, { 'no': 'en forelder', 'pl': 'rodzic' }, { 'no': 'en ungdom', 'pl': 'młodzież' }, { 'no': 'en pensjonist', 'pl': 'emeryt' }, { 'no': 'å stenge', 'pl': 'zamknąć, zamykać' }, { 'no': 'å starte', 'pl': 'rozpocząć , zacząć' }, { 'no': 'travel', 'pl': 'zabiegany, zajęty, śpieszyć się' }, { 'no': 'en/ei seng', 'pl': 'łóżko' }, { 'no': 'en fysioterapeut', 'pl': 'fizjoterapeuta' }, { 'no': 'en praksisplass', 'pl': 'praktyka, staż' }, { 'no': 'politisk', 'pl': 'polityczny' }, { 'no': 'en fest', 'pl': 'świętowanie, impreza' }, { 'no': 'spesielt', 'pl': 'zwłaszcza' }, { 'no': 'en bussjåfør', 'pl': 'kierowca autobusu' }, { 'no': 'en datter', 'pl': 'córka' },
        { 'no': 'muntlig eksamen', 'pl': 'egzamin ustny' },
        { 'no': 'skriftlig eksamen', 'pl': 'egzamin pisemny' },
        { 'no': 'å sjekke  sjekker   sjekket    har sjekket ', 'pl': 'sprawdzić' },

    ],
    [{ 'no': 'en/ie fritid', 'pl': 'czas wolny' }, { 'no': 'å svømme', 'pl': 'pływać' }, { 'no': 'en øvelse', 'pl': 'próba, na próbę' }, { 'no': 'et band', 'pl': 'zespół muzyczny' }, { 'no': 'et bryllup', 'pl': 'ślub' }, { 'no': 'isolert', 'pl': 'odizolowany' }, { 'no': 'veldig', 'pl': 'bardzo' }, { 'no': 'å rekke', 'pl': 'zdążyć' }, { 'no': 'en kamerat', 'pl': 'kolega' }, { 'no': 'å mekke', 'pl': 'majsterkować' }, { 'no': 'å spare', 'pl': 'oszczędzać' }, { 'no': 'derfor', 'pl': 'dlatego' }, { 'no': 'matlaging', 'pl': 'gotowanie' }, { 'no': 'slitsom', 'pl': 'męczące' }, { 'no': 'kjedelig', 'pl': 'nudne' }, { 'no': 'stadig', 'pl': 'ciągle' }, { 'no': 'stadig flere', 'pl': 'coraz więcej' }, { 'no': 'felles', 'pl': 'współny' }, { 'no': 'hvis', 'pl': 'jeśli, jeżeli' }, { 'no': 'alder', 'pl': 'wiek' }, { 'no': 'stille', 'pl': 'łagodzić, pomagać' }, { 'no': 'særlig', 'pl': 'szczególnie' }, { 'no': 'en dans', 'pl': 'taniec' }, { 'no': 'glad i', 'pl': 'lubić' }, { 'no': 'et swing', 'pl': 'kurs tańca swing' }, { 'no': 'en saksofon', 'pl': 'saksofon' }, { 'no': 'en/ei skøyte', 'pl': 'łyżwa' }, { 'no': 'en kamerat', 'pl': 'kolega' }, { 'no': 'å holde på', 'pl': 'zajmować się' }, { 'no': 'å bestemme', 'pl': 'decydować, postanowić' }, { 'no': 'å stoppe', 'pl': 'zatrzymać' }, { 'no': 'å invitere', 'pl': 'zaprosić' }, { 'no': 'å strikke', 'pl': 'robić na drutach' }, { 'no': 'å sy', 'pl': 'szyć' }, { 'no': 'å hekle', 'pl': 'szydełkować' }, { 'no': 'et morsmål', 'pl': 'język ojczysty' }, { 'no': 'å drive', 'pl': 'zajmować się , prowadzić' }, { 'no': 'et medlem', 'pl': 'członek (np.klubu)' }, { 'no': 'en idrettsklubb', 'pl': 'klub sportowy' }, { 'no': 'fort', 'pl': 'szybko' }, { 'no': 'langsom', 'pl': 'wolno, powoli' }, { 'no': 'i like mate (czytamy: i lige mode)', 'pl': 'nawzajem' }, { 'no': 'å støvsuge', 'pl': 'odkurzać' }],
    [{ 'no': 'en bror brødre brødrene', 'pl': 'brat' }, { 'no': 'en/ei søster søstre søstrene', 'pl': 'siostra' }, { 'no': 'en/ei mor mødre mødrene', 'pl': 'matka' }, { 'no': 'en far fedre fedrene', 'pl': 'ojciec' }, { 'no': 'en/ei datter døtre døtrene', 'pl': 'córka' }, { 'no': 'en mann menn mennene', 'pl': 'mąż, mężczyzna' }, { 'no': 'en/ei bok bøker bøkene', 'pl': 'książka' }, { 'no': 'en/ei hånd hender hendene', 'pl': 'ręka' }, { 'no': 'en/ei natt netter nettene', 'pl': 'noc' }, { 'no': 'en/ei strand strender strendene', 'pl': 'plaża' }, { 'no': 'e/ei bot bøter bøtene', 'pl': 'mandat' }, { 'no': 'en fot føtter føttene', 'pl': 'stopa' }, { 'no': 'en bonde bønder bøndene', 'pl': 'chłop, rolnik' }, { 'no': 'en hovedstad hovedsteder hovedstedene', 'pl': 'stolica' }, { 'no': 'en/ei tåg tæger tægene', 'pl': 'korzeń' }, { 'no': 'en rot røtter røttene', 'pl': 'korzeń' }, { 'no': 'et kne knær knærne', 'pl': 'kolano' }, { 'no': 'en/ei tå tær tærne', 'pl': 'duży palec u nogi' }, { 'no': 'et tre trær trærne', 'pl': 'drzewo' }, { 'no': 'en/ei tann tenner tennene', 'pl': 'ząb' }, { 'no': 'en/ei ku kyr kyrne', 'pl': 'krowa' }, { 'no': 'en/ei gås gjess gjessene', 'pl': 'gęś' }, { 'no': 'en/ei and ender endene', 'pl': 'kaczka' }],
    [{ 'no': 'å greie', 'pl': 'zdołać' }, { 'no': 'å glemme', 'pl': 'zapomnieć' }, { 'no': 'å ringe', 'pl': 'dzwonić' }, { 'no': 'neste', 'pl': 'następny' }, { 'no': 'nesten', 'pl': 'prawie' }, { 'no': 'å plystre', 'pl': 'gwizdać' }, { 'no': 'å hende', 'pl': 'zdarzyć się' }, { 'no': 'egentlig', 'pl': 'właściwie, faktycznie' }, { 'no': 'å høre', 'pl': 'słuchać' }, { 'no': 'et mord', 'pl': 'morderstwo' }, { 'no': 'en heis', 'pl': 'winda' }, { 'no': 'så………at', 'pl': 'tak….że' }, { 'no': 'plutselig', 'pl': 'nagle' }, { 'no': 'en avtale', 'pl': 'umowa, porozumienie' }, { 'no': 'ta fram', 'pl': 'wyjąć' }, { 'no': 'en mobiltelefon', 'pl': 'tel.komórkowy' }, { 'no': 'til slutt', 'pl': 'w końcu, na koniec' }, { 'no': 'å ta imot en beskjed', 'pl': 'przekazać wiadomość' }, { 'no': 'en livssituasjon', 'pl': 'sytuacja życiowa' }, { 'no': 'en rettighet', 'pl': 'prawo, przywilej, słuszność' }, { 'no': 'et selvbestemt', 'pl': 'na własne żądanie' }, { 'no': 'en lov', 'pl': 'ustawa' }, { 'no': 'inntil', 'pl': 'do' }, { 'no': 'et svangerskap', 'pl': 'ciąża' }, { 'no': 'å beholde', 'pl': 'zachować' }, { 'no': 'en regjering', 'pl': 'rządzenie' }, { 'no': 'å merke', 'pl': 'znaczyć' }, { 'no': 'å velge', 'pl': 'wybrać' }, { 'no': 'å kjempe', 'pl': 'walczyć' }, { 'no': 'nysgjerrig', 'pl': 'dociekliwy' }, { 'no': 'en beskjed', 'pl': 'wiadomość, zawiadomienie' }, { 'no': 'et folk', 'pl': 'ludność' }, { 'no': 'en verden', 'pl': 'świat' }, { 'no': 'å mene', 'pl': 'sądzić' }, { 'no': 'en forsker', 'pl': 'badacz' }, { 'no': 'å utdanne', 'pl': 'krztałcić' }, { 'no': 'et miljø', 'pl': 'środowisko' }, { 'no': 'en statsminister', 'pl': 'premier' }, { 'no': 'beskjeden', 'pl': 'skromny, nieśmiały' }, { 'no': 'useriøse', 'pl': 'niepoważne' }, { 'no': 'en flåte', 'pl': 'tratwa' }, { 'no': 'et balsatre', 'pl': 'drzewo balsa' }, { 'no': 'å seile', 'pl': 'żeglować' }, { 'no': 'blant', 'pl': 'wśród, pośród, pomiędzy' }, { 'no': 'å vise', 'pl': 'pokazać' }, { 'no': 'å dø', 'pl': 'umrzeć' }, { 'no': 'en sivbåt', 'pl': 'łódź trzcinowa' }],
    [{ 'no': 'et asylmottak', 'pl': 'ośrodek tymczasowego pobytu azylantów.' }, { 'no': 'en asylsøker', 'pl': 'azylant(ubiegający się o azyl)' }, { 'no': 'en trygghet', 'pl': 'bezpieczeństwo' }, { 'no': 'nokså', 'pl': 'dość, stosunkowo, nieźle' }, { 'no': 'ensom', 'pl': 'samotny' }, { 'no': 'endelig', 'pl': 'nareszcie, wreszcie' }, { 'no': 'lykkelig', 'pl': 'szczęśliwy' }, { 'no': 'dugnad', 'pl': 'wspólne sprzątanie domu przez lokatorów i okolic' }, { 'no': 'stelle, steller, stelte stelt', 'pl': 'pielęgnować, dbać (nurse, care for)' }, { 'no': 'en vaffel', 'pl': 'gofr' }, { 'no': 'flink', 'pl': 'zdolny' }, { 'no': 'en ullongs', 'pl': 'getry' }, { 'no': 'å drive', 'pl': 'prowadzić, ciągnąć' }, { 'no': 'å synge', 'pl': 'śpiewać' }, { 'no': 'fordi', 'pl': 'ponieważ' }, { 'no': 'tidsklemme', 'pl': 'ściskać czas' }, { 'no': 'å følge', 'pl': 'podążać, śledzić' }, { 'no': 'en fetter', 'pl': 'kuzyn' }, { 'no': 'ganske', 'pl': 'całkiem' }, { 'no': 'et soverom', 'pl': 'sypialnia' }, { 'no': 'et soveværelse', 'pl': 'sypialnia' }, { 'no': 'en leilighet', 'pl': 'mieszkanie' }, { 'no': 'et kjøkken', 'pl': 'kuchnia' }, { 'no': 'et bad', 'pl': 'łazienka' }, { 'no': 'en plante', 'pl': 'roślina' }, { 'no': 'å koke', 'pl': 'gotować' }, { 'no': 'en etasje', 'pl': 'piętro' }, { 'no': 'en blokk', 'pl': 'blok' }, { 'no': 'å male', 'pl': 'malować' }, { 'no': 'en måte', 'pl': 'sposób' }, { 'no': 'et gulv', 'pl': 'podłoga' }, { 'no': 'ren', 'pl': 'czysty' }, { 'no': 'sliten', 'pl': 'wyczerpany' }, { 'no': 'blek', 'pl': 'blady' }, { 'no': 'dessuten', 'pl': 'ponadto, poza tym' }, { 'no': 'å røyke, røyker, røykte, røykt ', 'pl': 'palić' }, { 'no': 'en sund', 'pl': 'chwila, moment' }, { 'no': 'sunn', 'pl': 'zdrowy' }, { 'no': 'kjede seg', 'pl': 'nudzić się' }], [{ 'no': 'å leie', 'pl': 'wynajmować' }, { 'no': 'en/ei leie', 'pl': 'czynsz' }, { 'no': 'trang', 'pl': 'ciasny' }, { 'no': 'dessuten', 'pl': 'poza tym, w dodatku' }, { 'no': 'en bolig', 'pl': 'lokal' }, { 'no': 'til salgs', 'pl': 'na sprzedaż' }, { 'no': 'i alle fall', 'pl': 'w każdym razie, na wszelki wypadek' }, { 'no': 'en/ei tomt', 'pl': 'działka' }, { 'no': 'en hage', 'pl': 'ogród' }, { 'no': 'en utsikt', 'pl': 'widok' }, { 'no': 'en etasje', 'pl': 'piętro' }, { 'no': 'en visning', 'pl': 'oglądanie' }, { 'no': 'en eiendomsmegler', 'pl': 'pośrednik sprzedaży nieruchomości.' }, { 'no': 'en anonse', 'pl': 'ogłoszenie' }, { 'no': 'det stemmer', 'pl': 'zgadza się' }, { 'no': 'nervøs', 'pl': 'zdenerwowany' }, { 'no': 'koselig', 'pl': 'przytulny, miły, mały , sympatyczny.' }, { 'no': 'gjelde', 'pl': 'dotyczyć, tyczyć się, obowiązywać.' }, { 'no': 'et mål', 'pl': '1000 metrów kwadratowych' }, { 'no': 'i dårlig stand', 'pl': 'w złym stanie' }, { 'no': 'på landet', 'pl': 'na wsi' }, { 'no': 'en plen', 'pl': 'trawnik' }, { 'no': 'en eier', 'pl': 'właściciel' }, { 'no': 'en slektning', 'pl': 'krewny' }, { 'no': 'en/ei side', 'pl': 'strona' }, { 'no': 'en/ei bakside', 'pl': 'tylna strona' }, { 'no': 'nydelig', 'pl': 'uroczy, śliczny' }, { 'no': 'et skap', 'pl': 'szafka' }, { 'no': 'en kjøkkenbenk', 'pl': 'blat kuchenny' }, { 'no': 'en vegg', 'pl': 'ściana' }, { 'no': 'et badekar', 'pl': 'wanna' }, { 'no': 'skitten', 'pl': 'brudny' }, { 'no': 'en/ei dobbeltseng', 'pl': 'łoże podwójne, małżeńskie' }, { 'no': 'la være', 'pl': 'unikać' }, { 'no': 'å ordne', 'pl': 'doprowadzić do porządku.' }, { 'no': 'stille', 'pl': 'cichy' }, { 'no': 'et fritidsproblem', 'pl': 'problem z wykorzystywaniem czasu wolnego.' }, { 'no': 'bak', 'pl': 'za , z tyłu' }, { 'no': 'ved siden av', 'pl': 'obok' }, { 'no': 'en stol', 'pl': 'krzesło' }, { 'no': 'et loft', 'pl': 'strych' }, { 'no': 'en kjeller', 'pl': 'piwnica' }, { 'no': 'rundt', 'pl': 'dokoła' }, { 'no': 'et råd', 'pl': 'rada, porada, środki pieniężne' }, { 'no': 'å ha råd til', 'pl': 'stać kogoś na coś' }, { 'no': 'enebolig', 'pl': 'dom jednorodzinny' }],
    [{ 'no': 'et månedskort', 'pl': 'bilet miesięczny' }, { 'no': 'siste', 'pl': 'ostatni' }, { 'no': 'midt på dagen', 'pl': 'w południe' }, { 'no': 'framme', 'pl': 'na miejscu' }, { 'no': 'en forsinkelse', 'pl': 'spóźnienie' }, { 'no': 'en/ei innsjekking', 'pl': 'nadanie bagażu' }, { 'no': 'et kolli', 'pl': 'sztuk pakunku' }, { 'no': 'sikker', 'pl': 'pewny, bezpieczny' }, { 'no': 'forbudt', 'pl': 'zabronione' }, { 'no': 'en landing', 'pl': 'lądowanie' }, { 'no': 'en bakke', 'pl': 'ziemia, górka' }, { 'no': 'påpekende', 'pl': 'wskazujące' }, { 'no': 'en/ei drosje', 'pl': 'taksówka' }, { 'no': 'annenher', 'pl': 'co drugi' }, { 'no': 'en/ei veske', 'pl': 'torba, torebka' }, { 'no': 'et skilt', 'pl': 'znak' }, { 'no': 'å frakte', 'pl': 'przewozić, transportować' }, { 'no': 'gods', 'pl': 'towary' }, { 'no': 'i all slags vær', 'pl': 'w każdą pogodę' }, { 'no': 'nordover', 'pl': 'w kierunku północnym' }, { 'no': 'sørover', 'pl': 'w kierunku południowym' }, { 'no': 'et transportmiddel', 'pl': 'środek transportu' }, { 'no': 'i våre dager', 'pl': 'w naszych czasach' }, { 'no': 'et sommerhalvår', 'pl': 'letnia część roku' }, { 'no': 'å servere', 'pl': 'podawać do stołu, obsługiwać' }, { 'no': 'et dekk', 'pl': 'pokład' }, { 'no': 'derfor', 'pl': 'dlatego' }, { 'no': 'nydelig', 'pl': 'uroczy, piękny, śliczny' }, { 'no': 'å følge', 'pl': 'płynąć, nastąpić, podążać(za)' }, { 'no': 'likevel', 'pl': 'jednak, mimo wszystko, mimo tego ' }, { 'no': 'en skip', 'pl': 'okręt, statek' }, { 'no': 'et minne', 'pl': 'wspomnienie, pamiątka, pamięć' }, { 'no': 'å minne', 'pl': 'przypominać, przypomnieć' }, { 'no': 'en/ei bygd', 'pl': 'wieś, okolica, gmina' }, { 'no': 'en tanke', 'pl': 'myśl, pomysł, zamiar' }, { 'no': 'å tanke', 'pl': 'tankować' }, { 'no': 'en drøm', 'pl': 'marzenie' }, { 'no': 'å drømme', 'pl': 'śnić, marzyć' }], [{ 'no': 'å smøre', 'pl': 'smarować' }, { 'no': 'en stav', 'pl': 'kijek, patyk (en skistav - kijek do nart)' }, { 'no': 'glatt', 'pl': 'śliski' }, { 'no': 'å skrape', 'pl': 'skrobać' }, { 'no': 'en bevegelse', 'pl': 'ruch' }, { 'no': 'lun', 'pl': 'przytulny' }, { 'no': 'å renne', 'pl': 'zjeżdżać' }, { 'no': 'å møte', 'pl': 'spotykać' }, { 'no': 'solbrent', 'pl': 'spalony słońcem, opalony' }, { 'no': 'et fjes', 'pl': 'twarz' }, { 'no': 'sur', 'pl': 'niezadowolony, kwaśny' }, { 'no': 'en same', 'pl': 'lapończyk' }, { 'no': 'en urbefolkning', 'pl': 'ludność rdzenna' }, { 'no': 'en/ei halvøy', 'pl': 'półwysep' }, { 'no': 'samisk', 'pl': 'lapoński' }, { 'no': 'en flokk', 'pl': 'stado' }, { 'no': 'et reinsdyr', 'pl': 'renifer' }, { 'no': 'en innbygger', 'pl': 'mieszkaniec' }, { 'no': 'et hovedområde', 'pl': 'główne miejsce zamieszkania.' }, { 'no': 'en barneskole', 'pl': 'szkoła podstawowa' }, { 'no': 'omkring', 'pl': 'około' }, { 'no': 'karakteristisk', 'pl': 'charakterystyczny' }, { 'no': 'en sang', 'pl': 'śpiew' }, { 'no': 'en joik', 'pl': 'śpiew lapończyków' }, { 'no': 'å forandre seg', 'pl': 'zmieniać się' }, { 'no': 'etnisk', 'pl': 'etniczny' }, { 'no': 'en tilhørighet', 'pl': 'przynależność' }, { 'no': 'en/ei klesdrakt', 'pl': 'strój' }, { 'no': 'sametinget', 'pl': 'parlament lapoński' }, { 'no': 'et valg', 'pl': 'wybór' }, { 'no': 'en/ei beitemark', 'pl': 'pastwisko' }, { 'no': 'forbudt', 'pl': 'zabronione, wzbronione' }, { 'no': 'en rettighet', 'pl': 'prawo, przywilej, słuszność.' }, { 'no': 'herlig', 'pl': 'cudowny' }, { 'no': 'kjempekald', 'pl': 'bardzo zimno' }, { 'no': 'en sandvolleyball', 'pl': 'siatkówka plażowa' }, { 'no': 'en moro', 'pl': 'zabawa, uciecha, rozrywka' }, { 'no': 'å sta på ski', 'pl': 'jeździć na nartach' }, { 'no': 'igjen', 'pl': 'znowu' }, { 'no': 'bratt', 'pl': 'stromo, spadziście' }, { 'no': 'å tore', 'pl': 'odważyć się' }, { 'no': 'å våkne', 'pl': 'obudzić się' }, { 'no': 'en skitur', 'pl': 'wycieczka na nartach' }, { 'no': 'en ide', 'pl': 'pomysł' }, { 'no': 'tålmodig', 'pl': 'cierpliwy' }, { 'no': 'en bakke', 'pl': 'ziemia, górka' }, { 'no': 'en tale', 'pl': 'mowa' }, { 'no': 'å gjelde', 'pl': 'dotyczyć' }, { 'no': 'en/ei kappkjøring', 'pl': 'wyścig' }, { 'no': 'en/ei sak', 'pl': 'sprawa' }],
    [{ 'no': 'røyking forbudt', 'pl': 'palenie zabronione' }, { 'no': 'en utgang', 'pl': 'wyjście' }, { 'no': 'en inngang', 'pl': 'wejście' }, { 'no': 'nødutgang', 'pl': 'wyjście awaryjne' }, { 'no': 'adgang forbudt', 'pl': 'wstęp wzbroniony' }, { 'no': 'forsiktig', 'pl': 'ostrożnie' }, { 'no': 'rett fram', 'pl': 'prosto' }, { 'no': 'pass på !', 'pl': 'uwaga !' }, { 'no': 'en fare', 'pl': 'niebezpieczeństwo' }, { 'no': 'et ras', 'pl': 'lawina' }, { 'no': 'et lys', 'pl': 'światło' }, { 'no': 'en bruktbil', 'pl': 'samochód używany' }, { 'no': 'å sammenlikne', 'pl': 'porównywac' }, { 'no': 'et merke', 'pl': 'marka' }, { 'no': 'å prøvekjøre', 'pl': 'jeździć na próbę' }, { 'no': 'omtrent', 'pl': 'około' }, { 'no': 'et skilt', 'pl': 'znak, szyld, wywieszka' }, { 'no': 'sannsynligvis', 'pl': 'prawdopodobnie' }, { 'no': 'å vinke', 'pl': 'machać' }, { 'no': 'å vinke på', 'pl': 'machać na kogoś' }, { 'no': 'en politikonstabel', 'pl': 'funkcjonariusz' }, { 'no': 'å vinke inn', 'pl': 'przywołać' }, { 'no': 'å rulle', 'pl': 'zwinąć' }, { 'no': 'riktig', 'pl': 'prawidłowy, słuszny, prawdziwy' }, { 'no': 'et vognkort', 'pl': 'dowód rejestracyjny' }, { 'no': 'en/ei fartsbot', 'pl': 'mandat za przekroczenie dozwolonej prędkości' }, { 'no': 'en/ei bot', 'pl': 'mandat' }, { 'no': 'å vedta', 'pl': 'akceptować' }, { 'no': 'vær så snill', 'pl': 'bądź tak miły' }, { 'no': 'en tøffel', 'pl': 'pantofel, kapeć' }, { 'no': 'glatt', 'pl': 'śliski, gładki' }, { 'no': 'sikker', 'pl': 'pewny, bezpieczny' }, { 'no': 'lur', 'pl': 'bystry, sprytny, przebiegły (pejoratywne znaczenie)' }, { 'no': 'å angre', 'pl': 'żałować' }, { 'no': 'å lure', 'pl': 'oszukiwać, ogłupiać, mamić' }, { 'no': 'å lure på', 'pl': 'zastanawiać się nad' }, { 'no': 'en fart', 'pl': 'prędkość' }, { 'no': 'et forhold', 'pl': 'warunek, stosunek, więź, związek' }, { 'no': 'en hovedregel', 'pl': 'główna reguła' }, { 'no': 'en trafikant', 'pl': 'użytkownik drogi' }, { 'no': 'hvis', 'pl': 'jeśli , jeżeli' }, { 'no': 'en bilfører', 'pl': 'kierowca' }, { 'no': 'å miste', 'pl': 'stracić, zgubić' }, { 'no': 'en/ei fartsgrense', 'pl': 'ograniczenie prędkości' }, { 'no': 'tettbygde strøk', 'pl': 'obszar zabudowany' }, { 'no': 'etter', 'pl': 'według , po, za' }, { 'no': 'våken', 'pl': 'czujny , obudzony' }, { 'no': 'fornøyd', 'pl': 'zadowolony' }, { 'no': 'viktig', 'pl': 'ważny' }, { 'no': 'en trafikkregler', 'pl': 'przepis drogowy' }, { 'no': 'en/ei ulykke', 'pl': 'wypadek' }, { 'no': 'i det hele tatt', 'pl': 'w ogóle' }, { 'no': 'uansett', 'pl': 'w każdym razie, tak czy inaczej' }, { 'no': 'påbudt', 'pl': 'nakaz' }, { 'no': 'et nærlys', 'pl': 'światła krótkie' }, { 'no': 'kjært', 'pl': 'kochany' }, { 'no': 'å dø', 'pl': 'umierać' }, { 'no': 'å skade', 'pl': 'uszkodzić, zepsuć, zranić' }, { 'no': 'et skade', 'pl': 'szkoda, krzywda, uszkodzenie, obrażenie(ciała)' }, { 'no': 'en myndighet', 'pl': 'władza' }, { 'no': 'å forsøke', 'pl': 'próbować' }, { 'no': 'å forhindre', 'pl': 'zapobiegać' }, { 'no': 'å skje', 'pl': 'zdarzyć się, wydarzyć się' }, { 'no': 'edru', 'pl': 'trzeźwy' }, { 'no': 'å påvirke', 'pl': 'oddziaływać' }, { 'no': 'i påvirket tilstand', 'pl': 'stan pod wpływem' }, { 'no': 'en medisin', 'pl': 'lekarstwo, medycyna' }, { 'no': 'komfortabel', 'pl': 'komfortowy' }, { 'no': 'endelig', 'pl': 'nareszcie' }, { 'no': 'en/ei avbetaling', 'pl': 'na raty' }, { 'no': 'å ruste', 'pl': 'rdzewieć' }, { 'no': 'en hestekraft', 'pl': 'koń mechaniczny' }, { 'no': 'engstelig', 'pl': 'zaniepokojony' }, { 'no': 'uforsiktig', 'pl': 'nieostrożnie' }, { 'no': 'en trafikk', 'pl': 'ruch samochodowy' }, { 'no': 'redd', 'pl': 'przestraszony' }, { 'no': 'fryktelig', 'pl': 'straszny' }, { 'no': 'smal', 'pl': 'wąski' }, { 'no': 'en ball', 'pl': 'piłka' }, { 'no': 'stilig', 'pl': 'stylowy, szykowny' }, { 'no': 'altfor', 'pl': 'zbyt' }, { 'no': 'a mase', 'pl': 'marudzić' }, { 'no': 'ikke mas !', 'pl': 'nie marudź !' }, { 'no': 'å teste', 'pl': 'próbować' }, { 'no': 'en fartskontroll', 'pl': 'kontola prędkości' }, { 'no': 'å bli tatt', 'pl': 'zostać zatrzymanym' }, { 'pl': 'okropny, beznadziejny', no: 'elendig' },  { 'pl': 'obok', no: 'forbi' }, { pl: 'Nie skręcaj w lewo', no: 'Ikke sving til venstre' }, { pl: 'nie wyprzedzaj', no: 'Ikke kjør forbi' }, { pl: 'parking', no: 'en parkering' }, { pl: 'benzyna', no: 'en bensin' }, { pl: 'silnik', no: 'en motor' }, { pl: 'zniszczyć (destroy, wreck)', no: 'å ødelegge' }, { pl: 'å sette på', no: 'włączyć, ustawić (switch/turn on, set' }, { pl: 'Jestem pewny, że', no: 'Jeg er sikker på at' }],

    [{ 'no': 'en/ei vekkerklokke', 'pl': 'budzik' }, { 'no': 'en sønn', 'pl': 'syn' }, { 'no': 'gal', 'pl': 'szalony, niewłaściwy, mylny' }, { 'no': 'å stille', 'pl': 'nastawić, łagodzić, uśmierzać' }, { 'no': 'stille', 'pl': 'cicho, spokojnie' }, { 'no': 'å gre', 'pl': 'czesać' }, { 'no': 'å rope', 'pl': 'wołać, krzyczeć, wzywać.' }, { 'no': 'et barneværelse', 'pl': 'pokój dziecięcy' }, { 'no': 'å tappe', 'pl': 'czerpać, lać, napuścić(wodę)' }, { 'no': 'brått', 'pl': 'nagle, gwałtownie, nie w porę' }, { 'no': 'å barbere seg', 'pl': 'golić się' }, { 'no': 'å koke', 'pl': 'gotować' }, { 'no': 'våt', 'pl': 'mokry' }, { 'no': 'tørr', 'pl': 'suchy' }, { 'no': 'et håndkle', 'pl': 'ręcznik' }, { 'no': 'en hånd', 'pl': 'ręka' }, { 'no': 'å tørke', 'pl': 'wytrzeć, wysuszyć' }, { 'no': 'på tide', 'pl': 'najwyższy czas' }, { 'no': 'hverandre', 'pl': 'nawzajem, wzajemnie' }, { 'no': 'en helsekontroll', 'pl': 'kontrola zdrowia' }, { 'no': 'en innkalling', 'pl': 'wezwanie' }, { 'no': 'å innkalle', 'pl': 'wzywać, zostać wezwanym' }, { 'no': 'å skje', 'pl': 'zdarza się' }, { 'no': 'i løpet av', 'pl': 'w ciągu, podczas, w trakcie' }, { 'no': 'en vaksine', 'pl': 'szczepienie' }, { 'no': 'en/ei utvikling', 'pl': 'rozwój' }, { 'no': 'en vekst', 'pl': 'wzrost' }, { 'no': 'en/ei vekt', 'pl': 'waga' }, { 'no': 'en reaksjonsevne', 'pl': 'prawidłowość odruchów' }, { 'no': 'et syn', 'pl': 'wzrok' }, { 'no': 'en/ei hørsel', 'pl': 'słuch' }, { 'no': 'avhengig av', 'pl': 'w zależności' }, { 'no': 'en/ei taushetsplikt', 'pl': 'obowiązek zachowania tajemnicy' }, { 'no': 'i nærheten av', 'pl': 'w pobliżu, blisko' }, { 'no': 'til og med', 'pl': 'nawet' }],

    [{ 'no': 'å ha bein i nesa', 'pl': 'mieć nogi w nosie – być stanowczym, mieć silną wolę, wiedzieć, czego się chce' }, { 'no': 'å ha gullstrupe', 'pl': 'mieć złote gardło – czyli talent wokalny' }, { 'no': 'å ha hjertet i halsen', 'pl': 'mieć serce w gardle – być przerażonym' }, { 'no': 'å ha lange fingre', 'pl': 'mieć długie palce – kraść' }, { 'no': 'å ha lange ører', 'pl': 'mieć długie uszy – z łatwością wychwytywać informacje przeznaczone dla kogoś innego' }, { 'no': 'å ha noe i ryggmargen', 'pl': 'mieć coś w rdzeniu kręgowym – czyli w małym palcu' }, { 'no': 'å ha ti tommeltotter', 'pl': 'mieć dziesięć kciuków – czytaj dwie lewe ręce' }, { 'no': 'å få blod på tann', 'pl': 'dostać krew na ząb – zapalić się do czegoś, zaangażować się w coś po pierwszym pozytywnym doświadczeniu (jak drapieżnik, któremu smak krwi każe dalej polować)' }, { 'no': 'å få kalde føtter', 'pl': 'dostać zimnych stóp - zestresować się przed trudnym zadaniem, rozważać wycofanie się w ostatniej chwili' }, { 'no': 'å miste hodet', 'pl': 'stracić głowę' }, { 'no': 'å ta beina på nakken', 'pl': 'brać nogi za kark – czyli za pas' }, { 'no': 'å ta bladet fra munnen', 'pl': 'zdjąć liść z ust – wypowiedzieć się szczerze na jakiś temat po dłuższym czasie milczenia' }, { 'no': 'å skrive seg noe bak øret', 'pl': 'zapisać coś sobie za uchem – postarać się coś zapamiętać' }, { 'no': 'å stikke hodet i sanden', 'pl': 'wsadzić głowę w piasek – to jest schować, unikać odpowiedzialności' }, { 'no': 'å være som snytt ut av nesa på noen – być jak czyjś... smark z nosa', 'pl': 'być do kogoś bardzo podobnym, zwłaszcza dzieci do swoich rodziców' }],

    [{ 'no': 'langt', 'pl': 'daleko' }, { 'no': 'lenge', 'pl': 'długo' }, { 'no': 'lang', 'pl': 'długi' }, { 'no': 'en/ei grunnskole', 'pl': 'szkoła podstawowa' }, { 'no': 'leder i bystret', 'pl': 'przewodniczący miasta' }, { 'no': 'en veterinærmedisin student', 'pl': 'student weterynarii' }, { 'no': 'en veterinær / veterinæren / veterinærer / veterinærene', 'pl': 'weterynarz' }, { 'no': 'din tur', 'pl': 'twoja kolej' }, { 'no': 'en/ei bygd', 'pl': 'wieś' }, { 'no': 'å fokusere på', 'pl': 'fokusować się na' }, { 'no': 'når det gjelder', 'pl': 'kiedy to dotyczy' }, { 'no': 'en undersekelse', 'pl': 'badanie przez lekarza' }, { 'no': 'en/ei forskning', 'pl': 'badanie naukowe' }, { 'no': 'a måle blodtrykk og temperatur', 'pl': 'mierzyć ciśnienie i temperaturę' }, { 'no': 'en nettside', 'pl': 'strona internetowa' }, { 'no': 'hjemmefra', 'pl': 'z domu, zdalnie' }, { 'no': 'en elektroniske apparat', 'pl': 'urządzenie elektryczne' }, { 'no': 'å savne', 'pl': 'tęsknić za' }, { 'no': 'å ble ening', 'pl': 'być zgodnym' }, { 'no': 'lystig', 'pl': 'wesoły (do osób przy opisie)' }, { 'no': 'å tjene', 'pl': 'serwować' }, { 'no': 'i bakgrunnen', 'pl': 'z tyłu' }, { 'no': 'i forgrunnen', 'pl': 'z przodu' }, { 'no': 'ved siden av', 'pl': 'obok' }, { 'no': 'på bildet', 'pl': 'na obrazku' }, { 'no': 'på en benk', 'pl': 'na ławce' }, { 'no': 'en busk', 'pl': 'krzak' }, { 'no': 'en kjæreste', 'pl': 'sympatia' }, { 'no': 'å spille sjakk', 'pl': 'grać w szachy' }, { 'no': 'en pongtong', 'pl': 'ponton' }, { 'no': 'på håndkle', 'pl': 'na ręczniku' }, { 'no': 'et dataspill', 'pl': 'gra komputerowa' }, { 'no': 'å skyte', 'pl': 'strzelać' }, { 'no': 'et skytespill', 'pl': 'strzelanka' }, { 'no': 'førstepersonsskytespill', 'pl': 'FPS (first-person shooter)' }, { 'no': 'å bytte (jobb/vindu/miljø/plass)', 'pl': 'zmienić, wymienić' }],

    [{ 'pl': '1.', 'no': 'første' }, { 'pl': '2.', 'no': 'andre' }, { 'pl': '3.', 'no': 'tredje' }, { 'pl': '4.', 'no': 'fjerde' }, { 'pl': '5.', 'no': 'femte' }, { 'pl': '6.', 'no': 'sjette' }, { 'pl': '7.', 'no': 'sjuende (syvende)' }, { 'pl': '8.', 'no': 'åttende' }, { 'pl': '9.', 'no': 'niende' }, { 'pl': '10.', 'no': 'tiende' }, { 'pl': '11.', 'no': 'ellevte' }, { 'pl': '12.', 'no': 'tolvte' }, { 'pl': '13.', 'no': 'trettende' }, { 'pl': '14.', 'no': 'fjortende' }, { 'pl': '15.', 'no': 'femtende' }, { 'pl': '16.', 'no': 'sekstende' }, { 'pl': '17.', 'no': 'syttende' }, { 'pl': '18.', 'no': 'attende' }, { 'pl': '19.', 'no': 'nittende' }, { 'pl': '20.', 'no': 'tjuende' }, { 'pl': '21.', 'no': 'tjueførste' }, { 'pl': '22.', 'no': 'tjueandre' }, { 'pl': '23.', 'no': 'tjuetredje' }, { 'pl': '24.', 'no': 'tjuefjerde' }, { 'pl': '25.', 'no': 'tjuefemte' }, { 'pl': '30.', 'no': 'trettiende' }, { 'pl': '31.', 'no': 'trettiførste' }, { 'pl': '40.', 'no': 'førtiende' }, { 'pl': '50.', 'no': 'femtiende' }, { 'pl': '60.', 'no': 'sekstiende' }, { 'pl': '70.', 'no': 'syttiende' }, { 'pl': '80.', 'no': 'åttiende' }, { 'pl': '90.', 'no': 'nittiende' }, { 'pl': '100.', 'no': 'hundrede' }, { 'pl': '200.', 'no': 'tohundrede' }, { 'pl': '240.', 'no': 'tohundreogførtiende' }],

    [{ 'no': 'å fortelle forteller fortalte har fortalt', 'pl': 'opowiadać' }, { 'no': 'å fortsette fortsetter fortsatte har fortsatt', 'pl': 'kontynuować' }, { 'no': 'å gjøre gjør gjorde har gjort', 'pl': 'robić' }, { 'no': 'å ha har hadde har hatt', 'pl': 'mieć' }, { 'no': 'å selge selger solgte har solgt', 'pl': 'sprzedać' }, { 'no': 'å sette setter satte har satt', 'pl': 'nastawić' }, { 'no': 'å spørre spør spurte har spurt', 'pl': 'pytać' }, { 'no': 'å velge velger valgte har valgt', 'pl': 'wybierać' }, { 'no': 'å vite vet visste har visst', 'pl': 'wiedzieć' }, { 'no': 'å be ber ba har bedt', 'pl': 'zaprosić' }, { 'no': 'å bli blir ble har blitt', 'pl': 'pozostać (become)' }, { 'no': 'å brekke brekker brakk har brukket', 'pl': 'złamać' }, { 'no': 'å dra drar dro har dratt', 'pl': 'jechać, ciągnąc' }, { 'no': 'å drikke drikker drakk har drukket', 'pl': 'pić' }, { 'no': 'å falle faller falt har falt', 'pl': 'upaść' }, { 'no': 'å finne finner fant har funnet', 'pl': 'znaleźć' }, { 'no': 'å forstå forstår forsto har forstått', 'pl': 'rozumieć' }, { 'no': 'å fryse fryser frøs har frosset', 'pl': 'marznąć' }, { 'no': 'å få får fikk har fått', 'pl': 'otrzymać' }, { 'no': 'å gi gir ga har gitt', 'pl': 'dać' }, { 'no': 'å gjenta gjentar gjentok har gjentatt', 'pl': 'powtarzać' }, { 'no': 'å gråte gråter gråt har grått', 'pl': 'płakać' }, { 'no': 'å gå går gikk har gått', 'pl': 'iść' }, { 'no': 'å hjelpe hjelper hjalp har hjulpet', 'pl': 'pomagać' }, { 'no': 'å holde holder holdt har holdt', 'pl': 'trzymać' }, { 'no': 'å komme kommer kom har kommet', 'pl': 'przychodzić' }, { 'no': 'å le ler lo har ledd', 'pl': 'smiać się' }, { 'no': 'å legge legger la har lagt', 'pl': 'kłaść' }, { 'no': 'å ligge ligger lå har ligget', 'pl': 'leżeć' }, { 'no': 'å løpe løper løp har løpt', 'pl': 'biegać' }, { 'no': 'å oppdra oppdrar oppdro har oppdratt', 'pl': 'wychować' }, { 'no': 'å overta overtar overtok har overtatt', 'pl': 'przejąć' }, { 'no': 'å se ser så har sett', 'pl': 'widzieć' }, { 'no': 'å si sier sa har sagt', 'pl': 'mówić' }, { 'no': 'å sitte sitter satt har sittet', 'pl': 'siedzieć' }, { 'no': 'å skjære skjærer skar har skåret', 'pl': 'kroić, obcinać' }, { 'no': 'å skrive skriver skrev har skrevet', 'pl': 'pisać' }, { 'no': 'å slippe slipper slapp har sluppet', 'pl': 'uniknąć, nie musieć czegoś robić (avoid, not have to)' }, { 'no': 'å slå slår slo har slått', 'pl': 'uderzyć, zbić, ciąć, ścinać, kosić' }, { 'no': 'å synge synger sang har sunget', 'pl': 'śpiewać' }, { 'no': 'å ta tar tok har tatt', 'pl': 'brać' }, { 'no': 'å treffe treffer traff har truffet', 'pl': 'spotkać' }, { 'no': 'å være er var har vært', 'pl': 'być' }],

    [{ 'no': 'en maskin', 'pl': 'maszyna, komputer' }, { 'no': 'et goteri', 'pl': 'słodycz' }, { 'no': 'skikkelig', 'pl': 'bardzo, definitywnie, naprawdę' }, { 'no': 'en bit', 'pl': 'gryz. kawałek' }, { 'no': 'sikkert', 'pl': 'napewno' }, { 'no': 'litt av en jobb', 'pl': 'trochę z pracy' }, { 'no': 'å lukte', 'pl': 'pachnieć' }, { 'no': 'vi er på besøk i verdens beste fabrikk', 'pl': 'my jesteśmy w odwiedzinach w najlepszej fabryce świata' }, { 'no': 'hva er egentlig jobben din\u001f', 'pl': 'co tak naprawdę robisz w swojej pracy ?' }, { 'no': 'å finne opp', 'pl': 'wynalezc' }, { 'no': 'godterioppfinner', 'pl': 'cukiermistrz, tester słodyczy' }, { 'no': 'ungene', 'pl': 'młodzi' }, { 'no': 'å digge , digger, digget, har digget', 'pl': 'uwielbiać' }, { 'no': 'jeg digger det', 'pl': 'uwielbiam to' }, { 'no': 'mørk sjokolade', 'pl': 'gorzka czekolada' }, { 'no': 'en ingrediens', 'pl': 'składnik' }, { 'no': 'kakaofrukt', 'pl': 'owoc kakao' }, { 'no': 'blant annet', 'pl': 'między innymi' }, { 'no': 'den vokser på trær i afrika', 'pl': 'to rośnie na drzewach w afryce' }, { 'no': 'hvis man bare hadde en stang', 'pl': 'gdybyś tylko miał wędkę' }, { 'no': 'bønner', 'pl': 'fasoki' }, { 'no': 'inni kakaofrukten er det kakaobønner', 'pl': 'w w owocu kakao są kakaofasolki' }, { 'no': 'hvis man knuser', 'pl': 'jeśli ktoś zmiażdzy' }, { 'no': 'som ser sånn ut', 'pl': 'tak to wygląda' }, { 'no': 'som', 'pl': 'jak' }, { 'no': 'sånn', 'pl': 'taki' }, { 'no': 'å svelge', 'pl': 'połknąć' }, { 'no': 'tørt', 'pl': 'suchy' }, { 'no': 'rart', 'pl': 'dziwnie' }, { 'no': 'ikke helt', 'pl': 'nie całkiem' }, { 'no': 'det smakker ikke helt sjokolade', 'pl': 'to nie smakowało jak czekolada' }, { 'no': 'etter litt soling sendes de med båt', 'pl': 'po krórkim opalaniu wysyłane są łodzią' }, { 'no': 'kakaomasse', 'pl': 'masa kakaowa' }, { 'no': 'kakaosmør', 'pl': 'masło kakaowe' }, { 'no': 'kakaopulver', 'pl': 'kakao w proszku' }, { 'no': 'som har kakao i seg', 'pl': 'które, ma w sobie kakao' }, { 'no': 'lukt på det', 'pl': 'powąchaj to' }, { 'no': 'det lukter sånn', 'pl': 'jak to pachnie' }, { 'no': 'nydelig', 'pl': 'piękny, cudowny, cudny' }, { 'no': 'nå skal blandingen bli enda mer lik sjokolade', 'pl': 'teraz mikstura powinna być jeszcze bardziej podbna do czekolady' }, { 'no': 'enda mer lik', 'pl': 'jeszcze bardziej jak' }, { 'no': 'det smelter på tunga', 'pl': 'torozpływa się w usach' }, { 'no': 'oppi', 'pl': 'w górę' }, { 'no': 'å sølte', 'pl': 'rozlać' }, { 'no': 'å ligne', 'pl': 'wyglądać' }, { 'no': 'klissete', 'pl': 'lepkość' }, { 'no': 'flytende', 'pl': 'ruchomy, płynny' }, { 'no': 'så rører vi rundt', 'pl': 'więc kręcimy na około' }, { 'no': 'sure', 'pl': 'kwaśne' }, { 'no': 'de krispene er sure', 'pl': 'posypka jest kwaśna' }, { 'no': 'et bringebær', 'pl': 'malina' }, { 'no': 'din egen sjokolade', 'pl': 'twoja własna czekolada' }, { 'no': 'å smekke', 'pl': 'trzaskać' }, { 'no': 'tørkede bringebær', 'pl': 'suszona malina' }, { 'no': 'en lakris', 'pl': 'lukrecja' }, { 'no': 'kjappe', 'pl': 'szybki' }, { 'no': 'å stivne', 'pl': 'wlać' }, { 'no': 'å riste', 'pl': 'wstrząsnąć' }, { 'no': 'hemmelige oppskriver', 'pl': 'tajny przepis' }, { 'no': 'har det gått bra?', 'pl': 'czy poszło dobrze?' }, { 'no': 'klar for test', 'pl': 'gotowy\\ zdolny do przetestowania' }, { 'no': 'jeg grurer meg skikkelig', 'pl': 'naprawdę się boję' }, { 'no': 'jeg grurer meg', 'pl': 'ja boję się' }, { 'no': 'skikkelig', 'pl': 'właściwy' }, { 'no': 'det passer til barna', 'pl': 'to pasuje dzieciom' }, { 'no': 'et uttrykk', 'pl': 'wyrażenie, zdanie' }, { 'no': 'å fri, frir, fridde, fridd', 'pl': 'oświadczyć się' }],

    [{ 'no': 'en/ei fortelling', 'pl': 'opowiadanie' }, { 'no': 'en spinat', 'pl': 'szpinak' }, { 'no': 'en oliven', 'pl': 'oliwka' }, { 'no': 'en heis', 'pl': 'winda' }, { 'no': 'herlig', 'pl': 'cudowny' }, { 'no': 'fr-frir-fridde-fridd', 'pl': 'oświadczyć się' }, { 'no': 'en klem', 'pl': 'uścisk, przytulenie' }, { 'no': 'å klemme- klemmer-klemte-har klemt', 'pl': 'tulić się' }, { 'no': 'en scooter', 'pl': 'skuter' }, { 'no': 'å le-ler-lo-ledd', 'pl': 'śmiać się' }],

    [{ 'no': 'artig', 'pl': 'zabawny' }, { 'no': 'superartig', 'pl': 'super-zabawny' }, { 'no': 'artig', 'pl': 'underholdende, morsom, vittig, komisk' }, { 'no': 'underholdene', 'pl': 'rozrywkowy, zadziwiajcy' }, { 'no': 'en badevakt', 'pl': 'ratownik' }, { 'no': 'en oppgave', 'pl': 'zadanie' }, { 'no': 'ordentlige', 'pl': 'uporządkowany, pasujący' }, { 'no': 'en fløyte', 'pl': 'flet, gwizdek' }, { 'no': 'farlig', 'pl': 'niebezpieczny, wyzykowny' }, { 'no': 'å blåse', 'pl': 'gwizdać, wiać, dmuchać' }, { 'no': 'å blåse i fløyta', 'pl': 'gwizdać w gwizdek' }, { 'no': 'en sklie', 'pl': 'zjeżdzalnia' }, { 'no': 'å følge', 'pl': 'przestrzegać' }, { 'no': 'en/ei lommelykt', 'pl': 'latarka kieszonkowa' }, { 'no': 'å bli farlig', 'pl': 'staje się niebezpieczny' }, { 'no': 'hårspenne', 'pl': 'spinka do włosów' }, { 'no': 'et basseng', 'pl': 'basen' }, { 'no': 'en knapp', 'pl': 'przycisk' }, { 'no': 'rask', 'pl': 'szybko' }, { 'no': 'usynlige', 'pl': 'niewidoczny' }, { 'no': 'et klor', 'pl': 'chlor' }, { 'no': 'å rense', 'pl': 'czyścić' }, { 'no': 'å gjøre rent', 'pl': 'wyczyścić' }, { 'no': 'gulaktig', 'pl': 'zółtawy' }, { 'no': 'å tise', 'pl': 'załatwiać się' }, { 'no': 'å lukte', 'pl': 'pachnieć' }, { 'no': 'svømmehaller', 'pl': 'baseny' }, { 'no': 'trygt', 'pl': 'bezpiecznie' }, { 'no': 'en livbøye', 'pl': 'koło ratunkowe' }, { 'no': 'et bunne', 'pl': 'dno' }, { 'no': 'en bølge', 'pl': 'fala' }, { 'no': 'ordentlige', 'pl': 'prawdziwy' }, { 'no': 'en skjerm', 'pl': 'obraz' }, { 'no': 'å forløpe', 'pl': 'iść, odejśc, wyjść' }, { 'no': 'å kose seg', 'pl': 'odpoczywać, cieszyć się sobą' }, { 'no': 'å slite', 'pl': 'nosić, założyć' }],

    [{ 'no': 'å slå', 'pl': 'uderzać, bić, pukać, ciąć, ścinać, kosić, pokonać, lać (np. deszcz)' }, { 'no': 'slå noen på munnen', 'pl': 'uderzyć kogoś w szczękę' }, { 'no': 'lynet slo ned', 'pl': 'piorun uderzył' }, { 'no': 'slå barna sine', 'pl': 'bić dzieci swoje' }, { 'no': 'slå feil', 'pl': 'pomylić się, nie udać się' }, { 'no': 'slå ring om', 'pl': 'bronić, chronić' }, { 'no': 'slå leir', 'pl': 'pomylić się, nie udać się' }, { 'no': 'slå på stortrommen', 'pl': 'przesadzić, używać przesadnie wielkich słów' }, { 'no': 'slå ut håret', 'pl': 'dać sobie luz, pozwolić sobie na szaleństwo' }, { 'no': 'slå graset', 'pl': 'kosić trawę' }, { 'no': 'slå plenen', 'pl': 'kosić trawnik' }, { 'no': 'slå rekorden', 'pl': 'bić na rekord' }, { 'no': 'slå på kokende melk', 'pl': 'wlać gorące mleko' }, { 'no': 'slå lens (urinere, tisse)', 'pl': 'sikać' }, { 'no': 'slå om', 'pl': 'zmienić' }, { 'no': 'slå på', 'pl': 'włączyć' }, { 'no': 'slå på tv-en', 'pl': 'włączyć tv' }, { 'no': 'slå seg', 'pl': 'zranić siebie' }, { 'no': 'slå opp', 'pl': 'zerwać' }, { 'no': 'slå ned', 'pl': 'powalić' }, { 'no': 'slå til', 'pl': 'spełnić się, uderzyć, trafić, dobić targu' }, { 'no': 'slå fast', 'pl': 'osiedlić się, naprawić, utrzymywać, ustanawiać' }, { 'no': 'slå sammen', 'pl': 'współpracować' }, { 'no': 'slå inn på', 'pl': 'wez, wejdz' }, { 'no': 'slå seg ned', 'pl': 'spocząć, usadowić się, osiedlić' }, { 'no': 'slå gjennom', 'pl': 'stać się znanym, odnieść sukces' }],

    [{ 'no': 'omgitt av', 'pl': 'surrounded by' }, { 'no': 'selv om', 'pl': 'chociaż, mimo że' }, { 'no': 'være forberedt på', 'pl': 'być przygotowanym na' }, { 'no': 'vanntett, vanntette', 'pl': 'wodoodporny' }, { 'no': 'rund, rundt, runde', 'pl': 'okrągły' }, { 'no': 'i midten', 'pl': 'na środku' }, { 'no': 'en høyde', 'pl': 'pagórek, górka, wzniesienie' }, { 'no': 'en borg', 'pl': 'zamek (castle)' }, { 'no': 'lønnet', 'pl': 'płatny' }, { 'no': 'i retning av', 'pl': 'w kierunku' }, { 'no': 'ellers', 'pl': 'w przeciwnym razie, otherwise' }, { 'no': 'ei løype, løypa, løyper, løypene', 'pl': 'trasa, kurs, tor, szlak' }],

    [{ 'no': 'å bytte', 'pl': 'wymienić' }, { 'no': 'et bytte', 'pl': 'wymiana' }, { 'no': 'å leve', 'pl': 'żyć' }, { 'no': 'merkelig', 'pl': 'niezwykły, dziwny' }, { 'no': 'en båt', 'pl': 'łódź, statek' }, { 'no': 'en plikt', 'pl': 'obowiązek' }, { 'no': 'en/ei blodpannekake', 'pl': 'naleśnik z krwi' }, { 'no': 'en/ei reindrift', 'pl': 'hodowla reniferów' }, { 'no': 'en/er favorittmat', 'pl': 'ulubione jedzenie' }, { 'no': 'en favoritt', 'pl': 'ulubieniec' }, { 'no': 'å slakte, slakter, slaktet (el slakta), slaktet (el slakta)', 'pl': 'zabić, upolować' }, { 'no': 'å få vite', 'pl': 'get to know, dowiedzieć się' }, { 'no': 'å overleve, -lever, -levde, -levd', 'pl': 'survive' }, { 'no': 'en koffert', 'pl': 'walizka' }, { 'no': 'spent på hva som er...', 'pl': 'podekscytowany tym co jest...' }, { 'no': 'et forkle', 'pl': 'fartuch (apron)' }, { 'no': 'en dåp', 'pl': 'chrzest' }, { 'no': 'en/ei skibrille', 'pl': 'gogle narciarskie' }, { 'no': 'klar for å se...', 'pl': 'gotowy do zobaczenia...' }, { 'no': 'underveis', 'pl': 'po drodze' }, { 'no': 'uten', 'pl': 'bez (without)' }, { 'no': 'en sommerfugl', 'pl': 'motyl (butterfly)' }, { 'no': 'å ankomme', 'pl': 'przybyć' }, { 'no': 'redd', 'pl': 'bojący się, wystraszony' }, { 'no': 'ta av deg', 'pl': 'rozbierz się' }, { 'no': 'skummel', 'pl': 'przerażający' }, { 'no': 'forskrekket', 'pl': 'scared, frightened' }, { 'no': 'rar', 'pl': 'dziwne (strange)' }, { 'no': 'å oppleve', 'pl': 'przeżyć, doświadczyć' }, { 'no': 'å være vant til', 'pl': 'być przyzwyczajonym do' }, { 'no': 'en/ei hud', 'pl': 'skóra' }, { 'no': 'en overraskelse', 'pl': 'niespodzianka (surprise)' }, { 'no': 'et reveskinn', 'pl': 'futro lisa' }, { 'no': 'en rev', 'pl': 'lis' }, { 'no': 'pakke ut', 'pl': 'rozpakować' }, { 'no': 'trygg', 'pl': 'secure, safe' }, { 'no': 'kjent, velkjent', 'pl': 'dobrze znany' }, { 'no': 'sliten', 'pl': 'zmęczony' }, { 'no': 'en aktivitet', 'pl': 'aktywność' }, { 'no': 'å kaste', 'pl': 'rzucać' }, { 'no': 'nærmere', 'pl': 'bliźej, dokładniej' }, { 'no': 'sakte', 'pl': 'powoli' }, { 'no': 'endelig', 'pl': 'ostatecznie, w końcu' }, { 'no': 'å treffe', 'pl': 'spotkać, trafić' }, { 'no': 'å beregne', 'pl': 'obliczać, kalkulować' }, { 'no': 'verdens kuleste', 'pl': 'najfajniejszy na świecie' }, { 'no': 'å grue seg', 'pl': 'obawiać się, bać się, martwić się' }, { 'no': 'ordentlig', 'pl': 'uporządkowany' }, { 'no': 'en/ei gave', 'pl': 'prezent' }, { 'no': 'et håndarbeid', 'pl': 'praca ręczna, robótka ręczna' }, { 'no': 'ekkel', 'pl': 'odrażający, wstrętny, ohydny' }, { 'no': 'kamgarn', 'pl': 'włóczka' }, { 'no': 'en bunt', 'pl': 'packet, bundle, bunch' }, { 'no': 'en/ei såpe', 'pl': 'mydło' }, { 'no': 'noen gang', 'pl': 'kiedykolwiek' }, { 'no': 'noen ganger', 'pl': 'czasami' }, { 'no': 'lykkedagen', 'pl': 'szczęśliwy dzień' }, { 'no': 'en/ei lykke', 'pl': 'szczęście' }, { 'no': 'en/ei kjøring', 'pl': 'jazda' }, { 'no': 'å tulle', 'pl': 'żartować' }, { 'no': 'spent', 'pl': 'spięty' }, { 'no': 'en mose', 'pl': 'mech (moss)' }, { 'no': 'en klov', 'pl': 'racica (hoof)' }, { 'no': 'en krem', 'pl': 'bita śmietana' }],


    [{ 'no': 'å drive med / å holde på med', 'pl': 'zajmować się' }, { 'no': 'et besøk', 'pl': 'odwiedziny, wizyta' }, { 'no': 'et hotell', 'pl': 'hotel' }, { 'no': 'å søke', 'pl': 'poszukiwać (seek, search)' }, { 'no': 'søke på en jobb', 'pl': 'apply for a job' }, { 'no': 'søke om studielån', 'pl': 'apply for a loan for one\'s studies' }, { 'no': 'en erfaring', 'pl': 'doświadczenie (experience)' }, { 'no': 'å ha erfaring med', 'pl': 'mieć doświadczenie z' }, { 'no': 'et regnskap', 'pl': 'rachunkowość' }, { 'no': 'et firma', 'pl': 'firma' }, { 'no': 'en utfordring', 'pl': 'wyzwanie (challenge)' }, { 'no': 'å ta førerkort', 'pl': 'robić prawo jazdy' }, { 'no': 'kjøretimer', 'pl': 'kursy jazdy' }, { 'no': 'enig', 'pl': 'racja' }, { 'no': 'for en stund siden', 'pl': 'jakiś czas temu' }, { 'no': 'å sjekke', 'pl': 'sprawdzać, flirtować, czatować' }, { 'no': 'et nett', 'pl': 'sieć' }, { 'no': 'et tipse', 'pl': 'tip, wskazówka' }, { 'no': 'å savne', 'pl': 'tęsknić' }, { 'no': 'å glede seg over', 'pl': 'cieszyć się' }, { 'no': 'å glede seg til', 'pl': 'look forward to' }, { 'no': 'skål', 'pl': 'na zdrowie' }, { 'no': 'å oppfylle oppfyller oppfylte oppfylt', 'pl': 'spełniać' }, { 'no': 'søsken', 'pl': 'rodzeństwo' }, { 'no': 'en tvilling', 'pl': 'bliźniak' }, { 'no': 'en samtale', 'pl': 'rozmowa, conversation' }, { 'no': 'skilt skilte', 'pl': 'separated, divorced' }, { 'no': 'en teoridel', 'pl': 'część teoretyczna' }, { 'no': 'en prøve', 'pl': 'test, egzamin, próba' }, { 'no': 'en teoriprøve', 'pl': 'egzamin teoretyczny' }, { 'no': 'en teori', 'pl': 'teoria' }, { 'no': 'finnes', 'pl': 'znajdować się (am, are, is)' }, { 'no': 'å hilse', 'pl': 'pozdrawiać' }, { 'no': 'borte fra jobben', 'pl': 'z dala od pracy' }, { 'no': 'vondt i ryggen', 'pl': 'ból pleców' }, { 'no': 'en rygg', 'pl': 'plecy' }, { 'no': 'å klare', 'pl': 'zdołać, udać się (manage)' }, { 'no': 'en kollega', 'pl': 'kolega, współpracownik' }, { 'no': 'kollega av monica', 'pl': 'kolega moniki' }, { 'no': 'stakkars deg', 'pl': 'biedny ty (poor you)' }, { 'no': 'å føle seg', 'pl': 'czuć się' }, { 'no': 'å si fra til', 'pl': 'przekazać' }, { 'no': 'senere', 'pl': 'później' }, { 'no': 'like dårlig', 'pl': 'tak samo źle' }, { 'no': 'like', 'pl': 'taki sam' }, { 'no': 'å kaste opp', 'pl': 'wymiotować' }, { 'no': 'å kaste', 'pl': 'rzucać' }, { 'no': 'å ta imot', 'pl': 'otrzymać' }, { 'no': 'et emne', 'pl': 'temat' }, { 'no': 'en sykdom, sykdommen', 'pl': 'choroba' }, { 'no': 'gi beskjed', 'pl': 'dać znać' }, { 'no': 'en feber', 'pl': 'gorączka' }, { 'no': 'slik, slikt, slike', 'pl': 'taki' }, { 'no': 'det var synd', 'pl': 'szkoda' }, { 'no': 'pass på deg selv', 'pl': 'dbaj o siebie' }, { 'no': 'å skaffe seg', 'pl': 'otrzymać' }, { 'no': 'heldigvis', 'pl': 'szczęśliwie' }, { 'no': 'en måte', 'pl': 'sposób' }, { 'no': 'en vikar', 'pl': 'zastępca' }, { 'no': 'en kvalifikasjon', 'pl': 'kwalifikacja' }, { 'no': 'deretter', 'pl': 'następnie' }, { 'no': 'en stilling', 'pl': 'posada, job, position' }, { 'no': 'slik, slikt, slike', 'pl': 'taki (such)' }, { 'no': 'offentlig', 'pl': 'publiczny' }, { 'no': 'en tjeneste', 'pl': 'usługa, praca' }, { 'no': 'en søknad', 'pl': 'podanie, aplikacja, wniosek' }, { 'no': 'en opplysning', 'pl': 'informacja' }, { 'no': 'en annonse for ledige stillinger', 'pl': 'ogłoszenie o wolnych stanowiskach' }, { 'no': 'en instruks', 'pl': 'instrukcja' }, { 'no': 'en brann', 'pl': 'pożar' }, { 'no': 'en branninstruks', 'pl': 'instrukcja pożarowa' }, { 'no': 'en bygning', 'pl': 'budynek' }, { 'no': 'på forhånd', 'pl': 'zawczasu (in advance)' }, { 'no': 'et brannvesen', 'pl': 'straż pożarna' }, { 'no': 'et telefonnummer', 'pl': 'numer telefonu' }, { 'no': 'å trykke på', 'pl': 'nacisnąć na' }, { 'no': 'å lukke, å stenge', 'pl': 'zamknąć' }, { 'no': 'en dør', 'pl': 'drzwi' }, { 'no': 'et vindu', 'pl': 'okno' }, { 'no': 'å forlate', 'pl': 'opuścić' }, { 'no': 'et samlingspunkt', 'pl': 'punk zbiórki' }, { 'no': 'straks', 'pl': 'natychmiast' }, { 'no': 'et utstyr', 'pl': 'sprzęt' }, { 'no': 'å slukke', 'pl': 'gasić' }, { 'no': 'en brannalarm', 'pl': 'alarm pożarowy' }, { 'no': 'en/ei mor, mødre, mødrene', 'pl': 'matka' }, { 'no': 'en/ei arbeidstid', 'pl': 'czas pracy' }, { 'no': 'en matpause', 'pl': 'przerwa na jedzenie' }, { 'no': 'å regne', 'pl': 'padać, liczyć' }, { 'no': 'å regne med', 'pl': 'wliczać, zawierać, liczyć się z' }, { 'no': 'en/ei overtid', 'pl': 'nadgodzina' }, { 'no': 'vanligvis', 'pl': 'zazwyczaj (usually)' }, { 'no': 'å utbetale', 'pl': 'wypłacać' }, { 'no': 'en/ei lønn', 'pl': 'pensja, zarobek' }, { 'no': 'å sette inn', 'pl': 'wpłacać' }, { 'no': 'en konto', 'pl': 'konto' }, { 'no': 'å trekke', 'pl': 'ciągnąć, wyciągnąć' }, { 'no': 'å trekke fra', 'pl': 'odliczyć, odjąć' }, { 'no': 'en skatt', 'pl': 'podatek' }, { 'no': 'en/ei sykemelding/sykmelding', 'pl': 'zwolnienie lekarskie' }, { 'no': 'straks', 'pl': 'natychmiast' }, { 'no': 'å melde', 'pl': 'zgłosić, ogłosić, powiadomić' }, { 'no': 'ellers', 'pl': 'w przeciwnym wypadku' }, { 'no': 'en/ei egenmelding', 'pl': 'self-certification of absence' }, { 'no': 'å dele inn, å inndele, å gruppere', 'pl': 'podzielić' }, { 'no': 'å øke', 'pl': 'zwiększyć (np. obroty, wiedzę, produkcję, pensję, prędkość)' }, { 'no': 'en sparke', 'pl': 'kopnięcie' }, { 'no': 'en klesbutikk', 'pl': 'sklep z ubraniami' }, { 'no': 'et storsenter', 'pl': 'galeria handlowa' }, { 'no': 'serviceinnstilt', 'pl': 'nastawiony na obsługę' }, { 'no': 'en søker', 'pl': 'aplikujący' }, { 'no': 'en sans', 'pl': 'świadomość' }, { 'no': 'lignende, liknende', 'pl': 'podobny' }, { 'no': 'en fordel', 'pl': 'zaleta, korzyść' }, { 'no': 'siste skrik', 'pl': 'ostatni dzwonek' }, { 'no': 'et skrik, skriket, skrik, skrikene', 'pl': 'krzyk' }, { 'no': 'en medarbeider', 'pl': 'co-worker, współpracownik' }, { 'no': 'jeg jobber halv stilling', 'pl': 'pracuję na pół etatu' }, { 'no': 'å burde, bør, burde, har burdet', 'pl': 'powinien, ought to, should' }, { 'no': 'energisk', 'pl': 'energiczny' }, { 'no': 'en mote', 'pl': 'moda (vogue)' }, { 'no': 'dersom', 'pl': 'in case, w przypadku' }, { 'no': 'en frist', 'pl': 'termin (deadline)' }, { 'no': 'søknadsfrist', 'pl': 'termin składania podania' }, { 'no': 'en hjelpepleier', 'pl': 'opiekun medyczny' }, { 'no': 'et omsorgssenter', 'pl': 'centrum opieki' }, { 'no': 'en omsorg', 'pl': 'troska, opieka' }, { 'no': 'i vikariat', 'pl': 'na zastępstwo' }, { 'no': 'i 100% stilling', 'pl': 'na 100% etatu' }, { 'no': 'en/ei avdeling', 'pl': 'wydział, oddział' }, { 'no': 'en avdelingssykepleier', 'pl': 'oddziałowa pielęgniarka/pielęgniarz' }, { 'no': 'å lagre', 'pl': 'store (przechować, składować)' }, { 'no': 'del på facebook', 'pl': 'udostępnij (podziel się) na facebooku' }, { 'no': 'å skrive ut', 'pl': 'odpisać' }, { 'no': 'en tiltredelse', 'pl': 'przystąpienie' }, { 'no': 'en kokk', 'pl': 'kucharz, szef kuchni' }, { 'no': 'en dagligvare', 'pl': 'produkty spożywcze' }, { 'no': 'daglig', 'pl': 'codziennie' }, { 'no': 'fleksibel', 'pl': 'elastyczny' }, { 'no': 'kassefunksjon', 'pl': 'obsługa kasy' }, { 'no': 'en leder', 'pl': 'kierownik' }, { 'no': 'ulik, ulikt, ulike', 'pl': 'różny, inny' }, { 'no': 'å bestemme', 'pl': 'decydować, postanowić' }, { 'no': 'et rollespill', 'pl': 'odgrywanie ról' }, { 'no': 'et spill', 'pl': 'gra' }, { 'no': 'å bli innkalt til', 'pl': 'zostać wezwanym na' }, { 'no': 'en/ei leddsetning', 'pl': 'zdanie podrzędne' }, { 'no': 'sammensatt, sammensatte', 'pl': 'złożony' }, { 'no': 'et trekk', 'pl': 'odliczenie, dedukcja, minus' }, { 'no': 'et lag, laget, lag, lagene', 'pl': 'drużyna, zespół, grupa' }, { 'no': 'en deltaker', 'pl': 'uczestnik' }, { 'no': 'en/ei trapp, trapper, trappene', 'pl': 'schody' }, { 'no': 'en/ei rulletrapp', 'pl': 'schody ruchome' }, { 'no': 'slå på', 'pl': 'włączyć (switch on)' }, { 'no': 'slå av', 'pl': 'wyłączyć (switch off)' }, { 'no': 'brannansvarlig', 'pl': 'odpowiedzialny za ogień' }, { 'no': 'et klarsignal', 'pl': 'zielone światło' }, { 'no': 'en samling', 'pl': 'zgromadzenie, kolekcja, montaż' }],

    [{ 'no': 'å savne', 'pl': 'tęsknić' }, { 'no': 'søsken', 'pl': 'rodzeństwo' }, { 'no': 'en tvilling', 'pl': 'bliźniak' }, { 'no': 'skilt skilte', 'pl': 'separated, divorced' }, { 'no': 'en teoridel', 'pl': 'część teoretyczna' }, { 'no': 'finnes', 'pl': 'znajdować się (am, are, is)' }, { 'no': 'å føle seg', 'pl': 'czuć się' }, { 'no': 'å si fra til', 'pl': 'przekazać' }, { 'no': 'senere', 'pl': 'później' }, { 'no': 'like dårlig', 'pl': 'tak samo źle' }, { 'no': 'like', 'pl': 'taki sam' }, { 'no': 'å kaste opp', 'pl': 'wymiotować' }, { 'no': 'å kaste', 'pl': 'rzucać' }, { 'no': 'å ta imot', 'pl': 'otrzymać' }, { 'no': 'et emne', 'pl': 'temat' }, { 'no': 'en sykdom, sykdommen', 'pl': 'choroba' }, { 'no': 'det var synd', 'pl': 'to była szkoda' }, { 'no': 'å skaffe seg', 'pl': 'otrzymać' }, { 'no': 'en kvalifikasjon', 'pl': 'kwalifikacja' }, { 'no': 'offentlig', 'pl': 'publiczny' }, { 'no': 'en tjeneste', 'pl': 'usługa, praca' }, { 'no': 'en opplysning', 'pl': 'informacja' }, { 'no': 'en annonse for ledige stillinger', 'pl': 'ogłoszenie o wolnych stanowiskach' }, { 'no': 'en instruks', 'pl': 'instrukcja' }, { 'no': 'på forhånd', 'pl': 'zawczasu (in advance)' }, { 'no': 'et brannvesen', 'pl': 'straż pożarna' }, { 'no': 'et telefonnummer', 'pl': 'numer telefonu' }, { 'no': 'å trykke på', 'pl': 'nacisnąć na' }, { 'no': 'å lukke, å stenge', 'pl': 'zamknąć' }, { 'no': 'en dør', 'pl': 'drzwi' }, { 'no': 'å forlate', 'pl': 'opuścić' }, { 'no': 'et samlingspunkt', 'pl': 'punk zbiórki' }, { 'no': 'straks', 'pl': 'natychmiast' }, { 'no': 'et utstyr', 'pl': 'sprzęt' }, { 'no': 'å slukke', 'pl': 'gasić' }, { 'no': 'en brannalarm', 'pl': 'alarm pożarowy' }, { 'no': 'å regne med', 'pl': 'wliczać, zawierać, liczyć się z' }, { 'no': 'å sette inn', 'pl': 'wpłacać' }, { 'no': 'å trekke', 'pl': 'ciągnąć, wyciągnąć' }, { 'no': 'å trekke fra', 'pl': 'odliczyć, odjąć' }, { 'no': 'å melde', 'pl': 'zgłosić, ogłosić, powiadomić' }, { 'no': 'ellers', 'pl': 'w przeciwnym wypadku' }, { 'no': 'en/ei egenmelding', 'pl': 'self-certification of absence' }, { 'no': 'å øke', 'pl': 'zwiększyć (np. obroty, wiedzę, produkcję, pensję, prędkość)' }, { 'no': 'en sparke', 'pl': 'kopnięcie' }, { 'no': 'serviceinnstilt', 'pl': 'nastawiony na obsługę' }, { 'no': 'en søker', 'pl': 'aplikujący' }, { 'no': 'en sans', 'pl': 'świadomość' }, { 'no': 'en fordel', 'pl': 'zaleta, korzyść' }, { 'no': 'siste skrik', 'pl': 'ostatni dzwonek' }, { 'no': 'et skrik, skriket, skrik, skrikene', 'pl': 'krzyk' }, { 'no': 'å burde, bør, burde, har burdet', 'pl': 'powinien, ought to, should' }, { 'no': 'dersom', 'pl': 'in case, w przypadku' }, { 'no': 'en frist', 'pl': 'termin (deadline)' }, { 'no': 'en hjelpepleier', 'pl': 'opiekun medyczny' }, { 'no': 'et omsorgssenter', 'pl': 'centrum opieki' }, { 'no': 'en omsorg', 'pl': 'troska, opieka' }, { 'no': 'i vikariat', 'pl': 'na zastępstwo' }, { 'no': 'en avdelingssykepleier', 'pl': 'oddziałowa pielęgniarka/pielęgniarz' }, { 'no': 'å lagre', 'pl': 'store (przechować, składować)' }, { 'no': 'en tiltredelse', 'pl': 'przystąpienie' }, { 'no': 'en kokk', 'pl': 'kucharz, szef kuchni' }, { 'no': 'en dagligvare', 'pl': 'produkty spożywcze' }, { 'no': 'å bli innkalt til', 'pl': 'zostać wezwanym na' }, { 'no': 'en/ei leddsetning', 'pl': 'zdanie podrzędne' }, { 'no': 'sammensatt, sammensatte', 'pl': 'złożony' }, { 'no': 'et trekk', 'pl': 'odliczenie, dedukcja, minus' }, { 'no': 'et lag, laget, lag, lagene', 'pl': 'drużyna, zespół, grupa' }, { 'no': 'en deltaker', 'pl': 'uczestnik' }, { 'no': 'en/ei trapp, trapper, trappene', 'pl': 'schody' }, { 'no': 'en/ei rulletrapp', 'pl': 'schody ruchome' }, { 'no': 'slå på', 'pl': 'włączyć (switch on)' }, { 'no': 'slå av', 'pl': 'wyłączyć (switch off)' }, { 'no': 'brannansvarlig', 'pl': 'odpowiedzialny za ogień' }, { 'no': 'et klarsignal', 'pl': 'zielone światło' }, { 'no': 'en/ei samling', 'pl': 'zgromadzenie, kolekcja, montaż' }],

    [{ 'no': 'å skje, skjer, skjedde, har skjedd', 'pl': 'zdarzyć się' }, { 'no': 'tidligere, før', 'pl': 'wcześniej' }, { 'no': 'en lek', 'pl': 'zabawa' }, { 'no': 'skikkelig', 'pl': 'bardzo' }, { 'no': 'skikkelig gøy', 'pl': 'bardzo zabawny' }, { 'no': 'nødt', 'pl': 'zmuszony' }, { 'no': 'sannhet', 'pl': 'prawda' }, { 'no': 'altså', 'pl': 'tak więc' }, { 'no': 'å snurre', 'pl': 'kręcić się, obracać się' }, { 'no': 'å være nødt til', 'pl': 'być zmuszonym do' }, { 'no': 'prompa du?', 'pl': 'pierdnęłaś ty?' }, { 'no': 'et prompe', 'pl': 'pierdnięcie' }, { 'no': 'tillatt', 'pl': 'dozwolony, dopuszczony' }, { 'no': 'forelsket, forelska', 'pl': 'zakochany' }, { 'no': 'en skåring', 'pl': 'wynik, punkt (score)' }, { 'no': 'rar', 'pl': 'dziwny (strange)' }, { 'no': 'å bli tatt', 'pl': 'zostać złapanym' }, { 'no': 'en tegn', 'pl': 'znak (sign)' }, { 'no': 'en truse', 'pl': 'majtki' }, { 'no': 'et virke', 'pl': 'drewno' }, { 'no': 'å virke', 'pl': 'pracować, wydawać się, wyglądać (seem, appear)' }, { 'no': 'en kompliment', 'pl': 'komplement' }, { 'no': 'slapp av selv', 'pl': 'sam się uspokój' }, { 'no': 'en mens', 'pl': 'okres, menstruacja' }, { 'no': 'en deig', 'pl': 'surowe ciasto (dough)' }, { 'no': 'ordentlig', 'pl': 'właściwie' }, { 'no': 'et tak', 'pl': 'chwyt (grip)' }, { 'no': 'redd', 'pl': 'wystraszony' }, { 'no': 'å kna', 'pl': 'ugniatać (knead)' }, { 'no': 'å skvise', 'pl': 'ściskać (squeeze)' }, { 'no': 'en gjær', 'pl': 'drożdże (yeast)' }, { 'no': 'ømfintlig', 'pl': 'wrażliwy, delikatny' }, { 'no': 'en prosess', 'pl': 'proces (process)' }, { 'no': 'rå', 'pl': 'surowy (rough)' }, { 'no': 'gjør du narr av meg?', 'pl': 'wyśmiewasz się ze mnie?' }],
]

export default dict

// aktiviteter
// eller begger deler
// der borte - tam daleko
// der er for liten - to jest za małe
// i tilleg - w dodatku
// !på! klær, jakkene - w ubraniach

// let uid = 279
// dict.forEach(item => item.forEach(item => {
//     item.id = 'noun' + uid++
// }))
