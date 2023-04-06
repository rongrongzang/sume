import { Pipe, PipeTransform } from '@angular/core';
import { I18n } from '../i18n';
@Pipe({
  name: 'translate',
})
export class TranslatePipe implements PipeTransform {
  transform = (key: string): string => I18n.translate(key);
}
