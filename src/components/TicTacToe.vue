<script>
const X_SIZE = 50, O_SIZE = 50, BOARD_SIZE = 450;
const CELL_SIZE = BOARD_SIZE / 3;

var canvas;
var cx;

export default {
    data() {
        return {
            isX: true,
            winner: 0,
            gameTable: [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
            movesCount: 0
        };
    },
    methods: {
        restartGame() {
            this.isX = true;
            this.winner = 0;
            this.gameTable = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
            this.movesCount = 0;

            cx.clearRect(0, 0, canvas.width, canvas.height);

            cx.strokeStyle = "black";
            cx.lineWidth = 5;

            const getCursorPosition = (canvas, event) => {
                const rect = canvas.getBoundingClientRect()
                const x = event.clientX - rect.left
                const y = event.clientY - rect.top
                return { x, y };
            }
            this.drawTable();
            canvas.addEventListener('mousedown', (e) => {

                const cursorPos = getCursorPosition(canvas, e);
                const rowNum = Math.floor(cursorPos.y / 150);
                const colNum = Math.floor(cursorPos.x / 150);

                if (this.gameTable[rowNum][colNum] == 0 && !this.winner) { // check if the cell is already marked in this game
                    if (this.isX) {
                        this.drawX(colNum * 150 + CELL_SIZE / 2, rowNum * 150 + CELL_SIZE / 2);
                        this.gameTable[rowNum][colNum] = 1;
                    }
                    else {
                        this.drawO(colNum * 150 + CELL_SIZE / 2, rowNum * 150 + CELL_SIZE / 2);
                        this.gameTable[rowNum][colNum] = 2;
                    }

                    this.movesCount++; // + 1 move done

                    if (this.checkWinner(this.gameTable)) {
                        if (this.isX) {
                            this.winner = 1;
                        }
                        else {
                            this.winner = 2;
                        }
                    }
                    else if (this.movesCount == 9) { // Tie condition
                        this.winner = 3;
                    }
                    this.isX = !this.isX;
                }
            })
        },
        drawLine(xBegin, yBegin, xEnd, yEnd) {
            cx.beginPath();
            cx.moveTo(xBegin, yBegin);
            cx.lineTo(xEnd, yEnd);
            cx.closePath();
            cx.stroke();
        },
        drawTable() {
            this.drawLine(CELL_SIZE, 0, CELL_SIZE, BOARD_SIZE);
            this.drawLine(CELL_SIZE * 2, 0, CELL_SIZE * 2, BOARD_SIZE);
            this.drawLine(0, CELL_SIZE, BOARD_SIZE, CELL_SIZE);
            this.drawLine(0, CELL_SIZE * 2, BOARD_SIZE, CELL_SIZE * 2);
        },
        drawX(x, y) {
            const XHALFSIZE = X_SIZE / 2;
            cx.beginPath();
            cx.moveTo(x - XHALFSIZE, y - XHALFSIZE);
            cx.lineTo(x + XHALFSIZE, y + XHALFSIZE);
            cx.moveTo(x - XHALFSIZE, y + XHALFSIZE);
            cx.lineTo(x + XHALFSIZE, y - XHALFSIZE);
            cx.closePath();
            cx.stroke();
        },
        drawO(x, y) {
            const OHALFSIZE = O_SIZE / 2;
            cx.beginPath();
            cx.ellipse(x, y, OHALFSIZE, OHALFSIZE, 0, 0, 2 * Math.PI);
            cx.closePath();
            cx.stroke();
        },
        checkWinner(gameTable) {
            let isWinner = false;

            function check3ElemArray(ar) {
                if (ar[0] == ar[1] && ar[1] == ar[2] && ar[0] != 0) {
                    return true;
                }
                return false;
            }

            for (let i = 0; i < 3; i++) {
                const row = gameTable[i];
                if (check3ElemArray(row)) {
                    isWinner = true;
                    this.drawLine
                        (
                            0,
                            i * CELL_SIZE + CELL_SIZE / 2,
                            BOARD_SIZE,
                            i * CELL_SIZE + CELL_SIZE / 2
                        );
                }
            } // check all rows
            for (let i = 0; i < 3; i++) {
                const col = [gameTable[0][i], gameTable[1][i], gameTable[2][i]];
                if (check3ElemArray(col)) {
                    isWinner = true;
                    this.drawLine
                        (
                            i * CELL_SIZE + CELL_SIZE / 2,
                            0,
                            i * CELL_SIZE + CELL_SIZE / 2,
                            BOARD_SIZE
                        );
                }
            } // check all cols
            if (check3ElemArray([gameTable[0][0], gameTable[1][1], gameTable[2][2]])) {
                isWinner = true;
                this.drawLine
                    (
                        0,
                        0,
                        BOARD_SIZE,
                        BOARD_SIZE
                    );
            } // check 1st diagonal
            if (check3ElemArray([gameTable[2][0], gameTable[1][1], gameTable[0][2]])) {
                isWinner = true;
                this.drawLine
                    (
                        0,
                        BOARD_SIZE,
                        BOARD_SIZE,
                        0
                    );
            } // check 2nd diagonal
            return isWinner;
        }
    },
    mounted() {
        canvas = document.querySelector('canvas');
        cx = canvas.getContext("2d")
        this.restartGame();
    }
};
</script>

<template>
    <div class="wrapper">
        <canvas width="450" height="450"></canvas>
        <div v-if="winner == 0 && isX">
            <h1 class="info">Player 1 move</h1>
        </div>
        <div v-if="winner == 0 && !isX">
            <h1 class="info">Player 2 move</h1>
        </div>
        <div v-if="winner == 1">
            <h1 class="info">Player 1 Wins!</h1>
        </div>
        <div v-if="winner == 2">
            <h1 class="info">Player 2 Wins!</h1>
        </div>
        <div v-if="winner == 3">
            <h1 class="info">Tie!</h1>
        </div>
        <div v-if="winner">
            <button class="restartGameButton" @click="restartGame">Restart</button>
        </div>
    </div>
</template>

<style>
.wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.info {
    color: #111;
    font-family: 'Open Sans', sans-serif;
    font-size: 30px;
    font-weight: 300;
    line-height: 32px;
    margin: 20 0;
    text-align: center;
}

.restartGameButton {
    color: #111;
    font-family: 'Open Sans', sans-serif;
    font-size: 30px;
    font-weight: normal;
    line-height: 48px;
    margin: 0;
}
</style>
