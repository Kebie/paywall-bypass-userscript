// ==UserScript==
// @name         Paywall Bypass
// @namespace    https://github.com/Kebie/paywall-bypass-userscript
// @version      0.0.3-custom
// @description  Mobile and desktop-friendly paywall bypass with dropdown menu, right-click options and floating button.
// @author       Kebie (modified version; see README for original credit)
// @license      MIT
// @homepageURL  https://github.com/Kebie/paywall-bypass-userscript
// @supportURL   https://github.com/Kebie/paywall-bypass-userscript/issues
// @downloadURL  https://raw.githubusercontent.com/Kebie/paywall-bypass-userscript/main/paywall-bypass.user.js
// @updateURL    https://raw.githubusercontent.com/Kebie/paywall-bypass-userscript/main/paywall-bypass.user.js
// @icon         data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='14' fill='%23222'/%3E%3Cpath d='M22 30V22a10 10 0 0 1 18-6' fill='none' stroke='white' stroke-width='5' stroke-linecap='round'/%3E%3Crect x='18' y='28' width='28' height='22' rx='4' fill='white'/%3E%3Cpath d='M34 37h12m0 0-5-5m5 5-5 5' fill='none' stroke='%23222' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E
// @match       *://*.adelaidenow.com.au/*
// @match       *://*.adweek.com/*
// @match       *://*.afr.com/*
// @match       *://*.ambito.com/*
// @match       *://*.ampproject.org/*
// @match       *://*.baltimoresun.com/*
// @match       *://*.barrons.com/*
// @match       *://*.bizjournals.com/*
// @match       *://*.bloomberg.com/*
// @match       *://*.bloombergquint.com/*
// @match       *://*.bostonglobe.com/*
// @match       *://*.brisbanetimes.com.au/*
// @match       *://*.britannica.com/*
// @match       *://*.businessinsider.com/*
// @match       *://*.caixinglobal.com/*
// @match       *://*.cbsnews.com/*
// @match       *://*.cen.acs.org/*
// @match       *://*.centralwesterndaily.com.au/*
// @match       *://*.chicagobusiness.com/*
// @match       *://*.chicagotribune.com/*
// @match       *://*.corriere.it/*
// @match       *://*.courant.com/*
// @match       *://*.couriermail.com.au/*
// @match       *://*.dailypress.com/*
// @match       *://*.dailytelegraph.com.au/*
// @match       *://*.delfi.ee/*
// @match       *://*.demorgen.be/*
// @match       *://*.denverpost.com/*
// @match       *://*.df.cl/*
// @match       *://*.dynamed.com/*
// @match       *://*.economist.com/*
// @match       *://*.elmercurio.com/*
// @match       *://*.elmundo.es/*
// @match       *://*.elu24.ee/*
// @match       *://*.entrepreneur.com/*
// @match       *://*.examiner.com.au/*
// @match       *://*.expansion.com/*
// @match       *://*.espn.com/*
// @match       *://*.fd.nl/*
// @match       *://*.financialpost.com/*
// @match       *://*.fnlondon.com/*
// @match       *://*.foreignpolicy.com/*
// @match       *://*.foreignaffairs.com/*
// @match       *://*.fortune.com/*
// @match       *://*.ft.com/*
// @match       *://*.gelocal.it/*
// @match       *://*.genomeweb.com/*
// @match       *://*.glassdoor.com/*
// @match       *://*.globes.co.il/*
// @match       *://*.groene.nl/*
// @match       *://*.haaretz.co.il/*
// @match       *://*.haaretz.com/*
// @match       *://*.harpers.org/*
// @match       *://*.hbr.org/*
// @match       *://*.hbrchina.org/*
// @match       *://*.heraldsun.com.au/*
// @match       *://*.historyextra.com/*
// @match       *://*.humo.be/*
// @match       *://*.ilmanifesto.it/*
// @match       *://*.inc.com/*
// @match       *://*.inquirer.com/*
// @match       *://*.interest.co.nz/*
// @match       *://*.investorschronicle.co.uk/*
// @match       *://*.irishtimes.com/*
// @match       *://*.japantimes.co.jp/*
// @match       *://*.journalnow.com/*
// @match       *://*.kansascity.com/*
// @match       *://*.labusinessjournal.com/*
// @match       *://*.lanacion.com.ar/*
// @match       *://*.lastampa.it/*
// @match       *://*.latercera.com/*
// @match       *://*.latimes.com/*
// @match       *://*.lavoixdunord.fr/*
// @match       *://*.lecho.be/*
// @match       *://*.leparisien.fr/*
// @match       *://*.lesechos.fr/*
// @match       *://*.loebclassics.com/*
// @match       *://*.lrb.co.uk/*
// @match       *://*.mcall.com/*
// @match       *://*.medium.com/*
// @match       *://*.medscape.com/*
// @match       *://*.mercurynews.com/*
// @match       *://*.mv-voice.com/*
// @match       *://*.nationalpost.com/*
// @match       *://*.nature.com/*
// @match       *://*.netdna-ssl.com/*
// @match       *://*.news-gazette.com/*
// @match       *://*.newstatesman.com/*
// @match       *://*.newscientist.com/*
// @match       *://*.nrc.nl/*
// @match       *://*.ntnews.com.au/*
// @match       *://*.nydailynews.com/*
// @match       *://*.nymag.com/*
// @match       *://*.nzherald.co.nz/*
// @match       *://*.nzz.ch/*
// @match       *://*.ocregister.com/*
// @match       *://*.orlandosentinel.com/*
// @match       *://*.outbrain.com/*
// @match       *://*.paloaltoonline.com/*
// @match       *://*.parool.nl/*
// @match       *://*.piano.io/*
// @match       *://*.poool.fr/*
// @match       *://*.postimees.ee/*
// @match       *://*.qiota.com/*
// @match       *://*.qz.com/*
// @match       *://*.repubblica.it/*
// @match       *://*.republic.ru/*
// @match       *://*.reuters.com/*
// @match       *://*.sandiegouniontribune.com/*
// @match       *://*.scientificamerican.com/*
// @match       *://*.science.org/*
// @match       *://*.scmp.com/*
// @match       *://*.seattletimes.com/*
// @match       *://*.seekingalpha.com/*
// @match       *://*.slate.com/*
// @match       *://*.smh.com.au/*
// @match       *://*.sofrep.com/*
// @match       *://*.spectator.co.uk/*
// @match       *://*.spectator.com.au/*
// @match       *://*.spectator.us/*
// @match       *://*.speld.nl/*
// @match       *://*.startribune.com/*
// @match       *://*.statnews.com/*
// @match       *://*.statista.com/*
// @match       *://*.stuff.co.nz/*
// @match       *://*.sueddeutsche.de/*
// @match       *://*.sun-sentinel.com/*
// @match       *://*.techinasia.com/*
// @match       *://*.technologyreview.com/*
// @match       *://*.telegraaf.nl/*
// @match       *://*.telegraph.co.uk/*
// @match       *://*.the-tls.co.uk/*
// @match       *://*.theadvocate.com.au/*
// @match       *://*.theage.com.au/*
// @match       *://*.theatlantic.com/*
// @match       *://*.theaustralian.com.au/*
// @match       *://*.theinformation.com/*
// @match       *://*.thediplomat.com/*
// @match       *://*.theglobeandmail.com/*
// @match       *://*.theherald.com.au/*
// @match       *://*.thehindu.com/*
// @match       *://*.themarker.com/*
// @match       *://*.themercury.com.au/*
// @match       *://*.thetimes.co.uk/*
// @match       *://*.thetimes.com/*
// @match       *://*.thenation.com/*
// @match       *://*.thenational.scot/*
// @match       *://*.theolivepress.es/*
// @match       *://*.thesaturdaypaper.com.au/*
// @match       *://*.thestar.com/*
// @match       *://*.thewrap.com/*
// @match       *://*.tijd.be/*
// @match       *://*.time.com/*
// @match       *://*.tinypass.com/*
// @match       *://*.towardsdatascience.com/*
// @match       *://*.trouw.nl/*
// @match       *://*.vanityfair.com/*
// @match       *://*.vn.nl/*
// @match       *://*.volkskrant.nl/*
// @match       *://*.washingtonpost.com/*
// @match       *://*.wired.com/*
// @match       *://*.wsj.com/*
// @match       *://*.zeit.de/*
// @match       *://*.404media.co/*
// @match       *://*.americanbanker.com/*
// @match       *://*.cnbc.com/*
// @match       *://*.ipolitics.ca/*
// @match       *://*.discovermagazine.com/*
// @match       *://*.faz.net/*
// @match       *://*.rp-online.de/*
// @match       *://*.spiegel.de/*
// @match       *://*.tagesspiegel.de/*
// @match       *://*.welt.de/*
// @match       *://*.wz.de/*
// @match       *://*.rp.pl/*
// @match       *://*.wyborcza.pl/*
// @match       *://*.tagesanzeiger.ch/*
// @match       *://*.elpais.com/*
// @match       *://*.english.elpais.com/*
// @match       *://*.insight.kontan.co.id/*
// @match       *://*.inkl.com/*
// @match       *://*.newsweek.com/*
// @match       *://*.nikkei.com/*
// @match       *://*.project-syndicate.org/*
// @match       *://*.puck.news/*
// @match       *://*.semafor.com/*
// @match       *://*.stratechery.com/*
// @match       *://*.bbc.co.uk/*
// @match       *://*.cnn.com/*
// @match       *://*.foxnews.com/*
// @match       *://*.nbcnews.com/*
// @match       *://*.google.com/news/*
// @match       *://*.forbes.pl/*
// @match       *://*.onet.pl/*
// @match       *://*.politico.com/*
// @match       *://*.marketwatch.com/*
// @match       *://*.thejournal.ie/*
// @match       *://*.independent.co.uk/*
// @match       *://*.independent.ie/*
// @match       *://*.dailymail.co.uk/*
// @match       *://*.theguardian.com/*
// @match       *://*.apnews.com/*
// @match       *://*.axios.com/*
// @match       *://*.vox.com/*
// @match       *://*.propublica.org/*
// @match       *://*.theverge.com/*
// @match       *://*.arstechnica.com/*
// @match       *://*.techcrunch.com/*
// @match       *://*.engadget.com/*
// @match       *://*.gizmodo.com/*
// @match       *://*.kotaku.com/*
// @match       *://*.jalopnik.com/*
// @match       *://*.lifehacker.com/*
// @match       *://*.theroot.com/*
// @match       *://*.jezebel.com/*
// @match       *://*.deadspin.com/*
// @match       *://*.avclub.com/*
// @match       *://*.theonion.com/*
// @match       *://*.clickhole.com/*
// @match       *://*.motherjones.com/*
// @match       *://*.rollingstone.com/*
// @match       *://*.variety.com/*
// @match       *://*.hollywoodreporter.com/*
// @match       *://*.deadline.com/*
// @match       *://*.entertainment.ie/*
// @match       *://*.ew.com/*
// @match       *://*.people.com/*
// @match       *://*.usmagazine.com/*
// @match       *://*.tmz.com/*
// @match       *://*.pagesix.com/*
// @match       *://*.nypost.com/*
// @match       *://*.dailybeast.com/*
// @match       *://*.buzzfeed.com/*
// @match       *://*.buzzfeednews.com/*
// @match       *://*.huffpost.com/*
// @match       *://*.salon.com/*
// @match       *://*.theintercept.com/*
// @match       *://*.vice.com/*
// @match       *://*.motherboard.vice.com/*
// @match       *://*.thedailybeast.com/*
// @match       *://*.crunchbase.com/*
// @match       *://*.pitchbook.com/*
// @grant        GM_registerMenuCommand
// @grant        GM_addStyle
// @grant        GM_addElement
// @grant        GM_getValue
// @grant        GM_setValue
// ==/UserScript==

