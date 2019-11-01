
var targetHero =  'Magneta';
var targetHeroID = 15;
var nameSuffix = 'X'
var newHeroName = targetHero + nameSuffix;

describe('Tour of Heroes App', () => {
    // Once we import the page, we declare an object and initialize with an instance of LetsLearnApp
    // let page: LetslearnPage;
  
    beforeEach(() => {
      // This is done in the beforeEach function so that the code can be executed before each test runs
    //   page = new LetslearnPage();
    // cy.visit('localhost:4200')
    });
  
    it(`Should have title 'Tour Of Heroes'`, () => {
        cy.visit('localhost:4200')
        cy.contains('Tour of Heroes');
    });

    it(`Should have title 'Top Heroes'`, () => {

        cy.contains('Top Heroes');
    });

    it(`Should have title 'Hero Search'`, () => {

        cy.contains('Hero Search');
    });

    // it ('Should select and route to Hero details', () => {
    //     cy.get('[ng-reflect-router-link="/detail/13"] > .module').click();
    // });





    it (`Should select and route to (${targetHero}) Hero details`, dashboardSelecTargetHero);

    it (`Should update hero name (${newHeroName}) in details view`, updateHeroNameInDetailView);

    it (`Should show (${newHeroName}) in Heroes List`, () => {

        cy.get('[routerlink="/heroes"]').click();
        cy.get(':nth-child(5) > a').contains(newHeroName);

    });
    
    it (`Should delete (${newHeroName}) in details view`, () => {
        cy.get(':nth-child(5) > .delete').click();
        // expect(page.allHeroes.count()).toEqual(9, 'number of heroes'); // og file

    });



    function dashboardSelecTargetHero() {
        cy.contains('Magneta').click();
        // cy.server();
        // cy.route('**/detail/*');

        

        cy.url().should('include', '/detail/15');
        cy.url().should('eq','http://localhost:4200/detail/15')


    }

    function updateHeroNameInDetailView() {
     

        cy.get('.ng-untouched').clear().type(newHeroName);
        cy.get('app-hero-detail > :nth-child(1) > :nth-child(5)').click();

        cy.get('[ng-reflect-router-link="/detail/15"] > .module > h4').contains(newHeroName);
        // cy.get('[ng-reflect-router-link="/detail/15"] > .module > h4').should('eq', newHeroName);
        cy.url().should('include', '/dashboard');
        cy.url().should('eq','http://localhost:4200/dashboard');

        
        // cy.get('app-hero-detail > :nth-child(1) > :nth-child(2)').should('eq', '15');
       



    }
  
    // function addToHeroName(text) {
    //     cy.get('#search-component')
    //         .type('Magenta').should('have.value', 'Magenta')


    // }
  
  
   

  });