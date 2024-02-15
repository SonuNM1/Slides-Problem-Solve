/* Input: 

**Illustration 1:** Salaries of Rajesh and Sunil are in the ratio of  $ 2: 3 $ . If the salary of each one is increased by ₹ 4000 the new ratio becomes  $ 40: 57 $ . What is Sunil's present salary?

(a) ₹ 17000

(b) ₹ 20000

(c) ₹ 25500

(d) None of these */



function leftAlignContent(text){
         
    const regexOption = /^\([d]\)/ ;
    const regexQuestion = /^\d+\./ ;
    
    const lines = text.split('\n') ; 
    let output = '' ; 
    
    lines.forEach(line => {
        if(regexQuestion.test(line)){
            output += '<div style = "text-align: left;">\n \n';
        }
        output += line + '\n' ; 
        if(regexOption.test(line)){
            output += '\n</div>\n' ; 
        }
    });
    return output ; 
}