"use strict";

// Get the object for the HTML element that's specified by the CSS selector
const $ = selector => document.querySelector(selector);

// Cursor focus and select
const focusAndSelect = selector => {
    const elem = $(selector);
    elem.focus();
    elem.select();
};

// processEntries function
const processEntries = () => {
    // Get user's entries
    
    // Contact Information
    
    const email = $("#email").value.trim();
    const password = $("#password").value.trim();
    
    // Validate user entries
    // Verify values are not empty
    let errorMessage = "";

    if (email == "") {
        errorMessage += "Email is required.\n";
        focusAndSelect("#email");
    }

    // Email Pattern
    const emailPattern = /^[a-z]+\@[^\s]+\.[^\s]+$/;
    if (!emailPattern.test(email)) {
        errorMessage += "Email is not valid.\n"
        focusAndSelect("#email");
    }

    if (password == "") {
        errorMessage += "Password is required.\n";
        focusAndSelect("#password");
    }

    // Password minimum length
    if (password.length < 6) {
        errorMessage += "Password must be at least 6 characters.\n";
        focusAndSelect("#password");
    }

    // Prevent submission if there's an error
    if (errorMessage != "") {
        alert(errorMessage);
        processEntries.preventDefault();
    } 
    
};

// DOMContentLoaded event handler
document.addEventListener("DOMContentLoaded", () => {
    console.log("The DOM is ready!");
    $("#submit").addEventListener("click", processEntries); // Submit the form

    $("#email").focus(); // Move cursor to email on application start
});