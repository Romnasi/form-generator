import {data} from "./json/data";
import {render, RenderPosition} from "./utils/utils";
import Form from "./generator/generator";


const formContainer = document.querySelector('.demo');
const formData = JSON.parse(data);

const form = new Form(formData);


render(formContainer, form, RenderPosition.BEFOREEND);

