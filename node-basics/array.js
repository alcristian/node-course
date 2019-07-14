var grades = [100,50,77,88,555];
var totalgrades = 0;
var gradesLength = 0 ;

function mediagrades(grades){
    
    grades.forEach(function(x){
        totalgrades += x;
    });

    result = totalgrades / grades.length;
    return result;
};

console.log(mediagrades(grades));
