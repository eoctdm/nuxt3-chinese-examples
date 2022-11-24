
export const useColor = () => {
  return useState('color', () => '#FFFFFF')
}
export const useUser = () => {
  return useState('user', () => {
  
    return {name:"Mike",age:useTimes()};
  });
}
export const usePageTKD = () => {
  return useState('pageTKD', () => {
    return {};
  });
}