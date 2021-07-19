import theme from '../../../../theme';

export const ColorLabels = {
  NotDone: {
    label: 'Не выполнено',
    color: theme.taskPalette.red,
  },
  Done: {
    label: 'Выполнено',
    color: theme.taskPalette.blue,
  },
  OverDone: {
    label: 'Перевыполнено',
    color: theme.taskPalette.green,
  },
  PartiallyDone: {
    label: 'Частично',
    color: theme.taskPalette.orange,
  },
};

export const getColorOfPercent = (donePercent: number) => {
  if (donePercent > 100) {
    return ColorLabels.OverDone.color;
  }
  if (donePercent === 100) {
    return ColorLabels.Done.color;
  }
  if (donePercent > 0 && donePercent < 99) {
    return ColorLabels.PartiallyDone.color;
  }
  return ColorLabels.NotDone.color;
};

export const formatDate = (value: string) => {
  const date = new Date(Date.parse(value));
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  const addZero = (num: number) => (num > 9 ? num : `0${num}`);

  return `${addZero(day)}.${addZero(month)}.${year}`;
};
