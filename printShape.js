/*
Lab 2 
Moulya Soma Sundara
CWID - 10415052
*/

let printShape = exports = module.exports;


printShape.drawTriangle=input=>{
    try{
        if (input === 0 || input === undefined || !Number.isInteger(input)|| input===null) 
         {
                throw "Please enter an input (input should be non negative number) : ";
         } 
        else 
        {
            console.log(`Printing Triangle of height ${input}`);
            let i=1; 
            do{
                 let string= "";
                for (let j = i; j <= input; j++) 
                {
                    if (j < input)
                        string = string + " ";
                        else if (j == input)
                        string = string + "\/";
                }
                if (i !== 1) 
                {
                    for (let j = 1; j < i; j++) 
                    {
                        if (i != input)
                            string += " " + " ";
                        else
                            string += "-" + "-";
                    }
                }
                i++;
                string += "\\";
                console.log(string);
            } while(i<=input);
        }
    }
    catch(e){
        console.log(e);
    }
} 

console.log("\n");

printShape.drawSquare = input => {
    try{
    if (input < 2 || input === undefined || !Number.isInteger(input)||input===null) {
        throw "Please enter valid numeric, non-zero, non-null input greater than 2 ";
    } 
    else 
    {
        console.log(`Printing Square with ${input} lines`)
        let i=2;
        do
        {
            let string = "";

            string += "|";

            for (let j = 2; j <= input; j++) 
            {
                if (i == 2 || i == input)
                    string += "-";
                else
                    string += " ";
            }
            string += "|";
            console.log(string);
            i++;
        } while(i<=input);
    }
    }
    catch(e){
        console.log(e);
    }
}

console.log("\n");

printShape.drawRhombus = input => {
    try{
    let blankSpace = input / 2;     // varibale to store the number spaces 
    let midblankSpace = 0;       // variable to store the number middle spaces 
    if (input < 2 || input === undefined || !Number.isInteger(input) || input % 2 != 0) {
        throw "Please verify the input either value is invalid or not multiple of 2";
    } 
    else 
    {   
        console.log(`Printing Rhombus with ${input} lines`);
        let i=1;
        do
        {
           
            let string = "";

            if (i <= input / 2) 
            {
                blankSpace--;
                midblankSpace += 2;
            } 
            else if (i > input / 2 + 1) 
            {
                blankSpace++;
                midblankSpace -= 2;
            }

            for (let j = 1; j <= blankSpace; j++)
             {
                string += " ";
             }

            if (i <= input / 2)
                string += "\/";
            else
                string += "\\";

            if (i == 1 || i == input)
                string += "-";
            else
             {
                for (let j = 1; j < midblankSpace; j++)
                    string += " ";
             }

            if (i <= input / 2)
                string += "\\";
            else
                string += "\/";
            i++;
            console.log(string);
        }while(i<=input);
     }
    }
    catch(e){
        console.log(e);
    }
}
printShape.drawTriangle(10);
printShape.drawSquare(10);
printShape.drawRhombus(10);


