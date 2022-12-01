import { checkFileExistance } from "../../utilities/files";

describe("Tests for files utilities", (): void => {
    describe("function checkFileExistance checks if a file exists", () => {
        it("should return false if file does'nt exist", () => {
            const path = "./src/tests/images/test.jpg";
            const results = checkFileExistance(path);
            expect(results).toBe(false);
        });

        it("should return true if file exists", (): void => {
            const path = "./src/tests/images/fjord.jpg";
            const results = checkFileExistance(path);
            expect(results).toBe(true);
        });
    });
});
