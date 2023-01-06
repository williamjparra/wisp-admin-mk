export interface Client {
    name: string,
    pppoeName: string | null,
    ip: string | null,
    idDoc: string,
    address: string,
    LatLon: {
        lat: string,
        long: string
    },
    parentNode: string,
    paymentDate: string,
    baseSpeed: number,
    totalPayment: number,
    conectionDate: string,
    monthpaid: [Paid],
    tags?: [string],
    status: boolean,
}

export interface Paid {
    year: number,
    jan: boolean,
    feb: boolean,
    mar: boolean,
    apr: boolean,
    may: boolean,
    jun: boolean,
    jul: boolean,
    aug: boolean,
    sep: boolean,
    oct: boolean,
    nov: boolean,
    dec: boolean,
}