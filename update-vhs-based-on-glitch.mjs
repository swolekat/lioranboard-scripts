import clipboardy from "clipboardy";

const updateVhsBasedOnGlitch = () => {
    const newSettings = process.argv[2];
    const data = Buffer.from(newSettings, 'base64').toString();
    const stringParts = data.split(' ');
    const glitchPercentage = Number.parseInt(stringParts[7], 10);

    const actualPercentage = glitchPercentage / 20;
    const vhsSettings = {
        "colorOffsetIntensity": 2.6 * actualPercentage,
        "noiseIntensity":1.76 * actualPercentage,
        "offsetIntensity":0.04 * actualPercentage,
    };

    clipboardy.writeSync(JSON.stringify(vhsSettings));
};

updateVhsBasedOnGlitch();