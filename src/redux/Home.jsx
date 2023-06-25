import { useDispatch, useSelector } from "react-redux";
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import { add, remove } from "./Tododata";
import { useNavigate } from "react-router-dom";
import "./todo.css"



function Home() {

    const { data } = useSelector(state => state.todo);
    const [input, setInput] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAdd = () => {
        if (!input) {
            return;
        }
        dispatch(add({ id: Date.now(), name: input }));
        setInput("");
    };

    const handleDelete = (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this item");
        if (confirmDelete) {
            dispatch(remove({ id: id }));
        }
    };

    return (

        <Container >
            <div className="mainDiv">
                <input
                    placeholder="Type here!"
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <Button onClick={handleAdd} variant="success">Add</Button>
            </div>

            <Container>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>S.no</th>
                            <th>Tasks</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((e, index) => {
                            return (
                                <tr key={e.id}>
                                    <td>{index + 1}</td>
                                    <td>{e.name}</td>
                                    <td className="button-cell">
                                    <div className="button-group">
                                        <Button onClick={() => handleDelete(e.id)} variant="danger">Delete</Button>
                                        <Button onClick={() => navigate(`edit/${e.id}`)}>Edit</Button>
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </Container>
        </Container>

    );
}

export default Home;
