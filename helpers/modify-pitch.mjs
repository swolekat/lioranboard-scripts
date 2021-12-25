import getUpdatedPluginSettingsToClipboard from './get-updated-plugin-settings-to-clipboard.mjs';

const modifyPitch = (modifyFunction) => {
    getUpdatedPluginSettingsToClipboard((actualData) => {
        const stringParts = actualData.split(' ');
        let noteNumber = Number.parseInt(stringParts[1], 10);
        let newNoteNumber = modifyFunction(noteNumber);
        if(newNoteNumber <= -12){
            newNoteNumber = -12;
        }
        if(newNoteNumber >= 12){
            newNoteNumber = 12;
        }
        stringParts[1] = `${newNoteNumber}.000000`;

        const newString = stringParts.join(' ');
        return newString;
    });
};

export default modifyPitch;