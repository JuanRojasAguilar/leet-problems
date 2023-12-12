/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
	for (let i = 0; i < nums.length; i++) {
		let respuesta = nums[i] + nums[i + 1];
		if (respuesta == target) return [i, i + 1];
	}
};
