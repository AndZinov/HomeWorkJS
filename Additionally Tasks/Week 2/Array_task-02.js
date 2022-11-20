const getMathResult = (expression) => {
    expression[0] = Number(expression[0])
    expression[2] = Number(expression[2])
    let symbol = [">", "<", "=", "+", "-", "*", "/"]
    if(expression.length < 3){ 
        return console.log('Error')
    }else if(!symbol.includes(expression[1])){
            return console.log('Error')
        } else if (expression.length > 3){
            const filterExpression = expression.filter((number) => {
               return !isNaN(Number(number)) || symbol.includes(number)
            })
            expression.splice(0,expression.length)
            filterExpression.forEach((el) => expression.push(el));
        }
    switch (expression[1]){
        case '>': 
         return console.log(expression[0] > expression[2]);
         case '<': 
         return console.log(expression[0] < expression[2]);
         case '=': 
         return console.log(expression[0] === expression[2]);
         case '+': 
         return console.log(expression[0] + expression[2]);
         case '-': 
         return console.log(expression[0] - expression[2]);
         case '*': 
         return console.log(expression[0] * expression[2]);
         case '/': 
         return console.log(expression[0] / expression[2]);
    }
}

getMathResult(['6', '>', 4, 'fgfg', 'dfdfd' ])
getMathResult(['200', '+', 300]); // 500
getMathResult(['20', '-', '5']); // 15
getMathResult([100, '/', 100]); // 1
getMathResult([2, '-', 2]); // 0
getMathResult(['5', '>', '10']); // false
getMathResult(['5', '<', '10']); // true
getMathResult(['1', '=', 1]); // true
getMathResult(['1', '**', 1]); // 'Ошибка'
getMathResult(['+', '100', 10]); // 'Ошибка'



