export interface TeamMember {
  id: string;
  name: string;
  title: string;
  role: string;
  bio: string;
  photo: string;
  email?: string;
  linkedin?: string;
  expertise: string[];
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
  },
];
