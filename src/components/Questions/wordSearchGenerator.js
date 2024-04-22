const wordSearchGenerator = {
    generateGrid: (correctAnswers) => {
      const gridSize = Math.ceil(Math.sqrt(correctAnswers.length));
      const grid = Array.from({ length: gridSize }, () => Array(gridSize).fill(''));
  
      correctAnswers.forEach((answer, index) => {
        const rowIndex = Math.floor(index / gridSize);
        const colIndex = index % gridSize;
        grid[rowIndex][colIndex] = answer;
      });
  
      return grid;
    },
  
    // Add more word search generation functions here
  };

  export default wordSearchGenerator;