import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, Input, OnDestroy } from '@angular/core';
import { BindObservable } from 'bind-observable';
import { classToPlain } from 'class-transformer';
import { DynamicFormBuilder, DynamicFormGroup } from 'ngx-dynamic-form-builder';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IAlert } from 'src/app/interfaces/alert.interface';
import { ContactMessageModel } from 'src/app/models/contact-message.model';
import { PageContactModel } from 'src/app/models/page-contact.model';

@Component({
  selector: 'app-contact-preview',
  templateUrl: './contact-preview.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactPreviewComponent implements OnDestroy {

  @Input()
  page: PageContactModel<any>;

  @BindObservable()
  alert: IAlert;
  alert$: Observable<IAlert>;

  fb = new DynamicFormBuilder();
  form: DynamicFormGroup<ContactMessageModel>;

  constructor(
    private httpClient: HttpClient
  ) {
    this.form = this.fb.group(ContactMessageModel);
    this.form.valueChanges.pipe(untilDestroyed(this)).subscribe(
      values =>
        this.form.clearExternalErrorsAsync()
    );
  }
  ngOnDestroy(): void {
  }
  onSendMessage(form: DynamicFormGroup<ContactMessageModel>) {
    form.validateAllFormFields();
    if (form.valid) {
      const sendMessage$ = this.httpClient.post(
        this.page.handlerUrl,
        classToPlain(form.object)
      );
      sendMessage$.pipe(
        catchError(error => {
          if (error.error && error.error.message && Array.isArray(error.error.message)) {
            form.setExternalErrors(
              form.transformValidationErrors(
                error.error.message
              )
            );
          } else {
            const message = (error && error.message) ||
              (error && error.error && error.error.message);
            this.alert = {
              type: 'danger',
              message
            };
          }
          return throwError(error);
        }),
        untilDestroyed(this)
      ).subscribe((data: any) => {
        const message = (data && data.message) ||
          'Message sent successfully!';
        this.alert = {
          type: 'success',
          message
        };
        form.object = new ContactMessageModel();
        setTimeout(_ =>
          form.resetValidateAllFormFields()
        );
      });
    }
  }
}
