import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import useIndex from "./index.hooks";

function Index() {
  const { localData, storeData, deleteData, searchActivity } = useIndex();

  return (
    <div>
      <div className="mb-3">
        <div className="container">
          <div className="row d-flex mt-5">
            <div className="col-md-12">
              <div className="mb-3 d-flex">
                <input
                  type="text"
                  onInput={(e) => searchActivity(e)}
                  name=""
                  id=""
                  className="form-control"
                />

                <button
                  type="button"
                  className="btn btn-sm bg-black ms-2"
                  onClick={() => storeData()}
                  style={{ width: "120px" }}
                >
                  Add Activity
                </button>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="table-responsive">
                <table className="table table-borderless">
                  <thead>
                    <tr>
                      <th scope="col">Activity</th>
                      <th scope="col">Type</th>
                      <th scope="col">Participants</th>
                      <th scope="col">Price</th>
                      <th scope="col">Accesibility</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {localData.map((val) => (
                      <tr key={val.key}>
                        <td>{val.activity}</td>
                        <td>{val.type}</td>
                        <td>{val.participants}</td>
                        <td>{val.price}</td>
                        <td>{val.accessibility}</td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-sm bg-black ms-2"
                            onClick={() => deleteData(val.key)}
                            style={{ width: "120px" }}
                          >
                            Del
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
