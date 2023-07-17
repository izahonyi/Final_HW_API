const {
    sendRequest
} = require("../helpers/api.helper");
const testData = require("../config/data.json");

describe("API Test Suite", () => {
    it("GET public/v2/users should return users", async () => {
        const response = await sendRequest("public/v2/users");
        //console.log(response.data);
        //console.log(response.status);
        expect(response.status).to.equal(200);
        expect(response.data.length).to.not.equal(0);
    });

    it("GET public/v2/users should return non-empty status", async () => {
        const response = await sendRequest("public/v2/users");
        expect(response.data.status).to.not.equal("");
    });

    it("GET public/v2/comments should return users", async () => {
        const response = await sendRequest("public/v2/comments");
        expect(response.status).to.equal(200);
        expect(response.data.length).to.not.equal(0);
    });

    it("GET public/v2/comments should return email", async () => {
        const response = await sendRequest("public/v2/comments");
        expect(response.data.email).to.not.equal("");
    });

    /*
    it("POST posts", async () => {
        const response = await sendRequest("posts", testData, "post");
        console.log(response.data);
        console.log(response.status);
        expect(response.status).to.equal(201);
    });
    */
});