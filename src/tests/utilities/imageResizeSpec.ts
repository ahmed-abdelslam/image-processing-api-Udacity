import { imageResize } from "../../utilities/imageResize";
import { checkFileExistance } from "../../utilities/files";

describe("Tests for imageResize utilities", (): void => {
    describe("function resize resizes an image if it is the first time", () => {
        const height = 200;
        const width = 200;
        const filename = "fjord";
        const path = `./src/tests/images/thumb/${filename}${width}x${height}_thumb.jpg`;

        it("should resize an image", async (): Promise<void> => {
            const processdImage = await imageResize(
                filename,
                height,
                width,
                "./src/tests/images"
            );
            processdImage.toFile(path).then(() => {
                const results = checkFileExistance(path);
                expect(results).toBe(true);
            });
        });
    });
});
