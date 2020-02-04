import { SudokuError } from './sudoku-error';

export type ValidCoordinate = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | number;
export type ValidValue = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | number;
export type FieldInternalRow = [number, number, number, number, number, number, number, number, number];
export type FieldInternal = [FieldInternalRow, FieldInternalRow, FieldInternalRow, FieldInternalRow,
    FieldInternalRow, FieldInternalRow, FieldInternalRow, FieldInternalRow, FieldInternalRow];
export class SudokuField {
    public constructor(source?: FieldInternal) {
        if (source) {
            this.field = source;
        } else {
            this.field = [[0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0]]
        }
    }
    private readonly field: FieldInternal;
    public static assertCoordinate(x: ValidCoordinate, y: ValidCoordinate): void {
        if (x < 0 || x > 8 || y < 0 || y > 8) {
            throw new SudokuError('Invalid field: (' + x + ',' + y + ')');
        }
    }
    public static assertValue(value: ValidValue): void {
        if (value < 0 || value > 9) {
            throw new SudokuError('Invalid value for cell: ' + value);
        }
        if (Math.floor(value) !== value) {
            throw new SudokuError('Use only non fractional numbers: ' + value);
        }
    }
    public clear(): void {
        for (let x = 0; x < 9; x++) {
            for (let y = 0; y < 9; y++) {
                this.field[x][y] = 0;
            }
        }
    }
    public getCell(x: ValidCoordinate, y: ValidCoordinate): ValidValue {
        SudokuField.assertCoordinate(x, y);
        return this.field[x][y];
    }
    public setCell(x: ValidCoordinate, y: ValidCoordinate, value: ValidValue): SudokuField {
        SudokuField.assertCoordinate(x, y);
        SudokuField.assertValue(value);
        this.field[x][y] = value;
        return this;
    }
    /** Does create an immutable copy */
    public clone(): SudokuField {
        return new SudokuField();

    }
}
