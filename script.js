// ═══════════════════════════════════════════════════════
//  REPUBLIC DATA
// ═══════════════════════════════════════════════════════
const republics = [
    {
        name: "Russian SFSR",
        native: "Российская Советская Федеративная Социалистическая Республика",
        capital: "Moscow",
        city: "Moscow",
        population: "148,300,000",
        area: "17,075,400 km²",
        language: "Russian",
        flag: ["#ffffff", "#cc2222", "#003580"]
    },
    {
        name: "Ukrainian SSR",
        native: "Українська Радянська Соціалістична Республіка",
        capital: "Kyiv",
        city: "Kyiv",
        population: "52,000,000",
        area: "603,550 km²",
        language: "Ukrainian",
        flag: ["#0057b7", "#ffd700", "#0057b7"]
    },
    {
        name: "Byelorussian SSR",
        native: "Беларуская Савецкая Сацыялістычная Рэспубліка",
        capital: "Minsk",
        city: "Minsk",
        population: "10,300,000",
        area: "207,600 km²",
        language: "Belarusian, Russian",
        flag: ["#cf101a", "#007a3d", "#cf101a"]
    },
    {
        name: "Uzbek SSR",
        native: "Ўзбекистон Совет Социалистик Республикаси",
        capital: "Tashkent",
        city: "Tashkent",
        population: "22,000,000",
        area: "448,978 km²",
        language: "Uzbek",
        flag: ["#1eb4e6", "#ffffff", "#1eba8b"]
    },
    {
        name: "Kazakh SSR",
        native: "Қазақ Кеңестік Социалистік Республикасы",
        capital: "Almaty",
        city: "Almaty",
        population: "16,500,000",
        area: "2,724,900 km²",
        language: "Kazakh, Russian",
        flag: ["#00aff0", "#f7c948", "#00aff0"]
    },
    {
        name: "Georgian SSR",
        native: "საქართველოს საბჭოთა სოციალისტური რესპუბლიკა",
        capital: "Tbilisi",
        city: "Tbilisi",
        population: "5,400,000",
        area: "69,700 km²",
        language: "Georgian",
        flag: ["#cc2222", "#ffffff", "#cc2222"]
    },
    {
        name: "Azerbaijan SSR",
        native: "Azərbaycan Sovet Sosialist Respublikası",
        capital: "Baku",
        city: "Baku",
        population: "7,200,000",
        area: "86,600 km²",
        language: "Azerbaijani",
        flag: ["#0092bc", "#cc2222", "#009b77"]
    },
    {
        name: "Lithuanian SSR",
        native: "Lietuvos Tarybų Socialistinė Respublika",
        capital: "Vilnius",
        city: "Vilnius",
        population: "3,700,000",
        area: "65,300 km²",
        language: "Lithuanian",
        flag: ["#fdba0b", "#006a44", "#c1272d"]
    },
    {
        name: "Moldavian SSR",
        native: "Република Советикэ Сочиалистэ Молдовеняскэ",
        capital: "Chișinău",
        city: "Chișinău",
        population: "4,400,000",
        area: "33,846 km²",
        language: "Moldavian, Russian",
        flag: ["#003DA5", "#cc2222", "#FFCD00"]
    },
    {
        name: "Latvian SSR",
        native: "Latvijas Padomju Sociālistiskā Republika",
        capital: "Riga",
        city: "Riga",
        population: "2,700,000",
        area: "64,589 km²",
        language: "Latvian",
        flag: ["#9e3039", "#ffffff", "#9e3039"]
    },
    {
        name: "Kirghiz SSR",
        native: "Кыргыз Советтик Социалисттик Республикасы",
        capital: "Bishkek",
        city: "Bishkek",
        population: "4,600,000",
        area: "199,951 km²",
        language: "Kyrgyz, Russian",
        flag: ["#cc2222", "#ffffff", "#cc2222"]
    },
    {
        name: "Tajik SSR",
        native: "Ҷумҳурии Шӯравии Сотсиалистии Тоҷикистон",
        capital: "Dushanbe",
        city: "Dushanbe",
        population: "5,800,000",
        area: "143,100 km²",
        language: "Tajik",
        flag: ["#cc2222", "#ffffff", "#007a3d"]
    },
    {
        name: "Armenian SSR",
        native: "Հայկական Խորհրդային Սոցիալիստական Հանրապետություն",
        capital: "Yerevan",
        city: "Yerevan",
        population: "3,300,000",
        area: "29,743 km²",
        language: "Armenian",
        flag: ["#d90012", "#0033a0", "#f2a800"]
    },
    {
        name: "Turkmen SSR",
        native: "Türkmenistan Sowet Sosialistik Respublikasy",
        capital: "Ashgabat",
        city: "Ashgabat",
        population: "3,800,000",
        area: "488,100 km²",
        language: "Turkmen",
        flag: ["#1ba134", "#ffffff", "#cc2222"]
    },
    {
        name: "Estonian SSR",
        native: "Eesti Nõukogude Sotsialistlik Vabariik",
        capital: "Tallinn",
        city: "Tallinn",
        population: "1,600,000",
        area: "45,228 km²",
        language: "Estonian",
        flag: ["#0072ce", "#000000", "#ffffff"]
    },
    {
        name: "Czech SSR",
        native: "Česká Sovětská Socialistická Republika",
        capital: "Prague",
        city: "Prague",
        population: "10,600,000",
        area: "78,866 km²",
        language: "Czech",
        flag: ["#d7141a", "#ffffff", "#11457e"]
    },
    {
        name: "Polish SSR",
        native: "Polska Sowiecka Republika Socjalistyczna",
        capital: "Warsaw",
        city: "Warsaw",
        population: "38,000,000",
        area: "312,696 km²",
        language: "Polish",
        flag: ["#ffffff", "#dc143c", "#ffffff"]
    },
    {
        name: "Slovak SSR",
        native: "Slovenská Sovietska Socialistická Republika",
        capital: "Bratislava",
        city: "Bratislava",
        population: "5,500,000",
        area: "49,035 km²",
        language: "Slovak",
        flag: ["#ffffff", "#0b4ea2", "#ee1c25"]
    },
    {
        name: "Hungarian SSR",
        native: "Magyar Szovjet Szocialista Köztársaság",
        capital: "Budapest",
        city: "Budapest",
        population: "9,800,000",
        area: "93,028 km²",
        language: "Hungarian",
        flag: ["#cc2222", "#ffffff", "#477050"]
    },
    {
        name: "Romanian SSR",
        native: "Republica Sovietică Socialistă Română",
        capital: "Bucharest",
        city: "Bucharest",
        population: "19,400,000",
        area: "238,397 km²",
        language: "Romanian",
        flag: ["#002B7F", "#FCD116", "#CC0001"]
    },
    {
        name: "Bulgarian SSR",
        native: "Българска Съветска Социалистическа Република",
        capital: "Sofia",
        city: "Sofia",
        population: "7,900,000",
        area: "110,993 km²",
        language: "Bulgarian",
        flag: ["#ffffff", "#00966e", "#d01c1f"]
    },
    {
        name: "Macedonian SSR",
        native: "Македонска Советска Социјалистичка Република",
        capital: "Skopje",
        city: "Skopje",
        population: "2,100,000",
        area: "25,713 km²",
        language: "Macedonian",
        flag: ["#ce2028", "#f7d616", "#ce2028"]
    },
    {
        name: "Kosovan SSR",
        native: "Republika Socialiste Sovjetike e Kosovës",
        capital: "Pristina",
        city: "Pristina",
        population: "1,900,000",
        area: "10,887 km²",
        language: "Albanian, Serbian",
        flag: ["#244aa5", "#e4b24a", "#244aa5"]
    },
    {
        name: "Serbian SSR",
        native: "Српска Совјетска Социјалистичка Република",
        capital: "Belgrade",
        city: "Belgrade",
        population: "6,900,000",
        area: "77,474 km²",
        language: "Serbian",
        flag: ["#cc2222", "#0c4076", "#ffffff"]
    },
    {
        name: "Montenegrin SSR",
        native: "Црногорска Совјетска Социјалистичка Република",
        capital: "Podgorica",
        city: "Podgorica",
        population: "630,000",
        area: "13,812 km²",
        language: "Montenegrin",
        flag: ["#d4af37", "#cc2222", "#d4af37"]
    },
    {
        name: "Albanian SSR",
        native: "Republika Socialiste Sovjetike e Shqipërisë",
        capital: "Tirana",
        city: "Tirana",
        population: "2,900,000",
        area: "28,748 km²",
        language: "Albanian",
        flag: ["#cc2222", "#000000", "#cc2222"]
    },
    {
        name: "Bosnian SSR",
        native: "Bosanska Sovjetska Socijalistička Republika",
        capital: "Sarajevo",
        city: "Sarajevo",
        population: "3,500,000",
        area: "51,209 km²",
        language: "Bosnian, Serbian, Croatian",
        flag: ["#002395", "#FCDD09", "#002395"]
    },
    {
        name: "Croatian SSR",
        native: "Hrvatska Socijalistička Sovjet Republika",
        capital: "Zagreb",
        city: "Zagreb",
        population: "4,100,000",
        area: "56,594 km²",
        language: "Croatian",
        flag: ["#cc2222", "#ffffff", "#1a3c8e"]
    },
    {
        name: "Slovenian SSR",
        native: "Slovenska Sovjetska Socialistična Republika",
        capital: "Ljubljana",
        city: "Ljubljana",
        population: "2,100,000",
        area: "20,271 km²",
        language: "Slovenian",
        flag: ["#003DA5", "#ffffff", "#CC0001"]
    }
];

