export interface Accounts {
    data:       Datum[];
    pagination: Pagination;
}

export interface Datum {
    id:                string;
    name:              string;
    primary:           boolean;
    type:              string;
    balance:           Balance;
    created_at:        Date;
    updated_at:        Date;
    resource:          string;
    resource_path:     string;
    currency:          Currency;
    allow_deposits:    boolean;
    allow_withdrawals: boolean;
    portfolio_id:      string;
}

export interface Balance {
    amount:   string;
    currency: string;
}

export interface Currency {
    asset_id: string;
    code:     string;
    color:    string;
    exponent: number;
    name:     string;
    slug:     string;
    type:     string;
    rewards:  null;
}

export interface Pagination {
    ending_before:          null;
    limit:                  number;
    next_starting_after:    string;
    next_uri:               string;
    order:                  string;
    previous_ending_before: null;
    previous_uri:           null;
    starting_after:         null;
}
