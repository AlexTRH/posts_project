import { useState, useEffect } from 'react';
import axios, { AxiosRequestConfig } from 'axios';

const useAxios = <T extends any>(
  config: AxiosRequestConfig
): { data: T | null; loading: boolean; error: string | null } => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios(config)
      .then(response => {
        setData(response.data);
      })
      .catch(err => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [config]);

  return { data, loading, error };
};

export default useAxios;
