import {test} from 'node:test';import assert from 'node:assert/strict';import {validate,priority,daily,csv} from '../dist/core.js';
const r={title:'Pipe leak',zone:'Hostels',flow:20,people:500,status:'Open'};
test('continuous loss and priority saturation',()=>{assert.equal(daily(r),28800);assert.equal(priority(r),100);assert.equal(priority({...r,flow:100,people:50000}),100);assert.equal(priority({...r,flow:0,people:0}),0)});
test('reject invalid and nonfinite reports',()=>{for(const flow of [NaN,Infinity,-1,1001])assert.throws(()=>validate({...r,flow}));assert.throws(()=>validate({...r,people:1.5}));assert.throws(()=>validate({...r,zone:'Unknown'}));assert.equal(validate(r),r)});
test('CSV escapes quotes and formula injection',()=>{const s=csv([{...r,title:'=HYPERLINK("x")'}]);assert.ok(s.includes('"\'=HYPERLINK(""x"")"'));});
