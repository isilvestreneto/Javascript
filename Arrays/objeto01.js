let amigo = {
    nome: 'José',
    sexo: 'M',
    peso: '75.0',
    engordar(p=0){
        this.peso += p
    }
}
amigo.engordar();
console.log(`O ${amigo.nome} pesa ${amigo.peso}kg.`)