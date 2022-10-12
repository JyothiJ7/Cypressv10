import * as formauthpageelements from '../pageElements/formauthpageelements'

class Subformauthpage{
    checkTitle() {

        cy.title().should('eq', 'The Internet')

    }
    
    clickformauthlink(){

        cy.contains(formauthpageelements.formauth).click()    
    }
        enterNameandPassword(name,password){
          
          cy.get(formauthpageelements.username).clear().type(name)
          cy.get(formauthpageelements.password).clear().type(password)
    
        }
        // clickLogin(){
        //     cy.get(formauthpageelements.loginbtn).click()
        // }
        
    }
    
    export default Subformauthpage;

