import supabase from "./supabase";
import { supabaseUrl } from "./supabase";

export async function signup({ fullName, email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: { data: { fullName, avatar: "" } },
  });
  if (error) throw new Error(error.message);
  return data;
}

export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  if (error) throw new Error(error.message);

  //   console.log(data);
  return data;
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession(); // retrieve data from local storage (if exists)
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser(); // get user data from supabase

  // console.log(data);

  if (error) throw new Error(error.message);

  return data?.user;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}

export async function updateCurrentUser({ password, fullName, avatar }) {
  // 1. Update password OR fullName
  let updateData; //only one can be true
  if (password) updateData = { password };
  if (fullName) updateData = { data: { fullName } }; //object here follows the signup format above

  const { data, error } = await supabase.auth.updateUser(updateData);
  if (error) throw new Error(error.message);

  // 2. upload the avatar image
  const fileName = `avatar-${data.user.id}-${Math.random()}`;

  const { error: storageError } = await supabase.storage
    .from("avatars")
    .upload(fileName, avatar);

  if (storageError) throw new Error(storageError.message);

  // 3. Update avatar in the user
  const { data: updateUser, error: error2 } = await supabase.auth.updateUser({
    data: {
      avatar: `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}`
    },
  });

  if (error2) throw new Error(error2.message);
  return updateUser;
}
