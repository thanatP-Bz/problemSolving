const nums = [2, 7 ,11 ,15];
const target = 9;

const firstTwoSum = function (nums, target) {
    
}



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

console.log(twoSum(nums, target));