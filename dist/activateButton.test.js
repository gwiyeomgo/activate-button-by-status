"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@testing-library/react");
var activateButton_1 = __importDefault(require("./activateButton"));
var user_event_1 = __importDefault(require("@testing-library/user-event"));
describe('button click test', function () {
    it('if render button', function () {
        (0, react_2.render)(react_1.default.createElement(activateButton_1.default, { title: 'Click', type: "status", onClick: function () { }, disabled: false, currentStatus: "Registered", activeStatus: ["Registered"] }));
        var button = react_2.screen.getByRole('button', { name: 'Click' });
        expect(button).toBeInTheDocument();
    });
    test('button click', function () {
        (0, react_2.render)(react_1.default.createElement(activateButton_1.default, { title: 'Click', type: "status", onClick: function () { }, disabled: false, currentStatus: "Registered", activeStatus: ["Registered"] }));
        var button = react_2.screen.getByRole('button', { name: 'Click' });
        react_2.fireEvent.click(button);
        user_event_1.default.click(button);
        expect(button).toHaveProperty('disabled', false);
    });
    test('button disabled', function () {
        (0, react_2.render)(react_1.default.createElement(activateButton_1.default, { title: 'Click', type: "status", onClick: function () { }, disabled: true, currentStatus: "Registered", activeStatus: ["Registered"] }));
        var button = react_2.screen.getByRole('button', { name: 'Click' });
        expect(button).toHaveProperty('disabled', false);
    });
});
//# sourceMappingURL=activateButton.test.js.map