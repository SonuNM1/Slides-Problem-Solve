
/*Description of Problem: The questions in the file are in the format

1. What is your name? 

2. Write the value of x. 

There are multiple files with each containing on average 20,000 lines of code

The code will add negation(~~) and then enclose the question number(1.) within ** which will make it bold,
which will differentiate it with other content.
*/


function questionNegationBoldFullStop(text){
    const regex = /(^|\n)(\d+\.)\s/g ; 
    text = text.replaceAll(regex, "$1~~\n**$2** ") ; 
    return text ; 
}