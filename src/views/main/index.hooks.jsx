import React, { useState, useEffect } from "react";
import useGetActivities from "../../hooks/getActivities";

const useIndex = () => {
  const [localData, setLocalData] = useState([]);
  const [localDataSearch, setLocalDataSearch] = useState([]);

  const {
    activities: { error, data },
    fetch,
  } = useGetActivities();

  const storeDataLocally = () => {
    fetch();
  };

  useEffect(() => {
    if (Object.keys(data).length !== 0) {
      setLocalData((prevState) => [
        ...prevState.filter(
          (element) => JSON.stringify(element) !== JSON.stringify(data)
        ),
        data,
      ]);

      setLocalDataSearch((prevState) => [
        ...prevState.filter(
          (element) => JSON.stringify(element) !== JSON.stringify(data)
        ),
        data,
      ]);
    }
  }, [data]);

  const deleteData = (key) => {
    setLocalData((prevState) => [
      ...prevState.filter((element) => element.key !== key),
    ]);

    setLocalDataSearch((prevState) => [
      ...prevState.filter((element) => element.key !== key),
    ]);
  };

  const searchActivity = (e) => {
    setLocalData([
      ...localDataSearch.filter((element) =>
        element?.activity.toLowerCase()?.includes(e.target.value.toLowerCase())
      ),
    ]);
  };

  return {
    localData: localData,
    setLocalData: setLocalData,
    storeData: storeDataLocally,
    deleteData: deleteData,
    searchActivity: searchActivity,
  };
};

export default useIndex;
