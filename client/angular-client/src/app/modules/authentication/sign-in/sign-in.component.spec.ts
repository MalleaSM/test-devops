import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule} from '@angular/common/http/testing';

import { SignInComponent } from './sign-in.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('SignInComponent Test', () => {
  let component: SignInComponent;
  let fixture: ComponentFixture<SignInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule,
        FormsModule,
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([])
        ],
      declarations: [ SignInComponent ]
    })
    .compileComponents();
  });

  it('should create SignInComponent', () => {
    const fixture = TestBed.createComponent(SignInComponent);
    const app = fixture.componentInstance
    expect(app).toBeTruthy();
  });

  it('should return valid Form', () => {
    const fixture = TestBed.createComponent(SignInComponent);
    const app = fixture.componentInstance
    const form = app.signInForm;
    const username = app.signInForm.controls['username'];
    username.setValue('exampleName')
    expect(form.invalid).toBeFalse();
  });
});