// ═══════════════════════════════════════════════════════
//  HISTORY DATA
// ═══════════════════════════════════════════════════════
const historyEvents = [
    {
        year: "1917",
        title: "The October Revolution",
        desc: "The Bolshevik party, led by Vladimir Lenin, seizes power in Petrograd. The old Imperial order collapses, and a new socialist state is proclaimed."
    },
    {
        year: "1922",
        title: "Formation of the USSR",
        desc: "The Union of Soviet Socialist Republics is formally established, uniting the Russian, Ukrainian, Byelorussian, and Transcaucasian republics under a single federal framework."
    },
    {
        year: "1928–1941",
        title: "Industrialisation & the Five-Year Plans",
        desc: "Under Stalin, the USSR transforms from an agrarian society into a major industrial power through a series of ambitious state-directed economic plans."
    },
    {
        year: "1941–1945",
        title: "The Great Patriotic War",
        desc: "The Soviet Union bears the brunt of the war against Nazi Germany. At an immense cost of over 27 million lives, the Red Army defeats fascism and emerges as a global superpower."
    },
    {
        year: "1957",
        title: "Sputnik & the Space Race",
        desc: "The USSR launches Sputnik 1, the world's first artificial satellite, marking the beginning of the Space Age and cementing Soviet technological prestige."
    },
    {
        year: "1968–1975",
        title: "Western Expansion",
        desc: "Through a combination of political agreements and socialist solidarity, the Union welcomes Eastern and Southeastern European nations as full Soviet republics, broadening the federation to 30 members."
    },
    {
        year: "1985",
        title: "Era of Glasnost",
        desc: "General Secretary Gorbachev introduces sweeping reforms of openness and transparency. The Union enters a period of self-reflection and modernisation, strengthening its democratic institutions."
    },
    {
        year: "Present",
        title: "The Union Today",
        desc: "The Soviet Union endures — a reformed, modern federation of 30 republics. The Supreme Soviet remains the highest legislative body, shaping the future of over 450 million citizens."
    }
];

