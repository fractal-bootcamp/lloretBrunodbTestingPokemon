import { describe, it } from "vitest"
import superRequest from "supertest"
import app from "."
import "dotenv/config"

const expressPort = process.env.PORT

describe("SuperRequest Tests", () => {
    it("should do a Get request", () => {
        superRequest(app).get("/").expect(200);

    })
})

describe("Express server tests", () => {
    it(`should do a get request, receive a 200, and console log "Hello there :)"`, () => {
        const getResponseObject = fetch(`http://localhost:${expressPort}`);
        const signal = getResponseObject;
        console.log("Hello there :)")

    })

})