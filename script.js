// script.js
import { validateInputs, createCard } from './functions.js';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const imgUrl = document.querySelector('#img-url');
    const companyInput = document.querySelector('#company');
    const jobInput = document.querySelector('#job');
    const timeSelect = document.querySelector('#options1');
    const workTimeSelect = document.querySelector('#options2');
    const locationSelect = document.querySelector('#options3');
    const skillsCheckboxes = document.querySelectorAll('.skills-sec input');
    const newCheckbox = document.querySelector('#new');
    const featuredCheckbox = document.querySelector('#featured');
    const cardContainer = document.querySelector('.card-sec');

    const savedCards = JSON.parse(localStorage.getItem('cards')) || [];
    savedCards.forEach(cardData => {
        createCard(cardData, cardContainer);
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const logoUrlValue = imgUrl.value;
        const companyName = companyInput.value;
        const jobTitle = jobInput.value;
        const timePosted = timeSelect.value;
        const workType = workTimeSelect.value;
        const location = locationSelect.value;
        const skills = Array.from(skillsCheckboxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.value);
        const isNew = newCheckbox.checked ? 'NEW!' : '';
        const isFeatured = featuredCheckbox.checked ? 'FEATURED' : '';

        if (!validateInputs(logoUrlValue, companyName, jobTitle)) {
            return;
        }

        const cardData = {
            logoUrl: logoUrlValue,
            company: companyName,
            jobTitle: jobTitle,
            timePosted: timePosted,
            workType: workType,
            location: location,
            skills: skills,
            isNew: isNew,
            isFeatured: isFeatured
        };

        savedCards.push(cardData);
        localStorage.setItem('cards', JSON.stringify(savedCards));

        createCard(cardData, cardContainer);
        form.reset();
    });

    cardContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('delete-btn')) {
            const card = event.target.closest('.card');
            const cardIndex = Array.from(cardContainer.children).indexOf(card);
            savedCards.splice(cardIndex, 1);
            localStorage.setItem('cards', JSON.stringify(savedCards));
            
            card.remove();
        }
    });
});
