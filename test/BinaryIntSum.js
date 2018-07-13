var BinaryIntSum = artifacts.require("../contracts/BinaryIntSum");
var testdata = require('../data/BinaryIntSum.json');

contract('BinaryIntSum', function(accounts) {
    var instanceFuture = BinaryIntSum.new();
    testdata.vectors.forEach(function(v, i) {
        it("Passes test vector " + i, async function() {
            var instance = await instanceFuture;
            var result = await instance.runMinimalBinaryIntSum(
                v.input[0], {gas: v.gas});
            assert.equal(result, v.output[0]);
        });
    });

    after(async function() {
        var totalGas = 0;
        var instance = await instanceFuture;
        var curGas = 0;
        for(var v of testdata.vectors) {
            curGas = await instance.runMinimalBinaryIntSum.estimateGas(
                v.input[0], {gas: v.gas}) - 21000;
            console.log(curGas);
            totalGas += curGas;
        }
        console.log("Total gas for BinaryIntSum: " + totalGas);
    });
});