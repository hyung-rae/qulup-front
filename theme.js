/**
 * Mantin theme 설정
 * https://mantine.dev/theming/theme-object/
 */

import { createTheme } from '@mantine/core'

export const theme = createTheme({
  defaultRadius: 'sm',
  primaryColor: 'gray',
  components: {
    Button: {
      styles: theme => ({
        root: {
          backgroundColor: 'var(--mantine-color-dark-4)',
          '&:hover': {
            // backgroundColor: '#00b288',
          },
        },
      }),
    },
    // TextInput: {
    //   styles: theme => ({
    //     input: {
    //       color: '#00cc99',
    //       backgroundColor: 'transparent',
    //       borderColor: '#00cc99',
    //       '&:focus': {
    //         borderColor: '#00b288',
    //       },
    //     },
    //   }),
    // },
    // MultiSelect: {
    //   styles: theme => ({
    //     option: {
    //       backgroundColor: '#ffffff',
    //       color: '#000000',
    //     },
    //     dropdown: {
    //       backgroundColor: '#ffffff',
    //     },
    //     input: {
    //       color: '#00cc99',
    //       backgroundColor: 'transparent',
    //       borderColor: '#00cc99',
    //       '&:focus': {
    //         borderColor: '#00b288',
    //       },
    //     },
    //   }),
    // },
    // Select: {
    //   styles: theme => ({
    //     input: {
    //       color: '#00cc99',
    //       backgroundColor: 'transparent',
    //       borderColor: '#00cc99',
    //       '&:focus': {
    //         borderColor: '#00b288',
    //       },
    //     },
    //   }),
    // },
  },
})
