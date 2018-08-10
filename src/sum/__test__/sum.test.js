import  sum  from '../sum'

describe("sum",()=>{
  test('add 1 ,2',()=>{
    expect(sum(1,2)).toBe(3)
  })

  test('add 5 ,2', () => {
    expect(sum(5, 2)).toBe(7)
  })
  
})