import { describe, it, expect } from "vitest"
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
    it(`should do a get request, receive a 200, and accept a "Hello there :)"`, () => {
        const getResponseObject = fetch(`http://localhost:${expressPort}`);
        expect("Hello there :)")


    })

})

describe("List of trainers", () => {
    it('should return a list of all trainers and receive a 200', () => {
        const getResponseObject = fetch(`http://localhost:${expressPort}/users`)
        superRequest(app).get('/trainers').expect(200)
    })
})
