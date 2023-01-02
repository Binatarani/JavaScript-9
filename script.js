// 1) getElementById Method

// const id1 = document.getElementById("id1");
// //console.log(id1);
// console.log(id1.innerHTML);
// id1.innerHTML = "JavaScript Text";

// document.getElementById("id1").innerHTML = "New JavaScript Text";

// 2) getElementByTagName Method

// const tag1 = document.getElementsByTagName("h1")[0];
// console.log(tag1.innerHTML);
// // tag1.innerHTML = "JavaScript Header Two";
// tag1.innerText = "Header Three";

// // 3) getElementByClassName

// const class1 = document.getElementsByClassName("class1")[0];
// console.log(class1.innerText);
// class1.innerText = "Header Two";

// // 4) Dom Element Style

const id1 = document.getElementById("id1");
console.log(id1.innerText);
id1.style.color = "blue";
id1.style.backgroundColor = "white";
id1.style.textAlign = "center";
id1.style.borderRadius = "10px";
id1.style.padding = "5px";
id1.style.fontSize = "40px";

//5) Dom Elements Attributes

const id2 = document.getElementById("id2");
console.log(id2.innerHTML);
console.log(id2.attributes);
console.log(id2.attributes.length);
console.log(id2.attributes.class);
console.log(id2.attributes.id);
id2.style.color = "red";
id2.style.backgroundColor = "white";
id2.style.textAlign = "center";
id2.style.borderRadius = "10px";
id2.style.padding = "5px";
id2.style.fontSize = "40px";

// const class1 = document.getElementsByClassName("class1");
// console.log(class1);
// function textHide() {
//   const class1 = document.getElementsByClassName("class1");
//   class1.on = "My Text";
//   on.click = "showText"();
// }
// console.log("class1");

// // 6) getAttribute
// const id2 = document.getElementById("id2");
// console.log(id2.innerText);
// console.log(id2.getAttribute("class2"));
// console.log(id2.getAttribute("id"));

// // 7) Remove Attribute
// const id2 = document.getElementById("id2");
// console.log(id2.innerText);
// id2.removeAttribute("class");

// // 8) Set Attribute
// const id2 = document.getElementById("id2");
// console.log(id2.innerText);
// id2.setAttribute("class", "class2");
