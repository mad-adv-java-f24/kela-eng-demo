 //----------------------------------=+=-----------------------------------------
//                    Global Constants & Variables
// alwaysActive
setInterval(processItem, 100);

//     --- Constants

//     --- Variables
let certificationReturns = [];
let manualItemInfoReturns = [];

//----------------------------------=+=-----------------------------------------
//                             eBay Parser
// The purpose of this function is to store variables pertinent to the innerHTML
// of the Item Description
function ebayParser(certificationNumber, compiledGrade, gradingCompany) {
    "use strict";

}


//----------------------------------=+=-----------------------------------------
//                           certificationCheck Controller
// the purpose of this function is to assemble the graded portion of the title
function certificationCheck() {
    "use strict";  
    // Declaring Variables
    let gradingCompany;
    let gradeNumber;
    let gradeState;
    let isDetails;
    let isPlus;
    let isStar;
    let certificationNumber;
    let compiledGrade;
    let compiledString;

    // initializing string compiliers
    compiledGrade = "";
    compiledString = "";

    // Assign Values to Variables
    gradingCompany = document.querySelector('input[name="gradingCompany"]:checked').value;
    gradeNumber = document.querySelector('select[name="gradeNumber"]').value;
    gradeState = document.querySelector('select[name="gradeState"]').value;
    isDetails = document.querySelector('input[name="isDetails"]').checked;
    isPlus = document.querySelector('input[name="isPlus"]').checked;
    isStar = document.querySelector('input[name="isStar"]').checked;
    certificationNumber = document.querySelector('input[name="certificationNumber"]').value;
    
    // 4CAPS LOCK on All
    gradingCompany = gradingCompany.toUpperCase();
    gradeState = gradeState.toUpperCase();

    // Assemble Certification String
    if(gradingCompany != "UNCERTIFIED") {
        compiledString += gradingCompany
        
        // COMPILING THE GRADE
            // isDetails Modifications
        if(isDetails === false) {
            compiledString += " "; 
            compiledGrade += gradeState 
                + "-" 
                + gradeNumber;
        } else if (isDetails === true) {
            compiledString += "-";
                compiledGrade += gradeState; 
        }

            // isPlus Modification
        if (isDetails === false && isPlus === true) {
            compiledGrade += "+";
        }

            // isStar Modification
        if (isDetails === false && isStar === true) {
            compiledGrade += "★";
        }

        // endingExclamation
        compiledString += compiledGrade + "!";
    } else {
        compiledString = ""
    }

    // Sending Values to eBay Parser
    // ebayParser(certificationNumber, compiledGrade, gradingCompany);
    

    certificationReturns = [certificationNumber, compiledGrade, compiledString, 
        gradingCompany];

}
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

    // Assigning Variables
    year = document.querySelector('input[id="itemYear"]').value;
    mint = document.querySelector('select[id="itemMint"]').value;
    denomination = document.querySelector('select[id="itemDenomination"]').value;
    additionalNotes = document.querySelector('input[id="itemAdditionalNotes"]').value;
    isError = document.querySelector('input[name="isError"]').checked;
    
    // Determining an Item's Name (Function)
    nameProcessingReturn = itemNameProcessing(year, denomination);


    // Storing Item Info in Array
    manualItemInfoReturns = [isError, ];
}

//----------------------------------=+=-----------------------------------------
//                             liveTitlePreview
// the purpose of this function is to provide a live feed of what an item's
// title will look like at all times on the page.
function liveTitlePreview() {
    "use strict";
    // run scripts involved title generation
    certificationCheck();
    
    // Declaring Variables
    let titlePreviewOutput;
    let compiledTitle;

    // assigning variables
    titlePreviewOutput = document.querySelector('h1[id="titlePreview"]');
    compiledTitle = "";
    
    // compiling title
    compiledTitle += certificationReturns[2];

    // Outputting to Page
    titlePreviewOutput.innerHTML = compiledTitle;

    
}

//----------------------------------=+=-----------------------------------------
//                         Controller Function
function processItem() {
    "use strict";
    
    
    // Run certificationCheck
    certificationCheck();

    liveTitlePreview();
}