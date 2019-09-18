export interface SudokuValidatorResultError {
    column: number;
    row: number;
}

export interface SudokuValidatorResult {
    valid: boolean;
    errors?: SudokuValidatorResultError[];
}
type SudokuFieldValue = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type Row = Tuple<SudokuFieldValue, 9>;
type Columns = Tuple<Row, 9>;
type Field = Columns;

export class SudokuValidator {

    public static validate(field: Field): SudokuValidatorResult {
        return undefined;
    }

    public static checkLines(field: Field, y: number): SudokuValidatorResultError[] {
        const errors: SudokuValidatorResultError[] = [];
        let column: SudokuFieldValue[] = [];
        let row: SudokuFieldValue[] = [];
        for (let i = 0; i < 9; i++) {
            row = [];
            column = [];
            for (let j = 0; j < 9; j++) {
                if (column.includes(field[i][j])) {
                    errors.push({
                        column: j,
                        row: i,
                    });
                }
                if (row.includes(field[j][i])) {
                    errors.push({
                        column: i,
                        row: j,
                    });
                }
                row.push(field[j][i]);
                column.push(field[i][j]);
            }
        }
        return errors;
    }
}

const a: Field = [[1, 2, 3, 4, 5, 6, 7, 8, 9],
[1, 2, 3, 4, 5, 6, 7, 8, 9],
[1, 2, 3, 4, 5, 6, 7, 8, 9],
[1, 2, 3, 4, 5, 6, 7, 8, 9],
[1, 2, 3, 4, 5, 6, 7, 8, 9],
[1, 2, 3, 4, 5, 6, 7, 8, 9],
[1, 2, 3, 4, 5, 6, 7, 8, 9],
[1, 2, 3, 4, 5, 6, 7, 8, 9],
[1, 2, 3, 4, 5, 6, 7, 8, 9]];
