# Sudoku-Project
Fullstack Bootcamp Prep - Sudoku Project

## Part I
Project - Sudoku
Sudoku is a logic puzzle played on a 9x9 grid subdivided into 9 3x3 subgrids. The player is presented a partially filled puzzle, and must complete it following these rules:

Each column must contain the numbers 1-9 (no repeats!)
Each row must contain the numbers 1-9 (no repeats!)
Each 3x3 subgrid must contain the numbers 1-9 (no repeats!)
If you've never played sudoku before, try an "easy" puzzle from the New York Times' puzzle section.

This is a Bootcamp Prep Project. Projects are for you to work on over the course of the week as you like.

GOAL
The ultimate goal of this project is to create a "sudoku checker". The sudoku checker will be a function that accepts a single sudoku grid (represented by an array of arrays) and returns true if the grid follows the rules above and false if not.

APPROACH
Your final sudoku checker function will be relatively complex. To build it, we're going to write several simple functions that combine to perform a larger complex operation. The concept of building complicated functions by combining simple ones is referred to as function composition).

We know that our final function will need to check whether a given grid follows the three rules above. This provides an excellent "separation of concerns".

SEPARATION OF CONCERNS
Separation of concerns is another programming design principle, which states that a program should be split into distinct sections, such that each section addresses a separate concern.

There are several benefits to writing code with good separation of concerns. First, your code becomes more expressive. When describing the problem of sudoku in plain English, we split the puzzle into three rules. By mirroring that organization, your code becomes easier for you and other developers to interpret.

Second, separation of concerns leads to modular code. With modular code, individual sections can be re-used easily. So if we were tasked with solving a similar problem (such as writing a checker for the sudoku-variant nonomino) we could quickly and easily develop a solution by reusing the code we've already written.

Modular code also allows you to improve or modify one section of code without having to know (or change) the details of other sections. This benefit, and the others listed, will become clearer as you write more, increasingly complex code.

GETTING STARTED
To start, using an empty CodePen or repl.it, write the following functions:

getRow: This function should accept two arguments: a sudoku grid (represented by an array of arrays) and a row index. The function should return an array containing the numbers in the specified row.

getColumn: This function should accept a sudoku grid and a column index. The function should return an array containing the numbers in the specified column.

getGrid: This function should accept three arguments: a sudoku grid, and an x and y coordinate for one of the puzzle's 3x3 subgrids. The function should return an array with all the numbers in the specified subgrid.

Remember that our puzzle is broken into 9 subgrids. In our coordinate system, (0,0) will represent the subgrid in the upper left, (1,0) will represent the upper-middle and so on.

See examples below:

let puzzle = [[ 8,9,5,   7,4,2,   1,3,6 ],
              [ 2,7,1,   9,6,3,   4,8,5 ],
              [ 4,6,3,   5,8,1,   7,9,2 ],

              [ 9,3,4,   6,1,7,   2,5,8 ],
              [ 5,1,7,   2,3,8,   9,6,4 ],
              [ 6,8,2,   4,5,9,   3,7,1 ],

              [ 1,5,9,   8,7,4,   6,2,3 ],
              [ 7,4,6,   3,2,5,   8,1,9 ],
              [ 3,2,8,   1,9,6,   5,4,7 ]];


getRow(puzzle, 8);
// -> [ 3,2,8,1,9,6,5,4,7 ]

getRow(puzzle, 0);
// -> [ 8,9,5,7,4,2,1,3,6 ]

getColumn(puzzle, 0);
// -> [ 8,2,4,9,5,6,1,7,3 ]

getRow(puzzle, 8);
// -> [ 6,5,2,8,4,1,3,9,7 ]

getSection(puzzle, 0, 0);
// -> [ 8,9,5,2,7,1,4,6,3 ]

getSection(puzzle, 1,0);
// -> [ 7,4,2,9,6,3,5,8,1 ]
