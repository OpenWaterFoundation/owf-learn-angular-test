import { DebugElement, asNativeElements } from "@angular/core";
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { RouterTestingModule } from '@angular/router/testing';

// Angular nontesting module statement
import { FormsModule } from '@angular/forms';

import{ Contact, ContactService, FavoriteIconDirective, InvalidEmailModalComponent, InvalidPhoneNumberModalComponent }
    from '../shared';
import { AppMaterialModule } from '../../app.material.module';
import { ContactEditComponent } from './contact-edit.component';
import '../../../material-app-theme.scss';
import { async } from "q";

describe('ContactEditComponent Tests', () => {
    let fixture: ComponentFixture<ContactEditComponent>;
    let component; ContactEditComponent;
    let rootElement: DebugElement;

    // < ----------------- Mock ContactService ------------------->
    const contactServiceStub = {
        // Default contact object
        contact: {
            id: 1,
            name: 'Joe'
        },

        // Sets the passed-in object to the component's contact property
        // int i == i: int => now apply to contact
        save: async function(contact: Contact) {
            component.contact = contact;
        },

        // Method that sets the current contact to the 
        // component's contant property and returna that contact
        getContact: async function () {
            component.contact = this.contact;
            return this.contact;
        },

        updateContact: async function (contact: Contact) {
            component.contact = contact;
        }
    };

    // <------------------------- Set Up ---------------------------->
    // much like NgModule
    // configuing TestBed to be used in tests
    beforeEach( () => {
        TestBed.configureTestingModule({
            // declarations should be components and directives
            declarations: [
                ContactEditComponent, 
                FavoriteIconDirective,
                InvalidEmailModalComponent, 
                InvalidPhoneNumberModalComponent
            ],
            // imports should consist of modules
            imports: [
                AppMaterialModule,
                FormsModule,
                NoopAnimationsModule,
                RouterTestingModule
            ],
            // This is where you used ContactServiveStub instead of the real service
            // providers will hold services
            providers: [{
                provide: ContactService,
                useValue: contactServiceStub
            }],
        });

        // have to use override because a couple of components will be lazily loaded.
        TestBed.overrideModule(BrowserDynamicTestingModule, {
           set: {
               entryComponents: [
                   InvalidEmailModalComponent,
                   InvalidPhoneNumberModalComponent
               ]
           }
        });
    });

    beforeEach( () => {
        fixture = TestBed.createComponent(ContactEditComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        rootElement = fixture.debugElement;
    });

    // <------------------------------------------------------------>


    // <------------------- Testing SaveContact -------------------->
    describe('saveContact() test', () => {
        it('should display contact name after contact set', fakeAsync( () => {
            const contact = {
                id: 1,
                name: 'Will'
            };
            // Sets isLoading to false to hid the progress bar
            component.isLoading = false;
            
            // Saves the contact object
            component.saveContact(contact);
            // Uses detectChanges method to trigger change detection
            fixture.detectChanges();

            // gets the nameInput form field 
            const nameInput = rootElement.query(By.css('.contact-name'));
            
            // Simulates the passage of time using tick
            tick();

            // checks to see if he name property has been set corectly
            expect (nameInput.nativeElement.value).toBe('Will');
        }));
    });

    // <------------------------Testing SaveContent--------------------------->


    // <----------------------- Testing loadContact --------------------------->
    describe('loadContact() test', () => {
        it('should load contact', fakeAsync( () => {
            component.isLoading = false;
            // Execute the loadContact method
            component.loadContact();
            fixture.detectChanges();
            const nameInput = rootElement.query(By.css('.contact-name'));
            tick();
            
            // the default contact that's loaded has a value of 'Joe' for the name property at the top
            expect(nameInput.nativeElement.value).toBe('Joe');

        }));
    });

    // <------------------------------------------------------------------------>

    // <------------------------ Testing UpdateContact ---------------------------->

    describe('updateContact() tests', () => {
        it('should update the contact', fakeAsync( () => {
            const newContact = {
                id: 1,
                name: 'Sal',
                email: 'Sal@gmail.com',
                number: '1234567890'
            };

            component.contact = {
                id: 2,
                name: 'Q',
                email: 'Q@gmail.com',
                number: '6789012345'
            };

            component.isLoading = false;
            fixture.detectChanges();
            
            const nameInput = rootElement.query(By.css('.contact-name'));
            tick();
            expect(nameInput.nativeElement.value).toBe('Q');
            
            // Update the existing contact to the newContact Object
            component.updateContact(newContact);

            // triggers change detection
            fixture.detectChanges();

            // Simulates the passgae of time, in the passage of time in this case 100 miliseconds
            tick(100);

            // checks to see that the value in the nameInput form field has been changed correctly
            console.log(nameInput.nativeElement.value);
            expect(nameInput.nativeElement.value).toBe('Sal');
        }));


    //<-------------------- Testing for invalide phone number -------------------------->

        // it('should  not update the phone number', fakeAsync( () => {
        //     const newContact = {
        //         id: 1,
        //         name: 'Sal',
        //         email: 'Sal@gmail.com',
        //         number: '12345678901'            // invalid number: too long
        //     };

        //     component.contact = {
        //         id: 2,
        //         name: 'Q',
        //         email: 'Q@gmail.com',
        //         number: '6789012345'
        //     };

        //     component.isLoading = false;
        //     fixture.detectChanges();
            
        //     const nameInput = rootElement.query(By.css('.contact-name'));
        //     tick();
        //     expect(nameInput.nativeElement.value).toBe('Q');
            
        //     // Update the existing contact to the newContact Object
        //     component.updateContact(newContact);

        //     // triggers change detection
        //     fixture.detectChanges();

        //     // Simulates the passgae of time, in the passage of time in this case 100 miliseconds
        //     tick(100);

        //     // checks to see that the value in the nameInput form field has been changed correctly
        //     expect(nameInput.nativeElement.value).toBe('Q')
        // }));

    //  <----------------------- Testing for invalid email  variable-------------------------->

        // it('should  not update the email', fakeAsync( () => {
        //     const newContact = {
        //         id: 1,
        //         name: 'Sal',
        //         email: 'Sal@gmail',          // invalid email: missing .com
        //         number: '12345678901'
        //     };

        //     component.contact = {
        //         id: 2,
        //         name: 'Q',
        //         email: 'Q@gmail.com',
        //         number: '6789012345'
        //     };

        //     component.isLoading = false;
        //     fixture.detectChanges();
            
        //     const nameInput = rootElement.query(By.css('.contact-name'));
        //     tick();
        //     expect(nameInput.nativeElement.value).toBe('Q');
            
        //     // Update the existing contact to the newContact Object
        //     component.updateContact(newContact);

        //     // triggers change detection
        //     fixture.detectChanges();

        //     // Simulates the passgae of time, in the passage of time in this case 100 miliseconds
        //     tick(100);

        //     // checks to see that the value in the nameInput form field has been changed correctly
        //     expect(nameInput.nativeElement.value).toBe('Q')
        // }));
    });
}); 


