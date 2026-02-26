document.addEventListener("DOMContentLoaded", function () {
    
    
    const jobTitleInput = document.querySelector('.search-box input[placeholder="Search job title..."]');
    const locationInput = document.querySelector('.search-box input[placeholder="Location"]');
    const searchButton = document.querySelector('.search-box button');
    const jobCards = document.querySelectorAll('.job-card');
    const applyButtons = document.querySelectorAll('.job-card button');


    function filterJobs() {
        const titleQuery = jobTitleInput.value.toLowerCase().trim();
        const locationQuery = locationInput.value.toLowerCase().trim();

        jobCards.forEach(card => {
            
            const title = card.querySelector('h3').innerText.toLowerCase();
            
            let location = "";
            const paragraphs = card.querySelectorAll('p');
            paragraphs.forEach(p => {
                if (p.innerText.includes("Location")) {
                    location = p.innerText.toLowerCase();
                }
            });

            const matchesTitle = title.includes(titleQuery) || titleQuery === "";
            const matchesLocation = location.includes(locationQuery) || locationQuery === "";

            // Toggle visibility
            if (matchesTitle && matchesLocation) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    }

    
    searchButton.addEventListener('click', filterJobs);

    
    jobTitleInput.addEventListener('keyup', filterJobs);
    locationInput.addEventListener('keyup', filterJobs);

    applyButtons.forEach(button => {
        button.addEventListener('click', function () {
            
            const jobTitle = this.parentElement.querySelector('h3').innerText;
            alert(`Application for ${jobTitle} submitted successfully!`);
        });
    });
});