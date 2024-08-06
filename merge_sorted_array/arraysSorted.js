class Merge {
  constructor(nums1, m, nums2, n) {
    this.nums1 = [-1,0,0,3,3,3,0,0,0];
    this.m = 6;
    this.nums2 = [1,2,2];
    this.n = 3;

    this.#merge();

    //this.#merge2();
  }

  /* merge by Arrays methods  */
  #merge() {
    /* passo 1: unificação dos 2 arrays*/
    let j = 0;
    this.nums1.forEach((value, index) => {
      if (index >= this.n && value == 0) {
        this.nums1[index] = this.nums2[j++];
      }
    });

    /* passo 2: ordenaçao metodo sort() */
    this.nums1.sort((a, b) => a - b);
  }

  /* merge by logic */
  #merge2() {
    /* passo 1: unificação dos 2 arrays*/
    let length = this.m + this.n;
    let nums1 = this.nums1;
    let nums2 = this.nums2;

    let k = 0
    for (let i = this.m; i < length; i++) {
        if (nums1[i] == 0) {
            nums1[i] = nums2[k++];
        }
    }
    /* passo 2: criar um metodo sort */
    this.#sort();
  }

  #sort() {
    let nums1 = this.nums1;
    let length = this.m + this.n;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length; j++) {
        /* validação para efetuar a troca caso valor do nums1[i] for maior que nums1[j] */
        if (nums1[i] > nums1[j] && i < j) {

          let idma = i;
          let idmn = j;

          let vma = nums1[i];
          let vmn = nums1[j];

          nums1[idma] = vmn;
          nums1[idmn] = vma;
          
        }
      }
    }
  }
}

export default Merge;
