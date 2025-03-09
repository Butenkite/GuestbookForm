export function validateForm(data) {
    
    // Store all the validation errors in an array
    const errors = [ ];
    
    // Validate first name
    if (!data.first_name || data.first_name.trim() === "") {
        errors.push("First name is required");
    }

    // Validate last name
    if (!data.last_name || data.last_name.trim() === "") {
        errors.push("Last name is required");
    }

    // Validate job title
    if (!data.job || data.job.trim() === "") {
        errors.push("Job Title is required");
    }

    // Validate company
    if (!data.company || data.company.trim() === "") {
        errors.push("Company is required");
    }

    // Validate linkedin
    if (!data.linkedin || data.linkedin.trim() === "" || 
        data.linkedin.indexOf(".") === -1) {
        errors.push("Linkedin is required and must be valid");
    }

    // Validate email
    if (!data.email || data.email.trim() === "" || 
        data.email.indexOf("@") === -1 ||
        data.email.indexOf(".") === -1) {
        errors.push("Email is required and must be valid");
    }

    // Validate how meet
    if (!data.how_meet) {
        errors.push("Select work, event, fair, school, or mutual friend");
    } else {
        const validOptions = [ "work", "event", "fair", "school", "mutual" ];
        if (!validOptions.includes(data.how_meet)) {
            errors.push("Invalid method selected");
        }
    }

    // I do not think that the message should be mandatory.
    
    return {
        isValid: errors.length === 0,
        errors
    }
}
