import { PipeTransform, Pipe } from '@angular/core';
import { Club } from './models/club';

@Pipe({
    name: 'clubFilter'
})
export class ClubFilterPipe implements PipeTransform {
    transform(clubs: Club[], searchTitle: string): Club[] {
        if (!clubs || !searchTitle) {
            return clubs;
        }

        return clubs.filter(club =>
            club.title.toLowerCase().indexOf(searchTitle.toLowerCase()) !== -1);
    }
}