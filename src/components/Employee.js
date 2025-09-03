import React from 'react'

const Employee = () => {
    const emp = [
        { id: 1, name: "John", department: "IT" },
        { id: 2, name: "Jane", department: "HR" },
        { id: 3, name: "Bob", department: "Finance" },
        { id: 4, name: "Alice", department: "Marketing" },
        { id: 5, name: "Mike", department: "Support" }
        ];
  return (
    <div style={{margin:"20px"}}>
        <h2>
            Product List
        </h2>
        <table border={"1"} cellPadding={"10"} cellSpacing={"0"}>
            <thead>
                <tr style={{backgroundColor:"white"}}>
                    <th>Employee Id</th>
                    <th>Employee Name</th>
                    <th>Department</th>
                </tr>
            </thead>
            <tbody>
                {emp.map((emp1) =>(
                    <tr>
                        <td>{emp1.id}</td>
                        <td>{emp1.name}</td>
                        <td>{emp1.department}</td>
                    </tr>    
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Employee