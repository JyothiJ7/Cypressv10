import * as formauthpageelements from '../pageElements/formauthpageelements'

class Subformauthpage{

    //Validate the homepage
    checkTitle() {

        cy.title().should('eq', 'The Internet')

    }
    // Validate the form authorization  in home page
    clickformauthlink(){

        cy.contains(formauthpageelements.formauth).click()    
    }

    
     enterNameandPassword(name,password){
          
          cy.get(formauthpageelements.username).clear().type(name)
          cy.get(formauthpageelements.password).clear().type(password)
    
        }
       
        
    }
    
    export default Subformauthpage;

