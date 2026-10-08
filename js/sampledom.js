// Document object model 
// interactivity - user to be greeted by name given in input 
// target element - input : to collect data || button : run the function to greet user
// event  - user to be greeted only when button is clicked (addEventListener method)
// then I will need to greet my user

// dom content to be loaded : html elements 
document.addEventListener("DOMContentLoaded", (event) => {

    // get the elements needed for process : input , greet button 
    // query selector methods : getElementById (gets elements using the name in the id attribute  )
    const nameinput = document.getElementById("nameInput")
    const greetButton = document.getElementById("greetButton")
    console.log(nameinput)
    console.log(greetButton)
    // greeting only happens if user clicks on button 
    greetButton.addEventListener("click", (event) => {
            // capture the input from the user 
            const name = nameinput.value // to pick a value from an input use the .value method 
            console.log(name)

            // DOM can be used to create html elements 
            const paragraph  = document.createElement("p") // createElement() is used to create elements 
            // add welcome message to the paragraph 
            paragraph.textContent = "Welcome to my app " + name  // textConent is used to add text to text elements 
            const outputDiv = document.getElementById("welcomeMessage")
           
            // we can also use the dom for css needs 
            // to style with dom use the prop .style.stylingproperty 
            paragraph.style.color = "blue"
            paragraph.style.fontSize = "20px"
            paragraph.style.padding = "10px"

            outputDiv.appendChild(paragraph) // appendChild : allows appending of elements to other elements 

    
        })


})