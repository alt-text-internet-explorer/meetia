// cypress uses the baseUrl variable in cypress.config.js

// visit a page
describe("Navigation", () => {
  it("should navigate to the User Profile page via navbar", () => {
    cy.visit("http://localhost:3000/")

    // find the user page button
    cy.get('a[href*="new-review"]').click()

    // the url should contain
    cy.url().should("include", "/new-review")
  })
})

// login
describe("Login", () => {
  it("logs in successfully", () => {
    cy.visit("http://localhost:3000/login")

    // fillout the form
    cy.get("input[name='username']").type("testuser")
    cy.get("input[name='pwd']").type("testpassword")

    cy.get("button[type='submit']").click()

    cy.url().should("eq", "http://localhost:3000/")

    // check for jwt
    cy.window().then((win) => {
      expect(win.localStorage.getItem("token")).to.exist
    })
    // data-cy="nav" - this is how you give a identifier to a dom element
    cy.get('[data-cy="nav"]').contains("Logout").should("be.visible")
    cy.get('[data-cy="nav"]').contains("Login").should("not.exist")
  })

  it("shows an error for invalid credentials", () => {
    cy.visit("http://localhost:3000/login")

    cy.get("input[name='username']").type("wronguser")

    cy.get("input[name='pwd']").type("wrongpassword")

    cy.get("button[type='submit']").click()

    cy.contains("Unauthorized").should("be.visible")

    cy.contains("Logout").should("not.exist")
  })
})

//logout
describe("Logout", () => {
  it("logs out successfully", () => {
    cy.visit("http://localhost:3000/login")

    cy.get("input[name='username']").type("testuser")
    cy.get("input[name='pwd']").type("testpassword")
    cy.get("button[type='submit']").click()

    cy.contains("Logout").click()

    cy.url().should("include", "/login")

    cy.window().then((win) => {
      expect(win.localStorage.getItem("token")).to.be.null
    })

    cy.contains("Login").should("be.visible")
  })
})
