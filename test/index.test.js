import test from "node:test";import assert from "node:assert/strict";import{uniform,normal}from"../src/index.js";
test("uniform deterministic",()=>assert.equal(uniform(10,20,()=>0.5),15));
test("normal deterministic finite",()=>assert.equal(Number.isFinite(normal(0,1,()=>0.5)),true));
test("rejects negative stddev",()=>assert.throws(()=>normal(0,-1),RangeError));
