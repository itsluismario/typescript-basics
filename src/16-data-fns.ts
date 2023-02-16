import { subDays, format } from 'date-fns';

const date = new Date(1997, 7, 26);
const rta = subDays(date, 60);
const str = format(rta, 'yyyy/MM/dd');
console.log(str);
