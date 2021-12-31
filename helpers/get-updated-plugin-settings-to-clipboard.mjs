import clipboardy from 'clipboardy';
import getDataFromFilter from "./get-data-from-filter.js";

const getUpdatedPluginSettingsToClipboard = (modifyFunction) => {
    const actualData = getDataFromFilter();
    const updatedData = modifyFunction(actualData);

    const bufferObj = Buffer.from(updatedData, "utf8");

    const newBase64Data = bufferObj.toString("base64");

    clipboardy.writeSync(newBase64Data);
};

export default getUpdatedPluginSettingsToClipboard;