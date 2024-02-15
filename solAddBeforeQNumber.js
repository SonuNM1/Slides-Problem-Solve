/*
1. (b)  $ x=\frac{2 a b}{a+b} \Rightarrow \frac{x}{a}=\frac{2 b}{a+b} $ 

 
$ \Rightarrow \quad \frac{x+a}{x-a}=\frac{3 b+a}{b-a} $  (componendo di videndo)

Similarly,  $ \frac{x}{b}=\frac{2 a}{a+b} \Rightarrow \frac{x+b}{x-b}=\frac{3 a+b}{a-b} $ */

function solAddBeforeNumSlide(text){
    const regex = /((\d+)\.\s+\([a-z]\))/g;

    text = text.replaceAll(regex,"Sol. $1");

    return text ; 
}