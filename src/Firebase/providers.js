import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { FirebaseAuth } from "./config"

const googleProvider = new GoogleAuthProvider()

export const singInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider)
    const credentials = GoogleAuthProvider.credentialFromResult(result)
    console.warn({ credentials })
  } catch (error) {}
}
