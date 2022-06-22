// @ts-check
// TypeScript 파일한테 Script 파일을 확인하라고 알리는 것(js에 ts 보호 장치를 사용)

// TypeScript가 코멘트를 읽고 타입을 확인해준다. TypeScript 코드를 작성할 필요 없이 JSDoc코멘트로만 적용
/**
 * Initializes the project
 * @param {object} config
 * @param {boolean} config.debug
 * @param {string} config.url
 * @returns boolean
 */

export function init(config) {
  return true;
}
/**
 * Exits the program
 * @param {number} code
 * @returns number
 */
export function exit(code) {
  return code + 1;
}
