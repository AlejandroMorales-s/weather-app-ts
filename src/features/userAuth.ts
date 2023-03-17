import {
  createSlice,
  createAsyncThunk,
  ActionReducerMapBuilder,
} from "@reduxjs/toolkit";
//* Firebase
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
  Auth,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { database } from "../libs/firebase";
import { providerLogin } from "../libs/auth";
import { auth } from "../libs/firebase";

type UserData = {
  displayName: string;
  email: string;
  uid: string;
  photoURL: string | undefined;
};

//* Async thunks
export const loginWithEmail = createAsyncThunk(
  "user/login",
  async (
    { password, email }: { password: string; email: string },
    thunkAPI
  ) => {
    let userData: UserData | undefined = undefined;

    await signInWithEmailAndPassword(auth, email, password)
      .then(async (res) => {
        if (!res.user) throw new Error("Unhandled error");

        const { displayName, email, uid, photoURL } = res.user;

        userData = {
          displayName: displayName as string,
          email: email as string,
          uid,
          photoURL: photoURL === null ? undefined : photoURL,
        };
      })
      .catch((error) => {
        throw error;
      });

    if (userData === undefined) {
      throw new Error("User data is undefined");
    }

    return userData as UserData;
  }
);

export const createAccountWithEmail = createAsyncThunk(
  "user/signup",
  async (
    {
      email,
      password,
      name,
    }: { email: string; password: string; name: string },
    thunkAPI
  ) => {
    let userData: UserData | undefined = undefined;

    await createUserWithEmailAndPassword(auth, email, password)
      .then(async (result) => {
        await updateProfile(result.user, {
          displayName: name,
        });
        await setDoc(doc(database, "users", result.user.uid), {
          savedCities: [],
        });
        return {
          uid: result.user.uid,
        };
      })
      .then(({ uid }) => {
        userData = {
          displayName: name,
          email,
          uid,
          photoURL: undefined,
        };
      })
      .catch((error) => {
        throw error;
      });

    if (userData === undefined) {
      throw new Error("User data is undefined");
    }

    return userData as UserData;
  }
);

export const loginWithSocialMedia = createAsyncThunk(
  "user/loginWithProvider",
  async (providerId: string, thunkAPI) => {
    let userData: UserData | undefined = undefined;

    await providerLogin(providerId)
      .then(async (res) => {
        if (!res?.user) throw new Error("Unhandled error");

        const { displayName, email, photoURL, uid } = res.user;

        await setDoc(doc(database, "users", uid), {
          savedCities: [],
        });

        userData = {
          displayName: displayName as string,
          email: email as string,
          uid,
          photoURL: photoURL === null ? undefined : photoURL,
        };
      })
      .catch((error) => {
        throw error;
      });

    if (userData === undefined) {
      throw new Error("User data is undefined");
    }

    return userData as UserData;
  }
);

export const authChangeHandler = createAsyncThunk(
  "user/handlerAuthChange",
  async (auth: Auth) => {
    let userData: UserData | undefined = undefined;

    const authHandler = async (auth: Auth) => {
      return new Promise((resolve, reject) => {
        onAuthStateChanged(auth, async (res) => {
          if (!res) {
            reject("Session closed");
            return;
          }
          const { uid, displayName, email, photoURL } = res;

          resolve({
            displayName,
            email,
            uid,
            photoURL,
          });
        });
      });
    };

    await authHandler(auth)
      .then((res: any) => {
        userData = res;
      })
      .catch((error) => {
        throw error;
      });

    if (userData === undefined) {
      throw new Error("User data is undefined");
    }

    return userData as UserData;
  }
);

export const logout = createAsyncThunk("user/logout", async () => {
  await signOut(auth);

  return initialState;
});

type InitialState = {
  userData: UserData;
  logged: boolean;
  isSubmitting: boolean;
};

//* Creating store
const initialState: InitialState = {
  userData: {
    displayName: "",
    email: "",
    photoURL: undefined,
    uid: "",
  },
  logged: false,
  isSubmitting: false,
};

const options = {
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<InitialState>) => {
    //* Login with email
    builder.addCase(loginWithEmail.pending, (state) => {
      state.isSubmitting = true;
    });
    builder.addCase(loginWithEmail.fulfilled, (state, action) => {
      state.userData = action.payload;

      state.logged = true;
      state.isSubmitting = false;
    });
    builder.addCase(loginWithEmail.rejected, (state) => {
      state.isSubmitting = false;
    });
    //* Create account with email
    builder.addCase(createAccountWithEmail.pending, (state) => {
      state.isSubmitting = true;
    });
    builder.addCase(createAccountWithEmail.fulfilled, (state, action) => {
      state.userData = action.payload;

      state.logged = true;
      state.isSubmitting = false;
    });
    builder.addCase(createAccountWithEmail.rejected, (state) => {
      state.isSubmitting = false;
    });
    //* Login with provider
    builder.addCase(loginWithSocialMedia.pending, (state) => {
      state.isSubmitting = true;
    });
    builder.addCase(loginWithSocialMedia.fulfilled, (state, action) => {
      state.userData = action.payload;

      state.logged = true;
      state.isSubmitting = false;
    });
    builder.addCase(loginWithSocialMedia.rejected, (state, action) => {
      console.log(action.error.message);

      state.isSubmitting = false;
    });
    //* Auth change handler
    builder.addCase(authChangeHandler.pending, (state) => {
      state.isSubmitting = true;
    });
    builder.addCase(authChangeHandler.fulfilled, (state, action) => {
      state.userData = action.payload;

      state.logged = true;
      state.isSubmitting = false;
    });
    builder.addCase(authChangeHandler.rejected, (state) => {
      state.isSubmitting = false;
    });
    //* logout
    builder.addCase(logout.pending, (state) => {
      state.isSubmitting = true;
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.isSubmitting = false;
      state.userData = initialState.userData;
      state.logged = false;
    });
    builder.addCase(logout.rejected, (state) => {
      state.isSubmitting = false;
    });
  },
};

const userSlice = createSlice(options);

//* Selectors
type StateSelect = {
  user: InitialState;
};
export const selectLoggedStatus = (state: StateSelect) => state.user.logged;

export const selectUserData = (state: StateSelect) => state.user.userData;

export const selectIsSubmitting = (state: StateSelect) =>
  state.user.isSubmitting;

export default userSlice.reducer;
