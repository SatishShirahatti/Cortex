export const SORT_ORDER = {
    DESCENDING: 0,
    ASCENDING: 1
}

export interface SortParams {
	property?: string;
	order?: number;
}