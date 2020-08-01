/**
 * Created by vadimdez on 28/06/16.
 */
import { Pipe, Injectable, PipeTransform } from '@angular/core';
import { Todo } from './todo.interface';

@Pipe({
  name: 'filterBy',
  pure: false
})
@Injectable()
export class FilterPipe implements PipeTransform {
  transform(value?: Todo[], category?: string): Todo[] {
    return value && value.filter(todo => todo.category === category);
  }
}
