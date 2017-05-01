'use strict';

const {suite, test} = require('mocha');
const {expect} = require('chai');''
const fs = require('fs');

global.window = global;

suite('getName', () => {
    require('../solutions/getName');
    const code = fs.readFileSync('solutions/getName.js', {encoding: 'utf8'});

    test(`sould return 'Name' for '[object Name]'`, () => {
        expect(getName('[object Name]')).to.equal('Name');
    });

    test(`sould return 'Object' for '[object Object]'`, () => {
        expect(getName('[object Object]')).to.equal('Object');
    });

    test(`sould return 'Null' for '[object Null]'`, () => {
        expect(getName('[object Null]')).to.equal('Null');
    });

    test(`your code should use slice with right arguments`, () => {
        expect(/\.\s*slice\s*\(/.test(code)).to.be.true;
        expect(/\.\s*slice\s*\(\s*8\s*,\s*-\s*1\s*\)/.test(code)).to.be.true;
    });
})