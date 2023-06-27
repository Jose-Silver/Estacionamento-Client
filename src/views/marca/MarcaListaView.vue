<template>
    <div class="container">
        <div class="mt-5">
            <div class="container text-end d-flex justify-content-end">
                <router-link to="/forms-marca">
                    <button class="btn btn-primary" type="button">Cadastrar</button>
                </router-link>
            </div>
            <div class="container text-center">
                <table class="table table-sm mt-4">
                    <thead class="text-menor">
                        <tr>
                            <th>#</th>
                            <th>Ativo</th>
                            <th>Nome</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>true</td>
                            <td>Chevrolet</td>
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