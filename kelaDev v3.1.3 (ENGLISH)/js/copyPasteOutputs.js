function copyTitleToClipboard () {


    // Declare Variables
    let el;

    // Create Element to be copied to
    el = document.createElement('textarea');
    
    
    // Set value (string to be copied)
    el.value = certificationReturns[1]
        + " "
        + manualItemInfoReturns[0];
    
        // Set non-editable to avoid focus and move outside of view
    el.setAttribute('readonly', '');
    el.style = {position: 'absolute', left: '-9999px'};
    document.body.appendChild(el);
    
    // Select text inside element
    el.select();
    
    // Copy text to clipboard
    document.execCommand('copy');
    
    // Remove temporary element
    document.body.removeChild(el);
 }

//--------------------------------------------------------------------------------
 function copyDescriptionToClipboard () {
    // Declare Variables
    let el;

    // Create Element to be copied to
    el = document.createElement('textarea');
    
    
    // Set value (string to be copied)
    el.value = descriptionReturns[0];
    
        // Set non-editable to avoid focus and move outside of view
    el.setAttribute('readonly', '');
    el.style = {position: 'absolute', left: '-9999px'};
    document.body.appendChild(el);
    
    // Select text inside element
    el.select();
    
    // Copy text to clipboard
    document.execCommand('copy');
    
    // Remove temporary element
    document.body.removeChild(el);
 }


//=-------------------------------------------------------------------------------
 function copyHTMLDescToClipboard () {
    // Declare Variables
    let el;

    // Create Element to be copied to
    el = document.createElement('textarea');
    
    
    // Set value (string to be copied)
    el.value = descriptionReturns[1];
    
        // Set non-editable to avoid focus and move outside of view
    el.setAttribute('readonly', '');
    el.style = {position: 'absolute', left: '-9999px'};
    document.body.appendChild(el);
    
    // Select text inside element
    el.select();
    
    // Copy text to clipboard
    document.execCommand('copy');
    
    // Remove temporary element
    document.body.removeChild(el);
 }