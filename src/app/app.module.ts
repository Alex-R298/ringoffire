import { NgModule, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartScreenComponent } from './start-screen/start-screen.component';
import { GameComponent } from './game/game.component';
import { PlayerComponent } from './player/player.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DialogAddPlayerComponent } from './dialog-add-player/dialog-add-player.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { GameInfoComponent } from './game-info/game-info.component';
import {MatCardModule} from '@angular/material/card';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyD4ON3GnTSjLo6nUP2wyUli3ZGuIRgmsUo",
  authDomain: "ring-of-fire-fc8c7.firebaseapp.com",
  projectId: "ring-of-fire-fc8c7",
  storageBucket: "ring-of-fire-fc8c7.firebasestorage.app",
  messagingSenderId: "267187753633",
  appId: "1:267187753633:web:59c62c7e48841b0ab0d6e0"
};

@NgModule({
  declarations: [
    AppComponent,
    StartScreenComponent,
    GameComponent,
    PlayerComponent,
    DialogAddPlayerComponent,
    GameInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule,
    FormsModule, 
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
