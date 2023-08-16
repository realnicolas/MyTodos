# MyTodos

[![en](https://img.shields.io/badge/lang-en-red.svg)](README.md)
[![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](README.pt-br.md)

Simples gerenciador de tarefas construído com Svelte.

Demo do App: https://my-todos-web.netlify.app/

## Uso

- **Visualizando tarefas**: Todas as suas tarefas serão exibidas automaticamente. Se não houver tarefas, uma mensagem amigável será mostrada.
- **Adicionando uma tarefa**: Insira a tarefa desejada na caixa de texto e clique no botão `Add` para criar uma nova tarefa.
- **Editando uma tarefa**: Clique no botão ![Edit Icon](src/lib/assets/edit-icon.svg) ao lado direito da tarefa, faça a alteração e clique em `Save`.
- **Marcando uma tarefa como Concluída/Incompleta**: Clique na caixa de seleção à esquerda de sua tarefa. Isso permitirá que você alterne seu status entre concluído e incompleto.
- **Deletando uma tarefa**: Para remover uma tarefa da lista, clique no botão ![Delete Icon](src/lib/assets/delete-icon.svg) situado no lado direito de sua tarefa e confirme.
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
