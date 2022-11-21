const dataProject = [
    { id: 1, project: "https://wildfires.strelka-kb.com", link: "https://wildfires.strelka-kb.com/" },
    { id: 2, project: "https://esg-renovation.strelka-kb.com", link: "https://esg-renovation.strelka-kb.com/" },
    { id: 3, project: "https://masshousing.strelka-kb.com", link: "https://masshousing.strelka-kb.com/" },
    { id: 4, project: "http://masshousing-lab.strelka-kb.com", link: "http://masshousing-lab.strelka-kb.com/" },
    { id: 5, project: "https://msp.strelka-kb.com", link: "https://msp.strelka-kb.com/" },
    { id: 6, project: "https://velofuture.strelka-kb.com", link: "https://velofuture.strelka-kb.com/" },
    { id: 7, project: "https://park-spb.ru", link: "https://park-spb.ru/" },
    { id: 8, project: "https://russian-cities.ru", link: "https://russian-cities.ru/" },

    { id: 9, project: "https://garagescreen.strelka-challenges.com", link: "https://garagescreen.strelka-challenges.com/" },
    { id: 10, project: "https://tourism-index.strelka-kb.com", link: "https://tourism-index.strelka-kb.com/" },
    { id: 11, project: "https://media.strelka-kb.com/green-roof", link: "https://media.strelka-kb.com/green-roof/" },
    { id: 12, project: "https://media.strelka-kb.com/green-rooftops-en", link: "https://media.strelka-kb.com/green-rooftops-en/" },
    { id: 13, project: "https://media.strelka-kb.com/greeninfrastructure", link: "https://media.strelka-kb.com/greeninfrastructure/" },
    { id: 14, project: "https://media.strelka-kb.com/moscow-rivers#!/tab/248570497-1", link: "https://media.strelka-kb.com/moscow-rivers#!/tab/248570497-1" },
    { id: 15, project: "https://media.strelka-kb.com/covid_citybudget", link: "https://media.strelka-kb.com/covid_citybudget" },
    { id: 16, project: "https://media.strelka-kb.com/gdp-russiancities", link: "https://media.strelka-kb.com/gdp-russiancities" },

    { id: 17, project: "https://media.strelka-kb.com/gdpcities", link: "https://media.strelka-kb.com/gdpcities" },
    { id: 18, project: "https://media.strelka-kb.com/gdpcities-en", link: "https://media.strelka-kb.com/gdpcities-en" },
    { id: 19, project: "https://gradurating.strelka-kb.com", link: "https://gradurating.strelka-kb.com/" },
    { id: 20, project: "https://media.strelka-kb.com/lifeinpandemia", link: "https://media.strelka-kb.com/lifeinpandemia" },
    { id: 21, project: "https://strelkamag.com/ru/article/kakim-mozhet-byt-pervyi-velomarshrut-moskvy-ot-vorobevykh-gor-do-vdnkh", link: "https://strelkamag.com/ru/article/kakim-mozhet-byt-pervyi-velomarshrut-moskvy-ot-vorobevykh-gor-do-vdnkh" },
    { id: 22, project: "https://media.strelka-kb.com/kurgalsky", link: "https://media.strelka-kb.com/kurgalsky" },
    { id: 23, project: "https://media.strelka-kb.com/kurgalsky_eng", link: "https://media.strelka-kb.com/kurgalsky_eng" },
    { id: 24, project: "https://media.strelka-kb.com/standart", link: "https://media.strelka-kb.com/standart" },

    // { id: 25, project: "http://gradurating.strelka-kb.com", link: "http://gradurating.strelka-kb.com/" },
    { id: 26, project: "http://masshousing-new.strelka-kb.com", link: "http://masshousing-new.strelka-kb.com/" },
    { id: 27, project: "https://citybudget.strelka-kb.com", link: "https://citybudget.strelka-kb.com/" },
    { id: 28, project: "https://readymag.com/u37631954/2497801/", link: "https://readymag.com/u37631954/2497801/" },
    { id: 29, project: "https://media.strelka-kb.com/bulletin4-authors-support", link: "https://media.strelka-kb.com/bulletin4-authors-support" },
    { id: 30, project: "https://media.strelka-kb.com/bulletin4-interview-lozhkin", link: "https://media.strelka-kb.com/bulletin4-interview-lozhkin" },
    { id: 31, project: "https://media.strelka-kb.com/guide", link: "https://media.strelka-kb.com/guide" },
    { id: 32, project: "https://media.strelka-kb.com/bulletin1-cities", link: "https://media.strelka-kb.com/bulletin1-cities" },

    { id: 33, project: "https://media.strelka-kb.com/bulletin4-cities-xxi", link: "https://media.strelka-kb.com/bulletin4-cities-xxi" },
    { id: 34, project: "https://media.strelka-kb.com/bulletin7-russky", link: "https://media.strelka-kb.com/bulletin7-russky" },
    { id: 35, project: "https://media.strelka-kb.com/bulletin7-masterplan", link: "https://media.strelka-kb.com/bulletin7-masterplan" },
    { id: 36, project: "https://media.strelka-kb.com/leontiev-future-architects", link: "https://media.strelka-kb.com/leontiev-future-architects" },
    { id: 37, project: "https://media.strelka-kb.com/bulletin3-anthropology", link: "https://media.strelka-kb.com/bulletin3-anthropology" },
    { id: 38, project: "https://media.strelka-kb.com/before-after", link: "https://media.strelka-kb.com/before-after" },
    { id: 39, project: "https://media.strelka-kb.com/bulletin3-kumertau", link: "https://media.strelka-kb.com/bulletin3-kumertau" },
    { id: 40, project: "https://media.strelka-kb.com/russia-before-after", link: "https://media.strelka-kb.com/russia-before-after" },

    { id: 41, project: "https://media.strelka-kb.com/bulletin3-activists", link: "https://media.strelka-kb.com/bulletin3-activists" },
    { id: 42, project: "https://media.strelka-kb.com/yards", link: "https://media.strelka-kb.com/yards" },
    { id: 43, project: "https://media.strelka-kb.com/arch", link: "https://media.strelka-kb.com/arch" },
    { id: 44, project: "https://media.strelka-kb.com/effects_for_cities", link: "https://media.strelka-kb.com/effects_for_cities" },
    { id: 45, project: "https://media.strelka-kb.com/index", link: "https://media.strelka-kb.com/index" },
    { id: 46, project: "https://media.strelka-kb.com/gradnormi", link: "https://media.strelka-kb.com/gradnormi" },  
    { id: 47, project: "http://hasura.library.strelka-kb.com", link: "http://hasura.library.strelka-kb.com" },  
    { id: 48, project: "https://testing.strelka-kb.com", link: "https://testing.strelka-kb.com/" },  



]


export default dataProject;