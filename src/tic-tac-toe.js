class TicTacToe {
    constructor() {
        this.currentPlayer = 'x';
        this.gameField = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
        this.gameWinner = null;
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.gameField[rowIndex][columnIndex]) {
            return;
        }
        this.gameField[rowIndex][columnIndex] = this.currentPlayer;
        this.currentPlayer = this.currentPlayer == 'x' ? 'o' : 'x';
        let sum;
        let gameEND = false;
        for (let i = 0; i < 3; i++) {
            sum = this.gameField[i][0];
            gameEND = this.gameField[i].every(one => one == sum);
            if (gameEND) break;
            sum = this.gameField[0][i];
            gameEND = this.gameField.every(arr => arr[i] == sum);
            if (gameEND) break;
        }
        if (this.noMoreTurns()) {
            this.gameWinner = 'draw';
        }
        if (!gameEND) {
            sum = this.gameField[1][1];
            gameEND = this.gameField.every((arr, i) => arr[i] == sum) || this.gameField.every((arr, i) => arr[2 - i] == sum);
        }
        if (gameEND) {
            this.gameWinner = sum;
            return;
        }
    }

    isFinished() {
        return !!this.gameWinner;
    }

    getWinner() {
        return this.gameWinner == 'draw' ? null : this.gameWinner;
    }

    noMoreTurns() {
        return this.gameField.every(arr => arr.every(one => one !== null));
    }

    isDraw() {
        return this.gameWinner == 'draw';
    }

    getFieldValue(rowIndex, colIndex) {
        return this.gameField[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
