import { defineConfig } from 'vite-plugin-windicss';

export default defineConfig({
  darkMode: 'class',
  theme: {
    extend: {
      zIndex: {
        '-1': '-1',
      },
      // colors: {
      //   primary: colors.gray,
      // },
      screens: {
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        '2xl': '1600px',
      },
    },
  },
  attributify: {
    prefix: 'w:',
  },
  alias: {
    center: 'flex justify-center items-center',
    hstack: 'flex items-center',
    vstack: 'flex flex-col',
    icon: 'w-6 h-6 fill-current',
    app: 'text-red',
    'app-border': 'border-gray-200 dark:border-dark-300',
  },
});
