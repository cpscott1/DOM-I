const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//nav

let mainNav = document.querySelectorAll('header nav a');
mainNav[0].textContent = siteContent.nav["nav-item-1"];
mainNav[1].textContent = siteContent.nav["nav-item-2"];
mainNav[2].textContent = siteContent.nav["nav-item-3"];
mainNav[3].textContent = siteContent.nav["nav-item-4"];
mainNav[4].textContent = siteContent.nav["nav-item-5"];
mainNav[5].textContent = siteContent.nav["nav-item-6"];

const newAnchor1 = document.createElement('a');
const newAnchor2 = document.createElement('a');

newAnchor1.setAttribute("href", "#");
newAnchor2.setAttribute("href", "#");

newAnchor1.textContent = "Home";
newAnchor2.textContent = "Blog";

const newNav = document.querySelector('nav')

newNav.prepend(newAnchor1);
newNav.append(newAnchor2);


mainNav.forEach(function(nav) {
  nav.style.color = 'green';
})



//cta

let h1 = document.querySelector("h1");
let button = document.querySelector("button");

h1.textContent = siteContent.cta["h1"];
button.textContent = siteContent.cta["button"];

let headerImg = document.getElementById("cta-img");
headerImg.setAttribute('src', siteContent.cta["img-src"])

//main content

let mainText = document.querySelectorAll(".text-content")

mainText[0].querySelector("h4").textContent = siteContent["main-content"]["features-h4"];
mainText[0].querySelector("p").textContent = siteContent["main-content"]["features-content"];
mainText[1].querySelector("h4").textContent = siteContent["main-content"]["about-h4"];
mainText[1].querySelector("p").textContent = siteContent["main-content"]["about-content"];
mainText[2].querySelector("h4").textContent = siteContent["main-content"]["services-h4"];
mainText[2].querySelector("p").textContent = siteContent["main-content"]["services-content"];
mainText[3].querySelector("h4").textContent = siteContent["main-content"]["product-h4"];
mainText[3].querySelector("p").textContent = siteContent["main-content"]["product-content"];
mainText[4].querySelector("h4").textContent = siteContent["main-content"]["vision-h4"];
mainText[4].querySelector("p").textContent = siteContent["main-content"]["vision-content"];

// middle image

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

// Contact

let contact = document.querySelector(".contact")

contact.querySelector("h4").textContent = siteContent.contact["contact-h4"];
contact.querySelectorAll("p")[0].textContent = siteContent.contact["address"];
contact.querySelectorAll("p")[1].textContent = siteContent.contact["phone"];
contact.querySelectorAll("p")[2].textContent = siteContent.contact["email"]

// footer

let footer = document.querySelector("footer")

footer.querySelector("p").textContent = siteContent.footer["copyright"]
