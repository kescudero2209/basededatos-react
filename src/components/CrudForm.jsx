import { useState } from "react";
import { BaseColaboradores } from "../components/Colaboradores";

const CrudForm = () => {
    const [task, setTask] = useState(BaseColaboradores);
    return (
      <>
     
        <div id="users">
        <h3>Usuarios actuales</h3>
          <table>
            <thead>
            
              <tr>
                <th>Nombre</th>
                <th>Correo</th>
              </tr>
            </thead>
            <tbody>
              {task.map((el) => (
                <tr key={el.id}>
                  <td>{el.nombre}</td>
                  <td>{el.correo}</td>
                </tr>
              ))}
              
            </tbody>
          </table>
        </div>
      </>
    );
  };
  export default CrudForm;