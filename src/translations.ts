export type Lang = 'pl' | 'en' | 'fr' | 'es' | 'de' | 'it' | 'jp' | 'cn';

export const langMeta: Record<Lang, { label: string; flag: string }> = {
  pl: { label: 'PL', flag: '🇵🇱' },
  en: { label: 'EN', flag: '🇬🇧' },
  fr: { label: 'FR', flag: '🇫🇷' },
  es: { label: 'ES', flag: '🇪🇸' },
  de: { label: 'DE', flag: '🇩🇪' },
  it: { label: 'IT', flag: '🇮🇹' },
  jp: { label: 'JP', flag: '🇯🇵' },
  cn: { label: 'CN', flag: '🇨🇳' },
};

interface T {
  nav: { services: string; why: string; industries: string; team: string; numbers: string; contact: string; cta: string };
  hero: { eyebrow: string; h1: string; h1gold: string; subtitle: string; btn1: string; btn2: string; stat1: { val: string; lbl: string }; stat2: { val: string; lbl: string }; stat3: { val: string; lbl: string } };
  services: { eyebrow: string; h2: string; h2b: string; hint: string };
  why: { eyebrow: string; h2: string; h2gold: string; body: string; family: string };
  industries: { eyebrow: string; h2: string; h2b: string; hint: string };
  team: { eyebrow: string; h2: string; h2b: string; board: string; boardDesc: string };
  numbers: { eyebrow: string; h2: string };
  contact: { eyebrow: string; h2: string; h2b: string; namePh: string; companyPh: string; emailPh: string; phonePh: string; messagePh: string; required: string; submit: string; successTitle: string; successBody: string };
}

