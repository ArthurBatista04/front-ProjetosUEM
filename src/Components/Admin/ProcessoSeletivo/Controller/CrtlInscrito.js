import { UPDATE, CREATE } from 'react-admin';

export const HandleProcesso = (self, values) => {
  const { dataProvider, record, resource } = self.props;
  dataProvider(
    CREATE,
    'processosSeletivos',
    {
      pagination: { page: 1, perPage: 0 },
      sort: { field: 'id', order: 'DESC' },
      data: {
        projetoId: self.props.projetoId,
        prerequisitos: values.prerequisitos,
        descricao: values.descricao,
        dataInicio: values.dataInicio
      }
    },
    {
      onSuccess: {
        refresh: true
      },
      onError: {
        notification: {
          body: 'Error: algo deu errado!',
          level: 'warning'
        }
      }
    }
  );
};

export const HandleRank = (self, rank) => {
  const { dataProvider, record, resource } = self.props;

  dataProvider(
    UPDATE,
    resource,
    {
      pagination: { page: 1, perPage: 0 },
      sort: { field: 'id', order: 'DESC' },
      id: record.id,
      data: { rank: rank },
      previousData: { rank: record.rank }
    },
    {
      onSuccess: {
        refresh: true
      },
      onError: {
        notification: {
          body: 'Error: algo deu errado!',
          level: 'warning'
        }
      }
    }
  ).then(res => {});
  self.setState({ showDialog: false });
};
export const HandleAprove = self => {
  const { dataProvider, record, resource } = self.props;

  dataProvider(
    UPDATE,
    resource,
    {
      pagination: { page: 1, perPage: 0 },
      sort: { field: 'id', order: 'DESC' },
      id: record.id,
      data: { aprovado: true },
      previousData: { aprovado: record.aprovado }
    },
    {
      onSuccess: {
        refresh: true
      },
      onError: {
        notification: {
          body: 'Error: algo deu errado!',
          level: 'warning'
        }
      }
    }
  ).then(res => {});
  self.setState({ showDialog: false });
};
export const HandleDisaprove = self => {
  const { dataProvider, record, resource } = self.props;

  dataProvider(
    UPDATE,
    resource,
    {
      pagination: { page: 1, perPage: 0 },
      sort: { field: 'id', order: 'DESC' },
      id: record.id,
      data: { aprovado: false },
      previousData: { aprovado: record.aprovado }
    },
    {
      onSuccess: {
        refresh: true
      },
      onError: {
        notification: {
          body: 'Error: algo deu errado!',
          level: 'warning'
        }
      }
    }
  ).then(res => {});
  self.setState({ showDialog: false });
};
