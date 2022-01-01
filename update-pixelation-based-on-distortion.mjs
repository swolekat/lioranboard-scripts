import clipboardy from "clipboardy";

const updatePixelationBasedOnDistortion = () => {
    const newSettings = process.argv[2];
    const data = Buffer.from(newSettings, 'base64').toString();
    const stringParts = data.split(' ');
    const firstPart = stringParts[0].replace('guitar/distortion', '').replace('\u0000', '').trim();
    const distortionDB = Number.parseInt(firstPart, 10);

    const distortionStep = distortionDB / 10;

    const pixelationSetting = {
        "Target_Height":1080.0,
        "Target_Width":1920.0,
    };

    const divider = Math.pow(2, distortionStep);
    pixelationSetting['Target_Height'] /= divider;
    pixelationSetting['Target_Width'] /= divider;

    clipboardy.writeSync(JSON.stringify(pixelationSetting));
};

updatePixelationBasedOnDistortion();