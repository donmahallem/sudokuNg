export type ValidCoordinate = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
export type ValidValue = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
export class SudokuField {
    private readonly field: number[][];
    public constructor() {
        this.field = new Array(9).fill(0).map(val => new Array(9).fill(0));
    }
    public getCell(x: ValidCoordinate, y: ValidCoordinate): ValidValue {
        return 0;
    }

    public setCell(x: ValidCoordinate, y: ValidCoordinate, value: ValidValue): void {

    }
}
