export const createMatrix = (nRows?: number, nElements?: number) => {
  const matrix = Array.from(Array(nRows), () => {
    const rows = Array.from(Array(nElements), () =>
      Math.floor(Math.random() * 100)
    );

    return rows;
  });

  return matrix;
};

export const refactorMatrix = (matrix: number[][]) => matrix.map((el, idx) => matrix.map((el: any) => el[idx]));

export const sortMatrix = (matrix: number[][]) => matrix.map(rowEl => Array.from(rowEl).sort()).sort((a, b) => a[0] - b[0])

export const triangularizeMatrix = (matrix: number[][]) => {
  return matrix.map((row, idx) => {
    return row.map((el, index) => {
      if (index < row.length - (row.length - idx - 1)) {
        return el;
      } else {
        return 0;
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
    return row.reduce((acc, item, colIdx) => {
      if (Math.abs(n - item) < Math.abs(n - acc)) {
        result.row = rowIdx + 1;
        result.column = colIdx + 1;
        result.closestNumber = item;
        return item;
      }
      return acc;
      
    }, result.closestNumber);
  });
  
  result.deviation = Math.abs(result.closestNumber - n);

  return result;
};

export const horizontallyReverseMatrix = (matrix: number[][]) => {
  return matrix.map((row) => {
    return row.map((el, idx) => row[row.length - idx - 1])
  })
}

export const verticallyReverseMatrix = (matrix: number[][]) => {
  return matrix.map((row, idx) => matrix[matrix.length - idx - 1]);
}

export const transposeMatrixClockwise = (matrix: number[][]) => {
  const refactoredMatrix = refactorMatrix(matrix);
  return horizontallyReverseMatrix(refactoredMatrix);
} 
export const transposeMatrixCounterClockwise = (matrix: number[][]) => {
  const refactoredMatrix = refactorMatrix(matrix);
  return verticallyReverseMatrix(refactoredMatrix);
} 