// ═══════════════════════════════════════════════════════
//  STATS DATA
// ═══════════════════════════════════════════════════════
const stats = [
    { icon: "🗺️", value: "30",        label: "Soviet Republics"   },
    { icon: "👥", value: "452M+",     label: "Total Population"   },
    { icon: "🌐", value: "22.4M km²", label: "Total Area"         },
    { icon: "🏙️", value: "Moscow",    label: "Capital City"       },
    { icon: "⚙️", value: "1922",      label: "Year Founded"       },
    { icon: "⭐", value: "Discord",   label: "Platform"           }
];

// ═══════════════════════════════════════════════════════
//  INIT
// ═══════════════════════════════════════════════════════
document.addEventListener("DOMContentLoaded", () => {
    buildTimeline();
    buildStats();
    buildRepublicSelect();
    initScrollAnimations();
    initNavbar();
    initHamburger();
});

// ── Navbar scroll shrink ──
function initNavbar() {
    const nav = document.getElementById("navbar");
    window.addEventListener("scroll", () => {
        nav.classList.toggle("scrolled", window.scrollY > 60);
    }, { passive: true });
}

// ── Hamburger menu ──
function initHamburger() {
    const btn = document.getElementById("nav-hamburger");
    const links = document.querySelector(".nav-links");
    btn.addEventListener("click", () => links.classList.toggle("open"));
}

