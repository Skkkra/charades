import { userAtom } from '@atoms/user/user-atom';
import Button from '@ui/button/button';
import { useSetAtom } from 'jotai';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

export default function Test() {
  const setUuid = useSetAtom(userAtom);

  const handleClear = () => {
    localStorage.clear();
    setUuid((user) => {
      return { ...user, uuid: null };
    });
  };

  const handleSet = () => {
    const newUuid = uuid();
    localStorage.setItem('user-uuid', newUuid);
    setUuid((user) => {
      return { ...user, uuid: newUuid };
    });
  };

  return (
    <div className="flex h-full w-full">
      <Button type="button" onClick={handleClear}>
        Clear uuid
      </Button>
      <Button type="button" onClick={handleSet}>
        Set uuid
      </Button>
      <Link to="/home">HOME</Link>
    </div>
  );
}
