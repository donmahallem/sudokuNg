import {
    SudokuField,
    FieldInternal,
    FieldInternalRow,
    ValidCoordinate,
    ValidValue
} from './sudoku-field';
import { SudokuError } from './sudoku-error';
export class SudokuValidatorError extends SudokuError {

    constructor(public readonly x: number, public readonly y: number, msg: string) {
        super(msg);
        this.name = 'SudokuValidatorError';
    }
}

export class SudokuValidatorRowError extends SudokuValidatorError {

    constructor(public readonly x: number, public readonly y: number, msg?: string) {
        super(x, y, msg ? msg : 'Duplicate in row: ' + y);
        this.name = 'SudokuValidatorRowError';
    }

}
export class SudokuValidatorColumnError extends SudokuValidatorError {

    constructor(public readonly x: number, public readonly y: number, msg?: string) {
        super(x, y, msg ? msg : 'Duplicate in column: ' + y);
        this.name = 'SudokuValidatorColumnError';
    }

}
export interface SudokuValidatorResult {
    valid: boolean;
    errors?: SudokuValidatorError[];
}
type ValuePosition = { x: ValidCoordinate, y: ValidCoordinate, v: ValidValue };
type NumberMap = Map<number, ValuePosition[]>;
export class SudokuValidator {

    public static validate(field: SudokuField): SudokuValidatorResult {
        return undefined;
    }

    public static checkLines(field: FieldInternal): SudokuValidatorError[] {
        const errors: SudokuValidatorError[] = [];
        const mm = (m: NumberMap) => {
            return Array.from(m.values())
                .filter((val: ValuePosition[]) => {
                    return val.length > 1;
                })

        };
        field.map((val: FieldInternalRow, colIdx: number) => {
            return val.reduce((prev: NumberMap, cur: number, rowIdx: number): NumberMap => {
                if (!prev.has(cur)) {
                    prev.set(cur, []);
                }
                prev.get(cur).push({
                    x: colIdx,
                    y: rowIdx,
                    v: cur
                });
                return prev;
            }, new Map())
        })
        return errors;
    }
}
