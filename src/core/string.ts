export type ContentEncoding = 'binary' | 'base64' | 'quoted-printable';

export type StringTypeOptions = {
  pattern?: string;
  minLength?: number;
  maxLength?: number;
  contentEncoding?: ContentEncoding;
};

export type StringTypeFunction = (options?: StringTypeOptions) => {
  type: 'string';
  pattern?: string;
  minLength?: number;
  maxLength?: number;
  contentEncoding?: ContentEncoding;
};

export const stringType: StringTypeFunction = (options: StringTypeOptions = {}) => ({
  type: 'string',
  ...options
});

