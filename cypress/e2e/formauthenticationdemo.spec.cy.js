// import cypressConfig from '../../../cypress.config'
import Subformauthpage from '../support/pageObjects/formauthpage.po'

const subformauthpage = new Subformauthpage()

beforeEach(function () {
  
   cy.fixture('formauthdata').then(function (Fdata) {
      this.Fdata = Fdata
   })
})


describe('formauthsuite', () => {


   it('form authentication.test', function () {
      cy.visit(Cypress.env('formUrl'))
      subformauthpage.checkTitle()
      subformauthpage.clickformauthlink()
      subformauthpage.enterNameandPassword(this.Fdata.name, this.Fdata.password)
      // subformauthpage.clickLogin()
   })
})


