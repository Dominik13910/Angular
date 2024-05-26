import { Component } from '@angular/core';

@Component({
  selector: 'app-logowanie',
  templateUrl: './logowanie.component.html',
  styleUrls: ['./logowanie.component.css']
})
export class LogowanieComponent {
  formData = {
    username: '',
    password: ''
  };

  logowanie() {
    // Tutaj można zaimplementować logikę logowania
    if (this.sprawdzPoprawnoscDanych()) {
      console.log('Zalogowano pomyślnie');
    } else {
      console.log('Błąd logowania. Sprawdź dane.');
    }
  }

  sprawdzPoprawnoscDanych(): boolean {
    // Funkcja do sprawdzania poprawności danych logowania
    return this.formData.username === 'przykladowyUzytkownik' && this.formData.password === 'przykladoweHaslo';
  }
}
