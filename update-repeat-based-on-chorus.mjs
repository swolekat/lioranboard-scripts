import clipboardy from "clipboardy";

const updateRepeatBasedOnChorus = () => {
    const newSettings = process.argv[2];
    const data = Buffer.from(newSettings, 'base64').toString();
    const stringParts = data.split(' ');
    const firstPart = stringParts[0].replace('guitar/chorus', '').replace('\u0000', '').trim();
    const chorusMs = Number.parseInt(firstPart, 10);

    const chorusStep = Math.round(chorusMs / 50) + 1;

    const repeatSetting = {
        "copies":chorusStep * chorusStep,
    };

    clipboardy.writeSync(JSON.stringify(repeatSetting));
};

updateRepeatBasedOnChorus();