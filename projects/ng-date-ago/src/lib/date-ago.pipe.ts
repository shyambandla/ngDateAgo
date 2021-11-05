import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'dateAgo',
    pure: true
})
export class DateAgoPipe implements PipeTransform {

    transform(value: any, args?: any): any {
        if (value) {
            let seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
           console.log(seconds)
            if(seconds>=0){
            if (seconds < 29) // less than 30 seconds ago will show as 'Just now'
                return 'Just now';
            const intervalsKey = [
                "year",
                "month",
                "week",
                "day",
                "hour",
                "minute",
                "second"
            ];
            const intervalsValue = [
               31536000,
            2592000,
           604800,
               86400,
               3600,
               60,
              1
            ];
            let counter;
            for (let i=0;i<intervalsKey.length;i++) {
                counter = Math.floor(seconds / intervalsValue[i]);
                if (counter > 0)
                    if (counter === 1) {
                        return counter + ' ' + intervalsKey[i] + ' ago'; // singular (1 day ago)
                    } else {
                        return counter + ' ' + intervalsKey[i] + 's ago'; // plural (2 days ago)
                    }
            }
        }else if(seconds<0){
// Then
            seconds=seconds*-1;
            
            const intervalsKey = [
                "year",
                "month",
                "week",
                "day",
                "hour",
                "minute",
                "second"
            ];
            const intervalsValue = [
               31536000,
            2592000,
           604800,
               86400,
               3600,
               60,
              1
            ];
            let counter;
            for (let i=0;i<intervalsKey.length;i++) {
                counter = Math.floor(seconds / intervalsValue[i]);
                
                if (counter > 0)
                    if (counter === 1) {
                        return counter + ' ' + intervalsKey[i] + ' left'; // singular (1 day ago)
                    } else {
                        return counter + ' ' + intervalsKey[i] + 's left'; // plural (2 days ago)
                    }
            }
        }
    }

   
        return value;
    
    }
}
