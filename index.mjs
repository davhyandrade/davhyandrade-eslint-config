import importConfig from "./configs/import.mjs";
import generalConfig from "./configs/general.mjs";
import jestConfig from "./configs/jest.mjs";
import prettierConfig from "./configs/prettier.mjs";

export const configs = {
  general: generalConfig,
  jest: jestConfig,
  prettier: prettierConfig,
  import: importConfig,
};

export default [generalConfig, ...jestConfig, prettierConfig, importConfig];
