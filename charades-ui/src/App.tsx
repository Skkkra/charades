import { userAtom } from '@atoms/user/user-atom';
import Button from '@ui/button/button';
import clsx from 'clsx';
import { useSetAtom } from 'jotai';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

type UserNameFormData = {
  username: string;
};

export default function App() {
  const setUser = useSetAtom(userAtom);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserNameFormData>({
    defaultValues: { username: '' },
    mode: 'onBlur',
    reValidateMode: 'onChange',
  });

  const onSubmit: SubmitHandler<UserNameFormData> = async ({ username }) => {
    setUser({
      username: username,
      uuid: uuid(),
    });
    navigate('/home');
  };

  return (
    <>
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="username">Username</label>
        <input
          placeholder="Enter your username..."
          {...register('username', { required: true, minLength: 3 })}
        ></input>
        {errors.username && <p>Username must have at least 3 characters</p>}
        <Button
          className={clsx(!!errors.username && 'disabled')}
          disabled={!!errors.username}
          type="submit"
          role="submit"
        >
          Save!
        </Button>
      </form>
    </>
  );
}
