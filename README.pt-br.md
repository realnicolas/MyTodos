# MyTodos

[![en](https://img.shields.io/badge/lang-en-red.svg)](README.md)
[![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](README.pt-br.md)

Este projeto é um simples gerenciador de tarefas construído com Svelte.

Demo do App: https://my-todos-web.netlify.app/

## Uso

- **Visualizando tarefas**: Todas as suas tarefas serão exibidas automaticamente. Se não houver tarefas, uma mensagem amigável será mostrada.
- **Adicionando uma tarefa**: Insira a tarefa desejada na caixa de texto e clique no botão `Add` para criar uma nova tarefa.
- **Marcando uma tarefa como Concluída/Incompleta**: Clique na caixa de seleção à esquerda de sua tarefa. Isso permitirá que você alterne seu status entre concluído e incompleto.
- **Deletando uma tarefa**: Para remover uma tarefa da lista, clique no botão `Delete` situado no lado direito de sua tarefa.
- **Mudando o tema**: Para alterar o tema, clique no botão no canto superior direito da aplicação.

## Implementação

"MyTodos" é uma aplicação web baseada em Svelte projetada para gerenciamento intuitivo de tarefas. É construído usando Svelte, TypeScript e aprimorado com Tailwind CSS para estilização e implementação dos temas claro e escuro.

### Gerenciamento de Dados
As tarefas são salvas usando o `localStorage` do navegador. Isso fornece uma experiência contínua, pois os usuários podem revisitar suas tarefas mesmo após fechar o navegador. Essas tarefas são importadas no store `myTodos` do app, servindo como a principal fonte de dados para a aplicação.

### Ciclo de Vida e Fluxo de Dados

- **Inicialização**: Ao montar a aplicação (`onMount`), recuperamos quaisquer tarefas existentes do `localStorage` e populamos o store `myTodos`.
   
- **Reatividade**: As declarações reativas do Svelte monitoram o store `myTodos` para quaisquer alterações. Sempre que uma mudança é detectada, a lista atualizada também é enviada ao `localStorage`.

A reatividade do Svelte garante que a lista de tarefas seja atualizada em tempo real, refletindo quaisquer adições ou exclusões instantaneamente.

### Gerenciamento de Tema & Layout

O design é dinâmico, ajustando-se de acordo com as preferências de tema do usuário:

- **Tema Persistente**: As escolhas de tema do usuário são armazenadas no `localStorage` do navegador.

- **Tema Padrão**: Na ausência de um tema selecionado pelo usuário, a aplicação utiliza inteligentemente a preferência de tema do sistema operacional através do método `window.matchMedia`.

- **Atualizações de Layout Dinâmico**: Ao clicar no botão para mudar de tema, o layout ajusta as cores para uma experiência visual otimizada. 

## Status

Ainda estou trabalhando no MyTodos, algumas das possíveis futuras melhorias  são:
- Capacidade de editar tarefas.
- Categorização de tarefas (Por exemplo: Trabalho, Pessoal).
- Implementação de um recurso de prazo.

## Licença

MyTodos está disponível sob a licença MIT. Consulte o arquivo LICENSE para obter mais informações.
