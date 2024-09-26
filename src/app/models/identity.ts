export interface Identity {
    id: number;
    name: string;
    email: string;
}

export const nobody: Identity = { id: -1, name: '', email: '' };