// ── Timeline ──
function buildTimeline() {
    const container = document.getElementById("timeline-container");
    historyEvents.forEach(event => {
        const item = document.createElement("div");
        item.className = "timeline-item";
        item.innerHTML = `
            <p class="timeline-year">${event.year}</p>
            <h3 class="timeline-title">${event.title}</h3>
            <p class="timeline-desc">${event.desc}</p>
        `;
        container.appendChild(item);
    });
}

// ── Stats ──
function buildStats() {
    const container = document.getElementById("stats-container");
    stats.forEach((s, i) => {
        const card = document.createElement("div");
        card.className = "stat-card";
        card.style.transitionDelay = `${i * 0.07}s`;
        card.innerHTML = `
            <div class="stat-icon">${s.icon}</div>
            <div class="stat-value">${s.value}</div>
            <div class="stat-label">${s.label}</div>
        `;
        container.appendChild(card);
    });
}

// ── Republic Select ──
function buildRepublicSelect() {
    const select = document.getElementById("republic-select");

    republics.forEach((r, i) => {
        const opt = document.createElement("option");
        opt.value = i;
        opt.textContent = r.name;
        select.appendChild(opt);
    });

    select.addEventListener("change", () => {
        const rep = republics[parseInt(select.value)];
        renderRepublicProfile(rep);
    });
}

function renderRepublicProfile(rep) {
    const display = document.getElementById("republic-display");
    const stripes = rep.flag.map(c => `<div class="flag-stripe" style="background:${c};"></div>`).join("");

    display.innerHTML = `
        <div class="republic-profile">
            <div class="republic-flag-display" title="${rep.name} flag">${stripes}</div>
            <div class="republic-info">
                <h3>${rep.name}</h3>
                <p class="republic-native">${rep.native}</p>
                <div class="republic-meta">
                    <div class="meta-item">
                        <span class="meta-label">Capital</span>
                        <span class="meta-value">${rep.capital}</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-label">Largest City</span>
                        <span class="meta-value">${rep.city}</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-label">Population</span>
                        <span class="meta-value">${rep.population}</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-label">Area</span>
                        <span class="meta-value">${rep.area}</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-label">Official Language</span>
                        <span class="meta-value">${rep.language}</span>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// ── Scroll reveal ──
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll(".timeline-item, .stat-card").forEach(el => observer.observe(el));
}
