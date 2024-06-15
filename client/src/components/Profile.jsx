import React from 'react';
import { useSelector } from 'react-redux';
import { TextInput, Button } from 'flowbite-react';

const Profile = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <div className='max-w-lg mx-auto p-6 w-full'>
      <h1 className='my-7 text-center font-semibold text-3xl mb-2'>Profile</h1>

      <div className="flex items-center justify-center w-32 h-32 cursor-pointer overflow-hidden rounded-full border-4 border-gray-200 mx-auto mb-4">
        <img
          src={user.photoURL}
          alt="userProfile"
          className="rounded-full object-cover"
        />
      </div>

      <form className='flex flex-col gap-4'>
        <TextInput
          type="text"
          id="username"
          placeholder="Username"
          defaultValue={user.username}
          className="w-full"
        />

        <TextInput
          type="email"
          id="email"
          placeholder="Email"
          defaultValue={user.email}
          className="w-full"
        />

        <TextInput
          type="password"
          id="password"
          placeholder="Password"
          defaultValue={user.password}
          className="w-full"
        />

        <Button type="submit" gradientDuoTone="purpleToBlue" outline className="w-full">
          Update
        </Button>
      </form>

      <div className="flex justify-between mt-4 text-red-600">
        <span className="cursor-pointer">Delete</span>
        <span className="cursor-pointer">Sign Out</span>
      </div>
    </div>
  );
};

export default Profile;
