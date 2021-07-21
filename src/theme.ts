import { createMuiTheme } from '@material-ui/core';

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    taskPalette: TaskPalette;
  }

  interface ThemeOptions {
    taskPalette: TaskPalette;
  }
}

interface TaskPalette {
  red: string;
  blue: string;
  green: string;
  orange: string;
}

const taskPalette = {
  red: '#FFE9E7',
  blue: '#E3F2FC',
  green: '#E9F6EB',
  orange: '#FFF2E2',
};

const themeObject = {
  taskPalette,
};

export default createMuiTheme(themeObject);
