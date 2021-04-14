
////////////////////////////////////
/* const firstTwoSum = function (nums, target) {
    const map = {};
    for (let i = 0; i < nums.length; i++) {
         const value = nums[i];
         const comp = target - nums[i]; 
        
         if (map[comp] !== undefined) {
             return [map[comp], i];
         } else {
             map[value] = i;
         }
    }
}; */


////////////////////////////////////
/*  let twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
             if (nums[i] + nums[j] === target) {
                 return [i, j];
             }
        }
    }
}; */
/////////////////////////////////////

/* const numbers = [2, 4, 5, 17];
const targetTwo = 9;


const testNum = (num1, target) => {
    const map = {};
for (let i = 0; i < num1.length; i++) {
    const value = num1[i];
    const comp = target - value;
    if(map[comp] !== undefined) {
        return [map[comp], i];
    } else {
        map[value] = i;
    }
  }
};
 */

///////////////////////////////

const SecondTwoSum = (nums, target) => {
    const comp = new Map();
    const len = nums.length;

    for (let i = 0; i < len; i++) {
        if (comp[nums[i]] >= 0) {
            return [comp[nums[i]], i];
        }
        comp[target - nums[i]] = i;
    }

    return [];
    
};

const nums = [2, 7 ,11 ,15];
const target = 9;

console.log(SecondTwoSum(nums, target));