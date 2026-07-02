<script setup>
</script>
<template>
   <nav class="navbar navbar-expand-lg bg-blue-700 md:bg-indigo-900 px-4 py-4">
        <ul class="navbar-nav gap-4 list-unstyled m-0 mx-auto">
            <li><router-link class="nav-link-custom" to="/perfil"><strong>Perfil</strong></router-link></li>
            <li><router-link class="nav-link-custom" to="/estudios"><strong>Estudios</strong></router-link></li>
            <li><router-link class="nav-link-custom" to="/tecnologuias"><strong>Tecnologías</strong></router-link></li>
            <li><router-link class="nav-link-custom" to="/habilidades"><strong>Habilidades</strong></router-link></li>
        </ul>
    </nav>

  <router-view/>
</template>

<style scoped>
router-view{
    display: block;
    padding-top: 80px;
}
.nav-link-custom{
    color: white;
    text-decoration:none;
}
</style>
