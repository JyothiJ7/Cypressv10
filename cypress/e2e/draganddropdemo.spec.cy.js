import DragNdDrop from '../support/PageObjects/draganddroppage.po'

const dragNdDrop = new DragNdDrop();
describe('Drag and Drop', () => {
  it('draganddrop.test',  () => {
   cy.visit(Cypress.env('formUrl'))

   dragNdDrop.checkTitle()
   dragNdDrop.clickdragLink()
   dragNdDrop.dragElement()
   dragNdDrop.dropElement()
   dragNdDrop.checkValidate()

  
  });
});

   


