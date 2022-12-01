import express, { Request, Response, NextFunction } from "express";
import images from "./api/images";

const routes = express.Router();

const imageMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
): express.Response | void => {
    /**
     * get the url query param
     */
    const filename = req.query.filename as string;
    const height = parseInt(req.query.height as string);
    const width = parseInt(req.query.width as string);

    if (filename === undefined || filename === null || filename === "") {
        return res.send({
            message: "Please provide a file name with height and width!",
        });
    }

    if (height == 0 || height === undefined || isNaN(height)) {
        return res.send({
            message: "Please provide a height grater than zero!",
        });
    }

    if (width == 0 || width === undefined || isNaN(width)) {
        return res.status(400).send({
            message: "Please provide a width grater than zero!",
        });
    }

    next();
};

routes.use("/images", imageMiddleware, images);

export default routes;
