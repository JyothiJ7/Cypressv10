import * as draganddropelements from '../pageElements/draganddropelements'

const dataTransfer = new DataTransfer();

class DragNdDrop {

    checkTitle() {

        cy.title().should('eq', 'The Internet')

    }

    clickdragLink() {

        cy.contains(draganddropelements.draghome)

            .should("have.text", "Drag and Drop")

            .click()

    }
    dragElement() {
        cy.get(draganddropelements.elementa).trigger('dragstart', {
            dataTransfer
        });
    }
    dropElement() {
        cy.get(draganddropelements.elementb).trigger('drop', {
            dataTransfer
        });
    }
    checkValidate(){
        cy.contains(draganddropelements.validationdragged)
        .should('have.text', 'B')
    }



}
export default DragNdDrop;
