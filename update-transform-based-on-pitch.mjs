import clipboardy from "clipboardy";

const updateTransformBasedOnPitch = () => {
    const newSettings = process.argv[2];
    const data = Buffer.from(newSettings, 'base64').toString();
    const stringParts = data.split(' ');
    const noteNumber = Number.parseInt(stringParts[1], 10);

    const result = {
        "Corners.BottomLeft.X":-100,
        "Corners.BottomRight.X":100,
    };
    const percentage = noteNumber / 12;

    if(noteNumber < 0) {
        const noteModifier = -100 * percentage;
        result["Corners.BottomLeft.X"] = -100 - noteModifier;
        result["Corners.BottomRight.X"] = 100 + noteModifier;
    }

    if(noteNumber > 0){
        const noteModifier = 75 * percentage;
        result["Corners.BottomLeft.X"] = -100 + noteModifier;
        result["Corners.BottomRight.X"] = 100 - noteModifier;
    }

    clipboardy.writeSync(JSON.stringify(result));
};

updateTransformBasedOnPitch();