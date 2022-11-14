import { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { Creators as UsersActions } from "../../store/ducks/users";

function UserList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log("aqui");
  const { data, loading, pagination } = useSelector((state) => state?.users);
  //  navigate(`/user/${value}`

  let page = Number(pagination?.page);

  useEffect(() => {
    if (!data?.length > 0) {
      dispatch(UsersActions.fetchUsers(1));
    }
  }, [dispatch, data]);

  function nextPage(page) {
    console.log("here >", page + 1);
    return page + 1;
  }

  function backPage(page) {
    if (page > 1) {
      return page - 1;
    }
  }
  console.log(page);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>...</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item?.id}</td>
              <td>{item?.UserName}</td>
              <td>
                <button onClick={() => navigate(`/user/${item.UserName}`)}>
                  Navigate
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <td>
              <button onClick={() => nextPage(page)}>Proxima</button>
            </td>
            <td>Page: {page}</td>
            <td>
              <button onClick={() => backPage(page)} disabled={page <= 1}>
                Voltar
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
