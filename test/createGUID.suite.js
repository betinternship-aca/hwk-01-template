'use strict';

const {suite, test} = require('mocha');
const {expect} = require('chai');
const fs = require('fs');

global.window = global;

suite('createGUID', () => {
    require('../solutions/createGUID');
    const code = fs.readFileSync('solutions/createGUID.js', {encoding: 'utf8'});

    test('should return different values for different calls', () => {
        expect(createGUID()).to.not.equal(createGUID());
    });

    test('should be valid GUID', () => {
        var guidRgx = /^[a-f\d]{8}-[a-f\d]{4}-[a-f\d]{4}-[a-f\d]{4}-[a-f\d]{12}$/i;
        for(let i = 0; i < 10; i++) {
            expect(guidRgx.test(createGUID())).to.be.true;
        }
    });

    test('your code should not contian a loop', () => {
        expect(/\b(for|while)\b/.test(code)).to.be.false;
    });

    test(`all parts shouldn't be the same`, () => {
        var samePartsRgx = /^([a-f\d]{4})\1-\1-\1-\1-\1\1\1$/i;
        expect(samePartsRgx.test(createGUID())).to.be.false;
    });

    // todo: function reuse in code.
});