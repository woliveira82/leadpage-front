export type User = {
    id: number,
    email: string,
    recovery_email: string,
    password: string,
    old_password: string,
    first_name: string,
    last_name: string,
    created_at: Date,
    is_logged: boolean,
    is_active: boolean,
    image: string
};

export type Campaign = {
    id: number,
    name: string,
    description: string,
    is_active: boolean,
    created_at: Date,
    auto_deactivation: Date,
    auto_activation: Date
};

export type Lead = {
    id: number,
    email: string,
    first_name: string,
    created_at: Date
};

export type Email = {
    id: number,
    title: string,
    body: string
};
