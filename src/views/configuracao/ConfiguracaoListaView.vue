<template>
    <div class="container">
        <div class="mt-5">
            <div class="container text-end d-flex justify-content-end">
                <router-link to="/forms-configuracao">
                    <button class="btn btn-primary" type="button">Cadastrar</button>
                </router-link>
            </div>
            <div class="container text-center">
                <table class="table table-sm mt-4">
                    <thead>
                        <tr class="text-menor">
                            <th>#</th>
                            <th>Ativo</th>
                            <th>Valor Hora</th>
                            <th>Valor Minuto Multa</th>
                            <th>Inicio Expediente</th>
                            <th>Fim Expediente</th>
                            <th>Tempo Para Desconto</th>
                            <th>Tempo De Desconto</th>
                            <th>Gerar Desconto</th>
                            <th>Vagas Moto</th>
                            <th>Vagas Carro</th>
                            <th>Vagas Van</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>true</td>
                            <td>10</td>
                            <td>2</td>
                            <td>08:00:00</td>
                            <td>20:00:00</td>
                            <td>05:00:00</td>
                            <td>01:00:00</td>
                            <td>sim</td>
                            <td>20</td>
                            <td>5</td>
                            <td>10</td>
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

</script>

<style lang="scss">
.text-menor {
    font-size: 14px;
}
</style>