class Solution:
    def fourSum(self, nums: List[int], target: int) -> List[List[int]]:
        def NSum(nums, target, N, result, results):
            if len(nums) < N or N < 2 or nums[0] * N > target or nums[-1] * N < target:
                return
            if N == 2:
                l, r = 0, len(nums) - 1
                while l < r:
                    s = nums[l] + nums[r]
                    if s == target:
                        results.append(result + [nums[l], nums[r]])
                        l += 1
                        while l < r and nums[l] == nums[l-1]:
                            l += 1
                    elif s > target:
                        r -= 1
                    else:
                        l += 1
            else:
                for i in range(len(nums) - N + 1):
                    if i == 0 or (i > 0 and nums[i] != nums[i-1]):
                        NSum(nums[i+1:], target - nums[i], N - 1, result+[nums[i]], results)
        results = []
        NSum(sorted(nums), target, 4, [], results)
        return results
