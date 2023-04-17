import { reactive } from "vue";
import { Toasteo } from "../toasteo";

const container = new Toasteo();

const useToasteo = () => reactive(container);
export default useToasteo;
