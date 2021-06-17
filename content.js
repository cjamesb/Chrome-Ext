const header = document.querySelector("body")
const inject = document.createElement("div");
inject.classList.add("sticky");
//header.appendChild(inject);



const putImg = document.getElementsByClassName("sticky")
const putImg2 = document.createElement("img")
//const putImg2 = new Image(200, 200);


putImg2.src = 'https://i.ytimg.com/vi/hToEL-nNtyM/maxresdefault.jpg';
//putImg2.classList.add("sticky")
putImg2.width="200"
putImg2.height="100"

inject.appendChild(putImg2)
header.appendChild(inject);

