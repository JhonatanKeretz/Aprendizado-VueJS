<template>
    <div class="componente">
        <h2>Alterar os Dados de Usuário</h2>
        <p>Edite as informações</p>
        <p>Idade do Usuário é: <strong>{{ idade }}</strong></p>
        <button @clicl="alterarIdade">Alterar Idade</button>
    </div>
</template>

<script>
export default {
    props: ["Idade"],
  methods: {
      alterarIdade(){
          this.idade = 33
      }
  }
    
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #98b99a;
        color: #fff;
    }
</style>
