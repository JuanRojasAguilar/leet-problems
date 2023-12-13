/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
	// Mi solución
	for (var i = 0; i < nums.length; i++)
	{
		for (let j = i + 1; j < nums.length; j++)
		{
			let sum = nums[i] + nums[j]
			if (sum == target)
			{
				return [i, j];
			}
		}
	}

// Solucion Chat gpt, aún estudiandola
// 	const numIndices = {};

// 	for (let i = 0; i < nums.length; i++) {
// 		const complement = target - nums[i];
// 		if (complement in numIndices) return [numIndices[complement], i];
// 		numIndices[nums[i]] = i;
// 	}
// 	return null;
// };
}
console.log(twoSum([0, 4, 3, 0], 0));
