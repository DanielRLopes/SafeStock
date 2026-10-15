
import {
    cadastrarEpiController,
    listarEpisController,
    buscarEpiController,
    adicionarQuantidadeController,
    retirarQuantidadeController,
    atualizarEpiController,
    excluirEpiController
} from "./controller/epiController.js";

import {
    cadastrarFuncionarioController,
    listarFuncionariosController,
    buscarFuncionarioController,
    atualizarFuncionarioController,
    excluirFuncionarioController,
    ativarFuncionarioController,
    desativarFuncionarioController
} from "./controller/funcionarioController.js";

console.log("===== 1. CADASTRO DE EPIs =====");

cadastrarEpiController(101, "Capacete de segurança", "12345", 20);
cadastrarEpiController(102, "Luva de proteção", "23456", 50);
cadastrarEpiController(103, "Óculos de proteção", "34567", 30);

console.log("\n===== 2. LISTAGEM DOS EPIs =====");

listarEpisController();

console.log("\n===== 3. BUSCA PELO ÍNDICE 1 =====");

buscarEpiController(1);

console.log("\n===== 4. ADICIONAR 5 UNIDADES AO ÍNDICE 0 =====");

adicionarQuantidadeController(0, 5);

console.log("\n===== 5. RETIRAR 2 UNIDADES DO ÍNDICE 0 =====");

retirarQuantidadeController(0, 2);

console.log("\n===== 6. TENTAR RETIRAR 100 UNIDADES =====");

retirarQuantidadeController(0, 100);

console.log("\n===== 7. ATUALIZAR O EPI DO ÍNDICE 1 =====");

atualizarEpiController(
    1,
    102,
    "Luva de proteção reforçada",
    "23456",
    60
);

console.log("\n===== 8. EXCLUIR O EPI DO ÍNDICE 2 =====");

excluirEpiController(2);

console.log("\n===== 9. LISTAGEM FINAL =====");

listarEpisController();

console.log("\n===== 10. CADASTRO DE FUNCIONÁRIOS =====");

cadastrarFuncionarioController(
    "F001", "Ana Souza", "Produção", "Operadora"
);
cadastrarFuncionarioController(
    "F002", "Bruno Lima", "Manutenção", "Técnico"
);
cadastrarFuncionarioController(
    "F003", "Carla Mendes", "Logística", "Supervisora"
);

console.log("\n===== 11. LISTAGEM DOS FUNCIONÁRIOS =====");

listarFuncionariosController();

console.log("\n===== 12. BUSCA PELO ÍNDICE 1 =====");

buscarFuncionarioController(1);

console.log("\n===== 13. DESATIVAR O FUNCIONÁRIO DO ÍNDICE 1 =====");

desativarFuncionarioController(1);
buscarFuncionarioController(1);

console.log("\n===== 14. ATIVAR O FUNCIONÁRIO DO ÍNDICE 1 =====");

ativarFuncionarioController(1);
buscarFuncionarioController(1);

console.log("\n===== 15. ATUALIZAR O FUNCIONÁRIO DO ÍNDICE 1 =====");

atualizarFuncionarioController(
    1, "F002", "Bruno Lima", "Manutenção", "Técnico de segurança"
);

console.log("\n===== 16. EXCLUIR O FUNCIONÁRIO DO ÍNDICE 2 =====");

excluirFuncionarioController(2);

console.log("\n===== 17. LISTAGEM FINAL DOS FUNCIONÁRIOS =====");

listarFuncionariosController();