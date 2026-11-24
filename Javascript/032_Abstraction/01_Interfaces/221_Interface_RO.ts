interface Point{
    readonly x: number;
    readonly y: number;
}

const point: Point = {
    x: 10,
    y: 20
}

console.log(point);

//point.x  = 15; Willn't work because x is readonly
console.log(point);

