const navbarFeatures = [ 
    ["Home", "a"], ["Profile", "b"], ["Messages", "c"], ["History", "d"], ["Taks", "e"], ["Communities", "f"]
];

const navbarSettings = [
    ["Settings", "g"], ["Support", "h"], ["Privacy", "i"]
];

const navbarElement = document.querySelector("#navbar");

function generateNavbar() {
    const featureContainer = document.createElement("div");
    const settingContainer = document.createElement("div");

    featureContainer.setAttribute("class", "navbar_container");
    settingContainer.setAttribute("class", "navbar_container");

    navbarElement.append(featureContainer, settingContainer);

    navbarFeatures.forEach(item => {
        const featureElement = document.createElement("div");
        const elementIcon = document.createElement("p");
        const elementText = document.createElement("p");

        featureElement.setAttribute("id", `${item[0]}`);
        featureElement.setAttribute("class", `navbar_item`);

        elementText.textContent = `${item[0]}`;
        elementIcon.textContent = `${item[1]}`;

        featureElement.append(elementIcon, elementText);
        featureContainer.appendChild(featureElement);
    });

    navbarSettings.forEach(item => {
        const featureElement = document.createElement("div");
        const elementIcon = document.createElement("p");
        const elementText = document.createElement("p");

        featureElement.setAttribute("id", `${item[0]}`);
        featureElement.setAttribute("class", `navbar_item`);

        elementText.textContent = `${item[0]}`;
        elementIcon.textContent = `${item[1]}`;

        featureElement.append(elementIcon, elementText);
        settingContainer.appendChild(featureElement);
    });
};

generateNavbar();