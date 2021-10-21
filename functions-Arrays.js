// exersice 1 using (map) function

const rectangles = [
    {height : 10, width : 20},
    {height : 20, width : 30},
    {height : 30, width : 40},
]

function CalculateSize(rectangle) {
const NewRectangle = {
    height : rectangle.height,
    width : rectangle.width,
    finalSize : rectangle.height * rectangle.width,
}
return NewRectangle
}

const result = rectangles.map(CalculateSize)
console.log(result)





// exercise 2 using (map) function also

const rectangles = [
    {height : 10, width : 20},
    {height : 20, width : 30},
    {height : 30, width : 40},
]

function CalculateSize(rectangle) {
    const NewRectangle = {
        finalSize : rectangle.height * rectangle.width
    }
    return(NewRectangle)
}

const result = rectangles.map(CalculateSize)
console.log(result)





// exercise 3 using (filter) function

const arrayOfNumbers = [3,5,8,1,0,9,10]

function GreaterThan4 (num) {
    return num > 4
}

const filterGreaterThan4 = arrayOfNumbers.filter(GreaterThan4)
console.log(filterGreaterThan4)





// exercise 4 using (filter) function also

const rectangles = [
    {height : 5, width : 10, size : 50,},
    {height : 10, width : 20, size : 200,},
    {height : 20, width : 30, size : 600,},
    {height : 30, width : 40, size : 1200,},
]

function rectanglesGreateThan200 (rectangle){
    return rectangle.size > 200
}

const filterRectanglesGreateThan200 = rectangles.filter(rectanglesGreateThan200)
console.log(filterRectanglesGreateThan200)





// exercise 5 using (find) function

 const rectangles = [
     {height : 5, width : 10, size : 50,},
     {height : 10, width : 20, size : 200,},
     {height : 20, width : 30, size : 600,},
     {height : 30, width : 40, size : 1200,},
 ]

 function RectangleSize200(rectangle){
     return rectangle.size === 200
 }

 const findRectangleSize200 = rectangles.find(RectangleSize200)
 console.log(findRectangleSize200)





// exercise 6 using (every) function

  const rectangles = [
      {height : 5, width : 10, size : 50,},
      {height : 10, width : 20, size : 200,},
      {height : 20, width : 30, size : 600,},
      {height : 30, width : 40, size : 1200,},
  ]

  function rectanglesEqual200(rectangle){
      return rectangles.size === 200
  }

  const doesAllTherectanglesEqual200 = rectangles.every(rectanglesEqual200)
  console.log(doesAllTherectanglesEqual200)





//   exercise 7 using (sort) function 

const rectangles = [
    {height : 30, width : 40, size : 1200,},
    {height : 5, width : 10, size : 50,},
    {height : 20, width : 30, size : 600,},
    {height : 10, width : 20, size : 200,},
]

function getRectanglesSize (rectangle1, rectangle2){
    return rectangle1.size - rectangle2.size
}

const sortTheRectanglesBySize = rectangles.sort(getRectanglesSize)
console.log(sortTheRectanglesBySize)


