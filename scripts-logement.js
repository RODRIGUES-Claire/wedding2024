// Fonction pour charger le fichier JSON de la langue sélectionnée
function loadLanguage(langCode) {
    // Construisez le chemin du fichier JSON en fonction du code de langue
    let langFilePath = '';
    if (langCode === 'pt') {
        langFilePath = 'lang/pt-logement.json';
    } else if (langCode === 'fr') {
        langFilePath = 'lang/fr-logement.json';
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
            document.getElementById('rsvp').textContent = lang["rsvp"];
            document.getElementById('text-wedding').textContent = lang["text-wedding"];
            document.getElementById('footer_text').textContent = lang["footer_text"];

            document.getElementById('title-logement').textContent = lang["title-logement"];
            document.getElementById('text-contactus').textContent = lang["text-contactus"];
            document.getElementById('voirplus').textContent = lang["voirplus"];
            document.getElementById('voirplus1').textContent = lang["voirplus1"];
            document.getElementById('voirplus2').textContent = lang["voirplus2"];
            document.getElementById('voirplus3').textContent = lang["voirplus3"];
            document.getElementById('voirplus4').textContent = lang["voirplus4"];
            document.getElementById('tarifgroup').textContent = lang["tarifgroup"];
            document.getElementById('button-guide').textContent = lang["button-guide"];
        

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
