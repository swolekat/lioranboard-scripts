import getUpdatedPluginSettingsToClipboard from './get-updated-plugin-settings-to-clipboard.mjs';

const pluginName = 'guitar/distortion'

const modifyDistortion = (modifyFunction) => {
    getUpdatedPluginSettingsToClipboard((actualData) => {
        const stringParts = actualData.split(' ');
        const firstPart = stringParts[0].replace(pluginName, '').replace('\u0000', '').trim();
        let chorusMs = Number.parseInt(firstPart, 10);
        let newDuration = modifyFunction(chorusMs);
        if(newDuration <= 0){
            newDuration = 0;
        }
        if(newDuration >= 50){
            newDuration = 50;
        }
        stringParts[0] = `${pluginName}\u0000${newDuration}.000000`;

        const newString = stringParts.join(' ');
        return newString;
    });
};

export default modifyDistortion;