// http://127.0.0.1:5555/index.html

beforeEach(() => {
    cy.visit("/");
})

// Test to see if the calculator loads on the page

describe("This should show that the calculator loads", () => {
  it("should show the calculator on the screen", () => {
    // Arrange -> Get things ready
    // Act -> Performing the test
    // Assert -> Checking the result of the test

    // Arrange is done in the beforeEach() method above
    
    // Combines the act and the assert
    // Pass in a selector
    cy.get(".workarea").should("exist");
  });

  // Test to check if all of the buttons are still there

  it("should show all 18 of the buttons", () => {
    // Act and assert
    cy.get("button").should("have.length", 18);
  });
});

// Positive test cases i.e. when the user behaves normally

describe("This should perform addition", () => {
    it("should calculate single digit addition, 7 + 8 = 15", () => {
        // Act
        cy.get("#seven").click();
        cy.get("[value='+']").click();
        cy.get("#eight").click();
        cy.get("[value='=']").click();
        // Assert
        cy.get(".workarea").should("contain", 15)
    });

    it("should calculate double digit addition, 78 + 87 = 165", () => {
        // Act
        cy.get("#seven").click();
        cy.get("#eight").click();
        cy.get("[value='+']").click();
        cy.get("#eight").click();
        cy.get("#seven").click();
        cy.get("[value='=']").click();
        // Assert
        cy.get(".workarea").should("contain", 165)
    });
});

describe("This should perform subtraction", () => {
    it("should calculate single digit subtraction, 7 + 8 = -1", () => {
        // Act
        cy.get("#seven").click();
        cy.get("[value='-']").click();
        cy.get("#eight").click();
        cy.get("[value='=']").click();
        // Assert
        cy.get(".workarea").should("contain", -1)
    });

    it("should calculate double digit subtraction, 78 - 90 = -12", () => {
        // Act
        cy.get("#seven").click();
        cy.get("#eight").click();
        cy.get("[value='-']").click();
        cy.get("#nine").click();
        cy.get("#zero").click();
        cy.get("[value='=']").click();
        // Assert
        cy.get(".workarea").should("contain", -12)
    });
});

describe("This should perform multiplication", () => {
    it("should calculate single digit multiplication, 7 * 8 = 56", () => {
        // Act
        cy.get("#seven").click();
        cy.get("[value='*']").click();
        cy.get("#eight").click();
        cy.get("[value='=']").click();
        // Assert
        cy.get(".workarea").should("contain", 56)
    });

    it("should calculate double digit multiplication, 10 * 12 = 120", () => {
        // Act
        cy.get("#one").click();
        cy.get("#zero").click();
        cy.get("[value='*']").click();
        cy.get("#one").click();
        cy.get("#two").click();
        cy.get("[value='=']").click();
        // Assert
        cy.get(".workarea").should("contain", 120)
    });
});

describe("This should perform division", () => {
    it("should calculate single digit division, 8 / 8 = 1", () => {
        // Act
        cy.get("#eight").click();
        cy.get("[value='/']").click();
        cy.get("#eight").click();
        cy.get("[value='=']").click();
        // Assert
        cy.get(".workarea").should("contain", 1)
    });

    it("should calculate double digit division, 48 / 12 = 4", () => {
        // Act
        cy.get("#four").click();
        cy.get("#eight").click();
        cy.get("[value='/']").click();
        cy.get("#one").click();
        cy.get("#two").click();
        cy.get("[value='=']").click();
        // Assert
        cy.get(".workarea").should("contain", 4)
    });

    it("should calculate zero division, 48 / 0 = 4", () => {
        // Act
        cy.get("#four").click();
        cy.get("#eight").click();
        cy.get("[value='/']").click();
        cy.get("#zero").click();
        cy.get("[value='=']").click();
        // Assert
        cy.get(".workarea").should("contain", "Error, cannot divide by zero. Clear all to begin again!")
    });
});

describe("This should check the 'Clear' and 'Clear All' functions", () => {
    it("This should delete a number from the work area", () => {
        // Act
        cy.get("#seven").click();
        cy.get("#eight").click();
        cy.get("#clear").click();
        // Assert
        cy.get(".workarea").should("contain", 7);
    });

    it("This should clear the work area", () => {
        // Act
        cy.get("#seven").click();
        cy.get("#eight").click();
        cy.get("#clear-all").click();
        // Assert
        cy.get(".workarea").should("contain", "");
    });
});

// Negative test cases i.e. User behaving irregularly 

// describe ("Button inputs in the wrong order", () => {
//     it ("The last operator which was selected should be used, 7 + - * 10 = 70", ()=> {
//         // Act
//         cy.get("#seven").click();
//         cy.get("[value='+']").click();
//         cy.get("[value='-']").click();
//         cy.get("[value='*']").click();
//         cy.get("#one").click();
//         cy.get("#zero").click();
//         cy.get("[value='=']").click();
//         // Assert
//         cy.get(".workarea").should("contain", 70)
//     })
// })