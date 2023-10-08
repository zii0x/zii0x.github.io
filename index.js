import '@material/web/button/filled-button.js';
import '@material/web/button/outlined-button.js';
import '@material/web/checkbox/checkbox.js';
import { Hct, ColorThemeGenerator } from "@material/material-color-utilities";

// Convert your primary color to HCT.
const primaryColor = Hct.fromInt(0xff4e7abf);

// Generate a color theme based on the primary color.
const generator = new ColorThemeGenerator();
const theme = generator.generate(primaryColor);

// Now you can use the colors in the theme for your website.
console.log(`Primary: ${theme.primary}`);
console.log(`Secondary: ${theme.secondary}`);
console.log(`Background: ${theme.background}`);
console.log(`Surface: ${theme.surface}`);
console.log(`Error: ${theme.error}`);
console.log(`On Primary: ${theme.onPrimary}`);
console.log(`On Secondary: ${theme.onSecondary}`);
console.log(`On Background: ${theme.onBackground}`);
console.log(`On Surface: ${theme.onSurface}`);
console.log(`OnError: ${theme.onError}`);
