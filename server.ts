import app from "./src/app";
import AppDataSource from "./src/data-source";
const init = async () => {
  const PORT = process.env.PORT || 3000;
  await AppDataSource.initialize();
  app.listen(PORT, () => {
    console.log(`App is running!`);
  });
};
init();