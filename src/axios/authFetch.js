import { useEffect } from 'react';
import authFetch from '../final/axios/interceptors';

const url = 'https://course-api.com/react-store-products';

const Interceptors = () => {
  const fetchData = async () => {
    const resp = await authFetch('/react-store-products')
    console.log('axios interceptors');
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className='text-center'>interceptors</h2>;
};
export default Interceptors;
