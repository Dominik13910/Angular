import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms'; // Dodaj import

import { LogowanieComponent } from './logowanie.component';

describe('LogowanieComponent', () => {
  let component: LogowanieComponent;
  let fixture: ComponentFixture<LogowanieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LogowanieComponent],
      imports: [FormsModule] // Dodaj FormsModule do imports
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogowanieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default empty username and password', () => {
    expect(component.formData.username).toEqual('');
    expect(component.formData.password).toEqual('');
  });

  it('should return true for valid credentials in sprawdzPoprawnoscDanych()', () => {
    component.formData.username = 'przykladowyUzytkownik';
    component.formData.password = 'przykladoweHaslo';
    expect(component.sprawdzPoprawnoscDanych()).toBe(true);
  });

  it('should return false for invalid credentials in sprawdzPoprawnoscDanych()', () => {
    component.formData.username = 'invalidUser';
    component.formData.password = 'invalidPassword';
    expect(component.sprawdzPoprawnoscDanych()).toBe(false);
  });

  it('should log success message for valid credentials in logowanie()', () => {
    spyOn(console, 'log');
    component.formData.username = 'przykladowyUzytkownik';
    component.formData.password = 'przykladoweHaslo';
    component.logowanie();
    expect(console.log).toHaveBeenCalledWith('Zalogowano pomyślnie');
  });

  it('should log error message for invalid credentials in logowanie()', () => {
    spyOn(console, 'log');
    component.formData.username = 'invalidUser';
    component.formData.password = 'invalidPassword';
    component.logowanie();
    expect(console.log).toHaveBeenCalledWith('Błąd logowania. Sprawdź dane.');
  });
});
