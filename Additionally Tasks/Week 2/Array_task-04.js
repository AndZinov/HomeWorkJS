const matrix = [
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7, 8, 9 ],
 ];

//  const oneMatrix = matrix[0].concat(matrix[1], matrix[2]);
//  console.log(oneMatrix)


// console.log([...matrix[0],...matrix[1],...matrix[2]])

const flatArray = matrix.reduce((acc, array) => {
    return [...acc, ...array];
  }, []);
  
  console.log("flatArray", flatArray);