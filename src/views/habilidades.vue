<template>
    <div class="p-3 m-4 flex gap-4">
        <div class="h-150 w-150 flex flex-col gap-3 items-end">
            <strong><h2>Habilidades Blandas</h2></strong>
            <div class="habil rounded-l-full border border-primary h-39 w-50 flex items-center gap-3 justify-center">
                <img class="rounded-full" src="/src/assets/img/habilidadesG.jpg">
                <strong class="pr-2"><p>Trabajo en Equipo</p></strong>
            </div>
            <div class="habil rounded-l-full border border-primary h-39 w-80 flex items-center gap-3 justify-center">
                <img class="rounded-full" src="/src/assets/img/habilidadesAdaptabilidad.jpg">
                <strong class="pr-2"><p>Adaptabilidad al Cambio</p></strong>
            </div>
            <div class="habil rounded-l-full border border-primary h-39 w-50 flex items-center gap-3 justify-center">
                <img class="rounded-full" src="/src/assets/img/habilidadesManejo.jpg">
                <strong class="pr-3"><p>Resolución de problemas</p></strong>
            </div>
            <div class="habil rounded-l-full border border-primary h-39 w-81 flex items-center gap-3 justify-center">
                <img class="rounded-full" src="/src/assets/img/habilidadesPensamientoCritico.jpg">
                <Strong class="pr-4"><p>Pensamiento Critico</p></Strong>
            </div>
            <div class="habil rounded-l-full border border-primary h-39 w-50 flex items-center gap-3 justify-start">
                <img class="rounded-full" src="/src/assets/img/habilidades2Creatividad.jpg">
                <strong class="pr-2"><p>Creatividad</p></strong>
            </div>
        </div>
        <div class="h-150 w-150 flex gap-3 flex-col">
            <strong><h2>Habilidades Tecnologícas</h2></strong>
            <div class="habil rounded-r-full border border-primary h-39 w-80 flex gap-3 justify-end">
                <strong class="content-center pl-2"><p>Herramientas de Productividad</p></strong>
                <img class="rounded-full" src="/src/assets/img/habilidadesTecno122.jpg">
            </div>
            <div class="habil rounded-r-full border border-primary h-39 w-80 flex justify-end gap-3">
                <strong class="content-center pl-2"><p>Base de Datos</p></strong>
                <img class="rounded-full" src="/src/assets/img/habilidadesTecno1BaseDatos.jpg">
            </div>
            <div class="habil rounded-r-full border border-primary h-39 w-80 flex justify-end gap-3">
                <strong class="content-center pl-2"><p>Programación</p></strong>
                <img class="rounded-full" src="/src/assets/img/habilidadesTecno1Programacion.jpg">
            </div>
            <div class="habil rounded-r-full border border-primary h-39 w-80 flex justify-end gap-2">
                <strong class="content-center pl-2"><p>Desarrollo Web</p></strong>
                <img class="rounded-full" src="/src/assets/img/habilidadesTecnoDesarrollo.jpg">
            </div>
        </div>
    </div>
</template>

<style scoped>
.habil{
    background-color: rgb(70, 67, 67);
    color: white;
    cursor: pointer;
    transition: 0.3s;
    user-select: none;
}

.habil:hover{
background: #0056b3;
transform: translateY(-2px);
box-shadow: 0 5px 10px rgba(0,0,0,.2);
}

.habil:active{
    transform: translateY(0);
    box-shadow: 0 2px 5px rgba(0,0,0,.2);
}

h2{
    color: whitesmoke;
}
</style>