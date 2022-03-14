//part 1:

//========================================================================

function strikethrough(){
    let listItem1 = document.querySelector("li");
    listItem1.style.textDecorationLine = "line-through";
}

strikethrough();


//========================================================================

//     passing parameters in function, not strings
function addImage(imageID, url){
    let image = document.querySelector(imageID);
    image.src = url;
    image.style.height = "500px"
}

addImage("#image-1", "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80");

addImage("#image-2", "https://images.unsplash.com/photo-1614035030394-b6e5b01e0737?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGtpdHR5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60");

addImage("#image-3", "https://images.unsplash.com/photo-1579202673506-ca3ce28943ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8a2l0dHl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60");

//========================================================================

function removeItem(){
    let listItem1 = document.querySelector("li");
    listItem1.remove();
}

removeItem();
removeItem();

//========================================================================

function fontSize(size, textID){
    let text = document.querySelector(textID);
    text.style.fontSize = size;
}

fontSize("25px", "h1");

//========================================================================

//part 2:

//========================================================================

let argumentList = document.querySelector("ul");

let newImage = document.createElement("img");
newImage.src = "https://images.unsplash.com/photo-1606425271394-c3ca9aa1fc06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8a2l0dHl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60";
newImage.style.height = "300px"


appendToArgument(newImage);

function appendToArgument(para){

    //function is adding the element, not creating it
    //element is made outside the function
    argumentList.appendChild(para);
}


// function appendToArgument(){
//     let element = document.createElement("li");
//     element.innerText = "added list to argument"
//     argumentList.appendChild(element);
// } -> if I wanted to create a list within the function and append it to the argumentList

//========================================================================

function createImage(imageElement){
    let image = document.querySelector(imageElement)
    image.style.height = "30px";
}

createImage("#image-2");

//========================================================================

function makeInvisible(domElement){
    let element = document.querySelector(domElement);
    element.style.opacity = "0%";
}

makeInvisible("#thing-c");

//========================================================================

//part 3:

//========================================================================

function newText(addText){
    let element  = document.createElement("li");
    element.innerText = addText;

    return element;
}

appendToArgument(newText("This is text added to a new list"));

//========================================================================

function newHeader(headerSize, headerText){
    let hdr = document.createElement("h" + headerSize);
    hdr.innerText = headerText;

    return hdr;
}

appendToArgument(newHeader(2, "** This is a new header! **"));