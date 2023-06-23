import { useDispatch, useSelector } from "react-redux"
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import { add, edit, remove } from "./User";


 function Home() {

  const { users } = useSelector(state => state.user)
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const dispatch = useDispatch()
  return (
    <>
      <div>

        <label>Id:</label>
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        <br />
        <br />
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

        <Button onClick={() => {
          if (!id || !name) {
            return
          }
          dispatch(add({ id: id, name: name }))
          setId("");
          setName("")
        }}>Add</Button>

      </div>

      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>S.no</th>
              <th>Id</th>
              <th> Name</th>
            </tr>
          </thead>
          <tbody>
          
            {users.map((e, index) => {
              return (

                <tr key={e.id}>

                  <td>{index + 1}</td>
                  <td>{e.id}</td>
                  <td>{e.name}</td>

                  <td onClick={() => dispatch(remove(e.id))}><Button>Delete</Button></td>
                  <td onClick={() => dispatch(edit())}><Button>Edit</Button></td>

                </tr>

              )
            })}

          </tbody>
        </Table>
      </Container>
    </>
  )
}

export default Home


