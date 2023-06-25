import React from 'react'
import Button from 'react-bootstrap/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useRef } from 'react';
import { edit } from './Tododata';

const Edit = () => {

  const { id } = useParams();
  const data = useSelector(state => state.todo.data);
  // console.log(data)

  const filterData = data.filter((e) => e.id == id)

  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();


    const handleSave = () => {
      const inputData = inputRef.current.value;       
      if (inputData == "") {
        return window.alert("Input field is empty")
      }
      dispatch(edit({ id: id, name: inputData }));
      window.alert("content updated successfully")
      navigate("/")                                    //navigate to home page
    }

  return (

    <div>
      {filterData.map((e) => {
        return (
          <input key={e.id} type='text' ref={inputRef} defaultValue={e.name} />
        )

      })}
      <Button onClick={handleSave}>Save</Button>

    </div>

  )
}

export default Edit