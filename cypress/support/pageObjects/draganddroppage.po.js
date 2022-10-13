import * as draganddropelements from '../pageElements/draganddropelements'

const dataTransfer = new DataTransfer();

class DragNdDrop {

    //Validate the homepage
    checkTitle() {

        cy.title().should('eq', 'The Internet')

    }
     // Validate the drag and drop element in home page
    clickdragLink() {

        cy.contains(draganddropelements.draghome)

            .should("have.text", "Drag and Drop")

            .click()

    }
    //Validate the element is Draggable or not 
    dragElement() {
        cy.get(draganddropelements.elementa).trigger('dragstart', {
            dataTransfer
        });
    }
    //Validate whether the element is Droppable or not 
    dropElement() {
        cy.get(draganddropelements.elementb).trigger('drop', {
            dataTransfer
        });
    }
    //Check the drag and drop performed 
    checkValidate(){
        cy.contains(draganddropelements.validationdragged)
        .should('have.text', 'B')
    }



}
export default DragNdDrop;
