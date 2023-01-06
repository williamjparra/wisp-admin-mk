import { Client } from "../interfaces/Client.interface";
import { Schema, Types, model, Model } from "mongoose";

const ClientSchema = new Schema<Client>(
    {
        name:{
            type: String,
            required: true
        },
        pppoeName: {
            type: String,
            default: null
        },
        ip: {
            type: String,
            default: null
        },
        idDoc: {
            type: String,
            required: true
        },
        address:{
            type: String,
            required: true
        },
        LatLon: {
            lat: {
                type: String,
                required: true
            },
            long: {
                type: String,
                required: true
            }
        },
        parentNode: {
            type: String,
            required: true
        },
        paymentDate: {
            type: String,
            required: true
        },
        baseSpeed: {
            type: Number,
            required: true
        },
        totalPayment: {
            type: Number,
            required: true
        },
        conectionDate: {
            type: String,
            required: true
        },
        monthpaid: [
            {
                year: Number,
                jan: {
                    type: Boolean,
                    required: true
                },
                feb: {
                    type: Boolean,
                    required: true
                },
                mar: {
                    type: Boolean,
                    required: true
                },
                apr: {
                    type: Boolean,
                    required: true
                },
                may: {
                    type: Boolean,
                    required: true
                },
                jun: {
                    type: Boolean,
                    required: true
                },
                jul: {
                    type: Boolean,
                    required: true
                },
                aug: {
                    type: Boolean,
                    required: true
                },
                sep: {
                    type: Boolean,
                    required: true
                },
                oct: {
                    type: Boolean,
                    required: true
                },
                nov: {
                    type: Boolean,
                    required: true
                },
                dec: {
                    type: Boolean,
                    required: true
                },
            }
        ],
        tags: [{
            type: String,
            default: ""
        }]
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const clientModel = model('clients', ClientSchema);
export default clientModel