// Load the full build.
import _ from 'lodash';

const data = [
  {
    username: 'itsluismario',
    role: 'rockStar'
  },
  {
    username: 'Jacob',
    role: 'noRockStar'
  },
  {
    username: 'Yeyo',
    role: 'noRockStar'
  },
  {
    username: 'Juan',
    role: 'fan'
  }
];

const rta = _.groupBy(data, (item)=> item.role);
console.log(rta);
