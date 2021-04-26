let figures = [
    { color: 'black', width: 3, height: 4 },
    { color: 'black', width: 2, height: 3 },
    { color: 'black', width: 4, height: 5 },
    { color: 'red', width: 3, height: 6 },
    { color: 'red', width: 4, height: 8 },
];


let hasColor = c => r => r.color == c;

function hasColor(c){
    return function(r){
        return r.color == c;
    }
}