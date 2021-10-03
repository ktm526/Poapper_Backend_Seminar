function fibo(n){
    if (n <= 2) { 
        return 1;
      }
      
      let i = 1
      let num1 = 0;
      let num2 = 1;
      let result;
      
      while (i < n) {
        answer = num1 + num2;
        num1 = num2;
        num2 = answer;
        i++;
      }
      return answer;
}