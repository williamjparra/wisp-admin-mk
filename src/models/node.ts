import { Node } from "../interfaces/Node.interface";
import { Schema, Types, model, Model } from "mongoose";

const NodeSchema = new Schema<Node>(
    {
        name: {
            type: String,
            required: true
        },
        address: [{
            type: String,
            required: true
        }],
        LatLon: {
            lat: {
                type: String,
                required: true
            },
            long: {
                type: String,
                required: true
            }
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const nodeModel = model('nodes', NodeSchema);
export default nodeModel