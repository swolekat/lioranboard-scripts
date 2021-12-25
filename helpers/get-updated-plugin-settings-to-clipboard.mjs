import clipboardy from 'clipboardy';
import fs from 'fs';
import filePaths from '../file-paths.js';

const getUpdatedPluginSettingsToClipboard = (modifyFunction) => {
    const obsSettings = JSON.parse(`${fs.readFileSync(filePaths.obsSceneJsonPath)}`);

    const sourceName = process.argv[2];
    const filterName = process.argv[3];

    const {sources} = obsSettings;
    const source = sources.find(s => s.name === sourceName);
    if(!source){
        return;
    }
    const filter = source.filters.find(f => f.name === filterName);
    if(!filter){
        return;
    }
    const {settings} = filter;
    const {chunk_data} = settings;
    const actualData = Buffer.from(chunk_data, 'base64').toString();
    const updatedData = modifyFunction(actualData);

    const bufferObj = Buffer.from(updatedData, "utf8");

    const newBase64Data = bufferObj.toString("base64");

    clipboardy.writeSync(newBase64Data);
};

export default getUpdatedPluginSettingsToClipboard;