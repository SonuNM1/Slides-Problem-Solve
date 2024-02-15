
// Input: DECIMAL AND PERCENTAGE VALUE OF A RATIO

// Output: <span style = "color:blue">**<Primary>DECIMAL AND PERCENTAGE VALUE OF A RATIO</Primary>**</span>


function titleHighlightSlides(text) {
    return text.split('\n').map(function (line) {
        var output =""
        if(line.startsWith('##')){
            const heading = line.replace('##', '').trim() ;
            output += `<span style = "color:blue">**<Primary>${heading}</Primary>**</span>\n`;
        }
        else{
            output = line;
        }
        return output;
    }).join('\n');
}