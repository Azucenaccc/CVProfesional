<template>
    <div>
        <table class="table-center">
        <tbody>
            <tr>
                <td>
                    <div class="container">
                        <div class="cube perspective-250">
                            <div class="face top content-center filter"><strong><h1>CV PROFESIONAL</h1></strong></div>
                            <div class="face right border border-black"></div>
                            <div class="face left border border-black"></div>
                        </div>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
    </div>
</template>

<style scoped>
.table-center{
    width: 80%;
    height: 80vh;
    border-collapse: collapse;
}
.table-center td {
    text-align: center;
    vertical-align: middle;
    padding: 250px;
}
.perspective-250{
    perspective: 250px;
}

.perspective-350{
    perspective: 350px;
}

.perspective-500{
    perspective: 500px;
}

.perspective-650{
    perspective: 650px;
}

.container{
    width: 100px;
    height: 100px;
    margin: 2 2 2 2px;
    border: none;
}

.cube{
    width: 100%;
    height: 100%;
    perspective-origin:150% 150%;
    transform-style:preserve-3d;
}

.face{
    display: block;
    position: absolute;
    width: 300px;
    height: 300px;
    border: none;
    line-height: 100px;
    color: white;
    text-align: center;
    backface-visibility: visible;
}

.front{
    background: lime;
    color: black;
    transform: rotateY(180deg) translateZ(50px);
}

.right{
    background: rgb(0 0 196 / 70%);
    transform: rotateY(90deg) translateZ(150px);
}

.left{
    background: rgb(0 0 196 / 70%);
    transform: rotateY(-90deg) translateZ(150px);
}

.top {
background: rgba(45, 45, 36, 0.7);
transform: rotateX(360deg) translateZ(120px);
}
</style>