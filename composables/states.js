//此种方式为命名导出，可以export出多个名称
export const useColor = () => {
  return useState('color', () => '#FFFFFF')
}
export const useUser = () => {
  return useState('user', () => {
    //嵌套useTimes使用
    return {name:"Mike",age:useTimes()};
  });
}
export const usePageTKD = () => {
  return useState('pageTKD', () => {
    return {};
  });
}