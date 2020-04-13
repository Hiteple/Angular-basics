import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'convertLineToSpaces'
})
export class ConvertLineToSpaces implements PipeTransform {
  transform(value: string, character: string): string {
    return value.replace(character, ' ');
  }
}
