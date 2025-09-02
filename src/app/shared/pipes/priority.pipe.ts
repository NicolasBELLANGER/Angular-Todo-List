import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priority',
})
export class PriorityPipe implements PipeTransform {
  transform(priority: 'low' | 'medium' | 'high'): string {
    const priorityMap = {
      low: 'Faible',
      medium: 'Moyenne',
      high: 'Haute',
    };

    return priorityMap[priority] || priority;
  }
}
