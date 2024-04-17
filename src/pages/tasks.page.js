import Table from "../components/table/Table"
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
    retrieveTasks,
    retrieveTask,
    createTask,
    updateTask,
    deleteTask
} from "../slices/tasks.slice";

import Moment from 'react-moment';

export default function TaskPage() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const tasks = useSelector(state => state.tasks);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(retrieveTasks());
    }, [dispatch]);

    const newTask = {
        'title': title,
        'description': description
    }

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(createTask(newTask))
        dispatch(retrieveTasks())
    }

    const handleEdit = (data) => {
        dispatch(updateTask(data));
        dispatch(retrieveTasks())
    }

    const handleDelete = (id) => {
        dispatch(deleteTask(id))
    }
    
    const [subcont, setSub] = useState(<></>)
    const showInfo = (data) => {
        dispatch(retrieveTask(data.id))
        setSub(
            <>
                <div className="card mb-3">
                    <div className="card-body">
                        <p className="h5">DETAILS</p>
                        <p>ID: {data.id}</p>
                        <p>TITLE: {data.title}</p>
                        <p>DESCRIPTION: {data.description}</p>
                        <p>CREATED AT: <Moment format="MMMM Do YYYY, h:mm:ss a">{data.createdAt}</Moment></p>
                    </div>
                </div>
            </>
        )
        return subcont
    }

    return (
        <>
            <div>
                <form>
                    <label className="form-label">Name</label>
                    <input className="form-control form-control-sm"
                    value={ title } onChange={(e) => { setTitle(e.target.value) }}></input>
                    <label className="form-label">Description</label>
                    <textarea className="form-control form-control-sm"
                    value={ description } onChange={(e) => { setDescription(e.target.value) }}></textarea>
                    <button className="btn btn-sm btn-primary mt-2"
                    type="button" onClick={(e) => { handleClick(e) }}>Add</button>
                </form>
            </div>
            <p className="h1 fw-bold">Tasks</p>
            { subcont }
            <div className="container-fluid">
                <Table
                    data={tasks}
                    col={['id', 'title', 'description', 'createdAt', 'updatedAt']}
                    handleEdit={handleEdit}
                    handleDelete={handleDelete} 
                    handleInfo={showInfo}/>
            </div>
        </>
    )
}