<template>
  <div class="componente">
    <h2>As Informações de Usuário</h2>
    <p>Vários detalhes...</p>
    <p>Nome do Usuário: <strong>{{ inverterNome() }}</strong></p>
    <p>Idade do Usuário é: <strong>{{ idade }}</strong></p>

    <!-- <p>Nome do Usuário: <strong>{{ inverterNo)me }}</strong></p> -->
    <button @click="reiniciarNome">Reiniciar Nome</button>
    <button @click="reiniciarFn()">Reiniciar Nome (CallBack)</button>
  </div>
</template>

<script>
export default {
  props: {
    nome: {
      type: String,
      // require: true
      // pode usar default para iria retornar campo vazio o valor adicionado nele mas
      // no UsuarioP você retira o v-bind:nome:nome
      default: "Anonimo",
    },
    reiniciarFn: Function,
    idade: Number,
  },
  methods: {
    inverterNome() {
      return this.nome.split("").reverse().join("");
    },
    reiniciarNome() {
      this.Nome = 'Pedro';
      this.$emit("nomeMudou", this.nome);
    },
  },
};
</script>

<style scoped>
.componente {
  flex: 1;
  background-color: #ec485f;
  color: #fff;
}
</style>
