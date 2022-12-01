import sharp, { Sharp } from "sharp";

export const imageResize = async (
    filname: string,
    height: number,
    width: number,
    path: string | null
): Promise<Sharp> => {
    if (path === null) {
        path = "assets/full";
    }

    const imagePath = `${path}/${filname}.jpg`;

    const processdImage = await sharp(imagePath).resize(width, height);

    return processdImage;
};
