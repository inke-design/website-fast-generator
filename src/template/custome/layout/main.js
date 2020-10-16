export function test() {
  const a = {a: 1, b: 2}
  const c = {d: 1}
  console.log('test function', {...a, ...c})
}