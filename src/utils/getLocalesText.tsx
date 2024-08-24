import { IntlShape } from 'react-intl';

export const getLocalesText = (intl: IntlShape, key: string): string => {
  return intl.formatMessage({ id: key });
};