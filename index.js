const fs = require("fs");

const conteudo = 'NPM é um gerenciador de pacotes do NodeJS, onde possui um conjunto de comandos que podem ser utlizados para controlar o ambiente de desenvolvimento, como instalar pacotes e removê-los.\nUtilizei o módulo fs para escrever um arquivo txt com o conteudo da variável "conteudo" através do comando "fs.writeFile" e inicializei este arquivo (index.js) com o comando "npm run start" no terminal, esse script está localizado no arquivo "package.json".';

fs.writeFile("arquivo.txt", conteudo, (err) => {
  if (err) {
    console.error("Ocorreu um erro ao escrever o arquivo:", err);
    return;
  }

  console.log("Arquivo escrito com sucesso!");
});
