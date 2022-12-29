describe('Trener QA Automation', () => {
  const loginUrl = 'https://www.edu.goit.global/pl/account/login'
  const email = 'user888@gmail.com'
  const password = '1234567890'

  it('Zadanie testowe', () => {
    cy.visit(loginUrl)
    cy.get('#user_email').type(email)
    cy.get('#user_password').type(password)
    cy.get('button[type="submit"]').click()
    cy.get('button').contains('Przejdź do kursu').click()
    cy.get('span').contains('Zadanie domowe').click()
    cy.get('button').contains('Ponownie prześlij pracę domową').click()
  })
})
