 //----------------------------------=+=-----------------------------------------
//                    Global Constants & Variables
// alwaysActive
//setInterval(processItem, 100); //(onBlur or onChange or an eventListener to HTML Element)
// have an element with an onChange event and if an element is changed then run 
// the livePreview function ? 

//     --- Constants

//     --- Variables
let certificationReturns = [];
let descriptionReturns = [];


//----------------------------------=+=-----------------------------------------
//                             eBay Parser
// The purpose of this function is to store variables pertinent to the innerHTML
// of the Item Description
function ebayParser(certificationNumber, compiledGrade, gradingCompany) {
    "use strict";

}
//----------------------------------=+=-----------------------------------------
//                           gradeStatePredictor
// This function will predict an item's grade state based on the number
function gradeStatePredictor(gradeNumber, gradeState) {
    // Nested IF for values
    if (gradeNumber >= 60 && gradeNumber <= 70) {
        gradeState = "MS";
    } else if (gradeNumber >= 50 && gradeNumber <= 58) {
        gradeState = "AU";
    } else if (gradeNumber >= 40 && gradeNumber <= 45) {
        gradeState = "XF";
    } else if (gradeNumber >= 20 && gradeNumber <= 35) {
        gradeState = "VF";
    } else if (gradeNumber >= 12 && gradeNumber <= 15) {
        gradeState = "F";
    } else if (gradeNumber >= 8 && gradeNumber <= 10) {
        gradeState = "VG";
    } else if (gradeNumber >= 4 && gradeNumber <= 6) {
        gradeState = "G";
    } else if (gradeNumber == 3) {
        gradeState = "AG";
    } else if (gradeNumber == 2) {
        gradeState = "FAIR";
    } else if (gradeNumber == 1) {
        gradeState = "POOR";
    }

    // Returning
    return gradeState;
}

//----------------------------------=+=-----------------------------------------
//                           certificationCheck Controller
// the purpose of this function is to assemble the graded portion of the title
function certificationCheck() {
    "use strict";  
    // Declaring Variables
    let gradingEnabled;
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
    gradingEnabled = document.querySelector('input[name="gradingEnabled"]').checked;
    gradingCompany = document.querySelector('select[name="gradingCompany"]').value;
    gradeNumber = document.querySelector('select[name="gradeNumber"]').value;
    gradeState = document.querySelector('select[name="gradeState"]').value;
    isDetails = document.querySelector('input[name="isDetails"]').checked;
    isPlus = document.querySelector('input[name="isPlus"]').checked;
    isStar = document.querySelector('input[name="isStar"]').checked;
    
    // Onlyl doing the following IF gradingEnabled is True
    if (gradingEnabled === true) {

        // 4CAPS LOCK on All
        gradingCompany = gradingCompany.toUpperCase();
        gradeState = gradeState.toUpperCase();

        // Grade State Predictor
        if (gradeState === "AUTO") {
            gradeState = gradeStatePredictor(gradeNumber, gradeState);
        }

        // Assemble Certification String
        if(gradingEnabled != false) {
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
                if (gradeState === "MS") {
                    gradeState = "UNC";
                }    
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
        
            }    
    } else {
        compiledString = ""
    }

    certificationReturns = [compiledGrade, compiledString, gradingCompany, 
        gradingEnabled];

}
//----------------------------------=+=-----------------------------------------
//                    description generator (sub function
// the purpose of this function is to roll the variables for non-repeating
// items for item descriptors
function descriptionGenerator(tierOne, tierTwo, traitOne, traitTwo, generatorReturn, additionalNotes) {
    "use strict";
    // declaring Variables
    
    

    // ARRAYS for Desc Rolling
    let stunningArray = ["Beautiful", "Stunning", "Remarkable", "Gorgeous", "Sharp",
        "Distinguished", "Vibrant", "Rich", "Incredible", "Elegant", "Extraordinary"];
    
    let greatArray = ["Lovely", "Charming", "Classical", "Eye-appealing", "Tasteful",
        "Distinguished", "Great", "Pretty", "Alluring", "Captivating", "Illustrious"];
    
    let goodArray = ["Great", "Nice", "Historic", "Pleasing", "Notable", "Subtle", "Good",
        "Fine", "Impressive", "Noble", "Noteworthy"];

    // ROLLING TIER TERMS
    if (traitOne !== "n/a" && traitOne !== "era" && traitOne !== "hairline" && traitOne !== "wornSurfaces") {
        //randomizing random variable
                
        // Generating tier 1(Stunning) variable
        if (tierOne === "01") {
            // Randomly rolling Array length for word
            tierOne = stunningArray[Math.floor(Math.random() * stunningArray.length)];
        } else if ( tierOne === "02") {
            tierOne = greatArray[Math.floor(Math.random() * greatArray.length)];
        } else if (tierOne === "03") {
            tierOne = goodArray[Math.floor(Math.random() * goodArray.length)];
        }
    }
    
    if (traitTwo !== "n/a" && traitTwo !== "era" && traitTwo !== "hairline" && traitTwo !== "wornSurfaces") {
        // Original tier2 roll
        // Generating tier 1(Stunning) variable
        if (tierTwo === "01") {
            // Randomly rolling Array length for word
            tierTwo = stunningArray[Math.floor(Math.random() * stunningArray.length)];
            } else if ( tierTwo === "02") {
                tierTwo = greatArray[Math.floor(Math.random() * greatArray.length)];
            } else if (tierOne === "03") {
                tierTwo = goodArray[Math.floor(Math.random() * goodArray.length)];
            }

        // Validating tierTwo isn't = to tier one otherwise roll again
        if (tierTwo == tierOne) {
            // Generating tier 1(Stunning) variable
            if (tierTwo === "01") {
            // Randomly rolling Array length for word
            tierTwo = stunningArray[Math.floor(Math.random() * stunningArray.length)];
            } else if ( tierTwo === "02") {
                tierTwo = greatArray[Math.floor(Math.random() * greatArray.length)];
            } else if (tierOne === "03") {
                tierTwo = goodArray[Math.floor(Math.random() * goodArray.length)];
            }
        }
    }

    // isWornSurfaces
    if (traitOne == "wornSurfaces") {
        tierOne = "";
        traitOne = "If this coin could talk..";
    } else if (traitTwo == "wornSurfaces") {
        tierTwo = "";
        traitTwo = "If this coin could talk..";
    }

    // isEra
    if (traitOne == "era") {
        tierOne = "";
        traitOne = "Really brings you back to " + manualItemInfoReturns[1];
    } else if (traitTwo == "era") {
        tierTwo = "";
        traitTwo = "Really brings you back to " + manualItemInfoReturns[1];
    }

    // isHairline
    if (traitOne == "hairline") {
        tierOne = "";
        traitOne = "Some hairlines";
    } else if (traitTwo == "hairline") {
        tierTwo = "";
        traitTwo = "Some hairlines";
    }


    // Assembling the Description
    generatorReturn = tierOne
        + " "
        + traitOne
        + ". "
        + tierTwo
        + " "
        + traitTwo
        + ". "
        + additionalNotes;
        
        // Adding if Carson City
        if (manualItemInfoReturns[2] == "CC") {
            generatorReturn += " Great relic of the Old West. ";
        }

    // return compiled string
    return generatorReturn;
}