export const translations: Record<Lang, T> = {
  pl: {
    nav: { services: 'Usługi', why: 'Dlaczego EXCO', industries: 'Dla kogo', team: 'Zespół', numbers: 'O nas', contact: 'Kontakt', cta: 'Umów konsultację' },
    hero: {
      eyebrow: 'EXCO Advisory · Warszawa',
      h1: 'EXCO Finance', h1gold: 'Advisory',
      subtitle: 'Doradztwo finansowe dla firm na każdym etapie rozwoju. Wyceny, restrukturyzacje, transakcje M&A — w jednym miejscu, bez kompromisów w jakości.',
      btn1: 'Umów konsultację', btn2: 'Poznaj usługi',
      stat1: { val: '27+', lbl: 'lat grupy EXCO' },
      stat2: { val: '6', lbl: 'biur w Polsce' },
      stat3: { val: '200+', lbl: 'ekspertów w grupie' },
    },
    services: { eyebrow: 'Nasze usługi', h2: 'Kompleksowe doradztwo', h2b: 'na każdym etapie', hint: 'Kliknij usługę, aby zobaczyć pełny zakres.' },
    why: { eyebrow: 'Dlaczego EXCO', h2: 'Siła grupy EXCO', h2gold: 'to Twoja przewaga', body: 'Większość firm doradczych specjalizuje się w jednej dziedzinie. EXCO jest wyjątkiem. Pod jednym dachem łączymy finanse, prawo i audyt.', family: 'Rodzina EXCO w Polsce' },
    industries: { eyebrow: 'Dla kogo pracujemy', h2: 'Branże i', h2b: 'profile klientów', hint: 'Kliknij kafelek, aby rozwinąć szczegóły.' },
    team: { eyebrow: 'Zespół ekspertów', h2: 'Ludzie,', h2b: 'na których możesz polegać', board: 'Zarząd EXCO A2A Polska', boardDesc: 'Każdy projekt doradczy korzysta z bezpośredniego zaangażowania partnerów zarządzających grupy EXCO.' },
    numbers: { eyebrow: 'Fakty', h2: 'EXCO w liczbach' },
    contact: { eyebrow: 'Kontakt', h2: 'Porozmawiajmy', h2b: 'o Twoim projekcie', namePh: 'Imię i nazwisko *', companyPh: 'Nazwa firmy', emailPh: 'E-mail *', phonePh: 'Telefon', messagePh: 'Opisz krótko swój projekt lub pytanie *', required: 'Pola oznaczone * są wymagane. Odpowiadamy w ciągu 24h.', submit: 'Wyślij wiadomość', successTitle: 'Dziękujemy!', successBody: 'Twoja wiadomość dotarła. Skontaktujemy się w ciągu 24 godzin roboczych.' },
  },

  en: {
    nav: { services: 'Services', why: 'Why EXCO', industries: 'Who we serve', team: 'Team', numbers: 'About', contact: 'Contact', cta: 'Book a consultation' },
    hero: {
      eyebrow: 'EXCO Advisory · Warsaw',
      h1: 'EXCO Finance', h1gold: 'Advisory',
      subtitle: 'Financial advisory for companies at every stage of growth. Valuations, restructuring, M&A transactions — all in one place, no compromises on quality.',
      btn1: 'Book a consultation', btn2: 'Our services',
      stat1: { val: '27+', lbl: 'years of EXCO group' },
      stat2: { val: '6', lbl: 'offices in Poland' },
      stat3: { val: '200+', lbl: 'experts in the group' },
    },
    services: { eyebrow: 'Our services', h2: 'Comprehensive advisory', h2b: 'at every stage', hint: 'Click a service to see full scope.' },
    why: { eyebrow: 'Why EXCO', h2: 'The strength of EXCO', h2gold: 'is your advantage', body: 'Most advisory firms specialise in a single discipline. EXCO is different. Under one roof we combine finance, law, and audit.', family: 'EXCO family in Poland' },
    industries: { eyebrow: 'Who we serve', h2: 'Industries &', h2b: 'client profiles', hint: 'Click a tile to expand details.' },
    team: { eyebrow: 'Expert team', h2: 'People', h2b: 'you can rely on', board: 'EXCO A2A Poland Board', boardDesc: 'Every advisory project benefits from the direct involvement of EXCO group managing partners.' },
    numbers: { eyebrow: 'Facts', h2: 'EXCO in numbers' },
    contact: { eyebrow: 'Contact', h2: 'Let\'s talk', h2b: 'about your project', namePh: 'Full name *', companyPh: 'Company name', emailPh: 'E-mail *', phonePh: 'Phone', messagePh: 'Briefly describe your project or question *', required: 'Fields marked * are required. We respond within 24h.', submit: 'Send message', successTitle: 'Thank you!', successBody: 'Your message has been received. We will contact you within 24 business hours.' },
  },

  fr: {
    nav: { services: 'Services', why: 'Pourquoi EXCO', industries: 'Pour qui', team: 'Équipe', numbers: 'À propos', contact: 'Contact', cta: 'Prendre rendez-vous' },
    hero: {
      eyebrow: 'EXCO Advisory · Varsovie',
      h1: 'EXCO Finance', h1gold: 'Advisory',
      subtitle: 'Conseil financier pour les entreprises à chaque étape de leur développement. Évaluations, restructurations, transactions M&A — en un seul endroit, sans compromis sur la qualité.',
      btn1: 'Prendre rendez-vous', btn2: 'Nos services',
      stat1: { val: '27+', lbl: 'ans du groupe EXCO' },
      stat2: { val: '6', lbl: 'bureaux en Pologne' },
      stat3: { val: '200+', lbl: 'experts dans le groupe' },
    },
    services: { eyebrow: 'Nos services', h2: 'Conseil complet', h2b: 'à chaque étape', hint: 'Cliquez sur un service pour voir la portée complète.' },
    why: { eyebrow: 'Pourquoi EXCO', h2: 'La force du groupe EXCO', h2gold: 'est votre avantage', body: 'La plupart des cabinets de conseil se spécialisent dans un seul domaine. EXCO est différent. Sous un même toit, nous combinons finance, droit et audit.', family: 'Famille EXCO en Pologne' },
    industries: { eyebrow: 'Pour qui travaillons-nous', h2: 'Secteurs &', h2b: 'profils clients', hint: 'Cliquez sur une tuile pour développer les détails.' },
    team: { eyebrow: 'Équipe d\'experts', h2: 'Des personnes', h2b: 'sur lesquelles vous pouvez compter', board: 'Conseil EXCO A2A Pologne', boardDesc: 'Chaque projet bénéficie de l\'implication directe des associés gérants du groupe EXCO.' },
    numbers: { eyebrow: 'Faits', h2: 'EXCO en chiffres' },
    contact: { eyebrow: 'Contact', h2: 'Parlons', h2b: 'de votre projet', namePh: 'Nom complet *', companyPh: 'Nom de l\'entreprise', emailPh: 'E-mail *', phonePh: 'Téléphone', messagePh: 'Décrivez brièvement votre projet *', required: 'Les champs * sont obligatoires. Nous répondons sous 24h.', submit: 'Envoyer le message', successTitle: 'Merci !', successBody: 'Votre message a bien été reçu. Nous vous contacterons dans les 24 heures ouvrables.' },
  },

  es: {
    nav: { services: 'Servicios', why: 'Por qué EXCO', industries: 'Para quién', team: 'Equipo', numbers: 'Sobre nosotros', contact: 'Contacto', cta: 'Reservar consulta' },
    hero: {
      eyebrow: 'EXCO Advisory · Varsovia',
      h1: 'EXCO Finance', h1gold: 'Advisory',
      subtitle: 'Asesoramiento financiero para empresas en cada etapa de su desarrollo. Valoraciones, reestructuraciones, transacciones M&A — todo en un lugar, sin compromisos en calidad.',
      btn1: 'Reservar consulta', btn2: 'Nuestros servicios',
      stat1: { val: '27+', lbl: 'años del grupo EXCO' },
      stat2: { val: '6', lbl: 'oficinas en Polonia' },
      stat3: { val: '200+', lbl: 'expertos en el grupo' },
    },
    services: { eyebrow: 'Nuestros servicios', h2: 'Asesoramiento integral', h2b: 'en cada etapa', hint: 'Haga clic en un servicio para ver el alcance completo.' },
    why: { eyebrow: 'Por qué EXCO', h2: 'La fortaleza del grupo EXCO', h2gold: 'es su ventaja', body: 'La mayoría de las firmas de consultoría se especializan en una sola disciplina. EXCO es diferente. Bajo un mismo techo combinamos finanzas, derecho y auditoría.', family: 'Familia EXCO en Polonia' },
    industries: { eyebrow: 'Para quién trabajamos', h2: 'Sectores y', h2b: 'perfiles de clientes', hint: 'Haga clic en una ficha para ver los detalles.' },
    team: { eyebrow: 'Equipo de expertos', h2: 'Personas', h2b: 'en las que puede confiar', board: 'Junta EXCO A2A Polonia', boardDesc: 'Cada proyecto se beneficia de la participación directa de los socios gestores del grupo EXCO.' },
    numbers: { eyebrow: 'Hechos', h2: 'EXCO en números' },
    contact: { eyebrow: 'Contacto', h2: 'Hablemos', h2b: 'sobre su proyecto', namePh: 'Nombre completo *', companyPh: 'Nombre de la empresa', emailPh: 'Correo electrónico *', phonePh: 'Teléfono', messagePh: 'Describa brevemente su proyecto *', required: 'Los campos * son obligatorios. Respondemos en 24h.', submit: 'Enviar mensaje', successTitle: '¡Gracias!', successBody: 'Su mensaje ha sido recibido. Nos pondremos en contacto en 24 horas hábiles.' },
  },

  de: {
    nav: { services: 'Leistungen', why: 'Warum EXCO', industries: 'Für wen', team: 'Team', numbers: 'Über uns', contact: 'Kontakt', cta: 'Beratung buchen' },
    hero: {
      eyebrow: 'EXCO Advisory · Warschau',
      h1: 'EXCO Finance', h1gold: 'Advisory',
      subtitle: 'Finanzberatung für Unternehmen in jeder Entwicklungsphase. Bewertungen, Restrukturierungen, M&A-Transaktionen — alles an einem Ort, ohne Kompromisse bei der Qualität.',
      btn1: 'Beratung buchen', btn2: 'Unsere Leistungen',
      stat1: { val: '27+', lbl: 'Jahre der EXCO-Gruppe' },
      stat2: { val: '6', lbl: 'Büros in Polen' },
      stat3: { val: '200+', lbl: 'Experten in der Gruppe' },
    },
    services: { eyebrow: 'Unsere Leistungen', h2: 'Umfassende Beratung', h2b: 'in jeder Phase', hint: 'Klicken Sie auf eine Leistung, um den vollen Umfang zu sehen.' },
    why: { eyebrow: 'Warum EXCO', h2: 'Die Stärke der EXCO-Gruppe', h2gold: 'ist Ihr Vorteil', body: 'Die meisten Beratungsunternehmen spezialisieren sich auf eine Disziplin. EXCO ist anders. Unter einem Dach kombinieren wir Finanzen, Recht und Prüfung.', family: 'EXCO-Familie in Polen' },
    industries: { eyebrow: 'Für wen wir arbeiten', h2: 'Branchen und', h2b: 'Kundenprofile', hint: 'Klicken Sie auf eine Kachel, um Details zu erweitern.' },
    team: { eyebrow: 'Expertenteam', h2: 'Menschen,', h2b: 'auf die Sie sich verlassen können', board: 'Vorstand EXCO A2A Polen', boardDesc: 'Jedes Projekt profitiert vom direkten Engagement der geschäftsführenden Partner der EXCO-Gruppe.' },
    numbers: { eyebrow: 'Fakten', h2: 'EXCO in Zahlen' },
    contact: { eyebrow: 'Kontakt', h2: 'Sprechen wir', h2b: 'über Ihr Projekt', namePh: 'Vollständiger Name *', companyPh: 'Firmenname', emailPh: 'E-Mail *', phonePh: 'Telefon', messagePh: 'Beschreiben Sie kurz Ihr Projekt *', required: 'Mit * markierte Felder sind Pflichtfelder. Antwort innerhalb von 24h.', submit: 'Nachricht senden', successTitle: 'Danke!', successBody: 'Ihre Nachricht ist eingegangen. Wir melden uns innerhalb von 24 Geschäftsstunden.' },
  },

  it: {
    nav: { services: 'Servizi', why: 'Perché EXCO', industries: 'Per chi', team: 'Team', numbers: 'Chi siamo', contact: 'Contatti', cta: 'Prenota consulenza' },
    hero: {
      eyebrow: 'EXCO Advisory · Varsavia',
      h1: 'EXCO Finance', h1gold: 'Advisory',
      subtitle: 'Consulenza finanziaria per aziende in ogni fase di sviluppo. Valutazioni, ristrutturazioni, transazioni M&A — tutto in un unico posto, senza compromessi sulla qualità.',
      btn1: 'Prenota consulenza', btn2: 'I nostri servizi',
      stat1: { val: '27+', lbl: 'anni del gruppo EXCO' },
      stat2: { val: '6', lbl: 'uffici in Polonia' },
      stat3: { val: '200+', lbl: 'esperti nel gruppo' },
    },
    services: { eyebrow: 'I nostri servizi', h2: 'Consulenza completa', h2b: 'in ogni fase', hint: 'Clicca su un servizio per vedere lo scopo completo.' },
    why: { eyebrow: 'Perché EXCO', h2: 'La forza del gruppo EXCO', h2gold: 'è il tuo vantaggio', body: 'La maggior parte delle società di consulenza si specializza in una sola disciplina. EXCO è diverso. Sotto un unico tetto combiniamo finanza, diritto e revisione.', family: 'Famiglia EXCO in Polonia' },
    industries: { eyebrow: 'Per chi lavoriamo', h2: 'Settori e', h2b: 'profili dei clienti', hint: 'Clicca su una tessera per espandere i dettagli.' },
    team: { eyebrow: 'Team di esperti', h2: 'Persone', h2b: 'di cui fidarsi', board: 'Consiglio EXCO A2A Polonia', boardDesc: 'Ogni progetto beneficia del coinvolgimento diretto dei partner gestori del gruppo EXCO.' },
    numbers: { eyebrow: 'Fatti', h2: 'EXCO in numeri' },
    contact: { eyebrow: 'Contatti', h2: 'Parliamo', h2b: 'del tuo progetto', namePh: 'Nome completo *', companyPh: 'Nome azienda', emailPh: 'E-mail *', phonePh: 'Telefono', messagePh: 'Descrivi brevemente il tuo progetto *', required: 'I campi * sono obbligatori. Rispondiamo entro 24h.', submit: 'Invia messaggio', successTitle: 'Grazie!', successBody: 'Il tuo messaggio è stato ricevuto. Ti contatteremo entro 24 ore lavorative.' },
  },

  jp: {
    nav: { services: 'サービス', why: 'EXCOについて', industries: '対象', team: 'チーム', numbers: '概要', contact: 'お問い合わせ', cta: '相談を予約' },
    hero: {
      eyebrow: 'EXCO Advisory · ワルシャワ',
      h1: 'EXCO Finance', h1gold: 'Advisory',
      subtitle: 'あらゆる成長段階の企業向けファイナンシャルアドバイザリー。企業評価、リストラクチャリング、M&A取引 — ワンストップで、品質に妥協なし。',
      btn1: '相談を予約', btn2: 'サービス一覧',
      stat1: { val: '27+', lbl: 'EXCOグループ設立年数' },
      stat2: { val: '6', lbl: 'ポーランドの拠点' },
      stat3: { val: '200+', lbl: 'グループ内専門家数' },
    },
    services: { eyebrow: 'サービス', h2: '包括的なアドバイザリー', h2b: 'あらゆるステージに対応', hint: 'サービスをクリックして詳細を確認。' },
    why: { eyebrow: 'なぜEXCO？', h2: 'EXCOグループの強み', h2gold: 'があなたの優位性', body: 'ほとんどのコンサルティング会社は1つの専門分野に特化しています。EXCOは違います。財務、法務、監査を1つ屋根の下で提供します。', family: 'ポーランドのEXCOファミリー' },
    industries: { eyebrow: '対象クライアント', h2: '業種と', h2b: 'クライアントプロファイル', hint: 'タイルをクリックして詳細を展開。' },
    team: { eyebrow: 'エキスパートチーム', h2: '信頼できる', h2b: '専門家たち', board: 'EXCO A2A ポーランド取締役会', boardDesc: 'すべてのプロジェクトは、EXCOグループのマネージングパートナーが直接関与します。' },
    numbers: { eyebrow: '実績', h2: 'EXCOの数字' },
    contact: { eyebrow: 'お問い合わせ', h2: 'プロジェクトについて', h2b: 'お話しましょう', namePh: '氏名 *', companyPh: '会社名', emailPh: 'メールアドレス *', phonePh: '電話番号', messagePh: 'プロジェクトについて簡単にご説明ください *', required: '* は必須項目です。24時間以内にご返信します。', submit: 'メッセージを送信', successTitle: 'ありがとうございます！', successBody: 'メッセージを受け取りました。24営業時間以内にご連絡いたします。' },
  },

  cn: {
    nav: { services: '服务', why: '为何选择EXCO', industries: '服务对象', team: '团队', numbers: '关于我们', contact: '联系我们', cta: '预约咨询' },
    hero: {
      eyebrow: 'EXCO Advisory · 华沙',
      h1: 'EXCO Finance', h1gold: 'Advisory',
      subtitle: '为各发展阶段企业提供财务咨询服务。企业估值、重组、并购交易——一站式服务，品质无妥协。',
      btn1: '预约咨询', btn2: '了解服务',
      stat1: { val: '27+', lbl: 'EXCO集团成立年数' },
      stat2: { val: '6', lbl: '波兰办公室数量' },
      stat3: { val: '200+', lbl: '集团内专家数量' },
    },
    services: { eyebrow: '我们的服务', h2: '全面的顾问服务', h2b: '覆盖每个阶段', hint: '点击服务卡片查看详情。' },
    why: { eyebrow: '为何选择EXCO', h2: 'EXCO集团的实力', h2gold: '是您的优势', body: '大多数咨询公司专注于单一领域。EXCO不同。我们在同一屋檐下整合财务、法律和审计服务。', family: 'EXCO在波兰的家族企业' },
    industries: { eyebrow: '我们服务的对象', h2: '行业与', h2b: '客户画像', hint: '点击卡片展开详情。' },
    team: { eyebrow: '专家团队', h2: '值得信赖的', h2b: '专业人士', board: 'EXCO A2A波兰董事会', boardDesc: '每个项目都有EXCO集团管理合伙人的直接参与。' },
    numbers: { eyebrow: '数据', h2: 'EXCO的数字' },
    contact: { eyebrow: '联系我们', h2: '让我们谈谈', h2b: '您的项目', namePh: '姓名 *', companyPh: '公司名称', emailPh: '电子邮件 *', phonePh: '电话', messagePh: '请简要描述您的项目或问题 *', required: '标有 * 的字段为必填项。我们将在24小时内回复。', submit: '发送消息', successTitle: '谢谢！', successBody: '您的消息已收到。我们将在24个工作小时内与您联系。' },
  },
};
