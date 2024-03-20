import { useState, useEffect } from 'react'
import { Api } from '../services/api';

const useGetActivities = () => {
    const [activities, setActivities] = useState({
        error: '',
        data: {}
    });

    const fetch = async () => {

        Api.get("activity").then(function (response) {
            // handle success
            setActivities((prevState) => ({
                ...prevState,
                data: response.data
            }));
        })
            .catch(function (error) {
                // handle error
                console.log(error);
                setActivities((prevState) => ({
                    ...prevState,
                    error: error.message
                }));
            })

    };



    return {
        activities: activities,
        fetch: fetch,
    };
}



export default useGetActivities;