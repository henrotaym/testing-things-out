import { reactive } from "vue";
import { Toasteo } from "../toasteo";

const container = new Toasteo();
console.log("creating container");

const useToasteo = () => reactive(container);
export default useToasteo;
