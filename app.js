
// ||||||||||||||||||||||||||||||||||||||   ADD   ITEM   FUNCT   |||||||||||||||||||||||||||||||||||||||||


function addItem(event) {   // event just enter k click par addItem funct call k lye only idhr lgya 

    // Check if the key pressed is "Enter" (keyCode 13)
    if (event.keyCode === 13 || event.type === 'click') {

    let inputEle = document.getElementById('inp');
    let list = document.getElementById('list');
    let liElement = document.createElement('li');
    

    var EditBtn = '<button onclick="editItem(event)" class="edit"> Edit </button>'
    var DelBtn = '<button onClick="delItem(event)" class="delt"> Del </button>'

    let inputValue = inputEle.value  // get the html input tag value to store the inputValue variable 

    if (inputValue.trim() !== '') {

        console.log(inputValue);   // Log the value of the input element

        liElement.innerHTML = inputValue + EditBtn + DelBtn // inpt value to add the liElement use the .innerHtml
        list.append(liElement)            // & then liElement to add the list then use the append
    
        cls()   // clear the input field // the funct cls call the additem 
        // inputEle.value = ''  // clear the input field

    } else {
        // errMsg.innerHTML = 'Please Enter text in input field'
        errMessage('please enter text in input field'); // Display error message if input is empty
    }
    
// console.log('addItem Hello');
   }
} 
// Call addItem() function when "Enter" key is pressed
document.addEventListener('keydown', addItem);
// Or call addItem() function when button is clicked
document.getElementById('adBtn').addEventListener('click', addItem);



// ||||||||||||||||||||||||||||||||||||||   EDIT   ITEM   FUNCT   |||||||||||||||||||||||||||||||||||||||||


function editItem(event) {

    let editEle = document.getElementById('inp');  // Get the input element
    currentItem = event.target.parentElement;    // Get the parent element (list item)

    editEle.value = currentItem.firstChild.textContent.trim();   // Set the value of the input to the text content of the list item

    let addBtn = document.getElementById('adBtn');
    addBtn.classList.add('hide');

    let updateBtn = document.getElementById('update');
    updateBtn.classList.remove('hide');

}


// ||||||||||||||||||||||||||||||||||||||   UPDATE   ITEM   FUNCT   |||||||||||||||||||||||||||||||||||||||||



function updateItem() {

    if (currentItem) {
        let editEle = document.getElementById('inp');   // Get the input element
        currentItem.firstChild.textContent = editEle.value.trim();  // Update the text content of the list item with the value from the input field

        cls();  // Clear the input field
        currentItem = null;
    }
    let updateBtn = document.getElementById('update');
    updateBtn.classList.add('hide');

    let addBtn = document.getElementById('adBtn');
    addBtn.classList.remove('hide');
}


// ||||||||||||||||||||||||||||||||||||||   DELETE   ITEM   FUNCT   |||||||||||||||||||||||||||||||||||||||||



function delItem(event) {
    console.log('Del Item Hello');

    var liElement = event.target.parentElement
    console.log('event.target', event);
    liElement.remove()
}



// ||||||||||||||||||||||||||||||||||||||   DELETE   ALL   FUNCT   |||||||||||||||||||||||||||||||||||||||||



function deleteAll() {

// In the event listener function, remove all child elements (list items) from the list.

    // Get a reference to the list element.
    let list = document.getElementById('list')

    // Remove all child elements (list items) from the list.
    while (list.firstChild) {
        list.removeChild(list.firstChild)
    }

    cls()    
}



// ||||||||||||||||||||||||||||||||||||||   CLEAR INPUT FIELD  FUNCT   |||||||||||||||||||||||||||||||||||||||||



// clear the input field function
function cls() {    
    let clearVal = document.getElementById('inp');
    clearVal.value = ''
}



// ||||||||||||||||||||||||||||||||||||||  ERROR   MESSAGE   FUNCTION   |||||||||||||||||||||||||||||||||||||||||



function errMessage(message) {   
    let errorMesgEl = document.getElementById('err-messg'); // Get the error message element 
    errorMesgEl.innerHTML = message; // Set the error message content

    setTimeout(() => {
        errorMesgEl.innerHTML = ''; // Clear the error message after 2 seconds
    }, 2000);
}


// ------------------------------------------------
// event.target se us elemet tk pohchengy jhn sy event fire hoa

// * parentElement sy parent element tk pohchengy
// * children sy bacho ki list ajaegi
// * previousSibling se pichle bhai aega
// * nextSibling se agle bhai ayga
