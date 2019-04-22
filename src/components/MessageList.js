import React from 'react';
import PropTypes from 'prop-types';
import ReactTable from 'react-table';
import { Badge, Button, Input } from 'reactstrap';

const MessageList = ({listData, messageSelect, inputChangeStatus, changeStatus, onMessageSaveEdit, onMessageCancelEdit, onClickEdit}) => {
  return (
    <React.Fragment>
      <ReactTable
        data={listData}
        filterable
        defaultFilterMethod={(filter, row) =>
          String(row[filter.id]) === filter.value}
        columns={[
          {
            columns: [
              {
                Header: "Создано",
                accessor: "createDate",
                filterable: false
              },
              {
                Header: "Статус",
                accessor: "status",
                Cell: row => {
                  if (messageSelect === row.row._original.id) {
                    return (
                      <Input 
                        type="select" 
                        name="changeStatus" 
                        id="changeStatus" 
                        onChange={event => inputChangeStatus(event.target.value)}
                        value={changeStatus}
                      >
                        <option value="Отправлено">Отправлено</option>
                        <option value="Доставлено">Доставлено</option>
                        <option value="Просмотрено">Просмотрено</option>
                      </Input>
                    )
                  } else {
                   return <Badge color="secondary">{row.value}</Badge>
                  }
                },
                filterMethod: (filter, row) => {                          
                  if (filter.value === "Все") {
                    return true;
                  }
                  return row.status === filter.value;
                },
                Filter: ({ filter, onChange }) =>
                  <select
                    onChange={event => onChange(event.target.value)}
                    style={{ width: "100%" }}
                    value={filter ? filter.value : "Все"}
                  >
                    <option value="Все">Все</option>
                    <option value="Отправлено">Отправлено</option>
                    <option value="Доставлено">Доставлено</option>
                    <option value="Просмотрено">Просмотрено</option>
                  </select>
              },
              {
                Header: "Логин",
                accessor: "phoneNumber"
              },
              {
                Header: "ФИО",
                accessor: "fullName"
              },
              {
                Header: "Сообщение",
                accessor: "messageText"
              },
              {
                Header: "",
                filterable: false,
                Cell: row => {
                  if (messageSelect === row.row._original.id) {
                    return ( 
                      <div className="btn-row">
                        <Button 
                          color="success"
                          onClick={()=> onMessageSaveEdit({
                            id: messageSelect,
                            status: changeStatus
                          })}
                        >Save</Button>
                        <Button 
                          color="danger" 
                          onClick={()=> onMessageCancelEdit()}
                        >Cancel</Button>
                      </div>
                    )
                  } else {
                    return ( 
                      <div className="btn-row">
                        <Button 
                          color="info" 
                          onClick={()=> onClickEdit(row.row._original.id, row.row._original.status)}
                        >Edit</Button>
                      </div>
                    )
                  }
                },
              },
            ]
          }
        ]}
        defaultPageSize={10}
        className="-striped -highlight"
      />
    </React.Fragment>
  );
}

MessageList.propTypes = {
  listData: PropTypes.arrayOf(
      PropTypes.shape({
      id: PropTypes.string,
      createDate: PropTypes.string,
      status: PropTypes.string,
      phoneNumber: PropTypes.string,
      fullName: PropTypes.string,
      messageText: PropTypes.string
    }).isRequired
  ),
  messageSelect: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  inputChangeStatus: PropTypes.func, 
  changeStatus: PropTypes.string,
  onMessageCancelEdit: PropTypes.func,
  onMessageSaveEdit: PropTypes.func,
  onClickEdit: PropTypes.func
};

export default MessageList;