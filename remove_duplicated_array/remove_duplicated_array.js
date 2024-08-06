class RemoveDuplicated {
  constructor() {
    nums = [1, 1, 2, 2, 3];
    this.#remove(nums);
  }

  #remove(nums) {
    for (let i = 0; i < nums.length; i++) {
      for (let j = 1; j < nums.length; j++) {
        if (nums[i] == nums[j] && i != j) {
          nums.splice(j, 1);
          j--;
        }
      }
    }
    console.log(nums);
  }
}

export default RemoveDuplicated;
