import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PlatformComponent} from './platform.component';
import {MatSnackBarModule} from "@angular/material/snack-bar";

describe('PlatformComponent', () => {
    let component: PlatformComponent;
    let fixture: ComponentFixture<PlatformComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PlatformComponent],
            imports: [
                MatSnackBarModule
            ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PlatformComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
