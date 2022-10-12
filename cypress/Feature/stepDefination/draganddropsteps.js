import DragNdDrop from '../support/PageObjects/dragAndDropDemo.po'

const dragNdDrop = new DragNdDrop();

Given('User must navigate to Herokuapp page', () => {

    cy.visit(Cypress.env('formUrl'))
    dragNdDrop.checkTitle()

});

When('user click drag and drop should navigate to drag and drop page', () => {

    dragNdDrop.clickdragLink()

});

And('user should able to drag the element A ', () => {

    dragNdDrop.dragElement()

});

Then('User should be able to drop the element A in the place of element B ', () => {

    dragNdDrop.dropElement()
});
Then('Validate User should perform Drag and Drop ', () => {
    dragNdDrop.checkValidate()
});