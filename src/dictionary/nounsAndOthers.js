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
        'no': 'årstider',
        'pl': 'pory roku',
        'id': 'noun32',
    },
    {
        'no': 'vår',
        'pl': 'wiosna',
        'id': 'noun33',
    },
    {
        'no': 'sommer',
        'pl': 'lato',
        'id': 'noun34',
    },
    {
        'no': 'høst',
        'pl': 'jesień',
        'id': 'noun35',
    },
    {
        'no': 'vinter',
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
        'no': 'morgen',
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
        'no': 'kveld',
        'pl': 'wieczór',
        'id': 'noun46',
    },
    {
        'no': 'i kveld',
        'pl': 'wieczorem',
        'id': 'noun47',
    },
    {
        'no': 'natt',
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
        'no': 'tøff',
        'pl': 'twardy',
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
        'no': 'en slike',
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
        'no': 'en bh',
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
]

export default dict


// let uid = 279
// dict.forEach(item => item.forEach(item => {
//     item.id = 'noun' + uid++
// }))
