var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "axios"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const axios_1 = __importDefault(require("axios"));
    (async () => {
        try {
            const res = await axios_1.default.get("https://jspost.typicode.com/posts/1");
            console.log(res.data.userId);
            const res2 = await axios_1.default.post("https://jspost.typicode.com/posts", {
                title: "foo",
                body: "bar",
                userId: 1,
            });
            console.log(res2.data.id);
        }
        catch (error) {
            if (axios_1.default.isAxiosError(error)) {
                console.log(error.response?.data.message);
            }
        }
    })();
});
