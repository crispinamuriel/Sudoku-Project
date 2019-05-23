let puzzle = [[ 8,9,5,   7,4,2,   1,3,6 ],
              [ 2,7,1,   9,6,3,   4,8,5 ],
              [ 4,6,3,   5,8,1,   7,9,2 ],

              [ 9,3,4,   6,1,7,   2,5,8 ],
              [ 5,1,7,   2,3,8,   9,6,4 ],
              [ 6,8,2,   4,5,9,   3,7,1 ],

              [ 1,5,9,   8,7,4,   6,2,3 ],
              [ 7,4,6,   3,2,5,   8,1,9 ],
              [ 3,2,8,   1,9,6,   5,4,7 ]];

function getRow (puzzle, rowIdx) {
  let row = puzzle[rowIdx]
  return row
}

function getColumn (puzzle, columnIdx) {
  let column = []
  for (let i = 0; i < puzzle.length; i++) {
    let el = puzzle[i]
    column.push(el[columnIdx])
  }
  return column
}

function getSection (puzzle, x, y) {
  let section = []
  if(x === 0 && y === 0) {
    for(let i = 0; i < 3; i++) {
      let row = puzzle[i]
      section.push(row[0], row[1], row[2])
    }
  } else if (x === 0 && y === 1) {
    for (let i = 3; i < 6; i++) {
      let row = puzzle[i]
      section.push(row[0], row[1], row[2])
    }
  } else if (x === 0 && y === 2) {
    for (let i = 6; i < 9; i++) {
      let row = puzzle[i]
      section.push(row[0], row[1], row[2])
    }
  } else if (x === 1 && y === 0) {
    for (let i = 0; i < 3; i++) {
      let row = puzzle[i]
      section.push(row[3], row[4], row[5])
    }
  } else if (x === 1 && y === 1) {
    for (let i = 3; i < 6; i++) {
      let row = puzzle[i]
      section.push(row[3], row[4], row[5])
    }
   } else if (x === 1 && y === 2) {
    for (let i = 6; i < 9; i++) {
      let row = puzzle[i]
      section.push(row[3], row[4], row[5])
    }
   } else if (x === 2 && y === 0) {
    for (let i = 0; i < 3; i++) {
      let row = puzzle[i]
      section.push(row[6], row[7], row[8])
    }
   } else if (x === 2 && y === 1) {
    for (let i = 3; i < 6; i++) {
      let row = puzzle[i]
      section.push(row[6], row[7], row[8])
    }
   } else if (x === 2 && y === 2) {
    for (let i = 6; i < 9; i++) {
      let row = puzzle[i]
      section.push(row[6], row[7], row[8])
    }
  }
  return section
}

subSection = getRow(puzzle, 8)
//console.log(getRow(puzzle, 0))
//console.log(getColumn(puzzle, 0))
//console.log(getColumn(puzzle, 8))
//console.log(getSection(puzzle,0,0))
//console.log(getSection(puzzle,1,0))


function includes1to9 (subSection) {
  let oneToNine = [1,2,3,4,5,6,7,8,9]
  let sortedSection = subSection.sort()
  return JSON.stringify(oneToNine)==JSON.stringify(sortedSection)
}

function sudokuIsValid (puzzle) {
  for(let i = 0; i < puzzle.length; i++) {
    if (includes1to9(puzzle[i])) {
      
    } else {
      return false
    }
  }
  return true
}

let p8zzle = [[ 8,9,5,7,4,2,1,3,6 ],
              [ 8,7,1,9,6,3,4,8,5 ],
              [ 4,6,3,5,8,1,7,9,2 ],
              [ 9,3,4,6,1,7,2,5,8 ],
              [ 5,1,7,2,3,8,9,6,4 ],
              [ 6,8,2,4,5,9,3,7,1 ],
              [ 1,5,9,8,7,4,6,2,3 ],
              [ 7,4,6,3,2,5,8,1,9 ],
              [ 3,2,8,1,9,6,5,4,7 ]];

let puzzleCopy = [[ 8,9,5,7,4,2,1,3,6 ],
                  [ 2,7,1,9,6,3,4,8,5 ],
                  [ 4,6,3,5,8,1,7,9,2 ],
                  [ 9,3,4,6,1,7,2,5,8 ],
                  [ 5,1,7,2,3,8,9,6,4 ],
                  [ 6,8,2,4,5,9,3,7,1 ],
                  [ 1,5,9,8,7,4,6,2,3 ],
                  [ 7,4,6,3,2,5,8,1,9 ],
                  [ 3,2,8,1,9,6,5,4,7 ]];


console.log(sudokuIsValid(p8zzle))
console.log(sudokuIsValid(puzzleCopy))
