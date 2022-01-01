import getUpdatedPluginSettingsToClipboard from './get-updated-plugin-settings-to-clipboard.mjs';

const pluginName = 'guitar/distortion'

const modifyDistortion = (modifyFunction) => {
    getUpdatedPluginSettingsToClipboard((actualData) => {
        const stringParts = actualData.split(' ');
        const firstPart = stringParts[0].replace(pluginName, '').replace('\u0000', '').trim();
        let distortionDB = Number.parseInt(firstPart, 10);
        let newDB = modifyFunction(distortionDB);
        if(newDB <= 0){
            newDB = 0;
        }
        if(newDB >= 50){
            newDB = 50;
        }
        stringParts[0] = `${pluginName}\u0000${newDB}.000000`;

        const newString = stringParts.join(' ');
        return newString;
    });
};

export default modifyDistortion;