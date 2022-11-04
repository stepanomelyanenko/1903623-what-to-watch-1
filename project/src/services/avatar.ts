const AUTH_AVATAR_URL = 'wtw-avatar';

export type Token = string;

export const getAvatarURL = (): Token => {
  const token = localStorage.getItem(AUTH_AVATAR_URL);
  return token ?? '';
};

export const saveAvatarURL = (token: Token): void => {
  localStorage.setItem(AUTH_AVATAR_URL, token);
};

export const dropAvatarURL = (): void => {
  localStorage.removeItem(AUTH_AVATAR_URL);
};
