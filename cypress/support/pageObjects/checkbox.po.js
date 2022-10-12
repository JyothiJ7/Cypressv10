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
    
    //Selecting the CheckBox
    firstcheckboxcheck() {
        cy.get(checkboxpageelements.checkbox1).first().click()
    }

    //Validate whether the checkbox is checked or not 
    validatethechecked() { 
        cy.get(checkboxpageelements.checkbox1).should('be.checked')
        cy.get(checkboxpageelements.checkbox2).should('be.checked')
    }
    // firstcheckboxuncheck(){
    //     cy.get(checkboxpageelements.checkbox1).click()
    // }
    // secondcheckboxuncheck(){
    //     cy.get(checkboxpageelements.checkbox2).click()
    // }
    
    // validatetheunchecked(){
    //     cy.get(checkboxpageelements.checkbox1).should('not.be.checked')
    //     cy.get(checkboxpageelements.checkbox2).should('not.be.checked')

    // }
}
export default Checkboxselect;