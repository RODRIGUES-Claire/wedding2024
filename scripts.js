// Fonction pour charger le fichier JSON de la langue sélectionnée
function loadLanguage(langCode) {
    // Construisez le chemin du fichier JSON en fonction du code de langue
    let langFilePath = '';
    if (langCode === 'pt') {
        langFilePath = 'lang/pt.json';
    } else if (langCode === 'fr') {
        langFilePath = 'lang/fr.json';
    } else {
        console.error('Code de langue non pris en charge');
        return;
    }

    // Chargez dynamiquement le fichier JSON de la langue sélectionnée
    fetch(langFilePath)
        .then(response => response.json())
        .then(lang => {
            // Mettez à jour les textes sur la page avec les variables de langue de la langue sélectionnée
            document.getElementById('website-title-1').textContent = lang["website-title-1"];
            document.getElementById('invitation').textContent = lang["invitation"];
            document.getElementById('logements').textContent = lang["logements"];
            document.getElementById('text-wedding').textContent = lang["text-wedding"];
            document.getElementById('footer_text').textContent = lang["footer_text"];
            
            document.getElementById('subtitle-firstsection').textContent = lang["subtitle-firstsection"];
            document.getElementById('text-rsvp').textContent = lang["text-rsvp"];
            document.getElementById('button-rsvp').textContent = lang["button-rsvp"];
            document.getElementById('title-secondsection').textContent = lang["title-secondsection"];
            document.getElementById('title-ceremonie').textContent = lang["title-ceremonie"];
            document.getElementById('date-wedding').textContent = lang["date-wedding"];
            document.getElementById('date-wedding1').textContent = lang["date-wedding1"];
            document.getElementById('date-wedding2').textContent = lang["date-wedding2"];
            document.getElementById('see-card').textContent = lang["see-card"];
            document.getElementById('see-card1').textContent = lang["see-card1"];
            document.getElementById('see-card2').textContent = lang["see-card2"];
            document.getElementById('see-card3').textContent = lang["see-card3"];
            document.getElementById('title-cocktail').textContent = lang["title-cocktail"];
            document.getElementById('title-diner').textContent = lang["title-diner"];
            document.getElementById('title-brunch').textContent = lang["title-brunch"];
            document.getElementById('date-brunch').textContent = lang["date-brunch"];

            // Ajoutez d'autres mises à jour de contenu ici si nécessaire
        })
        .catch(error => {
            console.error(`Une erreur s'est produite lors du chargement du fichier de langue : ${error}`);
        });
}



// Fonction pour détecter le changement de langue lorsque FR ou PT est sélectionné
document.addEventListener('DOMContentLoaded', function() {
    const languageToggle = document.getElementById('language-toggle');
    languageToggle.addEventListener('change', function() {
        const langCode = this.checked ? 'pt' : 'fr';
        loadLanguage(langCode);
    });
});

// Fonction pour charger la langue précédemment sélectionnée depuis le stockage local
function loadPreviousLanguage() {
    const langCode = localStorage.getItem('selectedLanguage');
    if (langCode) {
        loadLanguage(langCode);
        // Mettre à jour le bouton de basculement de la langue si nécessaire
        document.getElementById('language-toggle').checked = langCode === 'pt';
    }
}

// Fonction pour enregistrer la langue sélectionnée dans le stockage local
function saveSelectedLanguage(langCode) {
    localStorage.setItem('selectedLanguage', langCode);
}

// Fonction pour détecter le changement de langue lorsque FR ou PT est sélectionné
document.addEventListener('DOMContentLoaded', function() {
    // Charger la langue précédemment sélectionnée lors du chargement de la page
    loadPreviousLanguage();

    const languageToggle = document.getElementById('language-toggle');
    languageToggle.addEventListener('change', function() {
        const langCode = this.checked ? 'pt' : 'fr';
        loadLanguage(langCode);
        // Enregistrer la langue sélectionnée dans le stockage local
        saveSelectedLanguage(langCode);
    });
});
