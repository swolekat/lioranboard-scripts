import clipboardy from 'clipboardy';
import fs from 'fs';
import filePaths from './file-paths.js';

const modifyPitch = (modifyFunction) => {
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

    const bufferObj = Buffer.from(newString, "utf8");

// Encode the Buffer as a base64 string
    const newBase64Data = bufferObj.toString("base64");

    clipboardy.writeSync(newBase64Data);
};

export default modifyPitch;