import { ContactsComponent } from "./contacts.component";
import { Contact } from "./shared/models";

describe('ContactsComponent Tests', () => {
    let tcontactsComponent: ContactsComponent = null;

    beforeEach( () => {
        tcontactsComponent = new ContactsComponent
    });

    // test whether the component is set correctly
    it('should set instance correctly', () => {
        expect(tcontactsComponent).not.toBeNull();
    });

    // test that there should be no contacts by default
    it('should be no contacts if there is no data', () => {
        expect(tcontactsComponent.contacts.length).toBe(0);
    });

    // test if one contact is added then the number of contacts in the array should be 1
    it('should be contacts if there is data', () => {
        // create a new contact of type Contact
        const newContact: Contact = {
            id: 1,
            name: 'Jason Pipemaker'
        };
        
        // create a contact list that is an array of contacts 
        // fill that array (contactList) with the new contact
        const contactList: Array<Contact> = [newContact];
        tcontactsComponent.contacts = contactList;

        expect(tcontactsComponent.contacts.length).toBe(1);
    });
    
});