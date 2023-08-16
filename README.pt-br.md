# MyTodos

[![en](https://img.shields.io/badge/lang-en-red.svg)](README.md)
[![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](README.pt-br.md)

Simples gerenciador de tarefas construído com Svelte.

Demo do App: https://my-todos-web.netlify.app/

## Uso

- **Visualizando tarefas**: Todas as suas tarefas serão exibidas automaticamente. Se não houver tarefas, uma mensagem amigável será mostrada.
- **Adicionando uma tarefa**: Insira a tarefa desejada na caixa de texto e clique no botão `Add` para criar uma nova tarefa.
- **Editando uma tarefa**: Clique no botão <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit"> <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg> ao lado direito da tarefa, faça a alteração e clique em `Save`.
- **Marcando uma tarefa como Concluída/Incompleta**: Clique na caixa de seleção à esquerda de sua tarefa. Isso permitirá que você alterne seu status entre concluído e incompleto.
- **Deletando uma tarefa**: Para remover uma tarefa da lista, clique no botão <svg class="feather feather-trash-2" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg> situado no lado direito de sua tarefa e confirme.
- **Mudando o tema**: Para alterar o tema, clique no botão no canto superior direito da aplicação.

## Implementação

"MyTodos" é uma aplicação web baseada em Svelte projetada para gerenciamento intuitivo de tarefas. É construído usando Svelte, TypeScript e aprimorado com Tailwind CSS e Skeleton UI.

### Gerenciamento de Dados

As tarefas são salvas usando o `localStorage` do navegador. Isso fornece uma experiência contínua, pois os usuários podem revisitar suas tarefas mesmo após fechar o navegador. Essas tarefas são importadas no store `myTodos` do app, servindo como a principal fonte de dados para a aplicação.

As declarações reativas do Svelte monitoram o store `myTodos` para quaisquer alterações. Sempre que uma mudança é detectada, a lista atualizada também é enviada ao `localStorage`, garantindo que a lista de tarefas seja atualizada em tempo real, refletindo quaisquer adições ou exclusões instantaneamente.

### Gerenciamento de Tema

O design é dinâmico, ajustando-se de acordo com as preferências de tema do usuário usando o Lightswitch da Skeleton UI.

## Status

Ainda estou trabalhando no MyTodos, algumas das possíveis futuras melhorias são:

- Categorização de tarefas (Por exemplo: Trabalho, Pessoal).
- Implementação de um recurso de prazo.

## Licença

MyTodos está disponível sob a licença MIT. Consulte o arquivo LICENSE para obter mais informações.
