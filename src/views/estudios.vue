<template>
    <div class="rounded border border-primary p-3 m-4 bg-purple-500 bg-opacity-100">
        <h1><strong>CARRERA</strong></h1>
        <div class="mi-div rounded-full border border-primary p-3 flex items-center gap-4 bg-gradient-to-r to-blue-900">
            <div class="rounded-full h-35 w-35 flex">
                <img src="/src/assets/img/ing.jpg" class="rounded-full">
            </div>
            <p>Ingenieria en Sistemas Computacionales</p>
            <p>2022-2027</p>
        </div>
        <br>
        <h1><strong>CURSOS</strong></h1>
        <div class="mi-div rounded-full border border-primary p-3 flex items-center gap-4 bg-gradient-to-r to-blue-900">
            <div class="rounded-full h-35 w-35 flex">
                <img src="/src/assets/img/cursoJsC.jpg" class="rounded-full">
            </div>
            <p>JavaScript y C#</p>
            <p>2025</p>
        </div>
        <br>
        <div class="mi-div rounded-full border border-primary p-3 flex items-center gap-4 bg-gradient-to-r to-blue-900">
            <div class="rounded-full h-35 w-35 flex">
                <img src="/src/assets/img/nube.jpg" class="rounded-full">
            </div>
            <p>Habilidades en la nube para El Salvador</p>
            <p>2022</p>
        </div>
        <br>
        <div class="mi-div rounded-full border border-primary p-3 flex items-center gap-4 bg-gradient-to-r to-blue-900">
            <div class="rounded-full h-35 w-35 flex">
                <img src="/src/assets/img/it.jpg" class="rounded-full">
            </div>
            <p>IT Essentials</p>
            <p>2021</p>
        </div>
        <br>
        <div class="mi-div rounded-full border border-primary p-3 flex items-center gap-4 bg-gradient-to-r to-blue-900">
            <div class="rounded-full h-35 w-35 flex">
                <img src="/src/assets/img/redes.jpg" class="rounded-full">
            </div>
            <p>CCNAv7: Introducción a redes</p>
            <p>2021</p>
        </div>
    </div>
</template>

<style scoped>
.mi-div{
    color: white;
    cursor: pointer;
    transition: 0.3s;
    user-select: none;
}

.mi-div:hover {
    background: #0056b3;
    transform: translateY(-2px);
    box-shadow: 0 5px 10px rgba(0,0,0,.2);
}

.mi-div:active{
    transform: translateY(0);
    box-shadow: 0 2px 5px rgba(0,0,0,.2);
}
</style>