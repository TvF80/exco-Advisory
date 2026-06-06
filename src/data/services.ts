export interface Service {
  id: string;
  icon: string;
  title: string;
  shortDesc: string;
  description: string;
  scope: string[];
  color: string;
}

export const services: Service[] = [
  {
    id: 'doradztwo-strategiczne',
    icon: 'Target',
    title: 'Doradztwo strategiczne i finansowe',
    shortDesc: 'Budujemy strategie finansowe dopasowane do celów i etapu rozwoju firmy.',
    description: 'Pomagamy zarządom i właścicielom podejmować trafne decyzje strategiczne — od analizy sytuacji finansowej, przez budowę modeli biznesowych, po wdrożenie strategii wzrostu. Łączymy wiedzę finansową z rozumieniem operacyjnych realiów rynku.',
    scope: ['Analiza finansowa i diagnostyka', 'Budowa strategii finansowej', 'Modele biznesowe i prognozy', 'Wsparcie zarządu (interim CFO)', 'Monitoring KPI i dashboardy'],
    color: '#0A2E1E',
  },
  {
    id: 'wyceny',
    icon: 'BarChart3',
    title: 'Wyceny przedsiębiorstw',
    shortDesc: 'Rzetelne wyceny dla celów transakcyjnych, sprawozdawczych i spornych.',
    description: 'Wykonujemy profesjonalne wyceny metodami dochodowymi, porównawczymi i majątkowymi. Nasze raporty spełniają wymogi regulacyjne i są akceptowane przez banki, inwestorów oraz sądy. Każda wycena opiera się na rzetelnej analizie, nie na gotowych szablonach.',
    scope: ['Wyceny metodą DCF', 'Wyceny porównawcze (mnożniki)', 'Wyceny majątku i znaków towarowych', 'Wyceny dla celów spornych', 'Fairness opinion'],
    color: '#1A5233',
  },
  {
    id: 'restrukturyzacje',
    icon: 'RefreshCw',
    title: 'Restrukturyzacje',
    shortDesc: 'Skuteczne programy naprawcze i restrukturyzacyjne dla firm w trudnej sytuacji.',
    description: 'Wspieramy firmy w przeprowadzeniu skutecznej restrukturyzacji — zarówno finansowej, jak i operacyjnej. Negocjujemy z wierzycielami, przygotowujemy plany naprawcze i nadzorujemy ich realizację. Działamy szybko, zachowując dyskrecję i profesjonalizm.',
    scope: ['Diagnoza sytuacji i plan naprawczy', 'Restrukturyzacja zadłużenia', 'Negocjacje z wierzycielami i bankami', 'Restrukturyzacja operacyjna', 'Postępowania restrukturyzacyjne'],
    color: '#2E7D52',
  },
  {
    id: 'optymalizacja',
    icon: 'TrendingUp',
    title: 'Optymalizacja kosztów i procesów',
    shortDesc: 'Wydobywamy ukryty potencjał efektywności w organizacji.',
    description: 'Identyfikujemy obszary marnotrawstwa i możliwości optymalizacji — w kosztach, procesach zakupowych, łańcuchu dostaw i strukturze organizacyjnej. Wdrażamy zmiany przynoszące mierzalne rezultaty, nie tylko rekomendacje.',
    scope: ['Audyt kosztów i benchmarking', 'Optymalizacja struktury kosztów', 'Lean management i eliminacja strat', 'Optymalizacja zakupów i dostawców', 'Wdrożenie controllingu'],
    color: '#0A2E1E',
  },
  {
    id: 'ma',
    icon: 'ArrowLeftRight',
    title: 'Doradztwo transakcyjne (M&A)',
    shortDesc: 'Kompleksowe wsparcie przy przejęciach, fuzjach i sprzedaży firmy.',
    description: 'Towarzyszymy klientom przez cały proces transakcji — od przygotowania i wyceny, przez due diligence finansowe, po negocjacje i zamknięcie. Reprezentujemy zarówno kupujących, jak i sprzedających, zawsze stawiając interes klienta na pierwszym miejscu.',
    scope: ['Przygotowanie sprzedaży (sell-side)', 'Wsparcie kupującego (buy-side)', 'Due diligence finansowe i operacyjne', 'Negocjacje i strukturyzacja transakcji', 'Integracja po-akwizycyjna (PMI)'],
    color: '#1A5233',
  },
  {
    id: 'finansowanie',
    icon: 'Banknote',
    title: 'Pozyskiwanie finansowania',
    shortDesc: 'Pomagamy zdobyć kapitał — od kredytu po inwestora strategicznego.',
    description: 'Przygotowujemy firmy do rozmów z bankami, funduszami PE/VC i inwestorami strategicznymi. Budujemy materiały inwestycyjne, modele finansowe i prowadzimy negocjacje. Znamy rynek i wiemy, jak przedstawić firmę, żeby wzbudzić zainteresowanie właściwego finansującego.',
    scope: ['Kredyty inwestycyjne i obrotowe', 'Finansowanie PE/VC i angel', 'Emisje obligacji korporacyjnych', 'Dotacje UE i finansowanie publiczne', 'Teaser, IM, pitch deck'],
    color: '#2E7D52',
  },
];
