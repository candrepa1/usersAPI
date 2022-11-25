const moment = require("moment");

const isBodyCorrect = ({first_name, last_name, email, password, birthday}) => {
    const strings = [first_name, last_name, email, password, birthday];

    const areAllStrings = strings.every((string) => isString(string));

    if(areAllStrings) {
        return isBirthdateFormatted(birthday);
    } else {
        return false;
    }
}

const isString = (value) => typeof value;

const isBirthdateFormatted = (birthdate) => {
    const date = moment(birthdate, "YYYY/MM/DD", true);
    
    return date.isValid();
}

module.exports = isBodyCorrect;