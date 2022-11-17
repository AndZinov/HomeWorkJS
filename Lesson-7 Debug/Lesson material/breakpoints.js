const developerName = 'Andrey';
const programmingLanguage = 'JavaScript';

const programmingLanguages = {
    javaScript: 'JavaScript',
    nodeJS: 'NodeJS'
};


if (programmingLanguage === programmingLanguages.javaScript){
    console.log(`${developerName} Front-End`);
} else if (programmingLanguage === programmingLanguages.nodeJS){
    console.log(`${developerName} Back-End`);
} else {
        console.log(`${developerName} another`);
}