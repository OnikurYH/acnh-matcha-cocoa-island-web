export interface Location {
    name: string;
    text: string;
    suffix?: string;
    address?: string;
    x: number;
    y: number;
    width?: number;
}

export interface LocationArea extends Location {
    type: 'street';
    width: number;
    height: number;
    color: string;
}
