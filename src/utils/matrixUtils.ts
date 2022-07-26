export const createMatrix = (nRows: number, nElements: number) => {
  const matrix = Array.from(Array(nRows), () => {
    const rows = Array.from(Array(nElements), () =>
      Math.floor(Math.random() * 100)
    );

    return rows;
  });

  return matrix;
};

export const transposeMatrix = (matrix: number[][]) => {
  return matrix[0].map((el, idx) => matrix.map((el: any) => el[idx]));
};

export const triangularizeMatrix = (matrix: number[][]) => {
  // const result = [...matrix];
  // result.map((row, idx) => row.fill(0, idx, row.length));
  // return result;
  return matrix.map((row, idx) => {
    return row.map((el, index) => {
      if (index + 1 > row.length - idx) {
        return 0;
      } else {
        return el;
      }
    })
  })
};

export const findClosestNumber = (matrix: number[][], n: number) => {
  const result = {
    initialNumber: n,
    row: 0,
    column: 0,
    closestNumber: 9999,
    deviation: 0
  };

  matrix.map((row, rowIdx) => {
    return row.reduce((prev, next, colIdx) => {
      if (Math.abs(n - next) < Math.abs(n - prev)) {
        result.row = rowIdx + 1;
        result.column = colIdx + 1;
        result.closestNumber = next;
        return next;
      }
      return prev;
      
    }, result.closestNumber);
  });
  
  result.deviation = Math.abs(result.closestNumber - n);

  return result;
};

export const reverseMatrix = (matrix: number[][]) => {
  return matrix.map((row) => {
    return row.map((el, idx) => row[row.length - idx - 1])
  })
}