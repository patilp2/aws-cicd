export interface Profile {
    user_profile_id: string;
    user:            User[];
    user_handle:     string;
}

export interface User {
    username:    string;
    first_name:  string;
    last_name:   string;
    middle_name: string;
    mobile:      number;
    email:       string;
}