const { list, edit, remove, add, find } = require('./utils')

const st1 = {
    name: "mauro1",
    phone: "40028922",
    email: "email@email.com",
}
const st2 = {
    name: "caio",
    phone: "40028922",
    email: "email@email.com",
}
const st3 = {
    name: "shuga",
    phone: "40028922",
    email: "email@email.com",
}

const greeting = `\nOlá! Bem vindo ao gerenciador de alunos.\nComandos:\n1-Listar alunos;\n2-Adicionar aluno;\n3-Remover aluno;\n4-Editar aluno;\n5-Procurar pessoas;\n6-Sair`


// Variables
const students = [st1, st2, st3]

function askQuestion(query) {
    const readline = require('node:readline').createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false
    })

    return new Promise(resolve => readline.question(query, answer => {
        readline.close()
        resolve(answer)
    }))

}

async function main() {
    let running = true
    let name;
    let phone;
    let email;

    while (running) {
        console.log(greeting + `\n`)
        let choice = await askQuestion('Insira seu input:\n')
        console.log(`\n`)

        switch (Number(choice)) {
            case 1:
                list(students)
                break
            case 2:
                name = await askQuestion('Dê um nome de usuário:\n')
                phone = await askQuestion('Insira o telefone do usuário:\n')
                email = await askQuestion('Insira o email do usuário:\n')
                
                add({ name, phone, email }, students)
                console.log(`\n`)
                console.log("Usuário inserido com sucesso!")
                break
            case 3:
                name = await askQuestion('Digite o nome do usuário para excluir:\n')
                remove(name, students)
                console.log(`\n`)
                console.log("Usuário removido com sucesso!")
                break
            case 4:
                break
            case 5:
                break
            case 6:
                running = false
                console.log("Obrigado até a próxima!")
                break
            default:
                console.log("Escolha uma opção válida!")
        }
    }
}

main()