import { useState } from "react";

export default function Table({ data, col, handleEdit, handleDelete, handleInfo }) {

    const [editMode, setEditMode] = useState(null);

    const handleEditClick = (index) => {
        setEditMode(editMode === index ? null : index); // Toggle edit mode
    };

    
    const handleEditCell = (rowIndex, cellKey, newValue) => {
        // Update data in state or directly on the server (depends on your setup)
        const updatedData = { ...data[rowIndex] };
        updatedData[cellKey] = newValue;
        // Pass updated data to handleEdit prop (if applicable)
        handleEdit?.(updatedData);        

        // Optionally, trigger API call to update data on the server
    };

    const handleDeleteData = (id) => {
        handleDelete(id);
    }

    const showInfo = (data) => {
        handleInfo(data)
    }

    return (
        <>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        {col.map((col, index) => (
                            <th key={index}>{col}</th>
                        ))}
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((d, index) => (
                        <tr key={index}>
                            {col.map((c) => (
                                editMode === index && c != 'id' ? (
                                    // Render editable cell for the current row in edit mode
                                    <td key={c}>
                                      {/* Implement logic for editing based on column type */}
                                      <input
                                        defaultValue={d[c]}
                                        onChange={(e) => handleEditCell(index, c, e.target.value)}
                                      />
                                    </td>
                                  ) : (
                                    <td key={c}>{d[c]}</td>
                                  )
                            ))}
                            <td>
                                <div className="text-end">
                                    <button className="btn btn-secondary btn-sm rounded" onClick={() => showInfo(d)}><i className="bi bi-info-circle"></i></button>
                                    <button className="btn btn-primary btn-sm rounded mx-2" onClick={() => handleEditClick(index)}>
                                        { editMode === index ? <i className="bi bi-floppy-fill"></i> : <i className="bi bi-pencil-square"></i> }
                                    </button>
                                    <button className="btn btn-danger btn-sm rounded" onClick={() => handleDeleteData(d.id)}><i className="bi bi-trash3-fill"></i></button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}