//'use strict';
//const todo = require('./index.js');
//const assert = require('assert');
//
//// テストするためのモジュールを呼び出している
//
//// todoとlistのテスト
//todo.todo('ノートを買う');
//todo.todo('鉛筆を買う');
//assert.deepEqual(todo.list(), ['ノートを買う', '鉛筆を買う']);
//// assert.Equalは与えられたオブジェクトや配列の中身まで比較してくれるequal関数
//
//// doneとdonelistのテスト
//todo.done('鉛筆を買う');
//assert.deepEqual(todo.list(), ['ノートを買う']);
//assert.deepEqual(todo.donelist(), ['鉛筆を買う']);
//
//console.log('テストが正常に完了しました');


'use strict';
const assert = require('assert');

// テストの前に永続化されているファイルを消す
const fs = require('fs');
fs.unlink('./tasks.json', (err) => {
const todo = require('./index.js');


// todo と list のテスト
todo.todo('ノートを買う');
todo.todo('鉛筆を買う');
assert.deepEqual(todo.list(), ['ノートを買う', '鉛筆を買う']);

// done と donelist のテスト
todo.done('鉛筆を買う');
assert.deepEqual(todo.list(), ['ノートを買う']);
assert.deepEqual(todo.donelist(), ['鉛筆を買う']);



// delのテスト
todo.del('ノートを買う');
todo.del('鉛筆を買う');
assert.deepEqual(todo.list(), []);
assert.deepEqual(todo.donelist(), []);

console.log('テストが正常に完了しました');
})