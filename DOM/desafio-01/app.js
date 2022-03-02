new Vue({
    el: '#desafio',
    data: {
        nome: 'Jhonatan',
        idade: 28,
        imagem: 'http://files.cod3r.com.br/curso-vue/vue.jpg'
    },
    methods: {
        idadeVezes3() {
            return this.idade * 3
        },
        random() {
            return Math.random()
        }
    }
})