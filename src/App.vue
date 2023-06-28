<template>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <div class="w-100">
      <nav>
        <ul class="d-flex justify-content-center"> 
       <li class="nav-item"><router-link to="/" class="router-link-nav">Home</router-link></li>
        <li class="nav-item"><router-link to="/marca/lista" class="router-link-nav">Marca</router-link></li>
        <li class="nav-item"><router-link to="/modelo/lista" class="router-link-nav">Modelo</router-link></li>
        <li class="nav-item"><router-link to="/veiculo/lista" class="router-link-nav">Veiculo</router-link></li>
        <li class="nav-item"><router-link to="/condutor/lista" class="router-link-nav">condutor</router-link></li>
        <li class="nav-item"><router-link to="/movimentacao/lista" class="router-link-nav">Movimentação</router-link></li>
        <li class="nav-item"><router-link to="/configuracao/lista" class="router-link-nav">Configuração</router-link></li>
      </ul>
      </nav>


    </div>
  
  
  <router-view/>
  
</template>

<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(13,38,55);
}

nav {
  background-color: rgb(13,38,55);
  padding: 30px;
  
  a {
    font-size:small;
    color: white;


    &.router-link-exact-active {
      color: #42b983;
    }
    
  }

  li { padding-left:  20px;}
  
}
</style>
