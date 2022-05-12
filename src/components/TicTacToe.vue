<script>
export default {
    data() {
        return {
            isX: true,
            gameTable: [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
        };
    },
    mounted() {
        const XSIZE = 50, OSIZE = 50, CELLSIZE = 150;
        const canvas = document.querySelector('canvas')
        var cx = canvas.getContext("2d");
        cx.strokeStyle = "black";
        cx.lineWidth = 5;
        cx.beginPath();
        cx.moveTo(150, 0);
        cx.lineTo(150, 450);
        cx.moveTo(300, 0);
        cx.lineTo(300, 450);
        cx.moveTo(0, 150);
        cx.lineTo(450, 150);
        cx.moveTo(0, 300);
        cx.lineTo(450, 300);
        cx.closePath();
        cx.stroke();
        const getCursorPosition = (canvas, event) => {
            const rect = canvas.getBoundingClientRect()
            const x = event.clientX - rect.left
            const y = event.clientY - rect.top
            return {x, y};
        }

        function drawX(x, y) {
            const XHALFSIZE = XSIZE / 2;
            cx.beginPath();
            cx.moveTo(x - XHALFSIZE, y -  XHALFSIZE);
            cx.lineTo(x + XHALFSIZE, y + XHALFSIZE);
            cx.moveTo(x - XHALFSIZE, y +  XHALFSIZE);
            cx.lineTo(x + XHALFSIZE, y - XHALFSIZE);
            cx.closePath();
            cx.stroke();
        }

        function drawO(x, y) {
            const OHALFSIZE = OSIZE / 2;
            cx.beginPath();
            cx.ellipse(x, y, OHALFSIZE, OHALFSIZE, 0, 0, 2 * Math.PI);
            cx.closePath();
            cx.stroke();
        }

        canvas.addEventListener('mousedown', (e) => {
            const cursorPos = getCursorPosition(canvas, e);
            const rowNum = Math.floor(cursorPos.y / 150);
            const colNum = Math.floor(cursorPos.x / 150);
            console.log(cursorPos.x, cursorPos.y);
            if(this.gameTable[rowNum][colNum] == 0) { // check if the cell is already marked in this game
                if(this.isX) {
                    drawX(colNum * 150 + CELLSIZE / 2, rowNum * 150 + CELLSIZE / 2);
                    this.gameTable[rowNum][colNum] = 1;
                }
                else {
                    drawO(colNum * 150 + CELLSIZE / 2, rowNum * 150 + CELLSIZE / 2);
                    this.gameTable[rowNum][colNum] = 2;
                }
                this.isX = !this.isX;
                console.log(this.isX);
            }
        })
    }
};
</script>

<template>
    <div class="canvasWrapper">
        <canvas width="450" height="450"></canvas>
    </div>
</template>

<style>
.canvasWrapper {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
