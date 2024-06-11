import React from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";


const Signin = () => {
  return (
    <>
      <div className="min-h-screen mt-20 flex justify-center items-center">

        {/* Right side */}
        <div className="flex-1 flex justify-center items-center p-6">
          <div className= " px-8 py-6 w-full max-w-md">
            <h2 className="text-2xl mb-2 text-bold text-center">Sign In </h2>
            <form>
            
              <div className="mb-4">
                <Label htmlFor="email" className="block mb-2">Email</Label>
                <TextInput
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  required
                  className="w-full"
                />
              </div>
              <div className="mb-4">
                <Label htmlFor="password" className="block mb-2">Password</Label>
                <TextInput
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  required
                  className="w-full"
                />
              </div>
              <div className="flex items-center justify-center mb-4">
                <Button gradientDuoTone="purpleToBlue" type="submit" >
                  Sign In 
                </Button>
              </div>
        
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
