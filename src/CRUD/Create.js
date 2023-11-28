import {Field, Form, Formik} from "formik";
import axios from "axios";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

function Create(){
    const [list, setList] = useState([]);
    const navi = useNavigate() ;

    return (
        <>
            <h1>Create Product</h1>
            <Formik initialValues={{
                title: "",
                description: "",
                price: "",
            }}
                    onSubmit={(value) => {
                        CreateProduct(value)
                        console.log(value)
                    }}>
                <Form>
                    <Field type={"text"} placeholder="title" name={'title'} className={"form-control"} required/>
                    <Field type={"text"} placeholder="content" name={'description'} className={"form-control"} required/>
                    <Field type={"text"} placeholder="created_At" name={'price'} className={"form-control"} required/>
                    <button>Thêm</button>
                </Form>
            </Formik>
        </>

    )
    function CreateProduct(value){
        axios.post('http://localhost:3000/products',value).then(res => {
            setList(res.data)
            alert("Oke Done")
            navi("/")
        })
    }
}
export default Create