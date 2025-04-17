// Global Array & Validation Variables
let reloadInnerHTMLCheck;
let chosenName;
let manualItemInfoReturns = [];

//----------------------------------=+=-----------------------------------------
//                           Item Info Controller
// The purpose of this function is to determine what the item is based on the 
// inputs from the manual mode page
function manualItemInfoProcessing() {
    "use strict";
    // Declaring Variables
    let year;
    let mint;
    let denomination;
    let additionalNotes;
    let isError;
    let nameProcessingReturn;
    let nameOverride;
    let nameSuggest;
    let nameOptionsHtml;
    let index;
    let titleAssembly;

    // Assigning Variables
    year = document.querySelector('input[id="itemYear"]').value;
    mint = document.querySelector('select[id="itemMint"]').value;
    denomination = document.querySelector('select[id="itemDenomination"]').value;
    additionalNotes = document.querySelector('input[id="itemAdditionalNotes"]').value;
    nameOverride = document.querySelector('input[id="manualNameOverride"]').value;
    nameSuggest = document.querySelector('section[id="itemOptionSelect"]');
    
    

    
    // Determining an Item's Name (Function in itemProcessingRecords.js) 
    nameProcessingReturn = itemNameProcessing(year, denomination);
    
    
    // Presenting Options for Potential Names (if applicable)
    if (Array.isArray(nameProcessingReturn)) {
        // Resetting Option & starting table/form elements
        nameOptionsHtml = `<select class="form-select" 
            onchange="return coinNameSelectChange();" 
            id="coinNameSelect" 
            name="coinNameSelect">
            <option value="" disabled selected>Clic para elegir</option>`;
        
        // Cycling for each option in Array
        for (index = 0; index < nameProcessingReturn.length; index++) {
            nameOptionsHtml += `<option value="`
                + nameProcessingReturn[index]
                + `">`
                + nameProcessingReturn[index]
                + `</option>`;
        }
        
        // Closing Table & form elements
        nameOptionsHtml += `</select>`;

        // If Reload is not the same, Writing Available Buttons to Document
        if (reloadInnerHTMLCheck !== nameOptionsHtml) {
            // Outputting to Doc
            nameSuggest.innerHTML = nameOptionsHtml;
            
            // Verifiying innerHTML Storage
            reloadInnerHTMLCheck = nameOptionsHtml;
            
    
        }

        
    }
    
    // if only one name return, set it to be chosen name
    if (Array.isArray(nameProcessingReturn) !== true) {
        chosenName = nameProcessingReturn;
        // if there isn't an array to be selected from, remove table options
        nameSuggest.innerHTML = "";
    }

    // Overriding Chosen Name if Needed
    if (nameOverride !== "") {
        chosenName = nameOverride;
    } 

    // Capitializing All Variables before Sending
    chosenName = chosenName.toUpperCase();
    additionalNotes = additionalNotes.toUpperCase();
    mint = mint.toUpperCase();

    // Title Assembly
    titleAssembly = "";
    titleAssembly += year;
    if (mint !== "N/A") {
        titleAssembly += "-" + mint;
    }
    titleAssembly += " "
        + chosenName;
    if (additionalNotes !== "") {
        titleAssembly += ", "
            + additionalNotes;
    }


    // DEBUGGING
    //console.log(nameProcessingReturn);
    //console.log(chosenName);


    // Storing Item Info in Array
    manualItemInfoReturns = [titleAssembly, year, mint, chosenName, additionalNotes, isError];
}
//----------------------------------=+=-----------------------------------------
//                       coinNameSelectChange Function
// the purpose of this function is to run when a coinNameSelectChange is clicked
function coinNameSelectChange() {
    "use strict";
    // If something is checked, set it to be the chosenName
    chosenName = document.querySelector('select[name="coinNameSelect"]').value;
    
    // run liveTitlePreview
    liveTitlePreview();
}

//----------------------------------=+=-----------------------------------------
//                             liveTitlePreview
// the purpose of this function is to provide a live feed of what an item's
// title will look like at all times on the page.
function liveTitlePreview() {
    "use strict";
    // declare necessary variables
    
    // run scripts involved title generation
    certificationCheck();
    manualItemInfoProcessing();
    
    // Declaring Variables
    let titlePreviewOutput;
    let compiledTitle;
    let previewDescription;

    // assigning variables
    titlePreviewOutput = document.querySelector('p[id="previewItemTitle"]');
    previewDescription = document.querySelector('p[id="previewItemDescription"]');
    compiledTitle = "";
    
    // compiling title
    compiledTitle = certificationReturns[1]
        + " "
        + manualItemInfoReturns[0];

    // Outputting to Page
    if (titlePreviewOutput !== compiledTitle) {
        titlePreviewOutput.innerHTML = compiledTitle;
        previewDescription.innerHTML = descriptionReturns[0];
    }


    console.log(compiledTitle);
    // Ensuring Page Doesn't Reload
    return false;

    
}

