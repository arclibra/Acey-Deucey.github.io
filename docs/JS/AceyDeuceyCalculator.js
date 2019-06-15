class AceyDeuceyCalculator{
    constructor(){

    }

    /*Assume all 52 card in places, since each card has 4 of kinds.
     so the probabilities of getting another card number is 1/13;
     Do not consider card when they are same value.
     FirstCardNumber should always be lower than secondCardNumber
     @Throw Error() CardNumber value not in range
     @return Number
    */
    CalculateEstimateValue(firstCardNumber, secondCardNumber){

        if(!(this.CheckCardInRange(firstCardNumber) && this.CheckCardInRange(secondCardNumber))){
            throw new Error("CardNumber value not in range");
        }

        if(firstCardNumber > secondCardNumber){
            let result = {};
            result = this._SwapNumber(firstCardNumber,secondCardNumber, result)
            firstCardNumber = result.firstNumber;
            secondCardNumber = result.secondNumber;
        }

        if(this._IsSameNumber(firstCardNumber,secondCardNumber))
        {
            //TODO: caculate the best case scenario.
        }
        else
        {
        
            let winningSpread = secondCardNumber  - firstCardNumber  -1;
            let winEV = winningSpread / 13;
            
            //calculate Any card fall out of first card (lower than first card)
            let zeroToFirstCard = firstCardNumber - 1;
            //calculate Any card fall out of second card (higher than second card)
            let secondToLastCard = 13 - secondCardNumber;
            //combine into the number of losing spread cards
            let losingSpreadNegativePayoutSingle = zeroToFirstCard + secondToLastCard;

            //this is the probabilities of losing and pay to pot by the bet * 1.
            let losingProbabilitiesPayoutDouble = 2;
            let losingPayoutDoubleEV = losingProbabilitiesPayoutDouble * 2;

            let lostEV = (losingSpreadNegativePayoutSingle + losingPayoutDoubleEV) /13 

            let totalEV = winEV - lostEV;

            return totalEV;
        }
    }

    CalculateProbabilityPercentToWin(firstCardNumber, secondCardNumber)
    {
        if(!(this.CheckCardInRange(firstCardNumber) && this.CheckCardInRange(secondCardNumber))){
            throw new Error("CardNumber value not in range");
        }

        if(firstCardNumber > secondCardNumber){
            let result = {};
            result = this._SwapNumber(firstCardNumber,secondCardNumber, result)
            firstCardNumber = result.firstNumber;
            secondCardNumber = result.secondNumber;
        }

        let winningSpread = secondCardNumber  - firstCardNumber  -1;
        let winProbability = winningSpread / 13;
        let winProbabilityInPercent = winProbability * 100;

        return winProbabilityInPercent;
    }

    CheckCardInRange(cardNumberParam){
        return (cardNumberParam < 14 && cardNumberParam > 0);
    }

    _IsSameNumber(firstNumber,secondNumber)
    {
        return firstNumber == secondNumber;
    }
    /**
     * @param  {} firstNumber
     * @param  {} SecondNumber
     * @param  {} result; result.firstNumber, result.secondNumber are the reverse value.
     * @returns {} result
     */
    _SwapNumber(firstNumber, secondNumber, result)
    {
        result.firstNumber = secondNumber;
        result.secondNumber = firstNumber;

        return result;
    }
}