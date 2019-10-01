// checks user input for correctedness
export const isYes = (userInput) => {
    const yesForms = ['yes', 'Yes', 'YES', 'yea boi', 'yaaas', 'y', 'Y'];
    for (const i in yesForms) {
        if (userInput === yesForms[i]){
            return true;
        }  
    }
    return false;
};