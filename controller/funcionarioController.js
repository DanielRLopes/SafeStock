import { Funcionario } from "../model/Funcionario.js";

import {
    cadastrarFuncionario,
    listarFuncionarios,
    buscarFuncionarioPorIndice,
    atualizarFuncionario,
    excluirFuncionario
} from "../repository/funcionarioRepository.js";

export function cadastrarFuncionarioController(matricula, nome, setor, cargo) {
    const funcionario = new Funcionario(matricula, nome, setor, cargo);
    cadastrarFuncionario(funcionario);

    console.log("Funcionário cadastrado com sucesso!");
    return funcionario;
}

export function listarFuncionariosController() {
    const funcionarios = listarFuncionarios();

    if (funcionarios.length === 0) {
        console.log("Nenhum funcionário cadastrado.");
        return;
    }

    for (let indice = 0; indice < funcionarios.length; indice++) {
        const funcionario = funcionarios[indice];

        console.log("-------------------------");
        console.log(`Índice: ${indice}`);
        console.log(`Matrícula: ${funcionario.matricula}`);
        console.log(`Nome: ${funcionario.nome}`);
        console.log(`Setor: ${funcionario.setor}`);
        console.log(`Cargo: ${funcionario.cargo}`);
        console.log(`Status: ${funcionario.status}`);
    }

    console.log("-------------------------");
}

export function buscarFuncionarioController(indice) {
    const funcionario = buscarFuncionarioPorIndice(indice);

    if (indice < 0 || funcionario === undefined) {
        console.log("Funcionário não encontrado nesse índice.");
        return false;
    }

    console.log(`Índice: ${indice}`);
    console.log(`Matrícula: ${funcionario.matricula}`);
    console.log(`Nome: ${funcionario.nome}`);
    console.log(`Setor: ${funcionario.setor}`);
    console.log(`Cargo: ${funcionario.cargo}`);
    console.log(`Status: ${funcionario.status}`);
    return funcionario;
}

export function atualizarFuncionarioController(
    indice, matricula, nome, setor, cargo
) {
    const funcionarioAtual = buscarFuncionarioPorIndice(indice);

    if (indice < 0 || funcionarioAtual === undefined) {
        console.log("Funcionário não encontrado para atualização.");
        return false;
    }

    const funcionarioAtualizado = new Funcionario(
        matricula, nome, setor, cargo
    );
    atualizarFuncionario(indice, funcionarioAtualizado);

    console.log("Funcionário atualizado com sucesso!");
    return true;
}

export function excluirFuncionarioController(indice) {
    const funcionario = buscarFuncionarioPorIndice(indice);

    if (indice < 0 || funcionario === undefined) {
        console.log("Funcionário não encontrado para exclusão.");
        return false;
    }

    excluirFuncionario(indice);

    console.log("Funcionário excluído com sucesso!");
    return true;
}

export function ativarFuncionarioController(indice) {
    const funcionario = buscarFuncionarioPorIndice(indice);

    if (indice < 0 || funcionario === undefined) {
        console.log("Funcionário não encontrado para ativação.");
        return false;
    }

    funcionario.ativar();
    console.log("Funcionário ativado com sucesso!");
    return true;
}

export function desativarFuncionarioController(indice) {
    const funcionario = buscarFuncionarioPorIndice(indice);

    if (indice < 0 || funcionario === undefined) {
        console.log("Funcionário não encontrado para desativação.");
        return false;
    }

    funcionario.desativar();
    console.log("Funcionário desativado com sucesso!");
    return true;
}