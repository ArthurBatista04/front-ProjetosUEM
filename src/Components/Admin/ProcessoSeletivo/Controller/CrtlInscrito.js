import { UPDATE } from 'react-admin';

export default async values => {
  const { dataProvider, record, resource } = this.props;

  dataProvider(
    UPDATE,
    resource,
    {
      pagination: { page: 1, perPage: 0 },
      sort: { field: 'id', order: 'DESC' },
      id: record.id,
      data: { pago: values.pago },
      previousData: { pago: record.pago }
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
  this.setState({ showDialog: false });
};
