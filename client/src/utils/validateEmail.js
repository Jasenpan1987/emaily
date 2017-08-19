
export const validateEmail = (emailStr) => {
    var re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return re.test(emailStr);
}

export const validateEmails = (emails) => {
    const invalidEmails = emails
        .split(",")
        .map(email => {
            return email.trim();
        })
        .filter(email => {
            return email.length > 0
        })
        .filter(email => {
            return !validateEmail(email);
        });
    
    if(invalidEmails.length) {
        return `These emails of the recipients are not valid: ${
            invalidEmails.concat(', ')
        }`;
    }
}