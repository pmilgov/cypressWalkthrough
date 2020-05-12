describe('My First Test', function() {
/*
    it('Search on amazon', function() {
      cy.viewport(1440,1200)
      cy.visit('https://www.amazon.com/')
      cy.get('#twotabsearchtextbox').type('Superman')
      cy.get('.nav-search-submit .nav-input').click()
      cy.get('span.a-color-state').contains('Superman')
    }){
    */
    /*
    it('Search on amazon 2', function() {
		cy.viewport(1440,1200)
		cy.visit('https://www.amazon.com/')
		cy.get('#twotabsearchtextbox').type('Superman')
		cy.get('.nav-input').click()
		cy.get('span.a-color-state').contains('Superman')
	})
    */

	describe("Google", () => {
	    beforeEach(() => {
	        cy.visit('http://www.google.com')
	    })
	    it("searching for 'Platform One' yields search results", () => {
	       /* YOUR CODE GOES BELOW THIS LINE */
		  // cy.get('.gLFyf').type('Platform One '+{enter})
		   cy.get('.gLFyf').type('Platform One {enter}')
		   cy.url().should('include','Platform+One')
		   
	       //cy.get('.nav-search-submit .nav-input').click()
           //cy.get('span.a-color-state').contains('Platform One')
	       /* NO CODE BELOW THIS LINE */
	    })
	})
})
