document.addEventListener("DOMContentLoaded", () => {
// this allows for my script tag to be placed anywhere in the html code
    const today = new Date();
    const thisYear = today.getFullYear();
    const footer = document.querySelector("#footer");
    const copyright = document.createElement("p");
    copyright.innerHTML = "Bianca " + thisYear;
    footer.appendChild(copyright);

    let skills = ["video editing", "videography"];
    let skillsSection = document.getElementById("Skills");
    let listSkills = skillsSection.querySelector("dl");

    for (let i = 0; i < skills.length; i++) {
        let skill = document.createElement("dd");
        skill.innerText = skills[i];
        listSkills.appendChild(skill);
    };

    let messageForm = document.forms["leave_message"];
    messageForm.addEventListener("submit", function(event) {
        event.preventDefault();

        let userName = event.target.usersName.value;
        let userEmail = event.target.usersEmail.value;
        let userMessage = event.target.usersMessage.value;

        console.log("Name: " + userName);
        console.log("Email: " + userEmail);
        console.log("Message: " + userMessage);

        let messageSection = document.getElementById("messages");
        let messageList = messageSection.querySelector("ul");
        let newMessage = document.createElement("li");

        newMessage.innerHTML = 
        `<a href='mailto:${userEmail}'>${userName} </a>` +
        `<span> wrote: ${userMessage}</span>`;

            let removeButton = document.createElement("button");
            removeButton.innerText = "Remove";
            removeButton.addEventListener("click", function() {
                let entry = removeButton.parentNode;
                entry.remove();
            });

            newMessage.appendChild(removeButton);
            messageList.appendChild(newMessage);

        messageForm.reset();
    });
});

function scrollToSection(sectionId) {
    let section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({behavior: 'smooth' });
    }
}


const githubRequest = new XMLHttpRequest();
githubRequest.onreadystatechange = function () {
    if (githubRequest.readyState === 4) {
        
    }
};
githubRequest.onerror = function () {
    console.error('Error fetching repositories.');
};

githubRequest.open('GET', 'https://api.github.com/users/bbcc33/repos');
githubRequest.send();

githubRequest.addEventListener('load', function(event) {
    if (githubRequest.status === 200) {
        const repositories = JSON.parse(this.responseText);
        console.log(repositories);

        const projectSection = document.getElementById('projects');
        const projectList = projectSection.querySelector('ul');

        for (let i = 0; i < repositories.length; i++) {
            const project = document.createElement('li');
            project.innerText = repositories[i].name;
            projectList.appendChild(project);
        }
    } else {
        console.error('Error fetching repositories. Status:', githubRequest.status);
    }
});



