import getUpdatedPluginSettingsToClipboard from './get-updated-plugin-settings-to-clipboard.mjs';

const modifyGlitch = (modifyFunction) => {
    getUpdatedPluginSettingsToClipboard((actualData) => {
        const stringParts = actualData.split(' ');
        let glitchPercentage = Number.parseInt(stringParts[7], 10);
        let newPercentage = modifyFunction(glitchPercentage);
        if(newPercentage <= 0){
            newPercentage = 0;
        }
        if(newPercentage >= 20){
            newPercentage = 20;
        }
        stringParts[7] = `${newPercentage}.000000`;

        const newString = stringParts.join(' ');
        return newString;
    });
};

export default modifyGlitch;