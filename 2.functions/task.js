function getArrayParams(...arr) {
    let min = Infinity;
    let max = -Infinity;
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
         min = Math.min(arr[i],min);
         max = Math.max(arr[i],max);
    }
    sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    let result = (sum / arr.length).toFixed(2);
    let avg = +result;

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
    let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sum;
}

function differenceMaxMinWorker(...arr) {
    let min = Infinity;
    let max = -Infinity;
    for(let i = 0; i < arr.length; i++){
        min = Math.min(arr[i],min);
        max = Math.max(arr[i],max);
    }
    if(min == Infinity){
    min = 0;
    }
    if(max == -Infinity){
    max = 0;
    }
    let dif = max - min;
    return dif;
}

function differenceEvenOddWorker(...arr) {
    let sumEvenElement = 0;
    let sumOddElement = 0;
    for (let i = 0; i < arr.length; i++){
        if(arr[i] % 2 == 0){
        sumEvenElement += arr[i];
        }
        else{
        sumOddElement += arr[i];
        }
    }

    let dif = sumEvenElement - sumOddElement;
    return dif;
}

function averageEvenElementsWorker(...arr) {
    let sumEvenElement = 0;
    let countEvenElement = 0;
    for (let i = 0; i < arr.length; i++){
        if(arr[i] % 2 == 0){
        sumEvenElement += arr[i];
        countEvenElement++;
        }
    }
    let result = 0
    if (countEvenElement == 0){
        result = 0;
    }
    else
    {
    result = sumEvenElement / countEvenElement;
    }
    return result;
}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = 0;
	for (let i = 0; i < arrOfArr.length; i++) {
        let result = func(...arrOfArr[i]);
		if (maxWorkerResult < result) {
			maxWorkerResult = result;
		}
	}
	return maxWorkerResult;
}