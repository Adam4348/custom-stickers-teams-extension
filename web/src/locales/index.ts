import zh from './zh';
import en from './en';

export enum Messages {
    upload = 'upload',
    delete = 'delete',
}

export function getLocale(): string {
    return navigator.language || 'en';
}

export function getMessages() {
    return getLocale().startsWith('zh') ? zh : en;
}