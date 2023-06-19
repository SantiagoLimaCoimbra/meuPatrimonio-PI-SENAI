import { React } from "react";
import '../../../css/App.css';
import '../../../css/styles.scss';
import './newCategory.scss';

import { Link } from "react-router-dom";
import Btn from '../../../Components/btnGreenComponent/btn';
import Input from "../../../Components/inputComponent/input";
import Background from '../../../Components/backgroundComponent/background'
import Menu from '../../../Components/menuComponent/menu';


export default function NewCategory() {
    return (
        <div className="newCategoryPage">
            <Menu />
            <Background />
            <div className="newCategory">
               
                <form className="newCategoryForm">
                <h1>Cadastrar categoria</h1>
                    <div className="inputsCategory">
                        <div className="categoryRow1">
                            <Input
                                id="nameCategory"
                                type={"text"}
                                placeholder={"Nome"}
                            // value={nome}
                            // onChange={(e) => setName(e.target.value)}
                            />
                            <Input
                                id="typeCategory"
                                type={"type"}
                                placeholder={"Tipo"}
                            // value={password}
                            // onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="categoryRow2">
                            <Input
                                id="descriptionCategory"
                                type={"description"}
                                placeholder={"Descrição"}
                            // value={password}
                            // onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="btnsNewCategory">
                        <Link to="/viewCategories">
                            <Btn type={"submit"} btnMessage={"Cadastrar"} />
                        </Link>
                    </div>
                </form>
            </div>
        </div>

    );
}