export const isToday = (someDate: string) => {
  const taskDate = new Date(someDate?.split('T')[0]);
  const today = new Date();
  return (
    taskDate.getDate() === today.getDate() &&
    taskDate.getMonth() === today.getMonth() &&
    taskDate.getFullYear() === today.getFullYear()
  );
};