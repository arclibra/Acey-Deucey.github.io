
function CalculateEVAndProbabilities(){
    let firstValueDOM = document.getElementById("Calculator-FirstValue");
    let secondValueDOM = document.getElementById("Calculator-SecondValue");

    let firstValue = Number(firstValueDOM.value);
    let secondValue = Number(secondValueDOM.value);

    var EV_html = document.getElementById("EV-Outcome");
    var winning_html = document.getElementById("WinningProbabilities");
    var CalculatorErrorDescription_html = document.getElementById("Calculator-ErrorDescription");

    var evResult = 0;
    var probabilitiesResult = 0;

    if(Number.isInteger(firstValue) && Number.isInteger(secondValue))
    {
        var Calculator = new AceyDeuceyCalculator();
        try {
            evResult = Calculator.CalculateEstimateValue(firstValue,secondValue);
            probabilitiesResult = Calculator.CalculateProbabilityPercentToWin(firstValue,secondValue);    
        } catch (error) {

            CalculatorErrorDescription_html.innerHTML = error;
            EV_html.innerHTML = 0;
            winning_html.innerHTML = 0 + '%';

            return;
        }
        
        CalculatorErrorDescription_html.innerHTML = "";
    }
    else
    {
        EV_html.innerHTML = evResult;
        winning_html.innerHTML = probabilitiesResult + '%';
        CalculatorErrorDescription_html.innerHTML = "Value enter is not number."
    }
}

