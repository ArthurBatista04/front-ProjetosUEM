import Swal from 'sweetalert2';
import Axios from 'axios';
import PathName from '../../pathConst';

export const HandleProcessosSeletivos = (self, id) => {
  let date = new Date();
  date.setHours(0, 0, 0, 0);
  const filter = {
    where: {
      projetoId: id
    }
  };
  Axios.get(
    `${PathName}/api/processosSeletivos?filter=${JSON.stringify(filter)}`
  )
    .then(res => {
      self.setState({ processosSeletivos: res.data });
    })
    .catch(err => {
      Swal.fire({
        type: 'error',
        title: 'Ops! Algo deu errado',
        text: err.response.data.error.message
      });
    });
};
export const HandleGetProcessosSeletivo = (self, id) => {
  let date = new Date();
  date.setHours(0, 0, 0, 0);
  const filter = {
    where: {
      id: id
    }
  };
  Axios.get(
    `${PathName}/api/processosSeletivos?filter=${JSON.stringify(filter)}`
  )
    .then(res => {
      self.setState({ processoSeletivo: res.data[0] });
    })
    .catch(err => {
      Swal.fire({
        type: 'error',
        title: 'Ops! Algo deu errado',
        text: err.response.data.error.message
      });
    });
};
