export const createProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //Async call to DB
    const firestore = getFirebase().firestore(); 
    const profile = getState().firebase.profile
    const authorId = getState().firebase.auth.uid

    firestore
      .collection("projects")
      .add({
        ...project,
        authorFirstName: profile.firstname,
        authorLastName: profile.lastname,
        authorId,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({ type: "CREATE_PROJECT", project });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_PROJECT_ERROR", err });
      });
  };
};
