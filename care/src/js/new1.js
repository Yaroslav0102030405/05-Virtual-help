const logo = document.querySelector(".header__logan");
logo.textContent = "Saviour Care";
// logo.style.color = "blue";

// const navEl = document.querySelector(".header__right");

// const firstnavEl = navEl.firstElementChild;
// // console.log(firstnavEl);
// firstnavEl.textContent = "Help";

// const firstnavEl = navEl.children[0];
// firstnavEl.classList.add(header__link);
// console.log(firstnavEl);
// firstnavEl.textContent = "Help";

// const children = navEl.children[1];
// // console.log(children[1]);
// children.textContent = "Doctor";

// const children2 = navEl.children[2];
// // console.log(children[2]);
// children2.textContent = "Mobile App";

// const lastNavEl = navEl.lastElementChild;
// // console.log(lastNavEl);
// lastNavEl.textContent = "Services";

const link1 = document.querySelector(".link1");
link1.textContent = "Help";
link1.style.color = "blue";

const link2 = document.querySelector(".link2");
link2.textContent = "Doctor";
link2.style.color = "orange";

const link3 = document.querySelector(".link3");
link3.textContent = "Mobile App";

const link4 = document.querySelector(".link4");
link4.textContent = "Services";
link4.style.color = "green";

const imageHero = document.querySelector(".hero__image");
imageHero.src =
  "https://visitukraine.today/media/blog/previews/oaMFMqmGoERgmLYzwE00xSuaHVSz4gssqqjoIpK9.jpg";
imageHero.alt = "new format Webp";
imageHero.width = "577";
imageHero.height = "392";

const heroBtnEl = document.querySelector(".hero__button");
heroBtnEl.textContent = "Сonsultation";

// const appsTopImage = document.querySelector(".top-img");
// appsTopImage.src =
//   "https://st3.depositphotos.com/1158045/14739/i/450/depositphotos_147396887-stock-photo-doctor-hearing-a-patients-heartbeat.jpg";
// appsTopImage.width = "617";
// appsTopImage.height = "491";
// appsTopImage.alt = "new top images";

// const appsBotton = document.querySelector(".apps-botton");
// appsBotton.src =
//   "https://lh3.googleusercontent.com/proxy/nIRxSdsFCF0owAEbkA33kqjl64lWzAZjHLh1zwg9H34fPsZWSvijIlvAG5bT8w60HUCCxx0supI8KEcqqBy0xX8i7VNX3-TC08-w5nZCjVPLw4_nXTDJyWE9ENSLPuzGmpFPeT7WlMj8nyE";
// appsBotton.width = "657";
// appsBotton.height = "463";
// appsBotton.alt = "new photo";

// const contactImage = document.querySelector(".contacts-image");
// contactImage.src =
//   "https://bogatyr.club/uploads/posts/2023-03/thumbs/1677773687_bogatyr-club-p-vrach-kardiolog-foni-vkontakte-27.jpg";
// contactImage.width = "576";
// contactImage.height = "501";

const navItemEl = document.createElement("li");

const navLinkEl = document.createElement("a");
navLinkEl.classList.add("header__link");
navLinkEl.textContent = "Cabinet";
navLinkEl.style.color = "tomato";
navLinkEl.href = "#footer";

navItemEl.appendChild(navLinkEl);

const navEl = document.querySelector(".header__right");
// navEl.appendChild(navItemEl);
navEl.insertBefore(navItemEl, navEl.lastChild);
