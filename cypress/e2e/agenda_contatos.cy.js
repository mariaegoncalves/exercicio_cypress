describe('Testes de funcionalidades da Agenda de Contatos', () => {
    beforeEach(() => {
      // Visita a aplicação antes de cada teste
      cy.visit('https://agenda-contatos-react.vercel.app/')
    })
  
    it('Deve incluir um novo contato', () => {
      // Preenche os campos de nome, telefone e email usando o atributo placeholder
      cy.get('input[placeholder="Nome"]').type('Maria Silva')
      cy.get('input[placeholder="Telefone"]').type('11999999999')
      cy.get('input[placeholder="E-mail"]').type('maria@example.com')
  
      // Clica no botão para adicionar contato
      cy.get('button.adicionar').click() // A classe 'adicionar' está correta
  
      // Verifica se o contato foi adicionado à lista
      cy.contains('Maria Silva').should('exist')
    })
  
    it('Deve alterar um contato existente', () => {
      // Adiciona um contato para poder alterá-lo
      cy.get('input[placeholder="Nome"]').type('João Silva')
      cy.get('input[placeholder="Telefone"]').type('11988888888')
      cy.get('input[placeholder="E-mail"]').type('joao@example.com')
      cy.get('button.adicionar').click()
  
      // Seleciona o contato para edição
      cy.get('button.edit').first().click() // Ajustando o seletor para "button.edit"
  
      // Modifica o nome e confirma a alteração
      cy.get('input[placeholder="Nome"]').clear().type('João Alterado')
  
      // Clica no botão de salvar
      cy.get('button[type="submit"]').click() // Verifique se o botão de submit está correto
  
      // Verifica se o nome foi atualizado
      cy.contains('João Alterado').should('exist')
  
      // Aguarda um momento para a atualização da UI
      cy.wait(500); // Ajuste o tempo conforme necessário
  
    })
  
    it('Deve remover um contato', () => {
      // Adiciona um contato para poder removê-lo
      cy.get('input[placeholder="Nome"]').type('Contato Remover')
      cy.get('input[placeholder="Telefone"]').type('11977777777')
      cy.get('input[placeholder="E-mail"]').type('remover@example.com')
      cy.get('button.adicionar').click()
  
      // Clica no botão para excluir o primeiro contato
      cy.get('button.delete').first().click() // Atualizando o seletor para "button.delete"
  
      // Confirma a exclusão
      cy.on('window:confirm', () => true) // Se a sua aplicação tiver uma confirmação, essa linha deve funcionar

    })
  })
  