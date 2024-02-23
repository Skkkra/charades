import { useState } from 'react';
import instanceAxios from '../../utils/axios';

export const Home = () => {
  const [response, setResponse] = useState('');
  instanceAxios.get<string>('/').then(({ data }) => {
    setResponse(data);
  });

  return (
    <div className="flex justify-center align-middle w-full">{response}</div>
  );
};
