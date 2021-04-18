import { SORT_ORDER } from './constants';

// eslint-disable-next-line import/no-anonymous-default-export
export default (data : any[], property: string | number, order = SORT_ORDER.ASCENDING) => {
    const arr = data.slice();
    return arr.sort((a, b) => {
        if (a[property] < b[property])
            return order === SORT_ORDER.ASCENDING ? -1 : 1;
        if ( a[property] > b[property])
            return order === SORT_ORDER.ASCENDING ? 1 : -1;
        return 0;
    });
}