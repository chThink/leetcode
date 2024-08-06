class Remove {
  constructor() {
    nums = [3, 2, 2, 3];
    val = 3;
    this.#removeElement(nums,val)
  }

  #removeElement(nums, val) {
    for (let i = 0; i < nums.length; i++) {
      if (val == nums[i]) {
        nums.splice(i, 1); 
        i--
      }
    }

    console.log(nums);
  };
}

export default Remove;





