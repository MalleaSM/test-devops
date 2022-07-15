import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule} from '@angular/common/http/testing';

import { SignInComponent } from './sign-in.component';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('SignInComponent Test', () => {
  let component: SignInComponent;
  let fixture: ComponentFixture<SignInComponent>;
  let router: Router;

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

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(SignInComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  it('should create SignInComponent', () => {
    const fixture = TestBed.createComponent(SignInComponent);
    const app = fixture.componentInstance
    expect(app).toBeTruthy();
  });
});
