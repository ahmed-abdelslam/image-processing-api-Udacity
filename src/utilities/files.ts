import fs from "fs";

export const checkFileExistance = (path: string): boolean => {
    const res = fs.existsSync(path);
    if (res) {
        return true;
    }
    return false;
};
