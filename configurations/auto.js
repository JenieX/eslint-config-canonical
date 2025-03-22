import * as canonical from './canonical.js';
import * as graphql from './graphql.js';
import * as jsdoc from './jsdoc.js';
import * as json from './json.js';
import * as prettier from './prettier.js';
import * as react from './react.js';
import * as regexp from './regexp.js';
import * as typescript from './typescript.js';
import * as yaml from './yaml.js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  jsdoc.recommended,
  canonical.recommended,
  typescript.recommended,
  regexp.recommended,
  react.recommended,
  prettier.recommended,
  json.recommended,
  yaml.recommended,
  graphql.recommended,
);
