import { Parafuso } from "../model/Parafuso";

export default class OutputService {
    public printObjectState(obj: Parafuso) {
        console.log("-----------");
        console.log(obj);
    }
}