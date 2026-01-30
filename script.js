let jsonNavbar = null;
let jsonContent = null;

const projectsContainer = document.querySelector(".projects");
const announcementsContainer = document.querySelector(".announcements");
const trendingContainer = document.querySelector(".trending");

async function fetchJSONData() {
    try {
        const response = await fetch('data/navigation.json');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        jsonNavbar = await response.json();

        console.log(jsonNavbar);
    } catch (error) {
        console.error('Error fetching JSON:', error);
    }

        try {
        const response = await fetch('data/content.json');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        jsonContent = await response.json();

        console.log(jsonContent);
    } catch (error) {
        console.error('Error fetching JSON:', error);
    }
}

async function init() {
    await fetchJSONData();
    generateNavbar();
    generateProjects();
    generateAnnouncements();
    generateTrending();
}

init()

function generateNavbar() {
    const navbarFeatures = jsonNavbar.navbarFeatures;
    const navbarSettings = jsonNavbar.navbarSettings;

    console.log(navbarFeatures);
    console.log(navbarSettings);

    const navbarElement = document.querySelector("#navbar");

    const featureContainer = document.createElement("div");
    const settingContainer = document.createElement("div");

    featureContainer.setAttribute("class", "navbar_container");
    settingContainer.setAttribute("class", "navbar_container");

    navbarElement.append(featureContainer, settingContainer);

    navbarFeatures.forEach(item => {
        const featureElement = document.createElement("div");
        const elementIcon = document.createElement("img");
        const elementText = document.createElement("p");

        featureElement.setAttribute("id", `${item[0]}`);
        featureElement.setAttribute("class", `navbar_item`);

        elementText.textContent = `${item[0]}`;
        elementIcon.setAttribute("src", `${item[1]}`);

        featureElement.append(elementIcon, elementText);
        featureContainer.appendChild(featureElement);
    });

    navbarSettings.forEach(item => {
        const featureElement = document.createElement("div");
        const elementIcon = document.createElement("img");
        const elementText = document.createElement("p");

        featureElement.setAttribute("id", `${item[0]}`);
        featureElement.setAttribute("class", `navbar_item`);

        elementText.textContent = `${item[0]}`;
        elementIcon.setAttribute("src", `${item[1]}`);

        featureElement.append(elementIcon, elementText);
        settingContainer.appendChild(featureElement);
    });
};

function generateProjects() {
    const projects = jsonContent.projects;
    console.log(projects);

    projects.forEach((p) => {
        const card = document.createElement("div");
        card.className = "project_card"; // match your CSS

        const textWrap = document.createElement("div");
        textWrap.className = "project_text";

        const h3 = document.createElement("h3");
        h3.textContent = p.title ?? "";

        const desc = document.createElement("p");
        desc.textContent = p.content ?? "";

        const actions = document.createElement("div");
        actions.className = "project_actions";

        // icons (use emoji placeholders; swap for <i> or SVG if you have them)
        const star = document.createElement("button");
        star.className = "icon_btn";
        star.type = "button";
        star.textContent = "☆";

        const eye = document.createElement("button");
        eye.className = "icon_btn";
        eye.type = "button";
        eye.textContent = "👁";

        const share = document.createElement("button");
        share.className = "icon_btn";
        share.type = "button";
        share.textContent = "⤴";

        actions.append(star, eye, share);
        textWrap.append(h3, desc);
        card.append(textWrap, actions);

        projectsContainer.appendChild(card);
    });
};

function generateAnnouncements() {
    const announcements = jsonContent.announcements;
    console.log(announcements);

    announcements.forEach((a, idx) => {
        const item = document.createElement("div");
        item.className = "announcement_item";

        const title = document.createElement("h4");
        title.textContent = a.title ?? "";

        const text = document.createElement("p");
        text.textContent = a.description ?? "";

        item.append(title, text);
        announcementsContainer.appendChild(item);

        // divider between items (not after last)
        if (idx !== announcements.length - 1) {
        const hr = document.createElement("hr");
        hr.className = "announcement_divider";
        announcementsContainer.appendChild(hr);
        }
    });
}

function generateTrending() {
    const trending = jsonContent.trending;
    console.log(trending);

    trending.forEach((t) => {
        const row = document.createElement("div");
        row.className = "trending_row";

        const avatar = document.createElement("img");
        avatar.className = "trending_avatar";
        avatar.alt = t.img ?? "avatar";
        avatar.src = t.img ?? "img/default-avatar.png";

        const textWrap = document.createElement("div");
        textWrap.className = "trending_text";

        const handle = document.createElement("p");
        handle.className = "trending_handle";
        handle.textContent = t.name ?? "";

        const subtitle = document.createElement("p");
        subtitle.className = "trending_subtitle";
        subtitle.textContent = t.tag ?? "";

        textWrap.append(handle, subtitle);
        row.append(avatar, textWrap);
        trendingContainer.appendChild(row);
    });
};