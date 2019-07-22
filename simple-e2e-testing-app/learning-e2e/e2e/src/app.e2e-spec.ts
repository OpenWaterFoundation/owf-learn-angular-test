// The first thing we do is import the page, in this case 'LetsLearnApp'
// most methods will be written in the page object file 'app.po.ts' 
import { LetslearnPage } from './app.po';

describe('letslearn App', () => {
  // Once we import the page, we declare an object and initialize with an instance of LetsLearnApp
  let page: LetslearnPage;

  beforeEach(() => {
    // This is done in the beforeEach function so that the code can be executed before each test runs
    page = new LetslearnPage();
  });

  it('Should display Letslearn title', () => {
    // We navigate to the our application's site
    page.navigateTo();

    // assertion and matcher toEqual()
    // expect the title of the page to equal 'Lets Learn E2E'
    // the getTitle method in 'app.po.ts'
    expect(page.getTitle()).toEqual('Lets Learn E2E');
  });

  it('Should start with 1 point', () => {
    // nagivate to the site
    // navigateTo() method in 'app.po.ts'
    page.navigateTo();

    // assertion and matcher toEqual()
    // expect the points variable to equal 1 upon initial load of site
    // getPoints() method in 'app.po.ts' file
    expect(page.getPoints()).toEqual('1');
  });

  it('Should increase points by clicking plus1', () => {
    // navigate to the site
    page.navigateTo();

    // assertion and matcher toEqual()
    // expect the point variable to be 1 upon initial load of the site
    expect(page.getPoints()).toEqual('1');

    // get the plus1 button and click it
    // getPlus1Button() method in 'app.po.ts' file
    page.getPlus1Button().click();

    // assertion and matcher toEqual()
    // expect the points variable to equal 2
    expect(page.getPoints()).toEqual('2');

    // get the plus1 button and click once
    page.getPlus1Button().click();
    // click twice
    page.getPlus1Button().click();
    // click a third time
    page.getPlus1Button().click();

    // assertion and matcher toEqual()
    // expect the points variable to equal 5 after 3 additional clicks of the button 
    expect(page.getPoints()).toEqual('5');
  });

  it('Should reset points by clicking Reset button', () => {
    // navigate to the site
    page.navigateTo();

    // get the plus1 button and click once
    page.getPlus1Button().click();
    // click twice
    page.getPlus1Button().click();
    // click three times
    page.getPlus1Button().click();

    // assertion and toEqual() Matcher 
    // expect the points varialble to equal the value of 4
    expect(page.getPoints()).toEqual('4');
  
    // get the reset button and click it
    // getResetButton() method in 'app.po.ts' file
    page.getResetButton().click();

    // assertion and toEqual Matcher
    // expect the points variable to equal 0 
    expect(page.getPoints()).toEqual('0');
  });

});