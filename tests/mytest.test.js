/**
 * @file /tests/mytest.test.js
 * @name mytest
 * @description Test for app function
 */

import { app } from "../src/index";

describe("app", () => {
    it("should return true", () => {
        expect(app()).toBe(true);
    });
});
