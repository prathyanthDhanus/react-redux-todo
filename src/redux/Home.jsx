import { useDispatch, useSelector } from "react-redux";
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import { add, remove } from "./Tododata";
import { useNavigate } from "react-router-dom";

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
        dispatch(remove({ id: id }));
    };

    return (
        <>
            <div>
                <input
                    placeholder="Type here"
                    style={{ color: "white" }}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <Button onClick={handleAdd}>Add</Button>
            </div>

            <Container>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>S.no</th>
                            <th>Tasks</th>

                        </tr>
                    </thead>
                    <tbody>
                        {data.map((e, index) => {
                            return (
                                <tr key={e.id}>
                                    <td>{index + 1}</td>
                                    <td>{e.name}</td>
                                    <td onClick={() => handleDelete(e.id)}>
                                        <Button>Delete</Button>
                                    </td>
                                    <td onClick={() => navigate(`edit/${e.id}`)}>
                                        <Button>Edit</Button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </Container>
        </>
    );
}

export default Home;
