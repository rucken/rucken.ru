import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Angulartics2 } from 'angulartics2';
import { BindObservable } from 'bind-observable';
import { classToPlain } from 'class-transformer';
import {
  DynamicFormBuilder,
  DynamicFormGroup,
  transformValidationErrors,
} from 'ngx-dynamic-form-builder';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IAlert } from '../../interfaces/alert.interface';
import { ContactMessageModel } from '../../models/contact-message.model';
import { PageContactModel } from '../../models/page-contact.model';
@UntilDestroy()
@Component({
  selector: 'app-contact-preview',
  templateUrl: './contact-preview.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactPreviewComponent {
  @Input()
  page: PageContactModel<any>;

  @BindObservable()
  alert: IAlert;
  alert$: Observable<IAlert>;

  fb = new DynamicFormBuilder();
  form: DynamicFormGroup<ContactMessageModel>;

  constructor(
    private httpClient: HttpClient,
    private angulartics2: Angulartics2
  ) {
    this.form = this.fb.group(ContactMessageModel);
    this.form.valueChanges
      .pipe(untilDestroyed(this))
      .subscribe(() => this.form.clearExternalErrors());
  }
  onSendMessage(form: DynamicFormGroup<ContactMessageModel>) {
    this.angulartics2.eventTrack.next({
      action: 'onSendMessage',
      properties: { category: 'contact-preview' },
    });
    form.validateAllFormFields();
    if (form.valid) {
      const sendMessage$ = this.httpClient.post(
        this.page.handlerUrl,
        classToPlain(form.object)
      );
      sendMessage$
        .pipe(
          catchError((error) => {
            this.angulartics2.eventTrack.next({
              action: 'onSendMessage:fail',
              properties: { category: 'contact-preview' },
            });
            if (
              error.error &&
              error.error.message &&
              Array.isArray(error.error.message)
            ) {
              form.setExternalErrors(
                transformValidationErrors(error.error.message)
              );
            } else {
              const message =
                (error && error.message) ||
                (error && error.error && error.error.message);
              this.alert = {
                type: 'danger',
                message,
              };
            }
            return throwError(error);
          }),
          untilDestroyed(this)
        )
        .subscribe((data: any) => {
          this.angulartics2.eventTrack.next({
            action: 'onSendMessage:success',
            properties: { category: 'contact-preview' },
          });
          const message =
            (data && data.message) || 'Message sent successfully!';
          this.alert = {
            type: 'success',
            message,
          };
          form.object = new ContactMessageModel();
          setTimeout(() => form.resetValidateAllFormFields());
        });
    }
  }
}
