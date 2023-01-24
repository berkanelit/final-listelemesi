import { signInWithGooglePopup, createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils";


const SignIn = () => {
   const logGoogleUser = async () => {
      const {user} = await signInWithGooglePopup();
      createUserDocumentFromAuth(user);
   }

   return (
      <div>
         <h1>Giriş</h1>
         <button onClick={logGoogleUser}>
            Google ile giriş yap
         </button>
      </div>
   );
}

export default SignIn;