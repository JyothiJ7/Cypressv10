import * as iframepageelements from '../PageElements/iframepageelements'

class Iframeselect{

    checkTitle() {

        cy.title().should('eq', 'The Internet')
    }
    
    clickframe(){
        cy.contains(iframepageelements.homepageframes).click()
        }
    validateFramepage(){

      cy.contains(iframepageelements.homepageframes).should('have.text','Frames')
    }
    clickIframe(){
        cy.contains(iframepageelements.pageiframe).click()

    }
    verifyiframePages(){

        cy.contains(iframepageelements.validatetextiniframe )

        .should("have.text","An iFrame containing the TinyMCE WYSIWYG Editor")

    }
    IframeText(){

       cy.get(iframepageelements.textiframe).then(function($iframe){

          const iframecontent = $iframe.contents().find('body')

          cy.wrap(iframecontent).clear().type('Hi')
       
    });

}
// enterdblClicktext(){

//     cy.get(iframepageelements.textiniframe1).dblclick()

//     cy.get(iframepageelements.textbold).click()

//     cy.contains(iframepageelements.textitalic).click()

// }
}

export default Iframeselect;
