describe('Array', function () {
    describe('AceyDeuceyCalculator', function () {
        it('Should not return undefined', function () {
            let calculator = new AceyDeuceyCalculator;
            chai.assert.isDefined(calculator, "AceyDeuceyCalculator is not defined");
        })
    })

    var calculator =  new AceyDeuceyCalculator;

    describe('Calculator-Spread-8', function () {
        it('Return value of 1/13 when spread is 8', function () {
            
            let totalEV = calculator.CalculateEstimateValue(4,13);
            const resultValue = 1/13;
            // required to round the decimal since calculation in CalculateEstimateValue uses rounding decimal by JS complier when doing caculation
            // Will failed when set round to 20
            const toFixedDecimal = 12;
            let expectValue = resultValue.toFixed(toFixedDecimal)
            chai.assert.equal(totalEV.toFixed(toFixedDecimal), expectValue, "Do not equal. ");
        })
    })

    describe('Calculator-Spread-8-reverse', function () {
        it('Return value of 1/13 when spread is 8', function () {
            
            let totalEV = calculator.CalculateEstimateValue(13,4);
            const resultValue = 1/13;
            // required to round the decimal since calculation in CalculateEstimateValue uses rounding decimal by JS complier when doing caculation
            // Will failed when set round to 20
            const toFixedDecimal = 12;
            let expectValue = resultValue.toFixed(toFixedDecimal)
            chai.assert.equal(totalEV.toFixed(toFixedDecimal), expectValue, "Do not equal. ");
        })
    })

    describe('return probabilities', function () {
        it('Should be equal to 1/13', function () {
            let winProb = calculator.CalculateProbabilityPercentToWin(11,13);

            const expectValue = 1/13 * 100;
            const toFixedDecimal = 12;
            let expectValueToFixed = expectValue.toFixed(toFixedDecimal)
            chai.assert.equal(winProb.toFixed(toFixedDecimal), expectValueToFixed);
        })
    })

    describe('return probabilities reverse', function () {
        it('Should be equal to 1/13', function () {
            let winProb = calculator.CalculateProbabilityPercentToWin(13,11);

            const expectValue = 1/13 * 100;
            const toFixedDecimal = 12;
            let expectValueToFixed = expectValue.toFixed(toFixedDecimal)
            chai.assert.equal(winProb.toFixed(toFixedDecimal), expectValueToFixed);
        })
    })
})