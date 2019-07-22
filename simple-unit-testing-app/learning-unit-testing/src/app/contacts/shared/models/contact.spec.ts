import ContactClass from './contact';

describe('Contact class tests', () => {
    // create a variable to hold your instance of the ContactClass and set to null
    let contact: ContactClass = null

    // *setup*
    // initialize contact variable every time test runs
    beforeEach( () => {
        contact = new ContactClass();
    });

    it('should have a valid constructor', () => {
        expect(contact).not.toBeNull();
    });

    // tests for setting name using a constructor and testing the getter for name
    it('should set name correctly through constructor', () => {
        contact = new ContactClass('Liz');
        expect(contact.name).toEqual('Liz');
    });

    // testing getters and setters for id property
    it('should get and set id correctly', () => {
        contact.id = 1;
        expect(contact.id).toEqual(1);
    });

    // testing getters and setters for name property
    it('should get and set name correctly', () => {
        contact.name = 'Liz';
        expect(contact.name).toEqual('Liz');
    });

    // exercise- test the rest of the module
    // testing getters and setters for all variables
    it('should get and set email correctly', () => {
        contact.email = 'Liz@gmail.com';
        expect(contact.email).toEqual('Liz@gmail.com');
    });

    it('should get and set number correctly', () => {
        contact.number = '555 5555 5555';
        expect(contact.number).toEqual('555 5555 5555');
    });

    it('shoulg get and set country correctly', () => {
        contact.country = 'Mexico';
        expect(contact.country).toEqual('Mexico');
    });

    it('should get and set favorite correctly', () => {
        contact.favorite = true;
        expect(contact.favorite).toEqual(true);
    });

    // tear down
    // make sure instances of variables get destroyed to avoid memory leaks
    afterEach( () => {
        contact = null;
    });
});