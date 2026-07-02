<template>
    <div class="h-48 flex flex-wrap">
        <div class="rounded border border-primary p-3 pl-2 m-2 bg-purple-500 bg-opacity-100">
            <h1><strong>FRONTEND</strong></h1>
            <div class="flex flex-wrap gap-3">
            <div class="mi-card card border-success mb-3" style="width: 18rem;">
                <img class="card-img-top" src="/src/assets/img/Vue.jpg" alt="Card image cap">
                <div class="card-body">
                    <strong><p class="card-text">VUE</p></strong>
                </div>
            </div>
            <div class="mi-card card border-success mb-3" style="width: 18rem;">
                <img class="card-img-top" src="/src/assets/img/html.jpg" alt="Card image cap">
                <div class="card-body">
                    <strong><p class="card-text">HTML</p></strong>
                </div>
            </div>
            <div class="mi-card card border-success mb-3" style="width: 18rem;">
                <img class="card-img-top" src="/src/assets/img/css.jpg" alt="Card image cap">
                <div class="card-body">
                    <strong><p class="card-text">CSS</p></strong>
                </div>
            </div>
            <div class="mi-card card border-success mb-3" style="width: 18rem;">
                <img class="card-img-top" src="/src/assets/img/js.jpg" alt="Card image cap">
                <div class="card-body">
                    <strong><p class="card-text">JavaScript</p></strong>
                </div>
            </div>
            </div>
        </div>
        <div class="rounded border border-primary p-3 pt-3 pl-2 m-2 bg-purple-500 bg-opacity-100">
            <h1><strong>BACKEND</strong></h1>
            <div class="flex flex-wrap gap-3">
            <div class="mi-card card border-success mb3" style="width: 18rem;">
                <img class="card-img-top" src="/src/assets/img/cshart.jpg" alt="Card image cap">
                <div class="card-body">
                    <strong><p class="card-text">C#</p></strong>
                </div>
            </div>
            <div class="mi-card card border-success mb-3" style="width: 18rem;">
                <img class="card-img-top" src="/src/assets/img/sqlServer.jpg" alt="Card image cap">
                <div class="card-body">
                    <strong><p class="card-text">SQLServer</p></strong>
                </div>
            </div>
            <div class="mi-card card border-success mb-3" style="width: 18rem;">
                <img class="card-img-top" src="/src/assets/img/postgresql.jpg" alt="Card image cap">
                <div class="card-body">
                    <strong><p class="card-text">PostgreSQL</p></strong>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.mi-card{
    color: black;
    cursor: pointer;
    transition: 0.3s;
    user-select: none;
}

.mi-card:hover{
    background: #6f9ccd;
    transform: translateY(-2px);
    box-shadow: 0 5px 10px rgba(0,0,0,.2);
}

.mi-card:active{
    transform: translateY(0);
    box-shadow: 0 2px 5px rgba(0,0,0,.2);
}
</style>