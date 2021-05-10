class ProfitController{

    static countProfit(req, res){
        const saving = req.body.saving;
        const currentValues = req.body.currentValues;
        const futureValues = req.body.futureValues;

        let checkValidation = ProfitController.validation(saving, currentValues, futureValues)

        if(checkValidation.length > 0){
            res.status(400).json({
                errorMsg: checkValidation
            })
        }

        let maxProfit = ProfitController.calculation(saving, currentValues, futureValues) || 0;
    
        if(maxProfit < 0){
            res.status(200).json({maxProfit: 0, msg: "There is no way to make profit"})
        }
        else if(saving < maxProfit ){
            res.status(200).json({maxProfit, msg: "The total invested cannot exceed the funds available"})
        }
        else{
            res.status(200).json({maxProfit: 0})
        }
        
    }

    static calculation(saving, currentValues, futureValues){
        let lengthValues = currentValues.length;

        let allCosts = [] || 0;

        for(let i = 0; i < lengthValues; i++){
            let remain = futureValues[i] - currentValues[i]
            allCosts.push(remain)
        }

        let totalCost = allCosts.reduce((total, next) => {
            return total + next
        })

        return totalCost;
    }

    static validation(saving, currentValues, futureValues){
        let errorMsg = []

        if(!Array.isArray(currentValues) || !Array.isArray(futureValues)){
            errorMsg.push("current value and future value must be array")
        }
        else{
            if(ProfitController.checkNotNumber(currentValues) || ProfitController.checkNotNumber(futureValues)){
                errorMsg.push("current value and future value must be number")
            }
    
            if(ProfitController.containZero(currentValues) || ProfitController.containZero(futureValues)){
                errorMsg.push("currentvalues and futurevalues cannot contain 0")
            }
    
            if(currentValues.length > 100 || futureValues.length > 100 || currentValues.length == 0 || futureValues == 0){
                errorMsg.push("currentvalues and futurevalues contains a minimum of 1 number and a maximum of 100 digits")
            }
    
            if(ProfitController.notInRanged(currentValues) || ProfitController.notInRanged(futureValues)){
                errorMsg.push("currentvalues and futurevalues cannot contain minus value or more than 300 ")
            }
    
            if(!ProfitController.sameSize(currentValues, futureValues)){
                errorMsg.push("currentvalues and futurevalues must contains the same number of digits")
            }
        }

        if(typeof saving !== "number"){
            errorMsg.push("saving must be array of number")
        }
        if(saving < 0 || saving > 30000){
            errorMsg.push("saving must be array of number")
        }

        return errorMsg;
    }

    static checkNotNumber(inputArr) {
        for (let i = 0; i<inputArr.length; i++) {
          if (typeof inputArr[i] !== 'number') {
            return true;
          }
        }
        return false;
    }

    static sameSize(inputArr1, inputArr2){
        return inputArr1.length === inputArr2.length
    }

    static containZero(inputArr) {
        for (let i = 0; i<inputArr.length; i++) {
          if (inputArr[i] == 0) {
            return true;
          }
        }
        return false;
    }

    static notInRanged(inputArr) {
        for (let i = 0; i<inputArr.length; i++) {
          if (inputArr[i] < 0 || inputArr[i] > 300) {
            return true;
          }
        }
        return false;
    }
}

module.exports = ProfitController