export class SudokuError extends Error {
    constructor(msg: string) {
        super(msg);
        this.name = 'SudokuError';
    }
}