const initialState = {
  projects: [
    {
      id: "1",
      title: "help me cook",
      content: "give me a very nice African dish",
    },
    {
      id: "2",
      title: "Design the front page ",
      content:
        "create a very nice looking landing page for the ecommerce website",
    },
    {
      id: "3",
      title: "Walk the old man",
      content:
        "Lets do some exercise today and give the lads some nrun for their money",
    },
  ],
};
export const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("Created Project", action.project);
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("Created Project error", action.err);

      return state;
    default:
      return state;
  }
};
