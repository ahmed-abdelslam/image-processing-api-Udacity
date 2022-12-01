import supertest from "supertest";
import app from "../../index";

const request = supertest(app);
describe("Test image endpoint responses", (): void => {
    it("gets image api response with status 200", async () => {
        const response = await request.get(
            "/api/images?filename=fjord&height=200&width=300"
        );
        expect(response.status).toBe(200);
    });
});
