import {add} from 'lodash'
function mySum(arg1: any = 1, arg2: any = 2){
    const result = add(arg1, arg2);
    const hehehaha = "hehehaha"
    console.log(hehehaha)
    return result;
}

export default mySum;