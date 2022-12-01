import express from "express";
import { imageResize } from "../../utilities/imageResize";
import { checkFileExistance } from "../../utilities/files";
import path from "path";

const images = express.Router();

images.get(
    "/",
    async (req: express.Request, res: express.Response): Promise<void> => {
        /**
         * get the url query param
         */
        const filename = req.query.filename;
        const height = parseInt(req.query.height as string);
        const width = parseInt(req.query.width as string);

        /**
         * Check to see if the image exists
         */
        const check = checkFileExistance(`assets/full/${filename}.jpg`);
        if (check) {
            /**
             * Check to see if it's already resized before
             */
            if (
                checkFileExistance(
                    `assets/thumb/${filename}${width}x${height}_thumb.jpg`
                )
            ) {
                res.sendFile(
                    `assets/thumb/${filename}${width}x${height}_thumb.jpg`,
                    {
                        root: path.join("./"),
                    }
                );
            } else {
                const thumbPath = `assets/thumb/${filename}${width}x${height}_thumb.jpg`;
                const processdImage = await imageResize(
                    filename as unknown as string,
                    height,
                    width,
                    "assets/full"
                );
                processdImage.toFile(thumbPath).then(() => {
                    res.sendFile(thumbPath, {
                        root: path.join("./"),
                    });
                });
            }
        } else {
            res.status(404).send({
                message: "No Such Image",
            });
        }
    }
);

export default images;
