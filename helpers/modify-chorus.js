import getUpdatedPluginSettingsToClipboard from './get-updated-plugin-settings-to-clipboard.mjs';

const pluginName = 'guitar/chorus'

const modifyChorus = (modifyFunction) => {
    getUpdatedPluginSettingsToClipboard((actualData) => {
        const stringParts = actualData.split(' ');
        const firstPart = stringParts[0].replace(pluginName, '').replace('\u0000', '').trim();
        let chorusMs = Number.parseInt(firstPart, 10);
        let newDuration = modifyFunction(chorusMs);
        if(newDuration <= 1){
            newDuration = 1;
        }
        if(newDuration >= 250){
            newDuration = 250;
        }
        stringParts[0] = `${pluginName}\u0000${newDuration}.000000`;

        const newString = stringParts.join(' ');
        return newString;
    });
};

export default modifyChorus;