class Livro {
    constructor(titulo, autor, ano) {
        this.titulo = titulo
        this.autor = autor
        this.ano = ano
    }

    exibirInformacoes() {
        return `Título: ${this.titulo}, Autor: ${this.autor}, Ano: ${this.ano}`
    }
}

const biblioteca = []

function adicionarLivro(titulo, autor, ano) {
    const livro = new Livro(titulo, autor, ano)
    biblioteca.push(livro)
    console.log(`Livro "${titulo}" adicionado à biblioteca.`)
}

function buscarLivro(titulo) {
    const livroEncontrado = biblioteca.find(livro => livro.titulo.toLowerCase() === titulo.toLowerCase())
    if (livroEncontrado) {
        console.log("Livro encontrado:", livroEncontrado.exibirInformacoes())
    } else {
        console.log("Livro não encontrado.")
    }
}

function listarLivros() {
    if (biblioteca.length === 0) {
        console.log("A biblioteca está vazia.")
    } else {
        console.log("Lista de livros na biblioteca:")
        for (const livro of biblioteca) {
            console.log(livro.exibirInformacoes())
        }
    }
}

function calcularMediaIdade() {
    const anoAtual = new Date().getFullYear()
    if (biblioteca.length === 0) {
        console.log("A biblioteca está vazia. Não é possível calcular a média.")
        return
    }
    const somaIdades = biblioteca.reduce((soma, livro) => soma + (anoAtual - livro.ano), 0)
    const mediaIdade = somaIdades / biblioteca.length
    console.log(`A média de idade dos livros é: ${mediaIdade.toFixed(1)} anos.`)
}

adicionarLivro("O Senhor dos Anéis", "J.R.R. Tolkien", 1954)
adicionarLivro("1984", "George Orwell", 1949)
adicionarLivro("Dom Casmurro", "Machado de Assis", 1899)

listarLivros()
buscarLivro("1984")
calcularMediaIdade()