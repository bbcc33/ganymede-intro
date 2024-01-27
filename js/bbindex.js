document.addEventListener("DOMContentLoaded", () => {

                      // SKILLS SECTION

    let skills = ["video editing", "videography"];
    let skillsSection = document.getElementById("Skills");
    let listSkills = skillsSection.querySelector("ul");

    for (let i = 0; i < skills.length; i++) {
        let skill = document.createElement("li");
        skill.innerText = " 📸 " + skills[i];
        listSkills.appendChild(skill);
    }

                   // LEAVE A MESSAGE

    let messageForm = document.forms["leave_message"];
    let newMessage, userName, userEmail, userMessage;
    let messageList = document.getElementById("messages").querySelector("ul");


    messageForm.addEventListener("submit", function(event) {
        event.preventDefault();

        userName = event.target.usersName.value;
        userEmail = event.target.usersEmail.value;
        userMessage = event.target.usersMessage.value;

        // let userName = event.target.usersName.value;
        // let userEmail = event.target.usersEmail.value;
        // let userMessage = event.target.usersMessage.value;

        console.log("Name: " + userName);
        console.log("Email: " + userEmail);
        console.log("Message: " + userMessage);

        // let messageSection = document.getElementById("messages");
        // let messageList = messageSection.querySelector("ul");
        newMessage = document.createElement("li");
        
        // let newMessage = document.createElement("li");

        newMessage.innerHTML = 
            `<a href='mailto:${userEmail}'>${userName} </a>` +
            `<span> wrote: ${"💥" + userMessage}</span>`;

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

                    // Edit Button

    let editButton = document.createElement("button");
    editButton.innerText = "Edit";
    editButton.addEventListener("click", function() {
        let editInput = document.createElement("input");
        editInput.type = "text";
        editInput.value = userMessage;
        newMessage.innerHTML = "";
        newMessage.appendChild(editInput);
        
        let saveButton = document.createElement("button");
        saveButton.innerText = "Save";
        saveButton.addEventListener("click", function() {
            userMessage = editInput.value;
            newMessage.innerHTML =
                `<a href='mailto:${userEmail}'>${userName} </a>` +
                `<span> wrote: ${"💥" + userMessage}<span>`;
            newMessage.appendChild(removeButton);
            newMessage.appendChild(editButton);
        });

        newMessage.appendChild(saveButton);
        newMessage.appendChild(removeButton);
        newMessage.appendChild(editButton);
    });

    newMessage.appendChild(saveButton);
    newMessage.appendChild(removeButton);
    newMessage.appendChild(editButton);

    messageForm.reset();
});

    const storedLinkColor = getStoredLinkColor();
    if (storedLinkColor) {
        setLinkColor(storedLinkColor)
    }; 

                      // DATE

    const today = new Date();
    const thisYear = today.getFullYear();
    const footer = document.querySelector("#footer");
    const copyright = document.createElement("p");
    copyright.innerHTML = "© Bianca " + thisYear;
    footer.appendChild(copyright);
    


                // SCROLL TO FUNCTION

function scrollToSection(sectionId) {
    let section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({behavior: 'smooth' });
    }

}


                    // FETCH API
function fetchData(url) {
    return fetch(url)
        .then(checkStatus)
        .then(res => res.json())
        .catch(error => {
            console.log('Looks like there was a promlem!', error);
            throw error;
    });
}

Promise.all([
    fetchData('https://api.github.com/users/bbcc33/repos')
])
.then(([repositories]) => {
    updateRepositories(repositories);
})
.catch(error => console.log('Error fetching repositories:', error));


function checkStatus(response) {
    if (response.ok) {
        return Promise.resolve(response);
    } else {
        return Promise.reject(new Error(response.statusText));
    }
}

                        // UPDATE REPOSITORIES

function updateRepositories(repositories) {
    const projectSection = document.getElementById('projects'); 
    const projectList = projectSection.querySelector('ul'); 

    if (repositories) {
        repositories.forEach(repo => {
            const project = document.createElement('li'); 
            const projectLink = document.createElement('a');

            projectLink.innerText = repo.name;
            projectLink.href = repo.html_url;
            projectLink.target = '_blank';

            project.appendChild(projectLink);
            projectList.appendChild(project);
        });
    } else { 
        console.error('Error fetching repositories. Status:', response.status); 
    } 
};

// this is setting up so that my link color reverts back when the page is refreshed
function getStoredLinkColor() {
    return localStorage.getItem('linkColor');
};

                        //LINK COLOR STAYS BLUE

function setLinkColor(color) {
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.style.color = color;
    });
    
    localStorage.setItem('linkColor', color);
};

// this allows for my script tag to be placed anywhere in the html code







// old code

// Fetch

// fetchData('https://api.github.com/users/bbcc33/repos')
// .then(updateRepositories)
// .catch(error => console.log('Error fetching repositories:', error));


// projectLink.innerText = repositories[i].name;
// projectLink.href = repositories[i].html_url;
// projectLink.target = '_blank';

//         })
//         for (let i = 0; i < repositories.length; i++) { 
  


//             // repositories[i].name; 

// } 
// const audioElement = document.querySelector("audio");

//     if (audioElement) {
//   



