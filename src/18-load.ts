import _ from 'lodash';

const data = [
  {
    username: 'gustavo',
    role: 'admin',
  },
  {
    username: 'jimena',
    role: 'seller',
  },
  {
    username: 'fabian',
    role: 'seller',
  },
  {
    username: 'francisco',
    role: 'customer',
  },
];

const rta = _.groupBy(data, (item) => item.role);
console.log(rta);
