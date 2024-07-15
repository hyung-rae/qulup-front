/**
 * Mantin theme 설정
 * https://mantine.dev/theming/theme-object/
 */

import { createTheme } from '@mantine/core'

export const theme = createTheme({
  defaultRadius: 'sm',
  primaryColor: 'gray',
  components: {
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