//----------------------------------=+=-----------------------------------------
//                    itemDescription Generator Controller
// The purpose of this function is to control the item description generator.. yeah
function itemDescriptionGenerator() {
    "use strict";
    // Declaring Local Variables
    let tierOne;
    let tierTwo;
    let traitOne;
    let traitTwo;
    let additionalNotes;
    let generatorReturn;
    let htmlDesc;

    let compiledDescription;

    // Assigning Variables
    tierOne = document.querySelector('select[id="tierSelect01"]').value;
    tierTwo = document.querySelector('select[id="tierSelect02"]').value;
    traitOne = document.querySelector('select[id="traitSelect01"]').value;
    traitTwo = document.querySelector('select[id="traitSelect02"]').value;
    additionalNotes = document.querySelector('input[id="descAdditionalNotes"]').value;

    // Generating Descriptions
    compiledDescription = descriptionGenerator(tierOne, tierTwo, traitOne, traitTwo, generatorReturn, additionalNotes)
    
    // Generating the HTML Description
    htmlDesc = "<body><div><div><span style='font-size:36px;'><span style='font"
        + "-family:times new roman,times,serif;'><strong>" 
        + certificationReturns[1]
        + " "
        + manualItemInfoReturns[0] 
        + "</strong></span></span></div><div><span style='font-size:28px;'><spa"
        + "n style='font-family:times new roman,times,serif;'><strong>" 
        + compiledDescription
        + "</strong></span></span></div><div>&nbsp;</div><div><span style='font"
        + "-size:24px;'><span style='font-family:times new roman,times,serif;'>"
        + "<strong>Add this beauty to your collection today!&nbsp; We use eBay "
        + "to bring fresh material to collectors from estates.&nbsp; We are "
        + "Jim&#39;s Coins &amp; Precious Metals in Madison, WI&nbsp; Thank you"
        + " for your interest!</strong></span></span></div><div>&nbsp;</div>"
        + "</div><div><p><span style='font-family:times new roman,times,serif;"
        + "'><u><span style='font-size:18px;'><span rwr='1'><strong>Combined "
        + "Shipping:</strong></span></span></u></span></p><p><span style='font"
        + "-family:times new roman,times,serif;'><span style='font-size:16px;'>"
        + "<span rwr='1'>Combined shipping policy is the full price on the "
        + "first item and $1 for each additional item. Please use eBay&rsquo;s "
        + "Checkout to create a combined shipping invoice when you are ready to"
        + " pay for your purchases.</span></span></span></p><p>&nbsp;</p><p>"
        + "<span style='font-family:times new roman,times,serif;'><u><span "
        + "style='font-size:18px;'><span rwr='1'><strong>Signature Confirmation"
        + ":</strong></span></span></u></span></p><p><span style='font-family:"
        + "times new roman,times,serif;'><span style='font-size:16px;'><span rw"
        + "r='1'>Items over $400 will usually be sent with signature confirmati"
        + "on.&nbsp; If someone is not at home to receive the package, then the"
        + " post office will leave a slip and one must bring it to the station "
        + "with ID to sign for the package or in some cases the Post Office "
        + "will try to re-deliver the package.</span></span></span></p><p>&nbsp"
        + ";</p><p><span style='font-family:times new roman,times,serif;'><u>"
        + "<span style='font-size:18px;'><span rwr='1'><strong>International "
        + "Shipping:</strong></span></span></u></span></p><p><span style='font-"
        + "family:times new roman,times,serif;'><span style='font-size:16px;'>"
        + "<span rwr='1'>ALL international shipping is completed through the "
        + "eBay Global Shipping Program.&nbsp; If you have any questions or "
        + "comments about the program, please contact eBay, not Jim&#39;s Coins"
        + ".&nbsp;&nbsp;</span></span></span></p><p>&nbsp;</p><p><span style='"
        + "font-family:times new roman,times,serif;'><u><span style='font-size:"
        + "18px;'><span rwr='1'><strong>Ungraded Coins:</strong></span></span>"
        + "</u></span></p><p><span style='font-family:times new roman,times,"
        + "serif;'><span style='font-size:16px;'><span rwr='1'>For coins that "
        + "are not professionally graded, Jim&#39;s Coins will NOT be offering "
        + "an opinion on the grade or condition of the coin, as grading is "
        + "highly subjective. Please examine the images carefully and make your"
        + " own assessment.&nbsp;&nbsp;We do absolutely 100% guarantee the "
        + "authenticity of any coin we sell.&nbsp;&nbsp;</span></span></span>"
        + "</p><p>&nbsp;</p><p><span style='font-family:times new roman,times,"
        + "serif;'><u><span style='font-size:18px;'><span rwr='1'><strong>Sales"
        + " Tax:</strong></span></span></u></span></p><p><span style='font-fami"
        + "ly:times new roman,times,serif;'><span style='font-size:16px;'><span"
        + " rwr='1'>Will be administered by eBay.</span></span></span></p><p>&n"
        + "bsp;</p><div><p><span style='font-family:times new roman,times,serif"
        + ";'><u><span style='font-size:18px;'><span rwr='1'><strong>Returns:</"
        + "strong></span></span></u></span></p><p><span style='font-family:time"
        + "s new roman,times,serif;'><span style='font-size:16px;'><span rwr='1"
        + "'>We accept returns within 14 days from the date of purchase. Please"
        + " contact us immediately when you wish to return an item.&nbsp; Items"
        + " must be returned in their original holder.&nbsp; Any items that are"
        + " damaged or items that have been removed (or tampered with) from the"
        + " original packaging will not be accepted for return.</span></span>"
        + "</span></p><p>&nbsp;</p><p><span style='font-family:times new roman,"
        + "times,serif;'><u><strong><span style='font-size:18px;'>Our Condition"
        + "s:</span></strong></u></span></p><ul><li><span style='font-family:ti"
        + "mes new roman,times,serif;'><span style='font-size:16px;'><span rwr="
        + "'1'>We&nbsp;do not&nbsp;accept offers to end an auction early.</span"
        + "></span></span></li><li><span style='font-family:times new roman,tim"
        + "es,serif;'><span style='font-size:16px;'><span rwr='1'><span rwr='1'"
        + ">If&nbsp;you wish to make an offer on any Buy It Now listing, please"
        + " use the &quot;Best Offer&quot; next to the price listed. &nbsp;&nbs"
        + "p;</span></span></span></span></li><li><span style='font-family:time"
        + "s new roman,times,serif;'><span style='font-size:16px;'><span rwr='1"
        + "'><span rwr='1'><span rwr='1'>All Buy It Now Items are subject to "
        + "prior sale in our showroom, on our&nbsp;website, or coin conventions"
        + " we attend.</span></span></span></span></span></li></ul><p>&nbsp;</p"
        + "></div></div></body>";

    // Send Finished Concatenation to Global Variable
    descriptionReturns = [compiledDescription, htmlDesc];


}
//----------------------------------=+=-----------------------------------------
//                         Controller Function
function processItem() {
    "use strict";
    
    
    // Run certificationCheck
    certificationCheck();

    // Run Item Identification
    manualItemInfoProcessing();

    // Run Description Generator
    itemDescriptionGenerator();

    // Run LiveTitlePreview
    liveTitlePreview();

    
}
