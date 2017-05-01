'use strict';

const {suite, test} = require('mocha');
const {expect} = require('chai');
const fs = require('fs'); 

global.window = global;

suite('getRandomHexColor', () => {
    require('../solutions/getRandomHexColor');
    const code = fs.readFileSync('solutions/getRandomHexColor.js', {encoding: 'utf8'});

    test('should start with #', () => {
        expect(getRandomHexColor().charAt(0)).to.equal('#');
    });

    test('should return different colors for different calls', () => {
        expect(getRandomHexColor()).to.not.equal(getRandomHexColor());
    });

    test('should be valid color', () => {
        for(let i = 0; i < 10; i++) {
            expect(/^#[a-f\d]{6}$/i.test(getRandomHexColor())).to.be.true;
        }
    });

    test('your code should not contian a loop', () => {
        expect(/\b(for|while)\b/.test(code)).to.be.false;
    });
});