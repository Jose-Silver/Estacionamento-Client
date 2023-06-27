<template>
    <div class="container">
        <div class="mt-5">
            <div class="container text-end d-flex justify-content-end">
                <router-link to="/forms-veiculo">
                    <button class="btn btn-primary" type="button">Cadastrar</button>
                </router-link>
            </div>
            <div class="container text-center">
                <table class="table table-sm  mt-4">
                    <thead class="text-menor">
                        <tr>
                            <th>#</th>
                            <th>Ativo</th>
                            <th>Placa</th>
                            <th>ModeloId</th>
                            <th>Cor</th>
                            <th>Tipo</th>
                            <th>Ano</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>true</td>
                            <td>CBN-0005</td>
                            <td>1</td>
                            <td>branco</td>
                            <td>Carro</td>
                            <td>1996</td>
                            <th class="d-flex align-items-center justify-content-center gap-2">
                                <button class="btn btn-outline-danger "><i class="bi bi-trash-fill">excluir</i></button>
                                <button class="btn btn-outline-primary"><i class="bi bi-pencil-fill ">editar</i></button>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>


<script lang="ts">

import { defineComponent } from 'vue';
import NavBar from '@/components/NavBar.vue'; // @ is an alias to /src
import { Veiculo } from '@/models/veiculo';
import VeiculoClient from '@/client/veiculo.client';

export default defineComponent({
  name: 'VeiculoListaView',
  data() {
    return {
      veiculosList: new Array<Veiculo>(),
    };
  },
  components: {
    NavBar,
  },
  mounted(){
    this.findAll();
  },

  methods:{

    findAll(){
      VeiculoClient.listAll().then(sucess =>{
            console.log("OI")
            this.veiculosList =sucess
        })
        .catch(error =>{
          console.log(error)
        })
    }
  }

});
</script>

<style lang="scss">
.text-menor {
    font-size: 14px;
}
</style>