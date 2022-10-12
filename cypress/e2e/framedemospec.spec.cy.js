import Iframeselect from '../support/PageObjects/iframepage.po'

const iframeselect = new Iframeselect()

describe('Iframe Test Case', () => {
    it('iframe.test', () => {
         cy.visit(Cypress.env('formUrl'))
         
         iframeselect.checkTitle()
         iframeselect.clickframe()
         iframeselect.validateFramepage()
         iframeselect.clickIframe()
         iframeselect.verifyiframePages()
         iframeselect.IframeText()
        //  iframeselect.enterdblClicktext()

  })
})

