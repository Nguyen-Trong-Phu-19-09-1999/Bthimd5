import {useEffect, useState} from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";

function DisplayProducts(){
    const [list, setList] = useState([]);
    const [check, setCheck] = useState(false);
    useEffect(() => {
        findAllProducts()
    }, [check])
    return(
        <>
            <Link to={'/Create'} type={"button"} className={"btn btn-default"} data-dismiss={"modal"}
                  value={"Cancel"}>Thêm</Link>
            <table>
            <thead>
            <tr>
                <td>#</td>
                <td>Tên SP</td>
                <td>Mô tả</td>
                <td>Giá</td>
                <td colSpan={2}>Thao tác</td>
            </tr>
            </thead>
            <tbody>
            {list.map((item,key) => (
                <tr>
                    <td>{key+1}</td>
                    <td><Link to={'/View/'+ item.id } type={"button"} className={"btn btn-default"} data-dismiss={"modal"}
                              value={"Cancel"}>{item.title}</Link></td>
                    <td>{item.description}</td>
                    <td>{item.price}</td>
                    <td><button> <Link to={'/Update/'+ item.id } type={"button"} className={"btn btn-default"} data-dismiss={"modal"}
                               value={"Cancel"}>Sửa</Link></button></td>
                    <td>
                    <button onClick={()=>Delete(item.id)}>Xóa</button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
        </>
    )
    function findAllProducts() {
        axios.get('http://localhost:3000/products').then(res => {
            setList(res.data)

        })
    }
    function Delete(id){
        return(
            axios.delete('http://localhost:3000/products/' + id).then(() => {
                alert("Delete oke")
                setCheck(!check)
            })
        )
    }
}
export default DisplayProducts;