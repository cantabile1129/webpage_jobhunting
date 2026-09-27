const translations = {
  ja: {
    skip: "本文へ移動",
    navAbout: "About",
    navAwards: "受賞",
    navPublications: "論文",
    navDevelopment: "開発経験",
    navWorks: "取り組み",
    heroLead: "慶應義塾大学大学院で、音楽情報処理と音声合成の研究に取り組んでいます。",
    labLink: "Takamichi Lab. / 高道研究室",
    aboutCopy: "音楽情報処理と音声合成を軸に、データから表現や言語の多様性を捉える研究・開発に取り組んでいます。",
    educationLabel: "学歴",
    educationValue: "<span class=\"education-entry\"><span class=\"education-date\">2026年4月–現在</span><span>慶應義塾大学大学院<br>理工学研究科 人間・社会システム情報科学専攻</span></span><span class=\"education-entry\"><span class=\"education-date\">2022年4月–2026年3月</span><span>慶應義塾大学 理工学部 情報工学科</span></span>",
    qualificationsLabel: "資格",
    qualificationsValue: "<span class=\"qualification-entry\"><span class=\"qualification-date\">2024年8月</span><span>画像処理エンジニア検定 エキスパート</span></span><span class=\"qualification-entry\"><span class=\"qualification-date\">2024年12月</span><span>CGエンジニア検定 エキスパート</span></span><span class=\"qualification-entry\"><span class=\"qualification-date\">2025年1月</span><span>基本情報技術者試験</span></span><span class=\"qualification-entry\"><span class=\"qualification-date\">2026年5月</span><span>TOEIC 895点</span></span>",
    awardsTitle: "受賞",
    awardName: "学生奨励賞（Best New Direction部門）",
    awardDetail: "「人間演奏音楽と打ち込み音楽における楽譜特徴量の差異の分析」が、第147回MUS研究発表会で学生奨励賞を受賞しました。",
    publicationsTitle: "論文",
    publicationsNote: "高道研究室の公開論文リストに掲載されている深尾貫太名義の業績です。",
    firstAuthorTitle: "主著",
    coAuthorTitle: "共著",
    publicationListLink: "論文リスト",
    publicationAward: "学生奨励賞（Best New Direction部門）",
    developmentTitle: "開発経験",
    developmentTag: "開発",
    developmentHeading: "少数言語の音声合成",
    developmentSummary: "2026年6月から株式会社CoeFontでResearcherとして、少数言語を対象とした音声合成に従事しています。",
    worksTitle: "取り組み",
    worksNote: "研究で取り組むテーマと、得られた成果を紹介します。",
    orchestraHeading: "慶應義塾ワグネル・<br>ソサィエティー・オーケストラ",
    orchestraSummary: "チェロパートに所属。広報チーフとして、業務の類型化と管理体制の再編、連携強化に取り組みました。",
    choirHeading: "慶應義塾ワグネル・<br>ソサィエティー男声合唱団",
    choirSummary: "トップテノールとセカンドテノールに所属。チケット係チーフ、六連理事長、発声担当チーフを歴任し、チケット電子化にも従事しました。",
    cadenzaHeading: "カデンツァ・<br>フィルハーモニー",
    cadenzaSummary: "2026年4月から、ピアノとチェロを担当しています。"
  },
  en: {
    skip: "Skip to content",
    navAbout: "About",
    navAwards: "Awards",
    navPublications: "Publications",
    navDevelopment: "Experience",
    navWorks: "Activities",
    heroLead: "I research music information processing and speech synthesis at Keio University.",
    labLink: "Takamichi Lab.",
    aboutCopy: "I conduct research and development in music information processing and speech synthesis, focusing on how data represents diverse expressions and languages.",
    educationLabel: "Education",
    educationValue: "<span class=\"education-entry\"><span class=\"education-date\">Apr. 2026–Present</span><span>Graduate School of Science and Technology,<br>Keio University</span></span><span class=\"education-entry\"><span class=\"education-date\">Apr. 2022–Mar. 2026</span><span>B.E., Department of Information and Computer Science,<br>Keio University</span></span>",
    qualificationsLabel: "Qualifications",
    qualificationsValue: "<span class=\"qualification-entry\"><span class=\"qualification-date\">Aug. 2024</span><span>Image Processing Engineer Certification, Expert</span></span><span class=\"qualification-entry\"><span class=\"qualification-date\">Dec. 2024</span><span>CG Engineer Certification, Expert</span></span><span class=\"qualification-entry\"><span class=\"qualification-date\">Jan. 2025</span><span>Fundamental Information Technology Engineer Examination</span></span><span class=\"qualification-entry\"><span class=\"qualification-date\">May 2026</span><span>TOEIC L&amp;R 895</span></span>",
    awardsTitle: "Awards",
    awardName: "Student Encouragement Award (Best New Direction Category)",
    awardDetail: "Received the Student Encouragement Award at the 147th IPSJ SIGMUS meeting for “Analysis of Differences in Score Features Between Human-Performed and Computer-Programmed Music.”",
    publicationsTitle: "Publications",
    publicationsNote: "Publications by Kanta Fukao listed on the Takamichi Laboratory website.",
    firstAuthorTitle: "First-author papers",
    coAuthorTitle: "Co-authored papers",
    publicationListLink: "Publication list",
    publicationAward: "Student Encouragement Award (Best New Direction Category)",
    developmentTitle: "Development Experience",
    developmentTag: "Development",
    developmentHeading: "Speech synthesis for low-resource languages",
    developmentSummary: "Since June 2026, I have worked as a Researcher at CoeFont on speech synthesis for low-resource languages.",
    worksTitle: "Activities",
    worksNote: "A selection of my research themes and outcomes.",
    orchestraHeading: "Keio Wagner Society Orchestra",
    orchestraSummary: "Played in the cello section and served as publicity chief, where I categorized operations, reorganized management, and strengthened coordination.",
    choirHeading: "Keio Wagner Society Male Choir",
    choirSummary: "Sang as a first and second tenor. Served as ticket chief, Rokken chair, and vocalization chief, and helped digitize tickets for the 150th regular concert.",
    cadenzaHeading: "Cadenza Philharmonic",
    cadenzaSummary: "Since April 2026, I have played piano and cello."
  }
};

function setLanguage(language) {
  const dictionary = translations[language];
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const translation = dictionary[element.dataset.i18n];
    if (translation) element.innerHTML = translation;
  });
  document.querySelectorAll(".language-button").forEach((button) => {
    const active = button.dataset.language === language;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  localStorage.setItem("portfolio-language", language);
}

document.querySelectorAll(".language-button").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.language));
});

translations.ja = Object.fromEntries(
  [...document.querySelectorAll("[data-i18n]")].map((element) => [element.dataset.i18n, element.innerHTML])
);

setLanguage(localStorage.getItem("portfolio-language") || "ja");
