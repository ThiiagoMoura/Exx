for (let counter = 1; counter <= 100; counter++)
    if (counter % 3 == 0) {
        let output = ""
        output += "Fizz"
        console.log(output)
    }

    for (let counter2 = 1; counter2 <=100; counter2++)
    if (counter2 % 5 ==0){
       let output2 = ""
       output2 += "Buzz"
       console.log(output2)
        
    }

    for (let counter3 = 1; counter3 <= 100; counter3++)
        if ((counter3 % 3 == 0) || (counter3 % 5 == 0)){
            let output3 = ""
            output3 += "FizzBuzz"
            console.log(output3)
        }