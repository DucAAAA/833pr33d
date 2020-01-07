import React from "react"
import { configure, addDecorator } from "@storybook/react"
import { ThemeProvider } from "styled-components"

import defaultTheme from "../src/assests/theme"

addDecorator(storyFn => <ThemeProvider theme={defaultTheme}>{storyFn()}</ThemeProvider>)
configure(require.context('../src', true, /\.stories\.(js|mdx)$/), module);
