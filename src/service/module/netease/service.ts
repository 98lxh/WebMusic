import {Service} from "../../index";
import {BASE_URL, TIMEOUT} from "./config";
const service = new Service(
    BASE_URL,
    TIMEOUT
)

export default service