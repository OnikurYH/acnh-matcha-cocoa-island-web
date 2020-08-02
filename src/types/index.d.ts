export interface Location {
    name: string;
    text: string;
    suffix?: string;
    address?: string;
    x: number;
    y: number;
    width?: number;
    description?: string;
}

export interface LocationBuilding extends Location {
    svg: any;
}

export interface LocationArea extends Location {
    type: 'street' | 'bridge';
    width: number;
    height: number;
    color?: string;
}
