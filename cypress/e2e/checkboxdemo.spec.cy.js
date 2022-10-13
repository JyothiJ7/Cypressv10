import Checkboxselect  from '../support/PageObjects/checkbox.po'

const checkboxselect =new Checkboxselect();

describe('checkbox Test Case', () => {
  it('checkbox.test', () => {
       cy.visit(Cypress.env('formUrl'))


       checkboxselect.validatethetitle() 
       checkboxselect.clickcheckboxes()
       checkboxselect.firstcheckboxcheck()
       checkboxselect.secondcheckboxcheck()
      


      })
    })