// Modified by Kebie, 2026. Based on an MIT-licensed userscript; see README.md and LICENSE.

(function() {
    'use strict';

    // Configuration - Load saved preference or default to true
    let showFloatingButton = GM_getValue('showFloatingButton', true);

    // Constants
    const UNWALL_PREFIX = "https://unwall.app/";
    const FLAT_ICON_URL = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='14' fill='%23222'/%3E%3Cpath d='M22 30V22a10 10 0 0 1 18-6' fill='none' stroke='white' stroke-width='5' stroke-linecap='round'/%3E%3Crect x='18' y='28' width='28' height='22' rx='4' fill='white'/%3E%3Cpath d='M34 37h12m0 0-5-5m5 5-5 5' fill='none' stroke='%23222' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E";

    // Register menu commands
    GM_registerMenuCommand(showFloatingButton ? "Hide Floating Button" : "Show Floating Button", toggleFloatingButton);
    GM_registerMenuCommand("Bypass with UnWall", () => bypassWithUnWall());
    GM_registerMenuCommand("Archive Today", () => archivePage('https://archive.today/newest/'));
    GM_registerMenuCommand("Archive Is", () => archivePage('https://archive.is/newest/'));
    GM_registerMenuCommand("Archive Ph", () => archivePage('https://archive.ph/newest/'));
    GM_registerMenuCommand("Remove Paywall", () => archivePage('https://removepaywall.com/search?url='));
    GM_registerMenuCommand("Archive.org", () => archivePage('https://web.archive.org/web/'));

    // Function to toggle floating button visibility
    function toggleFloatingButton() {
        showFloatingButton = !showFloatingButton;
        GM_setValue('showFloatingButton', showFloatingButton);

        const container = document.getElementById('bypassContainer');
        if (container) {
            container.style.display = showFloatingButton ? 'block' : 'none';
        }

        // Show notification
        alert(`Floating button ${showFloatingButton ? 'enabled' : 'disabled'}. Refresh the page for the change to take effect.`);
        location.reload();
    }

    // Add styles for floating button and dropdown
    GM_addStyle(`
        #bypassContainer {
            position: fixed !important;
            right: 12px !important;
            bottom: 24px !important;
            z-index: 2147483647 !important;
            font-family: Arial, sans-serif;
            display: ${showFloatingButton ? 'block' : 'none'};
        }
        #bypassButton {
            position: relative !important;
            z-index: 2147483647 !important;
            background: #333;
            color: white;
            border: none;
            padding: 8px 12px;
            cursor: pointer;
            font-size: 14px;
            display: flex;
            align-items: center;
            opacity: 0.9;
            border-radius: 4px;
        }
        #bypassButton:hover {
            opacity: 1;
        }
        #bypassButton:focus,
        #bypassButton:active {
            outline: none !important;
            box-shadow: none !important;
        }
        #bypassButton img {
            width: 20px;
            margin-right: 8px;
        }
        #bypassDropdown {
            display: none;
            position: absolute;
            right: 0;
            bottom: 100%;
            z-index: 2147483647 !important;
            background: white;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            margin-bottom: 5px;
            width: 200px;
        }
        #bypassDropdown.show {
            display: block;
        }
        .bypass-option {
            padding: 10px 15px;
            cursor: pointer;
            color: #333;
            border-bottom: 1px solid #eee;
            font-size: 14px;
        }
        .bypass-option:last-child {
            border-bottom: none;
        }
        .bypass-option:hover {
            background: #f5f5f5;
        }
        @media (max-width: 768px) {
            #bypassButton {
                padding: 10px 15px;
                font-size: 16px;
            }
            .bypass-option {
                padding: 12px 15px;
                font-size: 16px;
            }
        }
    `);

    // Only create the floating button if enabled
    if (showFloatingButton) {
        // Create container and button elements
        const container = document.createElement('div');
        container.id = 'bypassContainer';

        const button = document.createElement('button');
        button.id = 'bypassButton';
        button.innerHTML = `<img src="${FLAT_ICON_URL}" alt=""> Bypass Paywall`;

        const dropdown = document.createElement('div');
        dropdown.id = 'bypassDropdown';

        // Add dropdown options
        const options = [
            { text: 'UnWall', action: bypassWithUnWall },
            { text: 'Archive.today', action: () => archivePage('https://archive.today/newest/') },
            { text: 'Archive.is', action: () => archivePage('https://archive.is/newest/') },
            { text: 'Archive.ph', action: () => archivePage('https://archive.ph/newest/') },
            { text: 'RemovePaywall', action: () => archivePage('https://removepaywall.com/search?url=') },
            { text: 'Archive.org', action: () => archivePage('https://web.archive.org/web/') },
        ];

        options.forEach(option => {
            const div = document.createElement('div');
            div.className = 'bypass-option';
            div.textContent = option.text;
            div.addEventListener('click', (e) => {
                e.stopPropagation();
                option.action();
                dropdown.classList.remove('show');
            });
            dropdown.appendChild(div);
        });

        // Add elements to container
        container.appendChild(button);
        container.appendChild(dropdown);
        document.body.appendChild(container);

        // Toggle dropdown on button click
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdown.classList.toggle('show');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', () => {
            dropdown.classList.remove('show');
        });
    }

    // Open a URL in a new tab
    function openInNewTab(targetUrl) {
        window.open(targetUrl, '_blank', 'noopener,noreferrer');
    }

    // Open the current page through a service prefix, optionally URL-encoding it
    function openCurrentPageWithPrefix(baseURL, encodeCurrentUrl) {
        const currentUrl = window.location.href;
        if (isValidProtocol(currentUrl)) {
            const originUrl = encodeCurrentUrl ? encodeURIComponent(currentUrl) : currentUrl;
            openInNewTab(baseURL + originUrl);
        }
    }

    // Open the current page via UnWall
    function bypassWithUnWall() {
        openCurrentPageWithPrefix(UNWALL_PREFIX, false);
    }

    // True if the URL is http(s)
    function isValidProtocol(url) {
        return new URL(url).protocol.startsWith("http");
    }

    // Open the current page via an archive/cache service
    function archivePage(baseURL) {
        openCurrentPageWithPrefix(baseURL, true);
    }
})();
