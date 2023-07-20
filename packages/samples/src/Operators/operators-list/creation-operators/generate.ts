import { generate, interval } from 'rxjs'

export const generateOperator = () => {
  const source = generate<number, number>({
    initialState: 0, // 初始值
    condition: x => x < 3, // 条件
    iterate: x => x + 1, // loop
    resultSelector: x => 2*x // 结果选择器
  });
  
  source.subscribe({
    next: value => console.log(value),
    complete: () => console.log('Complete!')
  });  
  // Logs:
  // 0
  // 1
  // 2
  // 'Complete!'
}