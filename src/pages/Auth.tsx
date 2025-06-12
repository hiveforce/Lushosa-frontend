import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import SigninForm from "../components/Auth/SigninForm";
import SignupForm from "../components/Auth/SignupForm";
import { useState } from "react";
import ForgotPassword from "../components/Auth/ForgotPassword";

function Auth() {
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  return (
    <div className="flex mx-auto justify-center items-center px-5 py-10">
      {!showForgotPassword && (
        <Tabs
          defaultValue="signin"
          className="w-full border border-primary-header rounded max-w-[424px] sm:shadow-2xl "
        >
          <TabsList className="bg-transparent borde py-8 border-secondary-light-active items-center justify-center flex rounded-none w-full font-semibold text-[20px] ">
            <TabsTrigger
              value="signin"
              className="data-[state=active]:bg-transparent border-b-secondary-light border-2 font-semibold data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-b-primary-custom   w-full rounded-none pb-4 text-secondary-light-active data-[state=active]:text-secondary-custom "
            >
              Sign In
            </TabsTrigger>
            <TabsTrigger
              value="signup"
              className="data-[state=active]:bg-transparent font-semibold data-[state=active]:shadow-none  border-2 border-b-secondary-light data-[state=active]:border-b-2 data-[state=active]:border-b-primary-custom w-full rounded-none pb-4 text-secondary-light-active data-[state=active]:text-secondary-custom"
            >
              Sign Up
            </TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            Make changes to your account here.
          </TabsContent>
          <TabsContent value="signin">
            <SigninForm setShowForgotPassword={setShowForgotPassword} />
          </TabsContent>
          <TabsContent value="signup">
            <SignupForm />
          </TabsContent>
        </Tabs>
      )}

      {showForgotPassword && (
        <ForgotPassword setShowForgotPassword={setShowForgotPassword} />
      )}
    </div>
  );
}

export default Auth;
