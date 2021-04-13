const nums = [2, 7 ,11 ,15];
const target = 13;

const firstTwoSum = function (nums, target) {
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
}

console.log(firstTwoSum(nums, target));
////////////////////////////////////
 let twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
             if (nums[i] + nums[j] === target) {
                 return [i, j];
             }
        }
    }
};