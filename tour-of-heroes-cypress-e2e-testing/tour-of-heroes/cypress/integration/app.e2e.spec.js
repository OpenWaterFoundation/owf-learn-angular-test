
var targetHero =  'Magneta';
var targetHeroID = 15;
var nameSuffix = 'X'
var newHeroName = targetHero + nameSuffix;

describe('Tour of Heroes App', () => {
  
    beforeEach(() => {
    // This is done in the beforeEach function so that the code can be executed before each test runs
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

    it (`Should select and route to (${targetHero}) Hero details`, dashboardSelecTargetHero);

    it (`Should update hero name (${newHeroName}) in details view`, updateHeroNameInDetailView);

    it (`Should save and show (${newHeroName}) in Heroes List`, () => {

        cy.get('[routerlink="/heroes"]').click();
        cy.get(':nth-child(5) > a').contains(newHeroName);

    });
    
    it (`Should delete (${newHeroName}) in details view`, () => {
        cy.get(':nth-child(5) > .delete').click();
        // expect(page.allHeroes.count()).toEqual(9, 'number of heroes'); // og file

    });

    it (`Should add back ${targetHero}`, () => {
        cy.get('input').type(targetHero);
        cy.get('app-heroes > div > button').click();
        cy.contains('Magneta');
    });

    it (`Should add the hero name Alice`, () => {
        cy.get('input').type('Alice');
        cy.get('app-heroes > div > button').click();
        cy.contains('Alice');
    });

    it (`Should search for 'Ma'`, () => {
        cy.visit('localhost:4200');
        cy.get('#search-box').type('Ma');
        
        // Making sure options with 'Ma' are presented
        cy.get(':nth-child(1) > a').contains('Magneta');
        cy.get('.search-result > :nth-child(2) > a').contains('RubberMan');
        cy.get(':nth-child(3) > a').contains('Dynama');
        cy.get(':nth-child(4) > a').contains('Magma');

    });

    it (`Should continue search with 'g'`, () => {
        cy.get('#search-box').type('g');
        
        // Making sure options with 'Mag' are presented
        cy.get(':nth-child(1) > a').contains('Magneta');
        cy.get(':nth-child(4) > a').contains('Magma');
       

    })
    it (`Should continue search with 'n' and selects 'Magneta'`, () => {
        cy.get('#search-box').type('n');

        // Making sure options with 'Magn' are presented
        cy.get(':nth-child(1) > a').contains('Magneta').click();
     
    });

    it (`Should Navigate to Magneta details view properly`, () => {
         // Ensuring Url routed properly
         cy.url().should('include', '/detail/15');
         cy.url().should('eq','http://localhost:4200/detail/15')
 
    });
    

    function dashboardSelecTargetHero() {

        cy.contains('Magneta').click();
        // Ensuring Url routed properly
        cy.url().should('include', '/detail/15');
        cy.url().should('eq','http://localhost:4200/detail/15');

    }

    function updateHeroNameInDetailView() {
    
        cy.get('.ng-untouched').clear().type(newHeroName);
        cy.get('app-hero-detail > :nth-child(1) > :nth-child(5)').click();

        cy.get('[ng-reflect-router-link="/detail/15"] > .module > h4').contains(newHeroName);
        // should navigate properly
        cy.url().should('include', '/dashboard');
        cy.url().should('eq','http://localhost:4200/dashboard');

    }


  });