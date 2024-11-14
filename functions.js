// functions.js

// Validatsiya funksiyasi
export function validateInputs(logoUrl, company, jobTitle) {
    if (!logoUrl || !company || !jobTitle) {
        alert("Barcha maydonlarni to'ldirish shart!");
        return false;
    }
    if (company.length < 2) {
        alert("Kompaniya nomi 2 ta belgidan ko'proq bo'lishi kerak!");
        return false;
    }
    if (jobTitle.length < 3) {
        alert("Ish unvoni 3 ta belgidan ko'proq bo'lishi kerak!");
        return false;
    }
    return true;
}

export function createCard(cardData, container) {
    const newCard = document.createElement('div');
    newCard.classList.add('card');
    
    newCard.innerHTML = `
        <div class="main-sec">
            <img src="${cardData.logoUrl}" alt="Logo" class="user-img">
            <div class="about-user">
                <div class="head-of-dates">
                    <span id="name-of-company">${cardData.company}</span>
                    <span id="new-feature">${cardData.isNew}</span>
                    <span id="featured-feature">${cardData.isFeatured}</span>
                </div>
                <p id="user-job"><b>${cardData.jobTitle}</b></p>
                <div class="extra-dates">
                    <span>${cardData.timePosted}</span>
                    <span>•</span>
                    <span>${cardData.workType}</span>
                    <span>•</span>
                    <span>${cardData.location}</span>
                </div>
            </div>
        </div>
        <div class="right-sec">
            <img src="./images/delete.png" alt="Delete" class="delete-btn">
            <div id="skills-at-card">
                ${cardData.skills.length > 0 ? cardData.skills.map(skill => `<span>${skill}</span>`).join(' ') : 'No Skills'}
            </div>
        </div>
    `;

    container.appendChild(newCard);
}
