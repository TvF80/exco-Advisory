export interface TeamMember {
  id: string;
  name: string;
  title: string;
  role: string;
  bio: string;
  photo: string;
  email?: string;
  expertise: string[];
  group: 'advisory' | 'board';
}

export const team: TeamMember[] = [
  {
    id: 'tomasz-fordymacki',
    name: 'Tomasz Fordymacki',
    title: 'Zarząd EXCO A2A Polska',
    role: 'Managing Partner',
    bio: 'Wieloletni doradca zarządów polskich i zagranicznych firm. Specjalizuje się w doradztwie strategicznym, transakcjach M&A oraz pozyskiwaniu finansowania dla przedsiębiorstw na różnych etapach rozwoju. Łączy perspektywę finansową z operacyjną, co pozwala dostarczać kompleksowe rozwiązania.',
    photo: '/photos/tomasz.jpg',
    email: 'tomasz.fordymacki@exco.pl',
    expertise: ['Doradztwo strategiczne', 'Transakcje M&A', 'Pozyskiwanie finansowania'],
    group: 'advisory',
  },
  {
    id: 'agnieszka-janeczek',
    name: 'Agnieszka Janeczek',
    title: 'Senior Consultant',
    role: 'Dyrektor ds. Restrukturyzacji',
    bio: 'Ekspertka z zakresu restrukturyzacji finansowej i operacyjnej przedsiębiorstw. Przeprowadziła kilkadziesiąt projektów naprawczych w branżach produkcyjnej, handlowej i usługowej. Specjalizuje się w optymalizacji procesów i modelowaniu finansowym.',
    photo: '/photos/agnieszka.jpg',
    email: 'agnieszka.janeczek@exco.pl',
    expertise: ['Restrukturyzacje', 'Modelowanie finansowe', 'Optymalizacja procesów'],
    group: 'advisory',
  },
  {
    id: 'piotr-grzeszczyk',
    name: 'Piotr Grzeszczyk',
    title: 'Senior Consultant',
    role: 'Dyrektor ds. Wycen i Analiz',
    bio: 'Certyfikowany rzeczoznawca majątkowy i biegły w zakresie wycen przedsiębiorstw. Autor kilkuset wycen dla celów transakcyjnych, sprawozdawczych i spornych. Doświadczony analityk rynku kapitałowego i due diligence finansowego.',
    photo: '/photos/piotr.jpg',
    email: 'piotr.grzeszczyk@exco.pl',
    expertise: ['Wyceny przedsiębiorstw', 'Due diligence', 'Analiza rynku'],
    group: 'advisory',
  },
  {
    id: 'raphael-vieuxmaire',
    name: 'Raphaël Vieuxmaire',
    title: 'Członek Zarządu EXCO A2A Polska',
    role: 'Partner Zarządzający',
    bio: 'Współzałożyciel i partner zarządzający EXCO A2A Polska. Od ponad 20 lat kieruje rozwojem grupy EXCO w Polsce, odpowiadając za strategię, relacje z klientami kluczowymi oraz ekspansję sieci EXCO International. Ekspert w zakresie zarządzania organizacjami doradczymi i budowania długoterminowych partnerstw biznesowych.',
    photo: '/photos/raphael.jpg',
    email: 'raphael.vieuxmaire@exco.pl',
    expertise: ['Strategia grupy', 'Zarządzanie organizacją', 'Relacje korporacyjne'],
    group: 'board',
  },
  {
    id: 'laurent-le-pajolec',
    name: 'Laurent Le Pajolec',
    title: 'Członek Zarządu EXCO A2A Polska',
    role: 'Partner Zarządzający',
    bio: 'Partner zarządzający EXCO A2A Polska z wieloletnim doświadczeniem w audycie i doradztwie dla klientów korporacyjnych i private equity. Odpowiada za standardy jakości i relacje z największymi klientami grupy. Aktywnie angażuje się w projekty transgraniczne w ramach sieci EXCO International.',
    photo: '/photos/laurent.jpg',
    email: 'laurent.lepajolec@exco.pl',
    expertise: ['Audyt korporacyjny', 'Private equity', 'Projekty transgraniczne'],
    group: 'board',
  },
];
