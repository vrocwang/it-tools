import { shuffleString } from '@/utils/random';

export function createToken({
  withUppercase = true,
  withLowercase = true,
  withNumbers = true,
  withSymbols = false,
  length = 64,
  alphabet,
  withCustom,
}: {
  withUppercase?: boolean
  withLowercase?: boolean
  withNumbers?: boolean
  withSymbols?: boolean
  length?: number
  alphabet?: string
  withCustom?:string
}) {
  const allAlphabet = alphabet ?? [
    withUppercase ? 'ABCDEFGHIJKLMOPQRSTUVWXYZ' : '',
    withLowercase ? 'abcdefghijklmopqrstuvwxyz' : '',
    withNumbers ? '0123456789' : '',
    withSymbols ? '.,;:!?./-"\'#{([-|\\@)]=}*+' : '',
    withCustom ? withCustom : '',
  ].join('');

  return shuffleString(allAlphabet.repeat(length)).substring(0, length);
}
