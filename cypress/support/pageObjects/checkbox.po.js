import * as checkboxpageelements from '../pageElements/checkboxpageelements'

class Checkboxselect {


    //Validate the Home page using title
    validatethetitle() {
        cy.title().should('eq', 'The Internet')
    }

    //Validate the checkboxes in homepage
    clickcheckboxes() {
        cy.contains(checkboxpageelements.checkboxes).click()
    }

    // CheckBox1 functionality 
    firstcheckboxcheck() {
        cy.get(checkboxpageelements.checkbox1).should('be.visible')

        cy.get(checkboxpageelements.checkbox1).first().check().should('be.checked')
        cy.get(checkboxpageelements.checkbox1).first().uncheck().should('not.be.checked')
    }

    //CheckBox2 functionality 
    secondcheckboxcheck() {
        
        cy.get(checkboxpageelements.checkbox2).should('be.visible')

        cy.get(checkboxpageelements.checkbox2).last().uncheck().should('not.be.checked')

    }

}
export default Checkboxselect;