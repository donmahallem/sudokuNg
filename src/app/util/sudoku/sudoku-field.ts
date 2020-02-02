import { SudokuError } from './sudoku-error';

export type ValidCoordinate = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | number;
export type ValidValue = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | number;
export class SudokuField {
    private readonly field: number[][];
    public constructor() {
        this.field = new Array(9).fill(0).map(val => new Array(9).fill(0));
    }
    public getCell(x: ValidCoordinate, y: ValidCoordinate): ValidValue {
        SudokuField.assertCoordinate(x, y);
        return this.field[x][y];
    }
    public static assertCoordinate(x: ValidCoordinate, y: ValidCoordinate): void {
        if (x < 0 || x > 8 || y < 0 || y > 8) {
            throw new SudokuError("Invalid field: (" + x + "," + y + ")");
        }
    }
    public static assertValue(value: ValidValue): void {
        if (value < 0 || value > 9) {
            throw new SudokuError("Invalid value for cell: " + value);
        }
        if (Math.floor(value) !== value) {
            throw new SudokuError("Use only non fractional numbers: " + value);
        }
    }
    public setCell(x: ValidCoordinate, y: ValidCoordinate, value: ValidValue): void {
        SudokuField.assertCoordinate(x, y);
        SudokuField.assertValue(value);
        this.field[x][y] = value;
    }
}
